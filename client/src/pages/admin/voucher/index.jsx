import { Stack, Typography } from '@mui/material';
import VoucherTable from './VoucherTable';
import CreateVoucherDrawer from './CreateVoucherDrawer';
import { useEffect, useState } from 'react';

const VoucherPage = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(null);

  const [vouchers, setVouchers] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/voucher')
      .then((data) => data.json())
      .then((data) => {
        setVouchers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = (voucher) => {
    console.log(voucher);
    fetch('http://localhost:8080/api/voucher', {
      body: JSON.stringify(voucher),
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // window.location.reload();
      });
  };

  const handleEdit = (voucher) => {
    console.log(voucher);
    fetch(`http://localhost:8080/api/voucher/${voucher.id}`, {
      body: JSON.stringify(voucher),
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

  const handleDelete = async (voucherIds) => {
    console.log(voucherIds);
    for (let i = 0; i < voucherIds.length; i++) {
      await fetch(`http://localhost:8080/api/voucher/${voucherIds[i]}`, {
        method: 'DELETE',
      });
    }
    fetchData();
  };
  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Danh sách mã giảm giá
      </Typography>
      <VoucherTable
        data={vouchers}
        onOpenNew={() => {
          setOpenNew(true);
        }}
        onOpenEdit={(voucher) => {
          setOpenEdit(true);
          setEdited(voucher);
        }}
        handleDelete={handleDelete}
        handleFilter={(filters) => {
          fetchData(filters);
        }}
      />

      {openNew && (
        <CreateVoucherDrawer
          open={openNew}
          onClose={() => {
            setOpenNew(false);
          }}
          handleCreate={handleCreate}
        />
      )}
    </Stack>
  );
};

export default VoucherPage;
