package practices.shopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import practices.shopping.model.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

}