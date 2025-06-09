package com.example.Portfolio.Payload.request;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {

    @NotBlank
    private String email;

    //@NotBlank
   // private String username;

    @NotBlank
    private String password;

    // Getter
    public String getEmail() {
        return email;
    }

    // Setter
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter
    public String getPassword() {
        return password;
    }

    // Setter
    public void setPassword(String password) {
        this.password = password;
    }

/*
    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
*/

}
