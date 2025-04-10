# Unclaim badgepost

This API allows you to unclaim a badge.  Using an unclaim API you can soft delete the active claim from the claims list.

For example:

A badge named Furry Friend Badge is owned by Loyalty and Milestones. Loyalty has successfully claimed the badge under program ID: 123, associating the badge claim with Loyalty as owner and reference ID: ABC. Using the unclaim badge API, you can remove Loyalty’s claim over the badge.

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

| URI | api_gateway/v1/badges/badgeMeta/{badgeId}/unclaim |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/65cc933e436d194c60ef7ba4/unclaim

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/65cc933e436d194c60ef7ba4/unclaim
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| badgeId* | String | Unique ID of the badge. |



# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| ownerType* | Enum | The module claimed by the badge.Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| referenceId* | String | Unique reference ID of the owner type. |



```
{
"ownerType":"Loyalty",
"referenceId":"string"
}
```

```
{
"ownerType":"Loyalty",
"referenceId":"string"
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| ownerType | Enum | The module claimed by the badge.Supported values: Loyalty program, Milestones, Campaigns, Journeys, Goodwill. |

| referenceId | String | Unique reference ID of the owner type. |

| isActive | Boolean | Indicates whether the badge is active. |



```
{
    "data": {
        "ownerType": "Loyalty",
        "referenceId": "string",
        "isActive": false
    },
    "errors": null,
    "warnings": []
}
```

```
{
    "data": {
        "ownerType": "Loyalty",
        "referenceId": "string",
        "isActive": false
    },
    "errors": null,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 737 | Claim not found in existing claims |



`Try It!`