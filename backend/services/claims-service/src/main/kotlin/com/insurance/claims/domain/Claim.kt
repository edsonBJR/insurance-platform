package com.insurance.claims.domain

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*

@Entity
@Table(name = "claims")
data class Claim(

    @Id
    @GeneratedValue
    val id: UUID? = null,

    @Column(name = "apolice_id", nullable = false)
    val apoliceId: UUID,

    @Column(nullable = false, columnDefinition = "TEXT")
    val descricao: String,

    @Column(name = "data_ocorrencia", nullable = false)
    val dataOcorrencia: LocalDate,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var status: ClaimStatus = ClaimStatus.EM_ANALISE,

    @Column(name = "valor_reembolso")
    val valorReembolso: BigDecimal? = null,

    @Column(name = "created_at", updatable = false)
    val createdAt: LocalDateTime = LocalDateTime.now()
)
