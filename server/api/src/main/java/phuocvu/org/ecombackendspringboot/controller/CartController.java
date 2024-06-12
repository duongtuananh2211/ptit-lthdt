package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.entity.Cart;
import phuocvu.org.ecombackendspringboot.service.CartService;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public List<Cart> getAllCart() {
        return cartService.getAllCart();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable(name = "id") Long id) {
        Cart cart = cartService.getCartById(id);
        return ResponseEntity.ok(cart);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Cart> getCartByUserId(@PathVariable(name = "id") Long id) {
        Cart cart = cartService.getCartById(id);
        return ResponseEntity.ok(cart);
    }

}
