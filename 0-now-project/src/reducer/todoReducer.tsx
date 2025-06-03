import { useReducer, type ActionDispatch } from "react";
import type { ToDoListType, Action } from "../types";

const initialState: ToDoListType[] = [];

const todoActionReducer: React.Reducer<ToDoListType[], Action> = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("ADD_TODO");
      return [action.todo, ...state];
    case "REMOVE_TODO":
      console.log("REMOVE_TODO");
      return state.filter((_, idx) => !action.idx.includes(idx));
    case "TOGGLE_TODO":
      console.log("TOGGLE_TODO");
      return state.map((s, idx) =>
        idx === action.idx ? { ...s, checked: !s.checked } : s
      );
    case "RESET":
      console.log("RESET");
      return initialState;
    default:
      return state;
  }
};

export const todoReducer = (): [ToDoListType[], React.Dispatch<Action>] => {
  return useReducer(todoActionReducer, initialState);
};
