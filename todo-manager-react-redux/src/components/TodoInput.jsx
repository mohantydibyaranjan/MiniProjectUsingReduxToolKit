import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-l-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
      />
      <button
        type="submit"
        className="px-6 py-3 font-semibold text-white bg-purple-600 rounded-r-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
