package com.insurance.clients

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<ClientsServiceApplication>().with(TestcontainersConfiguration::class).run(*args)
}
