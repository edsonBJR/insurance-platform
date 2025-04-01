package com.insurance.claims

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.insurance.claims"])
class ClaimsServiceApplication

fun main(args: Array<String>) {
	runApplication<ClaimsServiceApplication>(*args)
}
