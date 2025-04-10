# Retrieve  transaction request detailsget

# API endpoint

https://{host}/v2/requests?{queryparameters}

Example:https://apac.api.capillarytech.com/v2/requests?requestType=TRANSACTION&requestSubType=REGULAR_TXN_ADD&STATUS=PENDING

```
https://apac.api.capillarytech.com/v2/requests?requestType=TRANSACTION&requestSubType=REGULAR_TXN_ADD&STATUS=PENDING
```

# Query parameters

| Parameter | Description |

| --- | --- |

| requestType* | Type of request. In this case, it should be set to "TRANSACTION". |

| requestSubType* | Subtype of the request. In this case, it should be set to "REGULAR_TXN_ADD". |

| limit | Number of results. For example, setting it to 10 retrieves the first 10 rows of data. |

| offset | Defines the number of rows to skip from the beginning of the results. |

| sort | Sorts the results based on either "ADDED_ON" or "LAST_UPDATED_ON". |

| order | Sorts the data in either "ascending" or "descending" order. |

| status | Filters the data by its status. Possible values are "PENDING", "REJECTED", "APPROVED", "SUCCESS", or "FAILURE". |

| Customer identification | Customer identification parameters such as source, account id, identifiers etc. |

| start_date | Pass the date range in ISO standard - yyyy-mm-ddThh:mm:ss.s+z. |

| end_date | Pass the date range in ISO standard - yyyy-mm-ddThh:mm:ss.s+z. |



Note: The parameters marked with an asterisk (*) indicate that they are mandatory and must be provided in the API request.

# Response parameters

| Parameter | Description |

| --- | --- |

| type | Type of request. In this case, it is "TRANSACTION". |

| baseType | Subtype of the request. In this case, it is "REGULAR_TXN_ADD". |

| status | Status of the transaction. In this case, it is "PENDING". |

| checkin_date | Date and time of check-in for the transaction. |

| checkout_date | Date and time of check-out for the transaction. |

| ship_first_name | First name of the shipping recipient. |

| ship_last_name | Last name of the shipping recipient. |

| deliveryStatus | Current delivery status of the transaction. |

| type | Type of transaction. In this case, it is "REGULAR". |

| billAmount | Total bill amount for the transaction. |

| billNumber | Bill number associated with the transaction. |

| discount | Discount amount applied to the transaction. |

| grossAmount | Gross amount of the transaction. |

| note | Additional notes or comments related to the transaction. |

| lineItemsV2 | Array containing details of individual line items in the transaction. |

| paymentmode | Payment mode used for the transaction. In this case, it is "cash". |

| userGroup2Id | Identifier for the second user group. |

| userGroup2ExternalId | External identifier for the second user group. |

| userGroup2PrimaryUserId | Primary user ID associated with the second user group. |

| isUseDefaultUserGroup2 | Boolean value indicating if the default user group is used for the second user group. |

| paymentModes | Array containing details of payment modes used for the transaction. |

| billingDate | Date and time of billing for the transaction. |

| customer | Object containing customer information for the transaction. |

| attribution | Object containing details about the creation and modification of the transaction. |

| id | Unique request identifier for the transaction request. |

| addedOn | Date and time when the transaction was added. |

| userId | User ID associated with the transaction. |

| comments | Comments or description related to the transaction. |

| oneStep | Boolean value indicating if the transaction is a one-step process. |



Please note that some parameters have sub-fields, such as "extendedFields" and "paymentModes," which contain additional details. These can be represented in the table as needed.

`Try It!`