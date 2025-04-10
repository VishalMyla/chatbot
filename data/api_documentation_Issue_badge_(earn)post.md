# Issue badge (earn)post

This API allows you to issue badges to the customer (the customer earns the badge).

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.A badge can be issued via MemberCare without any owners or claim.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- A badge can be issued via MemberCare without any owners or claim.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v1/badges/customer/earn |

| HTTP method | POST |

| Pagination | No |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/earn

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/earn
```

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier ("id") generated during the creation of the badge. |

| customerId* | Number | Unique identifier for the customer. |

| requestId* | String | Enter a unique identifier to identify the request. |

| earnEventDate | Date | The date on which the customer performed the activity. Earn event date has to be between the badge start date and end date if it is a direct earn type of badge and it has to be between the badge issual start date and end date if it is an issue & earn type of badge.You can also enter a past date. This can be used to issue a badge against an older transaction. |

| triggeredBy | Object | The object containing information about what triggered the action. |

| ownerType* | Enum | The module for which the badge is being issued.Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| referenceId* | String | Enter a unique identifier to identify the owner (ownerType). The referenceId passed here should be the same as the referenceId in theclaim badge API. |



[claim badge API](/reference/claim-badge)

```
{
    "badgeMetaId": "66276dc68fe258516a88ff8e",
   	"earnEventDate":"2023-11-03T21:51:00.192Z",
    "customerId": 62090013,
    "requestId": 2132,
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "123694"
    }
}
```

```
{
    "badgeMetaId": "66276dc68fe258516a88ff8e",
   	"earnEventDate":"2023-11-03T21:51:00.192Z",
    "customerId": 62090013,
    "requestId": 2132,
    "triggeredBy": {
        "ownerType": "Loyalty",
        "referenceId": "123694"
    }
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier for the badge metadata. |

| customerId | Number | Unique identifier for the customer. |

| earnedBadgeId | String | Unique identifier for the earned badge. |

| expiresOn | Number | The time indicating when the badge expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| requestId | String | A unique identifier to identify the request. |

| issuedId | String | A Unique identifier representing the specific issuance instance of the badge. |

| errors | Array | Array to list any errors. |

| warnings | Array | Array to list any warnings. |



```
{
    "data": {
        "badgeMetaId": "66da90348bdb494a4f06576f",
        "customerId": 11231,
        "earnedBadgeId": "66da90618bdb494a4f065774",
        "expiresOn": 1726809439.822462000,
        "requestId": "NaYAzxXfJhHvRm4l7KiD",
        "issuedId": "66da903a8bdb494a4f065770"
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "66da90348bdb494a4f06576f",
        "customerId": 11231,
        "earnedBadgeId": "66da90618bdb494a4f065774",
        "expiresOn": 1726809439.822462000,
        "requestId": "NaYAzxXfJhHvRm4l7KiD",
        "issuedId": "66da903a8bdb494a4f065770"
    },
    "errors": [],
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 809 | Request with the same requestId is not allowed |

| 811 | Badge issue is mandatory before earn |



`Try It!`