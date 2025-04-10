# Create catalog promotionpost

This API is used to create catalog promotions and link it to a reward.

> 📘NoteA reward can be linked to only one active- running or scheduled promotion.Promotion can be disabled but cannot be re-enabled.

## 📘Note

Note

- A reward can be linked to only one active- running or scheduled promotion.

- Promotion can be disabled but cannot be re-enabled.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.Start time and end time are in UTC zone.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- Start time and end time are in UTC zone.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/promotion/create |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/create

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/create
```

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| startTime* | String | Start date and time of the catalog promotion. Ex: 2024-05-04T20:58:49.000Z (Start time is in UTC zone.) |

| endTime* | String | End date and time of the catalog promotion. Ex: 2025-10-25T05:46Z (End time is in UTC zone.) |

| discountType* | Enum | Type of discount being applied. Supported values: ABSOLUTE, PERCENTAGE, FIXED |

| discountValue* | Integer | Value of the discount. Ex: 1 |

| brandId* | String | You can use theAPIand retrieve the brand ID of your brand. Ex: 1 |

| enabled | Boolean | Indicates if the entry is enabled |

| languageSpecificInfo* | Array | Array containing language-specific information |

| languageCode* | String | Language code |

| name* | String | Name in the specified language |

| description* | String | Description in the specified language |

| enabled* | Boolean | Indicates if the language entry is enabled |

| rewardIds* | Array of Integers | Reward IDs on which catalog promotion will be applied. Ex: 112295 |



[API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)

```
{
    "startTime": "2024-05-04T20:58:49.000Z",
    "endTime": "2025-10-25T05:46Z",
    "discountType": "ABSOLUTE",
    "discountValue": 1,
    "brandId": "1",
    "enabled": true,
    "languageSpecificInfo":
    [
        {
            "languageCode": "en",
            "name": "test1",
            "description": "description",
            "enabled": true
        }
    ],
    "rewardIds":
    [
        112295
    ]
}
```

```
{
    "startTime": "2024-05-04T20:58:49.000Z",
    "endTime": "2025-10-25T05:46Z",
    "discountType": "ABSOLUTE",
    "discountValue": 1,
    "brandId": "1",
    "enabled": true,
    "languageSpecificInfo":
    [
        {
            "languageCode": "en",
            "name": "test1",
            "description": "description",
            "enabled": true
        }
    ],
    "rewardIds":
    [
        112295
    ]
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | Object | Status of the operation |

| success | Boolean | Indicates if the operation was successful |

| code | Integer | Code representing the operation's status |

| message | String | Description of the operation's status |

| catalogPromotion | Object | Contains information about the catalog promotion |

| id | Integer | Unique identifier for the catalog promotion |

| failedRewards | Array | An array of failed rewards. |



```
{
    "status": {
        "success": true,
        "code": 11002,
        "message": "Catalog promotion created successfully."
    },
    "catalogPromotion": {
        "id": 8
    },
    "failedRewards": []
}
```

```
{
    "status": {
        "success": true,
        "code": 11002,
        "message": "Catalog promotion created successfully."
    },
    "catalogPromotion": {
        "id": 8
    },
    "failedRewards": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 11015 | Reward expired or disabled or free. Cannot apply for catalog promotion. |

| 11004 | Reward already linked to active catalog promotion. |



`Try It!`