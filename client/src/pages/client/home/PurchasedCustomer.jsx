import { Grid, Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { purchasedCustormers } from './customers';
import React from 'react';

const PurchasedCustomer = () => {
  return (
    <Box bgcolor={'#fff'} p={2} borderRadius={1}>
      <Typography variant='h5'>
        Hình ảnh khách hàng và các hoạt động của chúng tôi
      </Typography>
      <Grid container>
        <Grid item xs={3} display='flex' alignItems='center'>
          <div
            style={{
              borderRadius: 10,
              background:
                'repeating-linear-gradient(to right, #000000 0, #9cb6ff 50%, #000000 100%)',
              marginRight: 10,
              height: '100%',
            }}
          >
            <img
              loading='lazy'
              src='https://hanoicomputercdn.com/media/lib/08-11-2023/khachang.png'
              alt=''
              width='100%'
              height='100%'
            />
          </div>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            borderRadius: '10px',
            background:
              'repeating-linear-gradient(to right, #000000 0, #9cb6ff 50%, #000000 100%)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              p: '20px',
              pr: '10px',
            }}
          >
            <Carousel
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 4,
                },
              }}
              infinite
              autoPlay
              autoPlaySpeed={1000}
              keyBoardControl
              customTransition='all 1000ms'
              transitionDuration={1000}
            >
              {purchasedCustormers.map((item) => (
                <div
                  key={item.id}
                  style={{
                    height: '100%',
                    paddingRight: 10,
                  }}
                >
                  <img
                    loading='lazy'
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '5px',
                      objectFit: 'cover',
                    }}
                    src={item.image}
                    alt=''
                  />
                </div>
              ))}
            </Carousel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PurchasedCustomer;
