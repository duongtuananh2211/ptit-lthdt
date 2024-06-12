package phuocvu.org.ecombackendspringboot.payload.admin;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderStatistic {
    private String title;
    private long total;
    private double amount;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
