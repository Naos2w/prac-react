import type { Filter, FilterAction } from "../types/filter";

export const filterReducer: React.Reducer<Filter, FilterAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.option };
    case "SET_COMPLETED":
      return { ...state, completed: action.option };
    case "SET_SEARCHTEXT":
      return { ...state, searchText: action.text };
    case "RESET":
      return { category: "", completed: "all", searchText: "" };
    default:
      return state;
  }
};
