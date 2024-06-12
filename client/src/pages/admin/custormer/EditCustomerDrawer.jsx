import FormDrawer from '../../../components/FormDrawer';

const EditCustomerDrawer = (props) => {
  const { open, customer, onClose, handleEdit } = props;

  const formFields = [
    {
      id: 'id-customer',
      label: 'Mã',
      name: 'id',
      type: 'text',
      disabled: true,
      placeholder: 'Mã khách hàng',
    },
    {
      id: 'name-customer',
      label: 'Tên khách hàng',
      name: 'fullName',
      type: 'text',
      placeholder: 'Nhập tên khách hàng',
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

  const values = {
    id: customer.id,
    fullName: customer.fullName,
    phoneNumber: customer.phoneNumber,
    address: customer.address,
  };

  return (
    <FormDrawer
      sx={{
        width: '50%',
      }}
      title={'Sửa thông tin khách hàng'}
      formFields={formFields}
      initialValues={values}
      open={open}
      onClose={onClose}
      onChange={(e) => {
        values[e.target.name] = e.target.value;
      }}
      btnText={'Sửa thông tin'}
      onSubmit={() => {
        handleEdit(values);
      }}
    />
  );
};

export default EditCustomerDrawer;
