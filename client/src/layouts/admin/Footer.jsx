import { Toolbar, Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ borderTop: '2px solid #ebebeb' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          color: '#9b9a9a',
        }}
      >
        <Typography>Copyright © 2024 Ecommerce</Typography>
        <Typography>Version 1.0 dev</Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
