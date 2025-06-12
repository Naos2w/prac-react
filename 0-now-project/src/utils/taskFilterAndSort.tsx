import type { Task } from "../types/task";
import type { Filter } from "../types/filter";

export function getFilteredAndSortedTasks(
  tasks: Task[],
  filter: Filter
): Task[] {
  const filtered = tasks.filter((t) => {
    const matchCategory = filter.category
      ? t.category === filter.category
      : true;

    const completedState =
      filter.completed === "all"
        ? undefined
        : filter.completed === "completed"
        ? true
        : false;

    const matchCompleted =
      completedState !== undefined ? t.completed === completedState : true;

    const matchText = (() => {
      if (!filter.searchText) return true;
      try {
        const escaped = filter.searchText.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );
        const pattern = escaped.replace(/\\\*/g, ".*");
        const regex = new RegExp(`^${pattern}$`, "i");
        return regex.test(t.text);
      } catch {
        return false;
      }
    })();

    return matchCategory && matchCompleted && matchText;
  });

  const sorted = [...filtered];
  if (filter.sortBy) {
    sorted.sort((a, b) => {
      let result = 0;
      if (filter.sortBy === "create_time") {
        result = a.create_time.localeCompare(b.create_time);
      } else if (filter.sortBy === "completed") {
        result = Number(a.completed) - Number(b.completed);
      }
      return filter.sortDirection === "asc" ? result : -result;
    });
  }

  return sorted;
}
