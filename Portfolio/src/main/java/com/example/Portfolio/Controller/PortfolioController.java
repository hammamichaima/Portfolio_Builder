package com.example.Portfolio.Controller;

import com.example.Portfolio.DTO.PortfolioDto;

import com.example.Portfolio.model.Portfolio;
import com.example.Portfolio.repository.PortfolioRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;


@CrossOrigin(origins = "http://localhost:3005")
@RestController
@RequestMapping("/api")
public class PortfolioController {

    @Autowired
    private PortfolioRepository portfolioRepository;

   // @PostMapping("/{templateId}")

    // @PostMapping("/portfolio")
    @PostMapping(value = "/portfolio", produces = "application/json")

    public ResponseEntity<?> savePortfolio(@PathVariable Long templateId,
                                           @RequestBody PortfolioDto dto) {


        System.out.println("📥 Received POST /api/portfolio");
        System.out.println("➡ Full Name: " + dto.getFullName());
        System.out.println("➡ Bio: " + dto.getBio());
        System.out.println("➡ Experience: " + dto.getExperience());
        System.out.println("➡ Skills: " + dto.getSkills());

        // Mapper DTO → Entité
        Portfolio portfolio = new Portfolio();
        portfolio.setFullName(dto.getFullName());
        portfolio.setBio(dto.getBio());
        portfolio.setExperience(dto.getExperience());
        portfolio.setSkills(dto.getSkills());

        // ⚠️ Tu peux utiliser templateId si tu as une relation avec une entité Template

        Portfolio saved = portfolioRepository.save(portfolio);
        return ResponseEntity.ok(saved);
    }
}
