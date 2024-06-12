package phuocvu.org.ecombackendspringboot.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.entity.Config;
import phuocvu.org.ecombackendspringboot.entity.Order;
import phuocvu.org.ecombackendspringboot.entity.OrderItem;
import phuocvu.org.ecombackendspringboot.payload.admin.OrderStatistic;
import phuocvu.org.ecombackendspringboot.payload.admin.ProductStatistic;
import phuocvu.org.ecombackendspringboot.payload.admin.RecentOrder;
import phuocvu.org.ecombackendspringboot.payload.admin.ResponseAdminDto;
import phuocvu.org.ecombackendspringboot.repository.ConfigRepository;
import phuocvu.org.ecombackendspringboot.repository.ProductRepository;
import phuocvu.org.ecombackendspringboot.repository.order.OrderItemRepository;
import phuocvu.org.ecombackendspringboot.repository.order.OrderRepository;
import phuocvu.org.ecombackendspringboot.repository.user.CustomerRepository;
import phuocvu.org.ecombackendspringboot.service.AdminService;
import phuocvu.org.ecombackendspringboot.service.ConfigService;

import java.sql.Date;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {
    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final OrderItemRepository orderItemRepository;
    private final ConfigRepository configRepository;

    private final ModelMapper mapper;

    public AdminServiceImpl(CustomerRepository customerRepository, OrderRepository orderRepository, ProductRepository productRepository, OrderItemRepository orderItemRepository, ConfigRepository configRepository, ModelMapper mapper) {
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.orderItemRepository = orderItemRepository;
        this.configRepository = configRepository;
        this.mapper = mapper;
    }

    @Override
    public ResponseAdminDto getAdmin() {
        ResponseAdminDto response = new ResponseAdminDto();
        LocalDate currentDate = LocalDate.now();
        int currentYear = currentDate.getYear();
        int currentMonth = currentDate.getMonthValue();

        // visitors
        long totalVisitors = 0;
        List<Config> configs = configRepository.findAll();
        for (Config c : configs) {
            if (c.getYear() == currentYear) {
                response.setVisitorsCurrent(c.getVisitors());
            }
            totalVisitors += c.getVisitors();
        }
        response.setVisitorsTotal(totalVisitors);

        // customers
        response.setCustomersCurrent(customerRepository.countCustomerWithConditions(currentYear, currentMonth));
        response.setCustomersTotal(customerRepository.countCustomers());

        // orders
        response.setOrdersCurrent(orderRepository.countOrderWithConditions(currentYear, currentMonth));
        response.setOrdersTotal(orderRepository.countOrders());

        // revenues
        response.setRevenuesCurrent(orderRepository.sumRevenuesWithConditions(currentYear, currentMonth).orElse(0.0));
        response.setRevenuesTotal(orderRepository.sumRevenues().orElse(0.0));

        // daily revenues
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate today = LocalDate.now();
        LocalDate monday = today.with(DayOfWeek.MONDAY);
        List<String> weekDays = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            LocalDate day = monday.plusDays(i);
            weekDays.add(day.format(formatter));
        }
        List<OrderStatistic> orderInWeekStatistics = new ArrayList<>();
        for (String day : weekDays) {
            OrderStatistic orderStatistic = new OrderStatistic();
            orderStatistic.setTitle(day);
            orderStatistic.setAmount(orderRepository.sumRevenuesByDate(day).orElse(0.0));
            orderStatistic.setTotal(100);
            orderInWeekStatistics.add(orderStatistic);
        }
        response.setDailyRevenues(orderInWeekStatistics);

        // recent orders
        List<Order> orders = orderRepository.findRecentOrders();
        List<RecentOrder> recentOrders = new ArrayList<>();
        for (Order o : orders) {
            RecentOrder r = new RecentOrder();
            r.setId(o.getId());
            r.setFullName(o.getCustomer().getFullName());
            r.setAmount(o.getAmount());
            r.setStatus(o.getStatus());
            int c = 0;
            for (OrderItem oi : o.getOrderItems()) {
                c += oi.getQuantity();
            }
            r.setTotal(c);
            recentOrders.add(r);
        }
        response.setRecentOrders(recentOrders);

        // best-selling products
        List<ProductStatistic> products = new ArrayList<>();
        for (Object[] o : productRepository.findBestSellingProducts()) {
            ProductStatistic p = new ProductStatistic();
            p.setId(Long.parseLong(o[0].toString()));
            p.setTitle(o[1].toString());
            p.setTotal(Long.parseLong(o[2].toString()));
            products.add(p);
        }
        response.setBestSellingProducts(products);

        // order statistics
        List<OrderStatistic> orderStatistics = new ArrayList<>();
        for (int i = 1; i <= 12; i++) {
            OrderStatistic o = new OrderStatistic();
            o.setTitle(1 + "");
            if (i > currentMonth) {
                o.setTotal(0);
                o.setAmount(0.0);
            } else {
                o.setTotal(orderRepository.countOrderWithEquals(currentYear, i));
                o.setAmount(orderRepository.sumRevenuesWithEquals(currentYear, i).orElse(0.0));
            }
            orderStatistics.add(o);
        }
        response.setOrderStatistics(orderStatistics);
        return response;
    }
}
