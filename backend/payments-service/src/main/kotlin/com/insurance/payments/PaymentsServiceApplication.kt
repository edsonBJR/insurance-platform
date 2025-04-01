package com.insurance.payments

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.insurance.payments"])
class PaymentsServiceApplication

fun main(args: Array<String>) {
	runApplication<PaymentsServiceApplication>(*args)
}
