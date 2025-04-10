# Issue Cart Promotionpost

This API is used to issue cart promotion to customers. Enter a customerId and promotionId of the Cart Promotion to issue the promotion to the Customer.

> 👍NoteFor detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and step-by-step guide onmaking your first API call.

## 👍Note

Note

For detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and step-by-step guide onmaking your first API call.

# Prerequisites

- Authentication - Basic or OAuth authentication

- Access group resource - Write access to customer group resource

- Cart promotionId and customerId

# Resource Information

| URI | promotions/{promotionId}/issueBulk |

| --- | --- |

| HTTP method | POST |

| Pagination Supported | NA |

| Rate Limit | NA |

| Batch support | Yes |



# API Endpoint Example

http://eu.api.capillarytech.com//api_gateway/v1/promotions/{promoff}/issueBulk

# Path Parameter

| Parameter (Parameters marked as * are required) | Data Type | Description |

| --- | --- | --- |

| promotionId* | String | ID of cart promotion that is generated when creating a cart promotion. Use theget promotions for a customer APIto get the promotionId for the Cart Promotion. |



[get promotions for a customer API](/reference/get-promotions-for-a-customer)

# Query Parameter

| Parameter (Parameters marked as * are required) | Data Type | Description |

| --- | --- | --- |

| contextId* | String | Unique identifier of the issued promotion. It is used to identify the particular promotion. |



# Request Body

```
[
  555567088
]
```

```
[
  555567088
]
```

# Request Body Parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| customerId | Long | Unique identifier of the customer. |



# Response Body

```
{
    "data": {
        "555567088": {
            "id": "67dd4237ef21a64211227e06",
            "customerId": 555567088,
            "promotionId": "67dd4210ef21a64211227e04",
            "earnedFromId": "973", 
            "eventTime": 1742553655678,
            "validTill": 1746046799999
        }
    }
}
```

```
{
    "data": {
        "555567088": {
            "id": "67dd4237ef21a64211227e06",
            "customerId": 555567088,
            "promotionId": "67dd4210ef21a64211227e04",
            "earnedFromId": "973", 
            "eventTime": 1742553655678,
            "validTill": 1746046799999
        }
    }
}
```

# Response Body Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Object | Object containing details of the customer and issued cart promotion. |

| -- id | String | The unique identifier for the issued promotion instance. |

| -- customerId | Long | The ID of the customer to whom the promotion was issued. |

| -- promotionId | String | The ID of the promotion that was issued. |

| -- earnedFromId | String | The context ID that was passed in the API request, used to track the source of the issuance. |

| -- eventTime | Long | The timestamp (in milliseconds) when the promotion was issued. |

| -- validTill | Long | The timestamp (in milliseconds) until which the issued promotion is valid. |



# API Error Code

| Code | Description |

| --- | --- |

| 404 | Passed promotion is not found |



`Try It!`