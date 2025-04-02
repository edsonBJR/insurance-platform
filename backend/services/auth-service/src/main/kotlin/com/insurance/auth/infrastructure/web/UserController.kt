package com.insurance.auth.infrastructure.web

import com.insurance.auth.application.dto.UserRequest
import com.insurance.auth.application.service.UserService
import com.insurance.auth.domain.User
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserController(private val userService: UserService) {

    @PostMapping
    fun registerUser(@RequestBody request: UserRequest): ResponseEntity<User> {
        val newUser = userService.registerUser(request.username, request.password, request.role)
        return ResponseEntity.ok(newUser)
    }
}