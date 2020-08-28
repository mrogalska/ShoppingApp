package practices.shopping.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserEntity {

    @Id
    @SequenceGenerator(name = "_user_id_seq_gen", sequenceName = "_user_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "_user_id_seq_gen")
    private long id;

    private String username;

    private String password;

    private RoleType role;

    public RoleType getRole() {
        return role;
    }

}