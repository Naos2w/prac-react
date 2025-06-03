export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ToDoListType {
  checked: boolean;
  title: string;
  content: string;
  addtime: string;
}

export type Action =
  | { type: "ADD_TODO"; todo: ToDoListType }
  | { type: "REMOVE_TODO"; idx: number[] }
  | { type: "TOGGLE_TODO"; idx: number }
  | { type: "RESET" };
