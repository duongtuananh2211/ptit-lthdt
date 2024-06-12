package phuocvu.org.ecombackendspringboot.payload.product;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductInOrderItemDto {
    private Long id;
    private String title;
    private float price;
}
