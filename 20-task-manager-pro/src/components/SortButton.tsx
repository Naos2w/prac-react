// type
import type { Task } from "../types/task";
import type { FilterAction, Filter } from "../types/filter";
// MUI
import { IconButton, Tooltip, useTheme } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

type SortButtonProps = {
  filter: Filter;
  filterDispatch: React.Dispatch<FilterAction>;
  disabled: boolean;
};

export const SortButton: React.FC<SortButtonProps> = ({
  filter,
  filterDispatch,
  disabled,
}) => {
  const handleClickSort = () => {
    let nextDirection: "asc" | "desc" | "" = "";
    if (filter.sortDirection === "") {
      nextDirection = "asc";
    } else if (filter.sortDirection === "asc") {
      nextDirection = "desc";
    } else {
      nextDirection = "";
    }
    filterDispatch({
      type: "SET_SORT",
      sortBy: "create_time",
      direction: nextDirection,
    });
  };
  const theme = useTheme();
  return (
    <Tooltip title="Click to sort by time">
      <IconButton
        sx={{
          color:
            filter.sortDirection !== ""
              ? theme.palette.mode === "light"
                ? "#1976d2 !important"
                : "#90caf9 !important"
              : {},
          transform:
            filter.sortDirection === "desc"
              ? "rotate(0deg)"
              : filter.sortDirection === "asc"
              ? "rotate(180deg)"
              : "rotate(0deg)",
          transition: "transform 0.2s ease-in-out, opacity 0.2s",
        }}
        disabled={disabled}
        onClick={handleClickSort}
      >
        <SortIcon />
      </IconButton>
    </Tooltip>
  );
};
