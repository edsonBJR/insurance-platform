package com.insurance.policy.domain

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "policies")
data class Policy(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    val id: UUID? = null,

    val clientId: UUID,
    val policyNumber: String,
    val coverage: String,
    val startDate: String,
    val endDate: String,

    @Enumerated(EnumType.STRING)
    var status: PolicyStatus = PolicyStatus.ATIVA
)