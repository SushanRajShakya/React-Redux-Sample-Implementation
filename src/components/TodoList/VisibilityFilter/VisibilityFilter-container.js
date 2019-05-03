import {
  VISIBILITY_FILTER,
  setVisibilityFilter,
} from '../../../actions/todoActions';
import { connect } from 'react-redux';
import VisibilityFilter from './VisibilityFilter';

const mapStateToProps = state => ({
  filter: state.visibilityFilter
    ? state.visibilityFilter
    : VISIBILITY_FILTER.SHOW_ALL,
});

const mapDispatchToProps = dispatch => ({
  onClick: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibilityFilter);
