package com.animeshop.backend.controller;

import com.animeshop.backend.dto.ProductRequestDTO;
import com.animeshop.backend.dto.ProductResponseDTO;
import com.animeshop.backend.entity.Product;
import com.animeshop.backend.repository.ProductRepository;
import com.animeshop.backend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ProductResponseDTO createProduct(@Valid  @RequestBody ProductRequestDTO dto) {

        return productService.createProduct(dto);
    }

    @GetMapping
    public List<ProductResponseDTO> getProducts() {
        return productService.getAllProducts();
    }

    @PutMapping("/{id}")
    public void updateProduct(@PathVariable Long id, @RequestBody @Valid ProductRequestDTO bodyDto) {
        productService.editProduct(id, bodyDto);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
