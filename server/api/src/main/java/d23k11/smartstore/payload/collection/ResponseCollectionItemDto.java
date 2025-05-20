package d23k11.smartstore.payload.collection;

import lombok.*;
import d23k11.smartstore.payload.product.ProductInCollectionDto;

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
