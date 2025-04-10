# Issue bulk couponspost

This API allows you to issue a batch of coupon series to a customer, enabling the customer to redeem the coupons.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /v2/coupon/bulk/issue |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | Yes |



# API endpoint example

https://eu.api.capillarytech.com/v2/coupon/bulk/issue

```
https://eu.api.capillarytech.com/v2/coupon/bulk/issue
```

# Request body parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| seriesIds* | Array of Integers | List of coupon series IDs |

| customer* | Object | The object containing the details of the customer |

| customer.id | String | Unique identifier of the customer |



```
{
"seriesIds" :[544770,553379],

"customer":

  { 
   "id":"555567088"
  }
}
```

```
{
"seriesIds" :[544770,553379],

"customer":

  { 
   "id":"555567088"
  }
}
```

# Response parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| response | Array of Objects | List of responses for entities |

| response.entityId | Integer | Unique Identifier of the entity |

| response.result | Object | The object containing the result of the entity |

| response.result.code | String | Unique code of the coupon |

| response.result.seriesId | Integer | Unique Identifier of the coupon |

| response.result.description | String | The description of the coupon |

| response.result.discountCode | String | This code is defined during creation of coupon series and is used as a POS identifier on member care. This will be used by the cashier at the Point of sale machine. |

| response.result.validTill | String | Expiry date and time of the coupon. |

| response.result.discountType | String | Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted). |

| response.result.discountValue | Integer | The value of the discount. |

| response.result.discountUpto | Integer | The maximum value up to which the discount can be applied. |

| response.result.discountOn | String | The aspect on which the discount is applied. Supported values: BILL. |

| response.result.detailedInfo | String | Detailed information about the coupon |

| response.result.redemptionCount | Integer | Number of times the coupon has been redeemed. |

| response.result.id | Integer | ID of the result |

| response.errors | Array | The array of errors in the response |

| response.warnings | Array | The array of warning messages in the response |

| totalCount | Integer | Total count of entities processed |

| failureCount | Integer | Count of entities that failed to process |



```
{
    "response": [
        {
            "entityId": 544770,
            "result": {
                "code": "TPLPYOEYOT",
                "seriesId": 544770,
                "description": "Festival coupon",
                "discountCode": "erg123",
                "validTill": "2026-05-09T00:00:00Z",
                "discountType": "ABS",
                "discountValue": 500,
                "discountUpto": 0,
                "discountOn": "BILL",
                "detailedInfo": "Evil coupon",
                "redemptionCount": 0,
                "id": 0
            },
            "errors": [],
            "warnings": []
        },
        {
            "entityId": 553379,
            "result": {
                "code": "9WJIGHOBRL",
                "seriesId": 553379,
                "description": "DIWALI 100% OFF",
                "discountCode": "XYZ123",
                "validTill": "2029-05-09T00:00:00Z",
                "discountType": "ABS",
                "discountValue": 500,
                "discountUpto": 0,
                "discountOn": "BILL",
                "detailedInfo": "Evil coupon",
                "redemptionCount": 0,
                "id": 0
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "entityId": 544770,
            "result": {
                "code": "TPLPYOEYOT",
                "seriesId": 544770,
                "description": "Festival coupon",
                "discountCode": "erg123",
                "validTill": "2026-05-09T00:00:00Z",
                "discountType": "ABS",
                "discountValue": 500,
                "discountUpto": 0,
                "discountOn": "BILL",
                "detailedInfo": "Evil coupon",
                "redemptionCount": 0,
                "id": 0
            },
            "errors": [],
            "warnings": []
        },
        {
            "entityId": 553379,
            "result": {
                "code": "9WJIGHOBRL",
                "seriesId": 553379,
                "description": "DIWALI 100% OFF",
                "discountCode": "XYZ123",
                "validTill": "2029-05-09T00:00:00Z",
                "discountType": "ABS",
                "discountValue": 500,
                "discountUpto": 0,
                "discountOn": "BILL",
                "detailedInfo": "Evil coupon",
                "redemptionCount": 0,
                "id": 0
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

`Try It!`