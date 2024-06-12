import { Button, Stack } from '@mui/material';

const NotFound = () => {
  return (
    <Stack width={'100%'} alignItems={'center'}>
      <img
        src='https://dashtar-admin.netlify.app/@/assets/404-1JtPP9Ey.svg'
        alt=''
        style={{
          width: 'calc(100% - 100px)',
          height: 'calc(100vh - 100px)',
          marginBottom: 24,
        }}
      />
      <Button
        sx={{
          bgcolor: '#10b981',
          px: 2.5,
          py: 1.5,
          fontSize: 16,
          fontWeight: 600,
          color: '#fff',
          ':hover': {
            bgcolor: '#10b981',
            opacity: 0.9,
          },
        }}
        href='/'
      >
        Trở về trang chủ
      </Button>
    </Stack>
  );
};

export default NotFound;
