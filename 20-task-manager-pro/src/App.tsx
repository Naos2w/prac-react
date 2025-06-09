import { useContext, useEffect, useReducer } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { taskReducer } from "./reducer/taskReducer";
import { filterReducer } from "./reducer/filterReducer";
import { TaskList } from "./components/TaskList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  // const [tasks, dispatch] = taskReducer();
  const { theme } = useContext(ThemeContext);
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filterPart, filterDispatch] = useReducer(
    filterReducer,
    undefined,
    () => {
      const savedFilters = localStorage.getItem("filters");
      return savedFilters
        ? JSON.parse(savedFilters)
        : {
            category: "",
            completed: "all",
            searchText: "",
          };
    }
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    console.log(`filterPart: ${filterPart.searchText}`);
    localStorage.setItem("filters", JSON.stringify(filterPart));
  }, [filterPart]);
  return (
    <div className={`App ${theme}`}>
      <TaskForm
        tasks={tasks}
        dispatch={dispatch}
        filter={filterPart}
        filterDispatch={filterDispatch}
      />
      <TaskList tasks={tasks} dispatch={dispatch} filter={filterPart} />
    </div>
  );
}

export default App;
