package d23k11.smartstore.payload.order;

import lombok.*;
import d23k11.smartstore.payload.customer.ResponseCustomerDto;

import java.util.Date;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseClientOrderDto {
    private Long id;
    private String status;
    private String payment;
    private Long customerId;
    private float amount;
    private Date created;
    private List<OrderItemProductDto> orderItems;
    private ResponseCustomerDto customer;
}
