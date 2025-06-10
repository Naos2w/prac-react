import type { Task, Action, dTaskAct } from "../types/task";
import type { Filter } from "../types/filter";
import { TaskItem } from "./TaskItem";
import { Box } from "@mui/material";
import { useEffect } from "react";
type TaskListProps = {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
  filter: Filter;
  displayedTasks: Task[];
  dTasksDispatch: React.Dispatch<dTaskAct>;
};
export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  dispatch,
  filter,
  displayedTasks,
  dTasksDispatch,
}) => {
  const filteredTasks: Task[] = tasks.filter((t) => {
    const matchCategory = filter.category
      ? t.category === filter.category
      : true;

    const completedState =
      filter.completed === "all"
        ? undefined
        : filter.completed === "completed"
        ? true
        : filter.completed === "uncompleted"
        ? false
        : undefined;

    const matchCompleted =
      completedState !== undefined ? t.completed === completedState : true;

    const matchText = (() => {
      if (!filter.searchText) return true;

      try {
        // 將搜尋文字中的 '*' 替換成 '.*'，並避免 RegExp injection
        const escaped = filter.searchText.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );
        const pattern = escaped.replace(/\\\*/g, ".*"); // 將原本的 '*' 替換為 .*
        const regex = new RegExp(`^${pattern}$`, "i"); // 'i' 表示不區分大小寫
        return regex.test(t.text);
      } catch (e) {
        console.error("Invalid regex pattern", e);
        return false;
      }
    })();
    return matchCategory && matchCompleted && matchText;
  });
  useEffect(() => {
    displayedTasks =
      filteredTasks && tasks && filteredTasks.length !== tasks.length
        ? filteredTasks
        : tasks;
    dTasksDispatch({ type: "UPDATE_TASK", tasks: displayedTasks });
  }, [filter]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        marginX: "10px",
        gap: "20px",
      }}
    >
      {filteredTasks.map((task, idx) => {
        return (
          <TaskItem
            task={task}
            id={task.id}
            key={"task" + idx}
            dispatch={dispatch}
          />
        );
      })}
    </Box>
  );
};
