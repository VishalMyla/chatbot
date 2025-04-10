# Update coupon code expiry dateput

This API allows you to update the expiry date of coupon codes (including the expired coupon) individually or in bulk for a particular series.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.Maximum number of coupon that can be updated is100.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- Maximum number of coupon that can be updated is100.

# Prerequisites

- Authentication: Basic and OAuth authentication

- Coupon access group

# Resource information

|  |  |

| --- | --- |

| URI | v2/coupon/bulk/expiry |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/v2/coupon/bulk/expiry

```
https://eu.api.capillarytech.com/v2/coupon/bulk/expiry
```

# Request body parameters

| Field | Datatype | Description |

| --- | --- | --- |

| couponSeriesId | Integer | The ID of the series the coupon belongs to. You can retrieve the couponSeriesId using thisAPI |

| customer | Object | Contains details about the customer.NOTE:Customer block (id,email, externalId or mobile) is mandatory in case of generic coupon series id. |

| couponCodes | Array of Objects | An array containing details of each coupon. |

| couponCode* | String | The code of the coupon. |

| expiryDate* | String | The expiry date of the coupon in ISO or epoch time format. Example:2025-10-30T10:00:00Z. The time is always evaluated in the cluster time format. For example, if you define the time in GMT format and the cluster is India, the time is converted to IST format for the evaluation of the expiry time.Notes:- When you retrieve the details of the coupon, it will not display the time details but the coupon expiry happens in the defined time. For more details, refer tothis section.- The coupon code expiry date cannot be set beyond the coupon series expiry.- You can also move an expiry date to an earlier time. |



[API](/reference/get-coupon-details)

`2025-10-30T10:00:00Z`

[this section](/reference/update-coupon-code-expiry-date#difference-between-displayed-expiry-and-actual-expiration-time)

```
{
    "couponSeriesId": 415446,
    "customer": {
        "mobile": "11223569865"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T10:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 415446,
    "customer": {
        "mobile": "11223569865"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T10:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 415446,
    "customer": {
        "id": "555567088"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 415446,
    "customer": {
        "id": "555567088"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 415446,
    "customer": {
        "email": "[email protected]"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 415446,
    "customer": {
        "email": "[email protected]"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

[[email protected]](/cdn-cgi/l/email-protection)

```
{
    "couponSeriesId": 415446,
    "customer": {
        "externalId": "3873472"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 415446,
    "customer": {
        "externalId": "3873472"
    },
    "couponCodes": [
        {
            "couponCode": "4716726416",
            "expiryDate": "2025-10-30T00:00:00Z"
        },
        {
            "couponCode": "3381625240",
            "expiryDate": "2025-10-01T00:00:00+05:30"
        }
    ]
}
```

```
{
    "couponSeriesId": 597437,
    "customer": {
        "externalId": "000003873472"
    },
    "couponCodes": [
        {
            "couponCode": "DECATH10",
            "expiryDate": "2024-09-23T00:00:00Z"
        }
    ]
}
```

```
{
    "couponSeriesId": 597437,
    "customer": {
        "externalId": "000003873472"
    },
    "couponCodes": [
        {
            "couponCode": "DECATH10",
            "expiryDate": "2024-09-23T00:00:00Z"
        }
    ]
}
```

# Difference between displayed expiry and actual expiration time

The system does not display the time details when you retrieve the coupon details. See the below scenarios for more details:

## Scenario 1

- Cluster - India

- Defined expiry time - 2024-09-23T10:00:00Z

- Expiry details displayed on retrieval - 2024-09-23T00:00:00Z

Even though the time displayed during the retrieval is 10 hours behind, the coupon would expire at the defined time only (23rd September 2024 at 10 AM)

## Scenario 2

- Cluster - India

- Defined expiry time - 2024-09-23T00:00:00Z

- Expiry details displayed on retrieval - 2024-09-23T00:00:00Z

In this scenario, there is no difference between the defined and the time displayed during retrieval and the coupon would expire on 23rd September 2024 at 12.0 AM.

# Response parameters

| Field | Datatype | Description |

| --- | --- | --- |

| entity | Object | Gives details of a coupon issuance process, including the total, failed, and successful counts, unprocessed coupons, user ID, and coupon series ID. |

| totalCount | Integer | Total number of coupons processed. |

| failedCount | Integer | Number of coupons that failed processing. |

| successCount | Integer | Number of coupons that were successfully processed. |

| unprocessedCoupons | Array | An array of unprocessed coupons. |

| userId | Integer | Customer ID associated with the coupon series. |

| couponSeriesId | Integer | The ID of the coupon series. |

| warnings | Array | An array containing any warnings generated during processing. |

| error | Array | An array containing any errors generated during processing. |

| success | Boolean | Indicates whether the operation was successful (trueorfalse). |



`true`

`false`

```
{
    "entity": {
        "totalCount": 2,
        "failedCount": 0,
        "successCount": 2,
        "unprocessedCoupons": [],
        "userId": 555567088,
        "couponSeriesId": 415446
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 2,
        "failedCount": 0,
        "successCount": 2,
        "unprocessedCoupons": [],
        "userId": 555567088,
        "couponSeriesId": 415446
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "coupon seriesid is mandatory"
        }
    ],
    "success": false
}
```

```
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "coupon seriesid is mandatory"
        }
    ],
    "success": false
}
```

```
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2024-08-13T19:44:00Z",
                "couponCode": "DIMPIOYMNQ",
                "errorCode": 690,
                "errorMessage": "Expiry date is past date"
            }
        ],
        "userId": 423691691,
        "couponSeriesId": 1136443
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2024-08-13T19:44:00Z",
                "couponCode": "DIMPIOYMNQ",
                "errorCode": 690,
                "errorMessage": "Expiry date is past date"
            }
        ],
        "userId": 423691691,
        "couponSeriesId": 1136443
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 2,
        "failedCount": 1,
        "successCount": 1,
        "unprocessedCoupons": [
            {
                "expiryDate": "2024-09-23T05:53:00Z",
                "couponCode": "DECATH1000",
                "errorCode": 633,
                "errorMessage": "invalid coupon code"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597437
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 2,
        "failedCount": 1,
        "successCount": 1,
        "unprocessedCoupons": [
            {
                "expiryDate": "2024-09-23T05:53:00Z",
                "couponCode": "DECATH1000",
                "errorCode": 633,
                "errorMessage": "invalid coupon code"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597437
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2030-10-30T00:00:00Z",
                "couponCode": "EP25M4M40P",
                "errorCode": 691,
                "errorMessage": "coupon code expiry date cannot be set beyond series expiry"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597938
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2030-10-30T00:00:00Z",
                "couponCode": "EP25M4M40P",
                "errorCode": 691,
                "errorMessage": "coupon code expiry date cannot be set beyond series expiry"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597938
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2030-10-30T00:00:00Z",
                "couponCode": "EP25M4M40P",
                "errorCode": 691,
                "errorMessage": "coupon code expiry date cannot be set beyond series expiry"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597938
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 1,
        "failedCount": 1,
        "successCount": 0,
        "unprocessedCoupons": [
            {
                "expiryDate": "2030-10-30T00:00:00Z",
                "couponCode": "EP25M4M40P",
                "errorCode": 691,
                "errorMessage": "coupon code expiry date cannot be set beyond series expiry"
            }
        ],
        "userId": 555567088,
        "couponSeriesId": 597938
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756
            "message": "Atleast one coupon code and expiry date info is mandatory",         
        }
    ],
    "success": false
}
```

```
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756
            "message": "Atleast one coupon code and expiry date info is mandatory",         
        }
    ],
    "success": false
}
```

```
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 695
            "message": "User Id is mandatory for common coupon to change expiry",         
        }
    ],
    "success": false
}
```

```
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 695
            "message": "User Id is mandatory for common coupon to change expiry",         
        }
    ],
    "success": false
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 756 | No coupon series ID is passed |

| 690 | Expiry date is past date from coupon issual. |

| 633 | Invalid coupon code. |

| 691 | Coupon code expiry date cannot be set beyond series expiry date. |

| 756 | Atleast one coupon code and expiry date info is mandatory. |

| 695 | User Id is mandatory for common coupon to change expiry |



# FAQs

1. Can we update the expiry date of an expired coupon?Yes. You can change the expiry date of an expired coupon.

2. Can you update the expiry date of an expired coupon which belongs to an expired coupon series?No. You cannot update the expiry date of a coupon that belongs to an expired coupon series.

3. Can you reduce the expiry date of a coupon?Yes. You can change the expiry date to an earlier date.

4. Is there a limit to the number of times I can change the expiry date?No. There is no limit.

5. Is the coupon expiry date different from the series expiry date?Yes, the coupon code expiry is different from the series expiry date.

6. How is the coupon expiry date managed if changed through the API?If the coupon code expiry date is changed using this API, this new expiry date is stored in the database and overrides the existing expiry date defined for the coupon code.

`Try It!`