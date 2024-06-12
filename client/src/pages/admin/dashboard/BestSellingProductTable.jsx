import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const headCells = [
  {
    id: 'id',
    align: 'left',
    label: 'Mã SP',
  },
  {
    id: 'title',
    align: 'left',
    label: 'Tên SP',
  },
  {
    id: 'total',
    align: 'right',
    label: 'Đã bán',
  },
];

export default function BestSellingProductTable(props) {
  const { data } = props;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          display: 'block',
          maxWidth: '100%',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  sx={{ border: 'none' }}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow
                  key={row.id + 'row-best'}
                  hover
                  role='checkbox'
                  tabIndex={-1}
                >
                  {headCells.map((th) => (
                    <TableCell
                      key={th.id + 'in-row-best-selling'}
                      component='th'
                      scope='row'
                      align={th.align}
                    >
                      {th.id === 'code' ? (
                        <Link color='secondary' component={RouterLink} to='/?'>
                          {row[th.id]}
                        </Link>
                      ) : (
                        row[th.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
