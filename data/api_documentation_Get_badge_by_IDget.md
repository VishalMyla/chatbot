# Get badge by IDget

This API is used to retrieve badge details using badge ID.

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

| URI | /api_gateway/v1/badges/badgeMeta/{{badgeId}} |

| HTTP method | GET |

| Pagination supported | Yes |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/662724bb8fe258516a88fde2?includeStatistics=true

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/662724bb8fe258516a88fde2?includeStatistics=true
```

# Request path parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeId* | String | Unique identifier ("id") generated during the creation of the badge. |



# Request query parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| limit | Integer | Number of results. For example, number 10 retrieves the first 10 rows of the query results. Default value: 10. |

| order | Enum | Order of the response. Supported values: ASC/DESC. |

| includeStatistics | Boolean | Set true to retrieve earn and issue badge details. |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | String | Unique identifier for the badge. |

| orgId | Integer | Organization ID associated with the badge. |

| name | String | Name of the badge. |

| description | String | Description of the badge. |

| startOn | Float/Double | The timestamp for when the badge is live. |

| expiresOn | Float/Double | The timestamp for when the badge expires. |

| earnedBadgeExpiry | Object | Details of earned badge expiry. |

| badgeNumericId | Integer |  |

| expiryType | Enum | Type of expiry, e.g., "RELATIVE","ABSOLUTE","NEVER"Relative expiry is based on when the badge was issued.Absolute expiry is based on the fixed date from the badge issue.Never means, the badges will never expire after the issue. |

| relativeExpirytype | Enum | Type of relative expiry.Supported values: DAYS/WEEKS/MONTHS.Relative expiry is based on when the badge was issued. |

| value | Integer | The value indicating the duration of expiry. |

| issuedBadgeExpiry | Object | Details of issued badge expiry |

| images | Array | List of images associated with the badge. |

| ownership | Object | The module for which the badge is being created. |

| restrictedToOwners | Enum | Lists owner categories that are allowed to claim the badge.Supported values: LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES/LOYALTY_PROMOTIONS |

| claims | Array | List of claims associated with the badge |

| customer constraints | Object | Limit on how many badges can be issued to a particular customer. |

| duration | Enum | The duration of the constraint. Supported values: DAILY, WEEKLY, MONTHLY |

| refreshRate | Integer | The number of cycles of the duration. |

| maxEarnLimit | Integer | Maximum limit the badge can be earned . |

| startDate | Date | Start date of the cycle. |

| endDate | Date | End date of the cycle |

| badgeConstraints | Object | Limit on how many quantities of a reward can be given to customers |

| duration | Enum | The duration of the constraint. Supported values: DAILY, WEEKLY, MONTHLY |

| refreshRate | Integer | The number of cycles of the duration. |

| maxEarnLimit | Integer | Maximum limit the badge can be earned. |

| startDate | Date | Start date of the cycle. |

| endDate | Date | End date of the cycle. |

| defaultTillId | Null | Default till ID. |

| tags | Array | Provides the details of the tags that are attached to the badges during creation of the badge. Tags are used to store additional information about the badge which can help to identify or categorize the badge. |

| earnType | String | The method the brand can issue the badge.Supported values: EARN, ISSUE EARN.Earn: The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.Issue Earn: The Badges are issued directlIDy to the customer who fulfills the earn condition. |

| status | String | The badge can have three statuses upon creation.Supported values: LIVE, UPCOMING, ENDED/EXPIRED.LIVE: The badges are in live state and can be earned.UPCOMING: The badges which are upcoming on a further date.EXPIRED/ENDED: The badges which have expired and cannot be earned. |

| createdOn | Float/Double | Timestamp for when the badge was created. |

| createdBy | Integer | Identifier of the user who created the badge. |

| lastUpdatedOn | Float/Double | Timestamp for the last update made to the badge. |

| lastUpdatedBy | Integer | ID of the user who last updated the badge. |

| customFields | Object | List of custom fields. |

| customFieldName | String | Name of the custom field. |

| customFieldValue | String | Value of the custom field. |

| active | Boolean | Indicates whether the badge is active or not. |

| errors | Null | Container for any errors. |

| warnings | Null | Container for any warnings. |



```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487,
        "expiresOn": 1726804000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "ACTIVE",
                "startDate": 1716803487,
                "endDate": 1726804000,
                "currentCycle": {
                    "startDate": 1719898518.011293,
                    "endDate": 1720071318.011293
                }
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487,
                "endDate": 1726804000,
                "cycleStatus": "ACTIVE",
                "currentCycle": {
                    "startDate": 1719898518.011462,
                    "endDate": 1720071318.011462
                }
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "LIVE",
        "createdOn": 1713850688.811,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487,
        "expiresOn": 1726804000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "ACTIVE",
                "startDate": 1716803487,
                "endDate": 1726804000,
                "currentCycle": {
                    "startDate": 1719898518.011293,
                    "endDate": 1720071318.011293
                }
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487,
                "endDate": 1726804000,
                "cycleStatus": "ACTIVE",
                "currentCycle": {
                    "startDate": 1719898518.011462,
                    "endDate": 1720071318.011462
                }
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "LIVE",
        "createdOn": 1713850688.811,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "OGBadge2",
        "description": "Moving window",
        "startOn": 1707523237.192,
        "expiresOn": 1715299237.192,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                "maxEarnLimit": 100
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            }
        ],
        "tags": [
            {
                "name": "string",
                "value": "string"
            }
        ],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "EXPIRED",
        "createdOn": 1713841339.861,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713841339.861,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": null,
    "warnings": null
}               "programId": 626,
                "promotionId": 80332,
                "allocationStrategyId": 1489,
                "expirationStrategyId": 3843,
                "defaultTillId": null
            },
            {
                "benefitType": "COUPON",
                "seriesId": 1234
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "LIVE",
        "createdOn": 1713850688.811,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "OGBadge2",
        "description": "Moving window",
        "startOn": 1707523237.192,
        "expiresOn": 1715299237.192,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                "maxEarnLimit": 100
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            }
        ],
        "tags": [
            {
                "name": "string",
                "value": "string"
            }
        ],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "EXPIRED",
        "createdOn": 1713841339.861,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713841339.861,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": null,
    "warnings": null
}               "programId": 626,
                "promotionId": 80332,
                "allocationStrategyId": 1489,
                "expirationStrategyId": 3843,
                "defaultTillId": null
            },
            {
                "benefitType": "COUPON",
                "seriesId": 1234
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "LIVE",
        "createdOn": 1713850688.811,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "OGBadge2",
        "description": "Moving window",
        "startOn": 1707523237.192000000,
        "expiresOn": 1715299237.192000000,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                "maxEarnLimit": 100
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            }
        ],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "EXPIRED",
        "createdOn": 1713841339.861000000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713841339.861000000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "OGBadge2",
        "description": "Moving window",
        "startOn": 1707523237.192000000,
        "expiresOn": 1715299237.192000000,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                "maxEarnLimit": 100
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            }
        ],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "EXPIRED",
        "createdOn": 1713841339.861000000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713841339.861000000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487,
        "expiresOn": 1726804000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "ACTIVE",
                "startDate": 1716803487,
                "endDate": 1726804000,
                "currentCycle": {
                    "startDate": 1719898518.011293,
                    "endDate": 1720071318.011293
                }
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487,
                "endDate": 1726804000,
                "cycleStatus": "ACTIVE",
                "currentCycle": {
                    "startDate": 1719898518.011462,
                    "endDate": 1720071318.011462
                }
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "LIVE",
        "createdOn": 1713850688.811,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "badgeNumericId": null,
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487,
        "expiresOn": 1726804000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "ACTIVE",
                "startDate": 1716803487,
                "endDate": 1726804000,
                "currentCycle": {
                    "startDate": 1719898518.011293,
                    "endDate": 1720071318.011293
                }
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487,
                "endDate": 1726804000,
                "cycleStatus": "ACTIVE",
                "currentCycle": {
                    "startDate": 1719898518.011462,
                    "endDate": 1720071318.011462
                }
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "LIVE",
        "createdOn": 1713850688.811,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": null,
    "warnings": null
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 404 | Passed badge is not found |



`Try It!`