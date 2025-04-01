package com.insurance.payments.application.dto

import com.insurance.payments.domain.PaymentStatus

data class PaymentStatusUpdateRequest(
    val status: PaymentStatus
)
