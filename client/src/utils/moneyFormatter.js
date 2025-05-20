export const numberWithCommas = (x) => {
  if(x) return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return "";
}

export const moneyFormatter = (value) => {
  return `${numberWithCommas(value)}₫`;
}