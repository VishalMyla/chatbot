# Update PII deletion statusput

> 📘The API does not allow bulk status change.

## 📘The API does not allow bulk status change.

The API does not allow bulk status change.

# Request

curl:https://<host>/v2/requests

`https://<host>/v2/requests`

# Body parameters

| ParameterParameters marked with * are mandatory. | Type | Description |

| --- | --- | --- |

| type* | string | Type of the data. Only CUSTOMER type is supported. |

| baseType* | string | Type of the operation. In this context, DELETE is the baseType. |

| id* | string | PII deletion request ID. |

| status* | string | PII deletion status that needs to be set. For example, APPROVED, REJECTED and CANCELLED. |

| comments | string | Comments or description for the operation |



# Response

| Parameter | Description |

| --- | --- |

| entityId | Deletion request id. |

| warnings | Displays the warning message |

| result | Indicates whether the update was successful. True-No error, False-error. |

| totalCount | Total requests updated |

| failureCount | Total update requests failed |



`Try It!`