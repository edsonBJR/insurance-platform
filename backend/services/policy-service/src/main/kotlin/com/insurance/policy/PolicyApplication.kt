package com.insurance.policy

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.insurance.policies"])
class PoliciesServiceApplication

fun main(args: Array<String>) {
	runApplication<PoliciesServiceApplication>(*args)
}
