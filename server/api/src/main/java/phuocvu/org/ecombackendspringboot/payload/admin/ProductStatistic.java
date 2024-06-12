package phuocvu.org.ecombackendspringboot.payload.admin;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductStatistic {
    private Long id;
    private String title;
    private Long total;

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "ProductStatistic{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", total=" + total +
                '}';
    }
}
