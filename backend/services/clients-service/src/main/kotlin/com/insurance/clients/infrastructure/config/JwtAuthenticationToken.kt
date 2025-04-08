package com.insurance.clients.infrastructure.config

import org.springframework.security.authentication.AbstractAuthenticationToken

class JwtAuthenticationToken(
    private val username: String,
    private val role: String
) : AbstractAuthenticationToken(null) {

    override fun getCredentials(): Any = ""

    override fun getPrincipal(): Any = username
}