import { useContext } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { todoReducer } from "./reducer/todoReducer";
import { TodoList } from "./components/TodoList";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [todos, dispatch] = todoReducer();
  const { theme } = useContext(ThemeContext);
  console.log(`App: ${todos.length}`);
  return (
    <div className={`App ${theme}`}>
      <ThemeToggle />
      <TodoInput todos={todos} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
