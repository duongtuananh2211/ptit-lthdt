package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.category.CreateCategoryDto;
import phuocvu.org.ecombackendspringboot.payload.category.ResponseCategoryDto;

import java.util.List;

public interface CategoryService {
    ResponseCategoryDto addCategory(CreateCategoryDto categoryDto);

    ResponseCategoryDto updateCategory(ResponseCategoryDto categoryDto, Long id);

    void deleteCategory(Long id);

    List<ResponseCategoryDto> getAllCategory();

    ResponseCategoryDto getCategoryByID(Long id);
}
