import { UPDATE_FILTER, POPULATE_FILTER_OPTIONS, RESET_FILTER, TOGGLE_FILTER } from '../actions/filterActions';
import { getDataType } from '../utils/general';
import { TYPE } from '../constants/filterConstants';

const filterReducer = (state, action) => {
  const filters = [...state.filters];
  if (action.filter && action.filter.tab && state.tab === action.filter.tab) {
    switch (action.type) {
      case UPDATE_FILTER:
        return updateFilter(state, action, filters);
      case POPULATE_FILTER_OPTIONS:
        return populateFilters(state, action, filters);
      case RESET_FILTER:
        return resetFilter(state, filters);
      case TOGGLE_FILTER:
        return toggleFilter(state, action, filters);
      default:
        return { ...state };
    }
  }
  return { ...state };
};

export default filterReducer;

/**
 * Toggle disable and enable feature for filters.
 *
 * @param {object} state
 * @param {object} action
 * @param {array<object>} filters
 */
const toggleFilter = (state, action, filters) => {
  return {
    ...state,
    filters: filters.map(filter => {
      if (filter.fieldName === action.filter.fieldName) {
        filter.isDisabled = !filter.isDisabled;
      }
      return filter;
    }),
  };
};

/**
 * Resets all the filters for a particular tab.
 *
 * @param {object} state
 * @param {object} action
 * @param {array<object>} filters
 */
const resetFilter = (state, filters) => {
  return {
    ...state,
    filters: filters.map(filter => {
      if (getDataType(filter.value) === 'string') {
        filter.value = '';
      } else {
        filter.value = [];
      }
      return filter;
    }),
  };
};

/**
 * Populate the filter options
 *
 * @param {object} state
 * @param {object} action
 * @param {array<object>} filters
 */
const populateFilters = (state, action, filters) => {
  return {
    ...state,
    filters: filters.map(filter => {
      if (filter.fieldName === action.filter.fieldName) {
        filter.options = [...action.options];
      }
      return filter;
    }),
  };
};

/**
 * Updates the value for a particular filter based on its type
 *
 * @param {object} state
 * @param {object} action
 * @param {array<object>} filters
 */
const updateFilter = (state, action, filters) => {
  return {
    ...state,
    filters: filters.map(filter => {
      if (filter.fieldName === action.filter.fieldName) {
        filter.value = action.value;
      }
      return filter;
    }),
  };
};
