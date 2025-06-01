import type { Note } from "../types";

type Props = { note: Note };
const NoteCard: React.FC<Props> = ({ note }) => {
  return (
    <div className="notecard">
      <div className="note_title">{note.title}</div>
      <p className="note_content">{note.content}</p>
      <div className="note_id">{note.id}</div>
    </div>
  );
};

export default NoteCard;
