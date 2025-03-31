package com.insurance.clients.application.dto

import com.insurance.clients.domain.ClientStatus

data class ClientStatusUpdateRequest(
    val status: ClientStatus
)
