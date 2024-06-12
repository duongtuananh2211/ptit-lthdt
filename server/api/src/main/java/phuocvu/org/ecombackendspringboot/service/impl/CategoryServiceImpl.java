package phuocvu.org.ecombackendspringboot.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Category;
import phuocvu.org.ecombackendspringboot.payload.category.CreateCategoryDto;
import phuocvu.org.ecombackendspringboot.payload.category.ResponseCategoryDto;
import phuocvu.org.ecombackendspringboot.repository.CategoryRepository;
import phuocvu.org.ecombackendspringboot.service.CategoryService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final ModelMapper mapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper mapper) {
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    @Override
    public ResponseCategoryDto addCategory(CreateCategoryDto categoryDto) {
        Category category = mapper.map(categoryDto, Category.class);
        Category saveCategory = categoryRepository.save(category);
        return mapper.map(saveCategory, ResponseCategoryDto.class);
    }

    @Override
    public ResponseCategoryDto updateCategory(ResponseCategoryDto categoryDto, Long categoryId) {
        Category existCategory = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("category", "id", categoryId));
        mapper.map(categoryDto, existCategory);
        Category saveCategory = categoryRepository.save(existCategory);
        return mapper.map(saveCategory, ResponseCategoryDto.class);
    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category existCategory = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("category", "id", categoryId));
        categoryRepository.delete(existCategory);
    }

    @Override
    public List<ResponseCategoryDto> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map((category) -> mapper.map(category, ResponseCategoryDto.class)).collect(Collectors.toList());
    }

    @Override
    public ResponseCategoryDto getCategoryByID(Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("category", "id", categoryId));
        return mapper.map(category, ResponseCategoryDto.class);
    }
}
