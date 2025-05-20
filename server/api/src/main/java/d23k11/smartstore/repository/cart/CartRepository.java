package d23k11.smartstore.repository.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import d23k11.smartstore.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findCartByUserId(Long userId);
}
