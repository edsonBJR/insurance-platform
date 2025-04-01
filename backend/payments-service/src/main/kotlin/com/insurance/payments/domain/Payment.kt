package com.insurance.payments.domain

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDateTime
import java.util.*

@Entity
@Table(name = "payments")
data class Payment(
    @Id
    @GeneratedValue
    val id: UUID? = null,

    @Column(name = "apolice_id", nullable = false)
    val apoliceId: UUID,

    @Column(nullable = false)
    val valor: BigDecimal,

    @Column(name = "data_pagamento", nullable = false)
    val dataPagamento: LocalDateTime = LocalDateTime.now(),

    @Enumerated(EnumType.STRING)
    @Column(name = "metodo_pagamento", nullable = false)
    var metodoPagamento: PaymentMethod,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var status: PaymentStatus
)