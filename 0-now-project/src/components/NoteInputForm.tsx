import { useState, useRef } from "react";
import type { Note } from "../types";
import { v4 as uuidv4 } from "uuid";

type Props = { onAddNote: (note: Note) => void };
const NoteInputForm: React.FC<Props> = ({ onAddNote }) => {
  // const NoteForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = uuidv4();

    onAddNote({ id, title, content });
    // props.onAddNote({id, title, content});
    setTitle("");
    setContent("");
    inputRef.current?.focus();
  };
  return (
    <div className="wrp">
      <h1>Notes Reminder</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
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
