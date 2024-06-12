import { Box, Grid, Typography } from '@mui/material';
import FormDrawer from '../../../components/FormDrawer';
import { useMemo, useState } from 'react';
import AddProductCollection from './AddProductCollection';

const CreateOrderDrawer = (props) => {
  const { open, onClose, handleCreate } = props;
  const [products, setProducts] = useState([]);

  const formFields = [
    {
      id: 'payment-field',
      label: 'Phương thức thanh toán',
      name: 'payment',
      type: 'select',
      options: [
        {
          id: 'offline',
          title: 'Tiền mặt',
        },
        {
          id: 'online',
          title: 'Chuyển khoản',
        },
      ],
      placeholder: 'Nhập phương thức thanh toán',
    },
    {
      id: 'status-field',
      label: 'Trạng thái đơn hàng',
      name: 'status',
      type: 'select',
      options: [
        {
          id: 'delivered',
          title: 'Đã giao hàng',
        },
        {
          id: 'pending',
          title: 'Đang chuẩn bị',
        },
        {
          id: 'processing',
          title: 'Đang xử lý',
        },
        {
          id: 'cancel',
          title: 'Đã huỷ',
        },
      ],
      placeholder: 'Trạng thái đơn hàng',
    },
  ];

  const formFieldsCustomer = [
    {
      id: 'name-customer',
      label: 'Họ tên',
      name: 'fullName',
      type: 'text',
      placeholder: 'Nhập họ tên khách hàng',
    },
    {
      id: 'phone-number-customer',
      label: 'Số điện thoại',
      name: 'phoneNumber',
      type: 'text',
      placeholder: 'Nhập số điện thoại',
    },
    {
      id: 'address-customer',
      label: 'Địa chỉ',
      name: 'address',
      type: 'text',
      placeholder: 'Nhập địa chỉ',
    },
  ];

  const initialValues = useMemo(() => {
    return {
      payment: '',
      status: '',
      fullName: '',
      phoneNumber: '',
      address: '',
      productItems: [],
    };
  }, []);

  return (
    <FormDrawer
      title={'Thêm đơn hàng'}
      sx={{
        width: '50%',
      }}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      btnText={'Thêm đơn hàng'}
      onChange={(e) => {
        initialValues[e.target.name] = e.target.value;
      }}
      onSubmit={() => {
        initialValues['productItems'] = products;
        handleCreate(initialValues);
      }}
    >
      <Box
        width={'100%'}
        border={'1px solid #dfdfdf'}
        p={2}
        borderRadius={2}
        mb={3}
      >
        <Typography variant='h6' fontSize={15}>
          Thông tin khách hàng
        </Typography>
        <Grid p={2} container spacing={2}>
          {formFieldsCustomer.map((item) => (
            <Grid
              key={item.id}
              item
              sx={{
                gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                display: 'grid',
              }}
              xs={12}
              alignItems={'center'}
            >
              <label
                style={{
                  gridColumn: 'span 2 / span 2',
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </label>
              <Box gridColumn='span 4 / span 4'>
                <input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  defaultValue={initialValues[item.name]}
                  onChange={(e) => {
                    initialValues[e.target.name] = e.target.value;
                  }}
                  style={{
                    width: item.type === 'checkbox' ? '5%' : '100%',
                    fontSize: 15,
                    padding: 12,
                    backgroundColor: '#f3f4f6',
                    borderRadius: 6,
                    border: '1px solid #e5e7eb',
                    lineHeight: 1.5,
                  }}
                  required
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Product */}

      <AddProductCollection
        selected={products}
        initialValues={initialValues}
        onSelect={(product) => {
          if (products.indexOf(product) >= 0) {
            setProducts(
              products.filter((v) => v.productId !== product.productId)
            );
          } else {
            setProducts([...products, product]);
          }
        }}
        updateQuantity={(value, productId) => {
          setProducts([
            ...products.filter((v) => v.productId !== productId),
            {
              productId: productId,
              quantity: parseInt(value),
            },
          ]);
        }}
      />
    </FormDrawer>
  );
};

export default CreateOrderDrawer;
