import React from "react";

const TodoItem = (props) => {
  return (
    <li className="Todo-item">
     <span>
       { props.completed ? <></> : <input type="checkbox" />}
      <span className="todo-text">{props.text}</span>
     </span>
      <span>...</span>
    </li>
  );
};

export default TodoItem;
