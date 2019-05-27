import React from 'react';
import { connect } from 'react-redux';

import FilterController from '../DashboardGenerator/FilterController/FilterController';

class VisitPrioritization extends React.Component {
  
  render = () => (
    <div>
      <FilterController filters={this.props.filters} tab={this.props.tab}/>
    </div>
  );
}

const mapStateToProps = state => ({
  filters: state.visitPrioritization.filters,
  tab: state.visitPrioritization.tab
});

export default connect(mapStateToProps)(VisitPrioritization);
