import './Todo.css';
import React from 'react';
import { PropTypes } from 'prop-types';

const Todo = ({ data, toggleTodo, removeTodo }) => {
  return (
    <li>
      <span className={data.completed ? 'complete' : 'in-complete'}>
        {data.text}
      </span>
      <span className="status"> [ {data.completed ? 'Done' : 'In Progress'} ]</span>
      <button onClick={toggleTodo}>Toggle</button>
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
};

Todo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
