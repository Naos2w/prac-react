import type { Note } from "../types";
import NoteCard from "./NoteCard";

type Props = { notes: Note[] };
const NoteList: React.FC<Props> = ({ notes }) => {
  if (notes.length === 0) {
    return <div>Not Found any Notes.</div>;
  }
  // change id from date to uuid, so remove this line
  // notes.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime());
  return (
    <div className="notes_container">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
