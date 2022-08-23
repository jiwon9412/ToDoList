import React, { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
