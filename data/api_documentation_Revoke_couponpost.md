# Revoke couponpost

This API allows you to revoke unredeemed coupons by using customer identifiers or using the associated coupon codes.

When revoking by coupon codes, a maximum of50codes can be revoked in a single API call.

When revoking by customer ID, mobile number, email, or external ID, the API can revoke up to100unredeemed coupons for a customer. If the customer has more than 100 unredeemed coupons, the API will return an error.

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

| URI | /v2/coupon/revoke |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/v2/coupon/revoke

```
https://eucrm.cc.capillarytech.com/v2/coupon/revoke
```

# Body parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| couponSeriesId | Integer | The ID of the series the coupon belongs to. |

| customer | String | The object contains the details of the customer. You can usemobile,email, customer id (id) or external id (externalId) of the customer. |

| couponCodes | String | Code of Coupon. Also known as Point of sale identifier.NOTE: Generic coupon codes are not supported for single revoke. However, if multiple coupons are revoked in bulk using coupon series ID and a generic coupon code exists within the same series, all coupons including the generic coupon code in that series will be revoked. |



`mobile`

`email`

`id`

`externalId`

```
{
  "couponSeriesId": 415446,
  "customer": {
    "mobile": "11223569865"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "mobile": "11223569865"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "couponCodes": [
    "3138309782",
    "3636820421"
  ]
}
```

```
{
  "couponSeriesId": 415446,
  "couponCodes": [
    "3138309782",
    "3636820421"
  ]
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "externalId": "000003873472"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "externalId": "000003873472"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "id": "555567088"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "id": "555567088"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "email": "[email protected]"
  }
}
```

```
{
  "couponSeriesId": 415446,
  "customer": {
    "email": "[email protected]"
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameter | Description |

| --- | --- |

| totalCount | Total number of coupons involved in this process. |

| failedCount | Number of failed attempt to revoke coupon. |

| revokedCoupons | Array of details of revoked coupons. |

| couponId | Unique identifier of the revoked coupon. |

| couponCode | Coupon code associated with the revoked coupon. |

| issuedToUserId | ID of the user to whom the coupon was issued. |

| failedToRevoke | List of coupons that failed to be revoked. |



```
{
    "entity": {
        "totalCount": 18,
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1239575840,
                "couponCode": "5500675094",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232284084,
                "couponCode": "1017790881",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787759,
                "couponCode": "3172276491",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787758,
                "couponCode": "8654169058",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305016,
                "couponCode": "1274893438",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263410,
                "couponCode": "3381625240",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263409,
                "couponCode": "4716726416",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787735,
                "couponCode": "6630418828",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263337,
                "couponCode": "4882381921",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263305,
                "couponCode": "5686061236",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263336,
                "couponCode": "2924713073",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263304,
                "couponCode": "3084294818",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305003,
                "couponCode": "8984115714",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305002,
                "couponCode": "4209752443",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575902,
                "couponCode": "8873389069",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787736,
                "couponCode": "8396455657",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575903,
                "couponCode": "4204166326",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575839,
                "couponCode": "6479258939",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 18,
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1239575840,
                "couponCode": "5500675094",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232284084,
                "couponCode": "1017790881",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787759,
                "couponCode": "3172276491",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787758,
                "couponCode": "8654169058",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305016,
                "couponCode": "1274893438",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263410,
                "couponCode": "3381625240",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263409,
                "couponCode": "4716726416",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787735,
                "couponCode": "6630418828",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263337,
                "couponCode": "4882381921",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263305,
                "couponCode": "5686061236",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263336,
                "couponCode": "2924713073",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263304,
                "couponCode": "3084294818",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305003,
                "couponCode": "8984115714",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305002,
                "couponCode": "4209752443",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575902,
                "couponCode": "8873389069",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787736,
                "couponCode": "8396455657",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575903,
                "couponCode": "4204166326",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575839,
                "couponCode": "6479258939",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
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
        "revokedCoupons": [
            {
                "couponId": 1239817476,
                "couponCode": "3636820421",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239817475,
                "couponCode": "3138309782",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
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
        "revokedCoupons": [
            {
                "couponId": 1239817476,
                "couponCode": "3636820421",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239817475,
                "couponCode": "3138309782",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
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
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1247326281,
                "couponCode": "SALE20",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
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
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1247326281,
                "couponCode": "SALE20",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 3,
        "failedCount": 3,
        "revokedCoupons": [],
        "failedToRevoke": [
            {
                "errorCode": 682,
                "errorMessage": "Coupon not found ",
                "couponCodes": [
                    "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25",
                    "GQ7PTBRWBLJLFT7R775B1XMUS2QCRB83WS9HI1A8",
                    "CODE123"
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 3,
        "failedCount": 3,
        "revokedCoupons": [],
        "failedToRevoke": [
            {
                "errorCode": 682,
                "errorMessage": "Coupon not found ",
                "couponCodes": [
                    "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25",
                    "GQ7PTBRWBLJLFT7R775B1XMUS2QCRB83WS9HI1A8",
                    "CODE123"
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
       "status": 200,
       "totalCount": 5,
       "failedCount": 4,
       "hasMore": false,
       "revokedCoupons":
       [
           {
               "couponId": 1231,
               "couponCode": "SDDSDSDS",
               "issuedToUserId": 123132
           }
       ],
       "failedToRevoke":
       [
           {
               "errroCode": 404,
               "errorMessage": "Coupon code not found",
               "couponCodes":
               [
                   "CODE4",
                   "CODE5"
               ]
           },
           {
               "errrorCode": 405,
               "errorMessage": "Coupon code redeemed",
               "couponCodes":
               [
                   "CODE6",
                   "CODE7"
               ],
           }
       ]
   }
```

```
{
       "status": 200,
       "totalCount": 5,
       "failedCount": 4,
       "hasMore": false,
       "revokedCoupons":
       [
           {
               "couponId": 1231,
               "couponCode": "SDDSDSDS",
               "issuedToUserId": 123132
           }
       ],
       "failedToRevoke":
       [
           {
               "errroCode": 404,
               "errorMessage": "Coupon code not found",
               "couponCodes":
               [
                   "CODE4",
                   "CODE5"
               ]
           },
           {
               "errrorCode": 405,
               "errorMessage": "Coupon code redeemed",
               "couponCodes":
               [
                   "CODE6",
                   "CODE7"
               ],
           }
       ]
   }
```

```
{
    "entity": {
        "totalCount": 3,
        "failedCount": 2,
        "revokedCoupons": [
            {
                "couponId": 24454630,
                "couponCode": "3H2G6OAGPAQ3FYMT5IO4ZNV49V21VEV05JBP6S3T",
                "issuedToUserId": 341612616
            }
        ],
        "failedToRevoke": [
            {
                "errorCode": 682,
                "errorMessage": "Coupon not found ",
                "couponCodes": [
                    "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25",
                    "CODE123"
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": {
        "totalCount": 3,
        "failedCount": 2,
        "revokedCoupons": [
            {
                "couponId": 24454630,
                "couponCode": "3H2G6OAGPAQ3FYMT5IO4ZNV49V21VEV05JBP6S3T",
                "issuedToUserId": 341612616
            }
        ],
        "failedToRevoke": [
            {
                "errorCode": 682,
                "errorMessage": "Coupon not found ",
                "couponCodes": [
                    "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25",
                    "CODE123"
                ]
            }
        ]
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
            "code": 108,
            "message": "Unsupported coupons series config with client handling type GENERIC"
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
            "code": 108,
            "message": "Unsupported coupons series config with client handling type GENERIC"
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
            "code": 712,
            "message": "Coupon Series / Campaign has expired"
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
            "code": 712,
            "message": "Coupon Series / Campaign has expired"
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
            "message": "CouponCode/s or customer info is mandatory"
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
            "message": "CouponCode/s or customer info is mandatory"
        }
    ],
    "success": false
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 404 | Coupon code not found. |

| 405 | Coupon code is already redeemed. |

| 682 | Coupon not found. |

| 108 | GENERIC coupon code is not supported. |

| 712 | Coupon Series has expired |

| 756 | No coupon code or customer info is passed. |



`Try It!`