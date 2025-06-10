## 🧠 專案簡介：任務管理系統

建立一個可新增、刪除、分類、切換狀態的任務管理器，儲存於 `localStorage` 中，具備實用性與實戰價值。這個應用會幫助你練習 `useReducer`、`useEffect`、狀態管理與資料持久化。

---

## 🎯 開發目標（驗收標準）：

### MVP（最小可用版本）

- [x] ✅ 任務可新增（含名稱）
- [x] ✅ 任務可標記為「完成 / 未完成」
- [x] ✅ 任務可刪除
- [x] ✅ 所有任務儲存在 `localStorage`，重新整理頁面不會消失

### Bonus 功能（完成後再挑戰）

- [x] 🔍 任務可依狀態篩選（全部 / 已完成 / 未完成）
- [x] 🏷️ 任務分類（如：工作、學習、休閒）
- [x] ⏱️ 任務可顯示建立時間
- [ ] 📦 拖曳排序（進階挑戰）

---

## 🔧 起始檔案架構建議（使用 Vite + React + TypeScript）

```cpp
1-task-manager-pro/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   │   └── TaskItem.tsx
│   ├── reducer/
│   │   └── taskReducer.ts
│   ├── types/
│   │   └── task.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── vite.config.ts
```

---

## 🧩 小提示

### 1. 任務資料格式（task.ts）

```tsx
export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: string; // 可選（可先設成 'General'）
  createdAt: string;
}
```

### 2. 任務狀態管理（taskReducer.ts）

```tsx
type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: string };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
```

---

## 🛠️ 工具建議

- 安裝 UUID 套件產生 ID：`npm install uuid`
- localStorage 儲存與讀取可用 JSON.stringify / JSON.parse
