import {
  FormControlLabel,
  FormGroup,
  Radio,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const FilterItem = (props) => {
  const [selected, setSelected] = useState('');
  return (
    <div key={props.id}>
      <Typography variant='h6' pb={1} pt={1} borderBottom='1px solid #ddd'>
        {props.filter.title}
      </Typography>
      <FormGroup
        sx={{
          p: '8px 16px 0 16px',
        }}
      >
        {props.filter.listItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Radio
                checked={item.name === selected}
                onClick={(e) => {
                  props.handleSelected(item.name, !(item.name === selected));
                  setSelected(item.name === selected ? '' : item.name);
                }}
              />
            }
            name={item.name}
            label={item.label}
          />
        ))}
      </FormGroup>
    </div>
  );
};

const FilterProduct = (props) => {
  const { categories, handleSelected } = props;

  const filters = [
    {
      id: 'category-1',
      title: 'Danh mục',
      listItems: categories.map((item) => {
        return {
          id: 'laptop-' + item.id,
          name: item.id + '',
          label: item.title,
        };
      }),
    },
  ];
  return (
    <Stack spacing={1.5} p={1} pr={2} pt={0}>
      <Typography
        variant='h6'
        textAlign='center'
        bgcolor={'#f6f6f6'}
        border='1px solid #eee'
        borderRadius={1}
        p={0.5}
      >
        Lọc sản phẩm
      </Typography>
      {filters.map((item) => (
        <FilterItem
          filter={item}
          handleSelected={handleSelected}
          key={item.id}
        />
      ))}
    </Stack>
  );
};

export default FilterProduct;
