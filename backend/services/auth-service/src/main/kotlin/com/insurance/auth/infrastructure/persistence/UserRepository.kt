package com.insurance.auth.infrastructure.persistence

import com.insurance.auth.domain.model.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface UserRepository : JpaRepository<User, UUID> {
    fun findByUsername(username: String): User?
}