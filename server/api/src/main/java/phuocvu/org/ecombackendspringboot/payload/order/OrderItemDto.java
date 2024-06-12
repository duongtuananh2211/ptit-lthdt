package phuocvu.org.ecombackendspringboot.payload.order;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.product.ProductInOrderItemDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItemDto {
    private Long id;
    private Long productId;
    private Long orderId;
    private int quantity;
    private ProductInOrderItemDto product;

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "OrderItemDto{" +
                "productId=" + productId +
                ", orderId=" + orderId +
                ", quantity=" + quantity +
                '}';
    }
}
