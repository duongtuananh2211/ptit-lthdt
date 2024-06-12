package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "voucher")
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "discount", nullable = false)
    private float discount;

    @Column(name = "remain", nullable = false)
    private int remain;

    @Column(name = "total", nullable = false)
    private int total;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "startDate", nullable = false)
    private String startDate;

    @Column(name = "endDate", nullable = false)
    private String endDate;

    public void setRemain(int remain) {
        this.remain = remain;
    }

    public int getTotal() {
        return total;
    }
}
