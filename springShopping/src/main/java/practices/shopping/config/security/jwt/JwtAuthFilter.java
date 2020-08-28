package practices.shopping.config.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import practices.shopping.config.security.model.UserLogin;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

public class JwtAuthFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private JwtConfig jwtConfig;

    public JwtAuthFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        try {
            UserLogin userLogin = new ObjectMapper().readValue(request.getInputStream(), UserLogin.class);
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    userLogin.getUsername(),
                    userLogin.getPassword()
            );

            return authenticationManager.authenticate(authentication);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        String token = Jwts.builder()
                .setSubject(authResult.getName())
                .claim("role", authResult.getAuthorities())
                .setExpiration(new Date(System.currentTimeMillis() + jwtConfig.TOKEN_EXPIRATION))
                .signWith(SignatureAlgorithm.HS512, jwtConfig.SECRET_KEY.getBytes())
                .compact();

        response.addHeader(JwtConfig.HEADER_STRING, jwtConfig.TOKEN_PREFIX + token);

    }
}
