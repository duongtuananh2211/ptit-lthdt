import Typography from '@mui/material/Typography';
import ProductView from './ProductView';
import CartSummary from './CartSummary';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    let cart = localStorage.getItem('cart');
    if (cart === null) return;
    cart = JSON.parse(cart);
    let queryParams = cart.reduce((pre, cur) => pre + `ids=${cur['id']}&`, '');
    queryParams = queryParams.substring(0, queryParams.length - 1);
    fetch(`http://localhost:8080/api/product/bulk?${queryParams}`)
      .then((data) => data.json())
      .then((data) => {
        if ('status' in data) {
          return;
        }
        setProducts(
          (data ?? []).map((v) => {
            let p = cart.find((c) => c['id'] === v['id']);
            let quantity = 1;
            if (p !== null) {
              quantity = p['quantity'];
            }
            return {
              ...v,
              quantity: quantity,
            };
          })
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack bgcolor={'#fff'} p={3} spacing={3} borderRadius={1}>
      <Typography variant='h5'>Giỏ hàng</Typography>
      <ProductView
        data={products}
        reloadCart={() => {
          let cart = localStorage.getItem('cart');
          if (cart === null) return;
          cart = JSON.parse(cart);
          let temp = products.filter((v) => {
            let index = cart.findIndex((c) => c['id'] === v['id']);
            return index >= 0;
          });
          setProducts(
            (temp ?? []).map((v) => {
              let p = cart.find((c) => c['id'] === v['id']);
              let quantity = 1;
              if (p !== null) {
                quantity = p['quantity'];
              }
              return {
                ...v,
                quantity: quantity,
              };
            })
          );
        }}
      />
      <CartSummary data={products} />
    </Stack>
  );
};

export default CartPage;
