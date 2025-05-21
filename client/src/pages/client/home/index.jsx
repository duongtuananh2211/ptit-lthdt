import { Stack } from '@mui/material';
import TopBanner from './TopBanner';
import FeaturedProduct from './FeaturedProduct';
import FeaturedCategory from './FeaturedCategory';
import PurchasedCustomer from './PurchasedCustomer';
import SaleEvent from './SaleEvent';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';

const HomePage = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  const fetchData = () => {
    fetch(`${API_URL}/product/best-selling`)
      .then((data) => data.json())
      .then((data) => {
        if ('status' in data) {
          return;
        }
        setBestSellingProducts(data);
      });

    fetch(`${API_URL}/product/new`)
      .then((data) => data.json())
      .then((data) => {
        if ('status' in data) {
          return;
        }
        setNewProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack spacing={4}>
      <TopBanner />
      <SaleEvent />
      <FeaturedCategory />
      <FeaturedProduct
        title='Sản phẩm bán chạy'
        products={bestSellingProducts}
      />
      <FeaturedProduct title='Sản phẩm mới' products={newProducts} />
      <PurchasedCustomer />
    </Stack>
  );
};

export default HomePage;
