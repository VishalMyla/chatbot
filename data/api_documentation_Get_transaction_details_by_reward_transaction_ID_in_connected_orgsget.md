# Get transaction details by reward transaction ID in connected orgsget

This API retrieves the detailed information of a specific reward transaction using the reward transaction ID.

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

| URL | /api_gateway/rewards/core/v1.1/reward-transactions/{rewardTransactionId} |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions/32787

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELF,OTHERandALL.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

`ALL`

[data scopes](/reference/connected-orgs-data-scopes)

# Request path parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| rewardTransactionId* | String | Unique identifier of the reward transaction. The reward transaction is generated during the issual of the reward.Example: 327847 |



```
/curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions/<rewardTransactionId>' \
e--header 'DATA-SCOPE: OTHER' \
x--header 'DATA-SCOPE-ORG: 50672' \
--header 'Authorization: Basic a2FyXzE6MzE1MmQyMzRiNzA='
```

```
/curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions/<rewardTransactionId>' \
e--header 'DATA-SCOPE: OTHER' \
x--header 'DATA-SCOPE-ORG: 50672' \
--header 'Authorization: Basic a2FyXzE6MzE1MmQyMzRiNzA='
```

# Response parameters

| Parameter Name | Description |

| --- | --- |

| status | Contains the details of the operation. |

| -success | Indicates if the operation was successful. |

| -code | HTTP status code of the operation. |

| -message | Message about the operation's outcome. |

| data | Contains detailed information about the reward transaction. |

| -rewardTransactionId | Unique identifier for the reward transaction. It is generated during the issual of the reward. |

| -customerId | Unique identifier for the customer. |

| -orgId | Unique identifier for the org. |

| -rewardIssueRefId | Reference ID for the reward issuance. |

| -rewardTransactionDate | Date and time of the reward transaction in milliseconds since epoch. It is in the Unix timestamp format |

| -status | Contains the status of the reward issuance. |

| --success | Indicates if the reward was issued successfully,truefor successful reward issual andfalsefor failed reward issual. |

| --code | Status code for the reward issue transaction. |

| --message | Status message for the reward issue transaction, indicating if the reward issual was successful. |

| -quantity | Number of rewards issued. |

| -requestedQuantity | Represents the original reward quantity that was requested. |

| -groupRedemption | Indicates if the redemption is a group redemption. |

| -rewardDetails | Contains details of the issued reward. |

| --rewardId | Unique identifier of the reward. |

| --languageCode | Language code of the reward details.Example:enfor English. |

| --name | Name of the reward. |

| --description | Description of the reward. |

| --rewardRank | Rank or position of the reward within its category or list. |

| --groups | Specifies the group associated with the reward. |

| --imageId | Unique identifier for the image associated with the reward. |

| --imageUrl | URL to the image associated with the reward. |

| --intouchPoints | The number of intouch points associated with the reward. |

| --redemptionType | Gives the redemption type of the reward.Example:MILES. |

| --images | A list of image details related to the reward. |

| --name | Name of the image. |

| --altText | Alternative text or description of the image. |

| --id | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images. |

| --url | URL of the image. |

| --isExternal | Indicates if the image is hosted on an external server. |

| --videos | A list of videos associated with the reward. |

| --name | Name of the video. |

| --altText | Alternative text or description of the video. |

| --id | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external videos. |

| --url | URL of the video. |

| --isExternal | Indicates if the video is hosted on an external server. |

| -pointsRedemption | Contains details of the points redemption process. |

| --redeemedPoints | Number of points redeemed. |

| --pointsRedemptionRefId | Unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. |

| --status | Status details of the points redemption. |

| ---success | Indicates whether the points redemption was successful. |

| ---code | A unique code representing the status of the points redemption. |

| ---message | A message providing information about the points redemption status.Example:Points redeemed successfully. |

| -redemptionDetails | Contains details of the redemption process. |

| --redemptionType | Gives the redemption type of the reward.Example:INTOUCH_REWARD. |

| --totalRedemptionValue | The total value of the redemption.Example:10miles. |

| -vouchers | A list of vouchers associated with the redemption. |

| -vendorRewards | Stores the vendor reward details. |

| --rewards | Identifier for the vendor reward. |

| -customFields | Custom fields for additional information. |

| -transactionCustomFields | Custom fields associated with the transaction. |

| -ownerId | Unique identifier of the owner.Example:123. |



`true`

`false`

`en`

`MILES`

`Points redeemed successfully.`

`INTOUCH_REWARD`

`10`

`123`

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "327847",
        "customerId": 555738346,
        "orgId": 100458,
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1737629567000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 295211,
            "languageCode": "en",
            "name": "Donate to Charity : Help us brighten a child's day!",
            "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
            "rewardRank": 1,
            "groups": [],
            "imageId": "5d05ccb2-6f5b-4b58-ad90-b97647c86784",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1aba92d2-28bc-44dc-9dc9-00fbf662.jpg",
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 30,
            "pointsRedemptionRefId": "kLZgHE",
            "pointsRedemptionRefIds": [
                "kLZgHE"
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            }
        },
        "redemptionDetails": {
            "redemptionType": "MILES",
            "totalRedemptionValue": 10
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{}"
                }
            ]
        },
        "customFields": {
            "A": "1"
        },
        "transactionCustomFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "ownerId": ""
    }
}
```

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "327847",
        "customerId": 555738346,
        "orgId": 100458,
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1737629567000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 295211,
            "languageCode": "en",
            "name": "Donate to Charity : Help us brighten a child's day!",
            "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
            "rewardRank": 1,
            "groups": [],
            "imageId": "5d05ccb2-6f5b-4b58-ad90-b97647c86784",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1aba92d2-28bc-44dc-9dc9-00fbf662.jpg",
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 30,
            "pointsRedemptionRefId": "kLZgHE",
            "pointsRedemptionRefIds": [
                "kLZgHE"
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            }
        },
        "redemptionDetails": {
            "redemptionType": "MILES",
            "totalRedemptionValue": 10
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{}"
                }
            ]
        },
        "customFields": {
            "A": "1"
        },
        "transactionCustomFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "ownerId": ""
    }
}
```

`Try It!`