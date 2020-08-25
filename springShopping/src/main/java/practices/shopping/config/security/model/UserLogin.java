package practices.shopping.config.security.model;

import lombok.Data;

@Data
public class UserLogin {

    private String username;
    private String password;

    public UserLogin() {
    }
}