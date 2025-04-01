package com.insurance.payments.infrastructure.persistence

import com.insurance.payments.domain.Payment
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface JpaPaymentRepository : JpaRepository<Payment, UUID>