package com.insurance.auth.infrastructure.web

import com.insurance.auth.domain.model.User
import com.insurance.auth.infrastructure.persistence.UserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserController(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {
    @PostMapping
    fun createUser(@RequestBody request: User): User {
        val newUser = request.copy(password = passwordEncoder.encode(request.password))
        return userRepository.save(newUser)
    }
}