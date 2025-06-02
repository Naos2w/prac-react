import { useState } from "react";
import type { Note } from "./types";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const handleAddNote = ({ id, title, content }: Note) => {
    const newNote: Note = {
      id: id,
      title: title,
      content: content,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} />
    </>
  );
}

export default App;
