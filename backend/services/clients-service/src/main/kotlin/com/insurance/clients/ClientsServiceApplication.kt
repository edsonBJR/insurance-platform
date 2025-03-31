package com.insurance.clients

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.insurance.clients"])
class ClientsServiceApplication

fun main(args: Array<String>) {
	runApplication<ClientsServiceApplication>(*args)
}
