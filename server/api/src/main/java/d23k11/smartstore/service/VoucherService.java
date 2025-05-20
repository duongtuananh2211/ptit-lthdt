package d23k11.smartstore.service;


import d23k11.smartstore.payload.voucher.CreateVoucherDto;
import d23k11.smartstore.payload.voucher.ResponseVoucherDto;

import java.util.List;

public interface VoucherService {
    ResponseVoucherDto addVoucher(CreateVoucherDto voucherDto);

    List<ResponseVoucherDto> getAllVouchers();

    ResponseVoucherDto getVoucherById(Long id);

    ResponseVoucherDto updateProduct(CreateVoucherDto voucherDto, long id);

    void deleteVoucherById(long id);

}
