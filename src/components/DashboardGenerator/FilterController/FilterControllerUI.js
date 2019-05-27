import React from 'react';
import { Button } from '@material-ui/core';

const FilterControllerUI = props => {
  const { filters } = props;
  return (
    <div>
      <div
        styles={{
          float: 'left',
        }}>
        {filters && filters.map((item, index) => props.getFilter(item, index))}
      </div>

      <div
        styles={{
          float: 'right',
        }}>
        <Button
          style={{
            margin: '5px',
          }}
          variant="contained"
          color="primary"
          onClick={props.show}>
          Show
        </Button>
        <Button
          style={{
            margin: '5px',
          }}
          variant="contained"
          color="secondary"
          onClick={props.reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FilterControllerUI;
