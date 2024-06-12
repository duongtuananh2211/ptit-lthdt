import {
  Add,
  Delete,
  FileDownloadOutlined,
  FileUploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, Toolbar } from '@mui/material';
import Input from '../input/Input';

const ToolbarAction = (props) => {
  const { filters, filterValues, onChange, handleFilter, handleResetFilter } =
    props;

  return (
    <Toolbar
      sx={{
        p: 2,
        justifyContent: 'space-between',
        borderRadius: '0.5rem',
        bgcolor: '#fff',
      }}
    >
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        p={1}
      >
        <Grid item xs={7}>
          {filters.length !== 0 && (
            <form>
              <Grid
                justifyContent={'space-between'}
                alignItems={'center'}
                p={1}
                container
              >
                {filters &&
                  filters.map((item) => {
                    return (
                      <Grid key={item.id} item xs={11.2 / (filters.length + 1)}>
                        <Input
                          id={item.id}
                          title={item.title ?? ''}
                          disabled={false}
                          type='text'
                          value={filterValues[item.name]}
                          name={item.name}
                          onChange={onChange}
                          placeholder={item.placeholder}
                          sx={{ backgroundColor: '#f3f4f6', height: 48 }}
                        />
                      </Grid>
                    );
                  })}

                <Grid
                  item
                  xs={11.2 / (filters.length + 1)}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Button
                    onClick={handleFilter}
                    variant='contained'
                    sx={{ width: '48%', height: 46, bgcolor: '#047857' }}
                    type='button'
                  >
                    Lọc
                  </Button>
                  <Button
                    onClick={handleResetFilter}
                    variant='contained'
                    sx={{ width: '48%', height: 46 }}
                    color='secondary'
                    type='reset'
                  >
                    Đặt lại
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Grid>

        <Grid item xs={4} textAlign={'right'}>
          <Button
            sx={{
              mr: 2,
              color: 'inherit',
              border: '1px solid #d1d5db',
              px: 2,
              height: 46,
              ':hover': {
                color: '#34d399',
                borderColor: '#34d399',
              },
            }}
            startIcon={<FileDownloadOutlined />}
          >
            Nhập
          </Button>

          <Button
            sx={{
              color: 'inherit',
              border: '1px solid #d1d5db',
              px: 2,
              height: 46,
              ':hover': {
                color: '#facc15',
                borderColor: '#facc15',
              },
            }}
            startIcon={<FileUploadOutlined />}
          >
            Xuất
          </Button>

          <Button
            variant='contained'
            startIcon={<Delete />}
            disabled={props.selected.length <= 0}
            onClick={props.onHandleDelete}
            sx={{
              bgcolor: '#ff0000',
              mx: 2,
              px: 2,
              height: 46,
              opacity: props.selected.length > 0 ? 1 : 0.6,
              ':hover': {
                opacity: 0.9,
                bgcolor: '#ff0000',
              },
              ':disabled': {
                bgcolor: '#ff938d',
              },
            }}
          >
            Xoá
          </Button>

          <Button
            variant='contained'
            startIcon={<Add />}
            sx={{
              px: 2,
              height: 46,
              bgcolor: '#12b981',
              ':hover': {
                bgcolor: '#079669',
              },
            }}
            onClick={props.onOpenNew}
          >
            Thêm mới
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default ToolbarAction;
