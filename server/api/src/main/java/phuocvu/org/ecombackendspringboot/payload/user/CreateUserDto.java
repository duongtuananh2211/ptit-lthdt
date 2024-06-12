package phuocvu.org.ecombackendspringboot.payload.user;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.customer.CreateCustomerDto;

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
