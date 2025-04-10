# Add a PII deletion requestpost

> 👍For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Make sure that PII deletion configuration is enabled. ReferEnable PII deletiondocumentation for more information.

- Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

# Request

Request curl:https://<host>/v2/requests

`https://<host>/v2/requests`

# Body parameters

| Parameter | Type | Description |

| --- | --- | --- |

| type | string | Type of the data. At present, only CUSTOMER is supported. |

| baseType | string | Type of the operation. In this context, DELETE is the operation type. |

| comments | string | Comments or description. The maximum number of supported characters is 255. |

| source | string | Source of customer data |

| identifierType | string | Type of identifier |

| identifierValue | string | Value of the identifier |



# Response

| Parameter | Description |

| --- | --- |

| createdId | The request-id created. |

| warnings | Warnings, if any. |



`Try It!`