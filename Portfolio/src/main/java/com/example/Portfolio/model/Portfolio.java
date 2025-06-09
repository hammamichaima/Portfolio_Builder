package com.example.Portfolio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "portfolios")
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String bio;
    private String experience;


    private String skills;



    @OneToMany(mappedBy = "portfolio", cascade = CascadeType.ALL)
    private List<Project> projects;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    public Portfolio() {
    }

    public Portfolio(String fullName, String bio, String experience, String skills) {
        this.fullName = fullName;
        this.bio = bio;
        this.experience = experience;
        this.skills = skills;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

}
