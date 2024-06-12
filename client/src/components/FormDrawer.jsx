import {
  Box,
  Button,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';

const FormDrawer = (props) => {
  const {
    title,
    sx = {},
    formFields,
    initialValues,
    btnText,
    children,
    onChange,
    onClose,
    open,
    onSubmit,
  } = props;

  const gridColStyle = {
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    display: 'grid',
    marginBottom: '1.5rem',
  };

  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          width: '85%',
          ...sx,
        },
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submit');
          onSubmit();
        }}
      >
        <Stack>
          <Box
            sx={{
              p: '1.5rem',
              bgcolor: 'rgb(249 250 251)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              position: 'sticky',
              top: 0,
            }}
          >
            <Box>
              <Typography variant='h5'>{title}</Typography>
              <Typography>
                {title} và những thông tin cần thiết ở đây
              </Typography>
            </Box>
            <Button color='error' onClick={onClose}>
              <CancelOutlined
                sx={{
                  fontSize: 40,
                }}
              />
            </Button>
          </Box>

          <Grid p={4} container spacing={2} minHeight={'calc(100vh - 211px)'}>
            {formFields.map((item) => {
              let field;
              let disabled = item.disabled ?? false;
              if (item.type === 'textarea') {
                field = (
                  <textarea
                    name={item.name}
                    tabIndex={1}
                    placeholder={item.placeholder}
                    rows='4'
                    defaultValue={initialValues[item.name]}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    disabled={disabled}
                    style={{
                      width: '100%',
                      fontSize: 15,
                      padding: 12,
                      backgroundColor: '#f3f4f6',
                      borderRadius: 6,
                      border: '1px solid #e5e7eb',
                      lineHeight: 1.5,
                    }}
                    required
                  ></textarea>
                );
              } else if (item.type === 'select') {
                field = (
                  <div>
                    <FormControl sx={{ width: 300 }} disabled={disabled}>
                      <InputLabel>{item.title}</InputLabel>
                      <Select
                        defaultValue={initialValues[item.name]}
                        onChange={onChange}
                        name={item.name}
                        required
                      >
                        {item.options.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                );
              } else {
                field = (
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    defaultValue={initialValues[item.name]}
                    onChange={onChange}
                    disabled={disabled}
                    style={{
                      width: item.type === 'checkbox' ? '5%' : '100%',
                      fontSize: 15,
                      padding: 12,
                      backgroundColor: '#f3f4f6',
                      borderRadius: 6,
                      border: '1px solid #e5e7eb',
                      lineHeight: 1.5,
                    }}
                    required
                  />
                );
              }
              return (
                <Grid
                  key={item.id}
                  item
                  sx={gridColStyle}
                  xs={12}
                  alignItems={'center'}
                >
                  <label
                    style={{
                      gridColumn: 'span 2 / span 2',
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </label>
                  <Box gridColumn='span 4 / span 4'>{field}</Box>
                </Grid>
              );
            })}

            {children && (
              <Grid item xs={12}>
                {children}
              </Grid>
            )}
          </Grid>
          <Box
            p={4}
            display={'flex'}
            justifyContent={'space-between'}
            bgcolor={'rgb(249 250 251)'}
            position={'sticky'}
            width={'100%'}
            bottom={0}
          >
            <Box width={'48%'}>
              <Button
                onClick={onClose}
                fullWidth
                variant='contained'
                sx={{
                  p: 1.25,
                  color: '#ef4444',
                  bgcolor: 'white',
                  border: '1px solid #dfdfdf',
                  ':hover': {
                    bgcolor: '#fef2f2',
                    borderColor: '#ffd1d1',
                  },
                }}
              >
                Huỷ
              </Button>
            </Box>
            <Box width={'48%'}>
              <Button
                fullWidth
                variant='contained'
                sx={{
                  p: 1.25,
                  color: 'white',
                  bgcolor: '#10b981',
                  ':hover': {
                    bgcolor: '#059669',
                  },
                }}
                // onClick={onSubmit}
                type='submit'
              >
                {btnText}
              </Button>
            </Box>
          </Box>
        </Stack>
      </form>
    </Drawer>
  );
};

export default FormDrawer;
