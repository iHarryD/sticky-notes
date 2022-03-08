import "./css/style.css";
import {
  ActiveTodoFooter,
  CompletedTodoFooter,
} from "../todo_footers/TodoFooters";

export default function Todo(props) {
  return (
    <div
      className={`todo --verticle-flex --has-padding ${
        props.todoDetails.completed && "completed-todo"
      }`}
    >
      <p className="todo-title --bold-600" title={props.todoDetails.title}>
        {props.todoDetails.title}
      </p>
      <p className="todo-description">{props.todoDetails.description}</p>
      <p className="todo-created-date">{props.todoDetails.createdOn}</p>
      {props.todoDetails.completed ? (
        <CompletedTodoFooter
          todoDetails={props.todoDetails}
          dispatchFunc={props.dispatchFunc}
        />
      ) : (
        <ActiveTodoFooter
          todoDetails={props.todoDetails}
          dispatchFunc={props.dispatchFunc}
        />
      )}
    </div>
  );
}
