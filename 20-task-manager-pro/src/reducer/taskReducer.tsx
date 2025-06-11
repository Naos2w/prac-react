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

export const displayedTaskReducer: React.Reducer<Task[], any> = (
  state,
  dTaskAct
) => {
  switch (dTaskAct.type) {
    case "UPDATE_DISPLAY":
      const { tasks, filter } = dTaskAct;
      let result = [...tasks];

      // 篩選
      if (filter.category) {
        result = result.filter((task) => task.category === filter.category);
      }

      if (filter.completed !== "all") {
        result = result.filter((task) =>
          filter.completed === "completed" ? task.completed : !task.completed
        );
      }

      if (filter.searchText) {
        result = result.filter((task) =>
          task.text.toLowerCase().includes(filter.searchText.toLowerCase())
        );
      }

      // 排序
      if (filter.sortBy) {
        result.sort((a, b) => {
          const asc = filter.sortDirection === "asc" ? 1 : -1;

          if (filter.sortBy === "create_date") {
            return (
              (new Date(a.create_time).getTime() -
                new Date(b.create_time).getTime()) *
              asc
            );
          }

          if (filter.sortBy === "completed") {
            return (Number(a.completed) - Number(b.completed)) * asc;
          }

          return 0;
        });
      }

      return result;

    default:
      return state;
  }
};
