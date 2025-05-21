import { useEffect, useState } from "react";
import Logout from "./Logout";
import OrdersHistory from "./OrdersHistory";
import Profile from "./Profile";
import Viewed from "./Viewed";
import { API_URL } from "../../../../config";

const Content = (props) => {
  const [orders, setOrders] = useState([]);

  const fetchData = () => {
    fetch(
      // `${API_URL}/order/user/${props.user['customer']['id']}`
      `${API_URL}/order/user/1000`
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
            ...props.user["customer"],
            email: props.user["email"],
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
