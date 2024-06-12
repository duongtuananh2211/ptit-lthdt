package phuocvu.org.ecombackendspringboot.payload;

import lombok.*;
import phuocvu.org.ecombackendspringboot.entity.Product;
import phuocvu.org.ecombackendspringboot.entity.Cart;

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
