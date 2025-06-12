export interface Filter {
  category: string;
  completed: "all" | "completed" | "uncompleted";
  searchText: string;
  sortBy?: "create_time" | "completed" | "";
  sortDirection?: "asc" | "desc" | "";
}

export type FilterAction =
  | { type: "SET_CATEGORY"; option: string }
  | { type: "SET_COMPLETED"; option: "all" | "completed" | "uncompleted" }
  | { type: "SET_SEARCHTEXT"; text: string }
  | {
      type: "SET_SORT";
      sortBy: "create_time" | "completed" | "";
      direction: "asc" | "desc" | "";
    }
  | { type: "RESET" };
