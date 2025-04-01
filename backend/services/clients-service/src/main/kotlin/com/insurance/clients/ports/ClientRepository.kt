package com.insurance.clients.ports

import com.insurance.clients.domain.Client
import java.util.*

interface ClientRepository {
    fun save(client: Client): Client
    fun findById(id: UUID): Client?
    fun findAll(): List<Client>
}