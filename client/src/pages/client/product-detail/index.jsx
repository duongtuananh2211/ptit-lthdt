/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Stack } from '@mui/material';
import ProductSummary from './ProductSummary';
import ProductImage from './ProductImage';
import TechnicalDetail from './TechnicalDetail';
import RelatedTab from './RelatedTab';
import ReviewedProduct from './ReviewedProduct';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const [reviewedProduct] = useState([]);
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const fetchData = (id) => {
    let spl = id.split('-');
    if (!spl[spl.length - 1].startsWith('prod')) {
      navigate('/not-found');
    }
    let rId = spl[spl.length - 1].split('prod')[1];
    fetch(`http://localhost:8080/api/product/${rId}`)
      .then((data) => data.json())
      .then((data) => {
        if ('error' in data && 'status' in data) {
          if (data['status'] === 404) {
            navigate('/not-found');
          }
        }
        setProduct(data);
        let viewed = localStorage.getItem('viewed_products');
        if (viewed !== null) {
          viewed = JSON.parse(viewed);
          if (viewed.findIndex((v) => v['id'] === data['id']) === -1) {
            viewed.push({
              id: data['id'],
              title: data['title'],
              price: data['price'],
              discount: data['discount'],
              image: data['imageUrls'].split(';')[0],
            });
          }
        } else {
          viewed = [
            {
              id: data['id'],
              title: data['title'],
              price: data['price'],
              discount: data['discount'],
              image: data['imageUrls'].split(';')[0],
            },
          ];
        }
        localStorage.setItem('viewed_products', JSON.stringify(viewed));
      });
  };

  const fetchDataCategory = () => {
    fetch(`http://localhost:8080/api/category/${product['category']['id']}`)
      .then((data) => data.json())
      .then((data) => {
        setCategory(data);
      });
  };

  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (product) {
      fetchDataCategory();
    }
  }, [product]);

  return (
    <Stack spacing={2.5}>
      <Grid container bgcolor={'#fff'} borderRadius={1}>
        <Grid item xs={5} p={3}>
          <ProductImage
            images={
              product ? [...new Set(product['imageUrls'].split(';'))] : []
            }
          />
        </Grid>
        <Grid item xs={7} p={3} borderLeft={'1px solid #ddd'}>
          <ProductSummary product={product} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={7.3}>
          <TechnicalDetail product={product} />
        </Grid>
        <Grid item xs={0.2}></Grid>
        <Grid item xs={4.5}>
          <RelatedTab
            title='Sản phẩm tương tự'
            data={
              category
                ? category['products'].map((item) => {
                    return {
                      id: item['id'],
                      title: item['title'],
                      oldPrice: item['discount'],
                      price: item['price'],
                      percentDiscount: Math.ceil(
                        100 * (1 - item['price'] / item['discount'])
                      ),
                      image: item['imageUrls'].split(';')[0],
                    };
                  })
                : []
            }
            type='product'
          />
        </Grid>
      </Grid>
      <ReviewedProduct product={product} reviewedProduct={reviewedProduct} />
    </Stack>
  );
};

export default ProductDetailPage;
