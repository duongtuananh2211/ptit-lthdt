package phuocvu.org.ecombackendspringboot.repository;

//import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import phuocvu.org.ecombackendspringboot.entity.Config;

public interface ConfigRepository extends JpaRepository<Config, Long> {
//    @Modifying
//    @Transactional
//    @Query("update Config c set c.visitors = :visitors where c.year = year(now())")
//    int updateVisitor(@Param("visitors") Long visitors);
    Config findByYear(int year);
}

