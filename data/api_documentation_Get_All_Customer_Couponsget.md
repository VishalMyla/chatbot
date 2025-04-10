# Get All Customer Couponsget

This API retrieves the coupon history details of a customer with basic details. For each customer, information includes coupon codes, validity, discount type and amount, redemption history, and issuing details, as well as pagination to manage large data sets efficiently. This API is ideal for accessing an overview of all coupons across customers. If you want  to retrieve more information about coupons, use thisAPI.

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

| URL | /customers/coupons |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/v2/customers/coupons?mobile=917003222195&coupon_code_case=LOWER&limit=20&offset=5

```
https://eu.api.capillarytech.com/v2/customers/coupons?mobile=917003222195&coupon_code_case=LOWER&limit=20&offset=5
```

# Request Query Parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| mobile | Integer | Mobile of the customer. |

| email | Integer | Email of the customer. |

| externalId | Integer | External ID of the customer. |

| id | Long | Unique ID of the customer. |

| status | Enum | Get coupons of selected status(es).Supported values: REDEEMED, UNREDEEMED, ACTIVE, EXPIRED, ACTIVE_REDEEMED,  ACTIVE_UNREDEEMED, EXPIRED_REDEEMED, EXPIRED_UNREDEEMED,  REDEEMABLEIn the enum values, Active_Redeemed is for coupon is active but redeemed), Active_Unredeemed for coupons that are active and not redeemed, Expired_Redeemed for coupons that are expired but redeemed,and Expired_Unredeemed for coupons that are expired and not redeemed. |

| coupon_code_case | Enum | This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values:LOWER: Converts the coupon code to lower case.UPPER: Converts the coupon codes to upper case.AS_IT_IS: It ensure that the coupon code is retrieved exactly as it was created or provided, without altering the letter case. For instance, if the code is "abAB123," it should be retrieved and displayed as "abAB123," maintaining its original formatting. |

| sort_order | Enum | Sort the results in Ascending (ASC) or Descending (DESC) order. By default it is Descending. |

| limit | Integer | Limit the number of results to be retrieved. For example: limit=10 to retrieve the history of ten recent coupons of the customer. |

| offset | Integer | Defines the number of rows that needs to be skipped from the beginning of the results. For example, number 10 skips the first 10 search results. |



# Response parameters

| Parameter | Description |

| --- | --- |

| limit | Maximum number of records returned. |

| offset | Starting point of the records. |

| total | Total number of records. |

| customers | List of customer objects. |

| firstname | First name of the customer. |

| lastname | Last name of the customer. |

| email | Email address of the customer. |

| mobile | Mobile number of the customer. |

| id | Internal ID of the customer. |

| externalId | External ID of the customer. |

| coupons | List of coupon objects assigned to the customer. |

| code | Code of the coupon. |

| seriesId | Series ID to which the coupon belongs. |

| description | Description of the coupon. |

| validTill | Coupon expiry date in ISO format. |

| discountType | Type of discount (e.g., ABS for absolute value). |

| discountValue | Discount value of the coupon. |

| discountUpto | Maximum discount limit (0 if not applicable). |

| redemptionCount | Number of times the coupon has been redeemed. |

| redemptionsLeft | Number of remaining redemptions. |

| couponId | Internal ID of the coupon. |

| createdDate | Creation date of the coupon in ISO format. |

| transactionNumber | Associated transaction number (if any). |

| issued.code | Code of the store where the coupon was issued. |

| issued.name | Name of the store where the coupon was issued. |

| customProperty | List of custom properties of the coupon. |

| name | Name of the custom property. |

| value | Value of the custom property. |

| redemptions | List of redemptions associated with the coupon. |

| reversedRedemptions | List of reversed redemptions. |

| warnings | List of warnings. |

| errors | List of errors. |

| success | Indicates whether the operation was successful (trueorfalse). |



`true`

`false`

```
{
   "entity":{
      "pagination":{
         "limit":"100",
         "offset":"0",
         "total":4
      },
      "customers":[
         {
            "firstname":"Tom",
            "lastname":"Sawyer",
            "mobile":"918860000001",
            "id":401031250,
            "coupons":[
               {
                  "code":"KNRYHMRW",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000028,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     {
                       "date": "2022-03-10T14:48:09+05:30",
                       "transactionNumber": "1646903888000",
                       "redeemedAt": {
                       "code": "luciauto_store2",
                       "name": "Auto Store2"
                      }
                  ]
               },
               {
                  "code":"7TF6TBQB",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000029,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               },
               {
                  "code":"6JAFX7ZF",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000026,
                  "createdDate":"2021-09-25T16:25:25+05:30",
                  "transactionNumber":"2147877651",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               },
               {
                  "code":"KZWMCYTR",
                  "seriesId":14162,
                  "description":"Mobile Push offer 1",
                  "validTill":"2022-03-20T00:00:00+05:30",
                  "discountType":"PERC",
                  "discountValue":10.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":397755229,
                  "createdDate":"2021-09-01T17:53:43+05:30",
                  "transactionNumber":"2147861881",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               }
            ]
         }
      ]
   },
   "warnings":[

   ],
   "errors":[

   ],
   "success":true
}
```

```
{
   "entity":{
      "pagination":{
         "limit":"100",
         "offset":"0",
         "total":4
      },
      "customers":[
         {
            "firstname":"Tom",
            "lastname":"Sawyer",
            "mobile":"918860000001",
            "id":401031250,
            "coupons":[
               {
                  "code":"KNRYHMRW",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000028,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[
                     {
                       "date": "2022-03-10T14:48:09+05:30",
                       "transactionNumber": "1646903888000",
                       "redeemedAt": {
                       "code": "luciauto_store2",
                       "name": "Auto Store2"
                      }
                  ]
               },
               {
                  "code":"7TF6TBQB",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000029,
                  "createdDate":"2021-09-25T16:28:11+05:30",
                  "transactionNumber":"2147877652",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               },
               {
                  "code":"6JAFX7ZF",
                  "seriesId":363653,
                  "description":"NewCouponForAll",
                  "validTill":"2029-09-01T00:00:00+05:30",
                  "discountType":"ABS",
                  "discountValue":1000.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":399000026,
                  "createdDate":"2021-09-25T16:25:25+05:30",
                  "transactionNumber":"2147877651",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               },
               {
                  "code":"KZWMCYTR",
                  "seriesId":14162,
                  "description":"Mobile Push offer 1",
                  "validTill":"2022-03-20T00:00:00+05:30",
                  "discountType":"PERC",
                  "discountValue":10.0,
                  "discountUpto":0.0,
                  "redemptionCount":0,
                  "redemptionsLeft":1,
                  "id":397755229,
                  "createdDate":"2021-09-01T17:53:43+05:30",
                  "transactionNumber":"2147861881",
                  "issuedAt":{
                     "code":"storecode",
                     "name":"webstore1"
                  },
                  "redemptions":[

                  ]
               }
            ]
         }
      ]
   },
   "warnings":[

   ],
   "errors":[

   ],
   "success":true
}
```

```
{
    "entity": {
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 7
        },
        "customers": [
            {
                "firstname": "autofn_917003222195",
                "lastname": "autoln_917003222195",
                "email": "[email protected]",
                "mobile": "917003222195",
                "id": 345635529,
                "externalId": "ext_id917003222195",
                "coupons": [
                    {
                        "code": "tt6wzp7xnw",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004111,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "ziwy7lzgw8",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004112,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "hu1dh75hny",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004113,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "vmqvzcvymt",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502461,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "x6wqg8kb01",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502462,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "oo8hf7divr",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502463,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "w2jjud9yrguaprdur52o",
                        "seriesId": 68377,
                        "description": "test-lekhana",
                        "validTill": "2024-10-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36501088,
                        "createdDate": "2024-10-08T18:29:14Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "customProperty": [
                            {
                                "name": "standard_image_1",
                                "value": ""
                            },
                            {
                                "name": "standard_image_2",
                                "value": ""
                            },
                            {
                                "name": "standard_description",
                                "value": "DescriptionCustom"
                            },
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": "Terms and conditionscustom"
                            },
                            {
                                "name": "test-xyz",
                                "value": "test-xyz custom"
                            }
                        ],
                        "redemptions": [],
                        "reversedRedemptions": []
                    }
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
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 7
        },
        "customers": [
            {
                "firstname": "autofn_917003222195",
                "lastname": "autoln_917003222195",
                "email": "[email protected]",
                "mobile": "917003222195",
                "id": 345635529,
                "externalId": "ext_id917003222195",
                "coupons": [
                    {
                        "code": "tt6wzp7xnw",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004111,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "ziwy7lzgw8",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004112,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "hu1dh75hny",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004113,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "vmqvzcvymt",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502461,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "x6wqg8kb01",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502462,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "oo8hf7divr",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502463,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "w2jjud9yrguaprdur52o",
                        "seriesId": 68377,
                        "description": "test-lekhana",
                        "validTill": "2024-10-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36501088,
                        "createdDate": "2024-10-08T18:29:14Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "customProperty": [
                            {
                                "name": "standard_image_1",
                                "value": ""
                            },
                            {
                                "name": "standard_image_2",
                                "value": ""
                            },
                            {
                                "name": "standard_description",
                                "value": "DescriptionCustom"
                            },
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": "Terms and conditionscustom"
                            },
                            {
                                "name": "test-xyz",
                                "value": "test-xyz custom"
                            }
                        ],
                        "redemptions": [],
                        "reversedRedemptions": []
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`