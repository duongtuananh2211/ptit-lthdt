package d23k11.smartstore.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import d23k11.smartstore.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query("select count(*) from Customer c where year(c.created) = :y and month(c.created) <= :m")
    int countCustomerWithConditions(@Param("y") int y, @Param("m") int m);

    @Query("select count(*) from Customer c")
    int countCustomers();
}
