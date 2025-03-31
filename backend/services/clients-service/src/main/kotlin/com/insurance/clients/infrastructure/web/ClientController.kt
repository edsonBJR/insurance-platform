package com.insurance.clients.infrastructure.web

import com.insurance.clients.application.ClientService
import com.insurance.clients.domain.Client
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/clients")
class ClientController(private val clientService: ClientService) {
    @PostMapping
    fun createClient(@RequestBody client: Client): Client = clientService.createClient(client)

    @GetMapping("/{id}")
    fun getClient(@PathVariable id: UUID): Client? = clientService.getClient(id)

    @GetMapping
    fun getAllClients(): List<Client> = clientService.getAllClients()

    @DeleteMapping("/{id}")
    fun deleteClient(@PathVariable id: UUID) = clientService.deleteClient(id)
}