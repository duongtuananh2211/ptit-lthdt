import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { moneyFormatter } from '../../../../utils/moneyFormatter';

const OrdersHistory = (props) => {
  const { orders } = props;
  console.log(orders);
  const historyStatus = [
    {
      id: 'all',
      title: 'Tất cả',
      total: props.orders.length,
      orders: orders,
    },
    {
      id: 'pending',
      title: 'Đang chuẩn bị',
      total: props.orders.reduce(
        (pre, cur) => pre + (cur['status'] === 'pending' ? 1 : 0),
        0
      ),
      orders: orders.filter((item) => item['status'] === 'pending'),
    },
    {
      id: 'processing',
      title: 'Đang giao',
      total: props.orders.reduce(
        (pre, cur) => pre + (cur['status'] === 'processing' ? 1 : 0),
        0
      ),
      orders: orders.filter((item) => item['status'] === 'processing'),
    },
    {
      id: 'delivered',
      title: 'Đã giao',
      total: props.orders.reduce(
        (pre, cur) => pre + (cur['status'] === 'delivered' ? 1 : 0),
        0
      ),
      orders: orders.filter((item) => item['status'] === 'delivered'),
    },
    {
      id: 'cancel',
      title: 'Đã huỷ',
      total: props.orders.reduce(
        (pre, cur) => pre + (cur['status'] === 'cancel' ? 1 : 0),
        0
      ),
      orders: orders.filter((item) => item['status'] === 'cancel'),
    },
  ];

  const [clickedStatus, setClickedStatus] = useState(0);

  return (
    <Stack p={1}>
      <Typography variant='h5' p={2}>
        Quản lý đơn hàng
      </Typography>
      <Grid container>
        {historyStatus.map((item, index) => (
          <Grid key={item.id + '-status' + index} item xs={2.4}>
            <Typography
              onClick={() => {
                setClickedStatus(index);
              }}
              sx={{
                cursor: 'pointer',
                ':hover': {
                  bgcolor: 'rgba(22, 119, 255, 0.04)',
                },
                borderBottom: '3px solid',
                borderBottomColor: clickedStatus === index ? '#E30019' : '#fff',
              }}
              variant='h6'
              textAlign={'center'}
              p={0.5}
            >
              {item.title}{' '}
              {clickedStatus === index && (
                <span
                  style={{
                    color: '#FF3C53',
                  }}
                >
                  ({item.total})
                </span>
              )}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {historyStatus[clickedStatus]['orders'].map((order) => (
        <Stack
          key={order['id'] + 'order'}
          p={3}
          mb={1.5}
          borderBottom={'1px dashed'}
        >
          <Typography fontSize={16} fontWeight={600} color='#666'>
            {historyStatus.find((v) => order.status === v['id'])['title']}
          </Typography>
          {order['orderItems'].map((item) => {
            let product = item['product'];
            return (
              <React.Fragment key={product.id + 'product' + item.id}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Grid container maxWidth={'75%'} p={1} alignItems={'center'}>
                    <Box maxWidth={100}>
                      <img
                        src={product.imageUrls.split(';')[0]}
                        alt={product.title}
                        height={100}
                        width={100}
                      />
                    </Box>
                    <Box width={50} pl={1} pr={1} textAlign={'center'}>
                      x{item.quantity}
                    </Box>
                    <Box width={'calc(100% - 150px)'}>
                      <Typography
                        variant='h6'
                        href={`/products/${product.title
                          .toLowerCase()
                          .replaceAll(' ', '-')}-prod${product.id}`}
                        component={'a'}
                        pb={1}
                      >
                        {product.title}
                      </Typography>
                      <Typography fontSize={14.5}>
                        Giá: {moneyFormatter(product.price)}
                      </Typography>
                    </Box>
                  </Grid>
                  <Box maxWidth={'23%'}>
                    <Typography color='#E30019' fontSize={16} fontWeight={600}>
                      {moneyFormatter(product.price * item.quantity)}
                    </Typography>
                  </Box>
                </Box>
              </React.Fragment>
            );
          })}
          <Typography fontSize={16} textAlign={'right'}>
            Tổng tiền:{' '}
            <span style={{ color: '#E30019', fontWeight: 600 }}>
              {moneyFormatter(order.amount)}
            </span>
          </Typography>
          <div style={{ textAlign: 'right', marginTop: 8 }}>
            <Button variant='contained' href={`/orders/${order['id']}`}>
              Xem chi tiết
            </Button>
          </div>
        </Stack>
      ))}
    </Stack>
  );
};

export default OrdersHistory;
