package phuocvu.org.ecombackendspringboot.payload.voucher;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class CreateVoucherDto {
    private String code;
    private String title;
    private String type;
    private float discount;
    private int total;
    private boolean status;
    private String startDate;
    private String endDate;
}
