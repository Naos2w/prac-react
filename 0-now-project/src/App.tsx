import { useMemo, useEffect, useReducer } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { taskReducer } from "./reducer/taskReducer";
import { filterReducer } from "./reducer/filterReducer";
import { getFilteredAndSortedTasks } from "./utils/taskFilterAndSort";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { TaskList } from "./components/TaskList";

function App() {
  // const [tasks, dispatch] = taskReducer();
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
            sortBy: "",
            sortDirection: "",
          };
    }
  );

  const displayedTasks = useMemo(() => {
    return getFilteredAndSortedTasks(tasks, filterPart);
  }, [tasks, filterPart]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filterPart));
  }, [filterPart]);

  const theme = useTheme();

  return (
    <Box className="App">
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light" ? "#FCFCFC" : "#05070A",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TaskForm
          tasks={tasks}
          dispatch={dispatch}
          filter={filterPart}
          filterDispatch={filterDispatch}
          displayedTasks={displayedTasks}
        />
        <TaskList dispatch={dispatch} displayedTasks={displayedTasks} />
      </Box>
    </Box>
  );
}

export default App;
