import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Counter from "./components/Counter";   
import Card from "./components/Card";
import Products from "./components/Products";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Todo container */}
      <div className="todo-container">
        <Counter />
        <Header header="Todo UsingProps" />
        <TodoItem completed={true} text="Eat" />
        <TodoItem text="Code" />
        <TodoItem text="Sleep" />
        <TodoItem text="Repeat" />
        <Button />
      </div>

      {/* Independent Card */}
      <Card />
       <Products />
    </div>
  );
};

export default App;
