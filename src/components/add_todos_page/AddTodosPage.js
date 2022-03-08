import "./css/style.css";

import TodosContainer from "../todos_container/TodosContainer";
import NewTodoModal from "../new_todo_input_modal/NewTodoModal";
import { useModal } from "../../TodoContext";

export default function AddTodosPage() {
  const { isModalActive, setIsModalActive } = useModal();
  return (
    <main>
      {isModalActive && <NewTodoModal modalStateSetter={setIsModalActive} />}
      <section className="--has-padding --horizontal-flex --centered-flex">
        <button
          className="new-todo-btn btn --primary-btn --horizontal-flex --centered-flex --has-gap"
          onClick={() => setIsModalActive(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
          </svg>{" "}
          new todo
        </button>
      </section>
      <TodosContainer />
    </main>
  );
}
