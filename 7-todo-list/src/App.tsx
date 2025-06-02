import { useState } from "react";
import "./App.css";
// 🛠️ 專案說明
// 請建立一個「待辦清單 / 備忘錄列表」功能：

// 有一個 input 欄位與「新增」按鈕

// 使用者輸入內容 → 點擊新增 → 顯示在下方列表中

// 每一項任務都要有唯一 key（可用時間戳或 UUID）

// 顯示所有已新增的項目

// 💡 額外挑戰（完成後可選）
// 新增「刪除」按鈕，可刪除個別筆記

// 每一項顯示序號（如：#1、#2、#3）

type Note = {
  id: number;
  addtime: string;
  content: string;
};

const flexStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const btnStyle: React.CSSProperties = {
  padding: "0px 10px",
  margin: "3px",
};
const inputStyle: React.CSSProperties = {
  textAlign: "center",
  width: "300px",
  margin: "3px",
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState("");
  const [delInput, setDelInput] = useState(0);
  const [noteId, setNoteId] = useState(1);
  const handleAddNote = () => {
    if (input.trim() === "") return;
    const newNote: Note = {
      id: noteId,
      addtime: new Date()
        .toISOString()
        .replace("T", " ")
        .replaceAll("-", "/")
        .substring(0, 19),
      content: input,
    };

    setNoteId(noteId + 1);
    setNotes([newNote, ...notes]);
    setInput("");
  };
  const handleDeleteNote = () => {
    if (delInput <= 0) return;
    setNotes(notes.filter((_, idx) => idx !== delInput - 1));
    setDelInput(0);
  };
  return (
    <div style={{ ...flexStyle, flexDirection: "column" }}>
      <h1>To Do List</h1>
      <div style={{ ...flexStyle, flexDirection: "row" }}>
        <input
          style={inputStyle}
          type="text"
          value={input}
          placeholder="What do you want to do today?"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button style={btnStyle} onClick={handleAddNote}>
          Add
        </button>
      </div>
      <div style={{ ...flexStyle, flexDirection: "row" }}>
        <input
          type="number"
          style={inputStyle}
          value={delInput > 0 ? delInput : ""}
          min={1}
          placeholder="Which one do you finish?"
          onChange={(e) => {
            const val = parseInt(e.target.value);
            setDelInput(isNaN(val) || val < 1 ? 1 : val);
          }}
        ></input>
        <button style={btnStyle} onClick={handleDeleteNote}>
          Delete
        </button>
      </div>

      {notes.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Add Time</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((n, idx) => {
              return (
                <tr>
                  <td>{n.id}</td>
                  <td>{n.addtime}</td>
                  <td>{n.content}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Today's To-Do List finished!</p>
      )}
    </div>
  );
}

export default App;
