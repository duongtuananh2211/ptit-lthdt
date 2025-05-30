package d23k11.smartstore.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import d23k11.smartstore.exception.ResourceNotFoundException;
import d23k11.smartstore.entity.Voucher;
import d23k11.smartstore.payload.voucher.CreateVoucherDto;
import d23k11.smartstore.payload.voucher.ResponseVoucherDto;
import d23k11.smartstore.repository.VoucherRepository;
import d23k11.smartstore.service.VoucherService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VoucherServiceImpl implements VoucherService {
    private final VoucherRepository voucherRepository;
    private final ModelMapper mapper;

    public VoucherServiceImpl(VoucherRepository voucherRepository, ModelMapper mapper) {
        this.voucherRepository = voucherRepository;
        this.mapper = mapper;
    }

    @Override
    public ResponseVoucherDto addVoucher(CreateVoucherDto voucherDto) {
        Voucher voucher = mapper.map(voucherDto, Voucher.class);
        voucher.setRemain(voucher.getTotal());
        Voucher saveVoucher = voucherRepository.save(voucher);
        return mapper.map(saveVoucher, ResponseVoucherDto.class);
    }

    @Override
    public List<ResponseVoucherDto> getAllVouchers() {
        List<Voucher> vouchers = voucherRepository.findAll();
        return vouchers.stream().map(voucher -> mapper.map(voucher, ResponseVoucherDto.class)).collect(Collectors.toList());
    }

    @Override
    public ResponseVoucherDto getVoucherById(Long voucherId) {
        Voucher voucher = voucherRepository.findById(voucherId)
                .orElseThrow(() -> new ResourceNotFoundException("voucher", "id", voucherId));

        return mapper.map(voucher, ResponseVoucherDto.class);
    }

    @Override
    public ResponseVoucherDto updateProduct(CreateVoucherDto voucherDto, long voucherId) {
        Voucher existVoucher = voucherRepository.findById(voucherId)
                .orElseThrow(() -> new ResourceNotFoundException("voucher", "id", voucherId));

        mapper.map(voucherDto, existVoucher);
        Voucher updateVoucher = voucherRepository.save(existVoucher);
        return mapper.map(updateVoucher, ResponseVoucherDto.class);
    }


    @Override
    public void deleteVoucherById(long id) {
        Voucher voucher = voucherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("voucher", "id", id));
        voucherRepository.delete(voucher);

    }


}
