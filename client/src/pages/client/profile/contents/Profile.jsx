import { Button, InputLabel, Stack, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';
import RadioGroup from '../../../../components/input/RadioGroup';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const Profile = (props) => {
  const { data } = props;

  const forms = [
    {
      id: 'fullName',
      name: 'fullName',
      title: 'Họ tên',
      disabled: false,
      type: 'text',
    },
    {
      id: 'email',
      name: 'email',
      title: 'Email',
      disabled: true,
      type: 'text',
    },
    {
      id: 'phone_number',
      name: 'phoneNumber',
      title: 'Số điện thoại',
      disabled: false,
      type: 'text',
    },
    {
      id: 'address',
      name: 'address',
      title: 'Địa chỉ',
      disabled: false,
      type: 'text',
    },
    {
      id: 'submit',
      name: 'submit',
      title: 'Lưu thay đổi',
      type: 'button',
    },
  ];

  return (
    <Stack p={1}>
      <Typography variant='h5' p={2}>
        Thông tin tài khoản
      </Typography>
      <Stack pl={'15%'} pr={'15%'} spacing={2.5} pb={1.5} pt={1.5}>
        {forms.map((item) => {
          if (item.type === 'text') {
            return (
              <Input
                {...item}
                key={item.id + 'input'}
                onChange={() => {}}
                value={data[item.name]}
                sx={{}}
              />
            );
          } else if (item.type === 'checkbox') {
            return (
              <RadioGroup
                {...item}
                key={item.id + 'radio'}
                onChange={() => {}}
                value={data[item.name]}
              />
            );
          } else if (item.type === 'date') {
            return (
              <div
                key={item.id}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <InputLabel
                  htmlFor={item.name}
                  sx={{ mr: 2, fontSize: 16, color: 'inherit' }}
                >
                  {item.title}:
                </InputLabel>
                <DatePicker
                  id={item.id}
                  name={item.name}
                  label={item.title}
                  defaultValue={dayjs(data[item.name])}
                />
              </div>
            );
          } else {
            return (
              <Button key={item.id} variant='contained' href='/'>
                {item.title}
              </Button>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

export default Profile;
