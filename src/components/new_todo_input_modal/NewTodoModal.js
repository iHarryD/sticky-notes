import ReactDOM from "react-dom";
import { useRef, useState } from "react";

import "./css/style.css";
import { useTodos, useEditingTodo } from "../../TodoContext";

export default function NewTodoModal(props) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const { todos, dispatch } = useTodos();
  const { isEditing, setIsEditing } = useEditingTodo();
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  function addBtnHandler(e) {
    e.preventDefault();
    if (!titleRef.current.value || !descriptionRef.current.value) {
      setIsInputEmpty(true);
      return;
    }
    dispatch({
      type: e.target.value,
      payload: {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        createdOn: new Date(),
      },
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    props.modalStateSetter(false);
    setIsInputEmpty(false);
  }

  function saveBtnHandler(e) {
    e.preventDefault();
    if (!titleRef.current.value || !descriptionRef.current.value) {
      setIsInputEmpty(true);
      return;
    }
    dispatch({
      type: "edit",
      payload: {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        unikey: isEditing.unikey,
      },
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    setIsEditing({ editing: false, unikey: null });
    setIsInputEmpty(false);
    props.modalStateSetter(false);
  }

  function cancelBtnHandler(e) {
    e.preventDefault();
    props.modalStateSetter(false);
    setIsInputEmpty(false);
    setIsEditing({ editing: false, unikey: null });
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <form className="--verticle-flex --has-gap">
          <div className="input-container">
            <input
              ref={titleRef}
              className="input"
              type="text"
              id="todo-title-input"
              defaultValue={
                isEditing.editing
                  ? todos.reduce((title, todo) => {
                      if (Number(todo.unikey) === Number(isEditing.unikey)) {
                        return todo.title;
                      }
                      return title;
                    }, "")
                  : ""
              }
              maxLength={30}
              autoComplete="off"
            />
            <label htmlFor="todo-title-input">Title</label>
          </div>
          <div className="input-container">
            <input
              className="input"
              type="text"
              id="todo-description-input"
              defaultValue={
                isEditing.editing
                  ? todos.reduce((des, todo) => {
                      if (Number(todo.unikey === Number(isEditing.unikey))) {
                        return todo.description;
                      }
                      return des;
                    }, "")
                  : ""
              }
              maxLength={100}
              ref={descriptionRef}
              autoComplete="off"
            />
            <label htmlFor="todo-description-input">Description</label>
          </div>
          <div
            className={`btn-container --verticle-flex --has-gap ${
              isInputEmpty && "has-empty-fields"
            }`}
          >
            <button
              className="add-btn btn --primary-btn --has-hover-overlay"
              onClick={(e) => {
                isEditing.editing ? saveBtnHandler(e) : addBtnHandler(e);
              }}
              value="add"
            >
              {isEditing.editing ? "update" : "add"}
            </button>
            <button
              className="btn --primary-btn"
              onClick={(e) => cancelBtnHandler(e)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="modal-overlay"></div>
    </>,
    document.getElementById("portal")
  );
}
