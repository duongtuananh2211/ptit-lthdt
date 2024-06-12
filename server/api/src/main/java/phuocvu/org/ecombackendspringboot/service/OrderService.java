package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.order.*;

import java.util.List;

public interface OrderService {
    List<ResponseOrderDto> getAllOrder();
    List<ResponseClientOrderDto> getOrderByUserId(Long id);

    ResponseOrderDto getOrderById(Long id);

    ResponseCreateOrderDto createOrder(AdminCreateOrderDto order);

    void deleteOrder(Long id);
}
