import React from 'react';
import { TextField } from '@material-ui/core';

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

  render = () => {
    const { label, placeholder } = this.props;
    return (
      <TextField
        style={{
          margin: '20px',
        }}
        label={label}
        placeholder={placeholder}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }
}

export default DatePicker;
