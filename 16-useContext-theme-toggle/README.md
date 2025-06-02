## 🎯 主題目標：學會使用 `useContext` 建立全局狀態

### 專案任務：製作一個「 **主題切換按鈕** 」，在淺色 / 深色模式之間切換整個畫面風格。

---

## 🔧 你將學會的技能

| 技術                    | 用法說明                                |
| ----------------------- | --------------------------------------- |
| `React.createContext()` | 建立一個 context 用來共享資料（如主題） |
| `useContext()`          | 在元件中使用 context 裡的值             |
| `Context Provider`      | 包住元件樹，提供 context 值             |
| 主題切換邏輯            | 利用布林值或字串狀態控制樣式類別        |

---

## 📦 架構說明

你會建立以下檔案結構：

```cpp
src/
├── App.tsx
├── ThemeContext.tsx ← ⬅️ 這是新主角
├── components/
│   ├── ThemeToggle.tsx
│   └── ...其他元件
├── index.css ← 放共用主題樣式
```

---

## 🧠 實作邏輯流程

### 1. 建立 Context

在 `ThemeContext.tsx` 中：

- 建立一個 `ThemeContext`
- 提供 `theme`（例如："light" / "dark"）
- 提供 `toggleTheme` 函式
- 用 `ThemeProvider` 包住 `App`

### 2. 使用 Context

在子元件（例如 `ThemeToggle.tsx` 或任何你想控制主題的地方）：

- 用 `useContext(ThemeContext)` 取得 `theme` 和 `toggleTheme`
- 根據主題加上樣式 class（如 `dark-mode`, `light-mode`）

### 3. 主體樣式切換

你可以在 `App.tsx` 加入：

```tsx
<div className={`app ${theme}`}>
```

然後在 `index.css` 控制這兩種主題色系。

---

## 🎯 專案挑戰重點

- [ ] ✅ Context 狀態與 Provider 是否設計清晰？
- [ ] ✅ `useContext` 是否正確取得資料？
- [ ] ✅ 切換按鈕是否能觸發變化？
- [ ] ✅ 主題樣式是否有應用到全頁？

---

## ⏭️ 下一步

你可以現在開始建構以下內容：

### ➤ **任務**

製作一個可切換主題的應用程式，具備：

- 「主題切換按鈕」：點一下可以從 Light 切換為 Dark，反之亦然。
- `ThemeContext.tsx` 作為共享主題狀態邏輯中心
- 樣式要有明顯變化（例如背景、文字顏色）
- 可選挑戰：讓切換狀態保存在 `localStorage`

---

## 🔧 一、`ThemeContext.tsx` 基本結構解析

這個檔案會包含三個主要部分：

### 1. 建立 Context

你需要用 `React.createContext` 建立一個主題上下文。

```tsx
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light", // 預設主題
  toggleTheme: () => {}, // 切換主題的函式
});
```

### 2. 建立 Provider 組件

這個組件會提供 `theme` 狀態和 `toggleTheme` 函式給整個 App 使用：

```tsx
import { useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 3. 包住整個 `<App />`

你要在 `main.tsx` 或 `main.jsx/tsx` 裡使用這個 Provider 包住整個 App：

```tsx
import { ThemeProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

---

## 🧠 使用邏輯（在元件中）

當你要在元件中使用 `theme` 或 `toggleTheme` 時，就可以這樣：

```tsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      切換為 {theme === "light" ? "深色" : "淺色"} 主題
    </button>
  );
};
```

---

## 🎨 建議樣式結構

在 `index.css` 中新增主題樣式：

```css
.app.light {
  background-color: white;
  color: black;
}

.app.dark {
  background-color: #1a1a1a;
  color: white;
}
```

然後在 `App.tsx` 中根據主題加入 class：

```tsx
const { theme } = useContext(ThemeContext);

return <div className={`app ${theme}`}>...</div>;
```

---

## ⏭️ 接下來建議步驟

1. 建立 `ThemeContext.tsx`，實作 Context 和 Provider。
2. 在 `main.tsx` 裡用 `ThemeProvider` 包住 `<App />`。
3. 在 `App.tsx` 中使用 `useContext` 取得 `theme` 來加上樣式 class。
4. 建立一個 `ThemeToggle` 元件，點擊可切換主題。
5. 用 CSS 實作 `.light` / `.dark` 主題風格。
