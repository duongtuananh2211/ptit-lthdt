package d23k11.smartstore.payload.order;

import lombok.*;
import d23k11.smartstore.payload.product.ResponseProductDto;

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
