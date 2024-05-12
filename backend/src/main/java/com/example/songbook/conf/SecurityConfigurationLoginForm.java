package com.example.songbook.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfigurationLoginForm {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    };

    @Bean
    public DefaultSecurityFilterChain filterChain(HttpSecurity http) throws Exception{
      http
              .authorizeHttpRequests(auth ->auth
                      .requestMatchers("/").permitAll()
                      .anyRequest().authenticated()
              )
              .formLogin(login->login
                      .permitAll()
                      .successHandler((request, response, authentication) -> {
                          System.out.println("Works");
                          response.sendRedirect("/secure/path");
                      })
                      .failureHandler((request, response, exception) -> {
                          System.out.println("Not works");
                      }))
              .logout(logout->logout
                      .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                      .permitAll()
              );
      return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(){

        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordEncoder().encode("admin"))
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(admin);
    }
}
