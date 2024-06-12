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

const SelectProductDialog = (props) => {
  const {
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
              Không tìm thấy sản phẩm nào có với "{searchValue}"
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
                    !(selected.findIndex((v) => v === item.id) >= 0)
                      ? 'inherit'
                      : 'error'
                  }
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                  onClick={() => {
                    onSelect(item.id);
                  }}
                >
                  {!(selected.indexOf(item.id) >= 0) ? 'Chọn' : 'Huỷ'}
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
  const { selected, onSelect } = props;

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
          boxShadow:
            '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
          borderRadius: 2,
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
            }}
          >
            Thêm sản phẩm
          </Button>
        </Grid>
        <Typography fontStyle={'italic'}>
          {selected.length} sản phẩm đã chọn
        </Typography>
        {products.map((item) => {
          if (selected.indexOf(item.id) === -1) {
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
              <Grid item xs={8.5} overflow={'hidden'}>
                <Typography fontWeight={600}>{item.title}</Typography>
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
