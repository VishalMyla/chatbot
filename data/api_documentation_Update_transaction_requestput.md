# Update transaction requestput

# API endpoint

curl: `https://{host}/v2/requests

# Request body parameters

> 📘This API is to update transaction request only. For updating regular transaction, seeUpdate regular transaction API.

## 📘This API is to update transaction request only. For updating regular transaction, seeUpdate regular transaction API.

This API is to update transaction request only. For updating regular transaction, seeUpdate regular transaction API.

You can update the request to the below statuses:

- APPROVED - To approve the status.

- REJECTED - To reject the status.

- CUSTOM - This can be used as an interim status.

| Parameter | Type | Description |

| --- | --- | --- |

| type | String | The type of the transaction, in this case, "TRANSACTION." |

| baseType | String | The base type of the transaction, in this case, "REGULAR_TXN_ADD." |

| id | Number | The unique identifier for the transaction, e.g., 1031558. |

| status | String | The status of the transaction, e.g., "APPROVED", "REJECTED" or "CUSTOM" |

| comments | String | Additional comments or notes related to the transaction, e.g., "Test." |



> ❗️You cannot approve a status that is inREJECTEDstatus. To approve a request that is rejected, change the status toPENDINGand then change it toAPPROVED.

## ❗️You cannot approve a status that is inREJECTEDstatus. To approve a request that is rejected, change the status toPENDINGand then change it toAPPROVED.

You cannot approve a status that is inREJECTEDstatus. To approve a request that is rejected, change the status toPENDINGand then change it toAPPROVED.

`REJECTED`

`PENDING`

`APPROVED`

# Response parameters

| Parameter | Description |

| --- | --- |

| entityId | Transaction request id. |

| warnings | Displays the warning message |

| result | Indicates whether the update was successful. True-No error, False-error. |

| totalCount | Total requests updated |

| failureCount | Total update requests failed |



`Try It!`