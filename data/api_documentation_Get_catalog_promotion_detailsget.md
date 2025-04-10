# Get catalog promotion detailsget

This API is used to get the details of a particular catalog promotion for a particular brand.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/promotion/{promotion Id}/brand/{brand Id} |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/2/brand/1

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/2/brand/1
```

# Request path parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| promotionId* | String | Unique ID of promotion. Ex: 2 |

| brandId* | String | You can use theAPIand retrieve the brand ID of your brand. |



[API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/2/brand/1
```

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/2/brand/1
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| success | Boolean | Indicates if the request was successful |

| code | Integer | Status code |

| message | String | Status message |

| id | Integer | Unique identifier of the promotion |

| name | String | Name of the promotion |

| orgId | Integer | Organization ID associated with the promotion |

| isEnabled | Boolean | Indicates if the promotion is enabled |

| startTime | String | Start time of the promotion |

| startDateTime | String | Start date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| endTime | String | End time of the promotion |

| endDateTime | String | End date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| discountType | String | Type of discount |

| discountValue | Float | Value of the discount |

| lastUpdatedOn | Date | Last updated date and time of the field in Epoch time format |

| createdOn | Date | Creation date and time of the field in Epoch time format |

| lastUpdatedBy | Integer | ID of the user who last updated the promotion |

| createdBy | Integer | ID of the user who created the promotion |

| languageCode | String | Language code |

| name | String | Name of the promotion in specific language |

| description | String | Description in specific language |

| enabled | Boolean | Indicates if the promotion is enabled in this language |

| createdBy | Integer | ID of the user who created the language-specific info |

| createdOn | Date | Creation date and time of the language-specific info inYYYY-MM-DDTHH:MM:SStime format |

| createdOnDateTime | String | Created on date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedBy | Integer | ID of the user who last updated the language-specific info |

| lastUpdateOn | String (DateTime) | Last update date and time of the language-specific info inYYYY-MM-DDTHH:MM:SStime format. |

| lastUpdatedOnDateTime | String | Last updated on date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| customFields | Object | Custom fields associated with the promotion |

| id | Integer | Unique identifier of the reward |

| rewardId | Integer | Specific reward ID |

| promotionId | Integer | Links the reward to the promotion |

| startTime | String (DateTime) | Start time of the reward inYYYY-MM-DDTHH:MM:SSformat. |

| endTime | String (DateTime) | End time of the rewardYYYY-MM-DDTHH:MM:SSformat. |

| endDateTime | String | End date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| expired | Boolean | Indicates if the reward has expired |

| started | Boolean | Indicates if the reward has started |

| intouchPointsPostDiscount | Integer | Points post discount |



`YYYY-MM-DDTHH:MM:SS`

`YYYY-MM-DDTHH:MM:SS`

`YYYY-MM-DDTHH:MM:SS`

`YYYY-MM-DDTHH:MM:SS`

```
{
    "status": {
        "success": true,
        "code": 11008,
        "message": "Catalog promotion fetched successfully."
    },
    "catalogPromotion": {
        "id": 8800,
        "name": "test1",
        "orgId": 100458,
        "isEnabled": true,
        "startTime": "2025-03-14 20:58:49",
        "startDateTime": "2025-03-14T20:58:49Z",
        "endTime": "2025-10-25 05:46:00",
        "endDateTime": "2025-10-25T05:46:00Z",
        "discountType": "ABSOLUTE",
        "discountValue": 1.00,
        "lastUpdatedOn": "2025-03-13 09:48:42",
        "lastUpdatedOnDateTime": "2025-03-13T09:48:42Z",
        "createdOn": "2025-03-13 09:48:42",
        "createdOnDateTime": "2025-03-13T09:48:42Z",
        "lastUpdatedBy": 75140757,
        "createdBy": 75140757,
        "languageSpecificInfo": [
            {
                "languageCode": "en",
                "name": "test1",
                "description": "description",
                "enabled": true,
                "createdBy": 75140757,
                "createdOn": "2025-03-13 09:48:42",
                "createdOnDateTime": "2025-03-13T09:48:42Z",
                "lastUpdatedBy": 75140757,
                "lastUpdateOn": "2025-03-13 09:48:42",
                "lastUpdateOnDateTime": "2025-03-13T09:48:42Z"
            }
        ],
        "customFields": {
            "A": "1",
            "CF1233": "1",
            "EnumCF2": "r1",
            "EnumCF1": "white"
        },
        "rewards": [
            {
                "id": 8799,
                "rewardId": 308795,
                "promotionId": 8800,
                "startTime": "2025-03-14 20:58:49",
                "startDateTime": "2025-03-14T20:58:49Z",
                "endTime": "2025-10-25 05:46:00",
                "endDateTime": "2025-10-25T05:46:00Z",
                "expired": false,
                "started": false,
                "intouchPointsPostDiscount": 99,
                "configId": 3914
            }
        ]
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 11008,
        "message": "Catalog promotion fetched successfully."
    },
    "catalogPromotion": {
        "id": 8800,
        "name": "test1",
        "orgId": 100458,
        "isEnabled": true,
        "startTime": "2025-03-14 20:58:49",
        "startDateTime": "2025-03-14T20:58:49Z",
        "endTime": "2025-10-25 05:46:00",
        "endDateTime": "2025-10-25T05:46:00Z",
        "discountType": "ABSOLUTE",
        "discountValue": 1.00,
        "lastUpdatedOn": "2025-03-13 09:48:42",
        "lastUpdatedOnDateTime": "2025-03-13T09:48:42Z",
        "createdOn": "2025-03-13 09:48:42",
        "createdOnDateTime": "2025-03-13T09:48:42Z",
        "lastUpdatedBy": 75140757,
        "createdBy": 75140757,
        "languageSpecificInfo": [
            {
                "languageCode": "en",
                "name": "test1",
                "description": "description",
                "enabled": true,
                "createdBy": 75140757,
                "createdOn": "2025-03-13 09:48:42",
                "createdOnDateTime": "2025-03-13T09:48:42Z",
                "lastUpdatedBy": 75140757,
                "lastUpdateOn": "2025-03-13 09:48:42",
                "lastUpdateOnDateTime": "2025-03-13T09:48:42Z"
            }
        ],
        "customFields": {
            "A": "1",
            "CF1233": "1",
            "EnumCF2": "r1",
            "EnumCF1": "white"
        },
        "rewards": [
            {
                "id": 8799,
                "rewardId": 308795,
                "promotionId": 8800,
                "startTime": "2025-03-14 20:58:49",
                "startDateTime": "2025-03-14T20:58:49Z",
                "endTime": "2025-10-25 05:46:00",
                "endDateTime": "2025-10-25T05:46:00Z",
                "expired": false,
                "started": false,
                "intouchPointsPostDiscount": 99,
                "configId": 3914
            }
        ]
    }
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 11007 | Catalog promotion not found. |



`Try It!`