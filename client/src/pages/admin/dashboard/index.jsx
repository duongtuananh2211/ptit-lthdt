import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import OrdersAreaChart from './OrdersAreaChart';
import SalesBarChart from './SalesBarChart';
import SalesReportChart from './SalesReportChart';
import MainCard from '../../../components/MainCard';
import AnalyticalSummary from './AnalyticalSummary';
import BestSellingProductTable from './BestSellingProductTable';
import {
  moneyFormatter,
  numberWithCommas,
} from '../../../utils/moneyFormatter';

const status = [
  {
    value: 'week',
    label: 'Theo tuần',
  },
  {
    value: 'month',
    label: 'Theo tháng',
  },
];

const DashboardPage = () => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/msg');
    socket.onopen = function (event) {
      socket.send('Hello Server!');
    };
    socket.onmessage = function (event) {
      // const json = JSON.parse(event.data);
      console.log(`[message] Data received from server: ${event.data}`);
      try {
        if ((event.data = 'data')) {
          console.log(event.data);
        }
      } catch (err) {
        // whatever you wish to do with the err
      }
    };
  }, []);

  const [value, setValue] = useState('month');
  const [slot, setSlot] = useState('month');

  const [data, setData] = useState({
    visitorsCurrent: 0,
    visitorsTotal: 0,
    customersCurrent: 0,
    customersTotal: 0,
    ordersCurrent: 0,
    ordersTotal: 0,
    revenuesCurrent: 0,
    revenuesTotal: 0,
    dailyRevenues: [],
    bestSellingProducts: [],
    recentOrders: [],
    orderStatistics: [],
  });

  const fetchData = () => {
    fetch('http://localhost:8080/api/admin')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography fontWeight={600} variant='h5'>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng số lượt truy cập'
          count={numberWithCommas(data['visitorsTotal'])}
          extra={numberWithCommas(data['visitorsCurrent'])}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng số khách hàng'
          count={numberWithCommas(data['customersTotal'])}
          extra={numberWithCommas(data['customersCurrent'])}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng số đơn hàng'
          count={numberWithCommas(data['ordersTotal'])}
          extra={numberWithCommas(data['ordersCurrent'])}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng doanh thu'
          count={moneyFormatter(data['revenuesTotal'])}
          extra={moneyFormatter(data['revenuesCurrent'])}
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }}
      />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Đơn hàng</Typography>
          </Grid>
          <Grid item>
            <Stack direction='row' alignItems='center' spacing={0}>
              {/* <Button
                size='small'
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Tuần
              </Button> */}
              <Button
                size='small'
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Tháng
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <OrdersAreaChart slot={slot} data={data['orderStatistics']} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Tổng quan thu nhập</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 1.75, pb: 0 }}>
            <Stack spacing={2}>
              <Typography fontWeight={500} variant='h6' color='textSecondary'>
                Phân tích trong tuần này
              </Typography>
              <Typography fontWeight={500} variant='h3'>
                {moneyFormatter(
                  data['dailyRevenues'].reduce(
                    (pre, cur) => pre + cur['amount'],
                    0
                  )
                )}
              </Typography>
            </Stack>
          </Box>
          <SalesBarChart data={data['dailyRevenues']} />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Báo cáo bán hàng</Typography>
          </Grid>
          <Grid item>
            <TextField
              id='standard-select-currency'
              size='small'
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{
                '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' },
              }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Box pb={2.7}>
            <Stack spacing={2}>
              <Typography fontWeight={500} variant='h6' color='textSecondary'>
                Phân tích theo tháng của năm 2024
              </Typography>
              <Typography fontWeight={500} variant='h3'>
                {moneyFormatter(
                  data['orderStatistics'].reduce(
                    (pre, cur) => pre + cur['amount'],
                    0
                  )
                )}
              </Typography>
            </Stack>
          </Box>
          <SalesReportChart data={data['orderStatistics']} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Sản phẩm bán chạy</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <BestSellingProductTable data={data['bestSellingProducts']} />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={12}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Đơn hàng gần đây</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <RecentOrdersTable data={data['recentOrders']} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
