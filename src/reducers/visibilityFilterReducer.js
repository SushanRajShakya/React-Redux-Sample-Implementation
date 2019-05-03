import { VISIBILITY_FILTER } from "../actions/todoActions";

const visibilityFilterReducer = (state = VISIBILITY_FILTER.SHOW_ALL, action) => {
  switch (action.payload) {
    case VISIBILITY_FILTER.SHOW_ACTIVE:
      return VISIBILITY_FILTER.SHOW_ACTIVE;
    case VISIBILITY_FILTER.SHOW_COMPLETED:
      return VISIBILITY_FILTER.SHOW_COMPLETED;
    default:
      return VISIBILITY_FILTER.SHOW_ALL;
  }
};

export default visibilityFilterReducer;
