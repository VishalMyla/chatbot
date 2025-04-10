# Is Coupon Redeemableget

This API allows you to verify whether a coupon is redeemable by a specific customer.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URL | /coupon/isredeemable |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/v1.1/coupon/isredeemable?mobile=11223569865&code=F3LRU8&coupon_code_case=lower

```
https://eu.api.capillarytech.com/v1.1/coupon/isredeemable?mobile=11223569865&code=F3LRU8&coupon_code_case=lower
```

# Request query parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| mobile* | Integer | Pass the customer id that you want to retrieve the coupon details from. |

| id | Integer | Unique Customer ID. |

| external_id | String | External ID of the customer. |

| email | String | Email ID of the customer. |

| card_number | Integer | Card number of the customer. |

| card_external_id | String | Card external ID of the customer. |

| details | Boolean | Passtrueto retrieve the details of the coupon series,extendedto retrieve the details of coupon configurations (set on campaign) of that specific coupon series. |

| code* | String | Pass the coupon code that you want to retrieve. To retrieve details of multiple coupons, pass each code separating with "," (comma). |

| coupon_code_case | Enum | This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values:LOWER: Converts the coupon code to lower case.UPPER: Converts the coupon codes to upper case.AS_IT_IS: It ensure that the coupon code is retrieved exactly as it was created or provided, without altering the letter case. For instance, if the code is "abAB123," it should be retrieved and displayed as "abAB123," maintaining its original formatting. |



`true`

`extended`

# Response parameters

| Parameter | Description |

| --- | --- |

| mobile | Customer's mobile number. |

| code | Coupon code. |

| is_redeemable | Indicates if the coupon is redeemable. |

| redemptions_left | Number of redemptions left. |

| no_of_redemptions_by_user | Number of times the coupon has been redeemed by the user. |

| coupon_value | Value of the coupon. |

| mobile | Customer's mobile number (repeated from above). |

| email | Customer's email address. |

| external_id | External identifier for the customer. |

| success | Status of the coupon redeem request. |

| status | Overall status of the request. |

| code | Status code for the request. |

| message | Message describing the redeem status. |



```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "redeemable": {
                "mobile": "11223569865",
                "code": "f3lru8",
                "is_redeemable": "true",
                "redemptions_left": -1,
                "no_of_redemptions_by_user": 0,
                "coupon_value": "17",
                "customer": {
                    "mobile": "11223569865",
                    "email": null,
                    "external_id": "000003873472"
                },
                "item_status": {
                    "success": "true",
                    "status": "true",
                    "code": 700,
                    "message": "Coupon isRedeem successful"
                }
            }
        }
    }
}
```

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "redeemable": {
                "mobile": "11223569865",
                "code": "f3lru8",
                "is_redeemable": "true",
                "redemptions_left": -1,
                "no_of_redemptions_by_user": 0,
                "coupon_value": "17",
                "customer": {
                    "mobile": "11223569865",
                    "email": null,
                    "external_id": "000003873472"
                },
                "item_status": {
                    "success": "true",
                    "status": "true",
                    "code": 700,
                    "message": "Coupon isRedeem successful"
                }
            }
        }
    }
}
```

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "redeemable": {
                "mobile": "11223569865",
                "code": "F3LRU8",
                "is_redeemable": "true",
                "redemptions_left": -1,
                "no_of_redemptions_by_user": 0,
                "coupon_value": "17",
                "customer": {
                    "mobile": "11223569865",
                    "email": null,
                    "external_id": "000003873472"
                },
                "item_status": {
                    "success": "true",
                    "status": "true",
                    "code": 700,
                    "message": "Coupon isRedeem successful"
                }
            }
        }
    }
}
```

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "redeemable": {
                "mobile": "11223569865",
                "code": "F3LRU8",
                "is_redeemable": "true",
                "redemptions_left": -1,
                "no_of_redemptions_by_user": 0,
                "coupon_value": "17",
                "customer": {
                    "mobile": "11223569865",
                    "email": null,
                    "external_id": "000003873472"
                },
                "item_status": {
                    "success": "true",
                    "status": "true",
                    "code": 700,
                    "message": "Coupon isRedeem successful"
                }
            }
        }
    }
}
```

`Try It!`