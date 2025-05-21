package d23k11.smartstore.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import d23k11.smartstore.payload.admin.ResponseAdminDto;
import d23k11.smartstore.service.AdminService;

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
