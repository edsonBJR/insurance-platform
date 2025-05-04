package com.insurance.quotes

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class QuotesApplication

fun main(args: Array<String>) {
	runApplication<QuotesApplication>(*args)
}
