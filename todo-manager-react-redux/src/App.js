import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './features/todo/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo Manager</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
