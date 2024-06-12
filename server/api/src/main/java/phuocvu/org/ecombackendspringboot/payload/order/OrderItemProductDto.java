package phuocvu.org.ecombackendspringboot.payload.order;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.product.ResponseProductDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItemProductDto {
    private Long id;
    private Long productId;
    private Long orderId;
    private int quantity;
    private ResponseProductDto product;
}
