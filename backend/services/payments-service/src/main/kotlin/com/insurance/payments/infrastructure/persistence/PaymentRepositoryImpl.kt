package com.insurance.payments.infrastructure.persistence

import com.insurance.payments.domain.Payment
import com.insurance.payments.ports.PaymentRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PaymentRepositoryImpl(private val jpaPaymentRepository: JpaPaymentRepository) : PaymentRepository {
    override fun save(payment: Payment): Payment = jpaPaymentRepository.save(payment)
    override fun findById(id: UUID): Payment? = jpaPaymentRepository.findById(id).orElse(null)
    override fun findAll(): List<Payment> = jpaPaymentRepository.findAll()
}