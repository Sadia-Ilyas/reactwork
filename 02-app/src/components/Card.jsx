import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEmployees, fetchEmployees } from "../store/employeeSlice"; // selector import

const Card = () => {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees); // Redux se data fetch
  const status = useSelector((state) => state.employees.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEmployees());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading employees!</p>;

  return (
    <div className="flex flex-col gap-4 items-center">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="card p-5 bg-white rounded-xl shadow-lg w-80 text-center"
        >
          <h2 className="text-xl font-bold mb-2">{emp.name}</h2>
          <p className="text-gray-700 mb-1">Age: {emp.age}</p>
          <p className="text-gray-700">Department: {emp.department}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
