package practices.shopping.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import practices.shopping.model.UserEntity;
import practices.shopping.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UserController {
    private final UserService userService;


    public UserController(final UserService userService) {

        this.userService = userService;
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping()
    public ResponseEntity<Object> getAllUsers() {

        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }


    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable(value = "id") Long userId) {

        return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> createUser(@RequestBody UserEntity userEntity) {

        return new ResponseEntity<>(userService.createUser(userEntity), HttpStatus.CREATED);
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable(value = "id") Long userId,
                                                @Validated @RequestBody UserEntity userDetails) {

        return new ResponseEntity<>(userService.updateUser(userId, userDetails), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable(value = "id") Long userId) {

        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}