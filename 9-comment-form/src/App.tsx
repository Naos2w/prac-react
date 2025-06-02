import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { table } from "console";
// 🛠️ 專案說明
// 請製作一個「留言表單」功能：
// 有兩個欄位：
// 使用者名稱（input）
// 留言內容（textarea）
// 有一個「送出」按鈕
// 使用者點送出後，留言會顯示在下方留言板
// 留言內容與名稱會清空
// 💡 額外挑戰（完成後可選）
// 表單驗證（如：欄位為空時禁止送出）
// 留言時間戳記
// 留言自動捲動至最底部

type Message = {
  name: string;
  content: string;
  time: string;
};

function App() {
  const [msg, setMsg] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const tableRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); //阻止瀏覽器自動刷新頁面，讓你用自己的邏輯（如 setMsg）來處理送出事件
    if (!name.trim() || !content.trim()) return;
    const newMsg: Message = {
      name: name,
      content: content,
      time: new Date()
        .toISOString()
        .replace("T", " ")
        .replaceAll("-", "/")
        .substring(0, 19),
    };

    setMsg([...msg, newMsg]);
    setName("");
    setContent("");
  };

  // 每次 msg 更新後自動捲動到底部
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTo({
        top: tableRef.current.scrollHeight,
        behavior: "smooth", // 加上這行就會平順滾動
      });
    }
  }, [msg]);

  return (
    <div className="App">
      <div className="Title">Leave Your Message</div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="Name"
          type="text"
          placeholder="Please enter your name."
          required
          autoFocus
          maxLength={40}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <textarea
          className="Msg"
          rows={5}
          cols={40}
          placeholder="Please enter your message."
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" id="button" value="Submit" />
      </form>
      <div ref={tableRef} className="wrp">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {msg.map((m, i) => {
              return (
                <tr key={i}>
                  <td>{m.name}</td>
                  <td>{m.content}</td>
                  <td>{m.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
