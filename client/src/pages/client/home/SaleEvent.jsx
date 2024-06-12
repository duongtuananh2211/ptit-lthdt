import { Stack, Typography, Box, Link, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledTypography = styled(Typography)`
  border-radius: 15px;
  background: linear-gradient(
    270deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #ff7f00,
    #ff0000
  );
  background-size: 500% 500%; /* Điều chỉnh để có hiệu ứng đuổi màu mượt mà */
  animation: ${rainbowAnimation} 3s ease infinite;
  color: #fff;
  text-align: center;
  padding: 4px;
`;

const flashSaleAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FlashSaleTypography = styled(Typography)`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #ff0;
  font-style: italic;
  padding: 8px;
  background: repeating-linear-gradient(
    to right,
    #ed1b24 0%,
    #243a76 50%,
    #ed1b24 100%
  );
  background-size: 200% 200%;
  animation: ${flashSaleAnimation} 2s ease infinite;
`;

const SaleEvent = () => {
  const [collections, setCollections] = useState(null);

  const fetchData = () => {
    fetch(`http://localhost:8080/api/collection/user/flash-sale`)
      .then((data) => data.json())
      .then((data) => {
        if ('status' in data) {
          return;
        }
        setCollections(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack
      border='3px solid #ed1b24'
      bgcolor={'#fff'}
      borderRadius={1}
      borderTop='none'
    >
      <FlashSaleTypography>FLASH SALE</FlashSaleTypography>
      <Box
        sx={{
          width: '100%',
          p: '20px',
          pr: '10px',
          textAlign: 'center',
        }}
      >
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
            },
          }}
          infinite
          autoPlay
          autoPlaySpeed={1000}
          customTransition='all 1000ms'
          transitionDuration={1000}
        >
          {collections !== null ? (
            collections['collectionItems'].map((c, index) => {
              let item = c['product'];
              return (
                <Box
                  key={'carousel-img' + index}
                  component='a'
                  href={`/products/${item.title
                    .toLowerCase()
                    .replaceAll(' ', '-')}-prod${item.id}`}
                  sx={{
                    m: 0.5,
                    mr: 1,
                    p: '8px 16px',
                    display: 'block',
                    borderRadius: 2,
                    boxShadow:
                      '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
                    ':hover': {
                      opacity: 0.9,
                      '.underline': {
                        textDecoration: 'underline',
                      },
                    },
                  }}
                >
                  <div
                    style={{
                      height: 300,
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0 auto',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      loading='lazy'
                      src={item.imageUrls.split(';')[0]}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                  </div>
                  <Typography
                    className='underline'
                    height={48}
                    overflow={'hidden'}
                    variant='h6'
                  >
                    {item.title.toUpperCase()}
                  </Typography>
                  <div>
                    <Typography
                      variant='caption'
                      sx={{
                        textDecoration: 'line-through',
                      }}
                    >
                      {moneyFormatter(item.discount)}
                    </Typography>
                    <Typography ml={0.5} variant='caption' color='#d82a29'>
                      (Giảm: {moneyFormatter(item.discount - item.price)})
                    </Typography>
                  </div>
                  <Typography color='error' variant='h5' fontWeight='bold'>
                    {moneyFormatter(item.price)}
                  </Typography>
                  <StyledTypography variant='body2' mb={0.5} mt={0.2}>
                    Còn {item.remain} sản phẩm
                  </StyledTypography>
                </Box>
              );
            })
          ) : (
            <></>
          )}
        </Carousel>
      </Box>
      <Link href={`/products`} textAlign='center' mb={2}>
        <Button
          variant='contained'
          sx={{
            bgcolor: '#ff3737',
            fontWeight: 600,
            ':hover': { bgcolor: '#ff3737', opacity: 0.9 },
          }}
        >
          Xem tất cả sản phẩm
        </Button>
      </Link>
    </Stack>
  );
};

export default SaleEvent;
