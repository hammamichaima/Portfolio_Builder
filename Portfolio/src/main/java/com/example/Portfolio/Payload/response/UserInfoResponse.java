package com.example.Portfolio.Payload.response;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserInfoResponse {
    private String jwt;
    private Long id;
    private String username;
    private String email;
    private List<String> roles;


    public UserInfoResponse(Long id, String username, String email, List<String> roles, String jwt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.jwt = jwt;
    }

    public String getJwt() { return jwt; }
    public List<String> getRoles() { return roles; }
}
