package com.insurance.payments.infrastructure.web

import com.insurance.payments.application.PaymentService
import com.insurance.payments.application.dto.PaymentStatusUpdateRequest
import com.insurance.payments.domain.Payment
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/payments")
class PaymentController(private val paymentService: PaymentService) {
    @PostMapping
    fun createPayment(@RequestBody payment: Payment): Payment = paymentService.createPayment(payment)

    @GetMapping("/{id}")
    fun getPayment(@PathVariable id: UUID): Payment? = paymentService.getPayment(id)

    @GetMapping
    fun getAllPayments(): List<Payment> = paymentService.getAllPayments()

    @PatchMapping("/{id}/status")
    fun updatePaymentStatus(
        @PathVariable id: UUID,
        @RequestBody request: PaymentStatusUpdateRequest
    ): ResponseEntity<Payment> {
        val updatedPayment = paymentService.updatePaymentStatus(id, request.status)
        return if (updatedPayment != null) {
            ResponseEntity.ok(updatedPayment)
        } else {
            ResponseEntity.notFound().build()
        }
    }
}