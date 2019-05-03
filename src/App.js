import './App.css';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import CounterContainer from './components/Counter/Counter';
import VisibilityFilter from './components/TodoList/VisibilityFilter';
import AddTodo from './components/TodoList/AddTodo/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Test App</h1>
        <CounterContainer />
        <AddTodo/>
        <TodoList/>
        <VisibilityFilter/>
      </div>
    </Provider>
  );
}

export default App;
