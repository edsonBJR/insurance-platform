package com.insurance.auth.application.service

import com.insurance.auth.domain.User
import com.insurance.auth.infrastructure.persistence.UserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {
    fun registerUser(username: String, password: String, role: String): User {
        if (userRepository.findByUsername(username) != null) {
            throw IllegalArgumentException("Usuário já existe")
        }
        val encodedPassword = passwordEncoder.encode(password)
        val newUser = User(username = username, password = encodedPassword, role = role)
        return userRepository.save(newUser)
    }
}