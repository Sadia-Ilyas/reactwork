// App.js
import React from "react";
import { useState, useRef, useReducer } from "react";
import Parent from "./Components/Parent";
import UserContext from "./Context/usercontext";
import UserList from "./List";

import ProductObject from "./Testing";

// 👇 App Component (Main)
function App() {
  const [userdata, setUserdata] = useState({ name: "Sadia", role: "Student" });

  const promoted = "Senior Developer";

  const inputRef = useRef(null);

  console.log(inputRef);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "blue";
    inputRef.current.style.outline = "none";
    inputRef.current.style.borderColor = "blue";
  };

  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      case "RESET":
        return { count: 0 };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ userdata, setUserdata, promoted }}>
      <div>
        <h1>Use Of Context Api </h1>
        <Parent />
      </div>
      <br />
      <br />

      <div>
        <h1>Use Of UseRef Hook </h1>
        <input ref={inputRef} type="text" placeholder="Type here..." />

        <button onClick={handleFocus}>Press to Focus</button>
      </div>

      <div>
        <h1>Use of UseReducer Hook</h1>
        <p>Count is: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Inrement
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
      <UserList />
      
      <ProductObject />
    </UserContext.Provider>
  );
}

export default App;
