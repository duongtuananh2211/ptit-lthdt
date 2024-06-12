import { ButtonGroup, IconButton } from '@mui/material';
import DataTable from '../../../components/table';
import { EditNote, ZoomIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const ProductTable = (props) => {
  const { data, onOpenNew, onOpenEdit, handleDelete, handleFilter } = props;
  const navigate = useNavigate();

  const headCells = [
    {
      id: 'id',
      numeric: false,
      label: 'Mã',
      renderFn: (product) => product['id'],
    },
    {
      id: 'title',
      numeric: false,
      label: 'Tên',
      renderFn: (product) => product['title'],
    },
    {
      id: 'type',
      numeric: true,
      label: 'Loại',
      renderFn: (product) => product['category']['title'],
    },
    {
      id: 'price',
      numeric: true,
      label: 'Giá',
      renderFn: (product) => moneyFormatter(product['price']),
    },
    {
      id: 'discount',
      numeric: true,
      label: 'Giá cũ',
      renderFn: (product) => moneyFormatter(product['discount']),
    },
    {
      id: 'remain',
      numeric: true,
      label: 'Còn lại',
      renderFn: (product) => product['remain'],
    },
    {
      id: 'total',
      numeric: true,
      label: 'Tổng số lượng',
      renderFn: (product) => product['total'],
    },
    {
      id: 'row-actions',
      label: 'Chức năng',
      numeric: true,
      disablePadding: false,
      renderFn: (product) => (
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
              console.log(product);
              navigate(`/admin/products/${product.id}`);
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
              onOpenEdit(product);
            }}
          >
            <EditNote />
          </IconButton>
        </ButtonGroup>
      ),
    },
  ];

  const filters = [
    {
      id: 'filter-title',
      name: 'title',
      placeholder: 'Tìm kiếm theo tên',
    },
  ];

  const filterValues = {
    title: '',
  };

  return (
    <DataTable
      rows={data}
      onOpenNew={onOpenNew}
      headCells={headCells}
      onDeleteRows={handleDelete}
      filters={filters}
      filterValues={filterValues}
      handleResetFilter={() => {
        filterValues['title'] = '';
        filterValues['type'] = '';
      }}
      handleFilter={() => {
        handleFilter(filterValues);
      }}
    />
  );
};
export default ProductTable;
