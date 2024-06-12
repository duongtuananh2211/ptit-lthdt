package phuocvu.org.ecombackendspringboot.payload.voucher;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseVoucherDto {
    private Long id;
    private String code;
    private String title;
    private String type;
    private float discount;
    private int total;
    private int remain;
    private boolean status;
    private String startDate;
    private String endDate;
}
