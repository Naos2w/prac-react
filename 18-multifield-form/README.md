## 📘 主題：使用 `useReducer` 管理多欄位表單

---

### ✅ 為什麼用 `useReducer`？

當你的表單欄位超過 2-3 個時，使用 `useState` 雖然可以但會變得繁瑣。例如：

```tsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
```

而 `useReducer` 可以集中管理所有欄位的變化，維護性更高。

---

### 🔧 useReducer 架構介紹

1. **定義初始狀態** （通常是欄位物件）：

```tsx
const initialState = {
  name: "",
  email: "",
  message: "",
};
```

2. **定義 reducer 函式** ：

```tsx
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
```

3. **在組件中使用 useReducer** ：

```tsx
const [state, dispatch] = useReducer(formReducer, initialState);
```

---

### 🧪 任務目標：

建立一個多欄位表單元件，具備以下功能：

| 功能            | 說明                                   |
| --------------- | -------------------------------------- |
| 🔹 欄位輸入     | 包含姓名 (name)、Email、留言 (message) |
| 🔹 實時更新狀態 | 輸入時 `dispatch`對應欄位變化          |
| 🔹 送出表單     | 顯示 alert，並 console.log 表單內容    |
| 🔹 重設表單     | 按下重設後清空欄位（dispatch `RESET`） |

---

### 💡 提示：

- `onChange` 事件會觸發：

```tsx
onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })}
```

- `onSubmit` 時記得 `preventDefault()`。

---

### 📁 建議檔案架構：

```tsx
src/
└── 18-multifield-form/
    ├── MultiFieldForm.tsx
    └── index.tsx
```
