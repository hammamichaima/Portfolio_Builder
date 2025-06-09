package com.example.Portfolio.Security.services;

import com.example.Portfolio.model.User;
import com.example.Portfolio.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;




@Service
public class UserService {


    @Autowired
    private static UserRepository userRepository;

    public static User getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }



}