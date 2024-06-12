package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.entity.Cart;

import java.util.List;

public interface CartService {
    List<Cart> getAllCart();

    Cart getCartById(Long id);

    Cart getCartByUserId(Long userId);
}
