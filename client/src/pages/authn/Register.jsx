import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        position: 'relative',
        background:
          'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,128,96,1) 100%)',
      }}
    >
      <Grid
        item
        xs={12}
        container
        justifyContent='center'
        alignItems='center'
        zIndex={1}
      >
        <Grid
          item
          sx={{
            bgcolor: '#fff',
            px: 4,
            py: 6,
            borderRadius: 2,
          }}
          xs={4}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='baseline'
                sx={{ mb: { xs: -0.5, sm: 0.5 } }}
              >
                <Typography variant='h3' color={'#008060'}>
                  Đăng ký tài khoản mới
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Formik
                initialValues={{
                  fullName: 'Nguyễn Minh Quân',
                  email: 'anhquankk51@gmail.com',
                  password1: '123123',
                  password2: '123123',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  if (values['password1'] !== values['password2']) return;
                  const response = await fetch(
                    `http://localhost:8080/api/user/register`,
                    {
                      method: 'POST',
                      body: JSON.stringify({
                        fullName: values['fullName'],
                        email: values['email'],
                        password: values['password1'],
                      }),
                      headers: {
                        'Content-type': 'Application/json',
                      },
                    }
                  );
                  const data = await response.json();
                  if ('status' in data) {
                    return;
                  }
                  enqueueSnackbar('Đăng ký tài khoản thành công', {
                    variant: 'success',
                  });
                  navigate('/login');
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor='fullName-login'>
                            Họ tên
                          </InputLabel>
                          <OutlinedInput
                            id='fullName-login'
                            type='fullName'
                            value={values.fullName}
                            name='fullName'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder='Nhập họ tên'
                            fullWidth
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor='email-login'>Email</InputLabel>
                          <OutlinedInput
                            id='email-login'
                            type='email'
                            value={values.email}
                            name='email'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder='Nhập email'
                            fullWidth
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor='password-1-login'>
                            Mật khẩu
                          </InputLabel>
                          <OutlinedInput
                            fullWidth
                            id='-password-1-login'
                            type={showPassword ? 'text' : 'password'}
                            value={values.password1}
                            name='password1'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position='end'>
                                <IconButton
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                  color='secondary'
                                >
                                  {showPassword ? (
                                    <EyeOutlined />
                                  ) : (
                                    <EyeInvisibleOutlined />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            placeholder='Nhập mật khẩu'
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor='password-2-login'>
                            Nhập lại mật khẩu
                          </InputLabel>
                          <OutlinedInput
                            fullWidth
                            id='-password-2-login'
                            type={showPassword ? 'text' : 'password'}
                            value={values.password2}
                            name='password2'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position='end'>
                                <IconButton
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                  color='secondary'
                                >
                                  {showPassword ? (
                                    <EyeOutlined />
                                  ) : (
                                    <EyeInvisibleOutlined />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            placeholder='Nhập mật khẩu'
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          disableElevation
                          disabled={isSubmitting}
                          fullWidth
                          size='large'
                          type='submit'
                          variant='contained'
                          sx={{
                            bgcolor: '#008060',
                            fontWeight: 600,
                            ':hover': {
                              bgcolor: '#008060',
                              opacity: 0.9,
                            },
                          }}
                        >
                          Đăng ký
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
