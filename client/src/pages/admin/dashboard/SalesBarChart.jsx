import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    y: {
      formatter: moneyFormatter,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
};

const SalesBarChart = (props) => {
  const theme = useTheme();
  const { data } = props;

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [info],
      xaxis: {
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
      },
      tooltip: {
        theme: 'light',
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, info, secondary]);

  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={[{ data: data.map((v) => v['amount']) }]}
        type='bar'
        height={365}
      />
    </div>
  );
};

export default SalesBarChart;
