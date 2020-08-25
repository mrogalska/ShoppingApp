package practices.shopping.config.security.service;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import practices.shopping.config.security.model.UserDetailsImpl;
import practices.shopping.model.UserEntity;
import practices.shopping.repository.UserRepository;

@Service
public class ApplicationUserServiceImpl implements ApplicationUserService {

    private final UserRepository userRepository;

    public ApplicationUserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username)
                .orElseThrow(
                        () -> new UsernameNotFoundException(String.format("User with login %s not found", username)));

        return new UserDetailsImpl(userEntity);
    }

}
