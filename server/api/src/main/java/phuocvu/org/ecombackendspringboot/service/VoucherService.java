package phuocvu.org.ecombackendspringboot.service;


import phuocvu.org.ecombackendspringboot.payload.voucher.CreateVoucherDto;
import phuocvu.org.ecombackendspringboot.payload.voucher.ResponseVoucherDto;

import java.util.List;

public interface VoucherService {
    ResponseVoucherDto addVoucher(CreateVoucherDto voucherDto);

    List<ResponseVoucherDto> getAllVouchers();

    ResponseVoucherDto getVoucherById(Long id);

    ResponseVoucherDto updateProduct(CreateVoucherDto voucherDto, long id);

    void deleteVoucherById(long id);

}
