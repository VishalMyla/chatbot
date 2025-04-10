# Get individual badge details of a customerget

This API allows you to retrieve details of individual badges for a specific customer (Explode API).

For example:  A User has completed 1000 steps and has earned a badge for achieving the goal. Using this API, the user can get information of a specific badge he has earned.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/v1/badges/management/{customerId}/badge/{badgeId} |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# Headers

To retrieve customers based on their email ID, mobile number, external ID or card number pass theX-CAP-CUSTOMER-IDENTIFIER.The supported values are:

`X-CAP-CUSTOMER-IDENTIFIER`

1. email

2. mobile

3. externalId

4. cardNumber

Example:X-CAP-CUSTOMER-IDENTIFIER: email

`X-CAP-CUSTOMER-IDENTIFIER: email`

# API endpoint example

Endpoint:https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/381921157/badge/65ae47103c2f9e39583095a4

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/381921157/badge/65ae47103c2f9e39583095a4
```

Endpoint using theX-CAP-CUSTOMER-IDENTIFIER: emailheader:https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]/badge/6656aa8846bd1129b0ae1241?includeStatistics=true

`X-CAP-CUSTOMER-IDENTIFIER: email`

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]/badge/6656aa8846bd1129b0ae1241?includeStatistics=true
```

[[email protected]](/cdn-cgi/l/email-protection)

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| customerId* | String | Unique ID of the customer. |

| badgeId* | String | Unique ID of the badge. |



# Request query parameter

| Parameter Name | Data type | Description |

| --- | --- | --- |

| includeStatistics | Boolean | Set true to retrieve customer and badge constraints, and earn and issue badge details. |

| sortOn | Enum | LAST_EARNED_ON_DATE: Sorts customer badges by the last date they were earned.LAST_EARNED_EVENT_DATE: Sorts customer badges by the last event date when they were earned. |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/381921157/badge/65ae47103c2f9e39583095a4
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/381921157/badge/65ae47103c2f9e39583095a4
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]/badge/6656aa8846bd1129b0ae1241?includeStatistics=true
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]/badge/6656aa8846bd1129b0ae1241?includeStatistics=true
```

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | String | Unique identifier for the badge issue. |

| name | String | Name of the badge issue. |

| description | String | Description of the badge issue. |

| createdOn | Float | Timestamp when the badge issue was created. |

| lastUpdatedOn | Float | Timestamp when the badge issue was last updated. |

| startsOn | Float | Timestamp indicating when the badge issue starts. |

| expiresOn | Float | Timestamp indicating when the badge issue expires. |

| action | String | The status of the badge issued |

| badgeType | Enum | Type of the badge. Supported values: Earn, Issue_Earn |

| badgeStatus | String | Current status of the badge |

| owner | Object | List of owners for the badge issue |

| claimedBy | Object | List of modules that have claimed the badge |

| ownerType | Enum | Type of the owner claiming the badge. Supported values:LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES. |

| isActive | Boolean | Indicates whether the badge is currently active. |

| images | Object | List of images associated with the badge |

| name | String | Name of the image |

| filehandle | String | Service handle for the image file |

| url | String | URL of the image. |

| earnExpiry | Object | Details about the expiry of earning the badge |

| expiryType | Enum | Type of expiry, supported values: RELATIVE,ABSOLUTE,NEVERRelative expiry is based on when the badge was issued.Absolute expiry is based on the fixed date from the badge issual.Never means, the badges will never expiry after issual. |

| relativeExpirytype | Enum | Type of relative expiry. Supported values: DAYS,WEEKS, MONTHS |

| value | Integer | Value indicating the duration of expiry |

| issueExpiry | Object | Details about the expiry of the badge issue |

| expiryType | Enum | Type of expiry, supported values: RELATIVE,ABSOLUTE,NEVERRelative expiry is based on when the badge was issued.Absolute expiry is based on the fixed date from the badge issual.Never means, the badges will never expiry after issual. |

| expiresOn | String | Expiration time of the badge. |

| customerConstraints | Object | List of constraints for customers |

| badgeConstraints | Object | List of badge constraints associated with the badge. |

| constraintType | Enum | Type of customer constraint. Supported values: "CUSTOMER_BADGE_FIXED_VALUE" and "CUSTOMER_BADGE_ROLLING_WINDOW".CUSTOMER_BADGE_FIXED_VALUE refers to the fixed earn limit for the customer. CUSTOMER_BADGE_ROLLING_WINDOW refers to the customer's earn limit calculated over a certain period in the past day/week/month. |

| maxEarnLimit | Integer | Maximum limit a customer can earn |

| issualDetails | Object | Details about the badge issuance, including count and individual issuance records. |

| issuedStatus | String | Status of the badge issuance |

| issueId | String | The unique ID of the issued badge that was intended for revocation. |

| earnDetails | Object | Details about earning the badge |

| activeEarnedCount | Integer | Count of currently active earned badges |

| lastEarnedOn | Float | Timestamp (in seconds) when the badge was last earned. |

| lastEarnEventDate | Float | Date and time when a triggering event (transactional or behavioural) occurred, initiating the badge earning. Time format: Epoch format (UNIX timestamp in milliseconds). |

| lastEarnedOnDate | Float | Date and time when the badge was awarded to the customer. Time format: Epoch format (UNIX timestamp in milliseconds). |



```
Fixed window with includeStatistics=false
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "name": "OGBadge2",
        "description": "Moving window",
        "createdOn": 1713841339.861,
        "lastUpdatedOn": 1713841339.861,
        "startsOn": 1707523237.192,
        "expiresOn": 1715299237.192,
        "action": "ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "EXPIRED",
        "owner": [
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "earnExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issueExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "customerConstraints": [
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "OVERALL",
                "rollType": null,
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 100,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null
            }
        ],
        "badgeConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "rollType": null,
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 1000,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null
            }
        ],
        "issualDetails": {
            "issuedCount": 0,
            "issuals": []
        },
        "earnDetails": {
            "earnCount": 0,
            "earns": []
        },
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
Fixed window with includeStatistics=false
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "name": "OGBadge2",
        "description": "Moving window",
        "createdOn": 1713841339.861,
        "lastUpdatedOn": 1713841339.861,
        "startsOn": 1707523237.192,
        "expiresOn": 1715299237.192,
        "action": "ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "EXPIRED",
        "owner": [
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "earnExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issueExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "customerConstraints": [
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "OVERALL",
                "rollType": null,
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 100,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null
            }
        ],
        "badgeConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "rollType": null,
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 1000,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null
            }
        ],
        "issualDetails": {
            "issuedCount": 0,
            "issuals": []
        },
        "earnDetails": {
            "earnCount": 0,
            "earns": []
        },
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "createdOn": 1713850688.811,
        "lastUpdatedOn": 1713850688.811,
        "startsOn": 1716803487,
        "expiresOn": 1726804000,
        "action": "DE_ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "LIVE",
        "owner": [
            "Milestones",
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [],
        "earnExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "badgeRank": 1,
        "customerConstraints": [
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "FIXED_WINDOW",
                "rollType": null,
                "refreshRate": 3,
                "durationType": "DAYS",
                "cycleStatus": "ACTIVE",
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 1,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": {
                    "startDate": 1719900534.389096,
                    "endDate": 1720073334.389096
                },
                "fixedWindowReferenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c"
            }
        ],
        "badgeConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "FIXED_WINDOW",
                "rollType": null,
                "refreshRate": 3,
                "durationType": "DAYS",
                "cycleStatus": "ACTIVE",
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 2,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": {
                    "startDate": 1719900534.389096,
                    "endDate": 1720073334.389096
                },
                "fixedWindowReferenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1"
            }
        ],
        "issualDetails": {
            "issuedCount": 0,
            "issuals": []
        },
        "earnDetails": {
            "earnCount": 0,
            "earns": []
        },
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "createdOn": 1713850688.811,
        "lastUpdatedOn": 1713850688.811,
        "startsOn": 1716803487,
        "expiresOn": 1726804000,
        "action": "DE_ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "LIVE",
        "owner": [
            "Milestones",
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [],
        "earnExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "badgeRank": 1,
        "customerConstraints": [
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "FIXED_WINDOW",
                "rollType": null,
                "refreshRate": 3,
                "durationType": "DAYS",
                "cycleStatus": "ACTIVE",
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 1,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": {
                    "startDate": 1719900534.389096,
                    "endDate": 1720073334.389096
                },
                "fixedWindowReferenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c"
            }
        ],
        "badgeConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "FIXED_WINDOW",
                "rollType": null,
                "refreshRate": 3,
                "durationType": "DAYS",
                "cycleStatus": "ACTIVE",
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 2,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": {
                    "startDate": 1719900534.389096,
                    "endDate": 1720073334.389096
                },
                "fixedWindowReferenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1"
            }
        ],
        "issualDetails": {
            "issuedCount": 0,
            "issuals": []
        },
        "earnDetails": {
            "earnCount": 0,
            "earns": []
        },
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "createdOn": 1713850688.811,
        "lastUpdatedOn": 1713850688.811,
        "startsOn": 1716803487,
        "expiresOn": 1726804000,
        "action": "DE_ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "LIVE",
        "owner": [
            "Milestones",
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [],
        "earnExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "badgeRank": 1,
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "createdOn": 1713850688.811,
        "lastUpdatedOn": 1713850688.811,
        "startsOn": 1716803487,
        "expiresOn": 1726804000,
        "action": "DE_ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "LIVE",
        "owner": [
            "Milestones",
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [],
        "earnExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "badgeRank": 1,
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "name": "OGBadge2",
        "description": "Moving window",
        "createdOn": 1713841339.861,
        "lastUpdatedOn": 1713841339.861,
        "startsOn": 1707523237.192,
        "expiresOn": 1715299237.192,
        "action": "ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "EXPIRED",
        "owner": [
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "earnExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issueExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662724bb8fe258516a88fde2",
        "name": "OGBadge2",
        "description": "Moving window",
        "createdOn": 1713841339.861,
        "lastUpdatedOn": 1713841339.861,
        "startsOn": 1707523237.192,
        "expiresOn": 1715299237.192,
        "action": "ACTIVATED",
        "badgeType": "EARN",
        "badgeStatus": "EXPIRED",
        "owner": [
            "Loyalty"
        ],
        "claimedBy": [],
        "images": [
            {
                "name": "string",
                "fileSvcHandle": "string",
                "url": "string",
                "tag": "UN_EARNED"
            }
        ],
        "earnExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "issueExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "DAYS",
            "value": 2
        },
        "activeEarnedCount": 0,
        "customFields": {}
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "66cfffb195551c6e7d962a8a",
        "name": "Copy of Test 2",
        "description": "Test 2",
        "createdOn": 1724907441.472,
        "lastUpdatedOn": 1724907441.472,
        "startsOn": 1725129000,
        "expiresOn": 1727634600,
        "action": "ACTIVATED",
        "badgeType": "ISSUE_EARN",
        "badgeStatus": "UPCOMING",
        "owner": [
            "Loyalty_Promotion",
            "Milestones",
            "Rewards_Catalog",
            "Goodwill_Module",
            "Loyalty",
            "Audience_Campaigns",
            "Journeys",
            "Referral_Campaigns"
        ],
        "claimedBy": [],
        "images": [],
        "earnExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1727375400,
            "expireWithBadgeMeta": false
        },
        "issueExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1756319400,
            "expireWithBadgeMeta": false
        },
        "badgeGroupId": "6628a81728b59f41667acd23",
        "badgeGroupName": "group_1",
        "badgeRank": 2,
        "activeEarnedCount": 0,
        "customFields": {
            "tets-3": "2024-06-13 14:20:42",
            "test-19": "2024-06-11 14:24:43",
            "test-16": "2024-06-10 14:24:06",
            "msd-1": "true",
            "HiNikhil": "Helo",
            "test-23456": "2024-06-11 16:48:22",
            "AKV": "hi1",
            "test-21": "2024-06-06 14:25:14",
            "ka_test_1": "false",
            "test-789": "true"
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "66cfffb195551c6e7d962a8a",
        "name": "Copy of Test 2",
        "description": "Test 2",
        "createdOn": 1724907441.472,
        "lastUpdatedOn": 1724907441.472,
        "startsOn": 1725129000,
        "expiresOn": 1727634600,
        "action": "ACTIVATED",
        "badgeType": "ISSUE_EARN",
        "badgeStatus": "UPCOMING",
        "owner": [
            "Loyalty_Promotion",
            "Milestones",
            "Rewards_Catalog",
            "Goodwill_Module",
            "Loyalty",
            "Audience_Campaigns",
            "Journeys",
            "Referral_Campaigns"
        ],
        "claimedBy": [],
        "images": [],
        "earnExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1727375400,
            "expireWithBadgeMeta": false
        },
        "issueExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1756319400,
            "expireWithBadgeMeta": false
        },
        "badgeGroupId": "6628a81728b59f41667acd23",
        "badgeGroupName": "group_1",
        "badgeRank": 2,
        "activeEarnedCount": 0,
        "customFields": {
            "tets-3": "2024-06-13 14:20:42",
            "test-19": "2024-06-11 14:24:43",
            "test-16": "2024-06-10 14:24:06",
            "msd-1": "true",
            "HiNikhil": "Helo",
            "test-23456": "2024-06-11 16:48:22",
            "AKV": "hi1",
            "test-21": "2024-06-06 14:25:14",
            "ka_test_1": "false",
            "test-789": "true"
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "67037d51d33ceb2ad0a69b1b",
        "name": "Badge Issue earn283",
        "description": "Make 5 transactions",
        "createdOn": 1728281937.271000000,
        "lastUpdatedOn": 1728281937.271000000,
        "startsOn": 1721520000.000000000,
        "expiresOn": 1730957428.000000000,
        "action": "ACTIVATED",
        "badgeType": "ISSUE_EARN",
        "badgeStatus": "LIVE",
        "owner": [
            "Referral_Campaigns",
            "Rewards_Catalog",
            "Goodwill_Module",
            "Historical_Import",
            "Loyalty_Promotion",
            "Milestones",
            "Journeys",
            "Loyalty",
            "Audience_Campaigns"
        ],
        "claimedBy": [],
        "images": [
            {
                "name": "Issued",
                "fileSvcHandle": "qwer-8634-8938",
                "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                "tag": "EARNED"
            }
        ],
        "earnExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "WEEKS",
            "value": 2
        },
        "issueExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1926235957.000000000,
            "expireWithBadgeMeta": false
        },
        "badgeRank": 3,
        "customerConstraints": [
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "FIXED_WINDOW",
                "rollType": null,
                "refreshRate": 3,
                "durationType": "DAYS",
                "cycleStatus": "ACTIVE",
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 2,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": {
                    "startDate": 1728282321.257903000,
                    "endDate": 1728455121.257903000
                },
                "fixedWindowReferenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "rollingWindowLimits": null
            }
        ],
        "badgeConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "rollType": null,
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 10000,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null,
                "rollingWindowLimits": null
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "WEEKS",
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": 1,
                "maxEarnLimit": 3000,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null,
                "rollingWindowLimits": null
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": 1,
                "maxEarnLimit": 300,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null,
                "rollingWindowLimits": null
            }
        ],
        "issualDetails": {
            "issuedCount": 1,
            "issuals": [
                {
                    "issuedOn": 1728281969.300000000,
                    "issuedStatus": "REVOKED",
                    "issueExpiresOn": 1926235957.000000000,
                    "issueId": "67037d71d33ceb2ad0a69b1c",
                    "ownerType": "Loyalty",
                    "ownerReferenceId": "123456789",
                    "revokedOn": 1728282201.451000000,
                    "issueEventDate": 1728279028.000000000
                }
            ]
        },
        "issuedStatus": "REVOKED",
        "earnDetails": {
            "earnCount": 0,
            "earns": []
        },
        "activeEarnedCount": 0,
        "customFields": {
            "Terms and Condition": "<Enter your terms and condition here>"
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "67037d51d33ceb2ad0a69b1b",
        "name": "Badge Issue earn283",
        "description": "Make 5 transactions",
        "createdOn": 1728281937.271000000,
        "lastUpdatedOn": 1728281937.271000000,
        "startsOn": 1721520000.000000000,
        "expiresOn": 1730957428.000000000,
        "action": "ACTIVATED",
        "badgeType": "ISSUE_EARN",
        "badgeStatus": "LIVE",
        "owner": [
            "Referral_Campaigns",
            "Rewards_Catalog",
            "Goodwill_Module",
            "Historical_Import",
            "Loyalty_Promotion",
            "Milestones",
            "Journeys",
            "Loyalty",
            "Audience_Campaigns"
        ],
        "claimedBy": [],
        "images": [
            {
                "name": "Issued",
                "fileSvcHandle": "qwer-8634-8938",
                "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                "tag": "EARNED"
            }
        ],
        "earnExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "WEEKS",
            "value": 2
        },
        "issueExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1926235957.000000000,
            "expireWithBadgeMeta": false
        },
        "badgeRank": 3,
        "customerConstraints": [
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "FIXED_WINDOW",
                "rollType": null,
                "refreshRate": 3,
                "durationType": "DAYS",
                "cycleStatus": "ACTIVE",
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 2,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": {
                    "startDate": 1728282321.257903000,
                    "endDate": 1728455121.257903000
                },
                "fixedWindowReferenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "rollingWindowLimits": null
            }
        ],
        "badgeConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "rollType": null,
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": null,
                "maxEarnLimit": 10000,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null,
                "rollingWindowLimits": null
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "WEEKS",
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": 1,
                "maxEarnLimit": 3000,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null,
                "rollingWindowLimits": null
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "refreshRate": null,
                "durationType": null,
                "cycleStatus": null,
                "startDayOfTheWeek": null,
                "rollValue": 1,
                "maxEarnLimit": 300,
                "earnConstraintBlockStatistics": {
                    "currentEarnCount": 0,
                    "currentEarnCountDays": null,
                    "currentEarnCountWeeks": null,
                    "currentEarnCountMonths": null
                },
                "fixedWindowCycle": null,
                "fixedWindowReferenceId": null,
                "rollingWindowLimits": null
            }
        ],
        "issualDetails": {
            "issuedCount": 1,
            "issuals": [
                {
                    "issuedOn": 1728281969.300000000,
                    "issuedStatus": "REVOKED",
                    "issueExpiresOn": 1926235957.000000000,
                    "issueId": "67037d71d33ceb2ad0a69b1c",
                    "ownerType": "Loyalty",
                    "ownerReferenceId": "123456789",
                    "revokedOn": 1728282201.451000000,
                    "issueEventDate": 1728279028.000000000
                }
            ]
        },
        "issuedStatus": "REVOKED",
        "earnDetails": {
            "earnCount": 0,
            "earns": []
        },
        "activeEarnedCount": 0,
        "customFields": {
            "Terms and Condition": "<Enter your terms and condition here>"
        }
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`