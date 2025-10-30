import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { fetchTodos } from './todoSlice';
import TodoItem from '../../components/TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const todoStatus = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (todoStatus === 'idle') {
      dispatch(fetchTodos());
    }
  }, [todoStatus, dispatch]);

  let content;

  if (todoStatus === 'loading') {
    content = <div className="text-center text-gray-500">Loading...</div>;
  } else if (todoStatus === 'succeeded') {
    if (todos.length > 0) {
      content = (
        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </AnimatePresence>
        </ul>
      );
    } else {
      content = <p className="text-center text-gray-500">No todos yet. Add one above!</p>;
    }
  } else if (todoStatus === 'failed') {
    content = <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Tasks</h2>
      {content}
    </section>
  );
};

export default TodoList;
