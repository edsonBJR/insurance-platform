package com.insurance.clients.infrastructure.persistence

import com.insurance.clients.domain.Client
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface JpaClientRepository : JpaRepository<Client, UUID>