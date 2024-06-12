package phuocvu.org.ecombackendspringboot.payload.admin;

import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseAdminDto {
    private Long visitorsCurrent;
    private Long visitorsTotal;
    private int customersCurrent;
    private int customersTotal;
    private int ordersCurrent;
    private int ordersTotal;
    private double revenuesCurrent;
    private double revenuesTotal;
    private List<OrderStatistic> dailyRevenues;
    private List<ProductStatistic> bestSellingProducts;
    private List<RecentOrder> recentOrders;
    private List<OrderStatistic> orderStatistics;

    public void setVisitorsCurrent(Long visitorsCurrent) {
        this.visitorsCurrent = visitorsCurrent;
    }

    public void setVisitorsTotal(Long visitorsTotal) {
        this.visitorsTotal = visitorsTotal;
    }

    public void setCustomersCurrent(int customersCurrent) {
        this.customersCurrent = customersCurrent;
    }



    public void setOrdersCurrent(int ordersCurrent) {
        this.ordersCurrent = ordersCurrent;
    }


    public void setRevenuesCurrent(double revenuesCurrent) {
        this.revenuesCurrent = revenuesCurrent;
    }


    public void setDailyRevenues(List<OrderStatistic> dailyRevenues) {
        this.dailyRevenues = dailyRevenues;
    }

    public void setBestSellingProducts(List<ProductStatistic> bestSellingProducts) {
        this.bestSellingProducts = bestSellingProducts;
    }

    public void setRecentOrders(List<RecentOrder> recentOrders) {
        this.recentOrders = recentOrders;
    }

    public void setCustomersTotal(int customersTotal) {
        this.customersTotal = customersTotal;
    }

    public void setOrdersTotal(int ordersTotal) {
        this.ordersTotal = ordersTotal;
    }

    public void setRevenuesTotal(double revenuesTotal) {
        this.revenuesTotal = revenuesTotal;
    }

    public void setOrderStatistics(List<OrderStatistic> orderStatistics) {
        this.orderStatistics = orderStatistics;
    }

}
