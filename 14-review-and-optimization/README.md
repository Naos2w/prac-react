## 🧠 自訂 Hook 是什麼？

在 React 中，**自訂 Hook** 就是把 **邏輯重複** 、**可以共用的功能**抽成一個函式，以提升可讀性與可重用性。

它本質上就是一個以 `use` 開頭的普通函式，裡面可以使用其它 Hook（如 `useState`、`useEffect` 等），並**回傳狀態與操作函式**給元件使用。

---

## ✅ 使用場景（以 simple-timer 為例）

假設你之前的元件長這樣：

```typescript
const [time, setTime] = useState(0);
useEffect(() => {
  const interval = setInterval(() => setTime((t) => t + 1), 1000);
  return () => clearInterval(interval);
}, []);
```

你可以把這整塊邏輯變成一個 hook：

```typescript
function useTimer(start = 0) {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
```

然後在你的元件中這樣使用：

```typescript
const time = useTimer(0);
```

這樣就會把 **與 timer 相關的邏輯抽出來、簡化元件本身的程式碼** 。

---

## 🔧 你要做的任務

1. 回去找出你 `6-simple-timer` 專案的核心邏輯（例如 `startTimer`, `stopTimer`, `resetTimer`）
2. 將這些邏輯抽出成一個名為 `useTimer()` 的 custom hook
3. 回傳適當的值與操作函式（如 `time`, `start`, `stop`, `reset`）
4. 在元件中使用這個自訂 hook 來控制 timer

---

## ✍️ 結果呈現建議

**元件層：**

```typescript
const { time, start, stop, reset } = useTimer();
```

**Hook 檔案（例如 `hooks/useTimer.ts`）：**

- 放進 `src/hooks` 目錄
- 使用 TypeScript 定義回傳型別
