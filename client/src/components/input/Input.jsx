import { InputLabel, OutlinedInput } from '@mui/material';

const Input = (props) => {
  const {
    id,
    title,
    disabled,
    type,
    value,
    name,
    onChange,
    placeholder,
    sx = {},
  } = props;
  return (
    <div key={id}>
      {title !== '' && (
        <InputLabel
          htmlFor={id}
          sx={{ mb: 0.5, fontSize: 16, color: 'inherit' }}
        >
          {title}:
        </InputLabel>
      )}

      <OutlinedInput
        id={id}
        disabled={disabled}
        type={type}
        defaultValue={value ?? ''}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        sx={{ fontSize: 16, ...sx }}
      />
    </div>
  );
};

export default Input;
