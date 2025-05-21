export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

export const moneyFormatter = (value) => {
  return `${numberWithCommas(value)}₫`;
}