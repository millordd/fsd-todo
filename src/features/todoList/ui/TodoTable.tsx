// src/features/todoList/ui/TodoTable.tsx
import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { useGetTodos } from 'entities/todo/service';


type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};
// const todos  = [
//   {
//     id:1,
//     todo:"String",
//     completed:true,
//     userId:1
//   }
// ]

const columns: ColumnDef<Todo>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'todo', header: 'Todo' },
  { accessorKey: 'completed', header: 'Completed' },
  { accessorKey: 'userId', header: 'userId' },
];

export const TodoTable = () => {
  const { data: todos } = useGetTodos();
  const table = useReactTable({
    data: todos?.todos || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
console.log(todos)
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
    </div>
  );
};
