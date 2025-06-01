import { useState } from "react";
import type { Note } from "../types";

type Props = { onAddNote: (note: Note) => void };
const NoteInputForm: React.FC<Props> = ({ onAddNote }) => {
  // const NoteForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/-/g, "/")
      .substring(0, 19);

    onAddNote({ id, title, content });
    // props.onAddNote({id, title, content});
    setTitle("");
    setContent("");
  };
  return (
    <div className="wrp">
      <h1>Notes Reminder</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          required
          placeholder="Please input the title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          required
          placeholder="Please input the content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" id="button" value="Submit" />
      </form>
    </div>
  );
};

export default NoteInputForm;
