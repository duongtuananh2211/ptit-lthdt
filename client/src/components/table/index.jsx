import { Stack, Table, TableContainer, TablePagination } from '@mui/material';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import { useState } from 'react';
import ToolbarAction from './ToolbarAction';

const DataTable = (props) => {
  const {
    rows,
    headCells,
    onOpenNew,
    onDeleteRows,
    filters,
    filterValues,
    handleFilter,
    handleResetFilter,
  } = props;

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack spacing={2}>
      <ToolbarAction
        selected={selected}
        onOpenNew={onOpenNew}
        onHandleDelete={() => {
          onDeleteRows(selected);
          setSelected([]);
        }}
        filters={filters}
        filterValues={filterValues}
        onChange={(e) => {
          filterValues[e.target.name] = e.target.value;
        }}
        handleResetFilter={handleResetFilter}
        handleFilter={handleFilter}
      />
      <TableContainer sx={{ bgcolor: '#fff', border: '1px solid #e5e7eb' }}>
        <Table size={'small'}>
          <TableHeader
            onSelectAllClick={handleSelectAllClick}
            order={order}
            orderBy={orderBy}
            numSelected={selected.length}
            rowCount={rows.length}
            onRequestSort={handleRequestSort}
            headCells={headCells}
          />
          <TableContent
            rows={rows}
            selected={selected}
            page={page}
            rowsPerPage={rowsPerPage}
            order={order}
            orderBy={orderBy}
            handleClick={handleClick}
            headCells={headCells}
            filterValues={filterValues}
          />
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          labelRowsPerPage='Số hàng'
          labelDisplayedRows={(v) => {
            return `Hiển thị ${v.from} - ${v.to} trong ${v.count} kết quả`;
          }}
          sx={{
            bgcolor: '#fff',
          }}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Stack>
  );
};

export default DataTable;
