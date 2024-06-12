import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
  const navigate = useNavigate();

  return (
    <Dialog open={props.showDialog} keepMounted onClose={props.handleClose}>
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: '0 !important',
        }}
      >
        <div
          style={{
            width: '7em',
            height: '7em',
            border: '5px solid #E30019',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: '#E30019',
              fontSize: '3em',
              fontWeight: 600,
            }}
          >
            ?
          </span>
        </div>
      </DialogContent>
      <DialogTitle width={500} textAlign={'center'}>
        Bạn muốn thoát tài khoản?
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          sx={{
            width: '50%',
            bgcolor: '#ececec !important',
            color: 'inherit',
            fontWeight: 600,
          }}
          variant='contained'
        >
          Không
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem('user-current');
            enqueueSnackbar('Đã đăng xuất.', {
              variant: 'success',
            });
            navigate('/login');
          }}
          sx={{
            width: '50%',
            bgcolor: '#E30019 !important',
            fontWeight: 600,
          }}
          variant='contained'
        >
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Logout;
