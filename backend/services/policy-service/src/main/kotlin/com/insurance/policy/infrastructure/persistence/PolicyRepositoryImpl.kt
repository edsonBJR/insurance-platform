package com.insurance.policy.infrastructure.persistence


import com.insurance.policy.domain.Policy
import com.insurance.policy.infrastructure.ports.PolicyRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PolicyRepositoryImpl(private val jpaPolicyRepository: JpaPolicyRepository) : PolicyRepository {
    override fun save(policy: Policy): Policy = jpaPolicyRepository.save(policy)
    override fun findById(id: UUID): Policy? = jpaPolicyRepository.findById(id).orElse(null)
    override fun findAll(): List<Policy> = jpaPolicyRepository.findAll()
}