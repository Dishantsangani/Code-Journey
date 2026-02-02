// src/App.js
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
  orderBy,
} from "firebase/firestore";

function SocialSignup() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) listenNotes(currentUser.uid);
    });
    return () => unsubAuth();
  }, []);

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const listenNotes = (uid) => {
    const q = query(
      collection(db, "notes"),
      where("userId", "==", uid),
      orderBy("createdAt", "desc"),
    );
    return onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((d) => ({ ...d.data(), id: d.id })));
    });
  };

  const addNote = async () => {
    if (!title) return;
    await addDoc(collection(db, "notes"), {
      title,
      userId: user.uid,
      createdAt: new Date(),
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
        <h2>🔥 Firebase Auth + CRUD Pro</h2>
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
      <button onClick={logout}>Logout</button>

      <h3>My Notes</h3>
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

export default SocialSignup;
