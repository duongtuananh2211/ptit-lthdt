import PropTypes from 'prop-types';
import { Box, Grid, Stack, Typography } from '@mui/material';
import MainCard from '../../../components/MainCard';

const AnalyticalSummary = ({ color, title, count, extra }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography fontWeight={500} color='textSecondary'>
        {title}
      </Typography>
      <Grid container alignItems='center'>
        {/* {percentage && (
          <Grid item>
            <Chip
              variant='combined'
              color={color}
              icon={
                <>
                  {!isLoss && (
                    <RiseOutlined
                      style={{ fontSize: '0.75rem', color: 'inherit' }}
                    />
                  )}
                  {isLoss && (
                    <FallOutlined
                      style={{ fontSize: '0.75rem', color: 'inherit' }}
                    />
                  )}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size='small'
            />
          </Grid>
        )} */}
      </Grid>
      <Grid item>
        <Typography fontWeight={500} variant='h4' color='inherit'>
          {count}
        </Typography>
      </Grid>
    </Stack>
    <Box sx={{ pt: 1.25 }}>
      <Typography fontWeight={500} variant='caption' color='textSecondary'>
        Đã có thêm{' '}
        <Typography
          component='span'
          variant='caption'
          sx={{ color: `${color || 'primary'}.main` }}
        >
          {extra}
        </Typography>{' '}
        trong năm nay
      </Typography>
    </Box>
  </MainCard>
);

AnalyticalSummary.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

AnalyticalSummary.defaultProps = {
  color: 'primary',
};

export default AnalyticalSummary;
