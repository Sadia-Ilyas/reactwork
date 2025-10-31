// 👇 Child Component
import GrandChild from "./GrandChild";
function Child({ }) {
 
  return (
    <div>
      <p>Child Component</p>
      <GrandChild />
    </div>
  );
}

export default Child;
