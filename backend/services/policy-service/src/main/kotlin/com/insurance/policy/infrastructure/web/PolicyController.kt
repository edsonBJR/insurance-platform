package com.insurance.policy.infrastructure.web


import com.insurance.policy.application.PolicyService
import com.insurance.policy.application.dto.PolicyStatusUpdateRequest
import com.insurance.policy.domain.Policy
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/policies")
class PolicyController(private val policyService: PolicyService) {

    @PostMapping
    fun createPolicy(@RequestBody policy: Policy): Policy = policyService.createPolicy(policy)

    @GetMapping("/{id}")
    fun getPolicy(@PathVariable id: UUID): Policy? = policyService.getPolicy(id)

    @GetMapping
    fun getAllPolicies(): List<Policy> = policyService.getAllPolicies()

    @PatchMapping("/{id}/status")
    fun updatePolicyStatus(
        @PathVariable id: UUID,
        @RequestBody request: PolicyStatusUpdateRequest
    ): ResponseEntity<Policy> {
        val updatedPolicy = policyService.updatePolicyStatus(id, request.status)
        return if (updatedPolicy != null) {
            ResponseEntity.ok(updatedPolicy)
        } else {
            ResponseEntity.notFound().build()
        }
    }
}