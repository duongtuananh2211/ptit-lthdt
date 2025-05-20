package d23k11.smartstore.payload;

import lombok.*;
import d23k11.smartstore.entity.Product;
import d23k11.smartstore.entity.Cart;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemDto {
    private int quantity;
    private Product product;
    private Cart cart;
}
