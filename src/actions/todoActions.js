export const VISIBILITY_FILTER = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// Actions
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let id = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: ++id,
    text,
    completed: false,
  },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter,
});
