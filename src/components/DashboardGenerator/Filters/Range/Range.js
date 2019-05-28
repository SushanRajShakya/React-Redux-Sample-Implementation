import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import { updateFilter } from '../../../../actions/filterActions';
import { TYPE } from '../../../../constants/filterConstants';

class Range extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor: ', this.props);
    this.state = {
      min: this.props.value.min,
      max: this.props.value.max,
    };
  }

  componentDidUpdate = () => {
    const { shouldUpdateFilter, shouldResetFilter, updateFilter } = this.props;
    shouldUpdateFilter && updateFilter(this.props, this.state);
    shouldResetFilter &&
      this.setState({
        min: '',
        max: '',
      });
  };

  handleChangeMin = event => {
    this.setState({
      min: event.target.value,
    });
  };

  handleChangeMax = event => {
    this.setState({
      max: event.target.value,
    });
  };

  render = () => {
    const { label, isDisabled, max, min } = this.props;
    return (
      <div className="filter-block">
        <span className="filter-label">{label}</span>
        <TextField
          style={{
            margin: '10px',
          }}
          placeholder="From"
          label="From"
          type={TYPE.number}
          value={this.state.min}
          InputProps={{ inputProps: { min: min, max: this.state.max } }}
          disabled={isDisabled}
          onChange={this.handleChangeMin}
          margin="normal"
        />
        <TextField
          style={{
            margin: '10px',
          }}
          placeholder="To"
          label="To"
          type={TYPE.number}
          value={this.state.max}
          InputProps={{ inputProps: { min: this.state.min, max: max } }}
          disabled={isDisabled}
          onChange={this.handleChangeMax}
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
)(Range);
