package com.animeshop.backend.service;


import com.animeshop.backend.dto.ProductRequestDTO;
import com.animeshop.backend.dto.ProductResponseDTO;
import com.animeshop.backend.entity.Product;
import com.animeshop.backend.exception.ProductNotFoundException;
import com.animeshop.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    private Product toEntity(ProductRequestDTO dto) {

        Product product = new Product();

        product.setName(dto.name());
        product.setDescription(dto.description());
        product.setPrice(dto.price());
        product.setImageUrl(dto.imageUrl());

        return product;
    }

    private ProductResponseDTO toDTO(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getImageUrl()
        );
    }

    public ProductResponseDTO createProduct(ProductRequestDTO dto) {

        Product product = toEntity(dto);

        Product savedProduct = productRepository.save(product);

        return toDTO(savedProduct);
    }


    public List<ProductResponseDTO> getAllProducts() {

        return productRepository.findAll()
                .stream()
                .map(this::toDTO)
                .toList();
    }

    public ProductResponseDTO editProduct(Long id, ProductRequestDTO dtoBody) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        product.setName(dtoBody.name());
        product.setDescription(dtoBody.description());
        product.setPrice(dtoBody.price());
        product.setImageUrl(dtoBody.imageUrl());

        Product updatedProduct = productRepository.save(product);

        return toDTO(updatedProduct);
    }

    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Product not found");
        }
        productRepository.deleteById(id);
    }


}
