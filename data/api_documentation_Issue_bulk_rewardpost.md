# Issue bulk rewardpost

This API is used to issue multiple rewards to the user based on mobile number/ email Id.

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

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption and GROUP_LOYALTY_REDEMPTION will be set to true for transactionRewards can be issued to customers when linked to cards or labels with an ACTIVE status. If no cards or labels are linked, rewards are still issued. A reward linked to a specific card series or label cannot be issued to a customer associated with a different card series or label.The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:HTTP Status Code:The API response must return a status code of 200.Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption and GROUP_LOYALTY_REDEMPTION will be set to true for transaction

- Rewards can be issued to customers when linked to cards or labels with an ACTIVE status. If no cards or labels are linked, rewards are still issued. A reward linked to a specific card series or label cannot be issued to a customer associated with a different card series or label.

- The Rewards system (Marvel/Rewards Catalogue)  only deducts points from the customer if the vendor reward issue is successful. As a result, the need to reverse redeemed points does not arise, as points are deducted only upon a confirmed successful reward issue. The success of the vendor reward issue is determined based on the following configuration criteria:HTTP Status Code:The API response must return a status code of 200.Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

1. HTTP Status Code:The API response must return a status code of 200.

2. Context Map Validation:The context map in the vendor redemption configuration must include a keyword "voucher". The "voucher" must have a valid value, such as a coupon code or reference ID.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/user/rewards/issue?username={store}&skip_validation=true |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/rewards/issue?username=swati&skip_validation=true

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/rewards/issue?username=swati&skip_validation=true
```

# Request query parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| Username* | String | Username name of the store. |

| skip_validation | Boolean | A validation code is used to redeem points for the transaction.skip_validationis set to true to bypass the validation code. |



`skip_validation`

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| mobile* | String | Mobile phone number of the customer. Any of the identifiers is mandatory. |

| email ID* | String | Email ID of the customer. Any of the identifiers is mandatory. |

| external ID* | String | External ID of the customer. Any of the identifiers is mandatory. |

| brand | String | Brand associated with the transaction. |

| transactionNumber | String | Unique identifier for the transaction. |

| programId | Integer | The ID of the program associated with the promotion. |

| notes | String | A string used to store or represent additional information. |

| eventLogId | String | A plain string identifier used to identify the transaction associated with a reward issual. There is no character limit for this parameter. |

| quantity* | Integer | Quantity or redemption value of the specific reward issued. This is applicable for rewards with payment config CONV_RATIO only and should have a value greater than one. For more information and various examples, refer to the documentationhere.Notes:- If the quantity is entered with decimals, the system will not consider the decimal part. For example, if you enter the value 1.56, the system will disregard the .56, and the value will be treated as 1.The maximum allowed quantity is5for rewards of typeCONV_RATIOif either redemptionValue or points are not provided.- If both the quantity and redemption value are defined in the payment configuration block, the defined number of rewards will be issued and the calculation will be based on the redemption value for each reward.- If you define quantity without a redemption value, the system considers the quantity as the redemption value. For example, if you provide a quantity of five and no redemption value, tone reward with a redemption value of 5 will be issued. |

| rewards | Array | Array of rewards associated with the transaction. |

| rewardId | Integer | Unique identifier for a reward. |

| params | String | Params acts as a key that holds additional information or configuration details as a JSON object. |

| requestId | String | A plain string identifier for the request that initiated this reward issuance attempt. Each request ID must be unique for each reward. This is used forIdempotency check. There is no character limit for this parameter. |

| paymentConfig | Object | Payment configuration details for the reward.Note:The payment config ID is mandatory if rewards are created with a payment configuration block. This applies when multiple payment configurations are defined for a single reward.. It is not recommended to use Payment Config for single payment config as it will break the flow when rewards need to be issued from loyalty workflows/ loyalty promotions/ journeys/ campaigns. |

| -id | Integer | Unique identifier for the payment configuration. (id can be obtained from thisAPI) |

| -redemptionValue | Integer | Value associated with the reward.Applicable only when the reward is mapped to aCONV_RATIOpayment configuration.Represents the value (e.g., miles) associated with the reward.Note: If both the quantity (e.g., 2) and redemption value (e.g., 100 in the payment configuration block) are provided in the request body, the system takes the corresponding quantity and redemption values. If redemption value is not provided, the system takes quantity as the redemption value. |

| customFields | Object | The list of custom fields associated with the reward issued to the customer. A custom field allows you to add extra information related to the reward.You can add the custom field in the issue reward call once the custom field is created using thecreate custom field API. |

| fulfillmentDetails | Object | The list of fulfillment details associated with the reward. There can be multiple stages that the reward undergoes, such as BOOKED, ON THE WAY, DELIVERED.For example, A brand can have a fulfillment status as the Reward is SHIPPED before delivering the reward to the customer.You can create a fulfillment status using theCreate fulfillment status APIand use it in the issue reward call. |

| user_group2_primary_user_id | String | Unique user ID of the primary member of the group associated with the rewards to be issued. Customer ID (user_group2_id) or User ID (user_group2_primary_user_id) or External ID (user_group2_external_id) ,any one of these three can be used. If any one of these is null, the transaction won't be considered a Group Loyalty Redemption. |



[here](/reference/reward-issuance-with-quantity-and-calculation-scenarios)

[Idempotency check](/reference/idempotency-check-for-issuing-reward)

[API](/reference/get-brand-by-id)

`CONV_RATIO`

[create custom field API](/reference/post-create-custom-field)

[Create fulfillment status API](/reference/create-fulfillment-status)

`user_group2_id`

`user_group2_primary_user_id`

`user_group2_external_id`

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "transactionNumber": 107,
    "programId": "626",
    "notes": "This is notes",
    "rewards": [
        {
            "rewardId": 239433,
            "quantity": 1,
            "customFields": {
                "issue-reward-1": "issue-reward-values"
            },
            "paymentConfig": {
                "id": 700
            },
            "fulfillmentDetails": {
                "status": "Order confirmed"
            }
        },
        {
            "rewardId": 239434,
            "quantity": 1,
            "paymentConfig": {
                "id": 701
            },
            "fulfillmentDetails": {
                "status": "Order confirmed"
            }
        }
    ],
    "userGroup2PrimaryUserId": 890
}
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "transactionNumber": 107,
    "programId": "626",
    "notes": "This is notes",
    "rewards": [
        {
            "rewardId": 239433,
            "quantity": 1,
            "customFields": {
                "issue-reward-1": "issue-reward-values"
            },
            "paymentConfig": {
                "id": 700
            },
            "fulfillmentDetails": {
                "status": "Order confirmed"
            }
        },
        {
            "rewardId": 239434,
            "quantity": 1,
            "paymentConfig": {
                "id": 701
            },
            "fulfillmentDetails": {
                "status": "Order confirmed"
            }
        }
    ],
    "userGroup2PrimaryUserId": 890
}
```

```
{
  "mobile": "919886022338",
  "brand": "marvel_automation",
  "transactionNumber": "Transaction-1716621508000",
  "rewards": [
    {
      "rewardId": 13649,
      "quantity": 40,
      "paymentConfig": {
            "id": 307,
            "points": 500
     }
    }
  ]
}
```

```
{
  "mobile": "919886022338",
  "brand": "marvel_automation",
  "transactionNumber": "Transaction-1716621508000",
  "rewards": [
    {
      "rewardId": 13649,
      "quantity": 40,
      "paymentConfig": {
            "id": 307,
            "points": 500
     }
    }
  ]
}
```

```
{
    "brand": "lekhanaBrand",
    "transactionNumber": "123456789",
    "rewards": [
        {
            "rewardId": 9252,
            "quantity": 1,
            "customFields": {
                "issue-reward-1": "issue-reward-values"
            },
            "fulfillmentDetails": {
                "status": "SHIPPED"
            }
        }
    ],
    "mobile": "916677777777"
}
```

```
{
    "brand": "lekhanaBrand",
    "transactionNumber": "123456789",
    "rewards": [
        {
            "rewardId": 9252,
            "quantity": 1,
            "customFields": {
                "issue-reward-1": "issue-reward-values"
            },
            "fulfillmentDetails": {
                "status": "SHIPPED"
            }
        }
    ],
    "mobile": "916677777777"
}
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "transactionNumber": "107",
    "rewards": [
        {
            "rewardId": 221441,
            "quantity": 2,
            "paymentConfig": {
                "id": 456
            }
        }
    ],
    "user_group2_primary_user_id":"11223569865"
}
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "transactionNumber": "107",
    "rewards": [
        {
            "rewardId": 221441,
            "quantity": 2,
            "paymentConfig": {
                "id": 456
            }
        }
    ],
    "user_group2_primary_user_id":"11223569865"
}
```

```
{
    "mobile": "162651476021",
    "brand": "BUKL",
    "transactionNumber": 1719466915,
    "rewards": [
        {
            "rewardId": 153873,
            "quantity": 1,
            "paymentConfig": {
                "id": 34
            },
            "params": {
                "test": "test"
            }
        },
        {
            "rewardId": 225087,
            "quantity": 1
        }
    ]
}
```

```
{
    "mobile": "162651476021",
    "brand": "BUKL",
    "transactionNumber": 1719466915,
    "rewards": [
        {
            "rewardId": 153873,
            "quantity": 1,
            "paymentConfig": {
                "id": 34
            },
            "params": {
                "test": "test"
            }
        },
        {
            "rewardId": 225087,
            "quantity": 1
        }
    ]
}
```

```
{
    "mobile": "9988776655",
    "brand": "BUKL",
    "transactionNumber": "NeeTesttr11",
    "params": {
        "denomination": 100,
        "quantity": 1
    },
    "rewards": [
        {
            "rewardId": 225086,
            "quantity": 1
        },
        {
            "rewardId": 225087,
            "quantity": 1
        }
    ]
}
```

```
{
    "mobile": "9988776655",
    "brand": "BUKL",
    "transactionNumber": "NeeTesttr11",
    "params": {
        "denomination": 100,
        "quantity": 1
    },
    "rewards": [
        {
            "rewardId": 225086,
            "quantity": 1
        },
        {
            "rewardId": 225087,
            "quantity": 1
        }
    ]
}
```

```
{
    "mobile": "9988776655",
    "brand": "BUKL",
    "transactionNumber": "NeeTesttr11",
    "rewards": [
        {
            "rewardId": 225086,
            "quantity": 1,
            "paymentConfig": {
                "redemptionValue": 500
            }
        },
        {
            "rewardId": 225087,
            "quantity": 1,
            "paymentConfig": {
                "redemptionValue": 100
            }
        }
    ]
}
```

```
{
    "mobile": "9988776655",
    "brand": "BUKL",
    "transactionNumber": "NeeTesttr11",
    "rewards": [
        {
            "rewardId": 225086,
            "quantity": 1,
            "paymentConfig": {
                "redemptionValue": 500
            }
        },
        {
            "rewardId": 225087,
            "quantity": 1,
            "paymentConfig": {
                "redemptionValue": 100
            }
        }
    ]
}
```

```
{
    "mobile": "919825752814",
    "brand": "testOrg_marvel_20230822_147",
    "transactionNumber": "2344s4",
    "notes": "This is test",
    "eventLogId":"eventLogId124",
    "rewards": [
        {
            "rewardId": 125099,
            "quantity": 2,
            "requestId":"req3"
        },
        {
            "rewardId": 125101,
            "quantity": 2,
            "requestId":"req4"
        }
    ]
}
```

```
{
    "mobile": "919825752814",
    "brand": "testOrg_marvel_20230822_147",
    "transactionNumber": "2344s4",
    "notes": "This is test",
    "eventLogId":"eventLogId124",
    "rewards": [
        {
            "rewardId": 125099,
            "quantity": 2,
            "requestId":"req3"
        },
        {
            "rewardId": 125101,
            "quantity": 2,
            "requestId":"req4"
        }
    ]
}
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 311509,
            "quantity": 3,
            "paymentConfig": {
                "redemptionValue": 100
            }
        ]
    }
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 311509,
            "quantity": 3,
            "paymentConfig": {
                "redemptionValue": 100
            }
        ]
    }
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 308697,
            "quantity": 3
        }
    ]
}
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 308697,
            "quantity": 3
        }
    ]
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
        "success": false,
        "code": 8010,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        },
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 126100,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId125",
            "requestId": "req4",
            "intouch": [
                {
                    "pointsRedeemed": "15",
                    "couponCode": "3221363134382942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "20",
                    "couponCode": "055447842352604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        }
    ]
}
```

```
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued successfully"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        },
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 126100,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId125",
            "requestId": "req4",
            "intouch": [
                {
                    "pointsRedeemed": "15",
                    "couponCode": "3221363134382942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "20",
                    "couponCode": "055447842352604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "redemptionDetails": {
                "redemptionType": "MILES",
                "redemptionValue": 2
            },
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null
        }
    ]
}
```

```
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued partially"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        },
        {
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "transactionId": 177832,
            "rewardId": 125101,
            "requestedQuantity": 2,
            "quantity": 0,
            "pointsReferenceId": null,
            "pointsReferenceIds": [],
            "eventLogId": "eventLogId124",
            "requestId": "req4",
            "intouch": null,
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        }
    ]
}
```

```
{
    "status": {
        "success": false,
        "code": 8010,
        "message": "Reward issued partially"
    },
    "rewards": [
        {
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "transactionId": 177831,
            "rewardId": 125099,
            "requestedQuantity": 2,
            "quantity": 2,
            "pointsReferenceId": null,
            "pointsReferenceIds": [
                "eiEWkQ"
            ],
            "eventLogId": "eventLogId124",
            "requestId": "req3",
            "intouch": [
                {
                    "pointsRedeemed": "10",
                    "couponCode": "32213631321782942853",
                    "codeExpiry": "2024-12-27 00:00:00"
                },
                {
                    "pointsRedeemed": "10",
                    "couponCode": "05544786382604497680",
                    "codeExpiry": "2024-12-27 00:00:00"
                }
            ],
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        },
        {
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "transactionId": 177832,
            "rewardId": 125101,
            "requestedQuantity": 2,
            "quantity": 0,
            "pointsReferenceId": null,
            "pointsReferenceIds": [],
            "eventLogId": "eventLogId124",
            "requestId": "req4",
            "intouch": null,
            "promotions": [],
            "vendor": [],
            "restrictions": null,
            "paymentConfig": null,
            "fulfillmentDetails": null,
            "customFields": null,
            "redemptionDetails": null
        }
    ]
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
        "code": 10003,
        "message": "Request payload is not matching for the passed requestId/s"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 10003,
        "message": "Request payload is not matching for the passed requestId/s"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duplicate requestId"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duplicate requestId"
    }
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

# Example: Issuing reward with quantity and redemption value

Consider the below scenario:

- Quantity = 3

- Redemption Value = 1000 miles

- Conversion ratio = 044

Sample Payload:

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 311509,
            "quantity": 3,
            "paymentConfig": {
                "redemptionValue": 100
            }
        ]
    }
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 311509,
            "quantity": 3,
            "paymentConfig": {
                "redemptionValue": 100
            }
        ]
    }
```

Calculation:

Formula:Points need to be Redeemed = (redemption_value / conv_ratio) × reward_quantity

= (1000 / 0.44) × 3 = 6818 pointsResult: 6818 points are redeemed for 3 reward vouchers of 1000 miles each.

# Example: Issuing reward with only quantity

Consider the below scenario:

Quantity = 3

Conversion ratio = 044

The system interprets the quantity as the redemption value and reward quantity as 1.

Sample Payload:

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 308697,
            "quantity": 3
        }
    ]
}
```

```
{
    "mobile": "11223569865",
    "brand": "BUKL",
    "rewards": [
        {
            "rewardId": 308697,
            "quantity": 3
        }
    ]
}
```

Calculation:

Formula:Points need to be Redeemed = (redemption_value / conv_ratio) × reward_quantity

= (3 / 0.44) × 1 = 7 pointsResult: 7 points are redeemed for one reward voucher of 3 miles.

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



Bulk Issuance Results:

| User | Bulk Issuance (r1, r2, r3, r4) | Success/Failure |

| --- | --- | --- |

| user1 | r1, r2, r3, r4 | r1 and r3 fail; r2 and r4 are issued |

| user2 | r1, r2, r3, r4 | r2 fails; r1, r3, and r4 pass |

| user3 | r1, r2, r3, r4 | r1, r2, and r3 fail; r4 passes |



# API-specific error codes

| Error code | Description |

| --- | --- |

| 400 | Invalid payment mode passed. Payment configuration ID is mandatory. Invalid payment mode passed. Payment configuration ID is mandatory. if thepaymentConfigblock is defined in the body, thenpaymentIdis mandatory. |

| 400 | Duplicate requestId |

| 3004 | Brand not found |

| 8003 | fail to issue reward as Reward is disabled or not started yet or expired |

| 8004 | fail to issue reward as  points are not redeemable |

| 8010 | Reward issued partially. This occurs when one of the rewards has multiple payment configurations mapped to it. For more information, refer to the documentationhere. |

| 10003 | Invalid Request ID |

| 12005 | Reward constraint evaluation failed. Request failed. Max limit for the DAYS is reached. Allowed limit is 15 For Level CUSTOMER |

| 12016 | Invalid payment mode passed. Invalid payment mode passed. WhateverpaymentIdis passed in this API, the same should be mapped for the reward created. |

| 12034 | User Doesn't Belong To Segment Partition Defined For Reward Segment |

| 12050 | User has no valid cards from card series linked to the reward. The customer is not associated with the card series linked to the issued reward. |



`paymentConfig`

`paymentId`

[here](/reference/reward-issuance-with-quantity-and-calculation-scenarios)

`paymentId`

`Try It!`