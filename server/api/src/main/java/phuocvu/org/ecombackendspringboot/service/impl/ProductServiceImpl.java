package phuocvu.org.ecombackendspringboot.service.impl;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.payload.product.ProductInCollectionDto;
import phuocvu.org.ecombackendspringboot.repository.CategoryRepository;
import phuocvu.org.ecombackendspringboot.repository.ProductRepository;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Product;
import phuocvu.org.ecombackendspringboot.payload.product.ResponseProductDto;
import phuocvu.org.ecombackendspringboot.service.ProductService;
import org.modelmapper.ModelMapper;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapper mapper;

    public ProductServiceImpl(ProductRepository productRepository, CategoryRepository categoryRepository, ModelMapper mapper) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    // create a Product
    @Override
    public ResponseProductDto addProduct(ResponseProductDto productDto) {
        Product product = mapper.map(productDto, Product.class);
        Product savedProduct = productRepository.save(product);
        return mapper.map(savedProduct, ResponseProductDto.class);
    }

    @Override
    public List<ResponseProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map((product) -> mapper.map(product, ResponseProductDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<ResponseProductDto> bulkAddProducts(List<ResponseProductDto> productDtos) {
        List<ResponseProductDto> res = new ArrayList<>();
        for (ResponseProductDto productDto: productDtos) {
            Product product = mapper.map(productDto, Product.class);
            Product savedProduct = productRepository.save(product);
            res.add(mapper.map(savedProduct, ResponseProductDto.class));
        }
        return res;
    }

    @Override
    public List<ResponseProductDto> bulkGetProducts(List<Long> ids) {
        List<Product> products = new ArrayList<>();
        for (Long id: ids) {
            Product product = productRepository.findById(id).orElse(null);
            if (product != null) {
                products.add(product);
            }
        }
        return products.stream().map(p -> mapper.map(p, ResponseProductDto.class)).toList();
    }

    // Find by id: find -> existence check -> response
    @Override
    public ResponseProductDto getProductById(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("product", "id", productId));
        return mapper.map(product, ResponseProductDto.class);
    }

    // update a exist product
    @Override
    public ResponseProductDto updateProduct(ResponseProductDto productDto, long productId) {
        Product existProduct = productRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("product", "id", productId));
        mapper.map(productDto, existProduct);
        Product updateProduct = productRepository.save(existProduct);
        return mapper.map(updateProduct, ResponseProductDto.class);
    }

    @Override
    public List<ProductInCollectionDto> getBestSellingProducts() {
        List<ProductInCollectionDto> products = new ArrayList<>();
        for (Object[] o : productRepository.findBestSellingProductsClient(4)) {
            ProductInCollectionDto p = new ProductInCollectionDto();
            p.setId(Long.parseLong(o[0].toString()));
            p.setTitle(o[1].toString());
            p.setPrice(Float.parseFloat(o[2].toString()));
            p.setDiscount(Float.parseFloat(o[3].toString()));
            p.setImageUrls(o[4].toString());
            p.setRemain(0);
            products.add(p);
        }
        return products;
    }

    @Override
    public List<ProductInCollectionDto> getNewProducts() {
        return productRepository.findNewProductsClient(4).stream().map(p -> mapper.map(p, ProductInCollectionDto.class)).toList();
    }

    // delete product
    // search -> delete
    @Override
    public void deleteProductById(long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("product", "id", productId));
        productRepository.delete(product);
    }
}
