import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Formik } from 'formik';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const AuthLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') ?? 'client';

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
                  Đăng nhập
                </Typography>
                <Typography
                  component={Link}
                  to='/register'
                  variant='body1'
                  sx={{ textDecoration: 'none' }}
                  color='primary'
                >
                  Tạo tài khoản mới
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Formik
                initialValues={{
                  email: 'anhquankk51@gmail.com',
                  password: '123123',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  const response = await fetch(
                    `http://localhost:8080/api/user/login`,
                    {
                      method: 'POST',
                      body: JSON.stringify(values),
                      headers: {
                        'Content-type': 'Application/json',
                      },
                    }
                  );
                  const data = await response.json();
                  localStorage.setItem('user-current', JSON.stringify(data));
                  enqueueSnackbar('Đăng nhập thành công.', {
                    variant: 'success',
                  });
                  if (redirect === 'admin') {
                    navigate('/admin');
                  } else if (redirect === 'client') {
                    navigate('/');
                  }
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
                          <InputLabel htmlFor='password-login'>
                            Mật khẩu
                          </InputLabel>
                          <OutlinedInput
                            fullWidth
                            id='-password-login'
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name='password'
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
                          Đăng nhập
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

export default AuthLogin;
