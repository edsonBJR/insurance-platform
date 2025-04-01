package com.insurance.payments.application

import com.insurance.payments.domain.Payment
import com.insurance.payments.domain.PaymentStatus
import com.insurance.payments.ports.PaymentRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PaymentService(private val paymentRepository: PaymentRepository) {
    fun createPayment(payment: Payment): Payment = paymentRepository.save(payment)
    fun getPayment(id: UUID): Payment? = paymentRepository.findById(id)
    fun getAllPayments(): List<Payment> = paymentRepository.findAll()
    fun updatePaymentStatus(paymentId: UUID, status: PaymentStatus): Payment? {
        val payment = paymentRepository.findById(paymentId) ?: return null
        payment.status = status
        return paymentRepository.save(payment)
    }
}