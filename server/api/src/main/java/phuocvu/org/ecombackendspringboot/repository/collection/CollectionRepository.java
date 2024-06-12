package phuocvu.org.ecombackendspringboot.repository.collection;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.Collection;

import java.util.List;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
    Collection findByType(String type);
}
