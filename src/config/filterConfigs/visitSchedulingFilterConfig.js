import { FILTER_TYPE, TYPE } from '../../constants/filterConstants';

export const FILTER_CONFIG = [
  {
    fieldName: 'description',
    label: 'Description',
    filterType: FILTER_TYPE.inputField,
    type: TYPE.text,
    value: '',
    placeholder: 'Enter description',
    isDisabled: false,
  },
  {
    fieldName: 'age',
    label: 'Age',
    filterType: FILTER_TYPE.dropdown,
    options: {
      A: 'below 18',
      B: 'between 18-25',
      C: 'between 25-50',
      D: 'above 50',
    },
    placeholder: 'Choose data source',
    value: [],
    isDisabled: false,
  },
  {
    fieldName: 'scheduled_date',
    label: 'Scheduled Date',
    filterType: FILTER_TYPE.datePicker,
    placeholder: 'Choose a date',
    isDisabled: false,
    value: ''
  },
];
