package d23k11.smartstore.service.impl;

import org.springframework.stereotype.Service;
import d23k11.smartstore.exception.ResourceNotFoundException;
import d23k11.smartstore.entity.Cart;
import d23k11.smartstore.repository.cart.CartRepository;
import d23k11.smartstore.service.CartService;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    CartRepository cartRepository;

    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public List<Cart> getAllCart() {
        return cartRepository.findAll();
    }

    @Override
    public Cart getCartById(Long id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("cart", "id", id));
    }

    @Override
    public Cart getCartByUserId(Long userId) {
        return cartRepository.findCartByUserId(userId);
    }
}
