import React, { useState, useTransition } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(0);

  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleIncrement = (value) => {
    setCount((prev) => prev + value);
  };

  // range ka handler
  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 100; i++) {
        items.push(value + " " + i);
      }
      setList(items);
    });
  };

  return (
    <div>
      <h3>Value is {count}</h3>
      <button onClick={() => handleIncrement(1)}>Increment By 1</button>
      <button onClick={() => handleIncrement(2)}>Increment By 2</button>
      <button onClick={() => handleIncrement(3)}>Increment By 3  added</button>

      <br />
      <br />

      <label htmlFor="points">Points (between 0 and 10):</label>
      <input
        type="range"
        id="points"
        name="points"
        min="0"
        max="100"
        value={range}
        onChange={handleRangeChange}
      />

      <h2>Range is {range}</h2>
      <h1>Total ammount 100 Anscdvfbgn: {100 - range}</h1>

      <input type="text" value={text} onChange={handleChange} />

      {isPending && <p>Loading....</p>}

      <ul>
        {list.map((items, i) => {
         return <li>{items}</li>;
        })}
      </ul>
    </div>
  );
};

export default Counter;
