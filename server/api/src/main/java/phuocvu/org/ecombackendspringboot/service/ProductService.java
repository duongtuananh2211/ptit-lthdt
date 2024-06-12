package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.product.ProductInCollectionDto;
import phuocvu.org.ecombackendspringboot.payload.product.ResponseProductDto;

import java.util.List;

public interface ProductService {
    ResponseProductDto addProduct(ResponseProductDto productDto);

    List<ResponseProductDto> getAllProducts();
    List<ResponseProductDto> bulkAddProducts(List<ResponseProductDto> productDtos);

    List<ResponseProductDto> bulkGetProducts(List<Long> ids);

    ResponseProductDto getProductById(Long id);

    ResponseProductDto updateProduct(ResponseProductDto productDto, long id);

    List<ProductInCollectionDto> getBestSellingProducts();
    List<ProductInCollectionDto> getNewProducts();

    void deleteProductById(long id);
}
