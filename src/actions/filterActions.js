// Actions
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';
export const POPULATE_FILTER_OPTIONS = 'POPULATE_FILTER_OPTIONS';

export const updateFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value,
  };
};

export const toggleFilter = filter => ({
  type: TOGGLE_FILTER,
  filter,
});

export const resetFilter = tab => ({
  type: RESET_FILTER,
  filter: {
    tab
  },
});

export const populateFilterOptions = (filter, options) => ({
  type: POPULATE_FILTER_OPTIONS,
  filter,
  options,
});
