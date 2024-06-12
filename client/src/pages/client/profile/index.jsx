import { Grid } from '@mui/material';
import Sidebar from './Sidebar';
import Content from './contents';
import { useState } from 'react';

const ProfilePage = () => {
  const [tab, setTab] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  let user = localStorage.getItem('user-current');
  if (user === null) {
    user = {};
  }
  user = JSON.parse(user);

  const handleChangeTab = (n) => {
    if (n === 3) {
      setShowDialog(true);
      return;
    }
    setTab(n);
  };

  return (
    <Grid container my={3} justifyContent={'space-between'}>
      <Grid
        item
        xs={3}
        p={1}
        borderRadius={1}
        bgcolor={'#fff'}
        boxShadow={
          '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)'
        }
      >
        <Sidebar user={user} tab={tab} onChangeTab={handleChangeTab} />
      </Grid>
      <Grid
        item
        xs={8.8}
        p={1}
        bgcolor={'#fff'}
        boxShadow={
          '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)'
        }
        borderRadius={1}
      >
        <Content
          user={user}
          tab={tab}
          showDialog={showDialog}
          handleCloseDialog={() => {
            setShowDialog(false);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
