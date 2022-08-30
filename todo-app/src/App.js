import React, { useState, useRef, useCallback } from 'react';
import './App.css';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

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
