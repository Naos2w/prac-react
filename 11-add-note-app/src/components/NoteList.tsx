type Notes = {
  name: string;
  note: string;
  time: string;
};
type Props = {
  notes: Notes[];
};
const NoteList: React.FC<Props> = ({ notes }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Note</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n, i) => {
            return (
              <tr key={i}>
                <td>{n.name}</td>
                <td>{n.note}</td>
                <td>{n.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
