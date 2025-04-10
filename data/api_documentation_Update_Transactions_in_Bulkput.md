# Update Transactions in Bulkput

This API allows you to update transactions in bulk. You can update the following:

- Loyalty transactions

- Line item level extended fields

- Transactional level extended and custom fields

Note:Other parameters/attributes cannot be updated because transactions are considered immutable (unchangeable). If you need to update an attribute, such as the transaction's bill number, you must first mark the transaction as deleted by setting itsoutlier status to 'DELETED'. Afterwards, re-import or add the transaction with the new bill number or other changes in the attributes.

> 👍NoteFor an overview on our APIs and for hands-on testing, refer toAPI overviewandMake your first API calldocumentation.

## 👍Note

Note

For an overview on our APIs and for hands-on testing, refer toAPI overviewandMake your first API calldocumentation.

# Prerequisites

- Basic or OAuth credentials

- Access toTransaction resource

# Resource information

|  |  |

| --- | --- |

| URI | v2/transactions/bulk |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

'https://eu.api.capillarytech.com/v2/transactions/bulk'

# Request body parameters

| Parameter(Parameters marked * are mandatory) | Data Type | Description |

| --- | --- | --- |

| identifierType* | String | Customer identifier type. Supported values:mobile, email, externalId, id, cardnumber, cardExternalId |

| identifierValue* | String | Value for the identifier |

| source* | String | Customer registration source. |

| id* | Integer | Unique identifier for the transaction. This is internally generated during the addition of a transaction. |

| extendedFields | Object | Extended fields with the values that need to be updated. |

| customFields | Object | Custom fields with the values that need to be updated. |

| lineItems | Array of Objects | List of items in the transaction. |

| - itemCode | String | Item code for the item in the transaction. You can also use line itemid. The ID is internally generated during the addition of a transaction. |

| - extendedFields (item level) | Object | Line item level extended fields and the values that need to be updated. |



```
mobile, email, externalId, id, cardnumber, cardExternalId
```

`id`

```
[
    {
        "identifierType": "mobile",
        "identifierValue": "9199860005816",
        "source": "INSTORE",
        "id": 873552027,
        "extendedFields": {
            "ship_first_name": "SamUpdated",
            "ship_last_name": "SundarUpdated"
        },
        "customFields": {
            "feedback": "niceUpdated",
            "store_experience": "abcUpdated"
        },
        "lineItems": [
            {
                "itemCode": "sku_486741_2",
                "extendedFields": {
                    "MetalRate": "100000",
                    "GrossWeight": "100000.50"
                }
            }
        ]
    },
    {
        "identifierType": "mobile",
        "identifierValue": "9199860002585",
        "source": "INSTORE",
        "id": 873552028,
        "extendedFields": {
            "ship_first_name": "22000.02",
            "ship_last_name": "10000.50"
        },
        "customFields": {
            "feedback": "abcUpdated"
        },
        "lineItems": [
            {
                "itemCode": "sku_486741_2",
                "extendedFields": {
                    "MetalRate": "100000",
                    "GrossWeight": "10000.50"
                }
            }
        ]
    }
]
```

```
[
    {
        "identifierType": "mobile",
        "identifierValue": "9199860005816",
        "source": "INSTORE",
        "id": 873552027,
        "extendedFields": {
            "ship_first_name": "SamUpdated",
            "ship_last_name": "SundarUpdated"
        },
        "customFields": {
            "feedback": "niceUpdated",
            "store_experience": "abcUpdated"
        },
        "lineItems": [
            {
                "itemCode": "sku_486741_2",
                "extendedFields": {
                    "MetalRate": "100000",
                    "GrossWeight": "100000.50"
                }
            }
        ]
    },
    {
        "identifierType": "mobile",
        "identifierValue": "9199860002585",
        "source": "INSTORE",
        "id": 873552028,
        "extendedFields": {
            "ship_first_name": "22000.02",
            "ship_last_name": "10000.50"
        },
        "customFields": {
            "feedback": "abcUpdated"
        },
        "lineItems": [
            {
                "itemCode": "sku_486741_2",
                "extendedFields": {
                    "MetalRate": "100000",
                    "GrossWeight": "10000.50"
                }
            }
        ]
    }
]
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the transaction. |

| customFields | Object | Contains key-value pairs for custom fields. |

| extendedFields | Object | Contains key-value pairs for extended fields. |

| identifierType | String | The type of identifier used. |

| identifierValue | String | The value of the identifier. |

| source | String | The source of the transaction, e.g., "INSTORE". |

| lineItems | Array of Objects | List of items in the transaction. |

| itemCode | String | The code for the item in the transaction. |

| extendedFields (item level) | Object | Contains key-value pairs for extended fields specific to the line item. |

| errors | Array | List of errors encountered during the processing of the transaction, if any. |

| warnings | Array | List of warnings encountered during the processing of the transaction, if any. |

| totalCount | Integer | The total number of transactions updated. |

| failureCount | Integer | The number of transactions that failed to update. |



```
{
    "response": [
        {
            "result": {
                "id": 873552027,
                "customFields": {
                    "feedback": "niceUpdated",
                    "store_experience": "abcUpdated"
                },
                "extendedFields": {
                    "ship_first_name": "SamUpdated",
                    "ship_last_name": "SundarUpdated"
                },
                "identifierType": "mobile",
                "identifierValue": "919986000586",
                "source": "INSTORE",
                "lineItems": [
                    {
                        "itemCode": "sku_486741_2",
                        "extendedFields": {
                            "GrossWeight": 100000.5,
                            "MetalRate": 100000
                        }
                    }
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "id": 873552028,
                "customFields": {
                    "feedback": "abcUpdated"
                },
                "extendedFields": {
                    "ship_first_name": "22000.02",
                    "ship_last_name": "10000.50"
                },
                "identifierType": "mobile",
                "identifierValue": "919986000585",
                "source": "INSTORE",
                "lineItems": [
                    {
                        "itemCode": "sku_486741_2",
                        "extendedFields": {
                            "GrossWeight": 10000.5,
                            "MetalRate": 100000
                        }
                    }
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "id": 873552027,
                "customFields": {
                    "feedback": "niceUpdated",
                    "store_experience": "abcUpdated"
                },
                "extendedFields": {
                    "ship_first_name": "SamUpdated",
                    "ship_last_name": "SundarUpdated"
                },
                "identifierType": "mobile",
                "identifierValue": "919986000586",
                "source": "INSTORE",
                "lineItems": [
                    {
                        "itemCode": "sku_486741_2",
                        "extendedFields": {
                            "GrossWeight": 100000.5,
                            "MetalRate": 100000
                        }
                    }
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "id": 873552028,
                "customFields": {
                    "feedback": "abcUpdated"
                },
                "extendedFields": {
                    "ship_first_name": "22000.02",
                    "ship_last_name": "10000.50"
                },
                "identifierType": "mobile",
                "identifierValue": "919986000585",
                "source": "INSTORE",
                "lineItems": [
                    {
                        "itemCode": "sku_486741_2",
                        "extendedFields": {
                            "GrossWeight": 10000.5,
                            "MetalRate": 100000
                        }
                    }
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

# Error codes

| Error code | Description |

| --- | --- |

| 8084 | Customer details are not present. Make sure that valid customer identifiers are added. |



# FAQs

1. Can I update return transactions?No, only regular transactions can be updated.

2. Can I update payment modes and attributes in a transaction?No, payment modes and attributes cannot be updated.

3. Is it possible to update the outlier status at the line item and transaction level?No, the outlier status at both the line item and transaction level cannot be updated.

4. Can I update the bill date and number in a transaction?No, the bill date and number cannot be updated once the transaction has been recorded. If you need to update an attribute, such as the transaction's bill number or date, you must first mark the transaction as deleted by setting itsoutlier status to 'DELETED'. Afterwards, re-import or add the transaction with the new bill number and date.

5. What fields can be updated in a transaction?You can update line-level extended fields and transaction-level custom fields and extended fields.

6. What happens if there are two or more transactions with the same bill number?If there are multiple transactions with the same bill number, the transaction first added is updated. It is recommended to use the unique transaction ID for updates.

7. Can we update non-loyalty transactions?No, updates to non-loyalty transactions are not supported.

8. Can I use this API in Connect+?Yes. You can change the API endpoint in theAdd transaction templateand use it.

`Try It!`