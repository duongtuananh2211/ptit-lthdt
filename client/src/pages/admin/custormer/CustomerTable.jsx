import { ButtonGroup, IconButton } from '@mui/material';
import DataTable from '../../../components/table';
import { Circle, EditNote, ZoomIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomerTable = (props) => {
  const { data, onOpenNew, onOpenEdit, handleDelete, handleFilter } = props;
  const navigate = useNavigate();

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID',
      renderFn: (customer) => customer['id'],
    },
    {
      id: 'fullName',
      numeric: true,
      disablePadding: false,
      label: 'Họ tên',
      renderFn: (customer) => customer['fullName'],
    },
    {
      id: 'phone_number',
      numeric: true,
      disablePadding: false,
      label: 'Số điện thoại',
      renderFn: (customer) => customer['phoneNumber'],
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
      renderFn: (customer) => customer['email'],
    },
    {
      id: 'address',
      numeric: true,
      disablePadding: false,
      label: 'Địa chỉ',
      renderFn: (customer) => customer['address'],
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Trạng thái',
      renderFn: (customer) => (
        <Circle color={customer['user'] ? 'success' : 'error'} />
      ),
    },
    {
      id: 'row-actions',
      label: 'Chức năng',
      numeric: true,
      disablePadding: false,
      renderFn: (customer) => (
        <ButtonGroup
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IconButton
            aria-label='Xem thông tin'
            color='secondary'
            title='Xem thông tin'
            onClick={() => {
              navigate(`/admin/customers/${customer.id}`);
            }}
          >
            <ZoomIn />
          </IconButton>
          <IconButton
            color='secondary'
            aria-label='Sửa thông tin'
            title='Sửa thông tin'
            onClick={(e) => {
              e.stopPropagation();
              onOpenEdit(customer);
            }}
          >
            <EditNote />
          </IconButton>
        </ButtonGroup>
      ),
    },
  ];

  const filters = [
    // {
    //   id: 'filter-title',
    //   name: 'title',
    //   placeholder: 'Tìm kiếm theo tên loại',
    // },
  ];

  const filterValues = {};

  return (
    <DataTable
      rows={data}
      headCells={headCells}
      onOpenNew={onOpenNew}
      onDeleteRows={handleDelete}
      filters={filters}
      filterValues={filterValues}
      handleResetFilter={() => {}}
      handleFilter={() => {
        handleFilter(filterValues);
      }}
    />
  );
};

export default CustomerTable;
