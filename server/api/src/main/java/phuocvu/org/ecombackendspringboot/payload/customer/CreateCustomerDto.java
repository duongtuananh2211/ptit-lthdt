package phuocvu.org.ecombackendspringboot.payload.customer;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.user.ResponseUserDto;

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
