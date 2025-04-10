# Get purchased rewards for user (New API)get

This API is used to get the rewards purchased by the user, without any aggregation on reward ID, and gives a unified view of the rewards purchased in order of the last purchased date.

ExampleConsider the below scenario:

- A customer has 10 vouchers from the same reward

- 3 vouchers each from 4 different rewards

- Page size= 5

The API retrieves the details of the last 5 vouchers issued to the customer.

If you use theGet rewards for userAPI, the API retrieves the information on the total rewards received by the customer (22 rewards).

[Get rewards for user](/reference/get-rewards-for-user)

Let’s say below is the structure of the table and for the same customer, we have issued 10 coupons but they belong to 3 rewards

![](https://files.readme.io/35d9678-Screenshot_2023-09-04_at_4.41.07_PM.png)

With the new response if pagination is 5, then only below 5 records will be returned

![](https://files.readme.io/c21ba7a-Screenshot_2023-09-04_at_4.41.12_PM.png)

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.For the list of items in query param list, rewards will be returned if expected value found. Meaning if vendor param has 3 values passed but rewards only exist for 2 of the three vendors. The rewards for the 2 vendors will be returned .When[_Dual Eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility)_ feature enabled, a reward can be issued to multiple users registered with the same secondary identifiers, as long as they have unique primary identifiers.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- For the list of items in query param list, rewards will be returned if expected value found. Meaning if vendor param has 3 values passed but rewards only exist for 2 of the three vendors. The rewards for the 2 vendors will be returned .

- When[_Dual Eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility)_ feature enabled, a reward can be issued to multiple users registered with the same secondary identifiers, as long as they have unique primary identifiers.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URL | /api_gateway/rewards/core/v1/user/userReward/brand/{BrandName} |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/userReward/brand/{BrandName}

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/userReward/brand/{BrandName}
```

# Request path parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| BrandName* | String | Name of the brand. Ex: BUKL |



# Request query parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| mobile/email/externalId* | String | Mobile number/email/externalId of the customer to fetch rewards. Ex: 9988776654 |

| username* | String | Till id used in the authorization of the request. Ex: swati |

| language | Enum | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter toen. |

| orderBy | Enum | Pass asc to order the results in ascending order of sortBy value, desc to order in descending order. |

| sortBy | Enum | Sort the results by a specific parameter.  Supported values: REWARD_ID, INTOUCH_VOUCHER,INTOUCH_VOUCHER_EXPIRY,PURCHASE_DATE.Default: PURCHASE_DATE |

| page | Int | To retrieve details of a specific page. Pass 0 not to apply pagination. For example, page=2&size=10 shows 10 results on page 2. |

| size | Long | Results to show per page. Default - 100 |

| category | Integer | Filter to be used to fetch rewards based on reward category IDs. Multiple category IDs can be passed in the query parameter, with no limit on the number of category IDs that can be provided. |

| groupName | String | Filter to be used to fetch details based on group names. Multiple group names can be passed in the query parameter, with no limit on the number of group names that can be provided. |

| vendorId | Integer | Filter to be used to fetch rewards by filtering based on vendor IDs. Multiple vendor IDs can be passed in the query parameter, with no limit on the number of vendor IDs that can be provided. |

| typeOfReward | Enum | Filter to be used to fetch rewards based on specific types. Supported values are INTOUCH_REWARD, VENDOR_INTOUCH_REWARD, VENDOR_ONLY_REWARD, CART_PROMOTION, SWEEPSTAKES, and GAMES. Multiple typeOfReward values can be passed in the query parameter, and the filter is case-sensitive. |

| fromPurchaseDate | Timestamp | Filter to be used to fetch rewards by fetching the info based on purchase date in epoch format. The purchase date filter will work only if both fromPurchaseDate and toPurchaseDate are passed in query param. |

| toPurchaseDate | Timestamp | Filter to be used to fetch rewards by fetching the information based on the purchase date in epoch format. The purchase date filter will work only if both fromPurchaseDate and toPurchaseDate are passed in query param. |



`en`

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/brand/BUKL
```

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/brand/BUKL
```

# Response parameters

| Parameters | Description |

| --- | --- |

| status | Contains information about the success or failure of the API call, including a status code and a message. |

| success | Indicates whether the operation was successful (true) or not (false). |

| code | A numeric code representing the result of the operation (e.g., 200 for success). |

| message | A descriptive message providing additional context about the operation's outcome. |

| rewards | Contains details about the rewards issued to the user, including metadata, details, and redemption information. |

| typeOfReward | Indicates the type of reward, such as INTOUCH_REWARD, VENDOR_INTOUCH_REWARD, VENDOR_ONLY_REWARD, CART_PROMOTION, SWEEPSTAKES, GAMES. |

| pointsRedeemed | The number of points redeemed by the user for this reward. |

| rewardId | A unique identifier for the reward. |

| transactionId | The unique identifier for the transaction associated with this reward. |

| issueRewardRefId | A reference ID for the reward issuance, used for tracking. |

| rewardIssueDate | The date and time when the reward was issued, represented as a UNIX timestamp in milliseconds. |

| userRewardExpiry | The expiration date and time for the user’s reward, formatted asYYYY-MM-DD HH:mm:ss. |

| userRewardDetails | Provides additional details about the reward, including metadata and configurations. |

| id | A unique identifier for the reward. |

| name | The name of the reward as displayed in the system. |

| description | A brief text describing the reward and its features or purpose. |

| imageId | An identifier for the primary image associated with the reward. |

| imageUrl | A URL linking to the full-sized image of the reward. |

| thumbnailId | An identifier for the thumbnail image of the reward. |

| thumbnailUrl | A URL linking to the thumbnail-sized image of the reward. |

| termAndConditionsId | An identifier for the terms and conditions document associated with the reward. |

| termAndConditionsUrl | A URL linking to the terms and conditions document for the reward. |

| tier | Specifies the tier to which the reward belongs, often used in loyalty programs. |

| label | A tag or label associated with the reward for categorization or filtering. |

| priority | The priority level of the reward. |

| intouchPoints | The number of loyalty points required to redeem this reward. |

| group | Specifies the group or category associated with the reward. |

| startTime | The date and time when the reward becomes available for redemption, formatted asYYYY-MM-DD HH:mm:ss. |

| endTime | The date and time when the reward is no longer available for redemption, formatted asYYYY-MM-DD HH:mm:ss. |

| expired | Indicates whether the reward has expired. |

| started | Indicates whether the reward is currently active and can be redeemed . |

| programId | A unique identifier for the program under which the reward is issued. |

| categoryList | Lists the categories to which the reward belongs, often used for filtering or classification. |

| id | The unique identifier for a specific category associated with the reward. |

| name | The name of the category For example: "clothing". |

| enabled | Indicates whether the category is currently active and usable. |

| customFields | Contains custom fields defined for the reward, often as key-value pairs. |

| loyaltyProgramCriteria | Details the criteria for loyalty programs related to the reward. |

| cardSeries | List of card codes associated with the reward. |

| id | Unique identifier of the card associated with the reward. |

| code | Unique series code of the card associated with the reward. |

| labels | List of label IDs associated with the reward. |

| groups | Lists any specific groups associated with the reward, used for segmentation purposes. |

| rewardRank | The rank or position of the reward within its category or list. |

| images | Lists any additional images associated with the reward. |

| videos | Lists any videos related to the reward. |

| revenueDetails | Provides revenue-related information for the reward. |

| paymentDetails | Contains details about the payment configuration for the reward, including mode and identifier. |

| paymentMode | Specifies the payment mode for the reward, such as "FREE". |

| id | The unique identifier for the payment configuration. |

| redemptionDetails | Includes details about how the reward can be redeemed, such as type and value. |

| redemptionType | Specifies the type of redemption. |

| redemptionValue | The value associated with the redemption. |

| transactionCustomFields | Custom fields defined for the transaction. |

| fulfillmentDetails | Contains fulfillment-specific information for the reward. |

| issueDateTime | Date and time when the reward was awarded to the customer. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ). |

| eventDateTime | Date and time when a triggering event (transactional or behavioural) occurred, initiating the reward earning. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ). |

| code | A unique code associated with the reward, often used for tracking or redemption purposes. |

| vendor | The vendor associated with the reward. |

| seriesId | An identifier for the series or batch of the reward, used for tracking and categorization. |

| intouchUserId | The unique identifier of the user in the system, often used for personalization and tracking. |

| pagingDto | Provides details about the pagination of the results, such as total elements and pages. |

| last | Indicates whether this is the last page of results |

| totalElements | The total number of rewards returned by the query. |

| totalPages | The total number of pages available for the query results. |

| numberOfElements | The number of elements on the current page. |

| first | Indicates whether this is the first page of results |

| size | The number of elements per page, as specified in the query. |

| number | The current page number in the results. |



`true`

`false`

`YYYY-MM-DD HH:mm:ss`

`YYYY-MM-DD HH:mm:ss`

`YYYY-MM-DD HH:mm:ss`

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User Reward fetched successfully"
    },
    "rewards": [
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 295211,
            "transactionId": 368679,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1743080934000,
            "rewardIssueDateTime": "2025-03-27T13:08:54Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 295211,
                "name": "Donate to Charity : Help us brighten a child's day!",
                "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
                "imageId": "5d05ccb2-6f5b-4b58-ad90-b97647c86784",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1aba92d2-28bc-44dc-9dc9-00fbf662.jpg",
                "thumbnailId": "061bcf5a-6ccd-4422-a23d-929fa744f213",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ca915cf2-6495-41e1-b13a-cbf578fd.jpg",
                "termAndConditionsId": "f34e21ea-d563-45ec-a8fc-08c22313bc8c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/433ebbb0-0f0e-492e-bfed-f103168.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2025-01-05 18:36:00",
                "startDateTime": "2025-01-05T18:36:00Z",
                "endTime": "2030-10-31 11:59:30",
                "endDateTime": "2030-10-31T11:59:30Z",
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
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 3179,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-27T13:08:52Z",
            "eventDateTime": "2025-03-27T13:08:52Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"3\"}",
            "seriesId": null
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": false,
        "totalElements": 102,
        "totalPages": 102,
        "numberOfElements": 1,
        "first": false,
        "size": 1,
        "number": 2
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
    "rewards": [
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 295211,
            "transactionId": 368679,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1743080934000,
            "rewardIssueDateTime": "2025-03-27T13:08:54Z",
            "userRewardExpiry": null,
            "userRewardExpiryDateTime": null,
            "userRewardDetails": {
                "id": 295211,
                "name": "Donate to Charity : Help us brighten a child's day!",
                "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
                "imageId": "5d05ccb2-6f5b-4b58-ad90-b97647c86784",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1aba92d2-28bc-44dc-9dc9-00fbf662.jpg",
                "thumbnailId": "061bcf5a-6ccd-4422-a23d-929fa744f213",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/ca915cf2-6495-41e1-b13a-cbf578fd.jpg",
                "termAndConditionsId": "f34e21ea-d563-45ec-a8fc-08c22313bc8c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/433ebbb0-0f0e-492e-bfed-f103168.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2025-01-05 18:36:00",
                "startDateTime": "2025-01-05T18:36:00Z",
                "endTime": "2030-10-31 11:59:30",
                "endDateTime": "2030-10-31T11:59:30Z",
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
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 3179,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "issueDateTime": "2025-03-27T13:08:52Z",
            "eventDateTime": "2025-03-27T13:08:52Z",
            "code": null,
            "vendor": "{\"pointsRedeemed\": \"3\"}",
            "seriesId": null
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": false,
        "totalElements": 102,
        "totalPages": 102,
        "numberOfElements": 1,
        "first": false,
        "size": 1,
        "number": 2
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
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
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
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 100,
            "rewardId": 198827,
            "transactionId": 213560,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1720702639000,
            "userRewardExpiry": "2029-06-30 00:00:00",
            "userRewardDetails": {
                "id": 198827,
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
                "startTime": "2024-07-11 12:57:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 284,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "8803695087",
            "vendor": null,
            "seriesId": "350219"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 2,
        "totalPages": 1,
        "numberOfElements": 2,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
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
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 100,
            "rewardId": 198827,
            "transactionId": 213560,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1720702639000,
            "userRewardExpiry": "2029-06-30 00:00:00",
            "userRewardDetails": {
                "id": 198827,
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
                "startTime": "2024-07-11 12:57:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 284,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "8803695087",
            "vendor": null,
            "seriesId": "350219"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 2,
        "totalPages": 1,
        "numberOfElements": 2,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
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
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
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
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293260,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732618026000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
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
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293259,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732618001000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
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
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293175,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732605304000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
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
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "GAMES",
            "pointsRedeemed": 0,
            "rewardId": 269188,
            "transactionId": 289753,
            "issueRewardRefId": "1732092067",
            "rewardIssueDate": 1732092068000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 269188,
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
                "startTime": "2024-11-20 08:41:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 2,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 2096
            },
            "redemptionDetails": {
                "redemptionType": "GAMES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
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
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 239433,
            "transactionId": 257735,
            "issueRewardRefId": "1727328852",
            "rewardIssueDate": 1727328853000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 239433,
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
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-09-26 05:34:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 700
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 239434,
            "transactionId": 257736,
            "issueRewardRefId": "1727328852",
            "rewardIssueDate": 1727328853000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 239434,
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
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-09-26 05:34:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 701
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "GAMES",
            "pointsRedeemed": 100,
            "rewardId": 221065,
            "transactionId": 237731,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1724322124000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 221065,
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
                "startTime": "2024-08-22 10:22:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 455,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "GAMES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 100,
            "rewardId": 198827,
            "transactionId": 213560,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1720702639000,
            "userRewardExpiry": "2029-06-30 00:00:00",
            "userRewardDetails": {
                "id": 198827,
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
                "startTime": "2024-07-11 12:57:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 284,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "8803695087",
            "vendor": null,
            "seriesId": "350219"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 9,
        "totalPages": 1,
        "numberOfElements": 9,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293260,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732618026000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
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
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293259,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732618001000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
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
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "MILES",
            "pointsRedeemed": 3,
            "rewardId": 272383,
            "transactionId": 293175,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1732605304000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 272383,
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
                "startTime": "2024-11-26 07:15:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "CONV_RATIO",
                "id": 2232,
                "conversionRatio": 0.3300
            },
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 1.0000
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "GAMES",
            "pointsRedeemed": 0,
            "rewardId": 269188,
            "transactionId": 289753,
            "issueRewardRefId": "1732092067",
            "rewardIssueDate": 1732092068000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 269188,
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
                "startTime": "2024-11-20 08:41:00",
                "endTime": "2025-07-11 14:43:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 2,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 2096
            },
            "redemptionDetails": {
                "redemptionType": "GAMES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 265893,
            "transactionId": 286244,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1731564662000,
            "userRewardExpiry": "2025-10-31 00:00:00",
            "userRewardDetails": {
                "id": 265893,
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
                "startTime": "2024-11-14 06:11:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 1955
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "2609909641",
            "vendor": null,
            "seriesId": "415446"
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 239433,
            "transactionId": 257735,
            "issueRewardRefId": "1727328852",
            "rewardIssueDate": 1727328853000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 239433,
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
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-09-26 05:34:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 700
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "SWEEPSTAKES",
            "pointsRedeemed": 0,
            "rewardId": 239434,
            "transactionId": 257736,
            "issueRewardRefId": "1727328852",
            "rewardIssueDate": 1727328853000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 239434,
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
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-09-26 05:34:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "FREE",
                "id": 701
            },
            "redemptionDetails": {
                "redemptionType": "SWEEPSTAKES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "GAMES",
            "pointsRedeemed": 100,
            "rewardId": 221065,
            "transactionId": 237731,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1724322124000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 221065,
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
                "startTime": "2024-08-22 10:22:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 455,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "GAMES",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": "415446"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 100,
            "rewardId": 198827,
            "transactionId": 213560,
            "issueRewardRefId": "107",
            "rewardIssueDate": 1720702639000,
            "userRewardExpiry": "2029-06-30 00:00:00",
            "userRewardDetails": {
                "id": 198827,
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
                "startTime": "2024-07-11 12:57:00",
                "endTime": "2025-07-11 14:43:00",
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
                    "testdate": "2020-01-01 01:01:01",
                    "CF1": "Custom field 1"
                },
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": 1,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": {
                "paymentMode": "POINTS",
                "id": 284,
                "points": 100.0000
            },
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "8803695087",
            "vendor": null,
            "seriesId": "350219"
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 9,
        "totalPages": 1,
        "numberOfElements": 9,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24424,
            "transactionId": 36035,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182848000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24424,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:20:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "NQUCE6EG9MRG0MQWO1S01Z61JL6IXIUJRPBA6",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24424,
            "transactionId": 36034,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182845000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24424,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:20:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "FMREMAD7ASFGKIIIFR249T8FWFO4QDP8JGBTF",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24402,
            "transactionId": 36012,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182537000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24402,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group11",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "CH7PLSRCPBDYMNLSFNGUH16YBIC2J0WJS8H1B",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24403,
            "transactionId": 36011,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182533000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24403,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "PTAQTF5IWEX5XO2TWL0NY5H2NO1MEEADTYGYB",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24401,
            "transactionId": 36004,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182389000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24401,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=486da6e7bee0df341ceaa56d9434a15b90961882eff303523d63223799d7e9f3",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group11",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "UFC598D2QVQSZURH4F2HDFTE6TGBLF65PCXDG",
            "vendor": null,
            "seriesId": "1148417"
        }
    ],
    "intouchUserId": "423789304",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24424,
            "transactionId": 36035,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182848000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24424,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:20:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "NQUCE6EG9MRG0MQWO1S01Z61JL6IXIUJRPBA6",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24424,
            "transactionId": 36034,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182845000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24424,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:20:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 16,
                        "name": "c1",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "FMREMAD7ASFGKIIIFR249T8FWFO4QDP8JGBTF",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24402,
            "transactionId": 36012,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182537000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24402,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group11",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "CH7PLSRCPBDYMNLSFNGUH16YBIC2J0WJS8H1B",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24403,
            "transactionId": 36011,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182533000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24403,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ad911de406e8bb078ad4b446f6ba6458952fd06529cad06940177bb23d5c420a",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group12",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "PTAQTF5IWEX5XO2TWL0NY5H2NO1MEEADTYGYB",
            "vendor": null,
            "seriesId": "1148417"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 24401,
            "transactionId": 36004,
            "issueRewardRefId": "1718617056",
            "rewardIssueDate": 1730182389000,
            "userRewardExpiry": "2026-10-29 00:00:00",
            "userRewardDetails": {
                "id": 24401,
                "name": " English",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=486da6e7bee0df341ceaa56d9434a15b90961882eff303523d63223799d7e9f3",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8704b28e68fcd71d7bbe651b57c2a4dd52308f6d5e016522d945bdd0b7c2d6bc",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCfTk4IOe6Oc7ntZpiLcAS5Hc453MbfVE6q3r0FeDqtnIEwsgYZtVJsSxEDIVESwr2Viv4DZahbAR%2BjhUQlz25octburSmRdhSm8LavBy3TO4WjOnHWj%2ByBH4hWNwyLnc8smPr6wIH2uuocThMFMN%2BlLQerNoNwenBtMR9%2FCVbCwBEGP3FdPvuP6JepqKc41SyB%2FwFJpGXB8NmlylLnKwcAScU09KzflgnILfpqXiJ2aiIXQbYHJFMdDRxau4mDO1Lte86CzgmujWs6lTfXg%2FPwmMM5q3j4HTZrbYSKnAYzBAFGlkd1TdPA93xko4pmgugYyLYC3pJNNVYPQoM0Zz0yVr%2B8a4AW3QR9jO1eFbuhFEC627wDclHzfTQXbS6%2Fvdw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241128T063317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNKGQUE5NT%2F20241128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=24267e5324fb22b0aadf500cae91b1c27a1e133df433a6a6ac3d0b431c2f26de",
                "tier": "SILVER",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-10-29 06:12:40",
                "endTime": "2024-10-30 05:52:11",
                "expired": true,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 5,
                        "name": "ecommerce",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "group11",
                        "groupRank": null
                    }
                ],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "INTOUCH_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "UFC598D2QVQSZURH4F2HDFTE6TGBLF65PCXDG",
            "vendor": null,
            "seriesId": "1148417"
        }
    ],
    "intouchUserId": "423789304",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "PHYSICAL_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 285262,
            "transactionId": 306796,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1734516901000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 285262,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=234d5427efa9edf0ae087d6812eb108f40447edbdbefd489e34957620c03cd0c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7647f0f45eb3bb4ae725646b28cf7423ab89eccfd411bf7c6a42e84b2d0a3b70",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c605e54bcc86f0d00e3be4450f0da659f03cda46ec63b7964db842c6c310d2c",
                "tier": "PLATINUM",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-12-18 10:15:00",
                "endTime": "2026-11-28 14:10:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": [],
                "labels": [
                    17246
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "PHYSICAL_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "PHYSICAL_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 285261,
            "transactionId": 306795,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1734516620000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 285261,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=234d5427efa9edf0ae087d6812eb108f40447edbdbefd489e34957620c03cd0c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7647f0f45eb3bb4ae725646b28cf7423ab89eccfd411bf7c6a42e84b2d0a3b70",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c605e54bcc86f0d00e3be4450f0da659f03cda46ec63b7964db842c6c310d2c",
                "tier": "PLATINUM",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-12-18 10:10:00",
                "endTime": "2026-11-28 14:10:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": [],
                "cardSeries": [
                    {
                        "id": 46,
                        "code": "BUKLPRM"
                    }
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "PHYSICAL_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 11,
        "totalPages": 1,
        "numberOfElements": 11,
        "first": true,
        "size": 100,
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
    "rewards": [
        {
            "typeOfReward": "PHYSICAL_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 285262,
            "transactionId": 306796,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1734516901000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 285262,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=234d5427efa9edf0ae087d6812eb108f40447edbdbefd489e34957620c03cd0c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7647f0f45eb3bb4ae725646b28cf7423ab89eccfd411bf7c6a42e84b2d0a3b70",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c605e54bcc86f0d00e3be4450f0da659f03cda46ec63b7964db842c6c310d2c",
                "tier": "PLATINUM",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-12-18 10:15:00",
                "endTime": "2026-11-28 14:10:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": [],
                "labels": [
                    17246
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "PHYSICAL_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        },
        {
            "typeOfReward": "PHYSICAL_REWARD",
            "pointsRedeemed": 0,
            "rewardId": 285261,
            "transactionId": 306795,
            "issueRewardRefId": "transactionNumber",
            "rewardIssueDate": 1734516620000,
            "userRewardExpiry": null,
            "userRewardDetails": {
                "id": 285261,
                "name": " INTOUCH Enabled",
                "description": "Description",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=234d5427efa9edf0ae087d6812eb108f40447edbdbefd489e34957620c03cd0c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7647f0f45eb3bb4ae725646b28cf7423ab89eccfd411bf7c6a42e84b2d0a3b70",
                "termAndConditionsId": "EXDR12987R",
                "termAndConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDHBt%2FXXXT1CSO2gRQSLMAY7N18e7jZBKP3UaDjhrr2cKi3dr%2FKoWL5ryDBVypnoOsz%2BZ2fheGS3eAR6%2FKRlNwtglWej4vWNU7BHNyBSjvcBhh1tZBSTXKDJRrd%2BfgfB7sKfJmV0b52byaH2Ovun9437ud%2B61r%2BTRsQneC6RILIWRl0RW%2FObHEumUQUCacJ%2BW7zLEXUDDRzt7pgcxa45gF0zCwQuhDQvyfSnn9335S%2BGvY4FOugpvOQ1HWQB5QeAviZ1TacdR%2Fac3YHZUTqYenbgBJSSbFFczs3VPxiiUu4q7BjItms3kogVeW6ZR%2FTPTB3bHXwDjF8mV4sv4uy5btl5%2F8Az9RI8oCAaaxSbmPPSo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T101548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBTPZ4NT2X%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c605e54bcc86f0d00e3be4450f0da659f03cda46ec63b7964db842c6c310d2c",
                "tier": "PLATINUM",
                "label": null,
                "priority": 1,
                "intouchPoints": 0,
                "group": null,
                "startTime": "2024-12-18 10:10:00",
                "endTime": "2026-11-28 14:10:00",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": [],
                "cardSeries": [
                    {
                        "id": 46,
                        "code": "BUKLPRM"
                    }
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": {
                "redemptionType": "PHYSICAL_REWARD",
                "redemptionValue": null
            },
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": null,
            "vendor": "{}",
            "seriesId": null
        }
    ],
    "intouchUserId": "555567088",
    "pagingDto": {
        "last": true,
        "totalElements": 11,
        "totalPages": 1,
        "numberOfElements": 11,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```

| Error Code | Description |

| --- | --- |

| 15006 | The request is missing the primary identifier. |

| 1014 | The provided identifier does not match any existing customer. |

| 404 | The specified customer was not found in the organization. |



`Try It!`