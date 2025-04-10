# Get badges for customerget

This API allows you to retrieve all the details of the badge (Available and Earned) of the customer.

For example: Users earn badges for achieving various goals set by the brand and using this API, the users can view both earned badges and also check the available badges for them to earn.

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

| URI | /api_gateway/v1/badges/customer/{customerId} |

| HTTP method | GET |

| Pagination supported | Yes |

| Rate limit | NA |

| Batch support | NA |



# Headers

To retrieve customers based on their email ID, mobile number, external ID or card number pass theX-CAP-CUSTOMER-IDENTIFIER.The supported values are:

`X-CAP-CUSTOMER-IDENTIFIER`

1. Email ID

2. Mobile number

3. External ID

4. Card number

Example:X-CAP-CUSTOMER-IDENTIFIER: email

`X-CAP-CUSTOMER-IDENTIFIER: email`

# API endpoint example

Endpoint:https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/{customerId}

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/{customerId}
```

Endpoint using theX-CAP-CUSTOMER-IDENTIFIER: emailheader:https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/{email ID}

`X-CAP-CUSTOMER-IDENTIFIER: email`

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/{email ID}
```

# Request path parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| customerId* | String | Unique identifier of the customer. |



# Request query parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeType | Enum | The type of badge to display. Supported Values:AVAILABLE_TO_ISSUE: Filters the badges of the type Enrol and Issue. This is the default filter.AVAILABLE: Filters the badges of the type Direct Issue that are available to be earned directly by the customer.EARNED: Filters the badges that are issued by the customer and are active in the customer’s profile.EXPIRED: Filters the badges that are expired. |

| sortOn | Enum | RANK: Enables sorting of badges based on rank.LAST_EARNED_ON_DATE: Sorts customer badges by the last date they were earned.LAST_EARNED_EVENT_DATE: Sorts customer badges by the last event date when they were earned. |

| includeExpired | Boolean | Include expired badges of the customer. |

| Limit | Integer | Number of results. For example, number 10 retrieves the first 10 rows of the query results. Default value: 10. |

| groupId | string | Badge group ID the badge belongs to. Retrieves only the badges belonging to the specified badge group ID. |



`AVAILABLE_TO_ISSUE`

`AVAILABLE`

`EARNED`

`EXPIRED`

`RANK`

`LAST_EARNED_ON_DATE`

`LAST_EARNED_EVENT_DATE`

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customer/62407752' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'X-CAP-API-OAUTH-TOKEN: eyJkz3i5HYHmXddDeo6L-uxToiLGtsDQ5Xgk3_tigMrjAK7-ykirAg1MgZV_edPYtYg' \
--header 'Cookie: _cfuvid=mVTuosi9D69s3_Q6H9hTMjvB.d0m8xSDUUL9T1pXSSs-1732256312181-0.0.1.1-604800000'
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customer/62407752' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'X-CAP-API-OAUTH-TOKEN: eyJkz3i5HYHmXddDeo6L-uxToiLGtsDQ5Xgk3_tigMrjAK7-ykirAg1MgZV_edPYtYg' \
--header 'Cookie: _cfuvid=mVTuosi9D69s3_Q6H9hTMjvB.d0m8xSDUUL9T1pXSSs-1732256312181-0.0.1.1-604800000'
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/[email protected]
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/[email protected]
```

[[email protected]](/cdn-cgi/l/email-protection)

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/62090013?groupId=65c3600c60d9261bdd8a6410
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customer/62090013?groupId=65c3600c60d9261bdd8a6410
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier for each badge. |

| orgId | Integer | Identifier for the organization issuing the badge. |

| name | String | Name of the badge. |

| description | String | Description of what the badge represents or how it can be earned. |

| startOn | Float | Timestamp indicating when the badge becomes available. |

| expiresOn | Float | Timestamp indicating when the badge offer expires. |

| name | String | Name associated with the badge image. |

| fileSvcHandle | String | Handle for the file service managing the badge images. |

| url | String | URL where the badge image is stored. |

| earnType | String | Type of earning associated with the badge (e.g., 'ISSUE_EARN'). |

| customerConstraints | Object | Constraints specific to customers for earning the badge. |

| badgeConstraints | Object | Badge constraints associated with the badge. |

| earnedCount | Integer | Number of times the badge has been earned, if applicable. |

| active | Boolean | Indicates whether the badge meta is currently active or not. |

| limit | Integer | Number of results. For example, number 10 retrieves the first 10 rows of the query results. Default value: 10. |

| custom fields | Array | A list of custom fields associated with the badge. |

| badgeGroupId | String | Unique group ID associated with the badge. |

| badgeRank | Integer | Badge rank is the rank of a badge within a group. |

| badgeGroupName | Integer | Name of the badge group. |

| ownership | Object | Specifies the ownership rule for the module. |

| ownership.restrictedToOwners | Array | Specifies the owner categories that are allowed to claim the badge. |

| ownership.claims | Array | Specifies the owner by which the badge has been claimed. |

| lastEarnEventDate | Float | Date and time when a triggering event (transactional or behavioural) occurred, initiating the badge earning. Time format: Epoch format (UNIX timestamp in milliseconds). |

| lastEarnedOnDate | Float | Date and time when the badge was awarded to the customer. Time format: Epoch format (UNIX timestamp in milliseconds). |



```
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "662f671b0b50ae4de0cd3822",
                "orgId": 100458,
                "name": "SH Specific Store",
                "description": null,
                "startOn": 1714382914,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 16,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "65f7f4237d12f807399e1d6e",
                "orgId": 100458,
                "name": "Transaction_Success",
                "description": "Update the transaction to get badges",
                "startOn": 1710768224,
                "expiresOn": 1730294624,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "82f10bf9-ce05-430a-ab5c-c6fc380f2022",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65f7f4237d12f807399e1d6e_EARNED_o0SLnYap.jpg",
                        "tag": "EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "a8ca6557-60d6-4ddc-8f6c-b0fe741076a6",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65f7f4237d12f807399e1d6e_UN_EARNED_gFvFFh_P.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_checkin",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                        "maxEarnForDays": 10,
                        "rollForDays": 10,
                        "maxEarnForWeeks": 10,
                        "rollForWeeks": 10,
                        "maxEarnForMonths": 10,
                        "rollForMonths": 10
                    },
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "664db59d9e99dd11b81add38",
                "orgId": 100458,
                "name": "Payment Mode Badge",
                "description": "Payment Mode Badge",
                "startOn": 1716369094,
                "expiresOn": 1732905000,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_TransactionAdd",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 5
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 25
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "662f66810b50ae4de0cd3820",
                "orgId": 100458,
                "name": "SH Specific Time",
                "description": null,
                "startOn": 1714382760,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 15,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "65efdc7f7d12f807399df869",
                "orgId": 100458,
                "name": "Furrye12",
                "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
                "startOn": 1710243200,
                "expiresOn": 1728732800,
                "images": [
                    {
                        "name": "Initial Earn",
                        "fileSvcHandle": "cb7838d3-5328-445e-bf2b-85eb9fc7be04",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65efdc7f7d12f807399df869_UN_EARNED_1PeJ63Ok.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "Master Earn",
                        "fileSvcHandle": "b665f5cb-71a3-4bcb-938f-3021b8705e4b",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65efdc7f7d12f807399df869_EARNED_RtuJnCm9.jpg",
                        "tag": "EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "6627351f8fe258516a88fe36",
                "orgId": 100458,
                "name": "BADGE12",
                "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
                "startOn": 1716803487,
                "expiresOn": 1726804000,
                "images": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Milestones",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                        "durationType": "DAYS",
                        "refreshRate": 3,
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1716803487,
                        "endDate": 1726804000
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
                        "cycleStatus": "ACTIVE"
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "662749408fe258516a88fe89",
                "orgId": 100458,
                "name": "BADGE123",
                "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
                "startOn": 1716803487,
                "expiresOn": 1726804000,
                "images": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Milestones",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                        "durationType": "DAYS",
                        "refreshRate": 3,
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1716803487,
                        "endDate": 1726804000
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
                        "cycleStatus": "ACTIVE"
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "662f62ba0b50ae4de0cd3816",
                "orgId": 100458,
                "name": "SH 3 Redemption",
                "description": null,
                "startOn": 1714381792,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 6,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "662f66530b50ae4de0cd381e",
                "orgId": 100458,
                "name": "SH Specific Date",
                "description": null,
                "startOn": 1714382715,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 15,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "662f623a0b50ae4de0cd3814",
                "orgId": 100458,
                "name": "SH 3 Coke ",
                "description": null,
                "startOn": 1714381665,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 4,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 38,
            "totalPages": 4
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "662f671b0b50ae4de0cd3822",
                "orgId": 100458,
                "name": "SH Specific Store",
                "description": null,
                "startOn": 1714382914,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 16,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "65f7f4237d12f807399e1d6e",
                "orgId": 100458,
                "name": "Transaction_Success",
                "description": "Update the transaction to get badges",
                "startOn": 1710768224,
                "expiresOn": 1730294624,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "82f10bf9-ce05-430a-ab5c-c6fc380f2022",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65f7f4237d12f807399e1d6e_EARNED_o0SLnYap.jpg",
                        "tag": "EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "a8ca6557-60d6-4ddc-8f6c-b0fe741076a6",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65f7f4237d12f807399e1d6e_UN_EARNED_gFvFFh_P.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_checkin",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                        "maxEarnForDays": 10,
                        "rollForDays": 10,
                        "maxEarnForWeeks": 10,
                        "rollForWeeks": 10,
                        "maxEarnForMonths": 10,
                        "rollForMonths": 10
                    },
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "664db59d9e99dd11b81add38",
                "orgId": 100458,
                "name": "Payment Mode Badge",
                "description": "Payment Mode Badge",
                "startOn": 1716369094,
                "expiresOn": 1732905000,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_TransactionAdd",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 5
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 25
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "662f66810b50ae4de0cd3820",
                "orgId": 100458,
                "name": "SH Specific Time",
                "description": null,
                "startOn": 1714382760,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 15,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "65efdc7f7d12f807399df869",
                "orgId": 100458,
                "name": "Furrye12",
                "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
                "startOn": 1710243200,
                "expiresOn": 1728732800,
                "images": [
                    {
                        "name": "Initial Earn",
                        "fileSvcHandle": "cb7838d3-5328-445e-bf2b-85eb9fc7be04",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65efdc7f7d12f807399df869_UN_EARNED_1PeJ63Ok.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "Master Earn",
                        "fileSvcHandle": "b665f5cb-71a3-4bcb-938f-3021b8705e4b",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/badges/images/100458/65efdc7f7d12f807399df869_EARNED_RtuJnCm9.jpg",
                        "tag": "EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "6627351f8fe258516a88fe36",
                "orgId": 100458,
                "name": "BADGE12",
                "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
                "startOn": 1716803487,
                "expiresOn": 1726804000,
                "images": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Milestones",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                        "durationType": "DAYS",
                        "refreshRate": 3,
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1716803487,
                        "endDate": 1726804000
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
                        "cycleStatus": "ACTIVE"
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "662749408fe258516a88fe89",
                "orgId": 100458,
                "name": "BADGE123",
                "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
                "startOn": 1716803487,
                "expiresOn": 1726804000,
                "images": [],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Milestones",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                        "durationType": "DAYS",
                        "refreshRate": 3,
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1716803487,
                        "endDate": 1726804000
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
                        "cycleStatus": "ACTIVE"
                    }
                ],
                "earnedCount": null,
                "customFields": {},
                "active": false
            },
            {
                "badgeMetaId": "662f62ba0b50ae4de0cd3816",
                "orgId": 100458,
                "name": "SH 3 Redemption",
                "description": null,
                "startOn": 1714381792,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 6,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "662f66530b50ae4de0cd381e",
                "orgId": 100458,
                "name": "SH Specific Date",
                "description": null,
                "startOn": 1714382715,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 15,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            },
            {
                "badgeMetaId": "662f623a0b50ae4de0cd3814",
                "orgId": 100458,
                "name": "SH 3 Coke ",
                "description": null,
                "startOn": 1714381665,
                "expiresOn": 1722364200,
                "images": [],
                "badgeGroupId": "660bf2c98bdfa71c4496a940",
                "badgeGroupName": "Group",
                "badgeRank": 4,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "earnType": "EARN",
                "customerConstraints": [],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 38,
            "totalPages": 4
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "664442c560646c1208ede8f4",
                "orgId": 100458,
                "name": "string9",
                "description": "string",
                "startOn": 1684087053.29,
                "expiresOn": 1778781453.29,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "string",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                        "maxEarnForDays": 10,
                        "rollForDays": 2,
                        "maxEarnForWeeks": null,
                        "rollForWeeks": null,
                        "maxEarnForMonths": 11,
                        "rollForMonths": 2
                    }
                ],
                "badgeConstraints": [],
                "earnedCount": 1,
                "lastEarnedOnDate": 1684500000.00,  
                "lastEarnEventDate": 1684503600.00,  
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 1,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "664442c560646c1208ede8f4",
                "orgId": 100458,
                "name": "string9",
                "description": "string",
                "startOn": 1684087053.29,
                "expiresOn": 1778781453.29,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "string",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
                        "maxEarnForDays": 10,
                        "rollForDays": 2,
                        "maxEarnForWeeks": null,
                        "rollForWeeks": null,
                        "maxEarnForMonths": 11,
                        "rollForMonths": 2
                    }
                ],
                "badgeConstraints": [],
                "earnedCount": 1,
                "lastEarnedOnDate": 1684500000.00,  
                "lastEarnEventDate": 1684503600.00,  
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 1,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badges": [
           {
                "badgeMetaId": "662643308fe258516a88f924",
                "orgId": 100606,
                "name": "BADGE_ASDFG",
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1713865283.000000000,
                "expiresOn": 1828754110.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123210",
                            "isActive": true
                        }
                    ]
                },
                "badgeRank": null,
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                        "durationType": "MONTHS",
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1713865283.000000000,
                        "endDate": 1828754110.000000000
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "WEEKS",
                        "rollValue": 1,
                        "maxEarnLimit": 2000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "MONTHS",
                        "rollValue": 1,
                        "maxEarnLimit": 10000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "DAYS",
                        "rollValue": 1,
                        "maxEarnLimit": 100
                    }
                ],
                "earnedCount": 1,
                "lastEarnedOnDate": 1713865283.000000000,
                "lastEarnEventDate": 1713865283.000000000,
                "customFields": {
                    "2024": "true",
                    "Date": "2025-01-18T09:09:09Z"
                },
                "active": true
            }
        ]
    }
}
```

```
{
    "data": {
        "badges": [
           {
                "badgeMetaId": "662643308fe258516a88f924",
                "orgId": 100606,
                "name": "BADGE_ASDFG",
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1713865283.000000000,
                "expiresOn": 1828754110.000000000,
                "images": [],
                "tags": [],
                "badgeGroupId": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123210",
                            "isActive": true
                        }
                    ]
                },
                "badgeRank": null,
                "earnType": "EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                        "referenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                        "durationType": "MONTHS",
                        "maxEarnLimit": 1,
                        "cycleStatus": "ACTIVE",
                        "startDate": 1713865283.000000000,
                        "endDate": 1828754110.000000000
                    }
                ],
                "badgeConstraints": [
                    {
                        "constraintType": "BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "WEEKS",
                        "rollValue": 1,
                        "maxEarnLimit": 2000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "MONTHS",
                        "rollValue": 1,
                        "maxEarnLimit": 10000
                    },
                    {
                        "constraintType": "BADGE_ROLLING_WINDOW",
                        "rollType": "DAYS",
                        "rollValue": 1,
                        "maxEarnLimit": 100
                    }
                ],
                "earnedCount": 1,
                "lastEarnedOnDate": 1713865283.000000000,
                "lastEarnEventDate": 1713865283.000000000,
                "customFields": {
                    "2024": "true",
                    "Date": "2025-01-18T09:09:09Z"
                },
                "active": true
            }
        ]
    }
}
```

```
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "653dea07b3cda7078c7c68ee",
                "orgId": 100606,
                "name": "Birthday Badge",
                "description": "Make a purchase during your birthday month and get a 40% discount coupon",
                "startOn": 1698557400.000000000,
                "expiresOn": 4872129400.000000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "8be2b78e-b1d6-4127-926a-2cbed7eb2785",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_UN_EARNED_vDx_DRdk.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "6d5bbab0-e75c-46c4-ac61-e9f7efeb8863",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_EARNED_P-Hmb96D.png",
                        "tag": "EARNED"
                    }
                ],
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "ISSUE_EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1
                    }
                ],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {
                    "2024": "true",
                    "Date": "2025-01-18 14:39:09",
                    "Category1": "false",
                    "Priority": "1"
                },
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 1,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badges": [
            {
                "badgeMetaId": "653dea07b3cda7078c7c68ee",
                "orgId": 100606,
                "name": "Birthday Badge",
                "description": "Make a purchase during your birthday month and get a 40% discount coupon",
                "startOn": 1698557400.000000000,
                "expiresOn": 4872129400.000000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "8be2b78e-b1d6-4127-926a-2cbed7eb2785",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_UN_EARNED_vDx_DRdk.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "6d5bbab0-e75c-46c4-ac61-e9f7efeb8863",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_EARNED_P-Hmb96D.png",
                        "tag": "EARNED"
                    }
                ],
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "earnType": "ISSUE_EARN",
                "customerConstraints": [
                    {
                        "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
                        "maxEarnLimit": 1
                    }
                ],
                "badgeConstraints": [],
                "earnedCount": null,
                "customFields": {
                    "2024": "true",
                    "Date": "2025-01-18 14:39:09",
                    "Category1": "false",
                    "Priority": "1"
                },
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 1,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

Sorting logic in getCall:

- Pass the query param sortOn=RANK in the Getcustomerbadges API to fetch the list of sorted badges as per the defined group and badge rank

- Preference will be given to the groups as per their ranking

- Within the group, preference will be given to the badges for which badge rank is defined, the rest of the badges with no badge rank will be sorted in default descending order of expired date

- If badges with no group are defined, they will be sorted in order of badge rank (if defined), followed by default descending order of expired date

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1026 | Customer with the specified ID is not found. |

| 1028 | Invalid Customer Identifier type |



`Try It!`