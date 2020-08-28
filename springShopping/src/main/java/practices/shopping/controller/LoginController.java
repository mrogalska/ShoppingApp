package practices.shopping.controller;


import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import practices.shopping.config.security.jwt.JwtAuthFilter;
import practices.shopping.model.UserEntity;
import practices.shopping.repository.UserRepository;
import practices.shopping.service.UserService;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class LoginController {


    public LoginController() {
    }

    @GetMapping(value = "login")
    public ResponseEntity<String> login(){
        return new ResponseEntity<>("Successfully authenticated", HttpStatus.OK);
    }
}
