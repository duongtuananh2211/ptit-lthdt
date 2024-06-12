import { useState, useRef } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  ClickAwayListener,
  Popper,
  Stack,
  Paper,
  Button,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const Profile = (props) => {
  return (
    <Stack p={2} mt={1} spacing={2}>
      <Typography color='#008060'>Hi, {props.username}</Typography>
      <Button
        onClick={props.handleLogout}
        variant='contained'
        color='error'
        startIcon={<LogoutOutlined />}
      >
        Đăng xuất
      </Button>
    </Stack>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const username = 'Admin';

  const handleLogout = () => {
    localStorage.removeItem('user-current');
    enqueueSnackbar('Đã đăng xuất.', {
      variant: 'success',
    });
    navigate('/login?redirect=admin');
  };

  return (
    <AppBar
      position='fixed'
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #ebebeb',
        marginBottom: '3rem',
        mb: 0,
      }}
    >
      <Toolbar>
        <AdbIcon
          sx={{
            display: 'flex',
            mr: 1,
            color: '#008060',
            fontSize: 32,
          }}
        />
        <Typography
          variant='h3'
          component='a'
          href='#app-bar-with-responsive-menu'
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.1rem',
            color: '#008060',
            textDecoration: 'none',
          }}
        >
          Dev4Fun
        </Typography>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box>
          <Tooltip title='Open settings'>
            <IconButton
              ref={anchorRef}
              onClick={() => setOpen(true)}
              sx={{ p: 0 }}
            >
              <Avatar alt='Admin' src='/static/images/avatar/2.jpg' />
            </IconButton>
          </Tooltip>
          <Popper
            placement='bottom-end'
            open={open}
            anchorEl={anchorRef.current}
            disablePortal
          >
            <Paper
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
                minWidth: 230,
                maxWidth: 300,
              }}
            >
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <div>
                  {open && (
                    <Profile handleLogout={handleLogout} username={username} />
                  )}
                </div>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
