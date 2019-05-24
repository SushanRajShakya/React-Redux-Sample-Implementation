import React from 'react';

import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { updateFilter } from '../../../../actions/filterActions';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidUpdate = () => {
    const { shouldUpdateFilter, shouldResetFilter, updateFilter } = this.props;
    shouldUpdateFilter && updateFilter(this.props, this.state.value);
    shouldResetFilter &&
      this.setState({
        value: '',
      });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render = () => {
    const { label, placeholder, isDisabled, type } = this.props;
    return (
      <TextField
        style={{
          margin: '20px',
        }}
        placeholder={placeholder}
        label={label}
        type={type}
        value={this.state.value}
        disabled={isDisabled}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  };
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => {
    return dispatch(updateFilter(filter, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(InputField);
