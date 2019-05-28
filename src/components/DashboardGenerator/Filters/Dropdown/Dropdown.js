import React from 'react';
import { connect } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { updateFilter } from '../../../../actions/filterActions';

class DropDown extends React.Component {
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
    const { options, label } = this.props;
    return (
      <div className="filter-block">
        <span className="filter-label">{label}</span>
        <FormControl
          style={{
            width: '200px',
            margin: '10px',
          }}
          margin="normal">
          <InputLabel htmlFor={label}>{label}</InputLabel>
          <Select value={this.state.value} onChange={this.handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options &&
              Object.keys(options).map((key, index) => (
                <MenuItem value={key} key={`MenuItem${index}`}>
                  {options[key]}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
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
)(DropDown);
