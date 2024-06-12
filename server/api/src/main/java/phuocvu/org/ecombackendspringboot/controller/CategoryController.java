package phuocvu.org.ecombackendspringboot.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.category.CreateCategoryDto;
import phuocvu.org.ecombackendspringboot.payload.category.ResponseCategoryDto;
import phuocvu.org.ecombackendspringboot.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // add category
    @PostMapping("")
    public ResponseEntity<ResponseCategoryDto> addCategory(@Valid @RequestBody CreateCategoryDto categoryDto) {
        ResponseCategoryDto saveCategory = categoryService.addCategory(categoryDto);
        return new ResponseEntity<>(saveCategory, HttpStatus.CREATED);
    }

    // update category
    @PutMapping("{id}")
    public ResponseEntity<ResponseCategoryDto> updateCategory(@Valid @RequestBody ResponseCategoryDto categoryDto, @PathVariable(name = "id") Long id) {
        ResponseCategoryDto saveCategory = categoryService.updateCategory(categoryDto, id);
        return ResponseEntity.ok(saveCategory);
    }

    // delete category
    @CrossOrigin
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable(name = "id") Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("category deleted successfully");
    }

    // get category by id
    @GetMapping("{id}")
    public ResponseEntity<ResponseCategoryDto> getCategoryById(@PathVariable(name = "id") Long id) {
        ResponseCategoryDto categoryDto = categoryService.getCategoryByID(id);
        return ResponseEntity.ok(categoryDto);
    }

    // get all category
    @GetMapping("")
    public List<ResponseCategoryDto> getAllCategory() {
        return categoryService.getAllCategory();
    }
}
