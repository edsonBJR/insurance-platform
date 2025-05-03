package com.insurance.policy.infrastructure.persistence

import com.insurance.policy.domain.Policy
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface JpaPolicyRepository : JpaRepository<Policy, UUID>