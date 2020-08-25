package practices.shopping.model;

import org.springframework.security.core.GrantedAuthority;

public enum RoleType implements GrantedAuthority {

    ADMIN("ROLE_ADMIN"),
    USER("ROLE_USER");


    private final String authority;

    RoleType(final String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }

}
