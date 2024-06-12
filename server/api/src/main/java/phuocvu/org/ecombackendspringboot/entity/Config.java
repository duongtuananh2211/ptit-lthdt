package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "\"config\"")
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "visitors", nullable = false)
    private Long visitors;

    @Column(name = "year", nullable = false)
    private int year;

    public Long getVisitors() {
        return visitors;
    }

    public Long getId() {
        return id;
    }

    public int getYear() {
        return year;
    }

    public void setVisitors(Long visitors) {
        this.visitors = visitors;
    }

    @Override
    public String toString() {
        return "Config{" +
                "id=" + id +
                ", visitors=" + visitors +
                ", year=" + year +
                '}';
    }
}
