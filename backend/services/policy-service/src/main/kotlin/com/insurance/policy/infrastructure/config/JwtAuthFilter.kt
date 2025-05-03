package com.insurance.policy.infrastructure.config

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException

class JwtAuthFilter : OncePerRequestFilter() {

    private val secretKey = "minhaChaveSecretaSuperSeguraComMaisDe32Caracteres"

    @Throws(IOException::class, ServletException::class)
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val token = request.getHeader("Authorization")?.replace("Bearer ", "")

        if (!token.isNullOrEmpty()) {
            try {
                val claims = Jwts.parserBuilder()
                    .setSigningKey(Keys.hmacShaKeyFor(secretKey.toByteArray()))
                    .build()
                    .parseClaimsJws(token)
                    .body

                val authentication = JwtAuthenticationToken(claims.subject, claims["role"] as String)
                SecurityContextHolder.getContext().authentication = authentication

            } catch (e: Exception) {
                response.status = HttpServletResponse.SC_UNAUTHORIZED
                response.writer.write("Token inválido")
                return
            }
        }

        filterChain.doFilter(request, response)
    }
}