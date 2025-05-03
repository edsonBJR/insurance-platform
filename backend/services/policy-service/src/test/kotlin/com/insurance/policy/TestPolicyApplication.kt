package com.insurance.policy

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<PolicyApplication>().with(TestcontainersConfiguration::class).run(*args)
}
