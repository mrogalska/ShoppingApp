package practices.shopping.config.security.jwt;

public class JwtConfig {

    public static final String SECRET_KEY = "A773C4A747C8EF8690738537128973A31E8415205958EF20B3F6017DFA9E8921";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final int TOKEN_EXPIRATION = 360_000_000;
    public static final String HEADER_STRING = "Authorization";


}