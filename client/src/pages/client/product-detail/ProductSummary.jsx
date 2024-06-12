import { AddShoppingCart, Redeem } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import { useState } from 'react';
import { addCart } from '../../../utils/cartUtils';
import { useNavigate } from 'react-router-dom';

const styleQuantityChange = {
  height: 36,
  width: 36,
  fontSize: 14,
  display: 'flex',
  fontWeight: 600,
  alignItems: 'center',
  border: '1px solid #dfdfdf',
  justifyContent: 'center',
  textAlign: 'center',
  userSelect: 'none',
};

const ProductSummary = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <Typography variant='h5' fontSize={'1.3rem'} color={'inherit'} mb={2}>
        {product ? product['title'] : ''}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'end', marginBottom: 32 }}>
        <Typography variant='h5' fontSize={'1.4rem'} color={'#E30019'}>
          {moneyFormatter(product ? product['price'] : 0)}
        </Typography>
        <Typography
          ml={2}
          color='#6D6E72'
          sx={{
            textDecorationLine: 'line-through',
            fontSize: 16.5,
          }}
        >
          {moneyFormatter(product ? product['discount'] : 0)}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            padding: '3px 8px',
            color: '#E30019',
            border: '1px solid #E30019',
            borderRadius: 1,
            mb: '4px',
            ml: 2,
          }}
        >
          -
          {product
            ? Math.ceil(100 * (1 - product['price'] / product['discount']))
            : 0}
          %
        </Typography>
      </div>

      <Box mb={2.5} border='1px solid #ddd' borderRadius={1}>
        <Typography
          p={1}
          bgcolor={'#f1f1f1'}
          display={'flex'}
          alignItems={'center'}
          fontWeight={600}
          color={'#E30019'}
        >
          <Redeem sx={{ mr: 1 }} />
          Quà tặng và ưu đãi kèm theo
        </Typography>
        <Box p={2}>
          <Typography fontSize={15} mb={0.5}>
            ✔ Bảo hành chính hãng 24 tháng.
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            ✔ Hỗ trợ đổi mới trong 7 ngày.
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            ✔ Windows bản quyền tích hợp.
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            ✔ Miễn phí giao hàng toàn quốc.
          </Typography>
          <hr />
          <div style={{ fontSize: 15, marginTop: 12 }}>
            ⭐{' '}
            <a href='http://gearvn.com/pages/chuong-trinh-mua-kem-pc-gearvn'>
              <strong>Ưu đãi lên đến 54% khi mua kèm Laptop</strong>
            </a>
          </div>
          <span style={{ fontSize: 15 }}>
            <strong>
              <span style={{ color: '#ff0000' }}>
                Hỗ trợ trả góp (Thẻ tín dụng)
              </span>
              <a href='https://gearvn.com/pages/huong-dan-tra-gop'>
                <span style={{ color: '#3498db' }}> Xem chi tiết</span>
              </a>
            </strong>
          </span>
        </Box>
      </Box>

      <Box display={'flex'} alignItems={'center'} mt={2}>
        <p
          style={{
            marginRight: 5,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Số lượng:
        </p>
        <p
          style={{
            ...styleQuantityChange,
            borderRight: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
          }}
        >
          -
        </p>
        <input
          value={quantity}
          style={styleQuantityChange}
          name='quantity'
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <p
          style={{
            ...styleQuantityChange,
            borderLeft: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </p>
        <Button
          size='small'
          startIcon={<AddShoppingCart />}
          sx={{
            ml: 1,
            height: 36,
            border: '1px solid #dfdfdf',
            borderRadius: 0,
            color: 'inherit',
            px: 2,
            fontWeight: 600,
          }}
          onClick={() => {
            if (product) {
              addCart(product, quantity);
            }
          }}
        >
          Thêm vào giỏ hàng
        </Button>
      </Box>

      <Button
        variant='contained'
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#E30019',
          p: 1,
          display: 'block',
          ':hover': {
            bgcolor: '#E30019',
            opacity: 0.8,
          },
        }}
        onClick={() => {
          if (product) {
            localStorage.removeItem('cart');
            addCart(product, quantity);
            navigate('/cart');
          }
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: 16,
            display: 'block',
          }}
        >
          MUA NGAY
        </span>
        <span
          style={{
            display: 'block',
          }}
        >
          Giao tận nơi hoặc nhận tại cửa hàng
        </span>
      </Button>
    </>
  );
};

export default ProductSummary;
