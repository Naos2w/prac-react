// type
import type { Action, Task } from "../types/task";
import type { FilterAction, Filter } from "../types/filter";
// npm utils
import { v4 as uuidv4 } from "uuid";
// custom hooks
import { useTaskInput } from "../hooks/useTaskInput";
// custom utils
import { generateFakeTasks } from "../utils/fakeData";
import { getFormattedTime } from "../utils/formatTime";
// custom components
import ThemeToggle from "./ThemeToggle";
import { FilterButton } from "./FilterButton";
// MUI
import {
  Box,
  TextField,
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CategoryIcon from "@mui/icons-material/Category";
import TaskIcon from "@mui/icons-material/Task";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { SortButton } from "./SortButton";

type TaskFormProps = {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
  filter: Filter;
  filterDispatch: React.Dispatch<FilterAction>;
  displayedTasks: Task[];
};

export const TaskForm: React.FC<TaskFormProps> = ({
  tasks,
  dispatch,
  filter,
  filterDispatch,
  displayedTasks,
}) => {
  const theme = useTheme();
  const hasNoTasks = tasks.length === 0;
  const hasCompletedTasks = displayedTasks.some((t) => t.completed);
  const completedTaskIds = displayedTasks
    .filter((t) => t.completed)
    .map((t) => t.id);
  const {
    text,
    setText,
    category,
    setCategory,
    textRef,
    categoryRef,
    textError,
    setTextError,
    categoryError,
    setCategoryError,
    validate,
    reset,
  } = useTaskInput();

  const clickAdd = () => {
    if (!validate()) return;
    dispatch({
      type: "ADD_TASK",
      task: {
        id: uuidv4(),
        completed: false,
        category: category,
        text: text,
        create_time: getFormattedTime(),
      },
    });
    reset();
  };
  const handleClickRemove = (event: React.MouseEvent<HTMLElement>) => {
    dispatch({ type: "DELETE_TASK", idx: completedTaskIds });
  };
  const handleClickRemoveAll = (event: React.MouseEvent<HTMLElement>) => {
    dispatch({ type: "RESET" });
    filterDispatch({ type: "RESET" });
    filterDispatch({
      type: "SET_SORT",
      sortBy: "",
      direction: "",
    });
  };
  const handleClickGenData = () => {
    dispatch({ type: "GEN_DATA", tasks: generateFakeTasks() });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h3" sx={{ my: 1, mx: 5 }}>
        Task Manager
      </Typography>
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // xs:手機, sm:平板, md:桌機
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "8px", md: "24px" },
          maxWidth: "1000px",
          width: "100%",
          paddingX: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1, // 彈性展開
            minWidth: { xs: "100%", sm: "200px" }, // 小螢幕滿版
            maxWidth: { md: "200px" }, // 桌機限制最大寬
            overflow: { xs: "hidden" },
          }}
        >
          <CategoryIcon
            sx={{
              color: theme.palette.mode === "light" ? "#1976d2" : "#90caf9",
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            fullWidth
            id="input-category"
            label="Category"
            variant="standard"
            ref={categoryRef}
            required
            value={category}
            error={categoryError}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCategory(event.target.value);
              if (categoryError && event.target.value) setCategoryError(false);
            }}
            helperText="Input the category"
            slotProps={{ htmlInput: { maxLength: 20 } }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1, // 彈性展開
            minWidth: { xs: "100%", sm: "400px" }, // 小螢幕滿版
            maxWidth: { md: "400px" }, // 桌機限制最大寬
            overflow: { xs: "hidden" },
          }}
        >
          <TaskIcon
            sx={{
              color: theme.palette.mode === "light" ? "#1976d2" : "#90caf9",
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            fullWidth
            id="input-task-content"
            label="Content"
            variant="standard"
            ref={textRef}
            required
            value={text}
            error={textError}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setText(event.target.value);
              if (textError && event.target.value) setTextError(false);
            }}
            helperText="Input the content of task"
            slotProps={{ htmlInput: { maxLength: 150 } }}
          />
        </Box>
        <ButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: { md: "1 1 100px", xs: "none" },
          }}
        >
          <Tooltip title="Click to add a task">
            <IconButton onClick={clickAdd}>
              <AddIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Click to remove selected tasks">
            <IconButton
              disabled={hasCompletedTasks}
              onClick={handleClickRemove}
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Click to remove all tasks">
            <IconButton disabled={hasNoTasks} onClick={handleClickRemoveAll}>
              <ClearIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Click to add fake tasks">
            <IconButton onClick={handleClickGenData}>
              <AdsClickIcon />
            </IconButton>
          </Tooltip>

          <FilterButton
            tasks={tasks}
            filter={filter}
            filterDispatch={filterDispatch}
            disabled={hasNoTasks}
          />

          <SortButton
            filter={filter}
            filterDispatch={filterDispatch}
            disabled={hasNoTasks}
          />

          <ThemeToggle />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
