package com.insurance.commissions

import org.springframework.boot.fromApplication
import org.springframework.boot.with


fun main(args: Array<String>) {
	fromApplication<CommissionsApplication>().with(TestcontainersConfiguration::class).run(*args)
}
