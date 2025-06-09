import type { Task, Action } from "../types/task";

export const taskReducer: React.Reducer<Task[], Action> = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "DELETE_TASK":
      return state.filter((_, idx) => !action.idx.includes(idx));
    case "TOGGLE_TASK":
      return state.map((s) =>
        s.id === action.id ? { ...s, completed: !s.completed } : s
      );
    case "RESET":
      return [];
    default:
      return state;
  }
};
