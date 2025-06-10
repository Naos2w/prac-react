export interface Filter {
  category: string;
  completed: string;
  searchText: string;
}

export type FilterAction =
  | { type: "SET_CATEGORY"; option: string }
  | { type: "SET_COMPLETED"; option: string }
  | { type: "SET_SEARCHTEXT"; text: string }
  | { type: "RESET" };
