import { Box, Typography } from '@mui/material';
import FormDrawer from '../../../components/FormDrawer';
import { useEffect, useState } from 'react';

const CreateProductDrawer = (props) => {
  const { open, onClose, handleCreate } = props;
  const [categories, setCategories] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/category')
      .then((data) => data.json())
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formFields = [
    {
      id: 'title-field',
      label: 'Tên sản phẩm',
      name: 'title',
      type: 'text',
      value: '',
      placeholder: 'Nhập tên sản phẩm',
    },
    {
      id: 'description-field',
      label: 'Mô tả sản phẩm',
      name: 'description',
      type: 'textarea',
      value: '',
      placeholder: 'Nhập mô tả sản phẩm',
    },
    {
      id: 'category-field',
      label: 'Loại laptop',
      name: 'category',
      type: 'select',
      options: categories.map((item) => {
        return { id: item.id, title: item.title };
      }),
      placeholder: 'Nhập loại laptop',
    },
    {
      id: 'price-field',
      label: 'Giá sản phẩm',
      name: 'price',
      type: 'text',
      value: '',
      placeholder: 'Nhập giá sản phẩm',
    },
    {
      id: 'discount-field',
      label: 'Giảm giá sản phẩm',
      name: 'discount',
      type: 'number',
      value: '',
      placeholder: 'Nhập giảm giá sản phẩm',
    },
    {
      id: 'total-field',
      label: 'Số lượng sản phẩm',
      name: 'total',
      type: 'number',
      value: '',
      placeholder: 'Nhập số lượng sản phẩm',
    },
    {
      id: 'cpu-field',
      label: 'CPU',
      name: 'cpu',
      type: 'text',
      value: '',
      placeholder: 'Nhập tên CPU',
    },
    {
      id: 'ram-field',
      label: 'Ram sản phẩm',
      name: 'ram',
      type: 'text',
      value: '',
      placeholder: 'Nhập tên ram',
    },
    {
      id: 'battery-field',
      label: 'Dung lượng pin laptop',
      name: 'battery',
      type: 'text',
      value: '',
      placeholder: 'Nhập dung lượng pin laptop',
    },
    {
      id: 'monitor-field',
      label: 'Tên màn hình',
      name: 'monitor',
      type: 'text',
      value: '',
      placeholder: 'Nhập tên màn hình',
    },
    {
      id: 'disk-field',
      label: 'Dung lượng bộ nhớ',
      name: 'disk',
      type: 'text',
      value: '',
      placeholder: 'Nhập dung lượng bộ nhớ',
    },
    {
      id: 'vga-field',
      label: 'Tên card màn hình',
      name: 'vga',
      type: 'text',
      value: '',
      placeholder: 'Nhập tên card màn hình',
    },
    {
      id: 'port-field',
      label: 'Các cổng kết nối',
      name: 'port',
      type: 'text',
      value: '',
      placeholder: 'Nhập các cổng kết nối',
    },
    {
      id: 'audiot-field',
      label: 'Loại audio',
      name: 'audio',
      type: 'text',
      value: '',
      placeholder: 'Nhập loại audio',
    },
    {
      id: 'keyboard-field',
      label: 'Loại bàn phím',
      name: 'keyboard',
      type: 'text',
      value: '',
      placeholder: 'Nhập loại bàn phím',
    },
    {
      id: 'os-field',
      label: 'Hệ điều hành',
      name: 'os',
      type: 'text',
      value: '',
      placeholder: 'Nhập hệ điều hành',
    },
    {
      id: 'color-field',
      label: 'Màu laptop',
      name: 'color',
      type: 'text',
      value: '',
      placeholder: 'Nhập màu laptop',
    },
    {
      id: 'bluetooth-field',
      label: 'Loại bluetooth',
      name: 'bluetooth',
      type: 'text',
      value: '',
      placeholder: 'Nhập loại bluetooth',
    },
    {
      id: 'webcam-field',
      label: 'Webcam',
      name: 'webcam',
      type: 'text',
      value: '',
      placeholder: 'Nhập Webcam',
    },
    {
      id: 'weight-field',
      label: 'Cân nặng laptop',
      name: 'weight',
      type: 'text',
      value: '',
      placeholder: 'Nhập cân nặng laptop',
    },
    {
      id: 'size-field',
      label: 'Kích thước laptop',
      name: 'size',
      type: 'text',
      value: '',
      placeholder: 'Nhập kích thước laptop',
    },
  ];

  const initialValues = {
    title: 'quan',
    description: 'nguyen',
    category: '1',
    price: '123123',
    discount: '12',
    total: '123',
    cpu: '-',
    ram: '-',
    battery: '-',
    monitor: '-',
    disk: '-',
    vga: '-',
    port: '-',
    audio: '-',
    keyboard: '-',
    os: '-',
    color: '-',
    bluetooth: '-',
    webcam: '-',
    weight: '-',
    size: '-',
    imageUrl: '-',
    type: '-',
  };

  return (
    <FormDrawer
      sx={{
        width: '50%',
      }}
      title={'Thêm sản phẩm'}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      btnText={'Thêm sản phẩm'}
      onChange={(e) => {
        initialValues[e.target.name] = e.target.value;
        console.log(initialValues);
      }}
      onSubmit={() => {
        try {
          initialValues.price = parseFloat(initialValues.price);
          initialValues.discount = parseInt(initialValues.discount);
          initialValues.total = parseInt(initialValues.total);
        } catch (e) {
          return;
        }
        console.log(initialValues);
        handleCreate(initialValues);
      }}
    >
      <label
        style={{
          gridColumn: 'span 2 / span 2',
        }}
      >
        Ảnh sản phẩm
      </label>
      <Box gridColumn='span 4 / span 4'>
        <Box textAlign={'center'} width={'100%'}>
          <Box
            p={4}
            component={'div'}
            border={'1px dashed #d1d5db'}
            borderRadius={2}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {}}
          >
            <input
              accept='image/*,.jpeg,.jpg,.png,.webp'
              multiple=''
              type='file'
              tabIndex='-1'
              style={{
                display: 'none',
              }}
            />
            <span>
              <svg
                style={{
                  color: '#10b981',
                  fontSize: '1.875rem',
                  height: '1em',
                  width: '1em',
                  stroke: 'currentColor',
                  fill: 'none',
                  strokeWidth: '2',
                  viewBox: '0 0 24 24',
                  strokeLinecap: 'round',
                  strokeinejoin: 'round',
                }}
              >
                <polyline points='16 16 12 12 8 16'></polyline>
                <line x1='12' y1='12' x2='12' y2='21'></line>
                <path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'></path>
                <polyline points='16 16 12 12 8 16'></polyline>
              </svg>
            </span>
            <Typography m={0}>Ném ảnh vào đây</Typography>
            <Typography color={'#aaa'} fontSize={13}>
              (Chỉ *.jpeg, *.webp và *.png images will be accepted)
            </Typography>
            <>Images</>
          </Box>
        </Box>
      </Box>
    </FormDrawer>
  );
};

export default CreateProductDrawer;
