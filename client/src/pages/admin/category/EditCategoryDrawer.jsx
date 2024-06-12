import FormDrawer from '../../../components/FormDrawer';

const EditCategoryDrawer = (props) => {
  const { open, category, onClose, handleEdit } = props;

  const formFields = [
    {
      id: 'id-category',
      label: 'Mã',
      name: 'id',
      type: 'text',
      placeholder: 'Mã loại mặt hàng',
    },
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

  const values = {
    id: category.id,
    title: category.title,
    type: category.type,
    des: category.des,
  };

  return (
    <FormDrawer
      sx={{
        width: '50%',
      }}
      title={'Sửa loại mặt hàng'}
      formFields={formFields}
      initialValues={values}
      open={open}
      onClose={onClose}
      onChange={(e) => {
        values[e.target.name] = e.target.value;
        console.log(values);
      }}
      btnText={'Sửa thông tin'}
      onSubmit={() => {
        handleEdit(values);
      }}
    />
  );
};

export default EditCategoryDrawer;
