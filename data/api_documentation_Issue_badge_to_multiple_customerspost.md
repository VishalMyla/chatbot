# Issue badge to multiple customerspost

This API allows you to issue badges to multiple customers at once.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/earnBulk

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/earnBulk
```

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/v1/badges/customer/earnBulk |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# Request body parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier ("id") generated during the badge creation. |

| customerIds* | Array | A list of unique identifiers for customers. To issue bulk badges, pass multiple customerId in an array. |

| requestId | String | Enter a unique identifier to identify the request. |

| triggeredBy | Object | Object containing information about the trigger source for the badge issue. |

| - ownerType* | Enum | The module for which the badge is being issued.Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| earnEvenrDate | Date | The date on which the customer performed the activity. Earn event date has to be between the badge start date and end date if it is a direct earn type of badge and it has to be between the badge issual start date and end date if it is an issue & earn type of badge.You can also enter a past date. This can be used to issue a badge against an older transaction. |

| - referenceId* | String | Enter a unique identifier to identify the owner (ownerType). The referenceId passed here should be the same as the referenceId in theclaim badge API. |



[claim badge API](/reference/claim-badge)

```
{
    "badgeMetaId": "653de334b3cda7078c7c68eb",
    "customerIds": [
  62090013,553162563
    ],
    "requestId": "1234",
  	"earnEventDate":"2023-11-03T21:51:00.192Z",
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "123457"
    }
}
```

```
{
    "badgeMetaId": "653de334b3cda7078c7c68eb",
    "customerIds": [
  62090013,553162563
    ],
    "requestId": "1234",
  	"earnEventDate":"2023-11-03T21:51:00.192Z",
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "123457"
    }
}
```

# Response parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| data | Object | The main container for the badge issue details. |

| - badgeMetaId | String | Unique identifier ("id") generated during the badge creation. |

| - triggeredBy | Object | Object containing information about the trigger source for the badge issue. |

| -- ownerType | Enum | The module for which the badge is being issued.Supported values: LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES. |

| -- referenceId | String | A unique identifier to identify the owner (ownerType). |

| - expiresOn | Date | Unix timestamp indicating when the badge issuance expires. |

| - issuedBadges | Array | A list of objects each representing a badge issued to a customer. |

| -- customerId | Integer | Unique identifier for the customer who received the badge. |

| -- issuedId | String | A Unique identifier representing the specific issuance instance of the badge. |

| -- status | Enum | Indicates the current state of the badge. Supported values:LIVE: The badge is currently available for redemption.UPCOMING: The badge will be available in the future.EXPIRED: The badgeis no longer available. |

| - requestId | String | A unique identifier to identify the request. |

| errors | Array | A list of any errors that occurred. |

| warnings | Array | A list of warnings. |



```
{
    "data": {
        "badgeMetaId": "653de334b3cda7078c7c68eb",
        "triggeredBy": {
            "ownerType": "Loyalty",
            "referenceId": "123457"
        },
        "expiresOn": 1717935013.121711000,
        "issuedBadges": [
            {
                "customerId": 553162563,
                "issuedId": "661681a535bc684e9e72553a",
                "status": "EXPIRED"
            },
            {
                "customerId": 62090013,
                "issuedId": "661681a535bc684e9e72553b",
                "status": "LIVE"
            }
        ],
        "requestId": "1234"
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "653de334b3cda7078c7c68eb",
        "triggeredBy": {
            "ownerType": "Loyalty",
            "referenceId": "123457"
        },
        "expiresOn": 1717935013.121711000,
        "issuedBadges": [
            {
                "customerId": 553162563,
                "issuedId": "661681a535bc684e9e72553a",
                "status": "EXPIRED"
            },
            {
                "customerId": 62090013,
                "issuedId": "661681a535bc684e9e72553b",
                "status": "LIVE"
            }
        ],
        "requestId": "1234"
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "66f3be92a8647e03dc526a5f",
        "triggeredBy": {
            "ownerType": "Loyalty",
            "referenceId": "xyz"
        },
        "expiresOn": 1722155344.000000000,
        "issuedBadges": [
            {
                "customerId": 11115,
                "issuedId": "66f3bf91c7bf1e4d65e126b1",
                "error": {
                    "code": 1040,
                    "message": "An active issue for the badge already exists.",
                    "reference": null
                },
                "status": "EXPIRED"
            }
        ],
        "requestId": "VGagtK2zN16jkRU56zs1"
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "66f3be92a8647e03dc526a5f",
        "triggeredBy": {
            "ownerType": "Loyalty",
            "referenceId": "xyz"
        },
        "expiresOn": 1722155344.000000000,
        "issuedBadges": [
            {
                "customerId": 11115,
                "issuedId": "66f3bf91c7bf1e4d65e126b1",
                "error": {
                    "code": 1040,
                    "message": "An active issue for the badge already exists.",
                    "reference": null
                },
                "status": "EXPIRED"
            }
        ],
        "requestId": "VGagtK2zN16jkRU56zs1"
    },
    "errors": [],
    "warnings": []
}
```

# API-specific errors

| Error code | Description |

| --- | --- |

| 809 | Request with the same requestId is not allowed. |

| 810 | The badge needs to be claimed first using the claim badge API. |

| 1040 | An active issue for the badge already exists. |



`Try It!`