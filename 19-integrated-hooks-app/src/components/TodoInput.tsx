import { useRef, useState } from "react";
import type { Action, ToDoListType } from "../types";
type ToDoInputProps = {
  todos: ToDoListType[];
  dispatch: React.Dispatch<Action>;
};

export const TodoInput: React.FC<ToDoInputProps> = ({ todos, dispatch }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const removeEnabled = Array.isArray(todos) && todos.every((t) => !t.checked);
  const resetEnabled = Array.isArray(todos) && todos.length <= 0;
  const resetNumbers = Array.isArray(todos)
    ? todos
        .map((t, idx) => {
          if (t.checked) return idx;
        })
        .filter((t) => t !== undefined)
    : [];
  console.log(`restNumbers: ${resetNumbers}`);
  console.log(`removeEnabled: ${removeEnabled}`);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit");
    dispatch({
      type: "ADD_TODO",
      todo: {
        checked: false,
        title: title,
        content: content,
        addtime: new Date()
          .toISOString()
          .replace("T", " ")
          .replace(/-/g, "/")
          .substring(0, 19),
      },
    });
    setTitle("");
    setContent("");
    titleRef.current?.focus();
  };
  return (
    <div className="multiform">
      <h1>To Do Lists</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">
          <span className="field">{"Title: "}</span>
          <input
            className="input"
            ref={titleRef}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Please input your event"
            value={title}
          />
        </div>
        <div className="content">
          <span className="field">{"Content: "}</span>
          <input
            className="input"
            type="input"
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Please input your content"
            value={content}
          />
        </div>
        <div className="btnCtn">
          <button type="submit" id="button">
            Add
          </button>
          <button
            type="button"
            disabled={removeEnabled}
            onClick={() => dispatch({ type: "REMOVE_TODO", idx: resetNumbers })}
          >
            Remove
          </button>
          <button
            type="button"
            disabled={resetEnabled}
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
