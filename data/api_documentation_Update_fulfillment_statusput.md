# Update fulfillment statusput

This API allows you to update the fulfillment status of a reward.

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

| HTTP Method | PUT |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/fulfillmentStatus

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/fulfillmentStatus
```

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id* | Integer | Unique identifier for the status |

| name* | String | Name of the status |

| isEnabled* | Boolean | Indicates if the status is enabled. By default, isEnabled is set to true. |



```
[
     {
        "id": 3,
        "name": "Order confirmed",
        "isEnabled": true
    },
    {
        "id": 4,
        "name": "On the way",
        "isEnabled": true
    }
]
```

```
[
     {
        "id": 3,
        "name": "Order confirmed",
        "isEnabled": true
    },
    {
        "id": 4,
        "name": "On the way",
        "isEnabled": true
    }
]
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the status |

| orgId | Integer | ID of the org. |

| name | String | Name of the status |

| isEnabled | Boolean | Indicates if the status is enabled. By default, isEnabled is set to true. |

| lastUpdatedBy | Integer | Identifier of the user who last updated the status |

| lastUpdatedOn | Long | Timestamp of when the status was last updated |



```
[
    {
        "id": 3,
        "orgId": 100458,
        "name": "Order confirmed",
        "isEnabled": true,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1741933901042
    },
    {
        "id": 4,
        "orgId": 100458,
        "name": "On the way",
        "isEnabled": true,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1741933901049
    }
]
```

```
[
    {
        "id": 3,
        "orgId": 100458,
        "name": "Order confirmed",
        "isEnabled": true,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1741933901042
    },
    {
        "id": 4,
        "orgId": 100458,
        "name": "On the way",
        "isEnabled": true,
        "lastUpdatedBy": 75130850,
        "lastUpdatedOn": 1741933901049
    }
]
```

`Try It!`