package com.insurance.payments

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<PaymentsServiceApplication>().with(TestcontainersConfiguration::class).run(*args)
}
