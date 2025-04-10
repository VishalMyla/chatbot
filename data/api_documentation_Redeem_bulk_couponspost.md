# Redeem bulk couponspost

> 👍NotesA maximum of 100 coupons can be redeemed in a single API request.The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.For all redeem coupon APIs event notification is generated.

## 👍Notes

Notes

- A maximum of 100 coupons can be redeemed in a single API request.

- The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.

- For all redeem coupon APIs event notification is generated.

> 🚧WarningBulk coupon redemption will fail if even one of the coupons is invalid. For example, if you submit a request with 100 coupons and just one is either invalid or not issued to the user, the entire redemption will be unsuccessful. There is no option for partial success in bulk redemptions.

## 🚧Warning

Warning

Bulk coupon redemption will fail if even one of the coupons is invalid. For example, if you submit a request with 100 coupons and just one is either invalid or not issued to the user, the entire redemption will be unsuccessful. There is no option for partial success in bulk redemptions.

# Request Body parameter

| Parameter | Description |

| --- | --- |

| redemptionRequestList | List of coupons to redeem. |

| code | Coupon code to redeem. |

| redemptionTime | The date and time when the coupon is going to be redeemed in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time. |

| transactionNumber | Transaction number for which the coupon(s) needs to be redeemed. |

| billAmount | Transaction amount for which the coupon is redeemed. |

| user | Details of the customer that redeems the coupon(s). |

| id | Unique ID of the customer. |

| mobile* | Unique mobile number of the customer. |

| email* | Unique email ID of the customer. |

| externalId* | Unique external ID of the customer. |



*Any one of the customer identifiers is mandatory.

```
{
    "redemptionRequestList": [
        {
            "code": "U6ER8MJ5"
        },
        {
            "code": "U6ER8MH9"
        }
    ],
    "redemptionTime": "2021-05-12 19:18:30",
    "transactionNumber": "numbr9435064964",
    "user": {
        "id": 126080386
    },
    "billAmount": "2000"
}
```

```
{
    "redemptionRequestList": [
        {
            "code": "U6ER8MJ5"
        },
        {
            "code": "U6ER8MH9"
        }
    ],
    "redemptionTime": "2021-05-12 19:18:30",
    "transactionNumber": "numbr9435064964",
    "user": {
        "id": 126080386
    },
    "billAmount": "2000"
}
```

# Response body parameter

| Parameter | Description |

| --- | --- |

| entityId | Unique identifier for the entity. |

| result.id | Unique ID of the result. |

| result.currencyInput | Indicates if currency input is present. |

| result.localToBaseCurrencyExchangeRate | Exchange rate from local currency to base currency. |

| result.code | Code associated with the result. |

| result.discountCode | Code indicating the type of discount. |

| result.seriesCode | Code associated with the series. |

| result.isAbsolute | Indicates if the value is absolute. |

| result.couponValue | Value of the coupon. |

| result.redemptionStatus.statusCode | Status code object containing status details. |

| result.redemptionStatus.message | Message indicating the status of coupon processing. |

| result.redemptionStatus.code | Code indicating the status of coupon processing. |

| result.redemptionStatus.success | Indicates if the coupon processing was successful. |

| result.discountType | Type of discount provided. |

| result.discountValue | Value of the discount provided. |

| result.discountUpto | Maximum value up to which the discount is applicable. |

| totalCount | Total count of items in the response. |

| failureCount | Count of items that failed. |



`Try It!`