package phuocvu.org.ecombackendspringboot.payload.collection;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductInCollectionItem {
    private Long productId;

    public Long getProductId() {
        return productId;
    }
}
