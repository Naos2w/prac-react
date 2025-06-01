import type { Note } from "../types";

type Props = { notes: Note[] };
const NoteList: React.FC<Props> = ({ notes }) => {
  if (notes.length === 0) {
    return <div>Not Found any Notes.</div>;
  }
  const header = Object.keys(notes[0]);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={"header_" + i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {notes.map((n, i) => (
            <tr key={i}>
              <td>{n.id}</td>
              <td>{n.title}</td>
              <td>{n.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
