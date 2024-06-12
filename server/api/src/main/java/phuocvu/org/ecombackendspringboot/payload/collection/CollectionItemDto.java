package phuocvu.org.ecombackendspringboot.payload.collection;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CollectionItemDto {
    private Long id;
    private Long collectionId;
    private Long productId;

    public CollectionItemDto(Long collectionId, Long productId) {
        this.collectionId = collectionId;
        this.productId = productId;
    }
}
