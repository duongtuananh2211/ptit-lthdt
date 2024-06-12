import FormDrawer from '../../../components/FormDrawer';

const CreateVoucherDrawer = (props) => {
  const { open, onClose, handleCreate } = props;

  const formFields = [
    {
      id: 'id-coupon',
      name: 'code',
      label: 'Mã',
      type: 'text',
      placeholder: 'Mã giảm giá',
    },
    {
      id: 'name-coupon',
      label: 'Tên mã giảm giá',
      name: 'title',
      type: 'text',
      placeholder: 'Nhập tên mã giảm giá',
    },
    {
      id: 'type-field',
      label: 'Giảm giá theo',
      name: 'type',
      type: 'select',
      options: [
        {
          id: 'percent',
          title: 'Phần trăm giá',
        },
        {
          id: 'fixed',
          title: 'Giá cố định',
        },
      ],
      placeholder: 'Nhập loại laptop',
    },
    {
      id: 'discount-amount-coupon',
      label: 'Số tiền chiết khấu',
      name: 'discount',
      type: 'number',
      placeholder: 'Nhập số tiền chiết khấu',
    },
    {
      id: 'total-coupon',
      label: 'Số lượng voucher',
      name: 'discount',
      type: 'number',
      placeholder: 'Nhập số lượng voucher',
    },
    {
      id: 'statuss-coupon',
      label: 'Trạng thái mở',
      name: 'status',
      type: 'checkbox',
      placeholder: 'Nhập Trạng thái mở',
    },
    {
      id: 'start-at-coupon',
      label: 'Ngày bắt đầu',
      name: 'startDate',
      type: 'date',
      placeholder: 'Ngày bắt đầu',
    },
    {
      id: 'end-at-coupon',
      label: 'Ngày kết thúc',
      name: 'endDate',
      type: 'date',
      placeholder: 'Ngày kết thúc',
    },
  ];

  const initialValues = {
    code: 'quan',
    title: 'quan',
    type: '',
    discount: 10000,
    total: 10,
    status: false,
    startDate: '',
    endDate: '',
  };

  return (
    <FormDrawer
      title={'Thêm mã giảm giá'}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      btnText={'Thêm mã giảm giá'}
      sx={{
        width: '50%',
      }}
      onChange={(e) => {
        if (e.target.name === 'status') {
          initialValues[e.target.name] = e.target.checked;
        } else {
          initialValues[e.target.name] = e.target.value;
        }
        console.log(initialValues);
      }}
      onSubmit={() => {
        handleCreate(initialValues);
      }}
    />
  );
};

export default CreateVoucherDrawer;
