# 🔢 專案名稱：13-note-app-integrated

## **🧩 專案目標：**

打造一個簡單的「筆記應用」，整合兩個核心功能：

#root {

max-width: 1280px;

margin: 0auto;

padding: 2rem;

text-align: center;

}

.title {

font-size: 50px;

font-weight: 500;

margin: 25px;

}

.form {

display: flex;

justify-content: center;

flex-direction: column;

align-items: center;

gap: 10px;

}

.name {

width: 400px;

font-size: 20px;

}

.note {

width: 400px;

font-size: 20px;

}

textarea {

resize: none;

}

#button {

font-size: 20px;

}

.wrp {

max-height: 500px;

overflow-y: auto;

margin: 25px;

}

.article {

gap: 15px;

}

table {

margin: 15px;

border: 2pxsolidrgb(255, 255, 255);

letter-spacing: 1px;

max-width: 400px;

}

thead {

background-color: rgb(41, 99, 138);

}

th,

td {

border: 1pxsolidrgb(255, 255, 255);

padding: 8px10px;

}

tbody > tr > td:nth-child(2) {

text-align: center;

word-break: break-all;

white-space: normal;

}

tbody > tr:nth-of-type(even) {

background-color: rgb(101, 101, 104);

}

tbody > tr > td:first-child,

tbody > tr > td:nth-child(2) {

text-align: center;

}

## 📚 學習重點：

1. 父子元件間的資料與事件傳遞

- 父層（App）：負責管理筆記陣列的狀態（useState）
- 子層（NoteForm）：提交資料後，透過 props 傳遞「新增筆記的事件處理函式」給父層
- 子層（NoteList）：透過 props 接收筆記資料並顯示

**🔁 單向資料流（unidirectionaldataflow）**

> React 是由上而下（父 → 子）傳遞資料，子元件若要改變父元件的狀態，需透過 callback 傳遞事件處理函式。

## 🏗️ 架構規劃：

```cpp
src/
├── App.tsx // 父元件，管理筆記資料與整合子元件
├── components/
│ ├── NoteForm.tsx // 表單元件：輸入標題與內容，提交筆記
│ └── NoteList.tsx // 顯示筆記列表
└── types/
    └── index.ts         // 定義 Note 類型（interface）
```

## 🛠️ 技術任務拆解：

✅ 任務 1：定義 Note 類型

- 使用 TypeScript 的 interface 定義一個 Note 型別（包含 id、title、content）

✅ 任務 2：在 App.tsx 中建立筆記狀態（使用 useState<Note[]>）

- 初始為空陣列
- 撰寫一個 handleAddNote(note: Note) 方法，將新筆記加入狀態

✅ 任務 3：建立 NoteForm.tsx 元件

- 使用兩個 input（標題 + 內容）
- 按下送出按鈕後，調用傳入的 onAddNote(note) props
- 提醒：表單送出時要記得使用 e.preventDefault()

✅ 任務 4：建立 NoteList.tsx 元件

- 接收筆記陣列作為 props
- 用 .map() 渲染每一筆筆記

## 💡 提示與觀念釐清：

📌 props 傳遞函式的方式

```typescript
<NoteFormonAddNote={handleAddNote} />
```

- 父層定義函式 handleAddNote
- 傳遞給子層 NoteForm，讓它在表單送出時使用

📌 每一筆筆記需要有唯一 id

> 你可以用 Date.now() 或 crypto.randomUUID() 來建立簡單 id（不要用 index）
