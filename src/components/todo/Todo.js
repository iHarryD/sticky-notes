import "./css/style.css";

export default function Todo() {
  const todo = {
    title: "Watch CSS session Lorem ipsum dolor sit",
    description:
      "Watch Vikram's CSS session on grids. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, quas necessitatibus. Quidem et ipsa corporis esse beatae praesentium aspernatur nihil ducimus eos.",
    createdOn: "12/4/2022",
    completed: false,
  };

  return (
    <div className="todo --verticle-flex --has-padding">
      <p className="todo-title --bold-600" title={todo.title}>
        {todo.title}
      </p>
      <p className="todo-description">{todo.description}</p>
      <p className="todo-created-date">{todo.createdOn}</p>
      <div className="todo-footer --horizontal-flex">
        <button className="btn --icon-only-btn --hover-icon-btn" title="Edit">
          <svg
            className="edit-icon"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M3,10h11v2H3V10z M3,8h11V6H3V8z M3,16h7v-2H3V16z M18.01,12.87l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71 c0.39,0.39,0.39,1.02,0,1.41l-0.71,0.71L18.01,12.87z M17.3,13.58l-5.3,5.3V21h2.12l5.3-5.3L17.3,13.58z" />
          </svg>
        </button>
        <div className="--horizontal-flex --has-gap">
          <button
            className="btn --icon-only-btn --hover-icon-btn"
            title="Mark as completed"
          >
            <svg
              className="completed-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </button>
          <button
            className="btn --icon-only-btn --hover-icon-btn"
            title="Delete todo"
          >
            <svg
              className="delete-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
