import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import styles from "./dynamicstyle.module.css";

export default function DynamicCrud() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    specialization: "",
    address: "",
  });

  const [editingUserId, setEditingUserId] = useState(null);

  // Fetch Users
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Handle input
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Add User
  const addUser = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        setNewUser({
          name: "",
          email: "",
          phone: "",
          password: "",
          specialization: "",
          address: "",
        });
      });
  };

  const handleEdit = (user) => {
    setEditingUserId(user.id); // kis user ko edit karna hai
    setNewUser({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      specialization: user.specialization,
      address: user.address,
    });
  };
  const updateUser = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/users/${editingUserId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(users.map((u) => (u.id === editingUserId ? data : u)));
        setEditingUserId(null); // reset mode
        setNewUser({
          name: "",
          email: "",
          phone: "",
          password: "",
          specialization: "",
          address: "",
        });
      });
  };

  const handleDelete = (id) => {
  fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setUsers(users.filter((u) => u.id !== id)); // remove from state
    });
};


  // Table setup
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      header: "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("specialization", {
      header: "Specialization",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <>
          <button
            onClick={() => handleEdit(row.original)}
            className={styles.editBtn}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </>
      ),
    }),
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <h2>List Using Integration (local Server json)</h2>
      <form
        onSubmit={editingUserId ? updateUser : addUser}
        className={styles.formGrid}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={newUser.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={newUser.password}
          onChange={handleChange}
        />
        <select
          name="specialization"
          value={newUser.specialization}
          onChange={handleChange}
        >
          <option value="">Select Specialization</option>
          <option value="Designer">Designer</option>
          <option value="Planner">Planner</option>
          <option value="Volunteer">Volunteer</option>
        </select>
        <textarea
          name="address"
          placeholder="Enter Address"
          value={newUser.address}
          onChange={handleChange}
        />
        <button type="submit" className={styles.fullWidthBtn}>
          {editingUserId ? "Update User" : "Add User"}
        </button>
      </form>

      <h3>Users List</h3>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
