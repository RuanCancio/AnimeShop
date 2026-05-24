package com.animeshop.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public record ProductRequestDTO(

        @NotBlank(message = "Name cannot be empty")
        String name,

        @NotBlank(message = "Description cannot be empty")
        String description,

        @Positive(message = "Price must be positive")
        Double price,

        @NotBlank(message = "Image URL cannot be empty")
        String imageUrl) {

}

