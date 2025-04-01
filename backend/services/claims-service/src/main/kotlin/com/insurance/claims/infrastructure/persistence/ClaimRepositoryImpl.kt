package com.insurance.claims.infrastructure.persistence

import com.insurance.claims.domain.Claim
import com.insurance.claims.ports.ClaimRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class ClaimRepositoryImpl(private val jpaClaimRepository: JpaClaimRepository) : ClaimRepository {
    override fun save(claim: Claim): Claim = jpaClaimRepository.save(claim)
    override fun findById(id: UUID): Claim? = jpaClaimRepository.findById(id).orElse(null)
    override fun findAll(): List<Claim> = jpaClaimRepository.findAll()
    override fun deleteById(id: UUID) = jpaClaimRepository.deleteById(id)
}