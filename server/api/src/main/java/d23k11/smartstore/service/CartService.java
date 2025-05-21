package d23k11.smartstore.service;

import d23k11.smartstore.entity.Cart;

import java.util.List;

public interface CartService {
    List<Cart> getAllCart();

    Cart getCartById(Long id);

    Cart getCartByUserId(Long userId);
}
