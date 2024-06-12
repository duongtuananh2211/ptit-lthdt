import { Button, Grid, Typography } from '@mui/material';
import { Formik } from 'formik';
import TextField from './fields/TextField';
import Checkbox from './fields/Checkbox';

const Form = (props) => {
  const {
    formFields,
    initialValues,
    btnText,
    onSubmit,
    children = <></>,
  } = props;
  console.log(initialValues);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
        onSubmit(values);
      }}
    >
      {({ handleBlur, handleChange, handleSubmit, isSubmitting, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid
            container
            mb={2}
            p={1}
            sx={{
              boxShadow:
                '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
              borderRadius: 2,
            }}
          >
            <Typography mb={1.5} fontWeight={600} p={1} fontSize={16}>
              Tổng quan
            </Typography>
            {formFields.map((item) => {
              let field;
              if (item.type === 'checkbox') {
                field = (
                  <Checkbox
                    id={item.id}
                    title={item.title}
                    value={values[item.name]}
                    name={item.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                );
              } else {
                field = (
                  <TextField
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    value={values[item.name]}
                    name={item.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={item.placeholder}
                  />
                );
              }
              return (
                <Grid key={item.id + '-grid'} mb={2} px={1} item xs={item.xs}>
                  {field}
                </Grid>
              );
            })}
          </Grid>
          {children}
          <Grid
            container
            pt={1.5}
            justifyContent={'space-between'}
            borderTop={'1px solid #ddd'}
          >
            <Button
              disableElevation
              disabled={isSubmitting}
              type='submit'
              sx={{
                fontWeight: 600,
                fontSize: 15,
              }}
              variant='contained'
              color='error'
            >
              Huỷ
            </Button>
            <Button
              disableElevation
              disabled={isSubmitting}
              type='submit'
              sx={{
                fontWeight: 600,
                fontSize: 15,
              }}
              variant='contained'
              color='primary'
            >
              {btnText || 'Lưu lại'}
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Form;
