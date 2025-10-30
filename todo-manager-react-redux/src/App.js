import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
          Todo Manager
        </h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
