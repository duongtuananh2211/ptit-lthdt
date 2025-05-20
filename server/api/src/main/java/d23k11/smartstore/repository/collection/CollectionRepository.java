package d23k11.smartstore.repository.collection;

import org.springframework.data.jpa.repository.JpaRepository;
import d23k11.smartstore.entity.Collection;

import java.util.List;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
    Collection findByType(String type);
}
