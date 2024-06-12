package phuocvu.org.ecombackendspringboot.payload.product;

import lombok.*;
import phuocvu.org.ecombackendspringboot.payload.category.CategoryInProductDto;

import java.util.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseProductDto {
    private Long id;
    private long categoryId;
    private String type;
    private String title;
    private float discount;
    private int total;
    private int remain;
    private float price;
    private String cpu;
    private String ram;
    private String pin;
    private String imageUrls;
    private String monitor;
    private String disk;
    private String vga;
    private String port;
    private String audio;
    private String keyboard;
    private String os;
    private String color;
    private String weight;
    private String bluetooth;
    private String webcam;
    private String size;
    private String lan;
    private String wifi;
    private Date created;
    private CategoryInProductDto category;
}
