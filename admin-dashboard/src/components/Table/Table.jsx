import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import styles from "./tablestyle.module.css";

const Table = ({
  users,
  onDeleteUser,
  onUpdateUser,
  specializationOptions,
}) => {
  const [editIndex, setEditIndex] = useState(null); //Curent state h mere
  const [editValue, setEditValue] = useState({}); //value update hony k bad is m store hogi
  const [sorting, setSorting] = useState([]); //sorting krny k liy
  const [globalFilter, setGlobalFilter] = useState("");

  const fields = [
    "name",
    "email",
    "password",
    "phone",
    "specialization",
    "address",
  ];

  const startEdit = (index, user) => {
    setEditIndex(index);
    setEditValue({ ...user }); // copy current values into local edit state
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue({});
  };

  const saveEdit = (index) => {
    onUpdateUser(index, { ...users[index], ...editValue });
    cancelEdit();
  };

  const columns = fields.map((field) => ({
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
      >
        {field.charAt(0).toUpperCase() + field.slice(1)}
        {{
          asc: "🔼",
          desc: "🔽",
        }[column.getIsSorted()] ?? ""}
      </button>
    ),
    accessorKey: field,
    filterFn: field === "name" ? "includesString" : undefined,

    cell: (ctx) => {
      const { row, getValue } = ctx;
      const isEditing = editIndex === row.index;

      if (isEditing) {
        if (field === "specialization") {
          return (
            <select
              value={editValue[field] ?? getValue()}
              onChange={(e) =>
                setEditValue((prev) => ({ ...prev, [field]: e.target.value }))
              }
              className={styles.inputField}
            >
              <option value="">Select specialization</option>
              {Array.isArray(specializationOptions) &&
              specializationOptions.length > 0 ? (
                specializationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))
              ) : (
                <option disabled>No options available</option>
              )}
            </select>
          );
        }

        // default: text input
        return (
          <input
            name={field}
            value={editValue[field] ?? getValue()}
            onChange={(e) =>
              setEditValue((prev) => ({ ...prev, [field]: e.target.value }))
            }
            className={styles.inputField}
          />
        );
      }

      // normal display
      return String(getValue() ?? "");
    },
  }));

  // Actions column
  columns.push({
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const isEditing = editIndex === row.index;
      return isEditing ? (
        <div className={styles.actions}>
          <button
            onClick={() => saveEdit(row.index)}
            className={styles.saveBtn}
          >
            Save
          </button>
          <button onClick={cancelEdit} className={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      ) : (
        <div className={styles.actions}>
          <button
            onClick={() => onDeleteUser(row.index)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
          <button
            onClick={() => startEdit(row.index, row.original)}
            className={styles.editBtn}
          >
            Edit
          </button>
        </div>
      );
    },
  });

  const table = useReactTable({
    data: users || [],
    columns,
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),

    initialState: {
      pagination: { pageIndex: 0, pageSize: 5 },
    },
  });

  if (!users || users.length === 0) return <p>No users yet</p>;

  return (
    <div className={styles.tableWrapper}>
      <h3>Users Using Static Crud</h3>
      <input
        type="text"
        placeholder="Search by name..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className={styles.searchInput}
      />

      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
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
                  {flexRender(
                    cell.column.columnDef.cell ??
                      cell.column.columnDef.accessorKey,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
