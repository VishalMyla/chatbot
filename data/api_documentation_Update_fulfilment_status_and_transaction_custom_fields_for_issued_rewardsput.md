# Update fulfilment status and transaction custom fields for issued rewardsput

This API is used to  update fulfilment status and transaction custom fields for issued rewards

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/management/transactions?skip_validation=true |

| HTTP Method | PUT |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/transactions?skip_validation=true

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/transactions?skip_validation=true
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| skip_validation | String | A validation code is used to redeem points for the transaction. You can set skip_validation to true in the configuration to bypass the validation code for points redemption. |



# Request body parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| transactions | array | Details about the transaction. |

| transactionId* | integer | Unique id for the transaction associated with the reward. |

| customerId | integer | Unique id for the customer associated with the transaction. |

| rewardId | integer | Unique id for the reward associated with the transaction. |

| transactionCustomFields | object | Custom transaction fields enhance the ability to track and manage reward points beyond what standard fields offer, meeting specific needs and requirements. The supported data types are String, Integer, Date, and Boolean. Default limit for transaction custom field is20.Consider the following scenarios:Scenario 1: A brand partners with a third-party vendor to deliver their product. This requires additional tracking, such as vendor ID, handling instructions, and delivery date. To manage this information, create custom fields forvendor_ID,handling_instructions, anddelivery_dateand include the fields with their respective values in thetransactionCustomFieldobject.Scenario 2: A brand wants to store extra information about a transaction's status, such as internal status codes and notes that standard fields don't capture.Create custom fieldsforinternal_status_codeandnotesand add the fields with their corresponding values to thetransactionCustomFieldobject.ReferReward Tracking with status and Custom Fieldsfor more information. |

| fulfillmentDetails | object | ThefulfillmentDetailsobject tracks the status of each transaction's fulfillment process and provides information about the current state of reward fulfillment. Consider the following scenarios:Scenario 1: A customer places an order for a reward. To track the order through its various stages,create statusessuch as "Order received," "Processing," "Shipped," and "Delivered." Include these statuses as values in thefulfillmentDetailsobject to provide real-time tracking information to the customer.Scenario 2: A customer reports an issue with a reward they received or requests a return. Update thefulfillmentDetailsobject with statuses such as "Returned," "Refund processed," or "Issue resolved." This approach helps manage and track returns or complaints more effectively. |

| status | string | Current status of the fulfillment process. Status can be created fromCreate fulfillment status. |



`vendor_ID`

`handling_instructions`

`delivery_date`

`transactionCustomField`

[Create custom fields](/reference/post-create-custom-field)

`internal_status_code`

`notes`

`transactionCustomField`

[Reward Tracking with status and Custom Fields](/docs/reward-tracking-with-status-and-custom-fields-in-reward-fulfillment)

`fulfillmentDetails`

[create statuses](/reference/create-fulfillment-status)

`Order received,`

`Processing`

`Shipped`

`Delivered.`

`fulfillmentDetails`

`fulfillmentDetails`

`Returned`

`Refund processed`

`Issue resolved`

[Create fulfillment status](/reference/create-fulfillment-status)

```
{
    "transactions": [
        {
            "transactionId": 3482445,
            "customerId": 85076836,
            "rewardId": 177657,
            "transactionCustomFields": {
                "Partner_Order_Id" : "6565454987656",
                "Date" : "10/09/2024",
                "Time" : "evening",
                "Seat_Section" : "Orchestra",
                "Seat_Row" : "Q",
                "Seat_Number" : "205",
                "Paypal_Order_Id" : "45678",
                "Paypal_amout" : "30$"
            },
            "fulfillmentDetails": {
                "status": "Confirmed"
            }
        }
    ]
}
```

```
{
    "transactions": [
        {
            "transactionId": 3482445,
            "customerId": 85076836,
            "rewardId": 177657,
            "transactionCustomFields": {
                "Partner_Order_Id" : "6565454987656",
                "Date" : "10/09/2024",
                "Time" : "evening",
                "Seat_Section" : "Orchestra",
                "Seat_Row" : "Q",
                "Seat_Number" : "205",
                "Paypal_Order_Id" : "45678",
                "Paypal_amout" : "30$"
            },
            "fulfillmentDetails": {
                "status": "Confirmed"
            }
        }
    ]
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| transactions | Details about the transaction. |

| id | Unique id of the transaction to fetch. |

| customerId | Unique id for the customer associated with the transaction. |

| rewardId | Unique id for the reward associated with the transaction. |

| fulfillmentDetails | Details about the fulfillment status. |

| id | Unique id of the fulfillment details |

| status | Current status of the fulfillment process. |



```
{
    "transactions": [
        {
            "transactionId": 3482445,
            "rewardId": 177657,
            "customerId": 85076836,
            "fulfillmentDetails": {
                "id": 9,
                "status": "Confirmed"
            },
            "transactionCustomFields": {
                "Partner_Order_Id": "6565454987656",
                "Date": "10/09/2024",
                "Time": "evening",
                "Seat_Section": "Orchestra",
                "Seat_Row": "Q",
                "Seat_Number": "205",
                "Paypal_Order_Id": "45678",
                "Paypal_amout": "30$"
            }
        }
    ]
}
```

```
{
    "transactions": [
        {
            "transactionId": 3482445,
            "rewardId": 177657,
            "customerId": 85076836,
            "fulfillmentDetails": {
                "id": 9,
                "status": "Confirmed"
            },
            "transactionCustomFields": {
                "Partner_Order_Id": "6565454987656",
                "Date": "10/09/2024",
                "Time": "evening",
                "Seat_Section": "Orchestra",
                "Seat_Row": "Q",
                "Seat_Number": "205",
                "Paypal_Order_Id": "45678",
                "Paypal_amout": "30$"
            }
        }
    ]
}
```

`Try It!`