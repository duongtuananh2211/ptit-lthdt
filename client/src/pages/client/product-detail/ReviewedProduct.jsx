import { Star, Stars } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

const ReviewedProduct = (props) => {
  const { product, reviewedProduct } = props;

  const stars = [
    {
      id: 'star-5',
      votes: 1,
    },
    {
      id: 'star-4',
      votes: 1,
    },
    {
      id: 'star-3',
      votes: 1,
    },
    {
      id: 'star-2',
      votes: 1,
    },
    {
      id: 'star-1',
      votes: 1,
    },
  ];

  const comments = [
    {
      id: 'cmt-1',
      owner: 'Nguyen Minh Quan',
      content: 'San pham dung tot, kha la oke.',
      rating: 4,
      created: '22-03-2002',
    },
    {
      id: 'cmt-2',
      owner: 'Nguyen Minh Quan',
      content: 'San pham dung tot, kha la oke.',
      rating: 4,
      created: '22-03-2002',
    },
    {
      id: 'cmt-3',
      owner: 'Nguyen Minh Quan',
      content: 'San pham dung tot, kha la oke.',
      rating: 4,
      created: '22-03-2002',
    },
    {
      id: 'cmt-4',
      owner: 'Nguyen Minh Quan',
      content: 'San pham dung tot, kha la oke.',
      rating: 4,
      created: '22-03-2002',
    },
  ];
  return (
    <Box bgcolor={'#fff'} borderRadius={1} p={2}>
      <Typography variant='h5'>
        Đánh giá & Nhận xét - {product ? product['title'] : ''}
      </Typography>
      <Grid
        container
        justifyContent={'center'}
        my={2}
        borderBottom={'1px solid #dfdfdf'}
        py={3}
      >
        <Box width={'40%'} textAlign={'center'}>
          <Typography fontSize={36} color={'#E30019'} fontWeight={600}>
            4.6 / 5
          </Typography>
          <Rating
            name='read-only'
            defaultValue={4.6}
            precision={0.5}
            readOnly
          />
          <Typography>
            <strong>(5)</strong> đánh giá & nhận xét
          </Typography>
        </Box>

        <Stack width={'40%'} spacing={2}>
          {stars.map((item, index) => (
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              key={item.id}
            >
              {5 - index}
              <Star color='warning' />
              <LinearProgress
                variant='determinate'
                sx={{ height: 12, width: '70%', mx: 1 }}
                value={50}
              />
              <Typography>{item.votes} đánh giá</Typography>
            </Box>
          ))}
        </Stack>
      </Grid>
      <Stack spacing={1}>
        {comments.map((item) => (
          <Box key={item.id} p={2} borderBottom={'1px solid #dfdfdf'}>
            <Box display={'flex'} alignItems={'center'} mb={1}>
              <Typography fontWeight={600} mr={2} fontSize={15}>
                {item.owner}
              </Typography>
              <Typography color={'#97999D'}>{item.created}</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Rating name='read-only' defaultValue={item.rating} readOnly />
              <Typography ml={2}>{item.content}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Button
          sx={{ width: '40%', py: 1, fontWeight: 600 }}
          variant='contained'
          startIcon={<Stars />}
        >
          Gửi đánh giá của bạn
        </Button>
      </div>
    </Box>
  );
};

export default ReviewedProduct;
