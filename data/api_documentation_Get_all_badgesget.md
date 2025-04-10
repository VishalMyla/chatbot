# Get all badgesget

This API is used to retrieve all badges for the org.

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

| URI | /api_gateway/v1/badges/badgeMeta |

| HTTP method | GET |

| Pagination supported | Yes |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta?status=LIVE,UPCOMING

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta?status=LIVE,UPCOMING
```

# Request query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| status | Enum | The badge can have three statuses upon creation.Supported values: LIVE, UPCOMING, ENDED/EXPIRED.LIVE: The badges which are in live state and can be earned.UPCOMING: The badges which are upcoming on a further date.EXPIRED/ENDED: The badges which have expired and cannot be earned. |

| earnType | Enum | The method the brand can issue the badge.Supported values: EARN, ISSUE_EARN.Earn:  The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.Issue Earn: The Badges are issued directly to the customer who fulfills the earn condition. |

| action | Enum | Indicates if the badge is active or not. Supported values: ACTIVATED and DE_ACTIVATED |

| badgeType | Enum | The type of badge to display. Supported values: ISSUE_EARN, EARN. |

| owner | Enum | The module for which the badge is being created.Supported values: Loyalty/Referral_Campaigns/Journeys/Audience_Campaigns/Rewards_Catalog/ Goodwill_Module/ Milestones/ Loyalty_Promotion |

| claimedBy | String | Modules that have claimed the badge. Example: Loyalty/Referral_Campaigns/Journeys/Audience_Campaigns/Rewards_Catalog/ Goodwill_Module/ Milestones/ Loyalty_Promotion |

| unclaimed | Boolean | A boolean variable to flag unclaimed badges. Default: False. |

| name | String | Name of the badge. |

| limit | Integer | Number of results. For example, number 10 retrieves the first 10 rows of the query results. Default value: 10. |

| sortOn | Enum | The supported values are: ID/NAME/START_DATE. Default value: ID. |

| startOn | Date Time | Filter badges based on start time.  Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. Example: 2023-02-16T00:00:00Z |

| expiresOn | Date Time | Filter based on expiry of the badge. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. Example: 2024-01-01T00:00:00Z |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta?status=LIVE,UPCOMINGstartOn=2023-02-16T00:00:00Z&expiresOn=2024-01-01T00:00:00Z
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta?status=LIVE,UPCOMINGstartOn=2023-02-16T00:00:00Z&expiresOn=2024-01-01T00:00:00Z
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | String | Unique identifier for the badge. |

| orgId | Integer | Organization ID associated with the badge. |

| name | String | Name of the badge. |

| description | String | Description of the badge. |

| startOn | Date | Start time of the badge. |

| expiresOn | Date | Expiration time of the badge. |

| status | Enum | Status of the badge. Supported values: UPCOMING, LIVE, ENDED) |

| earnType | String | Type of earning associated with the badge |

| earnedBadgeExpiry | Object | Details of earned badge expiry |

| expiryType | Enum | Type of expiry, supported values: RELATIVE,ABSOLUTE,NEVERRelative expiry is based on when the badge was issued.Absolute expiry is based on the fixed date from the badge issual.Never means, the badges will never expiry after issual. |

| relativeExpirytype | String | Type of relative expiry. Supported values: DAYS,WEEKS, MONTHS |

| value | Integer | Value indicating the duration of expiry |

| expireWithBadgeMeta | Boolean | Indicates if expiry is associated with badge meta |

| ownership | Object | Ownership details of the badge |

| restrictedToOwners | String | Lists owner categories that are allowed to claim the badge.Supported values: LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES/LOYALTY_PROMOTION |

| claims | Object | List of claims associated with the badge |

| badgeMetaId | String | Badge metadata ID |

| ownerType | Enum | The module for which the badge is being claimed.Supported values: LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES/ LOYALTY_PROMOTIONS |

| referenceId | String | Reference ID associated with the claim. |

| defaultTillId | Integer | Default till ID |

| issuedCount | Integer | Count of issued badges |

| earnedCount | Integer | Count of earned badges |

| createdOn | Date | Creation timestamp |

| createdBy | Integer | ID of the user who created the badge |

| lastUpdatedOn | Date | Last update timestamp |

| lastUpdatedBy | Integer | ID of the user who last updated the badge |

| customFields | Object | List ofcustom fieldsassociated with the badge. |

| customFieldName | String | Name of the custom field. |

| customFieldValue | String | Value of the custom field. |

| active | Boolean | Indicates if the badge is active |

| badgeGroupId | String | Unique group ID associated with the badge.To add the badge to a group, pass badgeGroupId value. |

| badgeRank | Integer | Badge rank is the rank of a badge within a group, the user can define the badge rank even if the group is not linked with the badge. |



[custom fields](/reference/create-custom-field)

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "66868a683778145cbb91193a",
                "orgId": 100458,
                "name": "Badge Issue earn27",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Historical_Import",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Historical_Import",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720093288.334000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720093422.070000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866fc03778145cbb9118ae",
                "orgId": 100458,
                "name": "Badge Issue earn26",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086464.541000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086473.848000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866e3798592f327b849a48",
                "orgId": 100458,
                "name": "Badge Issue earn25",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Milestones",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086071.229000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086089.352000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866d2198592f327b849a47",
                "orgId": 100458,
                "name": "Badge Issue earn24",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Membercare",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085793.761000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085793.761000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ce13778145cbb9118aa",
                "orgId": 100458,
                "name": "Badge Issue earn23",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085729.393000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085756.697000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866c2698592f327b849a46",
                "orgId": 100458,
                "name": "Badge Issue earn21",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Rewards_Catalog",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085542.402000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085557.163000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866bdc3778145cbb9118a8",
                "orgId": 100458,
                "name": "Badge Issue earn20",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Membercare",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085468.169000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085468.169000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ba73778145cbb9118a7",
                "orgId": 100458,
                "name": "Badge Issue earn19",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085415.780000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085432.962000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b763778145cbb9118a6",
                "orgId": 100458,
                "name": "Badge Issue earn18",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085366.401000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085384.589000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b3798592f327b849a45",
                "orgId": 100458,
                "name": "Badge Issue earn17",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085303.650000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085327.908000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 122,
            "totalPages": 13
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "66868a683778145cbb91193a",
                "orgId": 100458,
                "name": "Badge Issue earn27",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Historical_Import",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Historical_Import",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720093288.334000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720093422.070000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866fc03778145cbb9118ae",
                "orgId": 100458,
                "name": "Badge Issue earn26",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086464.541000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086473.848000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866e3798592f327b849a48",
                "orgId": 100458,
                "name": "Badge Issue earn25",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Milestones",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086071.229000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086089.352000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866d2198592f327b849a47",
                "orgId": 100458,
                "name": "Badge Issue earn24",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Membercare",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085793.761000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085793.761000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ce13778145cbb9118aa",
                "orgId": 100458,
                "name": "Badge Issue earn23",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085729.393000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085756.697000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866c2698592f327b849a46",
                "orgId": 100458,
                "name": "Badge Issue earn21",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Rewards_Catalog",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085542.402000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085557.163000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866bdc3778145cbb9118a8",
                "orgId": 100458,
                "name": "Badge Issue earn20",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Membercare",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085468.169000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085468.169000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ba73778145cbb9118a7",
                "orgId": 100458,
                "name": "Badge Issue earn19",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085415.780000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085432.962000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b763778145cbb9118a6",
                "orgId": 100458,
                "name": "Badge Issue earn18",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085366.401000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085384.589000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b3798592f327b849a45",
                "orgId": 100458,
                "name": "Badge Issue earn17",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085303.650000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085327.908000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 122,
            "totalPages": 13
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "66868a683778145cbb91193a",
                "orgId": 100458,
                "name": "Badge Issue earn27",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Historical_Import",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Historical_Import",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720093288.334000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720093422.070000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866fc03778145cbb9118ae",
                "orgId": 100458,
                "name": "Badge Issue earn26",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086464.541000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086473.848000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866e3798592f327b849a48",
                "orgId": 100458,
                "name": "Badge Issue earn25",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Milestones",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086071.229000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086089.352000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866d2198592f327b849a47",
                "orgId": 100458,
                "name": "Badge Issue earn24",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Membercare",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085793.761000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085793.761000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ce13778145cbb9118aa",
                "orgId": 100458,
                "name": "Badge Issue earn23",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085729.393000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085756.697000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866c2698592f327b849a46",
                "orgId": 100458,
                "name": "Badge Issue earn21",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Rewards_Catalog",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085542.402000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085557.163000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866bdc3778145cbb9118a8",
                "orgId": 100458,
                "name": "Badge Issue earn20",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Membercare",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085468.169000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085468.169000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ba73778145cbb9118a7",
                "orgId": 100458,
                "name": "Badge Issue earn19",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085415.780000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085432.962000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b763778145cbb9118a6",
                "orgId": 100458,
                "name": "Badge Issue earn18",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085366.401000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085384.589000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b3798592f327b849a45",
                "orgId": 100458,
                "name": "Badge Issue earn17",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085303.650000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085327.908000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 122,
            "totalPages": 13
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "66868a683778145cbb91193a",
                "orgId": 100458,
                "name": "Badge Issue earn27",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Historical_Import",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Historical_Import",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720093288.334000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720093422.070000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866fc03778145cbb9118ae",
                "orgId": 100458,
                "name": "Badge Issue earn26",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty",
                        "Goodwill_Module",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086464.541000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086473.848000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866e3798592f327b849a48",
                "orgId": 100458,
                "name": "Badge Issue earn25",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Milestones",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720086071.229000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720086089.352000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866d2198592f327b849a47",
                "orgId": 100458,
                "name": "Badge Issue earn24",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Membercare",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085793.761000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085793.761000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ce13778145cbb9118aa",
                "orgId": 100458,
                "name": "Badge Issue earn23",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Rewards_Catalog",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085729.393000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085756.697000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866c2698592f327b849a46",
                "orgId": 100458,
                "name": "Badge Issue earn21",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Rewards_Catalog",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Rewards_Catalog",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085542.402000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085557.163000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866bdc3778145cbb9118a8",
                "orgId": 100458,
                "name": "Badge Issue earn20",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Membercare",
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085468.169000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085468.169000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866ba73778145cbb9118a7",
                "orgId": 100458,
                "name": "Badge Issue earn19",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085415.780000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085432.962000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b763778145cbb9118a6",
                "orgId": 100458,
                "name": "Badge Issue earn18",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Journeys",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085366.401000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085384.589000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            },
            {
                "id": "66866b3798592f327b849a45",
                "orgId": 100458,
                "name": "Badge Issue earn17",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1721520000.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "UPCOMING",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion",
                        "Referral_Campaigns",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Referral_Campaigns",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1720085303.650000000,
                "createdBy": 75130850,
                "lastUpdatedOn": 1720085327.908000000,
                "lastUpdatedBy": 75130850,
                "customFields": {},
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 122,
            "totalPages": 13
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "664ddc849e99dd11b81addff",
                "orgId": 100458,
                "name": "Outsole",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "description": "Outsol",
                "startOn": 1716379332.000000000,
                "expiresOn": 1735583400.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "112426db-1242-4dc7-991c-9bb2626d6071",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100458/664ddc849e99dd11b81addff_EARNED_MCWbnUjh.jpg",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Audience_Campaigns",
                        "Loyalty",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "698_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_PartnerProgramDeLinking_2fdb5b75",
                            "isActive": false
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1716378756.125000000,
                "createdBy": 75060328,
                "lastUpdatedOn": 1718350598.970000000,
                "lastUpdatedBy": 75101444,
                "customFields": {},
                "active": true
            },
            {
                "id": "6644426d60646c1208ede8f3",
                "orgId": 100458,
                "name": "string8",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "string",
                "startOn": 1684087053.290000000,
                "expiresOn": 1778781453.290000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "tags": [
                    {
                        "name": "string",
                        "value": "string"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
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
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1715749485.770000000,
                "createdBy": 123,
                "lastUpdatedOn": 1715749546.049000000,
                "lastUpdatedBy": 62090013,
                "customFields": {},
                "active": true
            },
            {
                "id": "662748a08fe258516a88fe88",
                "orgId": 100458,
                "name": "Badge Issue earn",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1713850528.634000000,
                "createdBy": 75086856,
                "lastUpdatedOn": 1713850528.634000000,
                "lastUpdatedBy": 75086856,
                "customFields": {},
                "active": true
            },
            {
                "id": "6627303e8fe258516a88fde5",
                "orgId": 100458,
                "name": "BADGEASDF1224",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1713844286.989000000,
                "createdBy": 75086856,
                "lastUpdatedOn": 1713844286.989000000,
                "lastUpdatedBy": 75086856,
                "customFields": {},
                "active": true
            },
            {
                "id": "66272f558fe258516a88fde4",
                "orgId": 100458,
                "name": "BADGEASDF122",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1716803487.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1713844053.980000000,
                "createdBy": 75086856,
                "lastUpdatedOn": 1713844053.980000000,
                "lastUpdatedBy": 75086856,
                "customFields": {},
                "active": true
            },
            {
                "id": "652fc32a2aa6a339209b359c",
                "orgId": 100458,
                "name": "testbadge67",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "testbadge",
                "startOn": 1698586638.000000000,
                "expiresOn": 1726235957.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    }
                ],
                "tags": [
                    {
                        "name": "key",
                        "value": "value"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "xyz",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1697628970.378000000,
                "createdBy": 75078478,
                "lastUpdatedOn": 1700805189.402000000,
                "lastUpdatedBy": 75069206,
                "customFields": {},
                "active": false
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 6,
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
        "metaBasicDetails": [
            {
                "id": "664ddc849e99dd11b81addff",
                "orgId": 100458,
                "name": "Outsole",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "description": "Outsol",
                "startOn": 1716379332.000000000,
                "expiresOn": 1735583400.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "112426db-1242-4dc7-991c-9bb2626d6071",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100458/664ddc849e99dd11b81addff_EARNED_MCWbnUjh.jpg",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Journeys",
                        "Audience_Campaigns",
                        "Loyalty",
                        "Milestones"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "698_TransactionAdd",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "469_PartnerProgramDeLinking_2fdb5b75",
                            "isActive": false
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1716378756.125000000,
                "createdBy": 75060328,
                "lastUpdatedOn": 1718350598.970000000,
                "lastUpdatedBy": 75101444,
                "customFields": {},
                "active": true
            },
            {
                "id": "6644426d60646c1208ede8f3",
                "orgId": 100458,
                "name": "string8",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "string",
                "startOn": 1684087053.290000000,
                "expiresOn": 1778781453.290000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "tags": [
                    {
                        "name": "string",
                        "value": "string"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
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
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1715749485.770000000,
                "createdBy": 123,
                "lastUpdatedOn": 1715749546.049000000,
                "lastUpdatedBy": 62090013,
                "customFields": {},
                "active": true
            },
            {
                "id": "662748a08fe258516a88fe88",
                "orgId": 100458,
                "name": "Badge Issue earn",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 3,
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "Issued",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1713850528.634000000,
                "createdBy": 75086856,
                "lastUpdatedOn": 1713850528.634000000,
                "lastUpdatedBy": 75086856,
                "customFields": {},
                "active": true
            },
            {
                "id": "6627303e8fe258516a88fde5",
                "orgId": 100458,
                "name": "BADGEASDF1224",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions",
                "startOn": 1716803487.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1713844286.989000000,
                "createdBy": 75086856,
                "lastUpdatedOn": 1713844286.989000000,
                "lastUpdatedBy": 75086856,
                "customFields": {},
                "active": true
            },
            {
                "id": "66272f558fe258516a88fde4",
                "orgId": 100458,
                "name": "BADGEASDF122",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1716803487.000000000,
                "expiresOn": 1726804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1713844053.980000000,
                "createdBy": 75086856,
                "lastUpdatedOn": 1713844053.980000000,
                "lastUpdatedBy": 75086856,
                "customFields": {},
                "active": true
            },
            {
                "id": "652fc32a2aa6a339209b359c",
                "orgId": 100458,
                "name": "testbadge67",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "testbadge",
                "startOn": 1698586638.000000000,
                "expiresOn": 1726235957.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    }
                ],
                "tags": [
                    {
                        "name": "key",
                        "value": "value"
                    }
                ],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "xyz",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1697628970.378000000,
                "createdBy": 75078478,
                "lastUpdatedOn": 1700805189.402000000,
                "lastUpdatedBy": 75069206,
                "customFields": {},
                "active": false
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 6,
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
        "metaBasicDetails": [
            {
                "id": "66e81c9f55c5a33b4025a405",
                "orgId": 100606,
                "name": "Changes_release_t1",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Pls do not edit this badge",
                "startOn": 1726488011.000000000,
                "expiresOn": 1727634600.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1726487711.607000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1726487711.607000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d5a2c6d9bdfb67905f9ffa",
                "orgId": 100606,
                "name": "Valued Customer",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 1,
                "description": "Valued Customer",
                "startOn": 1725277170.000000000,
                "expiresOn": 1730313000.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "570f7bc6-28a5-4830-9b1e-67e87c7b08ba",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_UN_EARNED_-1-XmX1y.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "661fb970-c6e2-49e6-a55f-71282e57e186",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_IN_PROGRESS_cvx7zosE.png",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "a118a96e-ac73-47b3-b4bb-28edcfd69577",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_EARNED_ftBWsb1n.png",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21106,
                        "allocationStrategyId": 4222,
                        "expirationStrategyId": 4187,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1725276870.838000000,
                "createdBy": 75067382,
                "lastUpdatedOn": 1725276870.838000000,
                "lastUpdatedBy": 75067382,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d1a06ad9bdfb67905f8b2d",
                "orgId": 100606,
                "name": "creating exfghjkl;'pired badge with FW limitsdxgfchgjvkbl;''",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1613100468.000000000,
                "expiresOn": 1735583400.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21045,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1725014122.263000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1726031967.710000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d1a062b2e08714b708e38b",
                "orgId": 100606,
                "name": "creating exfghjkl;'pired badge with FW limits",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1713100468.000000000,
                "expiresOn": 1714435200.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21044,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1725014114.985000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1725014114.985000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d15f19d9bdfb67905f89ba",
                "orgId": 100606,
                "name": "20k Km completed",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "20k Km completed",
                "startOn": 1724997700.000000000,
                "expiresOn": 1730313000.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "1bf4a2e3-ccee-4235-9bf8-90b29f8c4138",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_UN_EARNED_TAAsbbKz.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "5672bfac-6d97-43f9-8d7b-5f4dd06e70bf",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_IN_PROGRESS_as9K_mvG.png",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "a5953de4-5a96-4f3b-8617-c9821125cb26",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_EARNED_7OCfoPpz.png",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns",
                        "Journeys",
                        "Milestones",
                        "Loyalty_Promotion",
                        "Goodwill_Module",
                        "Rewards_Catalog",
                        "Referral_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "626_20k Km completed_243b0b00",
                            "isActive": false
                        }
                    ]
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21037,
                        "allocationStrategyId": 4222,
                        "expirationStrategyId": 4187,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 3,
                "createdOn": 1724997401.825000000,
                "createdBy": 75067382,
                "lastUpdatedOn": 1727681594.599000000,
                "lastUpdatedBy": 75077242,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66cc28d6c9250329d4a7af42",
                "orgId": 100606,
                "name": "Badge Gear Now",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1724656130.000000000,
                "expiresOn": 1727634600.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1724655830.621000000,
                "createdBy": 75069206,
                "lastUpdatedOn": 1724909570.325000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66c84c98c9250329d4a79bcc",
                "orgId": 100606,
                "name": "test limits 5678490",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1724402806.000000000,
                "expiresOn": 1814435200.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "COUPON",
                        "seriesId": 13745
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1724402840.666000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1724403007.947000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66bb292d84aa68671ad105bc",
                "orgId": 100606,
                "name": "creating expired badge with FW limits",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1623100468.000000000,
                "expiresOn": 1723100468.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 20710,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1723541805.643000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1723541805.643000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66b9fda5cd418606584c6197",
                "orgId": 100606,
                "name": "test limits 56789",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1723465139.000000000,
                "expiresOn": 1823465192.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "COUPON",
                        "seriesId": 13745
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1723465125.586000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1723465125.586000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66b9fd41014d6a301f73a568",
                "orgId": 100606,
                "name": "test limits 28s",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1723100468.000000000,
                "expiresOn": 1854035092.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 20679,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1723465025.031000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1723465025.031000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 102,
            "totalPages": 11
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "66e81c9f55c5a33b4025a405",
                "orgId": 100606,
                "name": "Changes_release_t1",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Pls do not edit this badge",
                "startOn": 1726488011.000000000,
                "expiresOn": 1727634600.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1726487711.607000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1726487711.607000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d5a2c6d9bdfb67905f9ffa",
                "orgId": 100606,
                "name": "Valued Customer",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 1,
                "description": "Valued Customer",
                "startOn": 1725277170.000000000,
                "expiresOn": 1730313000.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "570f7bc6-28a5-4830-9b1e-67e87c7b08ba",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_UN_EARNED_-1-XmX1y.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "661fb970-c6e2-49e6-a55f-71282e57e186",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_IN_PROGRESS_cvx7zosE.png",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "a118a96e-ac73-47b3-b4bb-28edcfd69577",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_EARNED_ftBWsb1n.png",
                        "tag": "EARNED"
                    }
                ],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21106,
                        "allocationStrategyId": 4222,
                        "expirationStrategyId": 4187,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1725276870.838000000,
                "createdBy": 75067382,
                "lastUpdatedOn": 1725276870.838000000,
                "lastUpdatedBy": 75067382,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d1a06ad9bdfb67905f8b2d",
                "orgId": 100606,
                "name": "creating exfghjkl;'pired badge with FW limitsdxgfchgjvkbl;''",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1613100468.000000000,
                "expiresOn": 1735583400.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21045,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1725014122.263000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1726031967.710000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d1a062b2e08714b708e38b",
                "orgId": 100606,
                "name": "creating exfghjkl;'pired badge with FW limits",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1713100468.000000000,
                "expiresOn": 1714435200.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21044,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1725014114.985000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1725014114.985000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66d15f19d9bdfb67905f89ba",
                "orgId": 100606,
                "name": "20k Km completed",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "20k Km completed",
                "startOn": 1724997700.000000000,
                "expiresOn": 1730313000.000000000,
                "status": "LIVE",
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "1bf4a2e3-ccee-4235-9bf8-90b29f8c4138",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_UN_EARNED_TAAsbbKz.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "5672bfac-6d97-43f9-8d7b-5f4dd06e70bf",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_IN_PROGRESS_as9K_mvG.png",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "a5953de4-5a96-4f3b-8617-c9821125cb26",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_EARNED_7OCfoPpz.png",
                        "tag": "EARNED"
                    }
                ],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns",
                        "Journeys",
                        "Milestones",
                        "Loyalty_Promotion",
                        "Goodwill_Module",
                        "Rewards_Catalog",
                        "Referral_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "626_20k Km completed_243b0b00",
                            "isActive": false
                        }
                    ]
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 21037,
                        "allocationStrategyId": 4222,
                        "expirationStrategyId": 4187,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 3,
                "createdOn": 1724997401.825000000,
                "createdBy": 75067382,
                "lastUpdatedOn": 1727681594.599000000,
                "lastUpdatedBy": 75077242,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66cc28d6c9250329d4a7af42",
                "orgId": 100606,
                "name": "Badge Gear Now",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1724656130.000000000,
                "expiresOn": 1727634600.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1724655830.621000000,
                "createdBy": 75069206,
                "lastUpdatedOn": 1724909570.325000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66c84c98c9250329d4a79bcc",
                "orgId": 100606,
                "name": "test limits 5678490",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1724402806.000000000,
                "expiresOn": 1814435200.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "COUPON",
                        "seriesId": 13745
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1724402840.666000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1724403007.947000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66bb292d84aa68671ad105bc",
                "orgId": 100606,
                "name": "creating expired badge with FW limits",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1623100468.000000000,
                "expiresOn": 1723100468.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 20710,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1723541805.643000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1723541805.643000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66b9fda5cd418606584c6197",
                "orgId": 100606,
                "name": "test limits 56789",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1723465139.000000000,
                "expiresOn": 1823465192.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "RELATIVE",
                    "relativeExpirytype": "WEEKS",
                    "value": 2
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "COUPON",
                        "seriesId": 13745
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1723465125.586000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1723465125.586000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            },
            {
                "id": "66b9fd41014d6a301f73a568",
                "orgId": 100606,
                "name": "test limits 28s",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1723100468.000000000,
                "expiresOn": 1854035092.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "WITH_BADGE_META",
                    "expiresOn": null,
                    "expireWithBadgeMeta": true
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "benefits": [
                    {
                        "benefitType": "LOYALTY_POINTS",
                        "programId": 626,
                        "promotionId": 20679,
                        "allocationStrategyId": 1489,
                        "expirationStrategyId": 3843,
                        "defaultTillId": null
                    }
                ],
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1723465025.031000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1723465025.031000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 102,
            "totalPages": 11
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "667e41573778145cbb90f217",
                "orgId": 100606,
                "name": "sanity_backlog_test_edit",
                "badgeGroupId": "664f0d8a9a2c373c7d767e9b",
                "badgeGroupName": "Festive season badges",
                "badgeRank": 43,
                "description": "This is to test the fixed done for sanity backlog",
                "startOn": 1719550702.000000000,
                "expiresOn": 1719685800.000000000,
                "status": "EXPIRED",
                "images": [
                    {
                        "name": "This is to test the very long badge name ...................",
                        "fileSvcHandle": "d36a5a42-2ea0-4eab-a1b5-908707a40e5a",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_UN_EARNED_rWcVLEOz.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1719599400.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1719550295.516000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1719550429.802000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "667ce91798592f327b846d0d",
                "orgId": 100606,
                "name": "test badge 1240",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 12,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1719462168.000000000,
                "expiresOn": 1811843200.000000000,
                "status": "LIVE",
                "images": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1828722800.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1719462167.823000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1719462584.848000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true",
                    "Points associated with badge": "50"
                },
                "active": false
            },
            {
                "id": "667c5246089f1723a94a54ac",
                "orgId": 100606,
                "name": "sdwefrgfhjk",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1719423858.000000000,
                "expiresOn": 1722364200.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1719423858.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1719423558.862000000,
                "createdBy": 75069206,
                "lastUpdatedOn": 1720083126.042000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6661858044c9db5c2fcf7b9b",
                "orgId": 100606,
                "name": "Copy of Keshav_pointIssual_t1",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1717667497.000000000,
                "expiresOn": 1719685800.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1717667200.038000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1717667200.038000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "66612c733116f9290c4042e3",
                "orgId": 100606,
                "name": "Keshav_pointIssual_t1",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1717644797.000000000,
                "expiresOn": 1719685800.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1717644403.436000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1717644667.233000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "665952d946bd1129b0ae1ed4",
                "orgId": 100606,
                "name": "testing badges in campaigns 4124",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1717129966.000000000,
                "expiresOn": 1806804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issuedCount": 1,
                "earnedCount": 0,
                "createdOn": 1717129945.156000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148708.549000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6659523946bd1129b0ae1ed1",
                "orgId": 100606,
                "name": "testing badges in campaigns 4",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1717129820.000000000,
                "expiresOn": 1806804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 1,
                "earnedCount": 0,
                "createdOn": 1717129785.784000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148767.241000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "665950c246bd1129b0ae1ed0",
                "orgId": 100606,
                "name": "test points issual313",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1717129500.000000000,
                "expiresOn": 1828754110.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 1,
                "createdOn": 1717129410.477000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148770.144000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6656aa8846bd1129b0ae1241",
                "orgId": 100606,
                "name": "test points issual323241",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1716955790.000000000,
                "expiresOn": 1816955746.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1928754110.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123451",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 1,
                "createdOn": 1716955784.128000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148772.755000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6655b5219a2c373c7d769c66",
                "orgId": 100606,
                "name": "test badge 1246",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1716892961.000000000,
                "expiresOn": 1811843200.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1828722600.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1716892961.449000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148699.947000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true",
                    "Points associated with badge": "50"
                },
                "active": false
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 261,
            "totalPages": 27
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "metaBasicDetails": [
            {
                "id": "667e41573778145cbb90f217",
                "orgId": 100606,
                "name": "sanity_backlog_test_edit",
                "badgeGroupId": "664f0d8a9a2c373c7d767e9b",
                "badgeGroupName": "Festive season badges",
                "badgeRank": 43,
                "description": "This is to test the fixed done for sanity backlog",
                "startOn": 1719550702.000000000,
                "expiresOn": 1719685800.000000000,
                "status": "EXPIRED",
                "images": [
                    {
                        "name": "This is to test the very long badge name ...................",
                        "fileSvcHandle": "d36a5a42-2ea0-4eab-a1b5-908707a40e5a",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/CREATE_UN_EARNED_rWcVLEOz.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1719599400.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion",
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1719550295.516000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1719550429.802000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "667ce91798592f327b846d0d",
                "orgId": 100606,
                "name": "test badge 1240",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 12,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1719462168.000000000,
                "expiresOn": 1811843200.000000000,
                "status": "LIVE",
                "images": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1828722800.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1719462167.823000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1719462584.848000000,
                "lastUpdatedBy": 75097962,
                "customFields": {
                    "Priority": "1",
                    "2024": "true",
                    "Points associated with badge": "50"
                },
                "active": false
            },
            {
                "id": "667c5246089f1723a94a54ac",
                "orgId": 100606,
                "name": "sdwefrgfhjk",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1719423858.000000000,
                "expiresOn": 1722364200.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1719423858.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1719423558.862000000,
                "createdBy": 75069206,
                "lastUpdatedOn": 1720083126.042000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6661858044c9db5c2fcf7b9b",
                "orgId": 100606,
                "name": "Copy of Keshav_pointIssual_t1",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1717667497.000000000,
                "expiresOn": 1719685800.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1717667200.038000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1717667200.038000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "66612c733116f9290c4042e3",
                "orgId": 100606,
                "name": "Keshav_pointIssual_t1",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": null,
                "startOn": 1717644797.000000000,
                "expiresOn": 1719685800.000000000,
                "status": "EXPIRED",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1717644403.436000000,
                "createdBy": 75085326,
                "lastUpdatedOn": 1717644667.233000000,
                "lastUpdatedBy": 75085326,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "665952d946bd1129b0ae1ed4",
                "orgId": 100606,
                "name": "testing badges in campaigns 4124",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1717129966.000000000,
                "expiresOn": 1806804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issuedCount": 1,
                "earnedCount": 0,
                "createdOn": 1717129945.156000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148708.549000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6659523946bd1129b0ae1ed1",
                "orgId": 100606,
                "name": "testing badges in campaigns 4",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
                "startOn": 1717129820.000000000,
                "expiresOn": 1806804000.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "ISSUE_EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty",
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 1,
                "earnedCount": 0,
                "createdOn": 1717129785.784000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148767.241000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "665950c246bd1129b0ae1ed0",
                "orgId": 100606,
                "name": "test points issual313",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1717129500.000000000,
                "expiresOn": 1828754110.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "NEVER"
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 1,
                "createdOn": 1717129410.477000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148770.144000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6656aa8846bd1129b0ae1241",
                "orgId": 100606,
                "name": "test points issual323241",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1716955790.000000000,
                "expiresOn": 1816955746.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1928754110.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "123451",
                            "isActive": true
                        }
                    ]
                },
                "issuedCount": 0,
                "earnedCount": 1,
                "createdOn": 1716955784.128000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148772.755000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true"
                },
                "active": false
            },
            {
                "id": "6655b5219a2c373c7d769c66",
                "orgId": 100606,
                "name": "test badge 1246",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 11,
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "startOn": 1716892961.000000000,
                "expiresOn": 1811843200.000000000,
                "status": "LIVE",
                "images": [],
                "tags": [],
                "earnType": "EARN",
                "earnedBadgeExpiry": {
                    "expiryType": "ABSOLUTE",
                    "type": "FIXED_DATE",
                    "expiresOn": 1828722600.000000000,
                    "expireWithBadgeMeta": false
                },
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issuedCount": 0,
                "earnedCount": 0,
                "createdOn": 1716892961.449000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1717148699.947000000,
                "lastUpdatedBy": 75069206,
                "customFields": {
                    "Priority": "1",
                    "2024": "true",
                    "Points associated with badge": "50"
                },
                "active": false
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 261,
            "totalPages": 27
        }
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`