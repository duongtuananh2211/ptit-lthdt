package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "\"order\"")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "payment", nullable = false)
    private String payment;

    @Column(name = "amount", nullable = false)
    private float amount;

    @Column(name = "created")
    @CreationTimestamp
    private Date created;

    // quan he toi OrderItem
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<OrderItem> orderItems = new HashSet<>();

    // quan hệ toi CustomerInfo
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public Long getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public float getAmount() {
        return amount;
    }

    public Set<OrderItem> getOrderItems() {
        return orderItems;
    }

    public Customer getCustomer() {
        return customer;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", payment='" + payment + '\'' +
                ", amount=" + amount +
                ", created=" + created +
                ", orderItems=" + orderItems +
                ", customer=" + customer +
                '}';
    }
}
