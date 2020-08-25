package practices.shopping.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import practices.shopping.model.UserEntity;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {


    @GetMapping("/")
    public String login(){
        return "authenticated successfully" ;
    }

    @GetMapping("/getUsers")
    public Set<UserEntity> getUsers(){
        return Stream.of(new UserEntity(108,"Bob","bob@gmail.com","908765432"),
                new UserEntity(101,"Tom","tom@gmail.com","886710112")).
                collect(Collectors.toSet());
    }

    public static void main(String[] args) {
        SpringApplication.run(UserController.class, args);
    }

}