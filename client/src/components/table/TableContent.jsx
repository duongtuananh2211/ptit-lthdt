import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const TableContent = (props) => {
  const {
    rows,
    selected,
    page,
    rowsPerPage,
    order,
    orderBy,
    handleClick,
    headCells,
  } = props;

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rows, rowsPerPage]
  );

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={(event) => handleClick(event, row.id)}
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.id + 'abc-xyz'}
            selected={isItemSelected}
            sx={{ cursor: 'pointer' }}
          >
            <TableCell padding='checkbox'>
              <Checkbox
                color='primary'
                checked={isItemSelected}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </TableCell>
            {headCells.map((th) => (
              <TableCell
                key={th.id + '-body'}
                align={th.id === 'row-actions' ? 'right' : 'left'}
              >
                {th.renderFn(row)}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow>
          <TableCell colSpan={10} />
        </TableRow>
      )}
    </TableBody>
  );
};

TableContent.propType = {
  rows: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  order: PropTypes.oneOf(['desc', 'asc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default TableContent;
