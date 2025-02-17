import { useAddTodo } from 'entities/todo/service';
import { TodoTable } from 'features'
import { useState } from 'react';



export const TodoPage = () => {


  const {mutate,isPending} = useAddTodo();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    mutate({ todo: newTodo, completed: false, userId: 1 });
    setNewTodo('');
  };

  return (
    <div className='mx-auto h-screen'>
      <div className='w-[90%] mx-auto mt-px'>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
          className="px-3 py-2 border rounded bg-gray-700 text-white"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? 'Adding...' : 'Add Todo'}
        </button>
      </div>
       <TodoTable/>
      </div>
    </div>
  )
}

