// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    fontSize: '2.375rem',
    lineHeight: 1.21,
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.875rem',
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.7rem',
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: 1.4,
    color: '#5e5d72',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.2rem',
    lineHeight: 1.5,
    color: '#5e5d72',
  },
  h6: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#5e5d72',
  },
  caption: {
    fontWeight: 500,
    fontSize: '0.75rem',
  },
  body1: {
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: '0.9rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: 'capitalize',
  },
});

export default Typography;
