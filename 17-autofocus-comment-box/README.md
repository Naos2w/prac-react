## 🎯 專案目標

建立一個留言表單，當使用者送出留言後：

1. 該留言會顯示在下方留言列表中
2. 輸入框會清空
3. 輸入框會自動獲得焦點（ **使用 `useRef` 實現** ）

---

## 📚 使用的 React 技術重點

| 技術         | 用途                                     |
| ------------ | ---------------------------------------- |
| `useRef()`   | 取得 DOM 元素（input），在送出留言後聚焦 |
| `useState()` | 儲存目前輸入的文字與留言列表             |
| `onSubmit`   | 處理表單送出邏輯（建議包在 `<form>`中）  |

---

## 🧱 建議檔案結構

你可以在 `src/` 資料夾下建立以下檔案：

```cpp
/src
  └─ /17-autofocus-comment-box
       ├─ AutofocusCommentBox.tsx     ← 主元件
       └─ index.ts                     ← 預設導出元件
```

---

## 🔍 小提示

- `const inputRef = useRef<HTMLInputElement>(null);`
- 使用 `<form onSubmit={handleSubmit}>` 可以使用 `event.preventDefault()`。
- 記得在 `handleSubmit` 中：
  1. 先儲存留言到留言列表
  2. 清空 `input` 值（可用 `setState("")`）
  3. 使用 `inputRef.current?.focus();` 把焦點放回輸入框

### 🎯 目標功能：

> 製作一個輸入表單，當使用者提交留言後， **自動聚焦回輸入框** ，不需要手動點擊。

---

### 📚 useRef 是什麼？

- `useRef()` 是一個 React Hook，可以用來「 **建立一個可以持久保存的參考值** 」。
- 它最常被用來：
  1. **取得 DOM 元素的參照（Ref）** 。
  2. **保存某些資料，但不觸發 re-render** 。

---

### 🧱 基本語法結構

```tsx
import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // 執行提交後，自動聚焦
    inputRef.current?.focus();
  };

  return <input ref={inputRef} />;
}
```

---

### 🧠 注意重點

- `ref={inputRef}`：這樣就把這個 `input` DOM 元素綁到 `useRef` 上了。
- `.current` 屬性會拿到 DOM 元素，你可以操作它（像 `.focus()`、`.value = ''`）。
- `useRef` 的值不會因為重新渲染而重設，所以很適合保存「不需觸發 re-render 的資料」。

---

### ✅ 你這次專案的任務是：

- 做一個簡單的輸入框 + 按鈕
- 使用者輸入留言並按下「提交」
- 提交後：
  1. 顯示該留言
  2. 清空輸入框
  3. 自動聚焦回輸入框（用 `useRef` 實作）
