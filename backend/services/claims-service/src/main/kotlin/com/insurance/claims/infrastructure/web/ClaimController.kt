package com.insurance.claims.infrastructure.web

import com.insurance.claims.application.ClaimService
import com.insurance.claims.application.dto.ClaimStatusUpdateRequest
import com.insurance.claims.domain.Claim
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/claims")
class ClaimController(private val claimService: ClaimService) {
    @PostMapping
    fun createClaim(@RequestBody claim: Claim): Claim = claimService.createClaim(claim)

    @GetMapping("/{id}")
    fun getClaim(@PathVariable id: UUID): Claim? = claimService.getClaim(id)

    @GetMapping
    fun getAllClaims(): List<Claim> = claimService.getAllClaims()

    @PatchMapping("/{id}/status")
    fun updateClaimStatus(
        @PathVariable id: UUID,
        @RequestBody request: ClaimStatusUpdateRequest
    ): ResponseEntity<Claim> {
        val updatedClaim = claimService.updateClaimStatus(id, request.status)
        return if (updatedClaim!= null) {
            ResponseEntity.ok(updatedClaim)
        } else {
            ResponseEntity.notFound().build()
        }
    }
}