package com.insurance.policy.application

import com.insurance.policy.domain.Policy
import com.insurance.policy.domain.PolicyStatus
import com.insurance.policy.infrastructure.ports.PolicyRepository
import org.springframework.stereotype.Service
import java.util.UUID


@Service
class PolicyService(private val policyRepository: PolicyRepository) {
    fun createPolicy(policy: Policy): Policy = policyRepository.save(policy)
    fun getPolicy(id: UUID): Policy? = policyRepository.findById(id)
    fun getAllPolicies(): List<Policy> = policyRepository.findAll()
    fun updatePolicyStatus(policyId: UUID, status: PolicyStatus): Policy? {
        val policy = policyRepository.findById(policyId) ?: return null
        policy.status = status
        return policyRepository.save(policy)
    }
}