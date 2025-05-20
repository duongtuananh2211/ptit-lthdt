package d23k11.smartstore.payload.customer;

import lombok.*;
import d23k11.smartstore.payload.user.ResponseUserDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateCustomerDto {
    private String address;
    private String fullName;
    private String phoneNumber;
}
