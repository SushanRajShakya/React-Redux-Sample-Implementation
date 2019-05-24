import React from 'react';
import { connect } from 'react-redux';

import FilterController from '../FormGenerator/FilterController/FilterController';

class VisitScheduling extends React.Component {
  render = () => (
    <div>
      <FilterController filters={this.props.filters} tab={this.props.tab} />
    </div>
  );
}

const mapStateToProps = state => ({
  filters: state.visitScheduling.filters,
  tab: state.visitScheduling.tab,
});

export default connect(mapStateToProps)(VisitScheduling);
