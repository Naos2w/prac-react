### 🎯 任務目標：

開發一個「可切換主題的待辦清單應用」，整合以下 React 核心 Hook：

| Hook         | 功能任務說明                     |
| ------------ | -------------------------------- |
| `useContext` | 用來切換「深色 / 淺色主題」      |
| `useReducer` | 管理待辦事項的清單增刪邏輯       |
| `useRef`     | 新增任務時，自動將輸入欄位 focus |

---

### 📦 功能需求：

#### ✅ 主題切換功能（useContext）

- 頁面右上角有一個按鈕，按一下可以在「Light / Dark」模式之間切換。
- 主題要應用到整個應用，包括背景、文字顏色等。
- 用 `ThemeContext` + `ThemeProvider` 實作主題切換邏輯。

#### ✅ 待辦清單（useReducer）

- 輸入框可輸入待辦事項文字。
- 每次新增待辦事項會加入待辦清單（用 reducer 管理）。
- 點選「刪除」按鈕可刪除該筆待辦事項。

#### ✅ 自動聚焦輸入欄位（useRef）

- 每次「新增任務成功後」，輸入框要自動獲得焦點。
- 使用 `inputRef.current.focus()` 實現。

---

### 📁 檔案架構建議：

```cpp
src/
├── App.tsx
├── components/
│   ├── TodoInput.tsx
│   ├── TodoList.tsx
│   └── ThemeToggle.tsx
├── context/
│   └── ThemeContext.tsx
├── reducer/
│   └── todoReducer.ts
└── types/
    └── index.ts
```

---

### 💡 小提醒

- **useContext** ：建立 `ThemeContext` 和 `ThemeProvider`，提供 `theme` 與 `toggleTheme()` 方法。
- **useReducer** ：設計 reducer 處理 `ADD_TODO` 和 `DELETE_TODO` 兩個 action。
- **useRef** ：記得加在輸入框上，然後在 `useEffect` 裡聚焦。

---

### ☑️ 完成條件檢查清單

- [ ] 主題切換功能運作良好
- [ ] 待辦清單能正常新增與刪除
- [ ] 新增後輸入框自動聚焦
- [ ] 使用 TypeScript 撰寫，型別定義良好
- [ ] 設計乾淨，元件有拆分
