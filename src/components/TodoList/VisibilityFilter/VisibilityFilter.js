import React from 'react';
import './VisibilityFilter.css';
import { PropTypes } from 'prop-types';
import { VISIBILITY_FILTER } from '../../../actions/todoActions';

const VisibilityFilter = ({ filter, onClick }) => (
  <div>
    <span>Show: </span>
    <button
      disabled={filter === VISIBILITY_FILTER.SHOW_ALL}
      className="all"
      onClick={() => onClick(VISIBILITY_FILTER.SHOW_ALL)}
    >
      All
    </button>
    <button
      disabled={filter === VISIBILITY_FILTER.SHOW_ACTIVE}
      className="active"
      onClick={() => onClick(VISIBILITY_FILTER.SHOW_ACTIVE)}
    >
      Active
    </button>
    <button
      disabled={filter === VISIBILITY_FILTER.SHOW_COMPLETED}
      className="completed"
      onClick={() => onClick(VISIBILITY_FILTER.SHOW_COMPLETED)}
    >
      Completed
    </button>
  </div>
);

VisibilityFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default VisibilityFilter;