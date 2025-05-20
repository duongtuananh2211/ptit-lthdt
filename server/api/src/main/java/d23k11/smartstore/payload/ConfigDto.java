package d23k11.smartstore.payload;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ConfigDto {
    private Long id;
    private Long visitors;
    private int year;
}
