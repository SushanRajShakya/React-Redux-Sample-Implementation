import {
  VISIBILITY_FILTER,
  toggleTodo,
  removeTodo,
} from '../../actions/todoActions';
import { connect } from 'react-redux';
import TodoList from './TodoList';

/**
 * Returns array of todos based on the current visibility filter.
 *
 * @param {array<object>} todos
 * @param {string} visibilityFilter
 * @returns {array<object>}
 */
const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case VISIBILITY_FILTER.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VISIBILITY_FILTER.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
