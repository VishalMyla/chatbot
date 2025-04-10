# Claim badgepost

This API allows you to claim the badge using badge ID.

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

| URI | /api_gateway/v1/badges/badgeMeta/{badgeId}/claim |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/653df084b3cda7078c7c68f1/claim

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/653df084b3cda7078c7c68f1/claim
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| badgeID* | String | Unique identifier ("id") generated during the creation of the badge. Ex: 653df084b3cda7078c7c68f1 |



# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| ownerType* | Enum | The module for which the badge is being claimed.Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| referenceId* | String | Enter a unique identifier to identify the badge owner (ownerType). |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/653df084b3cda7078c7c68f1/claim
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/653df084b3cda7078c7c68f1/claim
```

```
{
    "ownerType": "Loyalty",
    "referenceId": "123"
}
```

```
{
    "ownerType": "Loyalty",
    "referenceId": "123"
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier for the badge metadata. |

| ownerType | String | The module for which the badge is being claimed. |

| referenceId | String | An identifier associated with the owner. |

| errors | String | Contains details of any errors. |

| warnings | Array | Contains details of any warnings. |



```
{
    "data": {
        "badgeMetaId": "653df084b3cda7078c7c68f1",
        "ownerType": "Loyalty",
        "referenceId": "123"
    },
    "errors": null,
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "653df084b3cda7078c7c68f1",
        "ownerType": "Loyalty",
        "referenceId": "123"
    },
    "errors": null,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 717 | OwnerId is mandatory. |

| 400 | Invalid enum value. |



`Try It!`