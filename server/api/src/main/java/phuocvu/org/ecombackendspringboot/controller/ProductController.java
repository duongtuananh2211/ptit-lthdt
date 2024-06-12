package phuocvu.org.ecombackendspringboot.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.product.ProductInCollectionDto;
import phuocvu.org.ecombackendspringboot.payload.product.ResponseProductDto;
import phuocvu.org.ecombackendspringboot.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("")
    public List<ResponseProductDto> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseProductDto> getProductById(@PathVariable(name = "id") Long id) {
        ResponseProductDto productDto = productService.getProductById(id);
        return ResponseEntity.ok(productDto);
    }

    @GetMapping("bulk")
    public ResponseEntity<List<ResponseProductDto>> getProductByBatch(@RequestParam(name = "ids") List<Long> ids) {
        List<ResponseProductDto> productDto = productService.bulkGetProducts(ids);
        return ResponseEntity.ok(productDto);
    }

    @GetMapping("/best-selling")
    public ResponseEntity<List<ProductInCollectionDto>> getBestSellingProduct() {
        List<ProductInCollectionDto> productDto = productService.getBestSellingProducts();
        return ResponseEntity.ok(productDto);
    }

    @GetMapping("/new")
    public ResponseEntity<List<ProductInCollectionDto>> getNewProducts() {
        List<ProductInCollectionDto> productDto = productService.getNewProducts();
        return ResponseEntity.ok(productDto);
    }

    @PostMapping("")
    public ResponseEntity<ResponseProductDto> addProduct(@Valid @RequestBody ResponseProductDto productDto) {
        System.out.println(productDto.toString());
        ResponseProductDto savedProduct = productService.addProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @PostMapping("multiple")
    public ResponseEntity<List<ResponseProductDto>> bulkAddProduct(@Valid @RequestBody List<ResponseProductDto> productDtos) {
        List<ResponseProductDto> savedProduct = productService.bulkAddProducts(productDtos);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<ResponseProductDto> updateProduct(@RequestBody ResponseProductDto productDto,
                                                            @PathVariable(name = "id") Long id) {
        ResponseProductDto savedProduct = productService.updateProduct(productDto, id);
        return ResponseEntity.ok(savedProduct);
    }

    @CrossOrigin
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable(name = "id") Long id) {
        productService.deleteProductById(id);
        return ResponseEntity.ok("Product deleted successfully!");
    }
}
