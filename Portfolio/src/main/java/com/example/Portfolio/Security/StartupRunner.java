package com.example.Portfolio.Security;



import com.example.Portfolio.model.ERole;
import com.example.Portfolio.model.Role;
import com.example.Portfolio.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class StartupRunner implements CommandLineRunner {

    private final RoleRepository roleRepository;

    public StartupRunner(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }



    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(ERole.ROLE_USER));
            roleRepository.save(new Role(ERole.ROLE_MODERATOR));
            roleRepository.save(new Role(ERole.ROLE_ADMIN));
        }



    }
}