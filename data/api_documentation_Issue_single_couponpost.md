# Issue single couponpost

This API allows you to issue a series of coupons to a customer, enabling them to redeem the coupons.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /v2/coupon/issue |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/v2/coupon/issue

```
https://eucrm.cc.capillarytech.com/v2/coupon/issue
```

# Body parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| seriesId* | Integer | Valid coupon series ID. The issue coupon is linked with create coupon series. |

| customer* | Object | Object containing customer details. |

| customer.id | Integer | The unique identifier for the customer. |

| customer.mobile | String | The mobile number of the customer. |

| customer.externalId | String | An external identifier for the customer. |

| customer.email | String | The email address of the customer. |



```
{
"seriesId":544770,
"customer":

{ 
    "id":555567088, 
    "mobile":"", 
    "externalId":"", 
    "email":"" 
}
}
```

```
{
"seriesId":544770,
"customer":

{ 
    "id":555567088, 
    "mobile":"", 
    "externalId":"", 
    "email":"" 
}
}
```

> 📘NoteAny one among the customer identifiers is mandatory.

## 📘Note

Note

Any one among the customer identifiers is mandatory.

# Response parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| code | String | The unique coupon code generated. This code is used for redeeming the coupon. |

| seriesId | Integer | The unique identifier for the coupon series. |

| description | String | Description of the coupon. |

| discountCode | String | This code is defined during the creation of the coupon series and is used as a POS identifier on member care. This will be used by the cashier at the Point of sale machine. |

| validTill | String | Expiry date and time of the coupon. This is created during the creation of coupon series. |

| discountType | String | Specifies the type of discount provided by the coupon. This is created during the creation of coupon series. |

| discountValue | Integer | The value of the discount. This is created during the creation of coupon series. |

| discountUpto | Integer | The maximum value up to which the discount can be applied. This is created during the creation of coupon series. |

| discountOn | String | The aspect on which the discount is applied. This is created during the creation of coupon series. |

| detailedInfo | String | Additional information about the coupon. This is created during the creation of coupon series. |

| customer | Object | Object containing customer details. |

| customer.id | Integer | The unique identifier of the customer. |

| customer.profiles | Object | Object containing profile details of the customer |

| customer.profiles.firstName | String | The first name of the customer. |

| customer.profiles.lastName | String | The last name of the customer. |

| customer.profiles.fields | Object | Additional fields related to the profile. |

| customer.profiles.allFields | Object | All fields related to the profile. |

| customer.profiles.identifiers | Object | Object containing the details of customer identifiers. |

| customer.profiles.identifiers.type | String | Type of identifier. Supported values: mobile, externalId. |

| customer.profiles.identifiers.value | String | Value of the identifier. |

| customer.profiles.commChannels | Objet | Object containing the details of the mode of communication with the customer. |

| customer.profiles.userId | Integer | The unique identifier of the customer. |

| customer.profiles.accountId | String | Account ID associated with the customer. |

| customer.profiles.autoUpdateTime | String | The time when the event was automatically updated. |

| customer.profiles.identifiersAll | Object | The object containing identifier objects of the profile. |

| customer.profiles.identifiersAll.type | String | Type of identifier. Supported values: mobile, externalId. |

| customer.profiles.identifiersAll.value | String | Value of the identifier. |

| redemptionCount | Integer | Number of times the coupon has been redeemed. |

| id | Integer | ID generated for the issued coupon. |

| warnings | Array of Strings | The array of warning messages related to the coupon. |



```
{
    "code": "ICJE1X12P6",
    "seriesId": 544770,
    "description": "Festival coupon",
    "discountCode": "erg123",
    "validTill": "2026-05-09T00:00:00Z",
    "discountType": "ABS",
    "discountValue": 500.0,
    "discountUpto": 0.0,
    "discountOn": "BILL",
    "detailedInfo": "Evil coupon",
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Abijith",
                "lastName": "Guptha",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ],
                "commChannels": [],
                "userId": 555567088,
                "accountId": "",
                "autoUpdateTime": "2024-06-25T06:51:13Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ]
            }
        ]
    },
    "redemptionCount": 0,
    "id": 0,
    "warnings": []
}
```

```
{
    "code": "ICJE1X12P6",
    "seriesId": 544770,
    "description": "Festival coupon",
    "discountCode": "erg123",
    "validTill": "2026-05-09T00:00:00Z",
    "discountType": "ABS",
    "discountValue": 500.0,
    "discountUpto": 0.0,
    "discountOn": "BILL",
    "detailedInfo": "Evil coupon",
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Abijith",
                "lastName": "Guptha",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ],
                "commChannels": [],
                "userId": 555567088,
                "accountId": "",
                "autoUpdateTime": "2024-06-25T06:51:13Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ]
            }
        ]
    },
    "redemptionCount": 0,
    "id": 0,
    "warnings": []
}
```

`Try It!`