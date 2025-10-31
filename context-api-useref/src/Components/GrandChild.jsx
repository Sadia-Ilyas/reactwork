// 👇 GrandChild Component
import React, { useContext } from "react";
import UserContext from "../Context/usercontext";

function GrandChild({}) {
  const { userdata, setUserdata,promoted } = useContext(UserContext);
  if (!userdata) return <p>No user data</p>;

  const Pormote = () => {
    setUserdata({ ...userdata, role: promoted});
  };
  return (
    <div>
      <h2>
        Hello Your Name is {userdata.name}, {userdata.role}
      </h2>

      <button onClick={Pormote}>Prmote</button>
    </div>
  );
}
export default GrandChild;
