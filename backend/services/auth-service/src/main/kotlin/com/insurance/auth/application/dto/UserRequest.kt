package com.insurance.auth.application.dto

data class UserRequest(
    val username: String,
    val password: String,
    val role: String
)
