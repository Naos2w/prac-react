export interface Filter {
  category: string;
  completed: "all" | "completed" | "uncompleted";
  searchText: string;
}

export type FilterAction =
  | { type: "SET_CATEGORY"; option: string }
  | { type: "SET_COMPLETED"; option: "all" | "completed" | "uncompleted" }
  | { type: "SET_SEARCHTEXT"; text: string }
  | { type: "RESET" };
