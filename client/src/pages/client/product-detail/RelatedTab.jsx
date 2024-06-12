import { Box, Link, Stack, Typography } from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const RelatedTab = (props) => {
  const { title, data, type } = props;

  return (
    <Box bgcolor={'#fff'} borderRadius={1} mb={2.5}>
      <Typography p={2} variant='h5'>
        {title}
      </Typography>
      <Stack p={2.5} pl={2} pt={0} spacing={1}>
        {data.map((item, index) => (
          <Box
            key={item.id + 'ralated-product'}
            display='flex'
            justifyContent={'space-between'}
            p={1}
            pb={0}
          >
            <Link
              width={type === 'product' ? '30%' : '20%'}
              href={`/products/${item.title
                .toLowerCase()
                .replaceAll(' ', '-')}-prod${item.id}`}
            >
              <img src={item.image} alt={item.title} />
            </Link>
            <Stack width={type === 'product' ? '67%' : '75%'}>
              <Typography
                component={'a'}
                href={`/products/${item.title
                  .toLowerCase()
                  .replaceAll(' ', '-')}-prod${item.id}`}
                fontWeight={600}
              >
                {item.title}
              </Typography>
              {type === 'product' && (
                <>
                  <Typography
                    fontSize={13}
                    color={'#6D6E72'}
                    sx={{
                      textDecorationLine: 'line-through',
                    }}
                  >
                    {moneyFormatter(item.oldPrice)}
                  </Typography>
                  <Typography
                    color='#E30019'
                    fontSize={16}
                    fontWeight={600}
                    display={'flex'}
                    alignItems={'center'}
                  >
                    {moneyFormatter(item.price)}
                    <span
                      style={{
                        fontSize: 12,
                        padding: '3px 8px',
                        color: '#E30019',
                        border: '1px solid #E30019',
                        borderRadius: 4,
                        marginLeft: 10,
                      }}
                    >
                      -{item.percentDiscount}%
                    </span>
                  </Typography>
                </>
              )}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default RelatedTab;
