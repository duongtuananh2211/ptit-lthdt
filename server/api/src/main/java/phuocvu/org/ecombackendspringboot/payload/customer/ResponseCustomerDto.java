package phuocvu.org.ecombackendspringboot.payload.customer;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.user.ResponseUserDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseCustomerDto {
    private Long id;
    private String address;
    private String fullName;
    private String phoneNumber;
    private ResponseUserDto user;

    @Override
    public String toString() {
        return "CustomerDto{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", fullName='" + fullName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", user=" + user +
                '}';
    }
}
