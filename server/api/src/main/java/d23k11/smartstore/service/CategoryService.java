package d23k11.smartstore.service;

import d23k11.smartstore.payload.category.CreateCategoryDto;
import d23k11.smartstore.payload.category.ResponseCategoryDto;

import java.util.List;

public interface CategoryService {
    ResponseCategoryDto addCategory(CreateCategoryDto categoryDto);

    ResponseCategoryDto updateCategory(ResponseCategoryDto categoryDto, Long id);

    void deleteCategory(Long id);

    List<ResponseCategoryDto> getAllCategory();

    ResponseCategoryDto getCategoryByID(Long id);
}
