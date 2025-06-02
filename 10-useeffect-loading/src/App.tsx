import { useState, useEffect } from "react";
import "./App.css";

// 🛠️ 專案說明
// 製作一個模擬載入資料的元件：
// 初始狀態顯示「Loading...」
// 2 秒後顯示模擬資料（例如：三則文章標題）
// 使用 useEffect 實作模擬資料載入
// 💡 額外挑戰（完成後可選）
// 模擬錯誤訊息
// 加入重試按鈕（清除資料再重新模擬載入）

function randomEnglish(length: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  const genArticles = () => {
    const success = Math.random() > 0.3;
    if (success)
      setData([randomEnglish(20), randomEnglish(20), randomEnglish(20)]);
    else setData(["Loading fail. Please try again."]);
    setIsLoading(false);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setData([]);
    setTimeout(() => genArticles(), 2000);
  };

  useEffect(() => {
    // 這裡的程式碼會在「元件初次渲染後」執行一次
    const timer = setTimeout(() => {
      genArticles();
    }, 2000);

    // 可選的 return 區塊，用來「清除副作用」
    return () => clearTimeout(timer);
  }, []); // 空陣列代表「只在初次渲染後執行一次」

  return (
    <div className="App">
      <h1>Loading Data Simulater</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((d, i) => {
            return (
              <li key={i} className="article">
                {d}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}

export default App;
