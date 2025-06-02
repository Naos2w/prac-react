# 12-blog-with-router

這是一個使用 React + TypeScript 製作的簡易部落格專案，示範如何用 `react-router-dom` 實作多頁式（SPA）部落格，包含首頁文章列表與文章詳細頁。

---

## 功能特色

- **首頁**：顯示多篇文章清單，每篇有「閱讀更多」按鈕。
- **詳細頁**：根據網址 id 顯示對應文章內容。
- **路由設計**：使用 React Router v6，支援 `/`（列表頁）與 `/post/:id`（詳細頁）。
- **靜態假資料**：文章資料寫死於前端，無需後端。
- **TypeScript**：全專案型別安全。
- **簡潔 CSS**：自訂樣式，版面簡單易讀。

---

## 專案結構

```
src/
  App.tsx         // 主要路由與頁面邏輯
  App.css         // 樣式
  index.tsx       // 入口
  ...
public/
  index.html      // HTML 模板
```

---

## 如何啟動

1. 安裝依賴
   ```sh
   npm install
   ```
2. 啟動開發伺服器
   ```sh
   npm start
   ```
3. 開啟瀏覽器進入 [http://localhost:3000](http://localhost:3000)

---

## 主要技術

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-router-dom](https://reactrouter.com/)

---

## 路由說明

- `/`文章列表頁，顯示所有文章標題與作者。
- `/post/:id`
  文章詳細頁，根據 id 顯示對應內容。

---

## 參考指令

- `npm start`：啟動開發伺服器
- `npm run build`：打包生產環境檔案
- `npm test`：執行測試

---

## 部署

可直接部署至 [Vercel](https://vercel.com/) 或其他靜態網站服務。

---

## 備註

- 本專案為練習用，資料皆為靜態假資料。
- 若需擴充功能（如新增文章、編輯、刪除），可自行延伸。

---
