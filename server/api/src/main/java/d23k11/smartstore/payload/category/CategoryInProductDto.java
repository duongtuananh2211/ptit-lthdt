package d23k11.smartstore.payload.category;
import lombok.*;

import java.util.List;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class CategoryInProductDto {
    private  Long id;
    private String title;
    private String type;
    private String des;
}


