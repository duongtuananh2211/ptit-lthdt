import {
  AppBar,
  Box,
  Toolbar,
  Link,
  IconButton,
  Typography,
  Container,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import {
  ShoppingCartOutlined,
  Search,
  PersonOutlineOutlined,
  ShoppingBag,
  Call,
} from '@mui/icons-material';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const ButtonStyled = styled.button`
  border: 0 solid #e5e7eb;
  background-color: #fafafb;
  cursor: pointer;
  &:hover {
    color: #10b981;
  }
`;

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  width: '70%',
  pr: 1,
  backgroundColor: '#fff',
  borderRadius: 8,
  height: 44,
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&:focus-within .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
}));

const Header = () => {
  const [cart, setCart] = useState([]);

  // setInterval(() => {
  //   let c = localStorage.getItem('cart');
  //   if (c === null) {
  //     setCart([]);
  //   } else {
  //     setCart(JSON.parse(c));
  //   }
  // }, 200);

  let user = localStorage.getItem('user-current');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('name') ?? ''
  );

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        px={2}
        py={0.8}
        fontSize={12.5}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Call fontSize='16px' />
          Chúng tôi luôn sẵn sàng 24/7. Bạn cần trợ giúp?
          <a
            href='/'
            style={{
              fontWeight: 700,
              color: '#10b981',
              marginLeft: 4,
            }}
          >
            0333935911
          </a>
        </Box>
        <Box display={'flex'} justifyContent={'end'} alignItems={'center'}>
          <ButtonStyled
            onClick={() => {
              navigate('/about-me');
            }}
          >
            Về chúng tôi
          </ButtonStyled>
          <span style={{ margin: '0 8px' }}>|</span>
          <ButtonStyled
            onClick={() => {
              navigate('/contact');
            }}
          >
            Liên hệ cho chúng tôi
          </ButtonStyled>
          <span style={{ margin: '0 8px' }}>|</span>
          {user && (
            <>
              <ButtonStyled
                onClick={() => {
                  navigate('/profile');
                }}
              >
                Tài khoản của tôi
              </ButtonStyled>
              <span style={{ margin: '0 8px' }}>|</span>
            </>
          )}
          <ButtonStyled
            onClick={() => {
              if (user) {
                localStorage.removeItem('user-current');
              }
              navigate('/login');
            }}
          >
            {user ? 'Đăng xuất' : 'Đăng nhập'}
          </ButtonStyled>
        </Box>
      </Box>
      <AppBar
        position='static'
        color='inherit'
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid #ebebeb',
          marginBottom: '3rem',
          mb: 0,
          bgcolor: '#10b981',
        }}
      >
        <Container maxWidth=''>
          <Toolbar
            disableGutters
            sx={{
              alignItems: 'center',
              py: '0 !important',
              height: 76,
            }}
          >
            {/* Logo */}
            <Box height={44} display={'flex'} alignItems={'center'}>
              <ShoppingBag
                fontSize='large'
                sx={{
                  color: '#fff',
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
                  color: '#fff',
                  alignItems: 'end',
                  justifyContent: 'space-between',
                }}
              >
                Dev4Fun
              </Typography>
            </Box>

            {/* Menu */}
            <Box width={1218} ml={'calc(207px - 164.2px)'} textAlign={'center'}>
              <form action='/products'>
                <CustomOutlinedInput
                  fullWidth
                  placeholder='Tìm kiếm sản phẩm theo tên'
                  type='text'
                  name='name'
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => {
                          navigate(`/products?name=${searchValue}`);
                        }}
                      >
                        <Search fontSize='medium' sx={{ color: 'inherit' }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </form>
            </Box>

            <Box ml={'calc(100% - 1513px)'}>
              {/* Cart */}
              <Link href='/cart' underline='none'>
                <IconButton sx={{ mr: 1, p: 0 }}>
                  <ShoppingCartOutlined
                    fontSize='medium'
                    sx={{
                      color: '#fff',
                    }}
                  />
                  {cart.length > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-3px',
                        left: '16px',
                        height: '19px',
                        width: '19px',
                        lineHeight: '19px',
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: '600',
                        bgcolor: '#008060',
                        borderRadius: '99px',
                      }}
                    >
                      {cart.length}
                    </Box>
                  )}
                </IconButton>
              </Link>

              {/* Profile  */}
              <Link href='/account' underline='none'>
                <IconButton sx={{ mr: 1, p: 0 }}>
                  <PersonOutlineOutlined
                    fontSize='medium'
                    sx={{
                      color: '#fff',
                    }}
                  />
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
