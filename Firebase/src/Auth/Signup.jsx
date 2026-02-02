import { useEffect, useState } from "react";
import { auth, db } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

function Signup() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) fetchNotes(currentUser.uid);
    });
  }, []);

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const fetchNotes = async (uid) => {
    const q = query(collection(db, "notes"), where("userId", "==", uid));
    const snapshot = await getDocs(q);
    setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addNote = async () => {
    if (!title) return;
    await addDoc(collection(db, "notes"), {
      title,
      userId: user.uid,
    });
    setTitle("");
    fetchNotes(user.uid);
  };

  const updateNote = async (id) => {
    await updateDoc(doc(db, "notes", id), { title });
    setEditId(null);
    setTitle("");
    fetchNotes(user.uid);
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    fetchNotes(user.uid);
  };

  if (!user) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Firebase Auth</h2>
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
      </div>
    );
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Welcome {user.email}</h2>
      <button onClick={logout}>Logout</button>

      <h3>My Notes</h3>
      <input
        placeholder="Enter note"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={editId ? () => updateNote(editId) : addNote}>
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

export default Signup;
