package com.example.Portfolio.repository;


import java.util.Optional;

import com.example.Portfolio.model.ERole;
import com.example.Portfolio.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}