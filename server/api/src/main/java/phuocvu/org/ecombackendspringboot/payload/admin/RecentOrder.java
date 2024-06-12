package phuocvu.org.ecombackendspringboot.payload.admin;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecentOrder {
    private Long id;
    private String fullName;
    private int total;
    private float amount;
    private String status;

    public void setId(Long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
