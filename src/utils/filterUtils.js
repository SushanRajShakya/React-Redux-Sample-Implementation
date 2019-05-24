 const 
 
 export const computeQueryEquivalent = (filters) => {
    const queryFilter = {
      $and: [],
      $orderby: {},
    };
    if (!filters) {
      return queryFilter;
    }

    filters.forEach(function(item) {
      if (item.filterType === 'Range' && !item.is_disabled) {
        if (item.min) {
          const minValue = parseInt(item.min);
          if (minValue < item.lower_limit || minValue > item.max) {
            item.min = item.lower_limit;
          }
          queryFilter.$and.push({
            [item.field_name]: { $gte: parseInt(item.min) },
          });
        }
        if (item.max) {
          const maxValue = parseInt(item.max);
          if (maxValue > item.upper_limit || maxValue < item.min) {
            item.max = item.upper_limit;
          }
          queryFilter.$and.push({
            [item.field_name]: { $lte: parseInt(item.max) },
          });
        }
      } else if (item.filterType === 'In' && !item.is_disabled) {
        var inValues = [];

        if (item.display_type === 'checkbox') {
          item.Infilter_values.filter(item => item.is_default === true).forEach(
            filtered => {
              inValues.push({ [item.field_name]: { $eq: filtered.value } });
            },
          );
        } else if (item.display_type === 'dropdown') {
          if (item.field_name != 'order_by') {
            item.selected_values.forEach(val => {
              if (val === 'All') {
              } else {
                inValues.push({ [item.field_name]: { $eq: val } });
              }
            });
          } else {
            item.selected_values.forEach(val => {
              queryFilter.$orderby[val.key] = val.sort_value;
            });
          }
        }
        if (inValues.length > 0) {
          queryFilter.$and.push({ $or: inValues });
        }
      } else if (item.filterType === 'RELOP' && !item.is_disabled) {
        Object.keys(item.Filter_relop_values).forEach(function(key, i) {
          if (item.values[i] < 0) {
            let operator = item.Filter_relop_values[key] == '>' ? '$gt' : '$lt';
            queryFilter.$and.push({
              [item.field_name]: { [operator]: parseInt(item.values[i]) },
            });
          }
        });
      } else if (item.filterType === 'DateRange' && !item.is_disabled) {
        if (item.min !== '0000-00-00T00:00:00' && item.min !== null) {
          let formattedDateMin = new DatePipe('en-US').transform(
            item.min,
            'yyyy-MM-ddT00:00:00',
          );
          formattedDateMin = formattedDateMin + 'Z';
          queryFilter.$and.push({
            [item.field_name]: { $gte: { $date: formattedDateMin } },
          });
        }
        if (item.max !== '0000-00-00T00:00:00' && item.max !== null) {
          let formattedDateMax = new DatePipe('en-US').transform(
            item.max,
            'yyyy-MM-dd',
          );
          // time is set to 23:59:59 so that it includes the selected date too
          formattedDateMax = formattedDateMax + 'T23:59:59Z';
          queryFilter.$and.push({
            [item.field_name]: { $lte: { $date: formattedDateMax } },
          });
        }
      } else if (
        item.filterType === 'date' &&
        !item.is_disabled &&
        item.value !== '0000-00-00T00:00:00' &&
        item.value !== null &&
        item.value !== ''
      ) {
        let formattedDate = new DatePipe('en-US').transform(
          item.value,
          'yyyy-MM-ddT00:00:00',
        );
        formattedDate = formattedDate + 'Z';
        queryFilter.$and.push({
          [item.field_name]: { $eq: { $date: formattedDate } },
        });
      } else if (
        item.filterType === 'simple' &&
        !item.is_disabled &&
        item.value !== ''
      ) {
        //TODO remove this hack for application id ones changes in the apis are made
        let value =
          item.field_name === 'application_id'
            ? '<a href=https://callcenter.firsthelpfinancial.com/repo/index/assignment/id/' +
              item.value.trim() +
              '>' +
              item.value.trim() +
              ' </a>'
            : item.operator === '$like'
            ? item.format === 'uppercase'
              ? '%' + item.value.trim().toUpperCase() + '%'
              : '%' + item.value.trim() + '%'
            : item.value.trim();

        if (item.type === 'number') {
          queryFilter.$and.push({
            [item.field_name]: { [item.operator]: parseInt(value) },
          });
        } else {
          queryFilter.$and.push({
            [item.field_name]: { [item.operator]: value },
          });
        }
      } else if (
        item.filterType === 'simpleList' &&
        !item.is_disabled &&
        item.value
      ) {
        let selectedKey = item.values.find(v => v.field_name === item.key);

        if (selectedKey) {
          let value =
            selectedKey.field_name === 'application_id'
              ? '<a href=https://callcenter.firsthelpfinancial.com/repo/index/assignment/id/' +
                item.value.trim() +
                '>' +
                item.value.trim() +
                ' </a>'
              : selectedKey.operator === '$like'
              ? '%' + item.value.trim() + '%'
              : item.value.trim();

          queryFilter.$and.push({
            [selectedKey.field_name]: { [selectedKey.operator]: value },
          });
        }
      }
    });
    return queryFilter;
  }
