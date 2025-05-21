package d23k11.smartstore.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import d23k11.smartstore.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
