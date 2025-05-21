package d23k11.smartstore.payload.user;

import lombok.*;
import d23k11.smartstore.payload.customer.ResponseCustomerInUserDto;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ResponseUserDto {
    private Long id;
    private String email;
    private String password;
    private String role;
    private ResponseCustomerInUserDto customer;

    public void setCustomer(ResponseCustomerInUserDto customer) {
        this.customer = customer;
    }
}
