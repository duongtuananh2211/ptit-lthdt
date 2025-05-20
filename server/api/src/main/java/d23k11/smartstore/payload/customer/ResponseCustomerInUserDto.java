package d23k11.smartstore.payload.customer;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseCustomerInUserDto {
    private Long id;
    private String address;
    private String fullName;
    private String phoneNumber;
}
