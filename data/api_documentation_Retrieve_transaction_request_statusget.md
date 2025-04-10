# Retrieve transaction request statusget

# API endpoint

curl:https://{host}/v2/requests/{id}

`https://{host}/v2/requests/{id}`

# Request status details

| Action | Request status | Transaction status inMember care /Customer /  Tag transaction |

| --- | --- | --- |

| Capillary receives a transaction request | PENDING | PENDING |

| Capillary rejects transaction request | REJECTED | REJECTED |

| Capillary approves transaction request | SUCCESS | SUCCESS |

| Transaction request failed | FAILURE | FAILURE |



# Response parameters

| Parameter | Description |

| --- | --- |

| type | The type of the transaction, in this case, "TRANSACTION." |

| baseType | The base type of the transaction, in this case, "REGULAR_TXN_ADD." |

| status | The status of the transaction, e.g., "PENDING." |

| transaction | Contains details about the transaction, including delivery status, type, billing date, bill amount, etc. |

| images | An array of objects representing images related to the transaction. |

| customer | Contains information about the customer, including their ID, profiles, identifiers, etc. |

| attribution | Contains attribution details related to the transaction, such as createDate, createdBy, etc. |

| id | The unique request identifier for the transaction. |

| addedOn | The date and time when the transaction was added. |

| userId | The unique identifier for the user associated with the transaction. |

| comments | Additional comments or notes related to the transaction, e.g., "Test." |

| oneStep | A boolean indicating whether the transaction involves a one-step process. |

| warnings | An array that may contain any warnings related to the operation, if applicable. |



`Try It!`