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
    private val userRepository: UserRepository,
    private val jwtUtil: JwtUtil,
    private val authenticationManager: AuthenticationManager
) {
    fun authenticate(username: String, password: String): String {
        authenticationManager.authenticate(UsernamePasswordAuthenticationToken(username, password))
        val user = userRepository.findByUsername(username) ?: throw IllegalArgumentException("Usuário não encontrado")
        return jwtUtil.generateToken(user.username, user.role.name)
    }
}