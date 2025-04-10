# Add transaction requestpost

# API endpoint

curl:https://{host}/v2/requests

# Request body parameters

| Parameter | Type | Description |

| --- | --- | --- |

| type | String | The type of the transaction, in this case, "TRANSACTION." |

| baseType | String | The base type of the transaction, in this case, "REGULAR_TXN_ADD." |

| customerIdentificationInfo | Object | Contains customer identification information, including the identifier type (externalId), identifier value, and source (INSTORE). |

| transaction | Object | Contains details about the transaction, such as type, billing date, bill number, discounts, bill amount, gross amount, delivery status, payment modes, custom fields, and line items. |

| type | String | The type of the transaction, in this case, "REGULAR." |

| billingDate | String | The billing date in ISO 8601 format, e.g., "2022-12-13T11:58:18+05:30." |

| billNumber | String | The bill number associated with the transaction, e.g., "4113641." |

| discount | String | The discount amount, e.g., "0." |

| billAmount | String | The total bill amount, e.g., "21." |

| note | String | Additional notes or comments for the transaction, if any. |

| grossAmount | String | The gross amount of the transaction, e.g., "21." |

| deliveryStatus | String | The delivery status of the transaction, e.g., "SHIPPED." |

| paymentModes | Array | An array of objects containing details about the payment modes used in the transaction. |

| customFields | Object | Contains custom fields related to the transaction, e.g., "paymentmode," "vendor_name," and "added_on." |

| lineItemsV2 | Array | An array of objects containing details about individual line items in the transaction, including item codes, descriptions, amounts, rates, quantities, and discounts. |

| images | Array | An array of objects representing images related to the transaction, including file names, serial numbers, namespaces, and providers. |



# Response

| Parameter | Description |

| --- | --- |

| createdId | Transaction request id |

| warnings | Warnings, if any. |



`Try It!`