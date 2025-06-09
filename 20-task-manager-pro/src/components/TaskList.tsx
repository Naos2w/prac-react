import type { Task, Action } from "../types/task";
import type { Filter } from "../types/filter";
import { TaskItem } from "./TaskItem";
import { Box } from "@mui/material";
type TaskListProps = {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
  filter: Filter;
};
export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  dispatch,
  filter,
}) => {
  console.log("TaskList");
  const filteredTasks = tasks.filter((t) => {
    const matchCategory = filter.category
      ? t.category === filter.category
      : true;
    console.log(`filter.completed: ${filter.completed}`);
    const completedState =
      filter.completed === "all"
        ? undefined
        : filter.completed === "completed"
        ? true
        : filter.completed === "uncompleted"
        ? false
        : undefined;
    console.log(`completedState: ${completedState}`);
    console.log(`t.completed: ${t.completed}`);
    const matchCompleted =
      completedState !== undefined ? t.completed === completedState : true;
    console.log(`matchCompleted: ${matchCompleted}`);
    const matchText = filter.searchText
      ? t.text.toLowerCase().includes(filter.searchText.toLowerCase())
      : true;
    return matchCategory && matchCompleted && matchText;
  });
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
