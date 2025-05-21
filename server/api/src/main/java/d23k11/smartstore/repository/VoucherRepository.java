package d23k11.smartstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import d23k11.smartstore.entity.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {
}
