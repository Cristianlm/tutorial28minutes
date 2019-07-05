package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

////   {
//    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU2MjkxMjIxMSwiaWF0IjoxNTYyMzA3NDExfQ.HxS5r2H2SnFWl3YJz06NtAGBz-6O0o3nPZqsSKg_zEpaIYcLE7SZF1LR2LvzhdFwFXjXNgJkBuW028gZcnUoPA"
//    }    
    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

