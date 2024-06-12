import {
  Toolbar,
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  Container,
} from '@mui/material';
import {
  TwitterOutlined,
  FacebookFilled,
  YoutubeFilled,
} from '@ant-design/icons';

const listSocial = [
  {
    id: 'fb-icon',
    icon: <FacebookFilled style={{ fontSize: 30, color: '#31629f' }} />,
    path: '/',
  },
  {
    id: 'tw-icon',
    icon: <TwitterOutlined style={{ fontSize: 30, color: '#0180c6' }} />,
    path: '/',
  },
  {
    id: 'ytb-icon',
    icon: <YoutubeFilled style={{ fontSize: 30, color: '#b93523' }} />,
    path: '/',
  },
];

const listAbout = [
  {
    id: 'about-us',
    title: 'Về ecommerce',
    items: [
      {
        id: 'introduce',
        title: 'Giới thiệu',
        path: '/',
      },
      {
        id: 'address',
        title: 'Hệ thống cửa hàng',
        path: '/',
      },
      {
        id: 'recruitment',
        title: 'Tuyển dụng',
        path: '/',
      },
    ],
  },
  {
    id: 'policy',
    title: 'Chính sách',
    items: [
      {
        id: 'p-repair',
        title: 'Chính sách bảo hành',
        path: '/',
      },
      {
        id: 'p-payment',
        title: 'Chính sách thanh toán',
        path: '/',
      },
      {
        id: 'p-delivery',
        title: 'Chính sách giao hàng',
        path: '/',
      },
      {
        id: 'p-security',
        title: 'Chính sách bảo mật',
        path: '/',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Liên hệ: 08:00 - 21:00',
    items: [
      {
        id: 'support-tel',
        title: 'CSKH',
        value: '0123456789',
      },
      {
        id: 'support-repair',
        title: 'HTKT',
        value: '0123123123',
      },
      {
        id: 'email',
        title: 'Email',
        value: 'ecommerce.dev2@gmail.com',
      },
    ],
  },
  {
    id: 'payment-method',
    title: 'Phương thức thanh toán',
    items: [
      {
        id: 'ib',
        image:
          'https://theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=4204',
      },
      {
        id: 'momo',
        image:
          'https://theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=4204',
      },
      {
        id: 'tm',
        image:
          'https://theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=4204',
      },
    ],
  },
];

const About = () => {
  return (
    <Grid container mt={2} mb={2}>
      {listAbout.map((value) => {
        return (
          <Grid key={value.id} item xs={3}>
            <Typography mb={1} variant='h6'>
              {value.title.toUpperCase()}
            </Typography>
            {value.items.map((item) => {
              return 'path' in item ? (
                <Typography key={item.id}>
                  <Link
                    color='inherit'
                    href={item.path}
                    sx={{ ':hover': { color: '#E30019' } }}
                  >
                    {item.title}
                  </Link>
                </Typography>
              ) : 'image' in item ? (
                <img key={item.id} alt='' src={item.image} />
              ) : (
                <Typography key={item.id}>
                  {item.title}: {item.value}
                </Typography>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};

const Copyright = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      borderTop='1px solid #ebebeb'
      width={'100%'}
      pt={2}
      pb={2}
    >
      <Typography variant='h5'>Kết nối với chúng tôi</Typography>
      {listSocial.map((social) => (
        <Link ml={1.25} href={social.path} underline='none' key={social.id}>
          <IconButton sx={{ p: 0 }}>{social.icon}</IconButton>
        </Link>
      ))}
    </Box>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        borderTop: '1px solid #ebebeb',
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
          <About />
          <Copyright />
        </Toolbar>
      </Container>
    </div>
  );
};

export default Footer;
