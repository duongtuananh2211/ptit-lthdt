package d23k11.smartstore.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import d23k11.smartstore.exception.ResourceNotFoundException;
import d23k11.smartstore.entity.Customer;
import d23k11.smartstore.payload.customer.CreateCustomerDto;
import d23k11.smartstore.payload.customer.ResponseCustomerDto;
import d23k11.smartstore.repository.user.CustomerRepository;
import d23k11.smartstore.service.CustomerService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper mapper;

    public CustomerServiceImpl(CustomerRepository customerRepository, ModelMapper mapper) {
        this.customerRepository = customerRepository;
        this.mapper = mapper;
    }

    @Override
    public ResponseCustomerDto addCustomer(CreateCustomerDto customerDto) {
        Customer customer = mapper.map(customerDto, Customer.class);
        System.out.println("customer: " + customer);
        Customer saveCustomer = customerRepository.save(customer);
        return mapper.map(saveCustomer, ResponseCustomerDto.class);
    }

    @Override
    public ResponseCustomerDto updateCustomer(ResponseCustomerDto customerDto, Long customerId) {
        Customer existCustomer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("customer", "id", customerId));
        mapper.map(customerDto, existCustomer);
        System.out.println(existCustomer.toString());
        Customer saveCustomer = customerRepository.save(existCustomer);
        return mapper.map(saveCustomer, ResponseCustomerDto.class);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("customer", "id", customerId));
        customerRepository.delete(customer);
    }

    @Override
    public List<ResponseCustomerDto> getAllCustomer() {
        List<Customer> customers = customerRepository.findAll();

        return customers.stream().map((customer) -> mapper.map(customer, ResponseCustomerDto.class)).collect(Collectors.toList());
    }

    @Override
    public ResponseCustomerDto getCustomerById(Long customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("customer", "id", customerId));
        return mapper.map(customer, ResponseCustomerDto.class);
    }
}
