import type { Task, Action, dTaskAct } from "../types/task";

export const taskReducer: React.Reducer<Task[], Action> = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "DELETE_TASK":
      return state.filter((s) => !action.idx.includes(s.id));
    case "TOGGLE_TASK":
      return state.map((s) =>
        s.id === action.id ? { ...s, completed: !s.completed } : s
      );
    case "GEN_DATA":
      return state.concat(action.tasks);
    case "RESET":
      return [];
    default:
      return state;
  }
};

export const displayedTaskReducer: React.Reducer<Task[], dTaskAct> = (
  state,
  dTaskAct
) => {
  return dTaskAct.tasks;
};
