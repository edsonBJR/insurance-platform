package com.insurance.auth.infrastructure.web

import com.insurance.auth.application.dto.AuthRequest
import com.insurance.auth.application.dto.AuthResponse
import com.insurance.auth.application.service.AuthService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/login")
    fun login(@RequestBody authRequest: AuthRequest): ResponseEntity<AuthResponse> {
        val token = authService.authenticate(authRequest.username, authRequest.password)
        return ResponseEntity.ok(AuthResponse(token))
    }
}