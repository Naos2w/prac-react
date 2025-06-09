import type { Task, Action } from "../types/task";
import { Box, Card, Checkbox, Typography } from "@mui/material";

type TaskItemProps = {
  task: Task;
  id: string;
  dispatch: React.Dispatch<Action>;
};

export const TaskItem: React.FC<TaskItemProps> = ({ task, id, dispatch }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ display: "flex", justifyContent: "flex-end", fontSize: "15px" }}
          component="div"
        >
          {task.category}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={() => {
              dispatch({
                type: "TOGGLE_TASK",
                id: id,
              });
            }}
          />
          <Box
            sx={{
              maxHeight: "80px",
              overflowY: "auto",
              width: "100%",
              margin: "4px auto",
              "&::-webkit-scrollbar": {
                width: "6px",
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#bdbdbd",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#888",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "#bdbdbd transparent",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                whiteSpace: "normal",
                wordBreak: "break-word",
                textAlign: "left",
              }}
            >
              {task.text}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "12px",
          marginTop: "10px",
        }}
        component="div"
      >
        {task.create_time}
      </Typography>
    </Card>
  );
};
