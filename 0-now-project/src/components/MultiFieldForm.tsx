import { useReducer, useRef } from "react";
import type { Message } from "../types";

export const MultiFieldForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const initialState: Message = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message }: Message = state;
    alert(`name: ${name}, email: ${email}, message: ${message}`);
    dispatch({ type: "RESET" });
    nameRef.current?.focus();
  };

  type Action =
    | { type: "UPDATE_FIELD"; field: keyof Message; value: string }
    | { type: "RESET" };

  const formReducer: React.Reducer<Message, Action> = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div className="multiform">
      <h1>Leave Your Message</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="name">
          <span className="field">{"name: "}</span>
          <input
            className="input"
            ref={nameRef}
            type="text"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            required
            placeholder="Please input your name"
            value={state.name}
          />
        </div>
        <div className="email">
          <span className="field">{"E-mail: "}</span>
          <input
            className="input"
            type="input"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            required
            placeholder="Please input your email"
            value={state.email}
          />
        </div>
        <div className="message">
          <span className="field">{"Message: "}</span>
          <input
            className="input"
            type="text"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "message",
                value: e.target.value,
              })
            }
            required
            placeholder="Please input your message"
            value={state.message}
          />
        </div>
        <input type="submit" id="button" value="Submit" />
      </form>
    </div>
  );
};
