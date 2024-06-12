package phuocvu.org.ecombackendspringboot.service.impl;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Cart;
import phuocvu.org.ecombackendspringboot.repository.cart.CartRepository;
import phuocvu.org.ecombackendspringboot.service.CartService;

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
