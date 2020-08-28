//package practices.shopping.controller;
//
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import practices.shopping.model.UserEntity;
//import practices.shopping.repository.UserRepository;
//
//public class JwtUserController {
//
//    private UserRepository userRepository;
//    private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    public JwtUserController(UserRepository userRepository,
//                             BCryptPasswordEncoder bCryptPasswordEncoder) {
//        this.userRepository = userRepository;
//        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
//    }
//
//    @PostMapping("/signUp")
//    public void signUp(@RequestBody UserEntity userEntity) {
//        userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));
//        userRepository.save(userEntity);
//    }
//
//}
