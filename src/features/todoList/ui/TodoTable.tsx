import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { useGetTodos } from 'entities/todo/api/fetchTodos';

import { useState } from 'react';


type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};

const columns: ColumnDef<Todo>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'todo', header: 'Todo' },
  { accessorKey: 'completed', header: 'Completed' },
  { accessorKey: 'userId', header: 'userId' },
];

export const TodoTable = () => {
  const [page, setPage] = useState(0);
  const limit = 15;
  const { data: todos } = useGetTodos(page * limit, limit);
  const table = useReactTable({
    data: todos?.todos || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <table className="w-full border border-gray-700 text-left text-sm text-gray-300">
        <thead className="bg-gray-800 text-gray-200 uppercase">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-600">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-3 font-medium">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-900">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-800">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center  bg-slate-800">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-300">
          Page {page + 1} of {Math.ceil((todos?.total ?? 0) / limit)}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={(todos?.todos?.length ?? 0) < limit}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

