import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Form from '../../../components/form';
import { ArrowBack } from '@mui/icons-material';
import AddProductCollection from './AddProductCollection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditCollectionPage = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [selected, setSelected] = useState([]);

  const fetchData = (id) => {
    fetch(`http://localhost:8080/api/collection/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setCollection(data);
      });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const generalFormFields = [
    {
      id: 'name-collection',
      title: 'Tên',
      name: 'title',
      type: 'text',
      xs: 12,
      placeholder: 'Tên bộ sưu tập',
    },
    {
      id: 'des-collection',
      title: 'Mô tả',
      name: 'des',
      type: 'text',
      xs: 12,
      placeholder: 'Nhập mô tả về bộ sưu tập',
    },
    {
      id: 'type-collection',
      title: 'Loại',
      name: 'type',
      type: 'text',
      xs: 12,
      placeholder: 'Loại bộ sưu tập',
    },
  ];

  const initialValues = {
    id: collection ? collection['id'] : '',
    title: collection ? collection['title'] : '',
    type: collection ? collection['type'] : '',
    des: collection ? collection['des'] : '',
  };

  return (
    <>
      {collection ? (
        <Stack alignItems={'center'}>
          <Stack width={'calc(100% - 260px - 10%)'}>
            <Grid container mb={2} alignItems={'center'}>
              <IconButton href='/admin/collections'>
                <ArrowBack />
              </IconButton>
              <Typography variant='h5' mx={1}>
                Sửa bộ sưu tập
              </Typography>
            </Grid>

            <Form
              id='form-new-collection'
              action='/'
              method='POST'
              formFields={generalFormFields}
              initialValues={initialValues}
              onSubmit={(values) => {
                fetch(`http://localhost:8080/api/collection/${id}`, {
                  body: JSON.stringify(values),
                  headers: {
                    'Content-type': 'Application/json',
                  },
                  method: 'PUT',
                })
                  .then((data) => data.json())
                  .then((data) => {
                    console.log(data);
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
      ) : (
        <></>
      )}
    </>
  );
};

export default EditCollectionPage;
