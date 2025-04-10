# Redeem single couponpost

> 🚧NotesThis API does not trigger any loyalty events and is designed to redeem coupons directly. If the use case involves issuing points or coupons to the user as part of a loyalty promotion during the redemption of a coupon, it is recommended to use thev1.1/coupon/redeemAPI.The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.For all redeem coupon APIs event notification is generated.

## 🚧Notes

Notes

- This API does not trigger any loyalty events and is designed to redeem coupons directly. If the use case involves issuing points or coupons to the user as part of a loyalty promotion during the redemption of a coupon, it is recommended to use thev1.1/coupon/redeemAPI.

`v1.1/coupon/redeem`

- The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.

- For all redeem coupon APIs event notification is generated.

# Body parameter

| Parameter | Description |

| --- | --- |

| billAmount | The total amount of the bill. |

| transactionNumber | The unique number associated with the transaction. |

| user | Details of the customer. |

| user.mobile | Mobile number of the customer. |

| redemptionTime | The date and time when the coupon is going to be redeemed in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time. |

| redemptionRequestList | List containing coupon details for redemption. |

| code | Coupon code to be redeemed. |



```
{
    "redemptionRequestList": [
        {
            "code": "2609909641"
        }
    ],
    "user": {
        "externalId": "000003873472"
    },
    "transactionNumber": "",
    "billAmount": "0",
    "redemptionTime": "2024-11-11T05:11:13-05:00"
}
```

```
{
    "redemptionRequestList": [
        {
            "code": "2609909641"
        }
    ],
    "user": {
        "externalId": "000003873472"
    },
    "transactionNumber": "",
    "billAmount": "0",
    "redemptionTime": "2024-11-11T05:11:13-05:00"
}
```

# Response parameters

| Field | Description |

| --- | --- |

| redemption | A list containing details of each redemption instance. |

| id | A unique identifier for the redemption instance. |

| currencyInput | Indicates whether currency input is required for the redemption. |

| localToBaseCurrencyExchangeRate | The exchange rate used to convert from the local currency to the base currency. |

| warnings | A list of warnings encountered during the redemption process. |

| appendedErrorMessage | Contains any error message appended during the redemption process. |

| code | The coupon code used for redemption. |

| discountCode | The discount code associated with the coupon. |

| seriesCode | The series code of the coupon. |

| isAbsolute | Indicates whether the discount value is absolute. |

| couponValue | The value of the coupon. |

| redemptionStatus | Indicates the status of the redemption process. |

| redemptionStatus.statusCode | Contains the status code details of the redemption process. |

| statusCode.status | Indicates whether the coupon processing was successful. |

| statusCode.message | A message describing the status of the coupon processing. |

| statusCode.code | The status code representing the result of the coupon processing. |

| redemptionStatus.warnings | Warnings related to the redemption process. |

| redemptionStatus.warningsAsStatusCode | Warnings formatted as status codes. |

| redemptionStatus.message | A message providing additional information about the redemption status. |

| redemptionStatus.code | The status code for the redemption process. |

| redemptionStatus.success | Indicates whether the redemption was successful. |

| discountType | The type of discount applied (e.g., "ABS" for absolute value). |

| discountValue | The value of the discount applied. |

| discountUpto | The maximum value of the discount if applicable. |

| redemptionStatus | Represents the overall status of the redemption. |

| redemptionStatus.status | Indicates the overall success status of the coupon processing. |

| redemptionStatus.message | A message describing the overall status of the coupon processing. |

| redemptionStatus.code | The status code representing the overall result of the coupon processing. |

| customer | An object containing details about the customer. |

| customer.id | A unique identifier for the customer. |

| customer.profiles | An array of profile objects associated with the customer. |

| firstName | The first name of the customer. |

| lastName | The last name of the customer. |

| fields | Contains additional fields related to the customer's profile. |

| identifiers | Identifier for the customer. |

| identifiers.type | The type of identifier (e.g., "mobile", "email"). |

| identifiers.value | The value of the identifier (e.g., the actual mobile number or email address). |

| customer.profiles.identifiers.type | The type of the second identifier. |

| customer.profiles.identifiers.value | The value of the second identifier. |

| customer.profiles.commChannels | Communication channels preferred by the customer. |

| customer.profiles.userId | A unique identifier for the user's profile. |

| customer.profiles.accountId | The account ID associated with the customer's profile. |

| customer.profiles.autoUpdateTime | The timestamp indicating the last automatic update time for the profile. |

| customer.profiles.identifiersAll | Contains all identifiers associated with the customer. |

| identifiersAll.type | The type of the first identifier in the all identifiers. |

| identifiersAll.value | The value of the first identifier in the all identifiers. |

| identifiersAll.type | The type of the second identifier in the all identifiers. |

| identifiersAll.value | The value of the second identifier in the all identifiers. |

| warnings | Warnings encountered during the process. |



```
{
    "redemption": [
        {
            "id": 369455787,
            "currencyInput": false,
            "localToBaseCurrencyExchangeRate": 0,
            "warnings": [],
            "appendedErrorMessage": "",
            "code": "MGU9Y4PM",
            "discountCode": "NO_VALUE",
            "seriesCode": 12313,
            "isAbsolute": true,
            "couponValue": 10.0,
            "redemptionStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon processing successful",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon processing successful",
                "code": 700,
                "success": true
            },
            "discountType": "ABS",
            "discountValue": 10,
            "discountUpto": 0
        }
    ],
    "redemptionStatus": {
        "status": true,
        "message": "Coupon processing successful",
        "code": 700
    },
    "customer": {
        "id": 126080386,
        "profiles": [
            {
                "firstName": "test",
                "lastName": "test",
                "fields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "917500000000"
                    },
                    {
                        "type": "email",
                        "value": "[email protected]"
                    }
                ],
                "commChannels": [],
                "userId": 126080386,
                "accountId": "",
                "autoUpdateTime": "2021-05-12T15:18:01Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "917500000000"
                    },
                    {
                        "type": "email",
                        "value": "[email protected]"
                    }
                ]
            }
        ]
    },
    "warnings": []
}
```

```
{
    "redemption": [
        {
            "id": 369455787,
            "currencyInput": false,
            "localToBaseCurrencyExchangeRate": 0,
            "warnings": [],
            "appendedErrorMessage": "",
            "code": "MGU9Y4PM",
            "discountCode": "NO_VALUE",
            "seriesCode": 12313,
            "isAbsolute": true,
            "couponValue": 10.0,
            "redemptionStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon processing successful",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon processing successful",
                "code": 700,
                "success": true
            },
            "discountType": "ABS",
            "discountValue": 10,
            "discountUpto": 0
        }
    ],
    "redemptionStatus": {
        "status": true,
        "message": "Coupon processing successful",
        "code": 700
    },
    "customer": {
        "id": 126080386,
        "profiles": [
            {
                "firstName": "test",
                "lastName": "test",
                "fields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "917500000000"
                    },
                    {
                        "type": "email",
                        "value": "[email protected]"
                    }
                ],
                "commChannels": [],
                "userId": 126080386,
                "accountId": "",
                "autoUpdateTime": "2021-05-12T15:18:01Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "917500000000"
                    },
                    {
                        "type": "email",
                        "value": "[email protected]"
                    }
                ]
            }
        ]
    },
    "warnings": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`