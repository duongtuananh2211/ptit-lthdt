import Carousel from 'react-material-ui-carousel';

const ProductImage = (props) => {
  const { images } = props;
  return (
    <Carousel
      sx={{
        textAlign: 'center',
      }}
      keyBoardControl
      autoPlay
      transitionDuration={1000}
    >
      {images.map((item, index) => (
        <img
          key={index + 'img'}
          style={{
            borderRadius: '5px',
            objectFit: 'cover',
          }}
          src={item}
          alt=''
        />
      ))}
    </Carousel>
  );
};

export default ProductImage;
