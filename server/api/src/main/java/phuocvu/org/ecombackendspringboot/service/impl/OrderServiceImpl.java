package phuocvu.org.ecombackendspringboot.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.entity.Customer;
import phuocvu.org.ecombackendspringboot.entity.OrderItem;
import phuocvu.org.ecombackendspringboot.entity.Product;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Order;
import phuocvu.org.ecombackendspringboot.payload.order.*;
import phuocvu.org.ecombackendspringboot.repository.ProductRepository;
import phuocvu.org.ecombackendspringboot.repository.order.OrderItemRepository;
import phuocvu.org.ecombackendspringboot.repository.order.OrderRepository;
import phuocvu.org.ecombackendspringboot.repository.user.CustomerRepository;
import phuocvu.org.ecombackendspringboot.service.OrderService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final OrderItemRepository orderItemRepository;
    private final ModelMapper mapper;

    public OrderServiceImpl(OrderRepository orderRepository, CustomerRepository customerRepository, ProductRepository productRepository, OrderItemRepository orderItemRepository, ModelMapper mapper) {
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.orderItemRepository = orderItemRepository;
        this.mapper = mapper;
    }

    @Override
    public List<ResponseOrderDto> getAllOrder() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream().map(order -> mapper.map(order, ResponseOrderDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<ResponseClientOrderDto> getOrderByUserId(Long id) {
        List<Order> orders = orderRepository.findByCustomerId(id);
        return orders.stream().map(o -> mapper.map(o, ResponseClientOrderDto.class)).toList();
    }

    @Override
    public ResponseOrderDto getOrderById(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order", "id", id));
        return mapper.map(order, ResponseOrderDto.class);
    }

    @Override
    public ResponseCreateOrderDto createOrder(AdminCreateOrderDto order) {
        Customer customer = new Customer();
        customer.setFullName(order.getFullName());
        customer.setAddress(order.getAddress());
        customer.setPhoneNumber(order.getPhoneNumber());
        customer = customerRepository.save(customer);

        OrderDto orderDto = new OrderDto();
        orderDto.setStatus(order.getStatus());
        orderDto.setPayment(order.getPayment());
        orderDto.setCustomerId(customer.getId());

        float amount = 0;
        for (CreateOrderItemDto item : order.getProductItems()) {
            Product product = productRepository.findById(item.getProductId()).orElseThrow(() -> new ResourceNotFoundException("product", "id", item.getProductId()));
            amount += item.getQuantity() * product.getPrice();
        }

        orderDto.setAmount(amount);
        Order savedOrder = orderRepository.save(mapper.map(orderDto, Order.class));
        System.out.println("start create order item");
        for (CreateOrderItemDto item : order.getProductItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(savedOrder);
            orderItem.setQuantity(item.getQuantity());
            orderItem.setProduct(productRepository.findById(item.getProductId()).orElseThrow(() -> new ResourceNotFoundException("product", "id", item.getProductId())));
            orderItemRepository.save(orderItem);
        }
        System.out.println("end create order item");
        System.out.println(savedOrder);
        System.out.println(mapper.map(savedOrder, ResponseCreateOrderDto.class));
        return mapper.map(savedOrder, ResponseCreateOrderDto.class);
    }

    @Override
    public void deleteOrder(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("order", "id", id));
        orderRepository.delete(order);
    }
}
