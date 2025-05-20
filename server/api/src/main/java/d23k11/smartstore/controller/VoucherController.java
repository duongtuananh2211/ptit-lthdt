package d23k11.smartstore.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import d23k11.smartstore.payload.voucher.CreateVoucherDto;
import d23k11.smartstore.payload.voucher.ResponseVoucherDto;
import d23k11.smartstore.service.VoucherService;


import java.util.List;

@RestController
@RequestMapping("/api/voucher")
public class VoucherController {
    private final VoucherService voucherService;

    public VoucherController(VoucherService voucherService) {
        this.voucherService = voucherService;
    }

    @PostMapping
    public ResponseEntity<ResponseVoucherDto> addVoucher(@RequestBody CreateVoucherDto voucherDto) {
        ResponseVoucherDto saveVoucher = voucherService.addVoucher(voucherDto);
        return new ResponseEntity<>(saveVoucher, HttpStatus.CREATED);
    }

    @GetMapping
    public List<ResponseVoucherDto> getAllVouchers() {
        return voucherService.getAllVouchers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseVoucherDto> getVoucherById(@PathVariable(name = "id") Long id) {
        ResponseVoucherDto voucherDto = voucherService.getVoucherById(id);
        return ResponseEntity.ok(voucherDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseVoucherDto> updateVoucher(@RequestBody CreateVoucherDto voucherDto, @PathVariable(name = "id") Long id) {
        ResponseVoucherDto saveVoucher = voucherService.updateProduct(voucherDto, id);
        return ResponseEntity.ok(saveVoucher);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVoucher(@PathVariable(name = "id") Long id) {
        voucherService.deleteVoucherById(id);
        return ResponseEntity.ok("Voucher deleted successfully!");
    }
}
