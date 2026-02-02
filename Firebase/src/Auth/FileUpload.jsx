// src/App.js
import { useEffect, useState } from "react";
import { auth, db, provider, storage } from "../Firebase/firebase";
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
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) listenNotes(u.uid);
    });
    return () => unsub();
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
    return onSnapshot(q, (snap) => {
      setNotes(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
    });
  };

  const addNote = async () => {
    if (!title) return;

    let fileURL = "";

    if (file) {
      const fileRef = ref(storage, `uploads/${user.uid}/${file.name}`);
      await uploadBytes(fileRef, file);
      fileURL = await getDownloadURL(fileRef);
    }

    await addDoc(collection(db, "notes"), {
      title,
      userId: user.uid,
      fileURL,
      createdAt: new Date(),
    });

    setTitle("");
    setFile(null);
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
        <h2>🔥 Firebase Auth + CRUD + File Upload</h2>
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

      <h3>Add Note + File</h3>
      <input
        placeholder="Write note..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <button onClick={editId ? updateNote : addNote}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            {n.title}
            {n.fileURL && (
              <div>
                <a href={n.fileURL} target="_blank" rel="noreferrer">
                  📎 View File
                </a>
              </div>
            )}
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

export default App;
