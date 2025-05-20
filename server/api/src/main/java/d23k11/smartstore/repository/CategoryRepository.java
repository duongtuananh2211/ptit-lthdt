package d23k11.smartstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import d23k11.smartstore.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
