import {
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const DeliveryInformation = (props) => {
  const {
    data,
    deliveryInformation,
    deliveryInformationValue,
    setDeliveryInformationValue,
  } = props;

  return (
    <Stack pr={2} spacing={1.5}>
      <Typography variant='h5'>Địa chỉ giao hàng</Typography>
      <Stack p={3} pb={1.4} borderRadius={1} border='1px solid #ddd'>
        {deliveryInformation.map((item) => (
          <Grid key={item.id} container pb={2} alignItems='center'>
            <Grid item xs={3} container alignItems='center'>
              <Typography variant='subtitle1'>{item.title}</Typography>
            </Grid>
            <Grid item xs={9}>
              {item.type === 'select' ? (
                <FormControl sx={{ width: 300 }}>
                  <Select
                    value={deliveryInformationValue[item.name]}
                    onChange={(e) => {
                      setDeliveryInformationValue((pre) => {
                        return {
                          ...pre,
                          [e.target.name]: e.target.value,
                        };
                      });
                      item.handleChange(e.target.value);
                    }}
                    name={item.name}
                    required
                  >
                    {item.options.map((option, index) => (
                      <MenuItem key={option.id + index} value={option.id}>
                        {option.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <input
                  id={item.id}
                  name={item.name}
                  type='text'
                  placeholder={item.title}
                  value={deliveryInformationValue[item.name]}
                  onChange={(e) => {
                    setDeliveryInformationValue((pre) => {
                      return {
                        ...pre,
                        [e.target.name]: e.target.value,
                      };
                    });
                  }}
                  style={{
                    padding: 10,
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    width: '100%',
                  }}
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Stack>
      <Typography variant='h5'>Chọn hình thức giao hàng</Typography>
      <Stack p={1.5} borderRadius={1} border='1px solid #ddd' spacing={1.5}>
        <FormControlLabel
          value='-1'
          checked
          control={<Radio />}
          label='Giao hàng tiêu chuẩn'
        />
        {data.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href={`/products/${item.title
                .toLowerCase()
                .replaceAll(' ', '-')}-prod${item.id}`}
              style={{ width: 80, display: 'block' }}
            >
              <img src={item['imageUrls'].split(';')[0]} alt='' />
            </a>
            <div style={{ width: 'calc(100% - 240px)', marginLeft: 10 }}>
              <a
                href={`/products/${item.title
                  .toLowerCase()
                  .replaceAll(' ', '-')}-prod${item.id}`}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                {item.title}
              </a>
              <div>SL: {item.quantity}</div>
            </div>
            <p style={{ width: 150, fontWeight: 600, fontSize: 16 }}>
              {moneyFormatter(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default DeliveryInformation;
