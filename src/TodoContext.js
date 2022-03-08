import { createContext, useReducer, useContext, useState, useRef } from "react";

const TodosContext = createContext();

export function TodosProvider({ children }) {
  function todosHandler(todos, action) {
    switch (action.type) {
      case `add`:
        todos = [
          ...todos,
          {
            title: action.payload.title,
            description: action.payload.description,
            createdOn: `${action.payload.createdOn.getDate()}/${
              action.payload.createdOn.getMonth() + 1
            }/${action.payload.createdOn.getFullYear()}`,
            completed: false,
            unikey: action.payload.createdOn.getTime(),
          },
        ];
        return todos;

      case `delete`:
        todos = todos.filter(
          (todo) => Number(todo.unikey) !== Number(action.payload.targetunikey)
        );
        return todos;

      case `toggle-status`:
        todos = todos.map((todo) => {
          if (Number(todo.unikey) === Number(action.payload.targetunikey)) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        return todos;

      case `edit`:
        todos = todos.map((todo) => {
          if (Number(todo.unikey) === Number(action.payload.unikey)) {
            return {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            };
          }
          return todo;
        });
        return todos;

      default:
        return todos;
    }
  }
  const [todos, dispatch] = useReducer(todosHandler, []);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

// ---------------------------

const EditingTodoContext = createContext();

export function EditingTodoProvider({ children }) {
  const [isEditing, setIsEditing] = useState({ editing: false, unikey: null });
  return (
    <EditingTodoContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditingTodoContext.Provider>
  );
}

export function useEditingTodo() {
  return useContext(EditingTodoContext);
}

// ---------------------------

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <ModalContext.Provider value={{ isModalActive, setIsModalActive }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

// ---------------------------
