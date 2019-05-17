import React from 'react';
import { PropTypes } from 'prop-types';

import './TodoList.css';
import Todo from '../common/Todo/Todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul className="todo-list">
    {todos &&
      todos.map((todo, index) => (
        todo &&
        <Todo
          key={index}
          data={todo}
          toggleTodo={() => toggleTodo(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ),
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
