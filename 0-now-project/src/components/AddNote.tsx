import { useState } from "react";

type Props = { onAdd: (name: string, note: string) => void };

const AddNote: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(name, note);
    setName("");
    setNote("");
  };

  return (
    <div className="wrp">
      <h1 className="title">Note</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          required
          placeholder="Please input your name"
          className="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={note}
          required
          placeholder="Please input your note"
          className="note"
          onChange={(e) => setNote(e.target.value)}
        />
        <input type="submit" id="button" value="Submit" />
      </form>
    </div>
  );
};

export default AddNote;
