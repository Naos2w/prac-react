import type { Task, Action } from "../types/task";
import { Box } from "@mui/material";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  dispatch: React.Dispatch<Action>;
  displayedTasks: Task[];
};

export const TaskList: React.FC<TaskListProps> = ({
  dispatch,
  displayedTasks,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        marginX: "10px",
        marginBottom: 1.5,
        gap: "20px",
      }}
    >
      {displayedTasks.map((task, idx) => (
        <TaskItem key={task.id} id={task.id} task={task} dispatch={dispatch} />
      ))}
    </Box>
  );
};
