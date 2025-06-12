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
  | { type: "DELETE_TASK"; idx: string[] }
  | { type: "GEN_DATA"; tasks: Task[] }
  | { type: "REORDER_TASKS"; tasks: Task[] }
  | { type: "RESET" };
