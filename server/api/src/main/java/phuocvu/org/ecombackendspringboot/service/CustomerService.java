package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.customer.CreateCustomerDto;
import phuocvu.org.ecombackendspringboot.payload.customer.ResponseCustomerDto;

import java.util.List;

public interface CustomerService {
    ResponseCustomerDto addCustomer(CreateCustomerDto customerDto);

    ResponseCustomerDto updateCustomer(ResponseCustomerDto customerDto, Long id);

    void deleteCustomer(Long id);

    List<ResponseCustomerDto> getAllCustomer();

    ResponseCustomerDto getCustomerById(Long id);
}
