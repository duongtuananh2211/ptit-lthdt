import { Stack, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function AdminLayout() {
  return (
    <>
      <Header />
      <Stack display='flex' flexDirection='row' sx={{ mt: '60px' }}>
        <Sidebar />
        <Stack width='calc(100% - 260px)'>
          <Box
            sx={{
              minHeight: '100vh',
              px: 3.5,
              py: 3,
              borderRadius: 2,
            }}
          >
            <Breadcrumbs />
            <Outlet />
          </Box>
          <Footer />
        </Stack>
      </Stack>
    </>
  );
}
