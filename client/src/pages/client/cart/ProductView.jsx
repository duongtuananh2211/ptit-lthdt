import { DeleteOutlined } from '@mui/icons-material';
import {
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Stack,
  Box,
} from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import { deleteCart, updateCart } from '../../../utils/cartUtils';

const ProductDetailRow = (props) => {
  return (
    <Grid container spacing={0} alignItems='center' pr={2}>
      <Grid item xs={6} alignItems='center' display='flex'>
        {props.colProduct}
      </Grid>
      <Grid item xs={2} container>
        {props.colPrice}
      </Grid>
      <Grid item xs={1.5}>
        {props.colQuantity}
      </Grid>
      <Grid item xs={2}>
        {props.colAmount}
      </Grid>
      <Grid item xs={0.5}>
        <Tooltip title='Xoán toàn bộ giỏ hàng' placement='bottom-start'>
          <IconButton
            onClick={() => {
              props.deleteProductCart();
            }}
          >
            <DeleteOutlined />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

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
};

const ProductView = (props) => {
  const { data, reloadCart } = props;

  return (
    <Stack>
      <ProductDetailRow
        colProduct={<>Tất cả ({data.length} sản phẩm)</>}
        colPrice={<Typography>Đơn giá</Typography>}
        colQuantity={<Typography>Số lượng</Typography>}
        colAmount={<Typography>Thành tiền</Typography>}
        deleteProductCart={() => {
          for (let i = 0; i < data.length; i++) {
            deleteCart(data[i]['id']);
          }
          reloadCart();
        }}
      />
      <Box mt={2}></Box>
      {data.map((item) => {
        return (
          <ProductDetailRow
            key={'prod-cart' + item['id']}
            deleteProductCart={() => {
              deleteCart(item['id']);
              reloadCart();
            }}
            colProduct={
              <Grid container>
                <Grid item xs={3}>
                  <a
                    href={`/products/${item.title
                      .toLowerCase()
                      .replaceAll(' ', '-')}-prod${item.id}`}
                    style={{
                      width: 90,
                      display: 'block',
                    }}
                  >
                    <img
                      loading='lazy'
                      src={item['imageUrls'].split(';')[0]}
                      alt=''
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  container
                  flexDirection='column'
                  justifyContent={'center'}
                  xs={9}
                >
                  <a
                    href={`/products/${item.title
                      .toLowerCase()
                      .replaceAll(' ', '-')}-prod${item.id}}`}
                    style={{ fontSize: 15, fontWeight: 600 }}
                  >
                    {item['title']}
                  </a>
                  <Typography mt={1} fontSize={13}>
                    Mã SP: PROD{item['id']}
                  </Typography>
                </Grid>
              </Grid>
            }
            colPrice={
              <Box display={'flex'} justifyContent={'start'} alignItems={'end'}>
                <Typography fontWeight={600} fontSize={16}>
                  {moneyFormatter(item['price'])}
                </Typography>
                <Typography
                  fontSize={13}
                  color='#888'
                  sx={{ textDecorationLine: 'line-through', ml: 1 }}
                >
                  {moneyFormatter(item['discount'])}
                </Typography>
              </Box>
            }
            colQuantity={
              <Box display={'flex'} alignItems={'center'}>
                <p
                  style={{
                    ...styleQuantityChange,
                    borderRight: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (item['quantity'] - 1 < 0) {
                      return;
                    } else if (item['quantity'] - 1 === 0) {
                      deleteCart(item['id']);
                    } else {
                      updateCart(item['id'], item['quantity'] - 1);
                    }
                    reloadCart();
                  }}
                >
                  -
                </p>
                <input
                  value={item['quantity']}
                  size='5'
                  style={styleQuantityChange}
                  onChange={(e) => {
                    if (parseInt(e.target.value) >= 0) {
                      updateCart(item['id'], parseInt(e.target.value));
                      reloadCart();
                    }
                  }}
                />
                <p
                  style={{
                    ...styleQuantityChange,
                    borderLeft: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    updateCart(item['id'], item['quantity'] + 1);
                    reloadCart();
                  }}
                >
                  +
                </p>
              </Box>
            }
            colAmount={
              <Typography fontWeight={600} fontSize={18} color='#ee2724'>
                {moneyFormatter(item['quantity'] * item['price'])}
              </Typography>
            }
          />
        );
      })}
    </Stack>
  );
};

export default ProductView;
