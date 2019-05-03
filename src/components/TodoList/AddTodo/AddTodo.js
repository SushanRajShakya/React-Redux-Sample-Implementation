import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTodo } from '../../../actions/todoActions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  resetInput = () => {
    this.setState({ value: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.value.trim();
    text !== '' && this.props.addTodo(this.state.value);
    this.resetInput();
  };

  render = () => {
    return (
      <form>
        <h2>Add Todo</h2>
        <textarea
          placeholder="Enter description of the task"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  };
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);
