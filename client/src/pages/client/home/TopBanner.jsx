import Carousel from 'react-material-ui-carousel';

const banners = [
  {
    id: 'banner-1',
    alt: 'Banner 1',
    image:
      'https://file.hstatic.net/200000722513/file/b14_web_header_1920x420-100_61cc00d25eea4763a72582ed77ba4507_2048x2048.jpg',
  },
  {
    id: 'banner-2',
    alt: 'Banner 2',
    image:
      'https://file.hstatic.net/200000636033/file/untitled-2-71_e3e9e056ccfb4d288e73cb984c2f0f75.png',
  },
  {
    id: 'banner-3',
    alt: 'Banner 3',
    image:
      'https://file.hstatic.net/200000722513/file/khuyen_mai_nhan_ram_adcb588eb46141e399299774ee8d57a7.jpg',
  },
];

const TopBanner = () => {
  return (
    <Carousel
      sx={{ bgcolor: '#fff', borderRadius: 1 }}
      indicators={false}
      height={400}
      duration={1000}
      animation='slide'
    >
      {banners.map((item) => (
        <img
          loading='lazy'
          height={'100%'}
          width={'100%'}
          key={item.id}
          alt={item.alt}
          src={item.image}
        />
      ))}
    </Carousel>
  );
};

export default TopBanner;
