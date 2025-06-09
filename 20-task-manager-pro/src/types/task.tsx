export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  create_time: string;
}

export type Action =
  | { type: "ADD_TASK"; task: Task }
  | { type: "TOGGLE_TASK"; id: string }
  | { type: "DELETE_TASK"; idx: number[] }
  | { type: "RESET" };
