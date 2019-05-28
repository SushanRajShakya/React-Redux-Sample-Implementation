import React from 'react';

import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { updateFilter } from '../../../../actions/filterActions';
import { TEXT_FORMATS } from '../../../../constants/filterConstants';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidUpdate = () => {
    const { shouldUpdateFilter, shouldResetFilter, updateFilter } = this.props;
    shouldUpdateFilter && updateFilter(this.props, this.setTextFormat(this.state.value));
    shouldResetFilter &&
      this.setState({
        value: '',
      });
  };

  /**
   * Verifies the format property of the filter and sets the text format accordingly.
   */
  setTextFormat = () => {
    if (this.props.format === TEXT_FORMATS.uppercase) {
      return this.state.value.toUpperCase();
    } else if (this.props.format === TEXT_FORMATS.lowercase) {
      return this.state.value.toLowerCase();
    } else {
      return this.state.value;
    }
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render = () => {
    const { label, placeholder, isDisabled, type } = this.props;
    return (
      <div className="filter-block">
        <span className="filter-label">{label}</span>
        <TextField
          style={{
            margin: '10px',
          }}
          placeholder={placeholder}
          label={label}
          type={type}
          value={this.state.value}
          disabled={isDisabled}
          onChange={this.handleChange}
          margin="normal"
        />
      </div>
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
