import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    content = <div>Loading...</div>;
  } else if (todoStatus === 'succeeded') {
    content = (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  } else if (todoStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Todos</h2>
      {content}
    </section>
  );
};

export default TodoList;
