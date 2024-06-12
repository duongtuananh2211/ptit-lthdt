import { Grid, Typography, Button } from '@mui/material';

const categories = [
  {
    id: 'ct-macbook',
    title: 'Macbook',
    description:
      'MacBook kết hợp hiệu suất mạnh mẽ của chip Apple Silicon và thiết kế vỏ nhôm mỏng nhẹ, phản ánh sự sang trọng và đẳng cấp. Màn hình Retina sắc nét và bàn phím Magic Keyboard tạo ra trải nghiệm sử dụng đỉnh cao.',
    image:
      'https://d2bschjhk4kxui.cloudfront.net/assets/images/product/654966667dd6a1699309158.webp',
    path: '/products?category=macbook',
  },
  {
    id: 'ct-asus-1',
    title: 'Asus',
    description:
      'Laptop Asus là một dòng máy tính xách tay đa dạng với thiết kế đẹp và hiệu suất ổn định. Với nhiều mẫu mã từ cơ bản đến cao cấp, Asus đáp ứng nhu cầu công việc và giải trí của người dùng một cách linh hoạt và đa dạng.',
    image:
      'https://cdn.tgdd.vn/Products/Images/44/304260/asus-zenbook-14-oled-ux3402va-i5-km085w-thumb-1-600x600.jpg',
    path: '/products?category=asus',
  },
  {
    id: 'ct-asus-2',
    title: 'MSI',
    description:
      'Laptop MSI là một dòng máy tính xách tay đa dạng với thiết kế đẹp và hiệu suất ổn định. Với nhiều mẫu mã từ cơ bản đến cao cấp, MSI đáp ứng nhu cầu công việc và giải trí của người dùng một cách linh hoạt và đa dạng.',
    image:
      'https://cdn.tgdd.vn/Products/Images/44/316940/msi-gaming-gf63-thin-12ucx-i5-873vn-glr-thumb-600x600.jpg',
    path: '/products?category=msi',
  },
];

const FeaturedCategory = () => {
  return (
    <Grid container bgcolor={'#fff'} borderRadius={1}>
      {categories.map((item) => (
        <Grid key={item.id} item xs={4} p={4} textAlign='center'>
          <div
            style={{
              width: 350,
              height: 300,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              overflow: 'hidden',
            }}
          >
            <img
              loading='lazy'
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <Typography variant='h6'>{item.title.toUpperCase()}</Typography>
          <Typography mb={1} mt={1} height={120}>
            {item.description}
          </Typography>
          <Button variant='contained' color='error' href={item.path}>
            Xem sản phẩm
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedCategory;
