import "./css/style.css";

import Todo from "../todo/Todo";
import { useTodos } from "../../TodoContext";

export default function TodosContainer() {
  const { todos, dispatch } = useTodos();
  return (
    <section
      className={`your-todos-section --horizontal-flex --has-gap ${
        todos.length === 0 && "empty-container"
      }`}
    >
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <Todo key={index} todoDetails={todo} dispatchFunc={dispatch} />
        ))}
    </section>
  );
}
