import { Stack, Typography } from '@mui/material';
import CustomerTable from './CustomerTable';
import { useEffect, useState } from 'react';
import CreateCustomerDrawer from './CreateCustomerDrawer';
import EditCustomerDrawer from './EditCustomerDrawer';

const CustomerPage = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(null);

  const [customers, setCustomers] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/customer')
      .then((data) => data.json())
      .then((data) => {
        setCustomers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = (customer) => {
    console.log(customer);
    fetch('http://localhost:8080/api/customer', {
      body: JSON.stringify(customer),
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

  const handleEdit = (customer) => {
    console.log(customer);
    fetch(`http://localhost:8080/api/customer/${customer.id}`, {
      body: JSON.stringify(customer),
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

  const handleDelete = async (customerIds) => {
    console.log(customerIds);
    for (let i = 0; i < customerIds.length; i++) {
      await fetch(`http://localhost:8080/api/customer/${customerIds[i]}`, {
        method: 'DELETE',
      });
    }
    fetchData();
  };

  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Danh sách khách hàng
      </Typography>
      <CustomerTable
        data={customers ?? []}
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
        <CreateCustomerDrawer
          open={openNew}
          onClose={() => {
            setOpenNew(false);
          }}
          handleCreate={handleCreate}
        />
      )}
      {openEdit && (
        <EditCustomerDrawer
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          customer={edited}
          handleEdit={handleEdit}
        />
      )}
    </Stack>
  );
};

export default CustomerPage;
