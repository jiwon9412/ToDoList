import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, handleRemove, handleToggle }) => {
  console.log('TodoList');

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
