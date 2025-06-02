import { useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

// 🎯 小專案內容：新增筆記 + 筆記列表
// * 建立一個簡易筆記應用，包含：
// * 輸入欄位讓使用者輸入新筆記
// * 按下按鈕後，筆記會新增到下方清單中
// * 筆記列表會隨著新增而更新
// 🔰 Starter Code 結構提示
// App (父層)
// ├─ AddNote (子層，處理表單輸入)
// └─ NoteList (子層，顯示所有筆記)
// 💡 開發提示
// * 在 App.tsx 中，使用 useState<string[]> 來管理所有筆記
// * 建立 <AddNote onAdd={handleAddNote} />，把新增筆記的方法傳進去
// * 在 AddNote 裡透過 props.onAdd(note) 傳回資料給父層
// * 在 NoteList 中用 props.notes.map() 產生清單

type Note = {
  name: string;
  note: string;
  time: string;
};

function App() {
  const [notes, setNote] = useState<Note[]>([]);
  const handleSubmit = (name: string, note: string) => {
    const newNote: Note = {
      name: name,
      note: note,
      time: new Date()
        .toISOString()
        .replace("T", " ")
        .replaceAll("-", "/")
        .substring(0, 19),
    };
    setNote([...notes, newNote]);
  };
  return (
    <div className="App">
      <AddNote onAdd={handleSubmit} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
