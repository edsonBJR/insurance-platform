package com.insurance.clients.application

import com.insurance.clients.domain.Client
import com.insurance.clients.domain.ClientStatus
import com.insurance.clients.ports.ClientRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class ClientService(private val clientRepository: ClientRepository) {
    fun createClient(client: Client): Client = clientRepository.save(client)
    fun getClient(id: UUID): Client? = clientRepository.findById(id)
    fun getAllClients(): List<Client> = clientRepository.findAll()
    fun updateClientStatus(clientId: UUID, status: ClientStatus): Client? {
        val client = clientRepository.findById(clientId) ?: return null
        client.status = status
        return clientRepository.save(client)
    }
}