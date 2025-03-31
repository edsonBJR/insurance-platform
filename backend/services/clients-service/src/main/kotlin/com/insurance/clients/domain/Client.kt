package com.insurance.clients.domain

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "clients")
data class Client(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    val id: UUID? = null,
    val name: String,
    val email: String,
    val phone: String
)
