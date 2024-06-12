import { Grid, Link, Stack, Typography } from '@mui/material';
import { moneyFormatter } from '../../../../utils/moneyFormatter';

const Viewed = () => {
  let viewedProducts = localStorage.getItem('viewed_products');
  if (viewedProducts === null) {
    viewedProducts = [];
  } else {
    viewedProducts = JSON.parse(viewedProducts);
  }
  return (
    <Stack p={1}>
      <Typography variant='h5' p={2}>
        Sản phẩm đã xem
      </Typography>
      <Grid container>
        {viewedProducts.map((item) => (
          <Grid key={item.id} item xs={3}>
            <Stack p={2}>
              <Link
                href={`/products/${item.title
                  .toLowerCase()
                  .replaceAll(' ', '-')}-prod${item.id}`}
                sx={{
                  textDecorationLine: 'none !important',
                  color: '#000',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={184}
                  height={184}
                />
                <Typography
                  fontWeight={600}
                  fontSize={14}
                  height={42}
                  overflow={'hidden'}
                >
                  {item.title}
                </Typography>
              </Link>
              <Typography
                mt={1}
                fontSize={13}
                sx={{ textDecorationLine: 'line-through', color: '#6D6E72' }}
              >
                {moneyFormatter(item.discount)}
              </Typography>
              <Typography
                sx={{ color: '#E30019', fontSize: 16, fontWeight: 600 }}
              >
                {moneyFormatter(item.price)}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
export default Viewed;
