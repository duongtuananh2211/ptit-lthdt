import { Stack, Typography } from '@mui/material';
import CollectionTable from './CollectionTable';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch(`${API_URL}/collection`)
      .then((data) => data.json())
      .then((data) => {
        setCollections(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (collectionIds) => {
    console.log(collectionIds);
    for (let i = 0; i < collectionIds.length; i++) {
      await fetch(`${API_URL}/collection/${collectionIds[i]}`, {
        method: 'DELETE',
      });
    }
    fetchData();
  };

  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Bộ sưu tập sản phẩm
      </Typography>
      <CollectionTable data={collections} handleDelete={handleDelete} />
    </Stack>
  );
};

export default CollectionPage;
