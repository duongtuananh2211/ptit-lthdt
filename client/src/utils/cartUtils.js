import { enqueueSnackbar } from 'notistack';

export const addCart = (product, quantity) => {
  let cart = localStorage.getItem('cart');
  if (cart === null) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }
  const existProduct = cart.findIndex((v) => v['id'] === product['id']);
  if (existProduct !== -1) {
    cart[existProduct]['quantity'] += 1;
  } else {
    cart.push({
      id: product['id'],
      quantity: quantity,
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  enqueueSnackbar('Đã thêm sản phẩm vào giỏ hàng.', { variant: 'success' });
};

export const updateCart = (id, quantity) => {
  let cart = localStorage.getItem('cart');
  if (cart === null) {
    window.location.reload();
    return;
  }
  cart = JSON.parse(cart);
  let indexProduct = cart.findIndex((v) => v['id'] === id);
  if (indexProduct !== -1) {
    cart[indexProduct]['quantity'] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  enqueueSnackbar('Đã cập nhật lại giỏ hàng.', { variant: 'success' });
};

export const deleteCart = (id, reload) => {
  let cart = localStorage.getItem('cart');
  if (cart === null) {
    window.location.reload();
    return;
  }
  cart = JSON.parse(cart);
  let indexProduct = cart.findIndex((v) => v['id'] === id);
  cart.splice(indexProduct, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  enqueueSnackbar('Đã xoá sản phẩm trong giỏ hàng.', { variant: 'success' });
};
