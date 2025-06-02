import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

// 🎯 小專案內容：兩頁式部落格
// * 首頁（顯示多篇文章清單，每篇有「閱讀更多」按鈕）
// * 詳細頁（顯示該篇文章內容，根據網址 id 取得文章）

// 💡 提示
// * 安裝路由套件
// npm install react-router-dom
// * 網址設計建議：
//   / → 列表頁
//   /post/:id → 詳細頁
// * 使用 useParams 取得 id 再從資料中找出對應文章顯示

// 🔧 專案需求
// * 資料使用靜態假資料即可
// * 每篇文章需包含：標題、內文、作者（自訂即可）
// * 專案命名為：12-blog-with-router
// * 使用 TypeScript
// * 部署至 Vercel 並上傳至 GitHub

type Articles = {
  id: number;
  title: string;
  author: string;
  content: string;
};

const data: Articles[] = [
  {
    id: 1,
    title: "The Quiet Power of Solitude",
    author: "Clara W. Holmes",
    content:
      "In a world that rarely pauses, solitude has become a forgotten treasure. Many perceive it as loneliness, but true solitude is a conscious choice to be alone without feeling lonely. It offers space for reflection, creativity, and emotional reset. Great minds—from writers to scientists—have often retreated into quietness to connect more deeply with their thoughts.In solitude, we rediscover our inner voice. Without distractions, we are better able to identify our desires, fears, and dreams. It's in these moments of silence that new ideas often spark. Whether it’s a walk in the forest or a few hours in a quiet room, solitude is not an escape—it’s a return.",
  },
  {
    id: 2,
    title: "The Rise of Sustainable Architecture",
    author: "Jason L. Park",
    content:
      "Sustainable architecture is more than a trend—it's a necessity. As climate change intensifies, architects and engineers are reimagining how buildings interact with the environment. Green roofs, solar panels, and recycled materials are now becoming standard features of eco-conscious design.Beyond environmental impact, sustainable buildings also promote human well-being. Natural lighting, better airflow, and energy efficiency contribute to healthier indoor spaces. Cities around the world are adopting green building codes, encouraging innovation in this field. As we build the future, sustainability must be at the core of every blueprint.",
  },
  {
    id: 3,
    title: "Digital Minimalism: Reclaiming Your Time Online",
    author: "Elena M. Rivera",
    content:
      "In an age of endless scrolling and constant notifications, digital minimalism offers a refreshing alternative. The philosophy encourages intentional use of technology—focusing on tools that truly add value and eliminating those that don’t. Digital minimalists are not anti-tech; instead, they are pro-purpose. They delete apps that waste time, limit screen usage, and prioritise face-to-face interaction. The benefits are clear: more focus, deeper relationships, and better mental health. It's not about disconnecting completely, but about reconnecting to what matters most.",
  },
];

const Home = () => {
  return (
    <div>
      <h2>Blog Article Lists</h2>
      <ul>
        {data.map((d) => {
          return (
            <li key={d.id}>
              <b>{d.title}</b> by {d.author}{" "}
              <Link to={`/post/${d.id}`}>Read more...</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = data.find((d) => d.id === parseInt(id ?? ""));
  if (!post) return <div>Not Found the article.</div>;
  return (
    <div>
      <h2>{post.title}</h2>
      <div>Author: {post.author}</div>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 在 React Router 裡，/post/:id 的 :id 是路由參數（route parameter） */}
        {/* 冒號 : 表示這個位置是變數，可以匹配任何值。 */}
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
