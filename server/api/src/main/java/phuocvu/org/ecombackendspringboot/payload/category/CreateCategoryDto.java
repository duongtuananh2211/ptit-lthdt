package phuocvu.org.ecombackendspringboot.payload.category;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateCategoryDto {
    private String title;
    private String type;
    private String des;
}
