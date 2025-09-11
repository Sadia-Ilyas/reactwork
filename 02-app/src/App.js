import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Counter from "./components/Counter";   
import "./index.css";


const App =() => {

  return(
    <div className="todo-container">
    <Counter />
    <Header header="Todo UsingProps" />
    <TodoItem completed={true} text="Eat" />
    <TodoItem text="Code" />
    <TodoItem text="Sleep" />
    <TodoItem text="Repeat" />
    <Button />
   
    </div>
  );
}; 
export default App;