package phuocvu.org.ecombackendspringboot.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
