import { Stack, Typography } from '@mui/material';
import CollectionTable from './CollectionTable';
import { useEffect, useState } from 'react';

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/collection')
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
      await fetch(`http://localhost:8080/api/collection/${collectionIds[i]}`, {
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
