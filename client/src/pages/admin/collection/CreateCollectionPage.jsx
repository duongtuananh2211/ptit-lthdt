import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Form from '../../../components/form';
import { ArrowBack } from '@mui/icons-material';
import AddProductCollection from './AddProductCollection';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCollectionPage = () => {
  const [selected, setSelected] = useState([]);

  const generalFormFields = [
    {
      id: 'type-collection',
      title: 'Mã',
      name: 'type',
      type: 'text',
      xs: 12,
      placeholder: 'Nhập mã bộ sưu tập',
    },
    {
      id: 'title-collection',
      title: 'Tên',
      name: 'title',
      type: 'text',
      xs: 12,
      placeholder: 'Nhập tên bộ sưu tập',
    },
    {
      id: 'des-collection',
      title: 'Mô tả',
      name: 'des',
      type: 'text',
      xs: 12,
      placeholder: 'Nhập mô tả về bộ sưu tập',
    },
  ];

  const initialValues = {
    title: '',
    type: '',
    des: '',
    products: [],
  };
  const navigate = useNavigate();

  return (
    <Stack alignItems={'center'}>
      <Stack width={'calc(100% - 260px - 10%)'}>
        <Grid container mb={2} alignItems={'center'}>
          <IconButton href='/admin/collections'>
            <ArrowBack />
          </IconButton>
          <Typography variant='h5' mx={1}>
            Tạo bộ sưu tập
          </Typography>
        </Grid>

        <Form
          id='form-new-collection'
          action='/'
          method='POST'
          formFields={generalFormFields}
          initialValues={initialValues}
          onSubmit={(values) => {
            values['products'] = selected.map((item) => {
              return {
                productId: item,
              };
            });
            fetch('http://localhost:8080/api/collection', {
              body: JSON.stringify(values),
              headers: {
                'Content-type': 'Application/json',
              },
              method: 'POST',
            })
              .then((data) => data.json())
              .then((data) => {
                console.log(data);
                navigate('/admin/collections');
              });
          }}
        >
          <AddProductCollection
            selected={selected}
            onSelect={(id) => {
              if (selected.indexOf(id) >= 0) {
                setSelected(selected.filter((v) => v !== id));
              } else {
                setSelected([...selected, id]);
              }
            }}
          />
        </Form>
      </Stack>
    </Stack>
  );
};

export default CreateCollectionPage;
