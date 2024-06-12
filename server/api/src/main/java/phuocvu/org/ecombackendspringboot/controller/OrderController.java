package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.order.*;
import phuocvu.org.ecombackendspringboot.service.OrderService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<ResponseOrderDto> getAllOrder() {
        return orderService.getAllOrder();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseOrderDto> getOrderById(@PathVariable(name = "id") Long id) {
        ResponseOrderDto order = orderService.getOrderById(id);
        return ResponseEntity.ok(order);
    }

    @GetMapping("user/{id}")
    public ResponseEntity<List<ResponseClientOrderDto>> getOrderByUserId(@PathVariable(name = "id") Long id) {
        List<ResponseClientOrderDto> order = orderService.getOrderByUserId(id);
        return ResponseEntity.ok(order);
    }

    @PostMapping("")
    public ResponseEntity<ResponseCreateOrderDto> createOrder(@RequestBody AdminCreateOrderDto order) {
        ResponseCreateOrderDto newOrder = orderService.createOrder(order);
        return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrders(@PathVariable(name = "id") Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok("order deleted successfully!");
    }
}
