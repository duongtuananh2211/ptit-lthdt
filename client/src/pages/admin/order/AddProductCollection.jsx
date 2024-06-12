import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '../../../components/form/fields/TextField';
import { Add } from '@mui/icons-material';
import Input from '../../../components/input/Input';

const SelectProductDialog = (props) => {
  const {
    initialValues,
    open,
    handleClose,
    searchValue,
    handleSearch,
    products,
    onSelect,
    selected = [],
  } = props;

  return (
    <Dialog open={open} onClose={handleClose} scroll={'paper'} fullWidth>
      <DialogTitle id='scroll-dialog-title'>Chọn sản phẩm</DialogTitle>
      <DialogContent dividers>
        <TextField
          id={'search-products'}
          required={false}
          name='search'
          value={searchValue}
          onChange={handleSearch}
          placeholder='Nhập tên sản phẩm muốn tìm kiếm'
        />
        <Grid container mt={0.5}>
          {products.length === 0 && (
            <Typography
              textAlign={'center'}
              p={3}
              mt={1}
              width={'100%'}
              border={'1px solid #ddd'}
            >
              Không tìm thấy sản phẩm nào
            </Typography>
          )}
          {products.map((item) => (
            <Grid
              key={item.id + '-grid-item'}
              item
              container
              justifyContent={'space-between'}
              alignItems={'center'}
              xs={12}
            >
              <Grid item xs={2} textAlign={'center'}>
                <img
                  src={item.imageUrls.split(';')[0]}
                  height={100}
                  alt={item.title}
                />
              </Grid>
              <Grid item xs={8.5} overflow={'hidden'}>
                <Typography fontWeight={600} fontSize={13}>
                  {item.title}
                </Typography>
              </Grid>
              <Grid item xs={1.5} textAlign={'right'}>
                <Button
                  variant='contained'
                  color={
                    !(
                      selected.findIndex(
                        (value) => value.productId === item.id
                      ) >= 0
                    )
                      ? 'inherit'
                      : 'error'
                  }
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                  onClick={() => {
                    console.log(initialValues);
                    onSelect({
                      productId: item.id,
                      quantity: 0,
                    });
                  }}
                >
                  {!(
                    selected.findIndex(
                      (value) => value.productId === item.id
                    ) >= 0
                  )
                    ? 'Chọn'
                    : 'Huỷ'}
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='contained'>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const AddProductCollection = (props) => {
  const { selected, onSelect, updateQuantity, initialValues } = props;

  const [openDialog, setOpenDialog] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [products, setProducts] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/product')
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {openDialog && (
        <SelectProductDialog
          initialValues={initialValues}
          open={openDialog}
          handleClose={() => {
            setOpenDialog(false);
          }}
          searchValue={searchValue}
          handleSearch={(e) => {
            setSearchValue(e.target.value);
          }}
          products={products.filter((v) =>
            v.title.toLowerCase().includes(searchValue.toLowerCase())
          )}
          selected={selected}
          onSelect={onSelect}
        />
      )}
      <Grid
        container
        mb={2}
        p={2}
        sx={{
          borderRadius: 2,
          border: '1px solid #dfdfdf',
        }}
      >
        <Grid container justifyContent={'space-between'}>
          <Typography mb={1.5} fontWeight={600} variant='h6' fontSize={16}>
            Sản phẩm của bộ sưu tập
          </Typography>
          <Button
            startIcon={<Add />}
            variant='contained'
            onClick={() => {
              setOpenDialog(true);
              console.log(initialValues);
            }}
          >
            Thêm sản phẩm
          </Button>
        </Grid>
        <Typography fontStyle={'italic'}>
          {selected.length} sản phẩm đã chọn
        </Typography>

        <Grid
          item
          container
          justifyContent={'space-between'}
          alignItems={'center'}
          xs={12}
        >
          <Grid item xs={2}>
            <Typography variant='h6' fontSize={14} textAlign={'center'}>
              Ảnh
            </Typography>
          </Grid>
          <Grid item xs={7} overflow={'hidden'}>
            <Typography variant='h6' fontSize={14} textAlign={'center'}>
              Tên sản phẩm
            </Typography>
          </Grid>
          <Grid item xs={1.5} overflow={'hidden'}>
            <Typography variant='h6' fontSize={14} textAlign={'center'}>
              Số lượng
            </Typography>
          </Grid>
          <Grid item xs={1.5} textAlign={'right'}></Grid>
        </Grid>

        {products.map((item) => {
          let productIndex = selected.findIndex(
            (value) => value.productId === item.id
          );
          if (productIndex === -1) {
            // eslint-disable-next-line array-callback-return
            return;
          }
          return (
            <Grid
              key={item.id + '-grid-item'}
              item
              container
              justifyContent={'space-between'}
              alignItems={'center'}
              xs={12}
            >
              <Grid item xs={2} textAlign={'center'}>
                <img
                  src={item.imageUrls.split(';')[0]}
                  height={100}
                  alt={item.title}
                />
              </Grid>
              <Grid item xs={7} overflow={'hidden'}>
                <Typography fontWeight={600}>{item.title}</Typography>
              </Grid>
              <Grid item xs={1.5} overflow={'hidden'}>
                <Input
                  id={'quantity-' + productIndex}
                  title={''}
                  type='number'
                  value={selected[productIndex].quantity}
                  name={'quantity'}
                  onChange={(e) => {
                    updateQuantity(
                      e.target.value,
                      selected[productIndex].productId
                    );
                    console.log(selected);
                  }}
                />
              </Grid>
              <Grid item xs={1.5} textAlign={'right'}>
                <Button
                  color='error'
                  variant='contained'
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Xoá
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default AddProductCollection;
