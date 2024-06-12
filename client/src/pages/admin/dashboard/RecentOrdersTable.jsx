import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Dot from '../../../components/Dot';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const headCells = [
  {
    id: 'id',
    align: 'left',
    label: 'Code',
  },
  {
    id: 'fullName',
    align: 'left',
    label: 'Tên khách hàng',
  },
  {
    id: 'total',
    align: 'right',
    label: 'Số lượng',
  },
  {
    id: 'status',
    align: 'left',
    label: 'Trạng thái',
  },
  {
    id: 'amount',
    align: 'right',
    label: 'Tổng tiền',
  },
];

const OrderStatus = (props) => {
  const { status } = props;
  let color;
  let title;

  if (status === 'processing') {
    color = 'primary';
    title = 'Đang giao';
  } else if (status === 'delivered') {
    color = 'success';
    title = 'Đã giao';
  } else if (status === 'cancel') {
    color = 'error';
    title = 'Đã huỷ';
  } else {
    color = 'warning';
    title = 'Chưa xử lý';
  }

  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

export default function OrderTable(props) {
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
                <TableRow hover tabIndex={-1} key={row['id'] + 'recent'}>
                  <TableCell component='th' scope='row' align='left'>
                    <Link color='secondary' component={RouterLink} to=''>
                      #{row.id}
                    </Link>
                  </TableCell>
                  <TableCell align='left'>{row['fullName']}</TableCell>
                  <TableCell align='right'>{row['total']}</TableCell>
                  <TableCell align='left'>
                    <OrderStatus status={row['status']} />
                  </TableCell>
                  <TableCell align='right'>
                    {moneyFormatter(row.amount)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
