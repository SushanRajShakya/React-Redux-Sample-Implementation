import { combineReducers } from 'redux';

import filterReducer from './filterReducers';
import * as visitSchedulingFilters from '../config/filterConfigs/visitSchedulingFilterConfig';
import * as visitPrioritizationFilters from '../config/filterConfigs/visitPrioritizationFilterConfig';

const VISIT_PRIORITIZATION = 'VISIT_PRIORITIZATION';
const VISIT_SCHEDULING = 'VISIT_SCHEDULING';

const initialStateTab1 = {
  tab: VISIT_PRIORITIZATION,
  filters: [...visitPrioritizationFilters.FILTER_CONFIG]
}
const initialStateTab2 = {
  tab: VISIT_SCHEDULING,
  filters: [...visitSchedulingFilters.FILTER_CONFIG]
}

export default combineReducers({
  visitPrioritization: (state = initialStateTab1, action) => filterReducer(state, action),
  visitScheduling: (state = initialStateTab2, action) => filterReducer(state, action),
});
