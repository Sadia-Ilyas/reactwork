
import React, { useState } from "react";

const Typescript=()=>{

    const [count, setCount]= useState <number>(0);

    const increase= ():void =>{
        console.log(count);
        setCount(count+1);
    }


    return(
<div>
    <h2>Count :{count}</h2>
    <button onClick={increase}>Increase </button>
    
</div>

    );


};
export default Typescript;