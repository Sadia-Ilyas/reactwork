import React,{useState, useEffect} from "react";

const Counter=() =>{

  const[count, setCount]= useState(0);


  useEffect(()=>{
      document.title= `count is: ${count}`;

  } , [count]);

 return(

  <div>
    <h3>Value is {count}</h3>
  <button onClick={ () => setCount(count+1)}>+</button>
  <button onClick={ () => setCount(count-1)}>-</button>
  </div>

 );
};

export default Counter;
