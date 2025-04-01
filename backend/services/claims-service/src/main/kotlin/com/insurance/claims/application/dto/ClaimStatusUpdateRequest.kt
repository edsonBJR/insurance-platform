package com.insurance.claims.application.dto

import com.insurance.claims.domain.ClaimStatus

data class ClaimStatusUpdateRequest(
    val status: ClaimStatus
)
