# Get fulfillment statusget

This API allows you to retrieve the predefined values for fulfillment statuses.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Basic or OAuth Authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/fulfillmentStatus |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/fulfillmentStatus

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/fulfillmentStatus
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| orgId | Integer | ID of the org. |

| name | String | Name of the status |

| isEnabled | Boolean | Indicates if the status is enabled |

| createdBy | Integer | Identifier of the user who created the status |

| createdOn | Date | Creation date and time of the field in Epoch time format. |

| createdOnDateTime | String | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedBy | Integer | Identifier of the user who last updated the status |

| lastUpdatedOn | Long | Last updated date and time of the field in Epoch time format. |

| lastUpdatedOnDateTime | String | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |



```
[
    {
        "id": 164,
        "orgId": 100737,
        "name": "DELIVERED",
        "isEnabled": true,
        "createdBy": 75154383,
        "createdOn": 1736405355000,
        "createdOnDateTime": "2025-01-09T06:49:15Z",
        "lastUpdatedBy": 75154383,
        "lastUpdatedOn": 1736405355000,
        "lastUpdatedOnDateTime": "2025-01-09T06:49:15Z"
    },
    {
        "id": 163,
        "orgId": 100737,
        "name": "DELIVERING SOON",
        "isEnabled": true,
        "createdBy": 75154383,
        "createdOn": 1736405355000,
        "createdOnDateTime": "2025-01-09T06:49:15Z",
        "lastUpdatedBy": 75154383,
        "lastUpdatedOn": 1736405355000,
        "lastUpdatedOnDateTime": "2025-01-09T06:49:15Z"
    },
    {
        "id": 252,
        "orgId": 100737,
        "name": "it is here",
        "isEnabled": true,
        "createdBy": 75155282,
        "createdOn": 1741934183000,
        "createdOnDateTime": "2025-03-14T06:36:23Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741934183000,
        "lastUpdatedOnDateTime": "2025-03-14T06:36:23Z"
    },
    {
        "id": 253,
        "orgId": 100737,
        "name": "it is here now",
        "isEnabled": true,
        "createdBy": 75155282,
        "createdOn": 1741934783000,
        "createdOnDateTime": "2025-03-14T06:46:23Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741934783000,
        "lastUpdatedOnDateTime": "2025-03-14T06:46:23Z"
    },
    {
        "id": 162,
        "orgId": 100737,
        "name": "ON ITS WAY",
        "isEnabled": true,
        "createdBy": 75154383,
        "createdOn": 1736405355000,
        "createdOnDateTime": "2025-01-09T06:49:15Z",
        "lastUpdatedBy": 75154383,
        "lastUpdatedOn": 1736405355000,
        "lastUpdatedOnDateTime": "2025-01-09T06:49:15Z"
    }
]
```

```
[
    {
        "id": 164,
        "orgId": 100737,
        "name": "DELIVERED",
        "isEnabled": true,
        "createdBy": 75154383,
        "createdOn": 1736405355000,
        "createdOnDateTime": "2025-01-09T06:49:15Z",
        "lastUpdatedBy": 75154383,
        "lastUpdatedOn": 1736405355000,
        "lastUpdatedOnDateTime": "2025-01-09T06:49:15Z"
    },
    {
        "id": 163,
        "orgId": 100737,
        "name": "DELIVERING SOON",
        "isEnabled": true,
        "createdBy": 75154383,
        "createdOn": 1736405355000,
        "createdOnDateTime": "2025-01-09T06:49:15Z",
        "lastUpdatedBy": 75154383,
        "lastUpdatedOn": 1736405355000,
        "lastUpdatedOnDateTime": "2025-01-09T06:49:15Z"
    },
    {
        "id": 252,
        "orgId": 100737,
        "name": "it is here",
        "isEnabled": true,
        "createdBy": 75155282,
        "createdOn": 1741934183000,
        "createdOnDateTime": "2025-03-14T06:36:23Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741934183000,
        "lastUpdatedOnDateTime": "2025-03-14T06:36:23Z"
    },
    {
        "id": 253,
        "orgId": 100737,
        "name": "it is here now",
        "isEnabled": true,
        "createdBy": 75155282,
        "createdOn": 1741934783000,
        "createdOnDateTime": "2025-03-14T06:46:23Z",
        "lastUpdatedBy": 75155282,
        "lastUpdatedOn": 1741934783000,
        "lastUpdatedOnDateTime": "2025-03-14T06:46:23Z"
    },
    {
        "id": 162,
        "orgId": 100737,
        "name": "ON ITS WAY",
        "isEnabled": true,
        "createdBy": 75154383,
        "createdOn": 1736405355000,
        "createdOnDateTime": "2025-01-09T06:49:15Z",
        "lastUpdatedBy": 75154383,
        "lastUpdatedOn": 1736405355000,
        "lastUpdatedOnDateTime": "2025-01-09T06:49:15Z"
    }
]
```

`Try It!`