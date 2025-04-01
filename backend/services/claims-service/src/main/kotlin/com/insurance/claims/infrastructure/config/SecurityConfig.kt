package com.insurance.claims.infrastructure.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain

@Configuration
@Profile("dev") // Esta configuração só será aplicada quando o perfil 'dev' estiver ativo
class SecurityConfig {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .authorizeHttpRequests { auth -> auth.anyRequest().permitAll() }
            .csrf { csrf -> csrf.disable() } // Desativa proteção CSRF para facilitar os testes
            .headers { headers -> headers.frameOptions().disable() } // Permite acessar o H2 Console
        return http.build()
    }
}