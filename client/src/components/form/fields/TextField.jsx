import { InputLabel, OutlinedInput } from '@mui/material';

const TextField = (props) => {
  const {
    id,
    title = '',
    required = true,
    type,
    value,
    name,
    onBlur = () => {},
    onChange,
    placeholder,
  } = props;
  return (
    <>
      <InputLabel htmlFor={id}>
        {title} {required && '*'}
      </InputLabel>

      <OutlinedInput
        id={id}
        type={type}
        defaultValue={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
      />
    </>
  );
};

export default TextField;
