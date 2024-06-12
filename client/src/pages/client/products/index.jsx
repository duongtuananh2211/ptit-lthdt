import { Grid, Stack, Typography } from '@mui/material';
import FilterProduct from './FilterProduct';
import ListProduct from './ListProduct';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(0);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('name') ?? '';

  const fetchData = () => {
    fetch('http://localhost:8080/api/product')
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchCategoryData = () => {
    fetch('http://localhost:8080/api/category')
      .then((data) => data.json())
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <Stack spacing={3} p={3} px={1.5} bgcolor={'#fff'}>
      <div>
        <div
          style={{
            display: 'inline-block',
            borderBottom: '3px solid #3c4a65',
            paddingBottom: 6,
          }}
        >
          <Typography
            variant='h5'
            color={'#3c4a65'}
            mr={1}
            display={'inline-block'}
          >
            Laptop
          </Typography>
          <Typography fontSize={12} color='#888' display={'inline-block'}>
            (Tổng{' '}
            {
              products
                .filter(
                  (item) => item['category']['id'] === filter || filter === 0
                )
                .filter((v) =>
                  v['title'].toLowerCase().includes(search.toLowerCase())
                ).length
            }{' '}
            sản phẩm)
          </Typography>
        </div>
      </div>
      <Grid container>
        <Grid item xs={2}>
          <FilterProduct
            categories={categories}
            handleSelected={(name, checked) => {
              setFilter(checked ? parseInt(name) : 0);
            }}
          />
        </Grid>
        <Grid item xs={10}>
          <ListProduct
            data={products
              .filter(
                (item) => item['category']['id'] === filter || filter === 0
              )
              .filter((v) =>
                v['title'].toLowerCase().includes(search.toLowerCase())
              )}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductsPage;
