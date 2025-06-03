import type { ToDoListType, Action } from "../types";

type TodoListProps = {
  todos: ToDoListType[];
  dispatch: React.Dispatch<Action>;
};
export const TodoList: React.FC<TodoListProps> = ({ todos, dispatch }) => {
  console.log(`ToDoList: ${todos.length}`);
  return (
    <>
      {todos.map((todo, idx) => {
        return (
          <div key={idx} className="card">
            <input
              className="card_check"
              type="checkbox"
              checked={todo.checked}
              title="Completed"
              onChange={() => {
                dispatch({
                  type: "TOGGLE_TODO",
                  idx: idx,
                });
              }}
            />
            <div className="card_title">{todo.title}</div>
            <p className="card_content">{todo.content}</p>
            <div className="card_time">{todo.addtime}</div>
          </div>
        );
      })}
    </>
  );
};
