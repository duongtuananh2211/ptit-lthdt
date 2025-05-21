package d23k11.smartstore.service;

import d23k11.smartstore.payload.customer.CreateCustomerDto;
import d23k11.smartstore.payload.customer.ResponseCustomerDto;

import java.util.List;

public interface CustomerService {
    ResponseCustomerDto addCustomer(CreateCustomerDto customerDto);

    ResponseCustomerDto updateCustomer(ResponseCustomerDto customerDto, Long id);

    void deleteCustomer(Long id);

    List<ResponseCustomerDto> getAllCustomer();

    ResponseCustomerDto getCustomerById(Long id);
}
