# Get brand rewardsget

This API allows you to retrieve rewards of brands that are available for a user to purchase.

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

| URI | api_gateway/rewards/core/v1/user/reward/brand/{brandId} |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/reward/brand/1

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/reward/brand/1
```

# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| userId | String | Unique identifier of the customer. Ex: 75086856 |

| includeExpired | Boolean | Pass includeExpired as true to retrieve expired reward details. |

| page | Integer | Page number to retrieve. To view the first page, set the value to 0. |

| size | Integer | Number of records to display per page. For example, if the total records are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 100. |

| language | Enum | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter toen |



`en`

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| Brand ID* | String | Unique identifier of the brand |



```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/brand/1
```

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/brand/1
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| success | Boolean | Indicates the success of the fetch operation. |

| code | Integer | HTTP status code indicating the result of the operation. |

| message | String | Descriptive message about the operation outcome. |

| id | Integer | Unique identifier of the reward. |

| name | String | Name of the reward. |

| description | String | Description of the reward. |

| imageId | String | Identifier for the image of the reward. |

| imageUrl | String | URL for the image of the reward. |

| thumbnailId | String | Identifier for the thumbnail image of the reward. |

| thumbnailUrl | String | URL for the thumbnail image of the reward. |

| termAndConditionsId | String | Identifier for the terms and conditions document of the reward. |

| termAndConditionsUrl | String | URL for the terms and conditions document of the reward. |

| tier | String | Tier level associated with the reward. |

| label | String | Label associated with the reward. |

| priority | Integer | Priority level of the reward. |

| intouchPoints | Integer | Number of points needed to redeem the reward. |

| group | String | Group associated with the reward. |

| startTime | DateTime | Start time for the reward's availability. |

| endTime | DateTime | End time for the reward's availability. |

| expired | Boolean | Indicates whether the reward is expired. |

| started | Boolean | Indicates whether the reward has started. |

| programId | Integer | Identifier for the program associated with the reward, if any. |

| categoryList | Object | List of categories associated with the reward. |

| customFields | Object | Key-value pairs for custom fields associated with the reward. |

| loyaltyProgramCriteria | Object | Criteria for loyalty programs associated with the reward. |

| restrictions | Object | Restrictions associated with the reward at customer and reward levels. |

| groupName | String | Name of the group associated with the reward. |

| groupRank | Integer | Rank of the group associated with the reward. |

| rewardRank | Integer | Rank of the reward within its category or program. |

| images | Array | List of additional images associated with the reward. |

| videos | Array | List of videos associated with the reward. |

| rewardRevenueDetails | Object | The list of brand commission and end customer details. |

| brandCommission | Float | Commission earned by the brand. |

| endCustomerCommission | Float | Commission earned by the end customer after the transaction. |

| last | Boolean | Indicates if this is the last set of items. |

| totalElements | Integer | Total number of items available. |

| totalPages | Integer | Total number of pages available. |

| numberOfElements | Integer | Number of items in the current set. |

| first | Boolean | Indicates if this is the first set of items. |

| size | Integer | Number of items per set. |

| number | Integer | The current page number. |

| status | String | Indicates the current state of the reward. Example: LIVE, UPCOMING, ENDED |



```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 112295,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": null,
            "startTime": "2025-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": null
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 352,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 353,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 351,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 124158,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 370,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 371,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 369,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
						"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 127419,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 373,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 374,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 372,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 128885,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 379,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 380,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 378,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          		"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 129416,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 385,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 386,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 384,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130952,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs123",
                "CF1": "Custom field 12"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 388,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 389,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 387,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130954,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs123",
                "CF1": "Custom field 12"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 391,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 392,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 390,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130955,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs123",
                "CF1": "Custom field 12"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 394,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 395,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 393,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130192,
            "name": "10% Off on 20 units",
            "description": "10% Off on 20 units",
            "imageId": "e587e67f-9d03-45ed-93be-9033c6abcd0f",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/91805afa-94e6-47e6-8767-394e7e91.jpg",
            "thumbnailId": "4da7aead-35c3-474d-9c9e-ff5453293984",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc32c6ee-34de-4c57-bcd6-56a250ac.jpg",
            "termAndConditionsId": "7aa938b0-5b3e-4d64-8079-33556844ae49",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/def675a4-7b94-460d-ab6e-e1f22ce.html",
            "tier": null,
            "label": "offline",
            "priority": 2,
            "intouchPoints": 100,
            "group": "offline",
            "startTime": "2024-02-25 07:29:48",
            "endTime": "2025-02-27 20:29:48",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 76,
                    "name": "offline",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 130189,
            "name": "20% Off on fuel",
            "description": "20% Off on fuel",
            "imageId": "a54ca15b-930c-423d-b2fd-ee35ba2a8e70",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ff8b24a1-ba5b-44fc-b3de-0c47ad47.jpg",
            "thumbnailId": "c5c324c9-f548-4828-a0ed-49e42984916f",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e9439810-f2a0-47b0-b6ea-9db208cd.jpg",
            "termAndConditionsId": "86e58dd4-c89c-4463-8475-77ff3210e380",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/07f8d75b-907b-4be8-a9d4-f89aa48.html",
            "tier": null,
            "label": "online",
            "priority": 1,
            "intouchPoints": 100,
            "group": "online",
            "startTime": "2024-02-25 07:26:11",
            "endTime": "2025-02-27 20:26:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 75,
                    "name": "online",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 129247,
            "name": "sd",
            "description": "df",
            "imageId": "5eec65db-8217-43e0-a6a7-44ba55ede041",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a15ab462-4a65-45bb-8b67-4c549c8e.png",
            "thumbnailId": "7ca201fb-64a6-4feb-98fd-f1741a459b46",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/c8574725-043e-40d1-9a63-0ea7d949.png",
            "termAndConditionsId": "08acfa61-d724-4ffb-af75-3c010a062fde",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/6b7e0b10-c5fd-4ead-bdaa-683cf37.html",
            "tier": "1",
            "label": "1",
            "priority": 1,
            "intouchPoints": 100,
            "group": "1",
            "startTime": "2024-02-21 14:37:51",
            "endTime": "2024-02-29 14:37:51",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 121879,
            "name": "Flat 100 off on protein powder",
            "description": "Burn 100 points and get a Flat 100 off on protein powder coupon",
            "imageId": "0f1aee40-3e4d-474d-8070-546eb2ac777e",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5bea603b-6ff2-4e00-88fb-8610012b.jpg",
            "thumbnailId": "2f6fc242-58c1-4a41-9e2f-66bc9acac52e",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ae890c7e-9c8f-47d9-b5e2-1c62265e.jpg",
            "termAndConditionsId": "9303b31a-6042-475e-bb46-3129bc22baa1",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b7bb1e12-8b1e-4089-888d-3f13723.html",
            "tier": "4",
            "label": "4",
            "priority": 1,
            "intouchPoints": 100,
            "group": "Protein",
            "startTime": "2024-01-24 08:28:16",
            "endTime": "2028-07-31 02:58:16",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 121878,
            "name": "50% off on planet fitness subscription",
            "description": "Burn 1000 points and get 50% off on planet fitness subscription",
            "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
            "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
            "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
            "tier": "3",
            "label": "3",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "Fitness plans",
            "startTime": "2024-01-24 08:25:45",
            "endTime": "2028-07-31 02:55:45",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 121877,
            "name": "10% off on protein supplements",
            "description": "Burn 500 points and get a 10% off on protein supplements coupon",
            "imageId": "6fd72faf-3e30-430a-861b-d8ef34d7bc68",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4f4ccfec-3733-479a-8de1-b94091b.jpeg",
            "thumbnailId": "ed6f50f8-a80f-4d68-9c60-a05b4cb5282e",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/71c40451-629d-46ed-ab2b-52922c0.jpeg",
            "termAndConditionsId": "201076f2-43f2-49fe-b549-adbe3db62470",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7c409850-8546-44a5-8a44-89c58cc.html",
            "tier": "accessories",
            "label": "accessories",
            "priority": 1,
            "intouchPoints": 500,
            "group": "accessories",
            "startTime": "2024-01-24 08:22:33",
            "endTime": "2028-07-30 18:52:33",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 121876,
            "name": "20% off on Vitamins",
            "description": "Burn 1000 points and get a 20% off on Vitamins coupon",
            "imageId": "8485055f-5d49-48ed-8b32-92b870d9e46c",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e039015e-a4b9-49ba-bf5f-aafdd5a.jpeg",
            "thumbnailId": "b07afb85-b531-46f2-a3d0-e71b6c178a2d",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/71441127-956e-449e-b198-a8a688b.jpeg",
            "termAndConditionsId": "9b72745a-a82c-4fb0-904f-5df6c11bb3cb",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4f743292-4861-45bd-9983-7700d2a.html",
            "tier": "accessories",
            "label": "accessories",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "accessories",
            "startTime": "2024-01-24 08:20:41",
            "endTime": "2028-07-30 14:50:41",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 15,
        "totalPages": 1,
        "numberOfElements": 15,
        "first": true,
        "size": 15,
        "number": 0
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewardList": [
        {
            "id": 112295,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 100,
            "group": null,
            "startTime": "2025-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": null
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 352,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 353,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 351,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 124158,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 370,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 371,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 369,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
						"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 127419,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 373,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 374,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 372,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 128885,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 379,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 380,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 378,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          		"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 129416,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs",
                "CF1": "Custom field 1"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 385,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 386,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 384,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130952,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs123",
                "CF1": "Custom field 12"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 388,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 389,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 387,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          	"rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130954,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs123",
                "CF1": "Custom field 12"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 391,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 392,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 390,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130955,
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
            "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
            "tier": null,
            "label": null,
            "priority": 1,
            "intouchPoints": 500,
            "group": null,
            "startTime": "2024-09-26 20:00:00",
            "endTime": "2025-10-31 11:59:30",
            "expired": false,
            "started": false,
            "programId": null,
            "categoryList": [
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "cs123",
                "CF1": "Custom field 12"
            },
            "loyaltyProgramCriteria": [
                {
                    "loyaltyProgramId": 690,
                    "tierIds": null,
                    "partnerProgramIds": null
                },
                {
                    "loyaltyProgramId": 469,
                    "tierIds": null,
                    "partnerProgramIds": [
                        "48"
                    ]
                }
            ],
            "restrictions": {
                "isValid": true,
                "customerLevel": [
                    {
                        "id": 394,
                        "isValid": true,
                        "repeatFrequencyType": "DAYS",
                        "limit": 10,
                        "interval": 30,
                        "kpi": "QUANTITY"
                    },
                    {
                        "id": 395,
                        "isValid": true,
                        "repeatFrequencyType": "MONTHS",
                        "limit": 50,
                        "interval": 12,
                        "kpi": "QUANTITY"
                    }
                ],
                "rewardLevel": [
                    {
                        "id": 393,
                        "isValid": true,
                        "consumed": 0,
                        "repeatFrequencyType": "NO_LIMIT",
                        "limit": 10000,
                        "kpi": "QUANTITY"
                    }
                ]
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 130192,
            "name": "10% Off on 20 units",
            "description": "10% Off on 20 units",
            "imageId": "e587e67f-9d03-45ed-93be-9033c6abcd0f",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/91805afa-94e6-47e6-8767-394e7e91.jpg",
            "thumbnailId": "4da7aead-35c3-474d-9c9e-ff5453293984",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc32c6ee-34de-4c57-bcd6-56a250ac.jpg",
            "termAndConditionsId": "7aa938b0-5b3e-4d64-8079-33556844ae49",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/def675a4-7b94-460d-ab6e-e1f22ce.html",
            "tier": null,
            "label": "offline",
            "priority": 2,
            "intouchPoints": 100,
            "group": "offline",
            "startTime": "2024-02-25 07:29:48",
            "endTime": "2025-02-27 20:29:48",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 76,
                    "name": "offline",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 130189,
            "name": "20% Off on fuel",
            "description": "20% Off on fuel",
            "imageId": "a54ca15b-930c-423d-b2fd-ee35ba2a8e70",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ff8b24a1-ba5b-44fc-b3de-0c47ad47.jpg",
            "thumbnailId": "c5c324c9-f548-4828-a0ed-49e42984916f",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e9439810-f2a0-47b0-b6ea-9db208cd.jpg",
            "termAndConditionsId": "86e58dd4-c89c-4463-8475-77ff3210e380",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/07f8d75b-907b-4be8-a9d4-f89aa48.html",
            "tier": null,
            "label": "online",
            "priority": 1,
            "intouchPoints": 100,
            "group": "online",
            "startTime": "2024-02-25 07:26:11",
            "endTime": "2025-02-27 20:26:11",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 75,
                    "name": "online",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 129247,
            "name": "sd",
            "description": "df",
            "imageId": "5eec65db-8217-43e0-a6a7-44ba55ede041",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a15ab462-4a65-45bb-8b67-4c549c8e.png",
            "thumbnailId": "7ca201fb-64a6-4feb-98fd-f1741a459b46",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/c8574725-043e-40d1-9a63-0ea7d949.png",
            "termAndConditionsId": "08acfa61-d724-4ffb-af75-3c010a062fde",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/6b7e0b10-c5fd-4ead-bdaa-683cf37.html",
            "tier": "1",
            "label": "1",
            "priority": 1,
            "intouchPoints": 100,
            "group": "1",
            "startTime": "2024-02-21 14:37:51",
            "endTime": "2024-02-29 14:37:51",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                },
                {
                    "id": 4,
                    "name": "clothing",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 121879,
            "name": "Flat 100 off on protein powder",
            "description": "Burn 100 points and get a Flat 100 off on protein powder coupon",
            "imageId": "0f1aee40-3e4d-474d-8070-546eb2ac777e",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5bea603b-6ff2-4e00-88fb-8610012b.jpg",
            "thumbnailId": "2f6fc242-58c1-4a41-9e2f-66bc9acac52e",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ae890c7e-9c8f-47d9-b5e2-1c62265e.jpg",
            "termAndConditionsId": "9303b31a-6042-475e-bb46-3129bc22baa1",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b7bb1e12-8b1e-4089-888d-3f13723.html",
            "tier": "4",
            "label": "4",
            "priority": 1,
            "intouchPoints": 100,
            "group": "Protein",
            "startTime": "2024-01-24 08:28:16",
            "endTime": "2028-07-31 02:58:16",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
        },
        {
            "id": 121878,
            "name": "50% off on planet fitness subscription",
            "description": "Burn 1000 points and get 50% off on planet fitness subscription",
            "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
            "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
            "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
            "tier": "3",
            "label": "3",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "Fitness plans",
            "startTime": "2024-01-24 08:25:45",
            "endTime": "2028-07-31 02:55:45",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 121877,
            "name": "10% off on protein supplements",
            "description": "Burn 500 points and get a 10% off on protein supplements coupon",
            "imageId": "6fd72faf-3e30-430a-861b-d8ef34d7bc68",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4f4ccfec-3733-479a-8de1-b94091b.jpeg",
            "thumbnailId": "ed6f50f8-a80f-4d68-9c60-a05b4cb5282e",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/71c40451-629d-46ed-ab2b-52922c0.jpeg",
            "termAndConditionsId": "201076f2-43f2-49fe-b549-adbe3db62470",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/7c409850-8546-44a5-8a44-89c58cc.html",
            "tier": "accessories",
            "label": "accessories",
            "priority": 1,
            "intouchPoints": 500,
            "group": "accessories",
            "startTime": "2024-01-24 08:22:33",
            "endTime": "2028-07-30 18:52:33",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        },
        {
            "id": 121876,
            "name": "20% off on Vitamins",
            "description": "Burn 1000 points and get a 20% off on Vitamins coupon",
            "imageId": "8485055f-5d49-48ed-8b32-92b870d9e46c",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e039015e-a4b9-49ba-bf5f-aafdd5a.jpeg",
            "thumbnailId": "b07afb85-b531-46f2-a3d0-e71b6c178a2d",
            "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/71441127-956e-449e-b198-a8a688b.jpeg",
            "termAndConditionsId": "9b72745a-a82c-4fb0-904f-5df6c11bb3cb",
            "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/4f743292-4861-45bd-9983-7700d2a.html",
            "tier": "accessories",
            "label": "accessories",
            "priority": 1,
            "intouchPoints": 1000,
            "group": "accessories",
            "startTime": "2024-01-24 08:20:41",
            "endTime": "2028-07-30 14:50:41",
            "expired": false,
            "started": true,
            "programId": null,
            "categoryList": [
                {
                    "id": 2,
                    "name": "accessories",
                    "enabled": true
                }
            ],
            "customFields": {
                "CF2": "value"
            },
            "loyaltyProgramCriteria": [],
            "restrictions": {
                "isValid": true
            },
            "groupName": null,
            "groupRank": null,
            "rewardRank": null,
            "images": [],
            "videos": []
          "rewardRevenueDetails": {
                "brandCommission": 0,
                "endCustomerCommission": 0
            }
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 15,
        "totalPages": 1,
        "numberOfElements": 15,
        "first": true,
        "size": 15,
        "number": 0
    }
}
```

`Try It!`