import React, { useState, useRef, useCallback } from 'react';
import './App.css';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Ts 유투브보고 블로그에정리하기',
      checked: true,
    },
    {
      id: 2,
      text: 'Scss 공부하고 블로그에정리하기',
      checked: true,
    },
    {
      id: 3,
      text: 'Css 김버그 노트 다시 읽으면서 블로그에정리하기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const handleInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const handleRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const handleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert handleInsert={handleInsert} />
      <TodoList
        todos={todos}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
      />
    </TodoTemplate>
  );
};

export default App;
