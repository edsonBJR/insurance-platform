package com.insurance.claims.infrastructure.persistence

import com.insurance.claims.domain.Claim
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface JpaClaimRepository : JpaRepository<Claim, UUID>