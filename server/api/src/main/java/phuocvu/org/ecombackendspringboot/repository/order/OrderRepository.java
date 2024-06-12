package phuocvu.org.ecombackendspringboot.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import phuocvu.org.ecombackendspringboot.entity.Order;
import phuocvu.org.ecombackendspringboot.payload.admin.OrderStatistic;
import phuocvu.org.ecombackendspringboot.payload.admin.RecentOrder;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("select count(*) from Order o where year(o.created) = :y and month(o.created) <= :m")
    int countOrderWithConditions(@Param("y") int y, @Param("m") int m);

    @Query("select count(*) from Order o where year(o.created) = :y and month(o.created) = :m")
    int countOrderWithEquals(@Param("y") int y, @Param("m") int m);

    @Query("select count(*) from Order o")
    int countOrders();

    @Query("select sum(o.amount) from Order o where year(o.created) = :y and month(o.created) <= :m")
    Optional<Double> sumRevenuesWithConditions(@Param("y") int y, @Param("m") int m);

    @Query("select sum(o.amount) from Order o where year(o.created) = :y and month(o.created) = :m")
    Optional<Double> sumRevenuesWithEquals(@Param("y") int y, @Param("m") int m);

    @Query("select sum(o.amount) from Order o")
    Optional<Double> sumRevenues();

    @Query("select sum(o.amount) from Order o where date(o.created) = date(:d)")
    Optional<Double> sumRevenuesByDate(@Param("d") String d);

    @Query("SELECT o from Order o ORDER BY o.created DESC LIMIT 10")
    List<Order> findRecentOrders();

    List<Order> findByCustomerId(Long customerId);
}
