package phuocvu.org.ecombackendspringboot.payload.collection;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CollectionDto {
    private Long id;
    private String title;
    private String des;
    private String type;
}
