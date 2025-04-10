# Get all customer badgesget

This API allows you to retrieve lists of badges available for enrollment, available for issual, earned, and expired badges for a particular customer.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.Start time and end time are in UTC zone

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- Start time and end time are in UTC zone

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/v1/badges/management/{customerId} |

| HTTP Method | GET |

| Pagination | Yes |

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

Endpoint:https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/62090013?badgeStatus=UPCOMING&badgeType=AVAILABLE&page=0&size=50

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/62090013?badgeStatus=UPCOMING&badgeType=AVAILABLE&page=0&size=50
```

Endpoint using theX-CAP-CUSTOMER-IDENTIFIER: emailheader:https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]

`X-CAP-CUSTOMER-IDENTIFIER: email`

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]
```

[[email protected]](/cdn-cgi/l/email-protection)

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| customerId* | String | Unique ID of the customer. |

| sortOn | Enum | LAST_EARNED_ON_DATE: Sorts customer badges by the last date they were earned.LAST_EARNED_EVENT_DATE: Sorts customer badges by the last event date when they were earned. |



# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| Page | Integer | Number of pages. |

| Size | Integer | Size of the page. Default: 10 |

| sortOn | Enum | EXPIRES_ON [Default]: Sorts customer badges by their expiration date.LAST_MODIFIED_DATE: Sorts customer badges by the last date they were modified.LAST_ISSUED_DATE: Sorts customer badges by the last date they were issued.LAST_EXPIRED_BADGE: Sorts customer badges by the last date they expired.LAST_EARNED_EVENT_DATE: Sorts customer badges by the last event date when they were earned.LAST_EARNED_ON_DATE: Sorts customer badges by the last date they were earned. |

| order | Enum | Sort the rewards based on order of rewards. Supported Values: DESC [Default], ASC |

| name | String | Name of badge |

| badgeType | Enum | The type of badge to display. Supported Values:AVAILABLE_TO_ISSUE: Filters the badges of the type Enrol and Issue. This is the default filter.AVAILABLE: Filters the badges of the type Direct Issue that are available to be earned directly by the customer.EARNED: Filters the badges that are issued by the customer and are active in the customer’s profile.EXPIRED: Filters the badges that are expired. |

| action | Enum | Indicates if the badge is active. Supported values: ACTIVATED, DEACTIVATED |

| badgeStatus | Enum | Status of badge. Supported values: UPCOMING, LIVE, EXPIRED |

| owner | Enum | Type of owner the badge is associated with. Supported values:Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| claimedBy | Enum | The badge claimed by the module. Supported values:Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| startOn | Date | Start date of the badge. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| expiresOn | Date | The expiry date of the badge. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| startOnOperator | Enum | startOn of badge w.r.t to passed startOn. Supported values: LESS_THAN, GREATER_THAN |

| expiresOnOperator | Enum | expiresOn of badge w.r.t to passed expiresOn. Supported values: LESS_THAN, GREATER_THAN |

| groupId | String | Badge group ID to which the badge belongs. Retrieves only the badges belonging to the specified badge group ID. |



`AVAILABLE_TO_ISSUE`

`AVAILABLE`

`EARNED`

`EXPIRED`

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/62090013
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/62090013
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/management/[email protected]
```

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| name | String | The name of the badge. |

| description | String | A brief description of the badge. |

| badgeMetaId | String | The unique identifier for the badge metadata. |

| badgeType | String | The type of badge. |

| createdOn | Float | The Unix timestamp marking when the badge was created. |

| lastUpdatedOn | Float | The timestamp with the most recent update to the badge. |

| images | Object | A collection of image objects associated with the badge. |

| badgeStatus | String | The status of the badge. |

| lastEarnedOn | Float | The timestamp marking when the badge was last earned. |

| startsOn | Float | The timestamp marking the start date/time for the badge's validity. |

| expiresOn | Float | The timestamp marking the expiration date/time for the badge. |

| earnCount | Integer | The number of times the badge has been earned. |

| issueStatus | String | The status of the badge issue. |

| active | Boolean | Indicates whether the badge is currently active. |

| page | Integer | The current page number of the pagination. |

| size | Integer | The number of items per page in the pagination. |

| total | Integer | The total number of items available across all pages. |

| totalPages | Integer | The total number of pages available. |

| errors | Array | A collection of any errors that occurred during the request. Typically empty if no errors occurred. |

| warnings | Array | A collection of warnings that arose during the request. Typically empty if no warnings occurred. |

| badgeGroupId | String | Unique group ID associated with the badge. |

| badgeRank | Integer | Badge rank is the rank of a badge within a group. |

| badgeGroupName | Integer | Name of the badge group. |

| ownership | Object | The module for which the badge is being created. |

| ownership.restrictedToOwners | Array | Specifies the owner categories that are allowed to claim the badge. |

| ownership.claims | Array | Specifies the owner by which the badge has been claimed. |

| lastEarnEventDate | Float | Date and time when a triggering event (transactional or behavioural) occurred, initiating the badge earning. Time format: Epoch format (UNIX timestamp in milliseconds). |

| lastEarnedOnDate | Float | Date and time when the badge was awarded to the customer. Time format: Epoch format (UNIX timestamp in milliseconds). |



```
{
    "data": {
        "customerBadges": [
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051000000,
                "lastUpdatedOn": 1702280979.343000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976.000000000,
                "expiresOn": 1702367376.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890800,
                "lastEarnEventDate": 1748880000
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "description": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "badgeMetaId": "6576b6e591e0b01c659ad5d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702278885.490000000,
                "lastUpdatedOn": 1702278885.490000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701414885.000000000,
                "expiresOn": 1702365285.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890900,
                "lastEarnEventDate": 1748880100
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "description": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "badgeMetaId": "65705311c71fce4220eb0e30",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701860113.271000000,
                "lastUpdatedOn": 1701860119.622000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700996112.000000000,
                "expiresOn": 1701946512.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175436",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891000,
                "lastEarnEventDate": 1748880200
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "badgeMetaId": "65703b7fc374ec3a66394c66",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701854079.165000000,
                "lastUpdatedOn": 1701854081.274000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700990078.971000000,
                "expiresOn": 1701940478.971000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175427",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891100,
                "lastEarnEventDate": 1748880300
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "badgeMetaId": "65703260c374ec3a66394c62",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701851744.536000000,
                "lastUpdatedOn": 1701851749.241000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700987741.897000000,
                "expiresOn": 1701938141.897000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175420",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891200,
                "lastEarnEventDate": 1748880400
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "description": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "badgeMetaId": "6570166372fdda318e1bf46d",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701844579.216000000,
                "lastUpdatedOn": 1701844579.216000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700980578.916000000,
                "expiresOn": 1701930978.916000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891300,
                "lastEarnEventDate": 1748880500
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "description": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "badgeMetaId": "65700b7f72fdda318e1bf46c",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701841790.816000000,
                "lastUpdatedOn": 1701841790.816000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700977788.798000000,
                "expiresOn": 1701928188.798000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891400,
                "lastEarnEventDate": 1748880600
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "description": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "badgeMetaId": "656efc3fcb54506265bcf9d3",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701772351.825000000,
                "lastUpdatedOn": 1701772351.825000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700908351.490000000,
                "expiresOn": 1701858751.490000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891500,
                "lastEarnEventDate": 1748880700
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "badgeMetaId": "656eceb4cb54506265bcf9d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701760692.318000000,
                "lastUpdatedOn": 1701760692.318000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700896691.906000000,
                "expiresOn": 1701847091.906000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891600,
                "lastEarnEventDate": 1748880800
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "badgeMetaId": "656ec6fdcb54506265bcf9d0",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701758717.618000000,
                "lastUpdatedOn": 1701758717.618000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700894716.271000000,
                "expiresOn": 1701845116.271000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891700,
                "lastEarnEventDate": 1748880900
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 11,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customerBadges": [
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051000000,
                "lastUpdatedOn": 1702280979.343000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976.000000000,
                "expiresOn": 1702367376.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890800,
                "lastEarnEventDate": 1748880000
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "description": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "badgeMetaId": "6576b6e591e0b01c659ad5d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702278885.490000000,
                "lastUpdatedOn": 1702278885.490000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701414885.000000000,
                "expiresOn": 1702365285.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890900,
                "lastEarnEventDate": 1748880100
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "description": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "badgeMetaId": "65705311c71fce4220eb0e30",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701860113.271000000,
                "lastUpdatedOn": 1701860119.622000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700996112.000000000,
                "expiresOn": 1701946512.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175436",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891000,
                "lastEarnEventDate": 1748880200
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "badgeMetaId": "65703b7fc374ec3a66394c66",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701854079.165000000,
                "lastUpdatedOn": 1701854081.274000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700990078.971000000,
                "expiresOn": 1701940478.971000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175427",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891100,
                "lastEarnEventDate": 1748880300
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "badgeMetaId": "65703260c374ec3a66394c62",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701851744.536000000,
                "lastUpdatedOn": 1701851749.241000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700987741.897000000,
                "expiresOn": 1701938141.897000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175420",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891200,
                "lastEarnEventDate": 1748880400
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "description": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "badgeMetaId": "6570166372fdda318e1bf46d",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701844579.216000000,
                "lastUpdatedOn": 1701844579.216000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700980578.916000000,
                "expiresOn": 1701930978.916000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891300,
                "lastEarnEventDate": 1748880500
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "description": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "badgeMetaId": "65700b7f72fdda318e1bf46c",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701841790.816000000,
                "lastUpdatedOn": 1701841790.816000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700977788.798000000,
                "expiresOn": 1701928188.798000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891400,
                "lastEarnEventDate": 1748880600
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "description": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "badgeMetaId": "656efc3fcb54506265bcf9d3",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701772351.825000000,
                "lastUpdatedOn": 1701772351.825000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700908351.490000000,
                "expiresOn": 1701858751.490000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891500,
                "lastEarnEventDate": 1748880700
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "badgeMetaId": "656eceb4cb54506265bcf9d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701760692.318000000,
                "lastUpdatedOn": 1701760692.318000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700896691.906000000,
                "expiresOn": 1701847091.906000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891600,
                "lastEarnEventDate": 1748880800
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "badgeMetaId": "656ec6fdcb54506265bcf9d0",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701758717.618000000,
                "lastUpdatedOn": 1701758717.618000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700894716.271000000,
                "expiresOn": 1701845116.271000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748891700,
                "lastEarnEventDate": 1748880900
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 11,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customerBadges": [
            {
                "name": "demoBadgeName001",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "666638f0ae20cb256ec13e23",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1717975279.579000000,
                "lastUpdatedOn": 1717975460.583000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718083872.611000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1730246437.192000000,
                "earnCount": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748886600,
                "lastEarnEventDate": 1748880000
            },
            {
                "name": "demoBadgeName002",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "6667e2ad120a7b6e9be4fa21",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1718084269.488000000,
                "lastUpdatedOn": 1718084355.481000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718084406.185000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1730246437.192000000,
                "earnCount": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748887200,
                "lastEarnEventDate": 1748876400
            },
            {
                "name": "badgeName_004",
                "description": "demoDescription",
                "badgeMetaId": "6667e615120a7b6e9be4fa25",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1718085141.752000000,
                "lastUpdatedOn": 1718085178.688000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718342251.498000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1724976037.192000000,
                "earnCount": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890800,
                "lastEarnEventDate": 1748880000
            }
        ],
        "pagination": {
            "page": 0,
            "size": 3,
            "total": 3,
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
        "customerBadges": [
            {
                "name": "demoBadgeName001",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "666638f0ae20cb256ec13e23",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1717975279.579000000,
                "lastUpdatedOn": 1717975460.583000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718083872.611000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1730246437.192000000,
                "earnCount": 2,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748886600,
                "lastEarnEventDate": 1748880000
            },
            {
                "name": "demoBadgeName002",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "6667e2ad120a7b6e9be4fa21",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1718084269.488000000,
                "lastUpdatedOn": 1718084355.481000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718084406.185000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1730246437.192000000,
                "earnCount": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748887200,
                "lastEarnEventDate": 1748876400
            },
            {
                "name": "badgeName_004",
                "description": "demoDescription",
                "badgeMetaId": "6667e615120a7b6e9be4fa25",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1718085141.752000000,
                "lastUpdatedOn": 1718085178.688000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1718342251.498000000,
                "startsOn": 1707523237.192000000,
                "expiresOn": 1724976037.192000000,
                "earnCount": 1,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty_Promotion",
                            "referenceId": "12332345",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true,
                "lastEarnedOnDate": 1748890800,
                "lastEarnEventDate": 1748880000
            }
        ],
        "pagination": {
            "page": 0,
            "size": 3,
            "total": 3,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

``

``

json{"data": {"customerBadges": [{"name": "demoBadgeName001","description": "testing-fixed-window-7-2","badgeMetaId": "666638f0ae20cb256ec13e23","badgeType": "EARN","badgeGroupId": null,"badgeGroupName": null,"badgeRank": null,"createdOn": 1717975279.579000000,"lastUpdatedOn": 1717975460.583000000,"images": [{"name": "string","fileSvcHandle": "string","url": "string","tag": "UN_EARNED"}],"badgeStatus": "LIVE","lastEarnedOn": 1718083872.611000000,"startsOn": 1707523237.192000000,"expiresOn": 1730246437.192000000,"earnCount": 2,"ownership": {"restrictedToOwners": ["Loyalty_Promotion"],"claims": [{"ownerType": "Loyalty_Promotion","referenceId": "12332345","isActive": true}]},"issueStatus": null,"active": true,"lastEarnedOnDate": 1748890800,"lastEarnEventDate": 1748880000},{"name": "demoBadgeName002","description": "testing-fixed-window-7-2","badgeMetaId": "6667e2ad120a7b6e9be4fa21","badgeType": "EARN","badgeGroupId": null,"badgeGroupName": null,"badgeRank": null,"createdOn": 1718084269.488000000,"lastUpdatedOn": 1718084355.481000000,"images": [{"name": "string","fileSvcHandle": "string","url": "string","tag": "UN_EARNED"}],"badgeStatus": "LIVE","lastEarnedOn": 1718084406.185000000,"startsOn": 1707523237.192000000,"expiresOn": 1730246437.192000000,"earnCount": 1,"ownership": {"restrictedToOwners": ["Loyalty_Promotion"],"claims": [{"ownerType": "Loyalty_Promotion","referenceId": "12332345","isActive": true}]},"issueStatus": null,"active": true,"lastEarnedOnDate": 1748890900,"lastEarnEventDate": 1748880100},{"name": "badgeName_004","description": "demoDescription","badgeMetaId": "6667e615120a7b6e9be4fa25","badgeType": "EARN","badgeGroupId": null,"badgeGroupName": null,"badgeRank": null,"createdOn": 1718085141.752000000,"lastUpdatedOn": 1718085178.688000000,"images": [{"name": "string","fileSvcHandle": "string","url": "string","tag": "UN_EARNED"}],"badgeStatus": "LIVE","lastEarnedOn": 1718342251.498000000,"startsOn": 1707523237.192000000,"expiresOn": 1724976037.192000000,"earnCount": 1,"ownership": {"restrictedToOwners": ["Loyalty_Promotion"],"claims": [{"ownerType": "Loyalty_Promotion","referenceId": "12332345","isActive": true}]},"issueStatus": null,"active": true,"lastEarnedOnDate": 1748891000,"lastEarnEventDate": 1748880200},{"name": "badgeName_002","description": "demoDescription","badgeMetaId": "6667e0cc120a7b6e9be4fa1a","badgeType": "EARN","badgeGroupId": null,"badgeGroupName": null,"badgeRank": null,"createdOn": 1718083788.379000000,"lastUpdatedOn": 1718083993.258000000,"images": [{"name": "string","fileSvcHandle": "string","url": "string","tag": "UN_EARNED"}],"badgeStatus": "LIVE","lastEarnedOn": 1718083996.431000000,"startsOn": 1707523237.192000000,"expiresOn": 1724976037.192000000,"earnCount": 1,"ownership": {"restrictedToOwners": ["Loyalty_Promotion"],"claims": [{"ownerType": "Loyalty_Promotion","referenceId": "12332345","isActive": true}]},"issueStatus": null,"active": true,"lastEarnedOnDate": 1748891100,"lastEarnEventDate": 1748880300}],"pagination": {"page": 0,"size": 4,"total": 4,"totalPages": 1}},"errors": [],"warnings": []}

``

``

```
{
    "data": {
        "customerBadges": [
            {
                "name": "string9",
                "description": "string",
                "badgeMetaId": "664442c560646c1208ede8f4",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1715749573.082000000,
                "lastUpdatedOn": 1715749613.449000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1715749689.729000000,
                "startsOn": 1684087053.290000000,
                "expiresOn": 1778781453.290000000,
                "earnCount": 1,
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
                "issueStatus": null,
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
        "customerBadges": [
            {
                "name": "string9",
                "description": "string",
                "badgeMetaId": "664442c560646c1208ede8f4",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1715749573.082000000,
                "lastUpdatedOn": 1715749613.449000000,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": 1715749689.729000000,
                "startsOn": 1684087053.290000000,
                "expiresOn": 1778781453.290000000,
                "earnCount": 1,
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
                "issueStatus": null,
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
        "customerBadges": [
            {
                "name": "badge issual3",
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "badgeMetaId": "6673b08c39c6a546eb054726",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "createdOn": 1718857868.451,
                "lastUpdatedOn": 1718857868.451,
                "images": [],
                "badgeStatus": "UPCOMING",
                "lastEarnedOn": null,
                "startsOn": 1818857606,
                "expiresOn": 1828857606,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issueStatus": null,
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
        "customerBadges": [
            {
                "name": "badge issual3",
                "description": "Purchase products worth minimum 1K in the month of March and get this badge",
                "badgeMetaId": "6673b08c39c6a546eb054726",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": 1,
                "createdOn": 1718857868.451,
                "lastUpdatedOn": 1718857868.451,
                "images": [],
                "badgeStatus": "UPCOMING",
                "lastEarnedOn": null,
                "startsOn": 1818857606,
                "expiresOn": 1828857606,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": []
                },
                "issueStatus": null,
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
        "customerBadges": [
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051000000,
                "lastUpdatedOn": 1702280979.343000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976.000000000,
                "expiresOn": 1702367376.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "description": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "badgeMetaId": "6576b6e591e0b01c659ad5d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702278885.490000000,
                "lastUpdatedOn": 1702278885.490000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701414885.000000000,
                "expiresOn": 1702365285.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "description": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "badgeMetaId": "65705311c71fce4220eb0e30",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701860113.271000000,
                "lastUpdatedOn": 1701860119.622000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700996112.000000000,
                "expiresOn": 1701946512.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175436",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "badgeMetaId": "65703b7fc374ec3a66394c66",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701854079.165000000,
                "lastUpdatedOn": 1701854081.274000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700990078.971000000,
                "expiresOn": 1701940478.971000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175427",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "badgeMetaId": "65703260c374ec3a66394c62",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701851744.536000000,
                "lastUpdatedOn": 1701851749.241000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700987741.897000000,
                "expiresOn": 1701938141.897000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175420",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "description": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "badgeMetaId": "6570166372fdda318e1bf46d",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701844579.216000000,
                "lastUpdatedOn": 1701844579.216000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700980578.916000000,
                "expiresOn": 1701930978.916000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "description": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "badgeMetaId": "65700b7f72fdda318e1bf46c",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701841790.816000000,
                "lastUpdatedOn": 1701841790.816000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700977788.798000000,
                "expiresOn": 1701928188.798000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "description": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "badgeMetaId": "656efc3fcb54506265bcf9d3",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701772351.825000000,
                "lastUpdatedOn": 1701772351.825000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700908351.490000000,
                "expiresOn": 1701858751.490000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "badgeMetaId": "656eceb4cb54506265bcf9d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701760692.318000000,
                "lastUpdatedOn": 1701760692.318000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700896691.906000000,
                "expiresOn": 1701847091.906000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "badgeMetaId": "656ec6fdcb54506265bcf9d0",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701758717.618000000,
                "lastUpdatedOn": 1701758717.618000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700894716.271000000,
                "expiresOn": 1701845116.271000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 11,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customerBadges": [
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051000000,
                "lastUpdatedOn": 1702280979.343000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976.000000000,
                "expiresOn": 1702367376.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "description": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "badgeMetaId": "6576b6e591e0b01c659ad5d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702278885.490000000,
                "lastUpdatedOn": 1702278885.490000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701414885.000000000,
                "expiresOn": 1702365285.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "description": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "badgeMetaId": "65705311c71fce4220eb0e30",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701860113.271000000,
                "lastUpdatedOn": 1701860119.622000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700996112.000000000,
                "expiresOn": 1701946512.000000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175436",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "badgeMetaId": "65703b7fc374ec3a66394c66",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701854079.165000000,
                "lastUpdatedOn": 1701854081.274000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700990078.971000000,
                "expiresOn": 1701940478.971000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175427",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:06:41.897753",
                "badgeMetaId": "65703260c374ec3a66394c62",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701851744.536000000,
                "lastUpdatedOn": 1701851749.241000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700987741.897000000,
                "expiresOn": 1701938141.897000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175420",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "description": "Automation_Test_Badge_Issue_2023-12-06 12:07:18.916219",
                "badgeMetaId": "6570166372fdda318e1bf46d",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701844579.216000000,
                "lastUpdatedOn": 1701844579.216000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700980578.916000000,
                "expiresOn": 1701930978.916000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "description": "Automation_Test_Badge_Issue_2023-12-06 11:20:48.799005",
                "badgeMetaId": "65700b7f72fdda318e1bf46c",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701841790.816000000,
                "lastUpdatedOn": 1701841790.816000000,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700977788.798000000,
                "expiresOn": 1701928188.798000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "description": "Automation_Test_Badge_Issue_2023-12-05 16:03:31.490835",
                "badgeMetaId": "656efc3fcb54506265bcf9d3",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701772351.825000000,
                "lastUpdatedOn": 1701772351.825000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700908351.490000000,
                "expiresOn": 1701858751.490000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:49:11.906793",
                "badgeMetaId": "656eceb4cb54506265bcf9d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701760692.318000000,
                "lastUpdatedOn": 1701760692.318000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700896691.906000000,
                "expiresOn": 1701847091.906000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "description": "Automation_Test_Badge_Issue_2023-12-05 12:16:16.271285",
                "badgeMetaId": "656ec6fdcb54506265bcf9d0",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701758717.618000000,
                "lastUpdatedOn": 1701758717.618000000,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700894716.271000000,
                "expiresOn": 1701845116.271000000,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 11,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customerBadges": [
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655729a8be1b54e57d602f1",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875930.419,
                "lastUpdatedOn": 1716875930.419,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655746d8be1b54e57d60346",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716876397.275,
                "lastUpdatedOn": 1716876397.275,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "testName001",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "665574ff8be1b54e57d60347",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716876543.525,
                "lastUpdatedOn": 1716876645.707,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "665572068be1b54e57d602f0",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875781.376,
                "lastUpdatedOn": 1716875781.376,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655731b8be1b54e57d60304",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716876059.101,
                "lastUpdatedOn": 1716876059.101,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "665572b48be1b54e57d602f2",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875956.673,
                "lastUpdatedOn": 1716875956.673,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051,
                "lastUpdatedOn": 1702280979.343,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976,
                "expiresOn": 1702367376,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "description": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "badgeMetaId": "6576b6e591e0b01c659ad5d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702278885.49,
                "lastUpdatedOn": 1702278885.49,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701414885,
                "expiresOn": 1702365285,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "description": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "badgeMetaId": "65705311c71fce4220eb0e30",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701860113.271,
                "lastUpdatedOn": 1701860119.622,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700996112,
                "expiresOn": 1701946512,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175436",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "badgeMetaId": "65703b7fc374ec3a66394c66",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701854079.165,
                "lastUpdatedOn": 1701854081.274,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700990078.971,
                "expiresOn": 1701940478.971,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175427",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 17,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customerBadges": [
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655729a8be1b54e57d602f1",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875930.419,
                "lastUpdatedOn": 1716875930.419,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655746d8be1b54e57d60346",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716876397.275,
                "lastUpdatedOn": 1716876397.275,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "testName001",
                "description": "testing-fixed-window-7-2",
                "badgeMetaId": "665574ff8be1b54e57d60347",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716876543.525,
                "lastUpdatedOn": 1716876645.707,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "665572068be1b54e57d602f0",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875781.376,
                "lastUpdatedOn": 1716875781.376,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "6655731b8be1b54e57d60304",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716876059.101,
                "lastUpdatedOn": 1716876059.101,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "demoName",
                "description": "demoDescription",
                "badgeMetaId": "665572b48be1b54e57d602f2",
                "badgeType": "EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1716875956.673,
                "lastUpdatedOn": 1716875956.673,
                "images": [
                    {
                        "name": "string",
                        "fileSvcHandle": "string",
                        "url": "string",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1707523237.192,
                "expiresOn": 1711756837.192,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty_Promotion"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "description": "Automation_Test_Badge_Issue_2023-12-11 13:20:36.812999",
                "badgeMetaId": "6576bf1191e0b01c659ad5d6",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702280977.051,
                "lastUpdatedOn": 1702280979.343,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701416976,
                "expiresOn": 1702367376,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175688",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "description": "Automation_Test_Badge_Issue_2023-12-11 12:45:45.409511",
                "badgeMetaId": "6576b6e591e0b01c659ad5d1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1702278885.49,
                "lastUpdatedOn": 1702278885.49,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1701414885,
                "expiresOn": 1702365285,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": []
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "description": "Automation_Test_Badge_Issue_2023-12-06 16:26:12.341557",
                "badgeMetaId": "65705311c71fce4220eb0e30",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701860113.271,
                "lastUpdatedOn": 1701860119.622,
                "images": [
                    {
                        "name": "unearned",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "IN_PROGRESS"
                    },
                    {
                        "name": "unearned1",
                        "fileSvcHandle": "qwer-8634-8938",
                        "url": "https://badge.url",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700996112,
                "expiresOn": 1701946512,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175436",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "description": "Automation_Test_Badge_Issue_2023-12-06 14:45:38.971644",
                "badgeMetaId": "65703b7fc374ec3a66394c66",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": null,
                "badgeGroupName": null,
                "badgeRank": null,
                "createdOn": 1701854079.165,
                "lastUpdatedOn": 1701854081.274,
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
                "badgeStatus": "EXPIRED",
                "lastEarnedOn": null,
                "startsOn": 1700990078.971,
                "expiresOn": 1701940478.971,
                "earnCount": 0,
                "ownership": {
                    "restrictedToOwners": [
                        "Audience_Campaigns"
                    ],
                    "claims": [
                        {
                            "ownerType": "Audience_Campaigns",
                            "referenceId": "1175427",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 17,
            "totalPages": 2
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customerBadges": [
            {
                "name": "Birthday Badge",
                "description": "Make a purchase during your birthday month and get a 40% discount coupon",
                "badgeMetaId": "653dea07b3cda7078c7c68ee",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 2,
                "createdOn": 1698556674.481000000,
                "lastUpdatedOn": 1716454946.522000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "6d5bbab0-e75c-46c4-ac61-e9f7efeb8863",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_EARNED_P-Hmb96D.png",
                        "tag": "EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "8be2b78e-b1d6-4127-926a-2cbed7eb2785",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_UN_EARNED_vDx_DRdk.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": null,
                "startsOn": 1698557400.000000000,
                "expiresOn": 1828754110.000000000,
                "earnCount": null,
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
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Fuel Master",
                "description": "Spend $500 on fuel purchases and get 10% off on next fuel purchase and 100 bonus points",
                "badgeMetaId": "653df084b3cda7078c7c68f1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 1,
                "createdOn": 1698558084.664000000,
                "lastUpdatedOn": 1707304090.322000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "b7d6460d-471f-4c73-9e6e-2a2ee5bad45e",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653df084b3cda7078c7c68f1_UN_EARNED_KYgyN232.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "98ddc200-fa9a-4e64-abc1-cf4ca52ac434",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653df084b3cda7078c7c68f1_EARNED_3BX5SiLR.jpeg",
                        "tag": "EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": null,
                "startsOn": 1698559200.000000000,
                "expiresOn": 1828754110.000000000,
                "earnCount": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "1234",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "980",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 2,
            "total": 2,
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
        "customerBadges": [
            {
                "name": "Birthday Badge",
                "description": "Make a purchase during your birthday month and get a 40% discount coupon",
                "badgeMetaId": "653dea07b3cda7078c7c68ee",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 2,
                "createdOn": 1698556674.481000000,
                "lastUpdatedOn": 1716454946.522000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "6d5bbab0-e75c-46c4-ac61-e9f7efeb8863",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_EARNED_P-Hmb96D.png",
                        "tag": "EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "8be2b78e-b1d6-4127-926a-2cbed7eb2785",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653dea07b3cda7078c7c68ee_UN_EARNED_vDx_DRdk.png",
                        "tag": "UN_EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": null,
                "startsOn": 1698557400.000000000,
                "expiresOn": 1828754110.000000000,
                "earnCount": null,
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
                "issueStatus": null,
                "active": true
            },
            {
                "name": "Fuel Master",
                "description": "Spend $500 on fuel purchases and get 10% off on next fuel purchase and 100 bonus points",
                "badgeMetaId": "653df084b3cda7078c7c68f1",
                "badgeType": "ISSUE_EARN",
                "badgeGroupId": "65c3600c60d9261bdd8a6410",
                "badgeGroupName": "2024 Badges",
                "badgeRank": 1,
                "createdOn": 1698558084.664000000,
                "lastUpdatedOn": 1707304090.322000000,
                "images": [
                    {
                        "name": "",
                        "fileSvcHandle": "b7d6460d-471f-4c73-9e6e-2a2ee5bad45e",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653df084b3cda7078c7c68f1_UN_EARNED_KYgyN232.png",
                        "tag": "UN_EARNED"
                    },
                    {
                        "name": "",
                        "fileSvcHandle": "98ddc200-fa9a-4e64-abc1-cf4ca52ac434",
                        "url": "https://storage.crm.eu.content-cdn.io/fs.capillary.eu/incentives_assets/badges/images/100606/653df084b3cda7078c7c68f1_EARNED_3BX5SiLR.jpeg",
                        "tag": "EARNED"
                    }
                ],
                "badgeStatus": "LIVE",
                "lastEarnedOn": null,
                "startsOn": 1698559200.000000000,
                "expiresOn": 1828754110.000000000,
                "earnCount": null,
                "ownership": {
                    "restrictedToOwners": [
                        "Loyalty"
                    ],
                    "claims": [
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "1234",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "626",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "980",
                            "isActive": true
                        },
                        {
                            "ownerType": "Loyalty",
                            "referenceId": "123",
                            "isActive": true
                        }
                    ]
                },
                "issueStatus": null,
                "active": true
            }
        ],
        "pagination": {
            "page": 0,
            "size": 2,
            "total": 2,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`