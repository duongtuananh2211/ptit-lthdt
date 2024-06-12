package phuocvu.org.ecombackendspringboot.payload.collection;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.product.ProductInCollectionDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseCollectionItemDto {
    private Long id;
    private Long collectionId;
    private Long productId;
    private ProductInCollectionDto product;
}
