import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import DynamicCrud from "../components/Dynamic/Dynamiccrud";

const Home = () => {
  const [users, setUsers] = useState([]);
   // ✅ specialization ek hi jagah define karo
  const specializationOptions = ["frontend", "backend", "fullstack", "uiux"];

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };


 const handleUpdateUser = (index, updatedUser) => {
  setUsers((prev) =>
    prev.map((user, i) => (i === index ? updatedUser : user))
  );
};

  return (
    <div>
      <Navbar />
      <Form onAddUser={handleAddUser} />
      <Table users={users}  onDeleteUser={handleDeleteUser } onUpdateUser={handleUpdateUser} specializationOptions={specializationOptions}  />

    <DynamicCrud />
    </div>
  );
};

export default Home;
