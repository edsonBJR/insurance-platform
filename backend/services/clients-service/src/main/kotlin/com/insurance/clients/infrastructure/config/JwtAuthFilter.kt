package com.insurance.clients.infrastructure.config

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException

@Component
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

                // Adiciona o usuário ao contexto de segurança (caso precise validar permissões)
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