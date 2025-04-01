package com.insurance.claims

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<ClaimsServiceApplication>().with(TestcontainersConfiguration::class).run(*args)
}
