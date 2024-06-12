import HomeIcon from '@mui/icons-material/Home';
import { Link, Breadcrumbs as BreadcrumbsMui } from '@mui/material';
import { menu } from '../layouts/admin/menu';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const { pathname } = useLocation();
  const splPaths = pathname.split('/');

  if (splPaths[1] === 'admin') {
    if (splPaths.length === 2) {
      var navGroup = menu[0];
      var navItem = menu[0].children[0];
    } else {
      navGroup = menu.find(
        (v) =>
          v.children.findIndex(
            (e) => e.path === `/${splPaths[1]}/${splPaths[2]}`
          ) !== -1
      );
      navItem = navGroup?.children.find(
        (v) => v.path === `/${splPaths[1]}/${splPaths[2]}`
      );
    }
  } else {
  }

  return (
    <BreadcrumbsMui
      aria-label='breadcrumb'
      sx={{
        position: 'relative',
        zIndex: 10,
        mb: 1,
      }}
    >
      <Link
        underline='hover'
        sx={{ display: 'flex', alignItems: 'center' }}
        color='inherit'
        href={splPaths[1] !== 'admin' ? '/' : '/admin'}
      >
        <HomeIcon sx={{ mr: 1 }} fontSize='inherit' />
        Home
      </Link>

      {splPaths[1] !== '' && (
        <Link
          underline='hover'
          sx={{ display: 'flex', alignItems: 'center' }}
          color='inherit'
          href={navItem.path}
        >
          {navItem?.title}
        </Link>
      )}
    </BreadcrumbsMui>
  );
};

export default Breadcrumbs;
