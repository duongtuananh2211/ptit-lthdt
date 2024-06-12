import { ButtonGroup, IconButton } from '@mui/material';
import DataTable from '../../../components/table';
import { EditNote, ZoomIn } from '@mui/icons-material';

const CategoryTable = (props) => {
  const { data, onOpenNew, onOpenEdit, handleDelete, handleFilter } = props;
  const headCells = [
    {
      id: 'id',
      numeric: false,
      label: 'Mã',
      renderFn: (category) => category['id'],
    },
    {
      id: 'title',
      numeric: false,
      label: 'Tên',
      renderFn: (category) => category['title'],
    },
    {
      id: 'type',
      numeric: true,
      label: 'Loại',
      renderFn: (category) => category['type'],
    },
    {
      id: 'des',
      numeric: true,
      label: 'Mô tả',
      renderFn: (category) => category['des'],
    },
    {
      id: 'row-actions',
      label: 'Chức năng',
      numeric: true,
      disablePadding: false,
      renderFn: (category) => (
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
              // navigate(`/users/${category.owner}`);
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
              onOpenEdit(category);
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
      placeholder: 'Tìm kiếm theo tên loại',
    },
    {
      id: 'filter-type',
      name: 'type',
      placeholder: 'Tìm kiếm theo kiểu',
    },
  ];

  const filterValues = {
    title: '',
    type: '',
  };

  return (
    <DataTable
      rows={data}
      headCells={headCells}
      onOpenNew={onOpenNew}
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

export default CategoryTable;
