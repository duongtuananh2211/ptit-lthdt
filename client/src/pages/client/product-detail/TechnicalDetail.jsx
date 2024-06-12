import { Box, Stack, Typography } from '@mui/material';

const TechnicalDetail = (props) => {
  const { product } = props;

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
      id: 'port',
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
    <Box borderRadius={1} bgcolor={'#fff'}>
      <Typography p={2} variant='h5'>
        Thông số kỹ thuật
      </Typography>
      <Stack p={2.5} pt={0}>
        {techDetails.map((item, index) => (
          <Box
            key={item.id + 'tech'}
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
      <Box mt={1} py={2} mx={2} borderTop={'1px solid #dfdfdf'}>
        <Typography variant='h5'>{product ? product['title'] : ''}</Typography>
        <img src={product ? product['imageUrls'].split(';')[0] : ''} alt='' />
      </Box>
    </Box>
  );
};

export default TechnicalDetail;
