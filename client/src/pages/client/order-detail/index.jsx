import { PrintOutlined, ShoppingBag } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import generatePDF from 'react-to-pdf';

const OrderDetailPage = () => {
  const [order, setOrder] = useState({
    id: 0,
    status: '',
    payment: '',
    amount: 0,
    created: 0,
    orderItems: [],
    customer: {
      id: 0,
      address: '',
      fullName: '',
      phoneNumber: '',
      user: '',
    },
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/order/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      });
  }, [id]);

  const options = [
    {
      id: 'delivered',
      title: 'Đã giao hàng',
      fontColor: '#059669',
      color: '#d1fae5',
    },
    {
      id: 'pending',
      title: 'Đang chuẩn bị',
      fontColor: '#ca8a04',
      color: '#fef9c3',
    },
    {
      id: 'processing',
      title: 'Đang giao',
      fontColor: '#3b82f6',
      color: '#dbeafe',
    },
    {
      id: 'cancel',
      title: 'Đã huỷ',
      fontColor: '#ef4444',
      color: '#fee2e2',
    },
  ];

  const status = options.find((v) => v['id'] === order['status']) ?? options[0];
  const created = new Date(order['created']);
  const showCreated = `${
    created.getHours() < 10 ? '0' + created.getHours() : created.getHours()
  }:${
    created.getMinutes() < 10
      ? '0' + created.getMinutes()
      : created.getMinutes()
  }:${
    created.getSeconds() < 10
      ? '0' + created.getSeconds()
      : created.getSeconds()
  } ${created.getDate() < 10 ? '0' + created.getDate() : created.getDate()}-${
    created.getMonth() < 9
      ? '0' + (created.getMonth() + 1)
      : created.getMonth() + 1
  }-${created.getFullYear()}`;

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: `Hoá đơn bán hàng - ${order['id']}`,
    onBeforePrint: () => console.log('before printing...'),
    onAfterPrint: () => console.log('after printing...'),
    removeAfterPrint: true,
    // layout: 'landscape',
  });

  return (
    <Stack mt={2} p={2}>
      <Typography variant='h5'>Chi tiết đơn hàng #{order['id']}</Typography>

      <Typography
        variant='h6'
        sx={{
          bgcolor: '#d1fae5',
          p: 2,
          my: 2,
          color: '#000',
          fontWeight: 500,
          borderRadius: 1.5,
        }}
      >
        Cảm ơn bạn{' '}
        <span style={{ color: '#059669', fontWeight: 600 }}>
          {order['customer']['fullName']}
        </span>
        , đơn hàng của bạn đã được ghi nhận!
      </Typography>

      <Stack>
        <div ref={contentToPrint}>
          <Box
            p={4}
            bgcolor={'#eef2ff'}
            sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          >
            {/* side 1 */}
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              pb={2}
              borderBottom={'1px solid #f9fafb'}
            >
              <Box>
                <Typography variant='h3'>Hoá đơn</Typography>
                <Typography fontSize={15}>
                  Trạng thái:{' '}
                  <span
                    style={{
                      color: status['fontColor'],
                      fontWeight: 600,
                    }}
                  >
                    {status['title']}
                  </span>
                </Typography>
              </Box>
              <Box>
                <Box height={44} display={'flex'} alignItems={'center'}>
                  <ShoppingBag
                    fontSize='large'
                    sx={{
                      color: '#10b981',
                    }}
                  />
                  <Typography
                    variant='h3'
                    component='a'
                    href='/'
                    sx={{
                      display: 'flex',
                      fontFamily: 'monospace',
                      letterSpacing: '0.1rem',
                      textDecoration: 'none',
                      height: '100%',
                      color: '#10b981',
                      // WebkitBackgroundClip: 'text',
                      // WebkitTextFillColor: 'transparent',
                      alignItems: 'end',
                      justifyContent: 'space-between',
                    }}
                  >
                    Dev4Fun
                  </Typography>
                </Box>
                <Typography ml={0.5} fontSize={15}>
                  123 Nguyễn Trãi, Thanh Xuân, Hà Nội
                </Typography>
              </Box>
            </Box>

            {/* side 2 */}
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              pt={2}
            >
              <Box>
                <Typography variant='h6'>Thời gian đặt</Typography>
                <div>{showCreated}</div>
              </Box>
              <Box>
                <Typography variant='h6'>Đơn hàng số</Typography>
                <div>#{order['id']}</div>
              </Box>
              <Box textAlign={'right'}>
                <Typography variant='h6'>Đơn hàng tới</Typography>
                <div>{order['customer']['fullName']}</div>
                <div>{order['customer']['phoneNumber']}</div>
                <div>{order['customer']['address']}</div>
              </Box>
            </Box>
          </Box>
          {/* items */}
          <Box py={4} bgcolor={'#fff'}>
            <Box px={3}>
              <table
                style={{
                  border: '1px solid #dfdfdf',
                  borderBottom: 'none',
                  minWidth: '100%',
                  borderCollapse: 'collapse',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f3f4f6',
                      borderBottom: '1px solid #dfdfdf',
                    }}
                  >
                    <th style={{ textAlign: 'left', padding: '4px 12px' }}>
                      ID
                    </th>
                    <th style={{ textAlign: 'left', padding: '4px 12px' }}>
                      Tên sản phẩm
                    </th>
                    <th style={{ padding: '4px 12px' }}>Số lượng</th>
                    <th style={{ padding: '4px 12px' }}>Giá</th>
                    <th style={{ padding: '4px 12px' }}>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item, index) => {
                    return (
                      <tr
                        key={'product-' + index}
                        style={{ borderBottom: '1px solid #dfdfdf' }}
                      >
                        <td style={{ padding: '4px 12px' }}>
                          #{item['product']['id']}
                        </td>
                        <td style={{ padding: '4px 12px' }}>
                          {item['product']['title']}
                        </td>
                        <th style={{ padding: '4px 12px' }}>
                          {item['quantity']}
                        </th>
                        <th style={{ padding: '4px 12px' }}>
                          {moneyFormatter(item['product']['price'])}
                        </th>
                        <th style={{ padding: '4px 12px', color: '#ef4444' }}>
                          {moneyFormatter(
                            item['product']['price'] * item['quantity']
                          )}
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Box>
          </Box>
          {/* info */}
          <Box
            p={5}
            bgcolor={'#ecfdf5'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <Typography variant='h6'>Phương thức thanh toán</Typography>
              <Typography fontWeight={600} fontSize={15} mt={1}>
                {order['payment'] === 'offline' ? 'Tiền mặt' : 'Chuyển khoản'}
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6'>Phí vận chuyển</Typography>
              <Typography fontWeight={600} fontSize={15} mt={1}>
                {moneyFormatter(0)}
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6'>Giảm giá</Typography>
              <Typography fontWeight={600} fontSize={15} mt={1}>
                {moneyFormatter(0)}
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6'>Tổng tiền</Typography>
              <Typography
                sx={{
                  color: '#ef4444',
                  fontWeight: 600,
                  fontSize: 22,
                  mt: 1,
                }}
              >
                {moneyFormatter(order['amount'])}
              </Typography>
            </Box>
          </Box>
        </div>
        {/* BTN */}
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={4}
          bgcolor={'#fff'}
          sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
        >
          <Button
            variant='contained'
            sx={{
              bgcolor: '#10b981',
              fontWeight: 600,
              px: 3,
              py: 1,
              ':hover': {
                bgcolor: '#10b981',
                opacity: 0.9,
              },
            }}
            onClick={() => {
              generatePDF(contentToPrint, {
                filename: `Hoá đơn bán hàng - ${order['id']}.pdf`,
                page: {
                  format: 'letter',
                  orientation: 'landscape',
                },
              });
            }}
            endIcon={<CloudDownloadOutlined />}
          >
            Tải hoá đơn
          </Button>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#10b981',
              fontWeight: 600,
              px: 3,
              py: 1,
              ':hover': {
                bgcolor: '#10b981',
                opacity: 0.9,
              },
            }}
            endIcon={<PrintOutlined />}
            onClick={() => {
              handlePrint(null, () => contentToPrint.current);
            }}
          >
            In hoá đơn
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default OrderDetailPage;
