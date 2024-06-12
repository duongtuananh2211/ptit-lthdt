package phuocvu.org.ecombackendspringboot.payload.product;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductInCollectionDto {
    private Long id;
    private String title;
    private float discount;
    private float price;
    private String imageUrls;
    private int remain;

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDiscount(float discount) {
        this.discount = discount;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setImageUrls(String imageUrls) {
        this.imageUrls = imageUrls;
    }

    public void setRemain(int remain) {
        this.remain = remain;
    }
}
