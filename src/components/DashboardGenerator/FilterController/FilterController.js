import { connect } from 'react-redux';
import React, { Component } from 'react';

import DropDown from '../Filters/Dropdown/Dropdown';
import InputField from '../Filters/InputField/InputField';
import DatePicker from '../Filters/DatePicker/DatePicker';
import { resetFilter } from '../../../actions/filterActions';
import { FILTER_TYPE } from '../../../constants/filterConstants';
import FilterControllerUI from './FilterControllerUI';

class FilterController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdateFilter: false,
      shouldResetFilter: false,
    };
  }

  show = () => {
    this.setState({
      shouldUpdateFilter: true,
    });
  };

  reset = () => {
    this.setState({
      shouldResetFilter: true,
    });
    this.props.resetFilter(this.props.tab);
  };

  componentDidUpdate = () => {
    this.state.shouldUpdateFilter && console.log(this.props.filters)
    this.state.shouldUpdateFilter &&
      this.setState({
        shouldUpdateFilter: false,
      });
    this.state.shouldResetFilter &&
      this.setState({
        shouldResetFilter: false,
      });
  };

  getFilter = (filter, index) => {
    switch (filter.filterType) {
      case FILTER_TYPE.dropdown:
        return (
          <DropDown
            key={`Component${index}`}
            {...filter}
            tab={this.props.tab}
            shouldUpdateFilter={this.state.shouldUpdateFilter}
            shouldResetFilter={this.state.shouldResetFilter}
          />
        );
      case FILTER_TYPE.inputField:
        return (
          <InputField
            key={`Component${index}`}
            {...filter}
            tab={this.props.tab}
            shouldUpdateFilter={this.state.shouldUpdateFilter}
            shouldResetFilter={this.state.shouldResetFilter}
          />
        );
      case FILTER_TYPE.datePicker:
        return (
          <DatePicker
            key={`Component${index}`}
            {...filter}
            tab={this.props.tab}
            shouldUpdateFilter={this.state.shouldUpdateFilter}
            shouldResetFilter={this.state.shouldResetFilter}
          />
        );
      default:
        return;
    }
  };

  render = () => <FilterControllerUI filters={this.props.filters} getFilter={this.getFilter} show={this.show} reset={this.reset} />;
}

const mapDispatchToProps = dispatch => ({
  resetFilter: tab => dispatch(resetFilter(tab)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilterController);
