package phuocvu.org.ecombackendspringboot.payload.order;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminCreateOrderDto {
    private String status;
    private String payment;
    private String fullName;
    private String phoneNumber;
    private String address;
    private List<CreateOrderItemDto> productItems;

    @Override
    public String toString() {
        return "CreateOrderDto{" +
                "status='" + status + '\'' +
                ", payment='" + payment + '\'' +
                ", fullName='" + fullName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", orderItems=" + productItems +
                '}';
    }

    public String getStatus() {
        return status;
    }

    public String getPayment() {
        return payment;
    }

    public String getFullName() {
        return fullName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public List<CreateOrderItemDto> getProductItems() {
        return productItems;
    }
}
