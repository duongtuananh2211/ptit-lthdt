import {
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup as RadioGroupMui,
} from '@mui/material';

const RadioGroup = (props) => {
  return (
    <div key={props.id}>
      <InputLabel htmlFor={props.id} sx={{ color: 'inherit', fontSize: 16 }}>
        {props.title}:
      </InputLabel>
      <RadioGroupMui
        defaultValue={props.defaultValue}
        onChange={(e) => {}}
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {props.list.map((item) => (
          <FormControlLabel
            key={item.id + 'radio-group-item'}
            value={item.value}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroupMui>
    </div>
  );
};

export default RadioGroup;
