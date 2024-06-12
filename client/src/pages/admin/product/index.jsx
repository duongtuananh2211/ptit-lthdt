import { Stack, Typography } from '@mui/material';
import ProductTable from './ProductTable';
import CreateProductDrawer from './CreateProductDrawer';
import EditProductDrawer from './EditProductDrawer';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [edited, setEdited] = useState(null);

  const [products, setProducts] = useState([]);

  const fetchData = (filters) => {
    if (filters) {
      console.log('Filtered: ', filters);
      return;
    }
    fetch('http://localhost:8080/api/product')
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = (product) => {
    console.log(product);
    fetch('http://localhost:8080/api/product', {
      body: JSON.stringify(product),
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleEdit = (product) => {
    console.log(product);
    fetch(`http://localhost:8080/api/product/${product.id}`, {
      body: JSON.stringify(product),
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDelete = async (productIds) => {
    console.log(productIds);
    for (let i = 0; i < productIds.length; i++) {
      await fetch(`http://localhost:8080/api/product/${productIds[i]}`, {
        method: 'DELETE',
      });
    }
    fetchData();
  };

  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Sản phẩm
      </Typography>
      <ProductTable
        data={products ?? []}
        onOpenNew={() => {
          setOpenNew(true);
        }}
        onOpenEdit={(product) => {
          setOpenEdit(true);
          setEdited(product);
        }}
        handleDelete={handleDelete}
        handleFilter={(filters) => {
          fetchData(filters);
        }}
      />

      {openNew && (
        <CreateProductDrawer
          open={openNew}
          onClose={() => {
            setOpenNew(false);
          }}
          handleCreate={handleCreate}
        />
      )}

      {openEdit && (
        <EditProductDrawer
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          product={edited}
          handleEdit={handleEdit}
        />
      )}
    </Stack>
  );
};

export default ProductPage;
