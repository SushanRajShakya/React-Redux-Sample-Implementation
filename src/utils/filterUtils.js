import { DROPDOWN_OPTIONS, FILTER_TYPE } from '../constants/filterConstants';

/**
 * Generates the required query for the filter based on the configurations.
 *
 * @params filters {array<object>}
 * @return object
 */
export const generateQuery = filters => {
  const queryFilter = {
    $and: [],
    $orderby: {},
  };

  if (!filters) {
    return queryFilter;
  }

  filters.forEach(filter => {
    if (!filter.isDisabled) {
      switch (filter.filterType) {
        case FILTER_TYPE.dropdown:
          generateQueryForDropDown(filter, queryFilter);
          break;
        case FILTER_TYPE.datePicker:
          generateQueryForDatePicker(filter, queryFilter);
          break;
        case FILTER_TYPE.inputField:
          generateQueryForInputField(filter, queryFilter);
          break;
        default:
          break;
      }
    }
  });

  // filters.forEach(function(filter) {
  //   if (filter.filterType === 'Range' && !filter.is_disabled) {
  //     if (filter.min) {
  //       const minValue = parseInt(filter.min);
  //       if (minValue < filter.lower_limit || minValue > filter.max) {
  //         filter.min = filter.lower_limit;
  //       }
  //       queryFilter.$and.push({
  //         [filter.fieldName]: { $gte: parseInt(filter.min) },
  //       });
  //     }
  //     if (filter.max) {
  //       const maxValue = parseInt(filter.max);
  //       if (maxValue > filter.upper_limit || maxValue < filter.min) {
  //         filter.max = filter.upper_limit;
  //       }
  //       queryFilter.$and.push({
  //         [filter.fieldName]: { $lte: parseInt(filter.max) },
  //       });
  //     }
  //   } else if (filter.filterType === 'In' && !filter.is_disabled) {
  //     var inValues = [];

  //     if (filter.display_type === 'checkbox') {
  //       filter.Infilter_values.filter(filter => filter.is_default === true).forEach(filtered => {
  //         inValues.push({ [filter.fieldName]: { $eq: filtered.value } });
  //       });
  //     } else if (filter.display_type === 'dropdown') {
  //       if (filter.fieldName != 'order_by') {
  //         filter.selected_values.forEach(val => {
  //           if (val === 'All') {
  //           } else {
  //             inValues.push({ [filter.fieldName]: { $eq: val } });
  //           }
  //         });
  //       } else {
  //         filter.selected_values.forEach(val => {
  //           queryFilter.$orderby[val.key] = val.sort_value;
  //         });
  //       }
  //     }
  //     if (inValues.length > 0) {
  //       queryFilter.$and.push({ $or: inValues });
  //     }
  //   } else if (filter.filterType === 'RELOP' && !filter.is_disabled) {
  //     Object.keys(filter.Filter_relop_values).forEach(function(key, i) {
  //       if (filter.values[i] < 0) {
  //         let operator = filter.Filter_relop_values[key] == '>' ? '$gt' : '$lt';
  //         queryFilter.$and.push({
  //           [filter.fieldName]: { [operator]: parseInt(filter.values[i]) },
  //         });
  //       }
  //     });
  //   } else if (filter.filterType === 'DateRange' && !filter.is_disabled) {
  //     if (filter.min !== '0000-00-00T00:00:00' && filter.min !== null) {
  //       let formattedDateMin = new DatePipe('en-US').transform(filter.min, 'yyyy-MM-ddT00:00:00');
  //       formattedDateMin = formattedDateMin + 'Z';
  //       queryFilter.$and.push({
  //         [filter.fieldName]: { $gte: { $date: formattedDateMin } },
  //       });
  //     }
  //     if (filter.max !== '0000-00-00T00:00:00' && filter.max !== null) {
  //       let formattedDateMax = new DatePipe('en-US').transform(filter.max, 'yyyy-MM-dd');
  //       // time is set to 23:59:59 so that it includes the selected date too
  //       formattedDateMax = formattedDateMax + 'T23:59:59Z';
  //       queryFilter.$and.push({
  //         [filter.fieldName]: { $lte: { $date: formattedDateMax } },
  //       });
  //     }
  //   } else if (
  //     filter.filterType === 'date' &&
  //     !filter.is_disabled &&
  //     filter.value !== '0000-00-00T00:00:00' &&
  //     filter.value !== null &&
  //     filter.value !== ''
  //   ) {
  //     let formattedDate = new DatePipe('en-US').transform(filter.value, 'yyyy-MM-ddT00:00:00');
  //     formattedDate = formattedDate + 'Z';
  //     queryFilter.$and.push({
  //       [filter.fieldName]: { $eq: { $date: formattedDate } },
  //     });
  //   } else if (filter.filterType === 'simple' && !filter.is_disabled && filter.value !== '') {
  //     //TODO remove this hack for application id ones changes in the apis are made
  //     let value =
  //       filter.fieldName === 'application_id'
  //         ? '<a href=https://callcenter.firsthelpfinancial.com/repo/index/assignment/id/' +
  //           filter.value.trim() +
  //           '>' +
  //           filter.value.trim() +
  //           ' </a>'
  //         : filter.operator === '$like'
  //         ? filter.format === 'uppercase'
  //           ? '%' + filter.value.trim().toUpperCase() + '%'
  //           : '%' + filter.value.trim() + '%'
  //         : filter.value.trim();

  //     if (filter.type === 'number') {
  //       queryFilter.$and.push({
  //         [filter.fieldName]: { [filter.operator]: parseInt(value) },
  //       });
  //     } else {
  //       queryFilter.$and.push({
  //         [filter.fieldName]: { [filter.operator]: value },
  //       });
  //     }
  //   } else if (filter.filterType === 'simpleList' && !filter.is_disabled && filter.value) {
  //     let selectedKey = filter.values.find(v => v.fieldName === filter.key);

  //     if (selectedKey) {
  //       let value =
  //         selectedKey.fieldName === 'application_id'
  //           ? '<a href=https://callcenter.firsthelpfinancial.com/repo/index/assignment/id/' +
  //             filter.value.trim() +
  //             '>' +
  //             filter.value.trim() +
  //             ' </a>'
  //           : selectedKey.operator === '$like'
  //           ? '%' + filter.value.trim() + '%'
  //           : filter.value.trim();

  //       queryFilter.$and.push({
  //         [selectedKey.fieldName]: { [selectedKey.operator]: value },
  //       });
  //     }
  //   }
  // });
  return queryFilter;
};

/**
 * Generate query for dropdown if any option is selected except for ALL or NONE.
 *
 * @param {array<object>} filter
 * @param {object} queryFilter
 */
const generateQueryForDropDown = (filter, queryFilter) => {
  if (filter.value !== '' && filter.value !== DROPDOWN_OPTIONS.all && filter.value !== DROPDOWN_OPTIONS.none) {
    queryFilter.$and.push({ [filter.fieldName]: { $eq: filter.value } });
  }
};

/**
 * Generate query for input field and apply required formats based on the configuration.
 *
 * @param {array<object>} filter
 * @param {object} queryFilter
 */
const generateQueryForInputField = (filter, queryFilter) => {
  if (filter.value === '') {
    return;
  }

  if (filter.type === 'number') {
    parseInt(filter.value) &&
      queryFilter.$and.push({
        [filter.fieldName]: { [filter.operator]: parseInt(filter.value) },
      });
  } else {
    queryFilter.$and.push({
      [filter.fieldName]: { [filter.operator]: filter.value.trim() },
    });
  }
};

/**
 * Generate query for date picker and apply required changes in date format.
 *
 * @param {array<object>} filter
 * @param {object} queryFilter
 */
const generateQueryForDatePicker = (filter, queryFilter) => {
  if (filter.value === '' || filter.value === null) {
    return;
  }

  queryFilter.$and.push({
    [filter.fieldName]: { $eq: { $date: filter.value } },
  });
};
