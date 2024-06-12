import { RouterProvider } from 'react-router-dom';
import Routes from './routes';
import ThemeCustomization from './themes';
import { GlobalStyles } from '@mui/material';
import { SnackbarProvider } from 'notistack';

function App() {
  const globalStyles = {
    img: {
      maxWidth: '100%',
    },
    a: {
      textDecorationLine: 'none',
      color: 'inherit',
    },
  };

  return (
    <ThemeCustomization>
      <GlobalStyles styles={globalStyles} />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <RouterProvider router={Routes()} />
      </SnackbarProvider>
    </ThemeCustomization>
  );
}

export default App;
