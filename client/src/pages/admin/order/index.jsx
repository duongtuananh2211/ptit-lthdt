import { Stack, Typography } from '@mui/material';
import OrderTable from './OrderTable';
import { useEffect, useState } from 'react';
import CreateOrderDrawer from './CreateOrderDrawer';
import EditOrderDrawer from './EditOrderDrawer';

const OrderPage = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(null);

  const [orders, setOrders] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/order')
      .then((data) => data.json())
      .then((data) => {
        setOrders(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = (order) => {
    console.log(order);
    fetch('http://localhost:8080/api/order', {
      body: JSON.stringify(order),
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  const handleEdit = (order) => {
    console.log(order);
    fetch(`http://localhost:8080/api/order/${order.id}`, {
      body: JSON.stringify(order),
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  const handleDelete = async (orderIds) => {
    for (let i = 0; i < orderIds.length; i++) {
      await fetch(`http://localhost:8080/api/order/${orderIds[i]}`, {
        method: 'DELETE',
      });
    }
    fetchData();
  };

  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Danh sách đơn hàng
      </Typography>
      <OrderTable
        data={orders ?? []}
        onOpenNew={() => {
          setOpenNew(true);
        }}
        onOpenEdit={(product) => {
          setOpenEdit(true);
          setEdited(product);
        }}
        handleDelete={handleDelete}
        handleFilter={(filters) => {
          fetchData(filters);
        }}
      />

      {openNew && (
        <CreateOrderDrawer
          open={openNew}
          onClose={() => {
            setOpenNew(false);
          }}
          handleCreate={handleCreate}
        />
      )}

      {openEdit && (
        <EditOrderDrawer
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          order={edited}
          handleEdit={handleEdit}
        />
      )}
    </Stack>
  );
};

export default OrderPage;
