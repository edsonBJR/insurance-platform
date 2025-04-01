package com.insurance.payments.ports

import com.insurance.payments.domain.Payment
import java.util.*

interface PaymentRepository {
    fun save(payment: Payment): Payment
    fun findById(id: UUID): Payment?
    fun findAll(): List<Payment>
}