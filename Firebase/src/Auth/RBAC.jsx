import { useEffect, useState } from "react";
import { auth, db, provider } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  setDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function RBAC() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setRole(null);
        return;
      }

      setUser(currentUser);

      const userRef = doc(db, "users", currentUser.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          email: currentUser.email,
          role: "user", // default role
        });
        setRole("user");
      } else {
        setRole(snap.data().role);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user || !role) return;

    let q;
    if (role === "admin") {
      q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
    } else {
      q = query(
        collection(db, "notes"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc"),
      );
    }

    const unsubNotes = onSnapshot(q, (snap) => {
      setNotes(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
    });

    return () => unsubNotes();
  }, [user, role]);

  const signup = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", res.user.uid), {
      email: res.user.email,
      role: "user",
    });
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    const res = await signInWithPopup(auth, provider);
    const ref = doc(db, "users", res.user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, { email: res.user.email, role: "user" });
    }
  };

  const logout = async () => signOut(auth);

  const addNote = async () => {
    if (!title) return;
    await addDoc(collection(db, "notes"), {
      title,
      userId: user.uid,
      createdAt: serverTimestamp(),
    });
    setTitle("");
  };

  const updateNote = async () => {
    await updateDoc(doc(db, "notes", editId), { title });
    setEditId(null);
    setTitle("");
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        <h2>🔥 Firebase Role-Based Auth</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={signup}>Signup</button>
        <button onClick={login}>Login</button>
        <button onClick={googleLogin}>Google Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome {user.email}</h2>
      <p>
        <b>Role:</b> {role}
      </p>
      <button onClick={logout}>Logout</button>

      <h3>{role === "admin" ? "All Users Notes" : "My Notes"}</h3>

      <input
        placeholder="Write note..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={editId ? updateNote : addNote}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            {n.title}
            <button
              onClick={() => {
                setEditId(n.id);
                setTitle(n.title);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteNote(n.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RBAC;
