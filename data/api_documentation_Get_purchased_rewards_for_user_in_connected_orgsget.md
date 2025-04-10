# Get purchased rewards for user in connected orgsget

This API is used to get the rewards purchased by the user, without any aggregation on reward ID, and gives a unified view of the rewards purchased in order of the last purchased date.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> 🚧Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

## 🚧Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URL | /v1.1/user/user_rewards?username=(tillid)&mobile={mobile} |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/v1.1/user/user_rewards?username=(tillid)&mobile={mobile}

```
https://eu.api.capillarytech.com/v1.1/user/user_rewards?username=(tillid)&mobile={mobile}
```

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELF,OTHERandALL.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

`ALL`

[data scopes](/reference/connected-orgs-data-scopes)

# Request query parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| mobile/email/externalId | String | Mobile number/email/externalId of the customer to fetch rewards. Ex: 9988776654 |

| username | String | Till id used in the authorization of the request. Ex: swati |

| language | Enum | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter toen. |

| orderBy | Enum | Pass asc to order the results in ascending order of sortBy value, desc to order in descending order. These are not case sensitive. |

| sortBy | Enum | Sort the results by a specific parameter.  Supported values: REWARD_ID, INTOUCH_VOUCHER,INTOUCH_VOUCHER_EXPIRY,PURCHASE_DATE.Default: PURCHASE_DATE |

| page | Int | To retrieve details of a specific page. Pass 0 not to apply pagination. For example, page=2&size=10 shows 10 results on page 2. |

| size | Long | Results to show per page. Default - 100 |

| typeOfReward | Enum | Filter to be used to fetch specific types of rewards. Supported values: INTOUCH_REWARD, VENDOR_INTOUCH_REWARD, VENDOR_ONLY_REWARD, CART_PROMOTION. |

| fromPurchaseDate | Timestamp | Filter to be used to fetch rewards by fetching the info based on purchase date. |

| toPurchaseDate | Timestamp | Filter to be used to fetch rewards by fetching the information based on the purchase date. |



`en`

```
https://eu.api.capillarytech.com/v1.1/user/user_rewards?username=(tillid)&mobile={mobile}
```

```
https://eu.api.capillarytech.com/v1.1/user/user_rewards?username=(tillid)&mobile={mobile}
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

| cardSeries | A list of card codes associated with the reward. |

| id | Unique identifier of the card that was associated with the reward. |

| code | Unique series code of the card associated with the reward. |

| labels | List of Label IDs associated with the reward. |

| groups | Lists any specific groups associated with the reward, used for segmentation purposes. |

| rewardRank | The rank or position of the reward within its category or list. |

| images | A list of image details related to the reward. |

| name | Name of the image. |

| altText | Alternative text or description of the image. |

| id | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images. |

| url | URL of the image. |

| isExternal | Indicates if the image is hosted on an external server. |

| videos | A list of video details related to the reward. |

| name | Name of the video. |

| altText | Alternative text or description of the video. |

| id | Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos. |

| url | URL of the video. |

| isExternal | Indicates if the video is hosted on an external server. |

| revenueDetails | Provides revenue-related information for the reward. |

| paymentDetails | Contains details about the payment configuration for the reward, including mode and identifier. |

| paymentMode | Specifies the payment mode for the reward, such as "FREE". |

| id | The unique identifier for the payment configuration. |

| redemptionDetails | Includes details about how the reward can be redeemed, such as type and value. |

| redemptionType | Specifies the type of redemption. |

| redemptionValue | The value associated with the redemption. |

| transactionCustomFields | Custom fields defined for the transaction. |

| fulfillmentDetails | Contains fulfillment-specific information for the reward. |

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

| orgLevelRestrictions | orgLevelRestrictions refers to a set of conditions that determine whether a reward or action is valid or accessible for specific organizations. This restriction is usually applied at the organization level to control which organizations can view, access, or redeem the rewards based on certain validation criteria. It will specify the connected orgs in which the restriction is applied. |

| isValid | Specifies if the restriction is valid or not |

| orgId | Specifies the org ID of the reward. |



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
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
    },
    "orgLevelRestrictions": [
        {
            "isValid": true,
            "orgId": 4000084
        },
        {
            "isValid": true,
            "orgId": 4000085
        }
    ]
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
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
    },
    "orgLevelRestrictions": [
        {
            "isValid": true,
            "orgId": 4000084
        },
        {
            "isValid": true,
            "orgId": 4000085
        }
    ]
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
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
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
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
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
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [
                	{
                "name": "imageName",
                "altText": "product picture",
                "id": null,
                "url": "mypic.com",
                "isExternal": true
            }
                ],
                "videos": [
                	{
                "name": "videoName",
                "altText": "product picture",
                "id": null,
                "url": "mypic.com",
                "isExternal": true
            }
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
    },
    "orgLevelRestrictions": [
        {
            "isValid": true,
            "orgId": 4000084
        },
        {
            "isValid": true,
            "orgId": 4000085
        }
    ]
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
            "pointsRedeemed": 1000,
            "rewardId": 154444,
            "transactionId": 232254,
            "issueRewardRefId": "TX2262531",
            "rewardIssueDate": 1723525599000,
            "userRewardExpiry": "2035-04-30 00:00:00",
            "userRewardDetails": {
                "id": 154444,
                "name": "50% off on planet fitness subscription",
                "description": "Burn 1000 points and get 50% off on planet fitness subscription",
                "imageId": "733aa751-6772-40a4-a3a1-38e64178410d",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/3b4d33c3-230e-446f-b987-cae428a6.jpg",
                "thumbnailId": "c11743a8-f353-4449-8242-1af679840a31",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/e7391686-2952-4c92-ad61-9684e938.jpg",
                "termAndConditionsId": "fe4a03ef-8749-45ae-9c28-59e4dc066eff",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/a7862c4c-1545-4d43-a696-8094402.html",
                "tier": null,
                "label": null,
                "priority": 1,
                "intouchPoints": 1000,
                "group": "Health",
                "startTime": "2024-04-17 12:54:00",
                "endTime": "2030-10-31 11:59:30",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 20,
                        "name": "groceries",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [
                    {
                        "groupName": "Recommended Rewards",
                        "groupRank": null
                    }
                ],
                "rewardRank": 4,
                "images": [
                	{
                "name": "imageName",
                "altText": "product picture",
                "id": null,
                "url": "mypic.com",
                "isExternal": true
            }
                ],
                "videos": [
                	{
                "name": "videoName",
                "altText": "product picture",
                "id": null,
                "url": "mypic.com",
                "isExternal": true
            }
                ]
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "C1TH8O7S",
            "vendor": null,
            "seriesId": "16745"
        },
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
                "cards": [
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
        },
        {
            "typeOfReward": "CART_PROMOTION",
            "pointsRedeemed": 3000,
            "rewardId": 158644,
            "transactionId": 232253,
            "issueRewardRefId": "TX3558027",
            "rewardIssueDate": 1723525590000,
            "userRewardExpiry": "2024-08-31 15:59:59",
            "userRewardDetails": {
                "id": 158644,
                "name": "$20 Reward ",
                "description": "$20 Reward ",
                "imageId": "4788334a-57fd-4df3-8f71-973151543f99",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/f67065d7-468a-40fc-92da-fbd2cd6a.png",
                "thumbnailId": "310b3173-da9f-40da-b39e-41f1e16665bd",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/b716c275-85e7-4b91-91c1-ece19ada.png",
                "termAndConditionsId": "d6aa0180-7eb1-4a90-99b7-e733ef7cb722",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5c5f19b3-971a-4a2d-affc-b4f6193.html",
                "tier": "",
                "label": "",
                "priority": 1,
                "intouchPoints": 3000,
                "group": "",
                "startTime": "2024-04-25 18:34:50",
                "endTime": "2025-11-18 18:34:50",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "name": "$20 Reward ",
            "promotionEarnedId": "66bae9d57e9655613506702e"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232252,
            "issueRewardRefId": "TX9611696",
            "rewardIssueDate": 1723525581000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "1T1B7M0J",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 1000,
            "rewardId": 191953,
            "transactionId": 232251,
            "issueRewardRefId": "TX4850125",
            "rewardIssueDate": 1723525577000,
            "userRewardExpiry": "2024-11-30 00:00:00",
            "userRewardDetails": {
                "id": 191953,
                "name": "10% coupon on 500ml Fresh Milk",
                "description": "10% coupon on 500ml Fresh Milk ",
                "imageId": "369e6ce5-f689-4620-921f-1b19cdf30f88",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/fa194405-1c55-41ec-a2f3-ed6af147.png",
                "thumbnailId": "11202e09-f039-4330-addd-3a54e6afe90f",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/61f077d8-851c-43d2-b10b-4d230392.png",
                "termAndConditionsId": "90f9c228-5f37-468a-9774-19bcf5e89a4c",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/cc95decd-c2c7-44e3-8045-40318a1.html",
                "tier": null,
                "label": "accessories",
                "priority": 1,
                "intouchPoints": 1000,
                "group": null,
                "startTime": "2024-06-28 14:36:33",
                "endTime": "2025-06-05 14:36:33",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": null,
            "code": "LHGJWB3E",
            "vendor": null,
            "seriesId": "20735"
        },
        {
            "typeOfReward": "INTOUCH_REWARD",
            "pointsRedeemed": 15000,
            "rewardId": 191956,
            "transactionId": 232250,
            "issueRewardRefId": "TX6800030",
            "rewardIssueDate": 1723525564000,
            "userRewardExpiry": "2025-02-28 00:00:00",
            "userRewardDetails": {
                "id": 191956,
                "name": "500 OFF on you next FlyDubai flight",
                "description": "500 OFF on you next FlyDubai flight",
                "imageId": "f0c7f8ae-b760-400c-981e-4e59aa4bf1ae",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5feb2ddb-0d1f-49df-bf7c-5852b604.jpg",
                "thumbnailId": "e011233a-389b-4826-a748-6c1d1333789a",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/83f35eb1-8c8f-487f-a132-bae98cb4.jpg",
                "termAndConditionsId": "7864d879-7d04-470a-83c2-b0d58bf6e2ee",
                "termAndConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/0f73b036-f419-4e46-97ee-e343e4a.html",
                "tier": null,
                "label": "accessories",
                "priority": 4,
                "intouchPoints": 15000,
                "group": null,
                "startTime": "2024-06-28 14:44:53",
                "endTime": "2025-06-28 14:44:53",
                "expired": false,
                "started": false,
                "programId": null,
                "categoryList": [
                    {
                        "id": 22,
                        "name": "accessories",
                        "enabled": true
                    }
                ],
                "loyaltyProgramCriteria": null,
                "groups": [],
                "rewardRank": null,
                "images": [],
                "videos": []
            },
            "revenueDetails": null,
            "paymentDetails": null,
            "redemptionDetails": null,
            "transactionCustomFields": null,
            "fulfillmentDetails": {
                "status": "Order confirmed"
            },
            "code": "CHEOYNAJ",
            "vendor": null,
            "seriesId": "20738"
        }
    ],
    "intouchUserId": "62090013",
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": false,
        "size": 5,
        "number": 5
    },
    "orgLevelRestrictions": [
        {
            "isValid": true,
            "orgId": 4000084
        },
        {
            "isValid": true,
            "orgId": 4000085
        }
    ]
}
```

`Try It!`