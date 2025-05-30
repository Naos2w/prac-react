import { useState } from "react";
import "./App.css";

// 🛠️ 專案說明
// 建立一個簡易的登入狀態切換功能：
// 使用 useState 建立 isLoggedIn 狀態（布林值）
// 預設為未登入狀態
// 畫面應根據狀態顯示對應文字：
// 登入前：「請先登入」
// 登入後：「歡迎回來，使用者！」
// 有一個按鈕可切換登入狀態（切換文字：登入 / 登出）
// 💡 額外挑戰（完成後可選）
// 顯示目前登入狀態（用不同顏色或圖示表示）
// 根據狀態改變背景顏色或樣式（登入為綠色，登出為紅色）

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState("");

  const welcomeTxt = isLoggedIn ? `Welcome back, ${loginUser}` : "Please Login";
  const btnText = isLoggedIn ? "Logout" : "Login";
  const loginState = isLoggedIn ? `${loginUser} Login` : "Noone Login";
  const handleLoggin = (user: string) => {
    if (!user) return;
    if (isLoggedIn) {
      setLoginUser("");
      setIsLoggedIn(false);
    } else {
      setLoginUser(user);
      setIsLoggedIn(true);
    }
  };
  return (
    <div className="App">
      <div className="Welcome">
        <span>{welcomeTxt}</span>
      </div>

      <button className="Login" onClick={() => handleLoggin("test")}>
        {btnText}
      </button>

      <div className={isLoggedIn ? "LoginState" : "LogoutState"}>
        <span>{loginState}</span>
      </div>
    </div>
  );
}

export default App;
