package phuocvu.org.ecombackendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {
}
