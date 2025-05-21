export const numberWithCommas = (value) => {
  if(value) return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return "";
}

export const moneyFormatter = (value) => {
  return `${numberWithCommas(value)}₫`;
}