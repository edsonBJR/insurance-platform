package com.insurance.policy.infrastructure.ports

import com.insurance.policy.domain.Policy
import java.util.*

interface PolicyRepository {
    fun save(policy: Policy): Policy
    fun findById(id: UUID): Policy?
    fun findAll(): List<Policy>
}