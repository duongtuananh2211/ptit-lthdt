package phuocvu.org.ecombackendspringboot.payload.order;

import lombok.*;

import java.util.List;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClientCreateOrderDto {
    private String status;
    private String payment;
    private String fullName;
    private String phoneNumber;
    private String address;

    private List<CreateOrderItemDto> productItems;
}
