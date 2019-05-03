import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';
import { onIncrement, onDecrement } from '../../actions/counterActions';

const Counter = ({value, onIncrement, onDecrement}) => (
  <div className="counter-wrapper">
    <h2>Counter</h2>
    <h3>{value}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const mapStateToProps = state => ({
  value: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(onIncrement()),
  onDecrement: () => dispatch(onDecrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
