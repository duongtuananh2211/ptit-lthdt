package phuocvu.org.ecombackendspringboot.payload.collection;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateCollectionDto {
    private String title;
    private String des;
    private String type;
    private List<ProductInCollectionItem> products;

    public List<ProductInCollectionItem> getProducts() {
        return products;
    }
}
