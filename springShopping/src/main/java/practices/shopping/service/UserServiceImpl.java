package practices.shopping.service;

import org.springframework.stereotype.Service;
import practices.shopping.model.UserEntity;
import practices.shopping.repository.UserRepository;
import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;


    public UserServiceImpl(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public List<UserEntity> getAllUsers() {

        return userRepository.findAll();
    }


    @Override
    public UserEntity getUserById(Long userId) {

        UserEntity userEntity = userRepository.findById(userId).orElseThrow();
        return userEntity;
    }


    @Override
    public UserEntity createUser(UserEntity userEntity) {

        return userRepository.save(userEntity);
    }


    @Override
    public UserEntity updateUser(Long userId, UserEntity userDetails) {

        UserEntity userEntity = userRepository.findById(userId).orElseThrow();
        userEntity.setUsername(userDetails.getUsername());
        userEntity.setPassword(userDetails.getPassword());
        userEntity.setRole(userDetails.getRole());
        return userRepository.save(userEntity);
    }


    @Override
    public void deleteUser(Long userId) {

        userRepository.deleteById(userId);
    }

}
