package com.insurance.auth.infrastructure.web

import com.insurance.auth.application.service.AuthService
import com.insurance.auth.domain.model.AuthRequest
import com.insurance.auth.domain.model.AuthResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/login")
    fun login(@RequestBody request: AuthRequest): ResponseEntity<AuthResponse> {
        val token = authService.authenticate(request.username, request.password)
        return ResponseEntity.ok(AuthResponse(token))
    }
}