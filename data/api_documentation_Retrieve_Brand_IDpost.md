# Retrieve Brand IDpost

This API allows the user to retrieve the Brand ID.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll

# Prerequisites

- Authentication: Basic or OAuth authentication

Authentication: Basic or OAuth authentication

- Default Access group

Default Access group

# Resource Information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/brand/getAll |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Request Body Parameter

| Parameter Name | Type | Description |

| --- | --- | --- |

| orgIds* | int | Unique ID of the org. |



```
{
    "orgIds": [
        100458
    ]
}
```

```
{
    "orgIds": [
        100458
    ]
}
```

# Response Body Parameter

| Parameter | Description |

| --- | --- |

| status | Contains the status of the response |

| success | Indicates if the request was successful |

| code | Response code indicating the status |

| message | Message describing the status |

| brandList | List of brands fetched |

| id | Unique brand identifier. Ex: 1 |

| brand | Name of the Brand |

| enabled | Indicates if the brand is enabled or not |

| orgId | Unique ID of the org associated with the brand |



```
{
    "status": {
        "success": true,
        "code": 3001,
        "message": "Brand fetched successfully"
    },
    "brandList": [
        {
            "id": 1,
            "brand": "BUKL",
            "enabled": true,
            "orgId": 100458
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 3001,
        "message": "Brand fetched successfully"
    },
    "brandList": [
        {
            "id": 1,
            "brand": "BUKL",
            "enabled": true,
            "orgId": 100458
        }
    ]
}
```

`Try It!`