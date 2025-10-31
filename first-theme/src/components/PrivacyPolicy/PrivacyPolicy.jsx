import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Privacy = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts/invalid").then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch posts");
        }
        return r.json();
      }),
  });

  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Title", accessorKey: "title" },
    { header: "Body", accessorKey: "body" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (error) {
      toast.error(
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span>{error.message}</span>
        </div>
      );
    }
  }, [error]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "rgba(255,255,255,0.9)",
        }}
      >
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="3x"
          style={{ color: "#3498db" }}
        />
      </div>
    );
  }

  return (
    <table border={1}>
      <thead style={{ backgroundColor: "#f0f0f0" }}>
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
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Privacy;
