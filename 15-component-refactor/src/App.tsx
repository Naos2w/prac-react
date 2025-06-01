import { useState } from "react";
import "./App.css";
import NoteInputForm from "./components/NoteInputForm";
import NoteList from "./components/NoteList";
import type { Note } from "./types";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const handleSubmit = ({ id, title, content }: Note) => {
    const newNote: Note = {
      id: id,
      title: title,
      content: content,
    };
    setNotes([newNote, ...notes]);
  };
  return (
    <>
      <NoteInputForm onAddNote={handleSubmit} />
      <NoteList notes={notes} />
    </>
  );
}

export default App;
