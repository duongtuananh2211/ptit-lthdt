import { ButtonGroup, IconButton, MenuItem, Select } from '@mui/material';
import DataTable from '../../../components/table';
import { EditNote, ZoomIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const OrderTable = (props) => {
  const { data, onOpenNew, onOpenEdit, handleDelete, handleFilter } = props;
  const navigate = useNavigate();
  const options = [
    {
      id: 'delivered',
      title: 'Đã giao hàng',
      fontColor: '#059669',
      color: '#d1fae5',
    },
    {
      id: 'pending',
      title: 'Đang chuẩn bị',
      fontColor: '#ca8a04',
      color: '#fef9c3',
    },
    {
      id: 'processing',
      title: 'Đang giao',
      fontColor: '#3b82f6',
      color: '#dbeafe',
    },
    {
      id: 'cancel',
      title: 'Đã huỷ',
      fontColor: '#ef4444',
      color: '#fee2e2',
    },
  ];

  const paymentMethods = [
    {
      id: 'offline',
      title: 'Tiền mặt',
    },
    {
      id: 'online',
      title: 'Chuyển khoản',
    },
  ];

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID',
      renderFn: (order) => order['id'],
    },
    {
      id: 'customer',
      numeric: true,
      disablePadding: false,
      label: 'Tên khách hàng',
      renderFn: (order) => order['customer']['fullName'],
    },
    {
      id: 'payment',
      numeric: true,
      disablePadding: false,
      label: 'Phương thức',
      renderFn: (order) =>
        (paymentMethods.find((v) => v.id === order['payment']) ?? { title: '' })
          .title,
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: 'Tổng tiền',
      renderFn: (order) => moneyFormatter(order['amount']),
    },
    {
      id: 'created_at',
      numeric: true,
      disablePadding: false,
      label: 'Thời gian đặt',
      renderFn: (order) => {
        const t = new Date(order['created']);
        return `${t.getHours() < 10 ? '0' + t.getHours() : t.getHours()}:${
          t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes()
        }:${t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds()} ${
          t.getDate() < 10 ? '0' + t.getDate() : t.getDate()
        }-${
          t.getMonth() < 9 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1
        }-${t.getFullYear()}`;
      },
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Trạng thái',
      renderFn: (order) => {
        let status = options.find((v) => v.id === order['status']);
        if (!status) {
          return '';
        }
        return (
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '1000px',
              backgroundColor: status.color,
              color: status.fontColor,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {status.title}
          </span>
        );
      },
    },
    {
      id: 'actions',
      numeric: true,
      disablePadding: false,
      label: 'Hành động',
      renderFn: (order) => (
        <Select
          defaultValue={order['status']}
          onChange={(e) => {
            console.log(e);
          }}
          name={'status'}
          required
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      id: 'row-actions',
      label: 'Chức năng',
      numeric: true,
      disablePadding: false,
      renderFn: (order) => (
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
              navigate(`/admin/orders/${order.id}`);
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
              onOpenEdit(order);
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

export default OrderTable;
