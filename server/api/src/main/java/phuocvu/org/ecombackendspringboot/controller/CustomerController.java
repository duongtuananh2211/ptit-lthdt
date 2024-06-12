package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.customer.CreateCustomerDto;
import phuocvu.org.ecombackendspringboot.payload.customer.ResponseCustomerDto;
import phuocvu.org.ecombackendspringboot.service.CustomerService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    //add customer
    @PostMapping("")
    public ResponseEntity<ResponseCustomerDto> addCustomer(@RequestBody CreateCustomerDto customerDto) {
        ResponseCustomerDto saveCustomer = customerService.addCustomer(customerDto);
        System.out.println("saved customer: " + saveCustomer.toString());
        return new ResponseEntity<>(saveCustomer, HttpStatus.CREATED);
    }

    // update customer
    @PutMapping("/{id}")
    public ResponseEntity<ResponseCustomerDto> updateCustomer(@RequestBody ResponseCustomerDto customerDto, @PathVariable(name = "id") Long id) {
        ResponseCustomerDto updatedCustomer = customerService.updateCustomer(customerDto, id);
        return ResponseEntity.ok(updatedCustomer);
    }

    // delete customer
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable(name = "id") Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.ok("customer deleted successfully!");
    }

    @GetMapping("")
    public ResponseEntity<List<ResponseCustomerDto>> getAllCustomer() {
        return new ResponseEntity<>(customerService.getAllCustomer(), HttpStatus.OK);
    }

    // get customer by id
    @GetMapping("/{id}")
    public ResponseEntity<ResponseCustomerDto> getCustomerById(@PathVariable(name = "id") Long id) {
        ResponseCustomerDto customerDto = customerService.getCustomerById(id);
        return ResponseEntity.ok(customerDto);
    }
}
