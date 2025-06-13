// react
import { useEffect, useState } from "react";
// MUI
import {
  Box,
  MenuItem,
  TextField,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { memo, useCallback } from "react";

type CategorySelectProps = {
  category: string;
  setCategory: (category: string) => void;
  categoryError: boolean;
  setCategoryError: (categoryError: boolean) => void;
  categoryRef: React.RefObject<HTMLInputElement | null>;
};

const boxStyles = {
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  minWidth: { xs: "100%", sm: "200px" },
  maxWidth: { md: "200px" },
  overflow: { xs: "hidden" },
};

const iconStyles = (themeMode: string) => ({
  color: themeMode === "light" ? "#1976d2" : "#90caf9",
  mr: 1,
  transform: "translateY(-10px)",
});

const defaultCategories = ["Learning", "Work", "Chores", "Fitness", "Personal"];

export const CategorySelection: React.FC<CategorySelectProps> = memo(
  ({ category, setCategory, categoryError, setCategoryError, categoryRef }) => {
    const theme = useTheme();

    const [categories, setCategories] = useState<string[]>([]);
    const [newCategory, setNewCategory] = useState("");
    const [newCategoryError, setNewCategoryError] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const stored = localStorage.getItem("categories");
      if (stored) {
        setCategories(JSON.parse(stored));
      } else {
        setCategories(defaultCategories);
      }
    }, []);
    // Extract onChange handler to prevent unnecessary re-renders
    const handleCategoryChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue === "add_new_one") return;
        else setCategory(newValue);
        if (categoryError && newValue) setCategoryError(false);
      },
      [categoryError, setCategoryError, setCategory]
    );
    const handleNewCategoryChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newValue = event.target.value;
      setNewCategory(newValue);
      if (newCategoryError && newValue) setNewCategoryError(false);
    };
    const handleClickAddNewOne = () => {
      setOpen(true);
    };
    const handleDlgClose = () => {
      setOpen(false);
    };
    const handleClickAddNewCategory = () => {
      if (newCategory === "") setNewCategoryError(true);
      if (!categories.includes(newCategory)) {
        const updated = [...categories, newCategory];
        setCategories(updated);
        localStorage.setItem("categories", JSON.stringify(updated));
        setCategory(newCategory);
        handleDlgClose();
      }
      if (newCategoryError && newCategory) setNewCategoryError(false);
    };
    return (
      <Box sx={boxStyles}>
        <CategoryIcon sx={iconStyles(theme.palette.mode)} />
        <TextField
          fullWidth
          id="input-category"
          label="Category"
          variant="filled"
          size="small"
          inputRef={categoryRef}
          required
          value={category}
          error={categoryError}
          onChange={handleCategoryChange}
          helperText="Select the category"
          slotProps={{ htmlInput: { maxLength: 20 } }}
          select
        >
          <MenuItem key="empty" value="">
            <em>Clear Category</em>
          </MenuItem>
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          <MenuItem
            key="add"
            value="add_new_one"
            onClick={handleClickAddNewOne}
          >
            <em>Add new one</em>
          </MenuItem>
        </TextField>
        <Dialog open={open} onClose={handleDlgClose}>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="input-new-category"
              label="New Category"
              variant="filled"
              size="small"
              required
              value={newCategory}
              error={newCategoryError}
              onChange={handleNewCategoryChange}
              helperText="Select the category"
              slotProps={{ htmlInput: { maxLength: 20 } }}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClickAddNewCategory}>
              Add
            </Button>
            <Button onClick={handleDlgClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
);

// Add display name for debugging purposes
CategorySelection.displayName = "CategorySelection";
