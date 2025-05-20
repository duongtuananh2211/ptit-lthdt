package d23k11.smartstore.payload.category;

import lombok.*;
import d23k11.smartstore.payload.product.ProductInCollectionDto;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseCategoryDto {
    private  Long id;
    private String title;
    private String type;
    private String des;

    private List<ProductInCollectionDto> products;
}
