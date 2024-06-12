import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import { useEffect, useState } from 'react';
import EditProductDrawer from './EditProductDrawer';
import { useParams } from 'react-router-dom';

const ProductDetailAdminPage = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [product, setProduct] = useState(null);

  const fetchData = (id) => {
    fetch(`http://localhost:8080/api/product/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setProduct(data);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const techDetails = [
    {
      id: 'cpu',
      title: 'CPU',
    },
    {
      id: 'ram',
      title: 'RAM',
    },
    {
      id: 'disk',
      title: 'Ổ cứng',
    },
    {
      id: 'vga',
      title: 'Card đồ họa',
    },
    {
      id: 'monitor',
      title: 'Màn hình',
    },
    {
      id: 'community',
      title: 'Cổng giao tiếp',
    },
    {
      id: 'audio',
      title: 'Audio',
    },
    {
      id: 'keyboard',
      title: 'Bàn phím',
    },
    {
      id: 'lan',
      title: 'Chuẩn LAN',
    },
    {
      id: 'wifi',
      title: 'Chuẩn WIFI',
    },
    {
      id: 'bluetooth',
      title: 'Bluetooth',
    },
    {
      id: 'webcam',
      title: 'Webcam',
    },
    {
      id: 'os',
      title: 'Hệ điều hành',
    },
    {
      id: 'pin',
      title: 'Pin',
    },
    {
      id: 'weight',
      title: 'Trọng lượng',
    },
    {
      id: 'color',
      title: 'Màu sắc',
    },
    {
      id: 'size',
      title: 'Kích thước',
    },
  ];

  return (
    <>
      <Stack>
        <Typography variant='h5' mb={2} mx={1}>
          Chi tiết sản phẩm
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box p={4} sx={{ bgcolor: '#fff' }} borderRadius={2}>
              <img
                src={product ? product['imageUrls'].split(';')[0] : ''}
                alt=''
              />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Stack p={4} sx={{ bgcolor: '#fff' }} borderRadius={2}>
              <Typography color={'#6b7280'} fontWeight={600} fontSize={15}>
                Trạng thái:{' '}
                <span style={{ color: '#f87171' }}>{'Đang bán'}</span>
              </Typography>
              <Typography my={1} variant='h4' color={'inherit'}>
                {product ? product['title'] : ''}
              </Typography>
              <Typography my={1.5} mb={1} variant='h4' color={'inherit'}>
                Giá: {moneyFormatter(product ? product['price'] : 0)}
              </Typography>

              <Typography mb={1}>
                <span
                  style={{
                    color: 'rgb(5 150 105)',
                    fontWeight: 600,
                    backgroundColor: '#d1fae5',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    marginRight: 10,
                  }}
                >
                  {product && product['remain'] > 0 ? 'Còn hàng' : 'Hết hàng'}
                </span>
                Số lượng: {product ? product['remain'] : 0}
              </Typography>
              <Typography my={1} fontSize={15} fontWeight={600}>
                Loại: {product ? product['category']['title'] : ''}
              </Typography>

              <Stack>
                <Typography variant='h5' color={'inherit'} my={1}>
                  Thông số kỹ thuật
                </Typography>
                {techDetails.map((item, index) => (
                  <Box
                    key={item.id}
                    bgcolor={index % 2 ? '#fff' : '#dfdfdf'}
                    display='flex'
                    alignItems={'center'}
                    p={1}
                    border={'1px solid #dfdfdf'}
                  >
                    <Typography
                      width={140}
                      textAlign={'left'}
                      fontSize={'1rem'}
                      fontWeight={600}
                    >
                      {item.title}:
                    </Typography>
                    <Typography width={'calc(100% - 100px)'}>
                      {product ? product[item.id] : ''}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box mt={5}>
                <Button
                  sx={{
                    bgcolor: '#10b981',
                    color: '#fff',
                    px: 2,
                    py: 1,
                    ':hover': {
                      bgcolor: '#059669',
                    },
                  }}
                  onClick={() => {
                    setOpenEdit(true);
                  }}
                >
                  Sửa thông tin sản phẩm
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      {openEdit && (
        <EditProductDrawer
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          handleEdit={(values) => {
            console.log(values);
          }}
          product={
            {
              // product
            }
          }
        />
      )}
    </>
  );
};

export default ProductDetailAdminPage;
