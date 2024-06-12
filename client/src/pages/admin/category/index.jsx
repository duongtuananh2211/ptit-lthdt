import { Stack, Typography } from '@mui/material';
import CategoryTable from './CategoryTable';
import CreateCategoryDrawer from './CreateCategoryDrawer';
import { useEffect, useState } from 'react';
import EditCategoryDrawer from './EditCategoryDrawer';

const CategoryPage = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(null);

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

  const handleCreate = (category) => {
    console.log(category);
    fetch('http://localhost:8080/api/category', {
      body: JSON.stringify(category),
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  const handleEdit = (category) => {
    console.log(category);
    fetch(`http://localhost:8080/api/category/${category.id}`, {
      body: JSON.stringify(category),
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  const handleDelete = async (categoryIds) => {
    console.log(categoryIds);
    for (let i = 0; i < categoryIds.length; i++) {
      await fetch(`http://localhost:8080/api/category/${categoryIds[i]}`, {
        method: 'DELETE',
      });
    }
    fetchData();
  };

  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Loại sản phẩm
      </Typography>
      <CategoryTable
        data={categories}
        onOpenNew={() => {
          setOpenNew(true);
        }}
        onOpenEdit={(category) => {
          setOpenEdit(true);
          setEdited(category);
        }}
        handleDelete={handleDelete}
        handleFilter={(filters) => {
          fetchData(filters);
        }}
      />

      {openNew && (
        <CreateCategoryDrawer
          open={openNew}
          onClose={() => {
            setOpenNew(false);
          }}
          handleCreate={handleCreate}
        />
      )}

      {openEdit && (
        <EditCategoryDrawer
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          category={edited}
          handleEdit={handleEdit}
        />
      )}
    </Stack>
  );
};

export default CategoryPage;
