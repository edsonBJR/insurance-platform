package com.insurance.clients.infrastructure.persistence

import com.insurance.clients.domain.Client
import com.insurance.clients.ports.ClientRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class ClientRepositoryImpl(private val jpaClientRepository: JpaClientRepository) : ClientRepository {
    override fun save(client: Client): Client = jpaClientRepository.save(client)
    override fun findById(id: UUID): Client? = jpaClientRepository.findById(id).orElse(null)
    override fun findAll(): List<Client> = jpaClientRepository.findAll()
}
