import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import { updateFilter } from '../../../../actions/filterActions';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  componentDidUpdate = () => {
    const { shouldUpdateFilter, shouldResetFilter, updateFilter } = this.props;
    shouldUpdateFilter && updateFilter(this.props, this.state.value);
    shouldResetFilter &&
      this.setState({
        value: '',
      });
  };

  render = () => {
    const { label, placeholder } = this.props;
    return (
      <div className="filter-block">
        <span className="filter-label">{label}</span>
        <TextField
          style={{
            margin: '10px',
          }}
          label={label}
          placeholder={placeholder}
          type="date"
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(DatePicker);
