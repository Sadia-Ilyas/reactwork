import { useState } from "react";
import styles from "./styletodo.module.css";

const TodoList = () => {
  const [addTodo, setaddTodo] = useState("");

  const [storeTodo, setStoreTodo] = useState([]);

  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = () => {
    if (addTodo.trim() === "") return;

    if (editTodo !== null) {
      const updatedTodos = [...storeTodo];

      updatedTodos[editTodo] = addTodo.trim();
      setStoreTodo(updatedTodos);
      setEditTodo(null);
    } else {
      setStoreTodo([...storeTodo, addTodo.trim()]);
    }

    setaddTodo(""); // input clear
  };

  const handleUpdate = (index) => {
    setaddTodo(storeTodo[index]);
    setEditTodo(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = storeTodo.filter((_, i) => i !== index);
    setStoreTodo(updatedTodos);
  };

  return (
    <div className={styles.todoContainer}>
      <h2>TodoList</h2>

      <input
        type="text"
        placeholder="Enter an item"
        value={addTodo}
        onChange={(e) => setaddTodo(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {storeTodo.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
