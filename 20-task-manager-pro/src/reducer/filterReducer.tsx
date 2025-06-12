import type { Filter, FilterAction } from "../types/filter";

export const filterReducer: React.Reducer<Filter, FilterAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.option };
    case "SET_COMPLETED":
      return {
        ...state,
        completed: action.option as "all" | "uncompleted" | "completed",
      };
    case "SET_SEARCHTEXT":
      return { ...state, searchText: action.text };
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.sortBy,
        sortDirection: action.direction,
      };
    case "RESET":
      return { category: "", completed: "all", searchText: "" };
    default:
      return state;
  }
};
