package phuocvu.org.ecombackendspringboot.payload.order;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDto {
    private String status;
    private String payment;
    private Long customerId;
    private float amount;
    private String created;
    public void setStatus(String status) {
        this.status = status;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

}
