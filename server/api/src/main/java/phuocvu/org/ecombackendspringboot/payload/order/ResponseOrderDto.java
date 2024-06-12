package phuocvu.org.ecombackendspringboot.payload.order;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.customer.ResponseCustomerDto;

import java.util.Date;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseOrderDto {
    private Long id;
    private String status;
    private String payment;
    private float amount;
    private Date created;
    private List<OrderItemDto> orderItems;
    private ResponseCustomerDto customer;
}
