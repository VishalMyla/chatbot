# Add Customerpost

The API functions as follows -

- If you try registering an identifier that exists in a different source, a new source account is added to the existing account. Details of each source account will be maintained separately.

If you try registering an identifier that exists in a different source, a new source account is added to the existing account. Details of each source account will be maintained separately.

- In a source account, identifiers should be unique - no two customers can have the same identifier.

In a source account, identifiers should be unique - no two customers can have the same identifier.

- You cannot update existing customer details with this API. To update customer details, use the customer update API; to update identifiers, use the Update Identifier API.

You cannot update existing customer details with this API. To update customer details, use the customer update API; to update identifiers, use the Update Identifier API.

Note

- Hovering over the profile picture on the Member Care home page shows the customer's account ID.

Hovering over the profile picture on the Member Care home page shows the customer's account ID.

- The last part of the URL containing numbers represents the customer ID, or ID. The system generates this internal ID when it registers the customer. For example, the URL https://{host}/member-care/ui/customer/177217505, 177217505 is the ID or the customer ID.

The last part of the URL containing numbers represents the customer ID, or ID. The system generates this internal ID when it registers the customer. For example, the URL https://{host}/member-care/ui/customer/177217505, 177217505 is the ID or the customer ID.

- The mandatory attributes for customer registration are determined by the configurations set inOrganization Settings>Miscellaneous>Registration Configuration. Be sure to check your organization's configurations before using this API. For more details, refer toSetup Customer.

The mandatory attributes for customer registration are determined by the configurations set inOrganization Settings>Miscellaneous>Registration Configuration. Be sure to check your organization's configurations before using this API. For more details, refer toSetup Customer.

- Extended fieldsare mapped to vertical IDs, which are then mapped to organization IDs.

Extended fieldsare mapped to vertical IDs, which are then mapped to organization IDs.

### Rate Limit

| Region | Default Limit (RPM) |

| --- | --- |

| Asia-2 (Singapore) | 100 |

| Asia-1 (N. Virginia) | 600 |

| EMEA (Ireland) | 100 |



# API endpoint example

`<https://eucrm.cc.capillarytech.com/v2/customers

# Prerequisites

- Authentication: Basic or OAuth authentication details

- Access group resource: Write access to customer group resource

- Different sources (FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE) as supported by your organisation

- Account IDs in which you want to register customers (for sources with multiple accounts such as WeChat, Line and Facebook)

- Set default customer statuslabel for your organisation

> 📘Extended Fields are proposed fields used to standardize input values and keys across organisations (unlike custom fields that have no control in input values). Platforms back-end team controls the field names, data-types, enum values, and scopes of extended fields. Extended Fields are created at customer level, transaction level, and transaction line-item level. Examples of customer level extended fields are age_group, preferred_store, gender, and nationality. Extended fields are either associated with verticals or a generic category (available for all orgs). To know the list of extended fields enabled for an org, use GET v2/extendedFields API.

## 📘

Extended Fields are proposed fields used to standardize input values and keys across organisations (unlike custom fields that have no control in input values). Platforms back-end team controls the field names, data-types, enum values, and scopes of extended fields. Extended Fields are created at customer level, transaction level, and transaction line-item level. Examples of customer level extended fields are age_group, preferred_store, gender, and nationality. Extended fields are either associated with verticals or a generic category (available for all orgs). To know the list of extended fields enabled for an org, use GET v2/extendedFields API.

# Header information

| Header | Description |

| --- | --- |

| USER-CONTEXT-ENTITY-TYPE | If required, add entity information of the user who is adding or updating this info. |

| USER-CONTEXT-ENTITY-ID | If required, add entity ID information of the user who is adding or updating this info. |

| USER-CONTEXT-ENTITY-SOURCE | If required, add source information of the user who is adding or updating this info. |

| USER-CONTEXT-ENTITY-SOURCE-ID | If required, add source ID information of the user who is adding or updating this info. |



For more information, refer to the user context section in theAudit Details documentation.

# Resource information

|  |  |

| --- | --- |

| URI | customers |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Request Body Parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| associatedWith | String | Till code associated with the customer. |

| profiles | Object | Object that contains details about the customer information, identifiers, and communication channels. |

| - firstName | String | First name of the customer.Note:The character limit for first names is 100. Characters exceeding this limit is ignored by the system. |

| - lastName | String | Last name of the customer.Note:The character limit for last names is 100. Characters exceeding this limit is ignored by the system. |

| - identifiers* | Object | Object containing the identifier type and its value. Values:mobile,email,externalId. |

| -- type* | String | Mode of communication with the customer. Values:mobile, email.NoteMobile: Only numeric values are supported0-9.Email: Supported characters:a-zA-Z0-9-_+.and@External ID: No character restrictions, but special characters are not recommended.First Name: Alphanumeric, spaces, hyphens, and apostrophes supported.Last Name: Alphanumeric, spaces, hyphens, and apostrophes supported. |

| -- value* | String | Value of the identifier.Note:Enter the mobile number with the country code for mobile. The character limit for an email can go up to 255 characters. Characters exceeding this limit is ignored by the system. |

| -- seriesId | Number | Series to which the loyalty card belongs. |

| -- statusLabel | String | The status of the loyalty card. Example:  ACTIVE, INACTIVE, EXPIRED |

| - commChannels | Object | Object containing the details of the mode of communication with the customer. |

| -- type | String | Mode of communication with customer. The values:mobile,email, cardnumber. |

| -- value | String | Value of the type of communication. |

| -- primary | String | Indicates if the communication type is the primary contact. |

| -- verified | String | Indicates if this communication type is verified. |

| -- meta | Object | Contains meta information of the customer. |

| --- residence | String | Indicates if the communication channel is for residence. |

| - fields | Object | Custom fieldsrelated to the customer and supported by your org. |

| -- employee | String | Indicates whether the customer is an employee. |

| -- dateofbirth | String | Date of birth of the customer. |

| - source* | String | Source from where the customer was created. Values:FACEBOOK,WEB_ENGAGE,WECHAT,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,MOBILE_APP. |

| - accountId | String | Unique account ID of the customer. |

| extendedFields | Object | Object containing theextended fieldinformation. |

| -- gender | String | Gender of the customer. |

| -- city | String | City where the customer resides. |

| -- state | String | State where the customer resides. |

| -- area | String | Area where the customer resides. |

| -- zip | String | ZIP code of the customer's location. |

| loyaltyProgramEnrollments | Object | Object containing the details of the loyalty program into which the customer is enrolled. |

| -- programId | Number | Unique ID for the program into which the customer is enrolled. |

| -- tierNumber | Number | Tier in the loyalty program to which the customer belongs. For example,1for the lowest tier,2for the subsequent tier, and so on. |

| -- loyaltyPoints | Number | Loyalty points to be added to the customer's account. |

| -- tierExpiryDate | String | Expiry date of the customer's tier in the loyalty program. Supported format:YYYY-MM-DDTHH:MM:SS+/-(time-zone). |

| -- pointsExpiryDate | String | Expiry date of the customer's loyalty points. Supported format:YYYY-MM-DDTHH:MM:SS+/-(time-zone). |

| referralCode | String | Unique code generated for the referrer for a specific campaign. |

| statusLabel | String | Specifies a custom name for the customer status.A customer status defines the relationship between a brand and a customer, with options such asActive,Suspended,Deleted,Fraud suspected,Fraud confirmed,Internal, andPending deletion. You can assign a custom name to any customer status. For more details,Custom label and customer status. |



`mobile`

`email`

`externalId`

`mobile, email`

`0-9`

`a-z`

`A-Z`

`0-9`

`-`

`_`

`+`

`.`

`@`

`mobile`

`email, cardnumber`

[Custom fields](/docs/data-fields#custom-fields)

`FACEBOOK`

`WEB_ENGAGE`

`WECHAT`

`INSTORE`

`MARTJACK`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`MOBILE_APP`

[extended field](/docs/data-entities#extended-fields-1)

`1`

`2`

`YYYY-MM-DDTHH:MM:SS+/-(time-zone)`

`:YYYY-MM-DDTHH:MM:SS+/-(time-zone)`

`Active`

`Suspended`

`Deleted`

`Fraud suspected`

`Fraud confirmed`

`Internal`

`Pending deletion`

[Custom label and customer status](/docs/setup_customer#managing-customer-lifecycle-with-customer-status)

```
{
    "profiles": [
        {
            "firstName": "Customer_add_1",
            "lastName": "Test123",
            "identifiers": [
                {
                    "type": "mobile",
                    "value": "8795779625"
                },
                {
                    "type": "email",
                    "value": "[email protected]"
                }
            ],
            "commChannels": [
                {
                    "type": "mobile",
                    "value": "8795779625",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                },
                {
                    "type": "email",
                    "value": "[email protected]",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {},
            "source": "INSTORE"
        }
    ],
    "extendedFields": {},
    "loyaltyProgramEnrollments": [
        {
            "programId": 469,
            "tierNumber": 1,
            "loyaltyPoints": 0,
            "tierExpiryDate": "2024-05-11T16:36:17+05:30",
            "pointsExpiryDate": "2024-05-11T16:36:17+05:30"
        }
    ],
    "referralCode": ""
}
```

```
{
    "profiles": [
        {
            "firstName": "Customer_add_1",
            "lastName": "Test123",
            "identifiers": [
                {
                    "type": "mobile",
                    "value": "8795779625"
                },
                {
                    "type": "email",
                    "value": "[email protected]"
                }
            ],
            "commChannels": [
                {
                    "type": "mobile",
                    "value": "8795779625",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                },
                {
                    "type": "email",
                    "value": "[email protected]",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {},
            "source": "INSTORE"
        }
    ],
    "extendedFields": {},
    "loyaltyProgramEnrollments": [
        {
            "programId": 469,
            "tierNumber": 1,
            "loyaltyPoints": 0,
            "tierExpiryDate": "2024-05-11T16:36:17+05:30",
            "pointsExpiryDate": "2024-05-11T16:36:17+05:30"
        }
    ],
    "referralCode": ""
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
{
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "associatedWith": "bukl.till",
  "profiles": [
    {
      "firstName": "Mark12",
      "lastName": "Twain",
      "identifiers": [
        {
          "type": "mobile",
          "value": "919804542631"
        },
        {
          "type": "cuid",
          "value": "cuid_919804542631"
        },
        {
          "type": "unionId",
          "value": "unionId_919804542631"
        }
      ],
      "commChannels": [
        {
          "type": "mobilePush",
          "meta": {
            "lastViewedDate": "2019-10-10T22:04:38+05:30",
            "residence": false,
            "office": false
          },
          "verified": "true",
          "primary": "true",
          "value": "abc123456"
        },
        {
          "type": "mobile",
          "value": "919804542631",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "",
            "residence": true,
            "office": false
          }
        }
      ],
      "source": "MOBILE_APP",
      "accountId":"testmobilepush1",
      "fields": {
        "employee": "true",
        "dateofbirth": "22-10-2000"
      }
    }
  ],
  "extendedFields": {
    "gender": "Male",
    "city": "Bangalore"
  },
  "loyaltyProgramEnrollments": [
    {
      "programId": 469,
      "tierNumber": 1,
      "loyaltyPoints": 75,
      "tierExpiryDate": "2025-02-11T16:36:17+05:30",
      "pointsExpiryDate": "2025-02-11T16:36:17+05:30"
    }
  ]
}
```

```
{
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "associatedWith": "bukl.till",
  "profiles": [
    {
      "firstName": "Mark12",
      "lastName": "Twain",
      "identifiers": [
        {
          "type": "mobile",
          "value": "919804542631"
        },
        {
          "type": "cuid",
          "value": "cuid_919804542631"
        },
        {
          "type": "unionId",
          "value": "unionId_919804542631"
        }
      ],
      "commChannels": [
        {
          "type": "mobilePush",
          "meta": {
            "lastViewedDate": "2019-10-10T22:04:38+05:30",
            "residence": false,
            "office": false
          },
          "verified": "true",
          "primary": "true",
          "value": "abc123456"
        },
        {
          "type": "mobile",
          "value": "919804542631",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "",
            "residence": true,
            "office": false
          }
        }
      ],
      "source": "MOBILE_APP",
      "accountId":"testmobilepush1",
      "fields": {
        "employee": "true",
        "dateofbirth": "22-10-2000"
      }
    }
  ],
  "extendedFields": {
    "gender": "Male",
    "city": "Bangalore"
  },
  "loyaltyProgramEnrollments": [
    {
      "programId": 469,
      "tierNumber": 1,
      "loyaltyPoints": 75,
      "tierExpiryDate": "2025-02-11T16:36:17+05:30",
      "pointsExpiryDate": "2025-02-11T16:36:17+05:30"
    }
  ]
}
```

```
{
    "profiles": [
        {
            "firstName": "Mark",
            "lastName": "Twain",
            "identifiers": [
                {
                    "type": "email",
                    "value": "[email protected]"
                },
                {
                    "type": "line",
                    "value": "Ud7b7ec422d4914011f9c14b51ff48519"
                }
            ],
            "commChannels": [
                {
                    "type": "line",
                    "value": "Ud7b7ec422dd34914011f9c14b51ff48519",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {
                "gender": "",
                "city": ""
            },
            "source": "LINE",
            "accountId": "2001914141242"
        }
    ],
    "extendedFields": {},
    "referralCode": ""
}
```

```
{
    "profiles": [
        {
            "firstName": "Mark",
            "lastName": "Twain",
            "identifiers": [
                {
                    "type": "email",
                    "value": "[email protected]"
                },
                {
                    "type": "line",
                    "value": "Ud7b7ec422d4914011f9c14b51ff48519"
                }
            ],
            "commChannels": [
                {
                    "type": "line",
                    "value": "Ud7b7ec422dd34914011f9c14b51ff48519",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {
                "gender": "",
                "city": ""
            },
            "source": "LINE",
            "accountId": "2001914141242"
        }
    ],
    "extendedFields": {},
    "referralCode": ""
}
```

[[email protected]](/cdn-cgi/l/email-protection)

```
{
    "profiles": [
        {
            "firstName": "Tom",
            "lastName": "Sawyer",
            "identifiers": [
                {
                    "type": "email",
                    "value": "[email protected]"
                },
                {
                    "type": "mobile",
                    "value": "4567890"
                },
                {
                    "type": "cardnumber",
                    "value": "12345678",
                    "seriesId": 73,
                    "statusLabel": "ACTIVE",
                    "extendedFields": {
                        "custom_card_name": "Mystays"
                    }
                }
            ],
            "fields": {
                "kanjifirstname": "Tom",
                "kanjilastname": "Sawyer",
                "email2": "[email protected]",
                "mobile2": "806794111",
                "fax": "12345678",
                "customer_address": "abc123"
            },
            "source": "INSTORE",
            "commChannels": [
                {
                    "type": "email",
                    "value": "[email protected]",
                    "primary": true,
                    "verified": true,
                    "subscribed": true,
                    "meta": {}
                }
            ]
        }
    ],
    "extendedFields": {
        "zip": "123456",
        "area": "Test1",
        "city": "Test2",
        "state": "Test3",
        "country_of_residence": "Japan",
        "gender": "Male",
        "dob": "1988/05/10",
        "acquisition_channel": "Microsite",
        "preferred_language": "Japanese"
    }
}
```

```
{
    "profiles": [
        {
            "firstName": "Tom",
            "lastName": "Sawyer",
            "identifiers": [
                {
                    "type": "email",
                    "value": "[email protected]"
                },
                {
                    "type": "mobile",
                    "value": "4567890"
                },
                {
                    "type": "cardnumber",
                    "value": "12345678",
                    "seriesId": 73,
                    "statusLabel": "ACTIVE",
                    "extendedFields": {
                        "custom_card_name": "Mystays"
                    }
                }
            ],
            "fields": {
                "kanjifirstname": "Tom",
                "kanjilastname": "Sawyer",
                "email2": "[email protected]",
                "mobile2": "806794111",
                "fax": "12345678",
                "customer_address": "abc123"
            },
            "source": "INSTORE",
            "commChannels": [
                {
                    "type": "email",
                    "value": "[email protected]",
                    "primary": true,
                    "verified": true,
                    "subscribed": true,
                    "meta": {}
                }
            ]
        }
    ],
    "extendedFields": {
        "zip": "123456",
        "area": "Test1",
        "city": "Test2",
        "state": "Test3",
        "country_of_residence": "Japan",
        "gender": "Male",
        "dob": "1988/05/10",
        "acquisition_channel": "Microsite",
        "preferred_language": "Japanese"
    }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
{
    "profiles": [
        {
            "identifiers": [
                {
                    "type": "externalId",
                    "value": "879577211225"
                }
            ],
            "source": "INSTORE"
        }
    ]
}
```

```
{
    "profiles": [
        {
            "identifiers": [
                {
                    "type": "externalId",
                    "value": "879577211225"
                }
            ],
            "source": "INSTORE"
        }
    ]
}
```

```
{
    "profiles": [
        {
            "firstName": "Customer_add_23",
            "lastName": "Test123",
             "identifiers": [
                {
                    "type": "mobile",
                    "value": "8795772341"
                },
                {
                    "type": "email",
                    "value": "[email protected]"
                },
                {
                    "type": "cardnumber",
                    "value": "12345678",
                    "seriesId": 73,
                    "statusLabel": "ACTIVE",
                    "extendedFields": {
                        "custom_card_name": "Mystays"
                    }
                }
            ],
            "commChannels": [
                {
                    "type": "mobile",
                    "value": "8795772141",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                },
                {
                    "type": "email",
                    "value": "[email protected]",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {
                
                "employee": "true",
        "dateofbirth": "22-10-2000"
            },
            "source": "INSTORE"
        }
    ],
    "extendedFields": {
        "acquisition_channel": "Facebook"
        
    },     
    
    "referralCode": "",
    "statusLabel":"active-1"
}
```

```
{
    "profiles": [
        {
            "firstName": "Customer_add_23",
            "lastName": "Test123",
             "identifiers": [
                {
                    "type": "mobile",
                    "value": "8795772341"
                },
                {
                    "type": "email",
                    "value": "[email protected]"
                },
                {
                    "type": "cardnumber",
                    "value": "12345678",
                    "seriesId": 73,
                    "statusLabel": "ACTIVE",
                    "extendedFields": {
                        "custom_card_name": "Mystays"
                    }
                }
            ],
            "commChannels": [
                {
                    "type": "mobile",
                    "value": "8795772141",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                },
                {
                    "type": "email",
                    "value": "[email protected]",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {
                
                "employee": "true",
        "dateofbirth": "22-10-2000"
            },
            "source": "INSTORE"
        }
    ],
    "extendedFields": {
        "acquisition_channel": "Facebook"
        
    },     
    
    "referralCode": "",
    "statusLabel":"active-1"
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| createdId | Long | Internally generated customer ID after successful creation of the customer. |

| warnings | Object | An object containing warning details, if any. |

| - status | Boolean | Indicates if the warning status is true or false. |

| - code | Number | The code associated with the warning. |

| - message | String | The message describing the warning. |

| sideEffects | Object | A resultant object created after the successful creation of a customer. |



```
{
    "createdId": 556844761,
    "warnings": [
        {
            "status": false,
            "code": 8107,
            "message": "Default customer status label not set"
        }
    ],
    "sideEffects": []
}
```

```
{
    "createdId": 556844761,
    "warnings": [
        {
            "status": false,
            "code": 8107,
            "message": "Default customer status label not set"
        }
    ],
    "sideEffects": []
}
```

```
{
    "createdId": 555594290,
    "warnings": [
        {
            "status": false,
            "message": "Default customer status label not set",
            "code": 8107
        }
    ],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 75.000,
            "awardedPoints": 75,
            "type": "points"
        }
    ]
}
```

```
{
    "createdId": 555594290,
    "warnings": [
        {
            "status": false,
            "message": "Default customer status label not set",
            "code": 8107
        }
    ],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 75.000,
            "awardedPoints": 75,
            "type": "points"
        }
    ]
}
```

```
{
    "createdId": 578697565,
    "warnings": [],
    "sideEffects": []
}
```

```
{
    "createdId": 578697565,
    "warnings": [],
    "sideEffects": []
}
```

```
{
    "createdId": 423799201,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedValue": 110.000,
            "alternateCurrencyIdentifier": "rgpws7",
            "alternateCurrencyName": "ac1",
            "awardedValue": 110,
            "type": "alternate_currency"
        }
    ]
}
```

```
{
    "createdId": 423799201,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedValue": 110.000,
            "alternateCurrencyIdentifier": "rgpws7",
            "alternateCurrencyName": "ac1",
            "awardedValue": 110,
            "type": "alternate_currency"
        }
    ]
}
```

```
{
    "createdId": 84230125,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 100.000,
            "awardedPoints": 100,
            "type": "points"
        }
    ]
}
```

```
{
    "createdId": 84230125,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 100.000,
            "awardedPoints": 100,
            "type": "points"
        }
    ]
}
```

```
{
    "createdId": 557669379,
    "warnings": [
        {
            "message": "supplementary program expiry is before membership expiry",
            "code": 1302,
            "status": false
        }
    ],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 200,
            "awardedPoints": 200,
            "type": "points"
        },
        {
            "id": 1239575031,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "JQI7S8P8",
            "validTill": "2025-07-29T23:59:59Z",
            "description": "Welcome Offer - 10% flat discount",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "JQI7S8P8",
            "type": "coupon"
        },
        {
            "id": 1239575032,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "2742942949",
            "validTill": "2024-09-27T23:59:59Z",
            "description": "DSG - $5 Coupon",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "2742942949",
            "type": "coupon"
        }
    ]
}
```

```
{
    "createdId": 557669379,
    "warnings": [
        {
            "message": "supplementary program expiry is before membership expiry",
            "code": 1302,
            "status": false
        }
    ],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 200,
            "awardedPoints": 200,
            "type": "points"
        },
        {
            "id": 1239575031,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "JQI7S8P8",
            "validTill": "2025-07-29T23:59:59Z",
            "description": "Welcome Offer - 10% flat discount",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "JQI7S8P8",
            "type": "coupon"
        },
        {
            "id": 1239575032,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "2742942949",
            "validTill": "2024-09-27T23:59:59Z",
            "description": "DSG - $5 Coupon",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "2742942949",
            "type": "coupon"
        }
    ]
}
```

# API-specific error codes

| Error code | Description | Reason |

| --- | --- | --- |

| 3217 | Source is invalid. | The source provided is invalid or unsupported |

| 8006 | Customer already exists for same source | Customer already exists for same source |

| 8014 | Error in customer registration | The provided mobile number is invalid |



`Try It!`