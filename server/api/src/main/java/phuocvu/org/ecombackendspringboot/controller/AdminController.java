package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import phuocvu.org.ecombackendspringboot.payload.admin.ResponseAdminDto;
import phuocvu.org.ecombackendspringboot.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("")
    public ResponseEntity<ResponseAdminDto> getDashboard() {
        return new ResponseEntity<>( adminService.getAdmin(), HttpStatus.OK);
    }
}
