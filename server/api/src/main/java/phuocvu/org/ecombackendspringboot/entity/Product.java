package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "title", nullable = false, columnDefinition = "TEXT")
    private String title;

    @Column(name = "discount", nullable = false)
    private float discount;

    @Column(name = "total", nullable = false)
    private int total;

    @Column(name = "remain", nullable = false)
    private int remain;

    @Column(name = "price", nullable = false)
    private float price;

    @Column(name = "cpu", nullable = false, columnDefinition = "TEXT")
    private String cpu;

    @Column(name = "ram", nullable = false, columnDefinition = "TEXT")
    private String ram;

    @Column(name = "pin", nullable = false, columnDefinition = "TEXT")
    private String pin;

    @Column(name = "imageUrls", nullable = false, columnDefinition = "TEXT")
    private String imageUrls;

    @Column(name = "monitor", nullable = false, columnDefinition = "TEXT")
    private String monitor;

    @Column(name = "disk", nullable = false, columnDefinition = "TEXT")
    private String disk;

    @Column(name = "vga", nullable = false, columnDefinition = "TEXT")
    private String vga;

    @Column(name = "port", nullable = false, columnDefinition = "TEXT")
    private String port;

    @Column(name = "audio", nullable = false, columnDefinition = "TEXT")
    private String audio;

    @Column(name = "keyboard", nullable = false, columnDefinition = "TEXT")
    private String keyboard;

    @Column(name = "os", nullable = false, columnDefinition = "TEXT")
    private String os;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "weight", nullable = false)
    private String weight;

    @Column(name = "bluetooth", nullable = false, columnDefinition = "TEXT")
    private String bluetooth;

    @Column(name = "webcam", nullable = false, columnDefinition = "TEXT")
    private String webcam;

    @Column(name = "size", nullable = false, columnDefinition = "TEXT")
    private String size;

    @Column(name = "lan", nullable = false, columnDefinition = "TEXT")
    private String lan;

    @Column(name = "wifi", nullable = false, columnDefinition = "TEXT")
    private String wifi;

    @Column(name = "created")
    @CreationTimestamp
    private Date created;

    // quan he toi category
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    public float getPrice() {
        return price;
    }
}
