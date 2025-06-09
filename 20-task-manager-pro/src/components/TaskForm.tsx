import { useEffect, useRef, useState } from "react";
import type { Action, Task } from "../types/task";
import type { FilterAction, Filter } from "../types/filter";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  TextField,
  ButtonGroup,
  IconButton,
  Tooltip,
  Popover,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Icon,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import TaskIcon from "@mui/icons-material/Task";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import SortIcon from "@mui/icons-material/Sort";
import { Sort } from "@mui/icons-material";

type TaskFormProps = {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
  filter: Filter;
  filterDispatch: React.Dispatch<FilterAction>;
};

export const TaskForm: React.FC<TaskFormProps> = ({
  tasks,
  dispatch,
  filter,
  filterDispatch,
}) => {
  const uuid = uuidv4();
  const textRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const removeEnabled =
    Array.isArray(tasks) && tasks.every((t) => !t.completed);
  const resetEnabled = Array.isArray(tasks) && tasks.length <= 0;
  const resetNumbers = Array.isArray(tasks)
    ? tasks
        .map((t, idx) => {
          if (t.completed) return idx;
        })
        .filter((t) => t !== undefined)
    : [];
  const [text, setText] = useState("");
  const [textError, setTextError] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState("");

  const clickAdd = () => {
    // e.preventDefault();
    if (!category) {
      setCategoryError(true);
      textRef.current?.focus();
      return;
    }
    if (!text) {
      setTextError(true);
      categoryRef.current?.focus();
      return;
    }
    setTextError(false);
    setCategoryError(false);

    console.log("Submit");
    dispatch({
      type: "ADD_TASK",
      task: {
        id: uuid,
        completed: false,
        category: category,
        text: text,
        create_time: new Date()
          .toISOString()
          .replace("T", " ")
          .replace(/-/g, "/")
          .substring(0, 19),
      },
    });
    setText("");
    setCategory("");
    // categoryRef.current?.focus();
  };
  const handleClickFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilterClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handleFilterTextChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    filterDispatch({ type: "SET_CATEGORY", option: value });
  };
  const handleFilterCompleted = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    if (newValue !== null) {
      filterDispatch({ type: "SET_COMPLETED", option: newValue });
    }
  };
  const handleFilterTextSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchText(value);
    filterDispatch({ type: "SET_SEARCHTEXT", text: value });
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
      <h2>Task Lists</h2>
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
            margin: "auto 10px",
            flexGrow: 1, // 彈性展開
            minWidth: { xs: "100%", sm: "200px" }, // 小螢幕滿版
            maxWidth: { md: "200px" }, // 桌機限制最大寬
            overflow: { xs: "hidden" },
          }}
        >
          <CategoryIcon sx={{ color: "#01161E", mr: 1, my: 0.5 }} />
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
            margin: "auto 10px",
            flexGrow: 1, // 彈性展開
            minWidth: { xs: "100%", sm: "400px" }, // 小螢幕滿版
            maxWidth: { md: "400px" }, // 桌機限制最大寬
            overflow: { xs: "hidden" },
          }}
        >
          <TaskIcon sx={{ color: "#01161E", mr: 1, my: 0.5 }} />
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

          <Tooltip title="Click to remove selected tasks ">
            <IconButton
              disabled={removeEnabled}
              onClick={() =>
                dispatch({ type: "DELETE_TASK", idx: resetNumbers })
              }
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Click to remove all tasks ">
            <IconButton
              disabled={resetEnabled}
              onClick={() => dispatch({ type: "RESET" })}
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>

          <Box>
            <Tooltip title="Click to filter tasks ">
              <IconButton disabled={resetEnabled} onClick={handleClickFilter}>
                <FilterAltIcon />
              </IconButton>
            </Tooltip>
            <Popover
              // id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleFilterClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{ mt: 1 }}
            >
              <Box sx={{ p: 2, width: 250 }}>
                <InputLabel id="category-filter-label">
                  Category Filter
                </InputLabel>
                <Select
                  sx={{ my: 0.5 }}
                  labelId="category-filter-label"
                  value={filter.category}
                  onChange={handleFilterTextChange}
                  fullWidth
                  label="Category Filter"
                >
                  <MenuItem value="">
                    <em>Clear Category</em>
                  </MenuItem>
                  {[...new Set(tasks.map((task) => task.category))].map(
                    (ctg) => {
                      return (
                        <MenuItem key={ctg} value={ctg}>
                          {ctg}
                        </MenuItem>
                      );
                    }
                  )}
                </Select>
                <Typography>Task Status Filter</Typography>
                <ToggleButtonGroup
                  sx={{ my: 0.5 }}
                  fullWidth
                  value={filter.completed}
                  onChange={handleFilterCompleted}
                  exclusive
                  aria-label="text formatting"
                >
                  <ToggleButton value="all">
                    <Tooltip title="Select for all tasks">
                      <SelectAllIcon />
                    </Tooltip>
                  </ToggleButton>

                  <ToggleButton value="completed">
                    <Tooltip title="Select for completed tasks">
                      <CheckBoxIcon />
                    </Tooltip>
                  </ToggleButton>

                  <ToggleButton value="uncompleted">
                    <Tooltip title="Select for uncompleted tasks">
                      <CheckBoxOutlineBlankIcon />
                    </Tooltip>
                  </ToggleButton>
                </ToggleButtonGroup>
                <TextField
                  sx={{ my: 0.5 }}
                  fullWidth
                  id="input-filter-search-text"
                  label="Content Search"
                  variant="standard"
                  type="search"
                  value={searchText}
                  onChange={handleFilterTextSearch}
                  helperText="Input the text for searching"
                  slotProps={{ htmlInput: { maxLength: 150 } }}
                />
              </Box>
            </Popover>
          </Box>

          <Tooltip title="Click to sort by time">
            <IconButton disabled={resetEnabled}>
              <SortIcon />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
