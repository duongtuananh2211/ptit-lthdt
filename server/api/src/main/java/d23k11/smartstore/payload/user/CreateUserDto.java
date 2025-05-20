package d23k11.smartstore.payload.user;

import lombok.*;
import d23k11.smartstore.payload.customer.CreateCustomerDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateUserDto {
    private String email;
    private String password;
    private String role;
    private CreateCustomerDto customer;
}
