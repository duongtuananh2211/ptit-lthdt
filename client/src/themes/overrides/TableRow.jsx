const TableRow = () => {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: 'rgb(238, 242, 246, 0.8)',
          },
        },
      },
    },
  };
};

export default TableRow;
