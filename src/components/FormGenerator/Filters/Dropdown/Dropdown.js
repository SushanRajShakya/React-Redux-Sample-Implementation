import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

class DropDown extends React.Component {
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

  render = () => {
    const { options, label } = this.props;
    return (
      <FormControl
        style={{
          width: '200px',
          margin: '20px',
        }}
        margin="normal">
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <Select value={this.state.value} onChange={this.handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options && Object.keys(options).map((key, index) => <MenuItem value={key} key={`MenuItem${index}`}>{options[key]}</MenuItem>)}
        </Select>
      </FormControl>
    );
  };
}

export default DropDown;
