# Upsert customerpost

This API allows you to update a customer or register a customer if the customer entity is not found with the provided identifiers. This is a wrapper API and uses the following APIs:

- v2 GET customer lookup API - v2/customers/lookup/customerDetails

- v2 customer update API - v2/customers/{userId}

- v2 customer ADD API - v2/customers

- v2 change identifier API - v2/{userId}/changeIdentifier

![](https://files.readme.io/bb8d704-Upsert_API.png)

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> 🚧WARNINGMake sure that you enter the correct source details. Wrong source info can lead to data corruption and inappropriate data update or addition.

## 🚧WARNING

WARNING

Make sure that you enter the correct source details. Wrong source info can lead to data corruption and inappropriate data update or addition.

> 📘Caching Impact on Extended Field UpdatesIf a new vertical is enabled for an organization, there is a one-day delay before it gets reflected across registration, transaction, and all related entity-based APIs. As a result, extended fields under the new vertical will not function for up to 24 hours. This applies to meta extended field APIs as well, which provide all extended fields or configurations for an organization. These APIs, including /v2/entity/extendedFieldConfig and /v2/entity/extendedFields, follow the same one-day cache and are used in the UI, Insights+, and other extended field use cases.The delay time to reflect the extended field changes for the V2 register APIs is one hour.

## 📘Caching Impact on Extended Field Updates

Caching Impact on Extended Field Updates

- If a new vertical is enabled for an organization, there is a one-day delay before it gets reflected across registration, transaction, and all related entity-based APIs. As a result, extended fields under the new vertical will not function for up to 24 hours. This applies to meta extended field APIs as well, which provide all extended fields or configurations for an organization. These APIs, including /v2/entity/extendedFieldConfig and /v2/entity/extendedFields, follow the same one-day cache and are used in the UI, Insights+, and other extended field use cases.

- The delay time to reflect the extended field changes for the V2 register APIs is one hour.

# Usecase

This API enables the update of customer details, including identifiers, in a single request. For instance, if you need to update a customer's address and mobile number, you can use this API to perform both tasks instead of making multiple requests.

# Prerequisites

- Basic or OAuth credentials

- Write access to customeraccess group

# Resource information

| Feature | Availability |

| --- | --- |

| Pagination | No |

| Rate limit | Refer torate limit documentation |

| Batch support | Yes |

| Configuration | NA |

| Postman collection | https://solar-zodiac-182189.postman.co/workspace/Team-Workspace~64cc564c-df26-441b-800c-24ff3d435826/collection/32699002-81d68737-ff49-45ce-853f-8cb7cbb614c2?action=share&creator=32699002 |



[rate limit documentation](/reference/rate-limits)

[https://solar-zodiac-182189.postman.co/workspace/Team-Workspace~64cc564c-df26-441b-800c-24ff3d435826/collection/32699002-81d68737-ff49-45ce-853f-8cb7cbb614c2?action=share&creator=32699002](https://solar-zodiac-182189.postman.co/workspace/Team-Workspace~64cc564c-df26-441b-800c-24ff3d435826/collection/32699002-81d68737-ff49-45ce-853f-8cb7cbb614c2?action=share&creator=32699002)

# API endpoint example

[https://eu.api.capillarytech.com/v2/integrations/customer/upsert/bulk?skipChangeIdentifier=false](<>)

```
[https://eu.api.capillarytech.com/v2/integrations/customer/upsert/bulk?skipChangeIdentifier=false](<>)
```

# Query parameter

| Parameter | Type | Description |

| --- | --- | --- |

| skipChangeIdentifier | boolean | Enter False to make changes to the identifiers |



# Request body parameters

| Parameter | Type | Description |

| --- | --- | --- |

| profiles | Array | Array of user profiles |

| - firstName | String | First name of the user |

| - lastName | String | Last name of the user |

| -identifiers* | Array | Array of user identifiers |

| -- type | String | Type of identifier (e.g., "externalId") |

| -- value | String | Value of the identifier.Note:For mobile numbers, add the mobile number with the country code. |

| - commChannels | Array | Array of communication channels |

| -- type | String | Type of communication channel (e.g., "mobile") |

| -- value | String | Value of the communication channel |

| -- primary | Boolean | Indicates if the channel is primary |

| -- verified | Boolean | Indicates if the channel is verified |

| -- meta | Object | Metadata related to the communication channel |

| --- lastViewedDate | String | Last viewed date of the channel |

| --- residence | Boolean | Indicates if the channel is for residence |

| --- office | Boolean | Indicates if the channel is for office |

| -source* | String | Source of the user data (e.g., "WEB_ENGAGE") |

| -accountId* | String | User's account ID |

| - extendedFields | Object | Additional fields with extended information |

| -- gender | String | Gender of the user |



You can also update subscription info. See the below example for more details.

```
[{
"profiles":
[
{
"firstName": "Vishal",
"lastName": "K",
"identifiers":
[
{
"type": "externalId",
"value": "VISHKWJEJWJC2381"
},
  {
          "type": "mobile",
          "value": "916360499160"
        }
],
"commChannels": [
            {
          "type": "mobile",
          "value": "916360499160",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "",
            "residence": true,
            "office": false
          }
        }
 ],
"source": "WEB_ENGAGE",
"accountId":"311c4dd1"
}
],"extendedFields": {
"gender":"Male"
}
}]
```

```
[{
"profiles":
[
{
"firstName": "Vishal",
"lastName": "K",
"identifiers":
[
{
"type": "externalId",
"value": "VISHKWJEJWJC2381"
},
  {
          "type": "mobile",
          "value": "916360499160"
        }
],
"commChannels": [
            {
          "type": "mobile",
          "value": "916360499160",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "",
            "residence": true,
            "office": false
          }
        }
 ],
"source": "WEB_ENGAGE",
"accountId":"311c4dd1"
}
],"extendedFields": {
"gender":"Male"
}
}]
```

```
[
    {
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "profiles": [
            {
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "6289999999"
                    }
                ]
            }
        ],
        "statusLabel": "Active",
        "subscriptionInfo": {
            "subscriptions": [
                {
                    "channel": "ios",
                    "accountId": "~1341059D8",
                    "priority": "BULK",
                    "type": "OPTIN",
                    "sourceName": "WEB_ENGAGE"
                }
            ]
        }
    }
]
```

```
[
    {
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "profiles": [
            {
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "6289999999"
                    }
                ]
            }
        ],
        "statusLabel": "Active",
        "subscriptionInfo": {
            "subscriptions": [
                {
                    "channel": "ios",
                    "accountId": "~1341059D8",
                    "priority": "BULK",
                    "type": "OPTIN",
                    "sourceName": "WEB_ENGAGE"
                }
            ]
        }
    }
]
```

> 📘NoteIn addition to the parameters mentioned above, you can update any parameter that is supported by v2 customer update and v2 change customer identifier API. For more information refer to:https://docs.capillarytech.com/reference/update-identifiersissue-cardhttps://docs.capillarytech.com/reference/update-customer-details

## 📘Note

Note

In addition to the parameters mentioned above, you can update any parameter that is supported by v2 customer update and v2 change customer identifier API. For more information refer to:

- https://docs.capillarytech.com/reference/update-identifiersissue-card

- https://docs.capillarytech.com/reference/update-customer-details

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| response | Array | Array of responses |

| - result | Object | Result information |

| -- profiles | Array | Array of user profiles |

| --- attribution | Object | Attribution information |

| ---- createdBy | Object | Created by information |

| ------ modifiedBy | Object | Modified by information |

| --- identifiers | Array | Array of user identifiers |

| ---- statusLabelInfo | Object | Status label information |

| ----- orgId | Number | Organization ID of the status |

| ---- meta | Object | Metadata related to the communication channel |

| ---- attributes | Object | Additional attributes |

| -- loyaltyInfo | Object | Loyalty information |

| ---- attributionV2 | Object | Attribution information for loyalty |

| ----- createdBy | Object | Created by information |

| ------ modifiedBy | Object | Modified by information |

| --- cardDetails | Array | Array of card details |

| ---- customFields | Object | Custom fields of the card |

| ---- statusInfo | Object | Status information of the card |

| ----- actions | Array | Actions related to the status |

| ---- labelInfo | Object | Label information for the status |

| ----- actions | Array | Actions related to the label |

| ----- autoUpdateTime | String | Auto-update time for the label |

| ----- createdOn | String | Created on date for the label |

| ---- conflictingProfileList | Array | List of conflicting profiles |

| ---- activeAndDigital | Boolean | Indicates if the card is active and digital |

| - errors | Array | Array of errors |

| -- status | Boolean | Status of the error |

| -- code | Number | Error code |

| -- message | String | Error message |

| - warnings | Array | Array of warnings |



```
{
    "response": [
        {
            "entityId": 176671442,
            "result": {
                "id": 176671442,
                "profiles": [
                    {
                        "firstName": "Vishal",
                        "lastName": "K",
                        "attribution": {
                            "createDate": "2022-12-19T09:12:11Z",
                            "createdBy": {
                                "id": 75036445,
                                "code": "bukl.ind.solution",
                                "description": "",
                                "name": "Mobile App",
                                "type": "TILL"
                            },
                            "modifiedBy": {
                                "id": 75036445,
                                "code": "bukl.ind.solution",
                                "description": "",
                                "name": "Mobile App",
                                "type": "TILL"
                            },
                            "modifiedDate": "2023-11-15T06:39:05Z"
                        },
                        "fields": {},
                        "allFields": {},
                        "identifiers": [
                            {
                                "type": "externalId",
                                "value": "VISHKWJEJWJC2381"
                            },
                            {
                                "type": "cardnumber",
                                "value": "BUKL0000022598PR",
                                "statusLabelInfo": {
                                    "orgId": 100458,
                                    "type": "CARD",
                                    "internalStatus": "NOT_ISSUED",
                                    "default": false
                                },
                                "cardId": 615182
                            }
                        ],
                        "commChannels": [
                            {
                                "type": "mobile",
                                "value": "916360499160",
                                "primary": true,
                                "verified": true,
                                "meta": {
                                    "residence": true,
                                    "office": false
                                },
                                "attributes": {}
                            }
                        ],
                        "source": "WEB_ENGAGE",
                        "userId": 176671442,
                        "accountId": "311c4dd1",
                        "conflictingProfileList": [],
                        "autoUpdateTime": "2023-11-15T06:39:05Z",
                        "identifiersAll": [
                            {
                                "type": "externalId",
                                "value": "VISHKWJEJWJC2381"
                            },
                            {
                                "type": "cardnumber",
                                "value": "BUKL0000022598PR",
                                "statusLabelInfo": {
                                    "orgId": 100458,
                                    "type": "CARD",
                                    "internalStatus": "NOT_ISSUED",
                                    "default": false
                                },
                                "cardId": 615182
                            }
                        ]
                    }
                ],
                "loyaltyInfo": {
                    "loyaltyType": "loyalty",
                    "attributionV2": {
                        "createDate": "2022-12-19T09:12:12Z",
                        "createdBy": {
                            "id": 75036445,
                            "code": "bukl.ind.solution",
                            "name": "Mobile App",
                            "type": "TILL"
                        },
                        "modifiedBy": {
                            "id": 75036445,
                            "code": "bukl.ind.solution",
                            "name": "Mobile App",
                            "type": "TILL"
                        },
                        "modifiedDate": "2023-11-15T06:39:05Z",
                        "createdFromSource": "WEB_ENGAGE"
                    },
                    "lifetimePurchases": 0.000
                },
                "segments": {},
                "associatedWith": "bukl.ind.solution",
                "extendedFields": {
                    "gender": "Male"
                },
                "cardDetails": [
                    {
                        "cardId": 615182,
                        "issuedDate": "2022-12-19T09:12:12Z",
                        "createdDate": "2022-12-19",
                        "expiryDays": 365,
                        "seriesName": "BUKL Premier",
                        "customerId": 176671442,
                        "maxActiveCards": 1,
                        "customFields": {},
                        "type": "DIGITAL",
                        "cardNumber": "BUKL0000022598PR",
                        "seriesId": 46,
                        "seriesCode": "BUKLPRM",
                        "orgId": 100458,
                        "entityId": 75036445,
                        "statusInfo": {
                            "reason": "",
                            "createdBy": 75036445,
                            "actions": [],
                            "autoUpdateTime": "2022-12-19",
                            "createdOn": "2022-12-19T09:12:12Z",
                            "entityId": 615182,
                            "id": 733103,
                            "isActive": true,
                            "labelId": 24,
                            "label": "NEW CARD",
                            "status": "ACTIVE"
                        },
                        "id": 615182,
                        "activeAndDigital": true,
                        "transactionNotAllowed": true,
                        "expiryDate": "2023-12-19T00:00:00Z"
                    }
                ]
            },
            "errors": [
                {
                    "status": false,
                    "code": 3017,
                    "message": "status label invalid"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "entityId": 176671442,
            "result": {
                "id": 176671442,
                "profiles": [
                    {
                        "firstName": "Vishal",
                        "lastName": "K",
                        "attribution": {
                            "createDate": "2022-12-19T09:12:11Z",
                            "createdBy": {
                                "id": 75036445,
                                "code": "bukl.ind.solution",
                                "description": "",
                                "name": "Mobile App",
                                "type": "TILL"
                            },
                            "modifiedBy": {
                                "id": 75036445,
                                "code": "bukl.ind.solution",
                                "description": "",
                                "name": "Mobile App",
                                "type": "TILL"
                            },
                            "modifiedDate": "2023-11-15T06:39:05Z"
                        },
                        "fields": {},
                        "allFields": {},
                        "identifiers": [
                            {
                                "type": "externalId",
                                "value": "VISHKWJEJWJC2381"
                            },
                            {
                                "type": "cardnumber",
                                "value": "BUKL0000022598PR",
                                "statusLabelInfo": {
                                    "orgId": 100458,
                                    "type": "CARD",
                                    "internalStatus": "NOT_ISSUED",
                                    "default": false
                                },
                                "cardId": 615182
                            }
                        ],
                        "commChannels": [
                            {
                                "type": "mobile",
                                "value": "916360499160",
                                "primary": true,
                                "verified": true,
                                "meta": {
                                    "residence": true,
                                    "office": false
                                },
                                "attributes": {}
                            }
                        ],
                        "source": "WEB_ENGAGE",
                        "userId": 176671442,
                        "accountId": "311c4dd1",
                        "conflictingProfileList": [],
                        "autoUpdateTime": "2023-11-15T06:39:05Z",
                        "identifiersAll": [
                            {
                                "type": "externalId",
                                "value": "VISHKWJEJWJC2381"
                            },
                            {
                                "type": "cardnumber",
                                "value": "BUKL0000022598PR",
                                "statusLabelInfo": {
                                    "orgId": 100458,
                                    "type": "CARD",
                                    "internalStatus": "NOT_ISSUED",
                                    "default": false
                                },
                                "cardId": 615182
                            }
                        ]
                    }
                ],
                "loyaltyInfo": {
                    "loyaltyType": "loyalty",
                    "attributionV2": {
                        "createDate": "2022-12-19T09:12:12Z",
                        "createdBy": {
                            "id": 75036445,
                            "code": "bukl.ind.solution",
                            "name": "Mobile App",
                            "type": "TILL"
                        },
                        "modifiedBy": {
                            "id": 75036445,
                            "code": "bukl.ind.solution",
                            "name": "Mobile App",
                            "type": "TILL"
                        },
                        "modifiedDate": "2023-11-15T06:39:05Z",
                        "createdFromSource": "WEB_ENGAGE"
                    },
                    "lifetimePurchases": 0.000
                },
                "segments": {},
                "associatedWith": "bukl.ind.solution",
                "extendedFields": {
                    "gender": "Male"
                },
                "cardDetails": [
                    {
                        "cardId": 615182,
                        "issuedDate": "2022-12-19T09:12:12Z",
                        "createdDate": "2022-12-19",
                        "expiryDays": 365,
                        "seriesName": "BUKL Premier",
                        "customerId": 176671442,
                        "maxActiveCards": 1,
                        "customFields": {},
                        "type": "DIGITAL",
                        "cardNumber": "BUKL0000022598PR",
                        "seriesId": 46,
                        "seriesCode": "BUKLPRM",
                        "orgId": 100458,
                        "entityId": 75036445,
                        "statusInfo": {
                            "reason": "",
                            "createdBy": 75036445,
                            "actions": [],
                            "autoUpdateTime": "2022-12-19",
                            "createdOn": "2022-12-19T09:12:12Z",
                            "entityId": 615182,
                            "id": 733103,
                            "isActive": true,
                            "labelId": 24,
                            "label": "NEW CARD",
                            "status": "ACTIVE"
                        },
                        "id": 615182,
                        "activeAndDigital": true,
                        "transactionNotAllowed": true,
                        "expiryDate": "2023-12-19T00:00:00Z"
                    }
                ]
            },
            "errors": [
                {
                    "status": false,
                    "code": 3017,
                    "message": "status label invalid"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

# Errors

| Error | Description |

| --- | --- |

| Conflicting profile error | Make sure that the source and identifier information is correct. |

|  |  |



`Try It!`