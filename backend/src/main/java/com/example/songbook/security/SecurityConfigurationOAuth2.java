package com.example.songbook.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfigurationOAuth2 {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http.authorizeRequests()
                .requestMatchers("/**")
                .authenticated();

        http.oauth2ResourceServer(s->s.jwt(Customizer.withDefaults()));

        return http.build();
    }

    @Bean
    JwtAuthenticationConverter authenticationConverter(){
        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(source -> {
            Map<String, Map<String,List<String>>> realmAccess = source.getClaim("resource_access");
            List<String> roles = realmAccess.get("songbook").get("roles");

            return roles.stream()
                    .map(s->"ROLE_" + s.toUpperCase())
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toSet());
        });

        return jwtAuthenticationConverter;
    }
}
