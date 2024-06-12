import { ButtonGroup, IconButton } from '@mui/material';
import DataTable from '../../../components/table';
import { EditNote, ZoomIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CollectionTable = (props) => {
  const { data, handleDelete } = props;

  const navigate = useNavigate();
  const headCells = [
    {
      id: 'type',
      numeric: true,
      label: 'Mã',
      renderFn: (collection) => collection['type'],
    },
    {
      id: 'title',
      numeric: false,
      label: 'Tên',
      renderFn: (collection) => collection['title'],
    },
    {
      id: 'des',
      numeric: true,
      label: 'Mô tả',
      renderFn: (collection) => collection['des'],
    },
    {
      id: 'row-actions',
      label: 'Chức năng',
      numeric: true,
      disablePadding: false,
      renderFn: (collection) => (
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
              navigate(`/admin/collections/${collection.id}`);
            }}
          >
            <ZoomIn />
          </IconButton>
          <IconButton
            color='secondary'
            aria-label='Sửa thông tin'
            title='Sửa thông tin'
            onClick={(e) => {
              navigate(`/admin/collections/${collection.id}/edit`);
            }}
          >
            <EditNote />
          </IconButton>
        </ButtonGroup>
      ),
    },
  ];

  return (
    <DataTable
      rows={data}
      headCells={headCells}
      onOpenNew={() => {
        navigate('/admin/collections/new');
      }}
      onDeleteRows={handleDelete}
      filters={[]}
      filterValues={{}}
      handleResetFilter={() => {}}
      handleFilter={() => {}}
    />
  );
};

export default CollectionTable;
