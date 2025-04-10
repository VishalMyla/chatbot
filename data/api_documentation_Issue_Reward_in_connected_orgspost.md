# Issue Reward in connected orgspost

This API is used to issue single or multiple rewards to the user based on mobile number/ email Id.

While issuing bulk rewards,

1. The intouch points required to purchase the rewards are summed up and isRedeemable call checks if the customer has enough points or not.If the customer has enough points, then all the rewards in the issue bulk call are issued in a single shotIf the customer doesn't have enough points, then the issue bulk call is failed and no reward is issued.

The intouch points required to purchase the rewards are summed up and isRedeemable call checks if the customer has enough points or not.

1. If the customer has enough points, then all the rewards in the issue bulk call are issued in a single shot

2. If the customer doesn't have enough points, then the issue bulk call is failed and no reward is issued.

4. If the isRedeemable call is successful, then the system will issue the rewards to the user.Let's say, one reward is coupon, another is cart promotion in the request payload. Coupon is issued but cart promotion issual failed, this can happen and the coupon will be issued. Here in this case, partial issual will be successful.

If the isRedeemable call is successful, then the system will issue the rewards to the user.

1. Let's say, one reward is coupon, another is cart promotion in the request payload. Coupon is issued but cart promotion issual failed, this can happen and the coupon will be issued. Here in this case, partial issual will be successful.

> ❗️Issuing a reward created for a customer segmentIf you want to issue a reward created for a specific customer segment, the user receiving the reward must belong to the segment or partition to which the reward is attached.

## ❗️Issuing a reward created for a customer segment

Issuing a reward created for a customer segment

If you want to issue a reward created for a specific customer segment, the user receiving the reward must belong to the segment or partition to which the reward is attached.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption and GROUP_LOYALTY_REDEMPTION will be set to true for transactionRewards can be issued to a customer:If they are linked to any cards or labels associated with the customer. The status for the cards and labels need to beACTIVEas well here.If they have no cards or labels linked.The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:HTTP Status Code:The API response must return a status code of 200.Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption and GROUP_LOYALTY_REDEMPTION will be set to true for transaction

- Rewards can be issued to a customer:If they are linked to any cards or labels associated with the customer. The status for the cards and labels need to beACTIVEas well here.If they have no cards or labels linked.

1. If they are linked to any cards or labels associated with the customer. The status for the cards and labels need to beACTIVEas well here.

2. If they have no cards or labels linked.

- The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:HTTP Status Code:The API response must return a status code of 200.Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

1. HTTP Status Code:The API response must return a status code of 200.

2. Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

> 🚧Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

## 🚧Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /v1.1/user/rewards/issue/?username={till}&skip_validation=true |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/user/rewards/issue/?username=tillID&skip_validation=true

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/user/rewards/issue/?username=tillID&skip_validation=true
```

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELFandOTHERRefer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

[data scopes](/reference/connected-orgs-data-scopes)

# Request query parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| username* | String | Username name of the store. |

| skip_validation | Boolean | A validation code is used to redeem points for the transaction.skip_validationis set to true as brands configured in Marvel bypass validation code. |



`skip_validation`

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| mobile* | Integer | Mobile phone number of the customer. Any of the identifiers is mandatory. |

| email | String | Email ID of the customer. Any of the identifiers is mandatory. |

| externalId | String | External ID of the customer. Any of the identifiers is mandatory. |

| transactionNumber | String | Unique identifier for the transaction. |

| notes | String | A string used to store or represent additional information. |

| quantity* | Integer | Quantity of the specified reward. This is applicable for rewards with payment config CONV_RATIO only and should have a value greater than one. For more information and various examples, refer to the documentationhere.Note:If the quantity is entered with decimals, the system will not consider the decimal part. For example, if you enter the value 1.56, the system will disregard the .56, and the value will be treated as 1. |

| eventLogId | String | A plain string identifier used to identify the transaction associated with a reward issual. There is no character limit for this parameter. |

| rewards | Array | Array of rewards associated with the transaction. |

| rewardId | Integer | Unique identifier for a reward. |

| params | String | Params acts as a key that holds additional information or configuration details as a JSON object. |

| paymentConfig | Object | Payment configuration details for the reward.Note: The payment config ID is mandatory if rewards are created with a payment configuration block. This applies when multiple payment configurations are defined for a single reward.. It is not recommended to use Payment Config for single payment config as it will break the flow when rewards need to be issued from loyalty workflows/ loyalty promotions/ journeys/ campaigns. |

| id | Integer | Unique identifier for the payment configuration. (id can be obtained from thisAPI) |

| customFields | Object | The list of custom fields associated with the reward issued to the customer. A custom field allows you to add extra information related to the reward.You can add the custom field in the issue reward call once the custom field is created using thecreate custom field API. |

| fulfillmentDetails | Object | The list of fulfillment details associated with the reward. There can be multiple stages that the reward undergoes, such as BOOKED, ON THE WAY, DELIVERED.For example, A brand can have a fulfillment status as the Reward is SHIPPED before delivering the reward to the customer.You can create a fulfillment status using theCreate fulfillment status APIand use it in the issue reward call. |

| requestId | String | A plain string identifier for the request that initiated this reward issuance attempt. Each request ID must be unique for each reward. This is used forIdempotency check. There is no character limit for this parameter. |

| user_group2_primary_user_id | String | Unique user ID of the primary member of the group associated with the rewards to be issued. Customer ID (user_group2_id) or User ID (user_group2_primary_user_id) or External ID (user_group2_external_id) ,any one of these three can be used. If any one of these is null, the transaction won't be considered a Group Loyalty Redemption. |

| orgLevelDetails | Array | Contains a list of organization IDs related to the rewards. All fields likeorgId, params, notes, userGroup2PrimaryUserId, userGroup2Idneeds to be passed in “orgLevelDetails". |

| orgId | List | Organization ID of the reward from which it was created. |



[here](/reference/reward-issuance-with-quantity-and-calculation-scenarios)

[API](/reference/get-brand-by-id)

[create custom field API](/reference/post-create-custom-field)

[Create fulfillment status API](/reference/create-fulfillment-status)

[Idempotency check](/reference/idempotency-check-for-issuing-reward)

`user_group2_id`

`user_group2_primary_user_id`

`user_group2_external_id`

```
orgId, params, notes, userGroup2PrimaryUserId, userGroup2Id
```

```
{
    "brand": "O2Brand",
    "transactionNumber": "123456789",
    "orgLevelDetails": [
        {
            "orgId": 4000876
        }
    ],
    "rewards": [
        {
            "rewardId": 350,
            "quantity": 1,
            "orgId": 4000876,
            "paymentConfig": {
                "redemptionValue": 1
            }
        }
    ],
    "externalId": "ext_id98543198"
}
```

```
{
    "brand": "O2Brand",
    "transactionNumber": "123456789",
    "orgLevelDetails": [
        {
            "orgId": 4000876
        }
    ],
    "rewards": [
        {
            "rewardId": 350,
            "quantity": 1,
            "orgId": 4000876,
            "paymentConfig": {
                "redemptionValue": 1
            }
        }
    ],
    "externalId": "ext_id98543198"
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| status | Represents the overall status of the reward issuance request. |

| success | Indicates if the overall operation was successful or not. |

| code | A unique code representing the overall status of the operation. |

| message | A message providing additional information about the status of the operation. |

| rewards | A list of individual reward issuance results. |

| status | Represents the status of an individual reward issuance attempt. |

| success | Indicates if the reward issuance for this specific reward was successful or not. |

| code | A unique code representing the status of this reward issuance attempt. |

| message | A message providing more details about the status of this reward issuance attempt. |

| orgID | Organisation ID of the reward where it was issued. |

| transactionId | A unique identifier for the transaction associated with this reward issuance attempt. |

| rewardId | A unique identifier for the reward that was attempted to be issued. |

| requestedQuantity | The Requested Quantity is the original number of items you asked for when making a reward request. Even if this number is later changed, for example, reduced from two to one, the Requested Quantity will still show the number you originally requested, which in this case is two. |

| quantity | The number of rewards that were successfully issued in this transaction. |

| pointsReferenceId | A unique identifier generated each time rewards are issued. This field stores identifier, allowing you to track points redemption transaction. |

| pointsReferenceIds | A unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. |

| eventLogId | A plain string identifier used to identify the transaction associated with a reward issual. |

| requestId | A unique identifier for the request that is used for Idempotency check. |

| intouch | Details of the rewards issued, including points redeemed, coupon codes, and expiration dates. |

| pointsRedeemed | The number of points that were redeemed for this reward. |

| couponCode | The unique code for the issued coupon. |

| codeExpiry | The expiration date and time for the issued coupon code in the format YYYY-MM-DD HH:MM:SS. |

| promotions | A list of promotional offers associated with the reward. |

| vendor | Vendor-related details associated with the reward issuance. |

| restrictions | Restrictions or limitations that apply to the reward. |

| paymentConfig | Payment configuration details related to the reward. |

| fulfillmentDetails | Fulfillment-related information for the reward. |

| customFields | Custom fields defined for the reward. |

| redemptionDetails | Redemption-specific details associated with the reward. |

| redemptionType | Specifies the category of reward redemption available, that indicate how users can redeem the reward. |

| redemptionValue | Redemption Value is the value of a reward, showing how much is needed to claim it. |



```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "orgId": 4004543,
            "transactionId": 57097,
            "rewardId": 350,
            "requestedQuantity": 1,
            "quantity": 1,
            "pointsReferenceId": "7Scaq1",
            "pointsReferenceIds": [
                "7Scaq1"
            ],
            "eventLogId": null,
            "requestId": null,
            "intouch": null,
            "promotions": [],
            "vendor": [
                {
                    "valid_till": "2027-11-01",
                    "voucher": "OV4GJYQV3Y",
                    "pointsRedeemed": "2",
                    "offer_name": "marvel-loadtest",
                    "coupon_series_id": "234"
                }
            ],
            "restrictions": null,
            "paymentConfig": {
                "paymentMode": "CONV_RATIO",
                "id": 54,
                "conversionRatio": 0.5000
            },
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": {
                "redemptionType": "MILES",
                "totalRedemptionValue": 1
            }
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "orgId": 4004543,
            "transactionId": 57097,
            "rewardId": 350,
            "requestedQuantity": 1,
            "quantity": 1,
            "pointsReferenceId": "7Scaq1",
            "pointsReferenceIds": [
                "7Scaq1"
            ],
            "eventLogId": null,
            "requestId": null,
            "intouch": null,
            "promotions": [],
            "vendor": [
                {
                    "valid_till": "2027-11-01",
                    "voucher": "OV4GJYQV3Y",
                    "pointsRedeemed": "2",
                    "offer_name": "marvel-loadtest",
                    "coupon_series_id": "234"
                }
            ],
            "restrictions": null,
            "paymentConfig": {
                "paymentMode": "CONV_RATIO",
                "id": 54,
                "conversionRatio": 0.5000
            },
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": {
                "redemptionType": "MILES",
                "totalRedemptionValue": 1
            }
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "orgId": 4000085,
            "transactionId": 57097,
            "rewardId": 350,
            "requestedQuantity": 1,
            "quantity": 1,
            "pointsReferenceId": "7Scaq1",
            "pointsReferenceIds": [
                "7Scaq1"
            ],
            "eventLogId": null,
            "requestId": null,
            "intouch": null,
            "promotions": [],
            "vendor": [
                {
                    "valid_till": "2027-11-01",
                    "voucher": "OV4GJYQV3Y",
                    "pointsRedeemed": "2",
                    "offer_name": "marvel-loadtest",
                    "coupon_series_id": "234"
                }
            ],
            "restrictions": null,
            "paymentConfig": {
                "paymentMode": "CONV_RATIO",
                "id": 54,
                "conversionRatio": 0.5000
            },
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": {
                "redemptionType": "MILES",
                "totalRedemptionValue": 1
            }
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "orgId": 4000085,
            "transactionId": 57097,
            "rewardId": 350,
            "requestedQuantity": 1,
            "quantity": 1,
            "pointsReferenceId": "7Scaq1",
            "pointsReferenceIds": [
                "7Scaq1"
            ],
            "eventLogId": null,
            "requestId": null,
            "intouch": null,
            "promotions": [],
            "vendor": [
                {
                    "valid_till": "2027-11-01",
                    "voucher": "OV4GJYQV3Y",
                    "pointsRedeemed": "2",
                    "offer_name": "marvel-loadtest",
                    "coupon_series_id": "234"
                }
            ],
            "restrictions": null,
            "paymentConfig": {
                "paymentMode": "CONV_RATIO",
                "id": 54,
                "conversionRatio": 0.5000
            },
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": {
                "redemptionType": "MILES",
                "totalRedemptionValue": 1
            }
        }
    ]
}
```

`Try It!`