# Issue single rewardpost

This API is used to issue a reward to the user based on mobile number/ email ID/ external ID.

> ❗️Issuing reward that was created for a customer segmentIf you want to issue a reward created for a specific customer segment, the user receiving the reward must belong to the segment or partition to which the reward is attached.

## ❗️Issuing reward that was created for a customer segment

Issuing reward that was created for a customer segment

If you want to issue a reward created for a specific customer segment, the user receiving the reward must belong to the segment or partition to which the reward is attached.

> 👍NotesFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption and GROUP_LOYALTY_REDEMPTION will be set to true for transactionRewards can be issued to customers when linked to cards or labels with an ACTIVE status. If no cards or labels are linked, rewards are still issued. A reward linked to a specific card series or label cannot be issued to a customer associated with a different card series or label.The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:HTTP Status Code:The API response must return a status code of 200.Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.WhenDual Eligibilityfeature is enabled, a reward can be issued to multiple users registered with the same secondary identifiers, as long as they have unique primary identifiers.

## 👍Notes

Notes

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption and GROUP_LOYALTY_REDEMPTION will be set to true for transaction

- Rewards can be issued to customers when linked to cards or labels with an ACTIVE status. If no cards or labels are linked, rewards are still issued. A reward linked to a specific card series or label cannot be issued to a customer associated with a different card series or label.

- The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:HTTP Status Code:The API response must return a status code of 200.Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

1. HTTP Status Code:The API response must return a status code of 200.

2. Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

- WhenDual Eligibilityfeature is enabled, a reward can be issued to multiple users registered with the same secondary identifiers, as long as they have unique primary identifiers.

[Dual Eligibility](/docs/customer_entity#dual-eligibility)

# Prerequisites

- Authentication: Basic or OAuth authentication

Authentication: Basic or OAuth authentication

- Default access group

Default access group

- ALLOW SKIPPING VALIDATIONconfiguration needs to be enabled to redeem the points without OTP/validation code.

ALLOW SKIPPING VALIDATIONconfiguration needs to be enabled to redeem the points without OTP/validation code.

`ALLOW SKIPPING VALIDATION`

![](https://files.readme.io/a5c3d7e-Skip_validation.png)

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/user/reward/{reward Id}/issue?username={store}&skip_validation=true |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/{reward Id}/issue?username={store}&skip_validation=true

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/{reward Id}/issue?username={store}&skip_validation=true
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| Reward ID* | String | Unique identifier of the reward. It can be obtained by creating the Reward. |



# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| username* | String | Till username |

| skip_validation | Boolean | A validation code is used to redeem points for the transaction.skip_validationis set to true to bypass the validation code. |



`skip_validation`

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| mobile | String | The mobile phone number associated with the transaction. |

| email* | String | The email ID of the customer. |

| external ID* | String | The external ID of the customer. |

| brand* | String | Name of brand associated with the transaction. |

| transactionNumber | String | Unique identifier for the transaction. |

| notes | String | Additional notes or comments related to the transaction. |

| programId | Integer | The ID of the program associated with the promotion. |

| rewardOwnershipRO | Object | Owner validation for issuance of rewards only when the owner's details are provided. |

| ownerType | Enum | Module for which the reward was created. Supported values: Loyalty program, Milestones, Campaigns, Journeys, Goodwill. |

| ownerId | String | Unique identifier of the owner to claim the reward. For Example:12345678 |

| rewards | Array | A list of rewards associated with the transaction. |

| rewardId | Integer | The unique identifier of a specific reward. |

| quantity | Integer | The quantity or redemption value of the specific reward issued. This applies only to rewards with the payment configuration CONV_RATIO. By default, the quantity is set to 1. For more information and various examples, refer to the documentationhere.Note:- If the quantity is entered with decimals, the system will not consider the decimal part. For example, if you enter the value 1.56, the system will disregard the .56, and the value will be treated as 1.- > While issuing a reward, you can issue only one reward at a time. If you issue the reward with a quantity of more than one,  only one reward will be issued. |

| paymentConfig | Object | Payment configuration details for the reward.Note: The payment config ID is mandatory if rewards are created with a payment configuration block. This applies when multiple payment configurations are defined for a single reward. It is not recommended to use Payment Config for single payment config as it will break the flow when rewards need to be issued from loyalty workflows/ loyalty promotions/ journeys/ campaigns. |

| redemptionValue | Integer | Value associated with the reward.Example: For a 1000MILESreward, the redemption value is 1000. |

| id | Integer | Unique identifier for the payment configuration. (id can be obtained from thisAPI.) |

| tender | Object | The tender details contain the customer transaction details used to purchase the reward. For example, if the customer has opted for a CASH+POINTS payment mode and uses the card to pay for the reward, then the card information is captured here. |

| totalAmount | Integer | The total amount the customer is required to pay to purchase the reward. |

| methodOfPayment | Enum | The method the customer uses to pay for the reward. For example: If a customer is using a card as the payment method, you can enter the method of payment as "card". |

| methodOfPaymentId | String | A unique identifier for the payment method used. |

| tenderId | Integer | A unique identifier for the tender. |

| amount | Integer | The amount paid from the payment mode. |

| customFields | Object | The list of custom fields associated with the reward issued to the customer. A custom field allows you to add extra information related to the reward.You can add the custom field in the issue reward call once the custom field is created using thecreate custom field API. |

| fulfillmentDetails | Object | The list of fulfillment details associated with the reward. There can be multiple stages that the reward undergoes, such as BOOKED, ON THE WAY, DELIVERED.For example, A brand can have a fulfillment status as the Reward is SHIPPED before delivering the reward to the customer.You can create a fulfillment status using theCreate fulfillment status APIand use it in the issue reward call. |

| user_group2_primary_user_id | String | Unique user ID of the primary member of the group associated with the rewards to be issued. Customer ID (user_group2_id) or User ID (user_group2_primary_user_id) or External ID (user_group2_external_id) ,any one of these three can be used. If any one of these is null, the transaction won't be considered a Group Loyalty Redemption. |

| eventLogId | String | A plain string identifier used to identify the transaction associated with a reward issual. There is no character limit for this parameter. |

| requestId | String | A plain string identifier for the request that initiated this reward issuance attempt. Each request ID must be unique for each reward. This is used forIdempotency check. There is no character limit for this parameter. |



[here](/reference/reward-issuance-with-quantity-and-calculation-scenarios)

`MILES`

[API](/reference/get-brand-by-id)

[create custom field API](/reference/post-create-custom-field)

[Create fulfillment status API](/reference/create-fulfillment-status)

`user_group2_id`

`user_group2_primary_user_id`

`user_group2_external_id`

[Idempotency check](/reference/idempotency-check-for-issuing-reward)

```
{
  "mobile": "919456430850",
  "brand": "BUKL",
  "transactionNumber": "23444",
  "notes": "test"
}
```

```
{
  "mobile": "919456430850",
  "brand": "BUKL",
  "transactionNumber": "23444",
  "notes": "test"
}
```

```
{
  "externalId": "919456430850",
  "brand": "BUKL",
  "transactionNumber": "01987"
}
```

```
{
  "externalId": "919456430850",
  "brand": "BUKL",
  "transactionNumber": "01987"
}
```

```
{
  "emailId": "[email protected]",
  "brand": "BUKL",
  "transactionNumber": "23444",
  "notes": "test"
}
```

```
{
  "emailId": "[email protected]",
  "brand": "BUKL",
  "transactionNumber": "23444",
  "notes": "test"
}
```

[[email protected]](/cdn-cgi/l/email-protection)

```
{
    "mobile": "917411982768",
    "brand": "SAHANA_TEST",
    "rewardOwnershipRO": {
        "ownerType": "CAMPAIGNS",
        "ownerId": "abc7"
    }
}
```

```
{
    "mobile": "917411982768",
    "brand": "SAHANA_TEST",
    "rewardOwnershipRO": {
        "ownerType": "CAMPAIGNS",
        "ownerId": "abc7"
    }
}
```

```
{
    "mobile": "919825752814",
    "brand": "testOrg_marvel_20230822_147",
    "transactionNumber": "2344s4",
    "paymentConfig":{
        "id":55
    },"tender":{
        "totalAmount":100,
        "tenders":[
            {
                "methodOfPayment":"CARD",
                "methodOfPaymentId":"HDFC",
                "tenderId":"123",
                "amount":40
            },
            {
                "methodOfPayment":"CARD",
                "methodOfPaymentId":"ICICI",
                "tenderId":"123456",
                "amount":60
            }
        ]
    }
}
```

```
{
    "mobile": "919825752814",
    "brand": "testOrg_marvel_20230822_147",
    "transactionNumber": "2344s4",
    "paymentConfig":{
        "id":55
    },"tender":{
        "totalAmount":100,
        "tenders":[
            {
                "methodOfPayment":"CARD",
                "methodOfPaymentId":"HDFC",
                "tenderId":"123",
                "amount":40
            },
            {
                "methodOfPayment":"CARD",
                "methodOfPaymentId":"ICICI",
                "tenderId":"123456",
                "amount":60
            }
        ]
    }
}
```

```
{
    "brand": "brand",
    "transactionNumber": "123456789",
    "mobile": "916677777777",
    "customFields":{
        "issue-reward-3":"issue-reward-values"
    },
    "fulfillmentDetails":{
        "status":"DELIVERED"
    }
}
```

```
{
    "brand": "brand",
    "transactionNumber": "123456789",
    "mobile": "916677777777",
    "customFields":{
        "issue-reward-3":"issue-reward-values"
    },
    "fulfillmentDetails":{
        "status":"DELIVERED"
    }
}
```

```
{
  "mobile": "mobile",
  "brand": "brand",
  "transactionNumber": "23444",
  "user_group2_primary_user_id":"ieuiw",
}
```

```
{
  "mobile": "mobile",
  "brand": "brand",
  "transactionNumber": "23444",
  "user_group2_primary_user_id":"ieuiw",
}
```

```
{
  "mobile": "919456430850",
  "brand": "BUKL",
  "transactionNumber": "23444",
  "notes": "test",
  "programId": "626",
}
```

```
{
  "mobile": "919456430850",
  "brand": "BUKL",
  "transactionNumber": "23444",
  "notes": "test",
  "programId": "626",
}
```

```
{
  "mobile": "11223569865",
  "brand": "BUKL",
    "paymentConfig": {
            "redemptionValue": 1000
     }
}
```

```
{
  "mobile": "11223569865",
  "brand": "BUKL",
    "paymentConfig": {
            "redemptionValue": 1000
     }
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| success | Indicates whether the operation to issue a reward was successful. |

| code | The HTTP status code related to the reward issuance operation. |

| message | Descriptive message about the reward issuance outcome. |

| pointsRedeemed | The number of points redeemed in the transaction. |

| couponCode | A unique code representing the coupon issued. |

| codeExpiry | The expiration date and time of the coupon code. |

| transactionId | A unique identifier for the transaction associated with this reward issuance. |

| promotion | Information about any promotion associated with the transaction. |

| vendor | Details about the vendor involved in the transaction, if any. |

| paymentMode | The mode of payment used in the transaction For example "POINTS"). |

| id | Unique identifier for the payment configuration. |

| points | The exact number of points used in the payment configuration. |

| redemptionDetails | Redemption-specific details associated with the reward. |

| redemptionType | Specifies the category of reward redemption available, that indicate how users can redeem the reward. |

| redemptionValue | Redemption Value is the value of a reward, showing how much is needed to claim it. |

| fulfillmentDetails | Details about the fulfillment process of the transaction, if any. |

| customFields | Any additional custom fields associated with the transaction. |

| eventLogId | A plain string identifier used to identify the transaction associated with a reward issual. |

| requestId | A unique identifier for the request that is used for Idempotency check. |

| eventDateTime | Date and time when a triggering event (transactional or behavioural) occurred, initiating the reward earning. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ). |

| issueDateTime | Date and time when the reward was awarded to the customer. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ). |



```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "10",
        "couponCode": "9632782882",
        "codeExpiry": "2024-12-13 00:00:00"
    },
    "transactionId": 303095,
    "promotion": null,
    "vendor": null,
    "paymentConfig": {
        "paymentMode": "POINTS",
        "id": 55,
        "points": 50.0000
    },
    "redemptionDetails": {
        "redemptionType": "MILES",
        "redemptionValue": 2
    },
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": "eventLogId124",
    "requestId": "req3"
  "eventDateTime": "2025-03-27T13:38:11Z"
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "10",
        "couponCode": "9632782882",
        "codeExpiry": "2024-12-13 00:00:00"
    },
    "transactionId": 303095,
    "promotion": null,
    "vendor": null,
    "paymentConfig": {
        "paymentMode": "POINTS",
        "id": 55,
        "points": 50.0000
    },
    "redemptionDetails": {
        "redemptionType": "MILES",
        "redemptionValue": 2
    },
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": "eventLogId124",
    "requestId": "req3"
  "eventDateTime": "2025-03-27T13:38:11Z"
}
```

```
{
    "status": {
        "success": false,
        "code": 12016,
        "message": "Invalid payment mode passed."
    },
    "intouch": null,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "fulfillmentDetails": null,
    "customFields": null
}
```

```
{
    "status": {
        "success": false,
        "code": 12016,
        "message": "Invalid payment mode passed."
    },
    "intouch": null,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "fulfillmentDetails": null,
    "customFields": null
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Invalid payment mode passed.,Payment configuration id is mandatory"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Invalid payment mode passed.,Payment configuration id is mandatory"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as user 373971337 does not belong to group 124",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 373971337 does not belong to group 124"
            ]
        }
    },
    "rewards":null
    
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as user 373971337 does not belong to group 124",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 373971337 does not belong to group 124"
            ]
        }
    },
    "rewards":null
    
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
{
    "status": {
        "success": false,
        "code": 12050,
        "message": "User has no valid cards from card series linked to the reward."
    },
    "intouch": null,
    "transactionId": 207595,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "redemptionDetails": null,
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": null,
    "requestId": null
}
```

```
{
    "status": {
        "success": false,
        "code": 12050,
        "message": "User has no valid cards from card series linked to the reward."
    },
    "intouch": null,
    "transactionId": 207595,
    "promotion": null,
    "vendor": null,
    "paymentConfig": null,
    "redemptionDetails": null,
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": null,
    "requestId": null
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": null,
    "transactionId": 330114,
    "promotion": null,
    "vendor": {},
    "paymentConfig": {
        "paymentMode": "CONV_RATIO",
        "id": 3799,
        "conversionRatio": 0.33
    },
    "redemptionDetails": {
        "redemptionType": "MILES",
        "totalRedemptionValue": 1000
    },
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": null,
    "requestId": null
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": null,
    "transactionId": 330114,
    "promotion": null,
    "vendor": {},
    "paymentConfig": {
        "paymentMode": "CONV_RATIO",
        "id": 3799,
        "conversionRatio": 0.33
    },
    "redemptionDetails": {
        "redemptionType": "MILES",
        "totalRedemptionValue": 1000
    },
    "fulfillmentDetails": null,
    "customFields": null,
    "eventLogId": null,
    "requestId": null
}
```

# Example: Issuing reward with quantity and redemption value

Consider the below scenario:

Quantity = 1

Redemption value = 1000 miles

Conversion ratio = 044

Sample Payload:

```
{
  "mobile": "11223569865",
  "brand": "BUKL",
  "quantity":1,
   "paymentConfig": {
            "redemptionValue": 1000
     }
}
```

```
{
  "mobile": "11223569865",
  "brand": "BUKL",
  "quantity":1,
   "paymentConfig": {
            "redemptionValue": 1000
     }
}
```

Calculation:

Formula:Points need to be Redeemed = (redemption_value / conv_ratio) × reward_quantity

= (1000 / 0.44) × 1 = 2273 pointsResult: 2273 points are redeemed for 1 reward voucher of 1000 miles.

# Example: Issuing reward with only quantity

Consider the below scenario:

Quantity = 1

Conversion ratio = 044

The system interprets the quantity as the redemption value

Sample Payload:

```
{
  "mobile": "11223569865",
  "brand": "BUKL",
  "quantity":2
}
```

```
{
  "mobile": "11223569865",
  "brand": "BUKL",
  "quantity":2
}
```

Calculation:

Formula:Points need to be Redeemed = (redemption_value / conv_ratio) × reward_quantity

= (1 / 0.44) × 1 = 2 pointsResult: 2 points are redeemed for 1 reward voucher of 1 mile.

# Example: Issuing reward created for customer segment

Consider the following scenario:

| Reward | Segments and Partitions |

| --- | --- |

| r1 | {s1, p1}, {s2, p2} |

| r2 | {s1, p2}, {s2, p1} |

| r3 | {s1, p1}, {s3, p1} |

| r4 | No segments or partitions |



User Segments and Partitions:

| User | Belongs to Segments and Partitions | Reward details |

| --- | --- | --- |

| user1 | {s2, p1}, {s3, p2} | Does not contain r1, r3; contains r2, r4 |

| user2 | {s1, p1} | Contains r1, r3, r4; does not contain r2 |

| user3 | No segments or partitions | Contains r4 |



Single Reward Issuance Results

| User | Issued Reward | Belongs to Segments and Partitions | Success/Failure |

| --- | --- | --- | --- |

| user1 | r1 | {s2, p1}, {s3, p2} | Fails |

| user1 | r2 | {s2, p1}, {s3, p2} | Passes |

| user3 | r4 | No segments or partitions | Passes |



# API-specific error codes

| Error code | Description |

| --- | --- |

| 400 | Invalid payment mode passed. Payment configuration ID is mandatory. if thepaymentConfigblock is defined in the body, thenpaymentIdis mandatory. |

| 3004 | Brand not found |

| 8003 | fail to issue reward as Reward is disabled or not started yet or expired/fail to issue reward as voucher is not present - This can be due to issues in the vendor flow configuration. |

| 8004 | fail to issue reward as  points are not redeemable |

| 8010 | Reward issued partially |

| 12005 | Reward constraint evaluation failed. Request failed. Max limit for the DAYS is reached. Allowed limit is 15 For Level CUSTOMER |

| 12016 | Invalid payment mode passed. WhateverpaymentIdis passed in this API, the same should be mapped for the reward created. |

| 12034 | User Doesn't Belong To Segment Partition Defined For Reward Segment |

| 12050 | User has no valid cards from card series linked to the reward. The user is not associated with the card series linked to the issued reward. |

| 8004 | Only secondary identifiers (e.g., mobile or email) are passed, the primary identifier is missing. |



`paymentConfig`

`paymentId`

`paymentId`

`Try It!`