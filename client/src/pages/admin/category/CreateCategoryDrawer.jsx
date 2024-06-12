import FormDrawer from '../../../components/FormDrawer';

const CreateCategoryDrawer = (props) => {
  const { open, onClose, handleCreate } = props;
  const formFields = [
    {
      id: 'name-category',
      label: 'Tên loại',
      name: 'title',
      type: 'text',
      placeholder: 'Nhập tên loại mặt hàng',
    },
    {
      id: 'type-category',
      label: 'Kiểu',
      name: 'type',
      type: 'text',
      placeholder: 'Nhập kiểu',
    },
    {
      id: 'des-category',
      label: 'Mô tả',
      name: 'des',
      type: 'text',
      placeholder: 'Nhập mô tả mặt hàng',
    },
  ];

  const initialValues = {
    title: '',
    type: '',
    des: '',
  };

  return (
    <FormDrawer
      sx={{
        width: '50%',
      }}
      title={'Thêm loại mặt hàng'}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      onChange={(e) => {
        initialValues[e.target.name] = e.target.value;
        console.log(initialValues);
      }}
      btnText={'Tạo loại sản phẩm'}
      onSubmit={() => {
        handleCreate(initialValues);
      }}
    />
  );
};

export default CreateCategoryDrawer;
