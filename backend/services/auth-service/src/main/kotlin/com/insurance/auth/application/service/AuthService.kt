package com.insurance.auth.application.service

import com.insurance.auth.domain.model.AuthRequest
import com.insurance.auth.domain.model.AuthResponse
import com.insurance.auth.infrastructure.persistence.UserRepository
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthService(
    private val authenticationManager: AuthenticationManager,
    private val jwtUtil: JwtUtil,
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {
    fun authenticate(authRequest: AuthRequest): AuthResponse {
        authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(authRequest.username, authRequest.password)
        )

        val token = jwtUtil.generateToken(authRequest.username)
        return AuthResponse(token)
    }
}