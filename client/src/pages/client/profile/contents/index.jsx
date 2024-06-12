import { useEffect, useState } from 'react';
import Logout from './Logout';
import OrdersHistory from './OrdersHistory';
import Profile from './Profile';
import Viewed from './Viewed';

const Content = (props) => {
  const [orders, setOrders] = useState([]);

  const fetchData = () => {
    fetch(
      // `http://localhost:8080/api/order/user/${props.user['customer']['id']}`
      `http://localhost:8080/api/order/user/1000`
    )
      .then((data) => data.json())
      .then((data) => {
        setOrders(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {props.tab === 0 && (
        <Profile
          data={{
            ...props.user['customer'],
            email: props.user['email'],
          }}
        />
      )}
      {props.tab === 1 && <OrdersHistory orders={orders} />}
      {props.tab === 2 && <Viewed />}
      {props.showDialog && (
        <Logout
          showDialog={props.showDialog}
          handleClose={props.handleCloseDialog}
        />
      )}
    </>
  );
};

export default Content;
