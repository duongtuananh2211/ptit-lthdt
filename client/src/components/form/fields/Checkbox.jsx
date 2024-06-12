import { FormControlLabel, Checkbox as CheckboxMui } from '@mui/material';

const Checkbox = (props) => {
  const { id, name, title, value, onChange, onBlur } = props;

  return (
    <FormControlLabel
      control={
        <CheckboxMui
          id={id}
          checked={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
        />
      }
      label={title}
    />
  );
};

export default Checkbox;
