package com.insurance.auth

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<AuthServiceApplication>().with(TestcontainersConfiguration::class).run(*args)
}
