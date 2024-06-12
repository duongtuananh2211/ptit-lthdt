import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { Check, ShoppingCartOutlined } from '@mui/icons-material';
import { useMemo, useState } from 'react';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import { addCart } from '../../../utils/cartUtils';

const ListProduct = (props) => {
  const { data } = props;
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('created');

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

  const visibleRows = useMemo(
    () => stableSort(data, getComparator(order, orderBy)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, orderBy, data]
  );

  const buttonSort = [
    {
      id: 'created-desc',
      title: 'Hàng mới',
      handle: () => {
        setOrder('desc');
        setOrderBy('created');
      },
    },
    {
      id: 'price-asc',
      title: 'Giá tăng dần',
      handle: () => {
        setOrder('asc');
        setOrderBy('price');
      },
    },
    {
      id: 'price-desc',
      title: 'Giá giảm dần',
      handle: () => {
        setOrder('desc');
        setOrderBy('price');
      },
    },
  ];

  const showedDetail = [
    {
      id: 'cpu',
      title: 'CPU',
    },
    {
      id: 'ram',
      title: 'RAM',
    },
    {
      id: 'disk',
      title: 'Ổ cứng',
    },
    {
      id: 'vga',
      title: 'VGA',
    },
    {
      id: 'monitor',
      title: 'Màn hình',
    },
    {
      id: 'color',
      title: 'Màu',
    },
    {
      id: 'os',
      title: 'HĐH',
    },
  ];

  const totalPage = Math.ceil(visibleRows.length / 12);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    // TODO
  };

  return (
    <Stack spacing={3}>
      <div
        style={{
          border: '1px solid #eee',
          backgroundColor: '#f6f6f6',
          padding: 8,
          borderRadius: 4,
        }}
      >
        <Typography ml={1} mb={1} variant='h6'>
          Sắp xếp theo
        </Typography>
        <Box display='flex'>
          {buttonSort.map((item, index) => (
            <Button
              key={item.id}
              variant='contained'
              onClick={() => {
                item.handle();
              }}
              sx={{
                mr: 3,
                color:
                  `${orderBy}-${order}` === item['id'] ? '#fff' : 'inherit',
                bgcolor:
                  `${orderBy}-${order}` === item['id'] ? '#0958d9' : '#fff',
                fontWeight: 600,
                border:
                  item['id'] === `${orderBy}-${order}`
                    ? '1px #243a76 solid'
                    : '1px #243a76 dashed',
                ':hover': { color: '#fff', border: '1px #243a76 solid' },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </div>

      <Grid container spacing={1.5} marginLeft={'-15px !important'}>
        {(visibleRows ?? []).slice((page - 1) * 12, page * 12).map((item) => (
          <Grid key={item.id} item xs={3}>
            <Stack
              p={1.25}
              boxShadow={
                '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15);'
              }
              borderRadius={5}
            >
              <Box
                height={230}
                display={'block'}
                textAlign='center'
                component={'a'}
                href={`/products/${item.title
                  .toLowerCase()
                  .replaceAll(' ', '-')}-prod${item.id}`}
              >
                <img src={item.imageUrls.split(';')[0]} alt={item.title} />
              </Box>
              <div>
                <Typography
                  display='inline-block'
                  bgcolor='#f1f1f1'
                  p='3px 5px'
                  fontSize={11}
                  textTransform='uppercase'
                  borderRadius={1}
                >
                  Mã: PROD{item.id}
                </Typography>
              </div>
              <Typography
                fontWeight={600}
                fontSize={13.5}
                textTransform='uppercase'
                height={36}
                overflow='hidden'
                component={'a'}
                m={1}
                href={`/products/${item.title
                  .toLowerCase()
                  .replaceAll(' ', '-')}-prod${item.id}`}
              >
                {item.title}
              </Typography>
              <Stack height={180} overflow='hidden' m={1} mt={0}>
                {showedDetail.map((e) => (
                  <Typography
                    key={e.id + '-details'}
                    lineHeight={1.75}
                    fontSize={13}
                    color='#333e48'
                    display='list-item'
                    sx={{
                      listStyle: 'inside',
                    }}
                  >
                    {e.title + ': ' + item[e.id]}
                  </Typography>
                ))}
              </Stack>
              <Typography variant='h5' ml={1} color={'#ed1b24'}>
                {moneyFormatter(item.price)}
              </Typography>
              <Box
                m={1}
                mb={0}
                mt={0}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                maxHeight={32}
              >
                <Box display='flex' alignItems='center'>
                  <Check
                    sx={{
                      color: '#2cc067',
                    }}
                  />
                  <Typography color='#2cc067'>Sẵn hàng</Typography>
                </Box>
                <IconButton
                  sx={{
                    height: 32,
                    width: 32,
                    bgcolor: '#ed1b24',
                    borderRadius: '50%',
                    ':hover': {
                      bgcolor: '#ed1b24',
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => {
                    addCart(item, 1);
                  }}
                >
                  <ShoppingCartOutlined sx={{ color: '#fff', fontSize: 20 }} />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
        count={totalPage}
        page={page}
        onChange={handleChange}
        variant='outlined'
        shape='rounded'
      />
    </Stack>
  );
};

export default ListProduct;
