package com.insurance.claims.ports

import com.insurance.claims.domain.Claim
import java.util.*

interface ClaimRepository {
    fun save(claim: Claim): Claim
    fun findById(id: UUID): Claim?
    fun findAll(): List<Claim>
    fun deleteById(id: UUID)
}