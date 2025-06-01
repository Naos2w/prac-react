## 🎯 本日目標

學習並實作以下內容：

1. **理解 SRP 原則（Single Responsibility Principle）**
2. **學習元件拆分的時機與策略**
3. **將現有專案重構為多個小元件**
4. **實作：拆分 `筆記應用` 或 `部落格應用` 元件結構**

---

## 1️⃣ SRP 原則是什麼？

> 一個元件應該 **只負責一個功能/目的** 。

### 🔸 常見違反 SRP 的情況

一個元件同時：

- 顯示資料
- 處理表單
- 控制狀態變化
- 管理 API 請求

這樣會讓元件變得龐大難以維護。

### ✅ 正確做法

- 一個元件只負責顯示（例如 NoteCard）
- 另一個元件負責處理資料（例如 NoteList）
- 一個容器元件統籌資料與事件傳遞

---

## 2️⃣ 元件拆分時機與原則

| 時機                   | 說明                     |
| ---------------------- | ------------------------ |
| 結構太長，難以閱讀     | 100 行以上應開始考慮拆分 |
| 一個元件有多個視覺區塊 | 每個視覺單元拆成獨立元件 |
| 有重複使用的區塊       | 將重複邏輯抽成元件       |
| SRP 遭破壞             | 元件做太多事時要切開     |

---

## 3️⃣ 建議練習方向

請你 **選擇以下其中一個專案進行拆分練習** ：

### ✅ 選項 A：**13-note-app-integrated**

- 拆分 `NoteCard`：只負責呈現一張筆記
- 拆分 `NoteList`：接收 notes 資料陣列並渲染 NoteCard
- 拆分 `NoteInputForm`：處理新增筆記表單
- `App.tsx` 負責組合與狀態邏輯

### ✅ 選項 B：**12-blog-with-router**

- 拆分 `Header`、`PostList`、`PostItem`、`PostDetail`
- 使用 `props` 傳遞資料
- 建立資料模型檔案 (可練習解耦)

建議從 A 開始，較為直觀。

---

## 4️⃣ 練習指引

若你選 A（筆記整合應用），以下是建議架構：

```cpp
src/
├── components/
│   ├── NoteCard.tsx          // 單一筆記顯示
│   ├── NoteList.tsx          // 渲染所有筆記
│   └── NoteInputForm.tsx     // 新增筆記表單
├── App.tsx                   // 狀態與邏輯控制
```

> 你可以從原本的 `13-note-app-integrated` 複製過來重構，作為 `15-component-refactor`

---

## 📦 建立新專案（Vite + TypeScript）

```bash
npm create vite@latest 15-component-refactor --template react-ts
cd 15-component-refactor
npm install
npm run dev
```
