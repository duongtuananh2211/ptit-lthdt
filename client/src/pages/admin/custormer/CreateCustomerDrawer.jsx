import FormDrawer from '../../../components/FormDrawer';

const CreateCustomerDrawer = (props) => {
  const { open, onClose, handleCreate } = props;
  const formFields = [
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

  const initialValues = {
    fullName: '',
    phoneNumber: '',
    address: '',
  };

  return (
    <FormDrawer
      sx={{
        width: '50%',
      }}
      title={'Thêm khách hàng mới'}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      onChange={(e) => {
        initialValues[e.target.name] = e.target.value;
        console.log(initialValues);
      }}
      btnText={'Thêm khách hàng mới'}
      onSubmit={() => {
        handleCreate(initialValues);
      }}
    />
  );
};

export default CreateCustomerDrawer;
