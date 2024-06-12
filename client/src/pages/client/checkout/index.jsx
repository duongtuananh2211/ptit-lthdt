import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import DeliveryInformation from './DeliveryInformation';
import CartPayment from './CartPayment';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const CheckoutPage = () => {
  const [products, setProducts] = useState([]);
  let user = localStorage.getItem('user-current');
  if (user) {
    user = JSON.parse(user);
  }
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('offline');
  const navigate = useNavigate();

  const fetchDistricts = (id) => {
    fetch(`https://vapi.vnappmob.com/api/province/district/${id}`)
      .then((data) => data.json())
      .then((res) => {
        setDistricts(res.results);
      });
  };

  const fetchWards = (id) => {
    fetch(`https://vapi.vnappmob.com/api/province/ward/${id}`)
      .then((data) => data.json())
      .then((res) => {
        setWards(res.results);
      });
  };

  useEffect(() => {
    fetch('https://vapi.vnappmob.com/api/province/')
      .then((data) => data.json())
      .then((res) => {
        setProvinces(res.results);
      });
  }, []);

  const deliveryInformation = useMemo(() => {
    return [
      {
        id: 'input-fullName',
        name: 'fullName',
        title: 'Họ và tên',
        type: 'text',
      },
      {
        id: 'input-phoneNumber',
        name: 'phoneNumber',
        title: 'Số điện thoại',
        type: 'text',
      },
      {
        id: 'input-email',
        name: 'email',
        title: 'Email',
        type: 'text',
      },
      {
        id: 'input-city',
        name: 'city',
        title: 'Tỉnh / thành phố',
        type: 'select',
        options: provinces.map((v) => {
          return {
            id: v['province_id'],
            title: v['province_name'],
          };
        }),
        handleChange: (id) => {
          setDistricts([]);
          setWards([]);
          fetchDistricts(id);
        },
      },
      {
        id: 'input-district',
        name: 'district',
        title: 'Quận / huyện',
        type: 'select',
        options: districts.map((v) => {
          return {
            id: v['district_id'],
            title: v['district_name'],
          };
        }),
        handleChange: (id) => {
          setWards([]);
          fetchWards(id);
        },
      },
      {
        id: 'input-ward',
        name: 'ward',
        title: 'Phường / xã',
        type: 'select',
        options: wards.map((v) => {
          return {
            id: v['ward_id'],
            title: v['ward_name'],
          };
        }),
        handleChange: () => {},
      },
      {
        id: 'input-address',
        name: 'address',
        title: 'Số nhà, tên đường',
        type: 'text',
      },
    ];
  }, [districts, provinces, wards]);

  const [deliveryInformationValue, setDeliveryInformationValue] = useState({
    fullName: user ? user['customer']['fullName'] : '',
    phoneNumber: user ? user['customer']['phoneNumber'] : '',
    email: user ? user['email'] : '',
    city: '',
    district: '',
    ward: '',
    address: '',
  });

  const fetchData = () => {
    let cart = localStorage.getItem('cart');
    if (cart === null) return;
    cart = JSON.parse(cart);
    let queryParams = cart.reduce((pre, cur) => pre + `ids=${cur['id']}&`, '');
    queryParams = queryParams.substring(0, queryParams.length - 1);
    fetch(`http://localhost:8080/api/product/bulk?${queryParams}`)
      .then((data) => data.json())
      .then((data) => {
        if ('status' in data) {
          return;
        }
        setProducts(
          (data ?? []).map((v) => {
            let p = cart.find((c) => c['id'] === v['id']);
            let quantity = 1;
            if (p !== null) {
              quantity = p['quantity'];
            }
            return {
              ...v,
              quantity: quantity,
            };
          })
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            backgroundColor: 'rgb(0, 0, 0, 0.2)',
            zIndex: 999999,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              minHeight: '100vh',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 6,
                bgcolor: '#fff',
                borderRadius: 4,
              }}
            >
              <CircularProgress size={'60px'} />
              <Typography mt={3} variant='h6'>
                Xin quý khách vui lòng đợi trong giây lát, hệ thống đang tạo đơn
                hàng
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      <Grid container bgcolor={'#fff'} borderRadius={1} p={3}>
        <Grid item xs={8}>
          <DeliveryInformation
            data={products}
            deliveryInformation={deliveryInformation}
            deliveryInformationValue={deliveryInformationValue}
            setDeliveryInformationValue={setDeliveryInformationValue}
          />
        </Grid>
        <Grid item xs={4}>
          <CartPayment
            data={products}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            handleOrder={() => {
              const province = provinces.find(
                (e) => e['province_id'] === deliveryInformationValue['city']
              )?.['province_name'];
              const district = districts.find(
                (e) => e['district_id'] === deliveryInformationValue['district']
              )?.['district_name'];
              const ward = wards.find(
                (e) => e['ward_id'] === deliveryInformationValue['ward']
              )?.['ward_name'];
              const order = {
                payment: paymentMethod,
                status: 'pending',
                fullName: deliveryInformationValue['fullName'],
                phoneNumber: deliveryInformationValue['phoneNumber'],
                address: `${deliveryInformationValue['address']}, ${ward}, ${district}, ${province}`,
                productItems: products.map((v) => {
                  return {
                    productId: v['id'],
                    quantity: v['quantity'],
                  };
                }),
              };
              console.log(order);
              fetch('http://localhost:8080/api/order', {
                body: JSON.stringify(order),
                method: 'POST',
                headers: {
                  'Content-type': 'Application/json',
                },
              })
                .then((data) => data.json())
                .then((data) => {
                  console.log(data);
                  localStorage.removeItem('cart');
                  setOpen(true);
                  setTimeout(() => {
                    enqueueSnackbar('Tạo đơn hàng thành công.', {
                      variant: 'success',
                    });
                    navigate('/orders/' + data['id']);
                  }, 3000);
                });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutPage;
