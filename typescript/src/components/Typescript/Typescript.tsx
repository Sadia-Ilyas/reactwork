import React, { useState } from "react";

const Typescript = () => {
  const [count, setCount] = useState<number>(0);

  const increase = (): void => {
    console.log(count);
    setCount(count + 1);
  };

  //BasicTypes
  let username: string = "Sadia";
  let age: number = 24;
  let phoneNo: string = "+92 3093524243";
  let isAdmin: boolean = true;

  console.log(username, age, phoneNo, isAdmin);

  //Infrence Types
  let name = "sadia";
  console.log(name);

  //Functions Using Typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(5, 2));

  //Arrays
  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["sadia", "maham", "ayesha"];
  console.log(numbers, names);

  //Objects

  type Person = {
    name: string;
    age: number;
    isDeveloper: boolean;
  };
  let person1: Person = {
    name: "sadia",
    age: 24,
    isDeveloper: true,
  };
 
  console.log(person1.name, person1.age, person1.isDeveloper);
  return (
    <div>
      <h2>Count :{count}</h2>
      <button onClick={increase}>Increase </button>

      <h2>
        Manual And Basic Types {username},{age},{phoneNo},{isAdmin}
      </h2>
    </div>
  );
};
export default Typescript;
