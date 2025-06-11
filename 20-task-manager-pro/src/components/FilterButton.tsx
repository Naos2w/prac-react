// react hooks
import { useState } from "react";
// type
import type { Task } from "../types/task";
import type { FilterAction, Filter } from "../types/filter";
// MUI
import {
  Box,
  TextField,
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
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import type { Theme } from "@mui/material/styles";

type FilterButtonProps = {
  tasks: Task[];
  filter: Filter;
  filterDispatch: React.Dispatch<FilterAction>;
  disabled: boolean;
  theme: Theme;
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  tasks,
  filter,
  filterDispatch,
  disabled,
  theme,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState("");
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
      filterDispatch({
        type: "SET_COMPLETED",
        option: newValue as "all" | "uncompleted" | "completed",
      });
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
    <Box>
      <Tooltip title="Click to filter tasks ">
        <IconButton
          sx={{
            color:
              filter.category || filter.completed !== "all" || filter.searchText
                ? theme.palette.mode === "light"
                  ? "#1976d2"
                  : "#90caf9"
                : {},
          }}
          disabled={disabled}
          onClick={handleClickFilter}
        >
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
          <InputLabel id="category-filter-label">Category Filter</InputLabel>
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
            {[...new Set(tasks.map((task) => task.category))].map((ctg) => {
              return (
                <MenuItem key={ctg} value={ctg}>
                  {ctg}
                </MenuItem>
              );
            })}
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
  );
};
