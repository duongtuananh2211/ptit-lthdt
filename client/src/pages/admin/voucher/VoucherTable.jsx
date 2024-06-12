import { ButtonGroup, IconButton } from '@mui/material';
import DataTable from '../../../components/table';
import { EditNote, ZoomIn } from '@mui/icons-material';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const VoucherTable = (props) => {
  const { data, onOpenNew, onOpenEdit, handleDelete, handleFilter } = props;

  const headCells = [
    {
      id: 'code-td',
      numeric: false,
      label: 'Mã',
      renderFn: (voucher) => voucher['code'],
    },
    {
      id: 'title-td',
      numeric: false,
      label: 'Tên',
      renderFn: (voucher) => voucher['title'],
    },
    {
      id: 'discount-td',
      numeric: true,
      label: 'Chiết khấu',
      renderFn: (voucher) => {
        if (voucher['type'] === 'percent') {
          return voucher['discount'] + '%';
        } else {
          return moneyFormatter(voucher['discount']);
        }
      },
    },
    {
      id: 'remain-td',
      numeric: true,
      label: 'Còn lại',
      renderFn: (voucher) => voucher['remain'],
    },
    {
      id: 'total-td',
      numeric: true,
      label: 'Số lượng',
      renderFn: (voucher) => voucher['total'],
    },
    {
      id: 'status-td',
      numeric: true,
      label: 'Mở',
      renderFn: (voucher) => (
        <input
          type='checkbox'
          checked={voucher['status']}
          onChange={() => {}}
        />
      ),
    },
    {
      id: 'start-date-td',
      numeric: true,
      label: 'Từ',
      renderFn: (voucher) => {
        const t = new Date(voucher['startDate']);
        return `${t.getDate() < 10 ? '0' + t.getDate() : t.getDate()}-${
          t.getMonth() < 9 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1
        }-${t.getFullYear()}`;
      },
    },
    {
      id: 'end-date',
      numeric: true,
      label: 'Đến',
      renderFn: (voucher) => {
        const t = new Date(voucher['endDate']);
        return `${t.getDate() < 10 ? '0' + t.getDate() : t.getDate()}-${
          t.getMonth() < 9 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1
        }-${t.getFullYear()}`;
      },
    },
    {
      id: 'row-actions',
      label: 'Chức năng',
      numeric: true,
      disablePadding: false,
      renderFn: (voucher) => (
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
              // navigate(`/users/${voucher.owner}`);
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
              onOpenEdit(voucher);
            }}
          >
            <EditNote />
          </IconButton>
        </ButtonGroup>
      ),
    },
  ];

  const filters = [];
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

export default VoucherTable;
