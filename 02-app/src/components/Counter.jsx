import React, {useState} from "react";

const Counter =()=> {

    const [count, setCount]= useState(0);
    // const [value, setValue]= useState('Sadia');


    // console.log(val);

    return (
        <div>
            <p>Counter - {count}</p>
            <h3>Value is: {count % 2 === 0 ?"Even": "Odd"}</h3>
            {/* <p>  {value}</p> */}
            {/* <button onClick={()=> setValue('Ali')}>Change</button> */}
            <button   onClick={() => setCount(count +1)} >Increment </button>
            <button onClick={() => setCount(count -1)} > Dcrement </button>
        </div>
    );
};

export default Counter;