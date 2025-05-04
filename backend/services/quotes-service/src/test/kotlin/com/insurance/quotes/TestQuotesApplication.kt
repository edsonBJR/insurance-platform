package com.insurance.quotes

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<QuotesApplication>().with(TestcontainersConfiguration::class).run(*args)
}
