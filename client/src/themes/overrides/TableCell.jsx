// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function TableCell(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
          padding: 12,
          borderColor: theme.palette.divider,
          whiteSpace: 'nowrap',
        },
        head: {
          fontWeight: 600,
          backgroundColor: theme.palette.divider,
        },
      },
    }
  };
}
