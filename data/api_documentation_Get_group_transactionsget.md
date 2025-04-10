# Get group transactionsget

> 📘It is mandatory to have atleast one identifier, id or externalId

## 📘It is mandatory to have atleast one identifier, id or externalId

It is mandatory to have atleast one identifier, id or externalId

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

{host}/v2/userGroup2/transactions?{query parameters}

# Query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| type | enum[REGULAR, RETURN] | Type of the transaction to retrieve. |

| id | int | Unique ID of the user group to fetch transactions. |

| externalId | string | External ID of the group. |

| primaryUserId | string | User ID of the primary member of the group. |

| identifierName | enum[mobile, email, externalId] | Identifier used for the primary user of the group. Required to get transactions of the group member. |

| identifierValue | string | Value of the specified identifier type. |

| source | enum[FACEBOOK, WEB_ENGAGE, ...] | Source in which the identifier is available. |

| accountId | string | Account ID for sources with multiple accounts such as FACEBOOK, WEBENGAGE, WHATSAPP. |

| transactionId | int | Fetch details of a specific transaction by transaction ID. |

| billNumber | string | Fetch details of a specific transaction by bill number. |

| customerId | long | Unique ID of the group member to fetch group transactions made by the customer. |

| startDate | datetime | Filter results where transaction_date >= startDate. Pass ISO standard date format. |

| endDate | string | Filter results where transaction_date < end_date. Pass ISO standard date format. |

| embed | enum[EXTENDEDFIELDS, ...] | Additional details to be fetched. |

| getDataForAllPrograms | boolean | Pass true to fetch transactions across all programs data (future use case). |

| offset | int | Offset of the first entry in the result. This should be positive. |

| limit | int (20) | Maximum number of results to show. |

| order | enum[ACS, DESC] (DESC) | Arranges the transactions based on the value set in sort in an ascending (asc) or descending order (desc). |

| creditNotes | boolean | Pass true to fetch credit notes details. |

| roles | string | Roles associated with the user. |



# Response parameters

| Parameter | Description |

| --- | --- |

| useDefaultFleetGroup | Indicates if the default fleet group is used. |

| loyaltiesPointDetails | Details about loyalty points earned. |

| billPointsBreakup | Breakdown of points earned on the bill. |

| billDetails | Details about the bill. |

| source | Source where the transaction originated. |

| addWithLocalCurrency | Indicates if the transaction was added with local currency. |

| async | Indicates if the transaction was performed asynchronously. |

| useV2 | Indicates if version 2 of the transaction was used. |

| simulation | Indicates if the transaction was a simulation. |

| customerId | Unique ID of the customer associated with the transaction. |

| id | Unique ID of the transaction. |

| outlierStatus | Status of the transaction's outlier. |

| type | Type of the transaction (REGULAR). |

| lifeTimePurchases | Total lifetime purchases for the customer. |

| ignorePoints | Indicates if points were ignored for the transaction. |

| autoUpdateTime | Time when the transaction was automatically updated. |

| transactionEventStatus | Status of the transaction event (PROCESSING_COMPLETE). |

| basketSize | Size of the basket (items in the transaction). |

| retroTxn | Indicates if the transaction is retroactive. |

| warnings | Any warnings associated with the transaction. |

| errors | Any errors that occurred during the transaction process. |



Please note that the response contains an array of transaction objects, so the table above describes the parameters within each individual transaction object.

`Try It!`