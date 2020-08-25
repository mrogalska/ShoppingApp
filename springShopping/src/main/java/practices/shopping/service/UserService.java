package practices.shopping.service;

import java.util.List;
import practices.shopping.model.UserEntity;


public interface UserService {

    List<UserEntity> getAllUsers();
    UserEntity getUserById(Long userId);
    UserEntity createUser(UserEntity userEntity);
    UserEntity updateUser(Long userId, UserEntity userEntity);
    void deleteUser(Long userId);

}
