package com.insurance.claims.application

import com.insurance.claims.domain.Claim
import com.insurance.claims.domain.ClaimStatus
import com.insurance.claims.ports.ClaimRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class ClaimService(private val claimRepository: ClaimRepository) {
    fun createClaim(claim: Claim): Claim = claimRepository.save(claim)
    fun getClaim(id: UUID): Claim? = claimRepository.findById(id)
    fun getAllClaims(): List<Claim> = claimRepository.findAll()
    fun updateClaimStatus(claimId: UUID, status: ClaimStatus): Claim? {
        val claim = claimRepository.findById(claimId) ?: return null
        claim.status = status
        return claimRepository.save(claim)
    }
}