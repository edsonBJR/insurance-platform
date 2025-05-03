package com.insurance.policy.application.dto


import com.insurance.policy.domain.PolicyStatus

data class PolicyStatusUpdateRequest(
    val status: PolicyStatus
)