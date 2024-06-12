package phuocvu.org.ecombackendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import phuocvu.org.ecombackendspringboot.entity.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(Long categoryId);
    @Query("""
            SELECT p.id, p.title, SUM(oi.quantity) as total
            FROM Product p
            JOIN OrderItem oi ON p.id = oi.product.id
            JOIN Order o ON oi.order.id = o.id
            GROUP BY p.id, p.title
            ORDER BY total DESC
            LIMIT 12""")
    List<Object[]> findBestSellingProducts();

    @Query("""
            SELECT p.id, p.title, p.price, p.discount, p.imageUrls
            FROM Product p
            JOIN OrderItem oi ON p.id = oi.product.id
            JOIN Order o ON oi.order.id = o.id
            GROUP BY p.id, p.title, p.price, p.discount, p.imageUrls
            ORDER BY total DESC
            LIMIT :l""")
    List<Object[]> findBestSellingProductsClient(@Param("l") int l);

    @Query("""
            SELECT p
            FROM Product p
            ORDER BY p.created DESC
            LIMIT :l""")
    List<Product> findNewProductsClient(@Param("l") int l);
}
