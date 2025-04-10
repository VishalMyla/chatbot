# Event schema (Payload)

This page provides the schema of transaction and customer events with sample data.

# Customer

## Customer Added Event (customerAdded)

Notifies when a user is added.

| Parameter | Datatype | Description |

| --- | --- | --- |

| eventName | String | Name of the event. |

| eventId | String | Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event.If duplicate, the consumer should ignore the event. |

| orgId | Integer | Capillary organization ID |

| refId | String | Reference ID for the internal debugging purpose. |

| customerId | Integer | Unique identifier for the customer. |

| mobile | Integer | Mobile number of the customer. |

| email | String | Email ID of the customer. |

| externalId | String | External ID associated with the customer. |

| card_number | Integer | Card number associated with the customer. |

| apiRequestId | String | Internal request ID generated for the API request. |

| createdAt | Integer | Unix timestamp in milliseconds when the event was stored in Capillary. |



```
{
  "eventId": "81b1f0ce-8119-4826-9cca-610bd31d4038",
  "eventType": "150698_customerAdded",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683874799984,
  "attributes": {
    "createdAt": 1683874799971,
    "data": {
      "loyaltyType": "LOYALTY",
      "source": "instore",
      "firstName": "ROSMA",
      "lastName": "DEW I",
      "enteredAt": 1683883798000,
      "enteredBy": {
        "id": 200320889,
        "till": {
          "code": "kanmo.idn.mothercare.rpm",
          "name": "kanmo.idn.mothercare.rpm"
        },
        "store": {
          "code": "kanmo.idn.mother care.rpm",
          "name": "Mothercare RSIA Paramount Makassar",
          "externalId": "MOTHERCARERPM",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "customerIdentifiers": {
        "customerId": 164875382,
        "instore": {
          "mobile": "6282396092287",
          "email": "[email protected]",
          "externalId": "226682932023"
        }
      }
    },
    "eventName": "customerAdded",
    "refId": "150698_164875382",
    "apiRequestId ": "0c52fc98594959bf0d577218bf565798",
    "orgId": 150698
  }
}
```

```
{
  "eventId": "81b1f0ce-8119-4826-9cca-610bd31d4038",
  "eventType": "150698_customerAdded",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683874799984,
  "attributes": {
    "createdAt": 1683874799971,
    "data": {
      "loyaltyType": "LOYALTY",
      "source": "instore",
      "firstName": "ROSMA",
      "lastName": "DEW I",
      "enteredAt": 1683883798000,
      "enteredBy": {
        "id": 200320889,
        "till": {
          "code": "kanmo.idn.mothercare.rpm",
          "name": "kanmo.idn.mothercare.rpm"
        },
        "store": {
          "code": "kanmo.idn.mother care.rpm",
          "name": "Mothercare RSIA Paramount Makassar",
          "externalId": "MOTHERCARERPM",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "customerIdentifiers": {
        "customerId": 164875382,
        "instore": {
          "mobile": "6282396092287",
          "email": "[email protected]",
          "externalId": "226682932023"
        }
      }
    },
    "eventName": "customerAdded",
    "refId": "150698_164875382",
    "apiRequestId ": "0c52fc98594959bf0d577218bf565798",
    "orgId": 150698
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Customer Updated Event (customerUpdated)

Notifies when details of a user are updated. For example, name, extended fields, custom fields, and user status. User subscription updates are not supported.

| Parameter | Datatype | Description |

| --- | --- | --- |

| loyaltyType | Enum | Type of customer loyalty - LOYALTY, NON_LOYALTY |

| source | String | Capillary organization ID |

| email | String | Email ID of the customer. |

| mobile | String | Mobile number of the customer. |

| card_number | Integer | Card number associated with the customer. |

| enteredAt | Integer | Unix timestamp in milliseconds when the event was stored in Capillary. |

| enteredBy | String | Source from which customer details are updated.Value: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, |



```
{
  "data": {
    "eventName": "customerUpdated",
    "data": {
      "loyaltyType": "LOYALTY_PLUS",
      "source": "MOBILE_APP",
      "accountId": "ACCT12345",
      "firstName": "John",
      "lastName": "Doe",
      "enteredAt": 1693333333,
      "enteredBy": {
        "user": {
          "username": "jane_smith"
        },
        "id": 4567,
        "till": {
          "code": "TILL01",
          "name": "Main Register"
        },
        "store": {
          "code": "STORE001",
          "name": "Downtown",
          "externalId": "EXT001",
          "externalId1": "EXT002",
          "externalId2": "EXT003"
        }
      },
      "updatedFields": [
        {
          "fieldName": "gender",
          "previousValue": "Female",
          "currentValue": "Male",
          "fieldType": "ExtendedField"
        },
        {
          "fieldName": "dob",
          "previousValue": "Tue Mar 04 00:00:00 GMT 2025",
          "currentValue": "Tue Mar 04 15:27:00 GMT 2025",
          "fieldType": "ExtendedField"
        }
      ],
      "customerStatus": {
        "previousStatus": "INACTIVE",
        "previousLabel": "Inactive",
        "currentStatus": "ACTIVE",
        "currentLabel": "Active",
        "reason": "Customer requested reactivation"
      },
      "triggeringActivity": {
        "name": "PROFILE_UPDATE",
        "requestId": "REQ_98765"
      },
      "customerIdentifiers": {
        "customerId": 12345,
        "firstName": "John",
        "lastName": "Doe",
        "loyaltyType": "LOYALTY_PLUS",
        "instore": {
          "id": 5678,
          "mobile": "9876543210", 
          "email": "[email protected]",
          "externalId": "EXT_CUST_001",
          "cardnumber": "CARD_12345",
          "cardexternalid": "CARD_EXT_001",
          "cardNumbers": [
            "CARD_12345",
            "CARD_67890"
          ]
        },
        "facebook": {
          "accounts": [
            {
              "accountId": "FACEBOOK_123",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "web_engage": {
          "accounts": [
            {
              "accountId": "WEBENG_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "wechat": {
          "accounts": [
            {
              "accountId": "WECHAT_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "martjack": {
          "accounts": [
            {
              "accountId": "MARTJACK_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "tmall": {
          "accounts": [
            {
              "accountId": "TMALL_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "toabao": {
          "accounts": [
            {
              "accountId": "TAOBAO_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "jd": {
          "accounts": [
            {
              "accountId": "JD_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "ecommerce": {
          "accounts": [
            {
              "accountId": "ECOM_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "website": {
          "accounts": [
            {
              "accountId": "WEBSITE_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "line": {
          "accounts": [
            {
              "accountId": "LINE_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        }
      },
      "customFields": [
        {
          "key": "MembershipLevel",
          "value": "Gold"
        }
      ],
      "extendedFields": [
        {
          "key": "PreferredLanguage",
          "value": "English"
        }
      ]
    },
    "eventId": "EVT_12345",
    "orgId": 1001,
    "refId": "REF_9876",
    "apiRequestId": "REQ_67890",
    "createdAt": 1693334444,
    "loyaltyEventId": "LOYALTY_EVENT_001",
    "traceAttributes": {
      "XJE": "Value1",
      "OBW": "Value2",
      "JXICJ": "Value3",
      "FGQKKGRAR": "Value4",
      "POEHQFGLHD": "Value5"
    }
  },
  "errors": null,
  "warnings": null
}
```

```
{
  "data": {
    "eventName": "customerUpdated",
    "data": {
      "loyaltyType": "LOYALTY_PLUS",
      "source": "MOBILE_APP",
      "accountId": "ACCT12345",
      "firstName": "John",
      "lastName": "Doe",
      "enteredAt": 1693333333,
      "enteredBy": {
        "user": {
          "username": "jane_smith"
        },
        "id": 4567,
        "till": {
          "code": "TILL01",
          "name": "Main Register"
        },
        "store": {
          "code": "STORE001",
          "name": "Downtown",
          "externalId": "EXT001",
          "externalId1": "EXT002",
          "externalId2": "EXT003"
        }
      },
      "updatedFields": [
        {
          "fieldName": "gender",
          "previousValue": "Female",
          "currentValue": "Male",
          "fieldType": "ExtendedField"
        },
        {
          "fieldName": "dob",
          "previousValue": "Tue Mar 04 00:00:00 GMT 2025",
          "currentValue": "Tue Mar 04 15:27:00 GMT 2025",
          "fieldType": "ExtendedField"
        }
      ],
      "customerStatus": {
        "previousStatus": "INACTIVE",
        "previousLabel": "Inactive",
        "currentStatus": "ACTIVE",
        "currentLabel": "Active",
        "reason": "Customer requested reactivation"
      },
      "triggeringActivity": {
        "name": "PROFILE_UPDATE",
        "requestId": "REQ_98765"
      },
      "customerIdentifiers": {
        "customerId": 12345,
        "firstName": "John",
        "lastName": "Doe",
        "loyaltyType": "LOYALTY_PLUS",
        "instore": {
          "id": 5678,
          "mobile": "9876543210", 
          "email": "[email protected]",
          "externalId": "EXT_CUST_001",
          "cardnumber": "CARD_12345",
          "cardexternalid": "CARD_EXT_001",
          "cardNumbers": [
            "CARD_12345",
            "CARD_67890"
          ]
        },
        "facebook": {
          "accounts": [
            {
              "accountId": "FACEBOOK_123",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "web_engage": {
          "accounts": [
            {
              "accountId": "WEBENG_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "wechat": {
          "accounts": [
            {
              "accountId": "WECHAT_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "martjack": {
          "accounts": [
            {
              "accountId": "MARTJACK_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "tmall": {
          "accounts": [
            {
              "accountId": "TMALL_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "toabao": {
          "accounts": [
            {
              "accountId": "TAOBAO_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "jd": {
          "accounts": [
            {
              "accountId": "JD_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "ecommerce": {
          "accounts": [
            {
              "accountId": "ECOM_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "website": {
          "accounts": [
            {
              "accountId": "WEBSITE_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        },
        "line": {
          "accounts": [
            {
              "accountId": "LINE_001",
              "identifiers": [
                {
                  "identifierType": "mobile",
                  "identifierValue": "9876543210"
                }
              ]
            }
          ]
        }
      },
      "customFields": [
        {
          "key": "MembershipLevel",
          "value": "Gold"
        }
      ],
      "extendedFields": [
        {
          "key": "PreferredLanguage",
          "value": "English"
        }
      ]
    },
    "eventId": "EVT_12345",
    "orgId": 1001,
    "refId": "REF_9876",
    "apiRequestId": "REQ_67890",
    "createdAt": 1693334444,
    "loyaltyEventId": "LOYALTY_EVENT_001",
    "traceAttributes": {
      "XJE": "Value1",
      "OBW": "Value2",
      "JXICJ": "Value3",
      "FGQKKGRAR": "Value4",
      "POEHQFGLHD": "Value5"
    }
  },
  "errors": null,
  "warnings": null
}
```

[[email protected]](/cdn-cgi/l/email-protection)

### PII deletion Customer update

Notifies when details of the customer is updated upon personally identifiable information (PII) deletion and the status changes from 'Pending Deletion' to 'Deleted'.

```
{
  "eventId": "2ad748ac-f1f9-4bfa-8753-be57587b543d",
  "eventType": "customerUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1742844645025,
  "attributes": {
    "createdAt": 1742844644960,
    "data": {
      "loyaltyType": "loyalty",
      "source": "INSTORE",
      "accountId": "",
      "firstName": "AAQA",
      "lastName": "Test033",
      "enteredAt": 1739963778000,
      "enteredBy": {
        "id": 13600080,
        "till": {
          "code": "mbrcare",
          "name": "mbrcare"
        },
        "store": {
          "code": "mbrcare",
          "name": "MbrCare",
          "externalId": "MbrCare",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "updatedFields": [],
      "customerStatus": {
        "currentLabel": "Deleted",
        "reason": "User marked deleted using request feature"
      },
      "customerIdentifiers": {
        "customerId": 622372905,
        "instore": {
          "email": "[email protected]",
          "externalId": "GT000043043",
          "cardNumbers": []
        }
      },
      "customFields": [
        {
          "key": "customer_address",
          "value": "abc123"
        },
        {
          "key": "fax",
          "value": "12345678"
        },
        {
          "key": "golf_class_code",
          "value": "abc123"
        },
        {
          "key": "golf_lastupdateevent",
          "value": "abc123"
        },
        {
          "key": "golf_membership_flag",
          "value": "abc123"
        },
        {
          "key": "kanjifirstname",
          "value": "石川"
        },
        {
          "key": "kanjilastname",
          "value": "鈴木"
        },
        {
          "key": "mobile2",
          "value": "8067944474"
        },
        {
          "key": "quit_date",
          "value": "abc123"
        },
        {
          "key": "quit_reason_number",
          "value": "abc123"
        },
        {
          "key": "quit_reason_text",
          "value": "abc123"
        }
      ],
      "extendedFields": []
    },
    "eventName": "customerUpdated",
    "refId": "2163_622372905",
    "apiRequestId": "",
    "orgId": 2163
  }
}
```

```
{
  "eventId": "2ad748ac-f1f9-4bfa-8753-be57587b543d",
  "eventType": "customerUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1742844645025,
  "attributes": {
    "createdAt": 1742844644960,
    "data": {
      "loyaltyType": "loyalty",
      "source": "INSTORE",
      "accountId": "",
      "firstName": "AAQA",
      "lastName": "Test033",
      "enteredAt": 1739963778000,
      "enteredBy": {
        "id": 13600080,
        "till": {
          "code": "mbrcare",
          "name": "mbrcare"
        },
        "store": {
          "code": "mbrcare",
          "name": "MbrCare",
          "externalId": "MbrCare",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "updatedFields": [],
      "customerStatus": {
        "currentLabel": "Deleted",
        "reason": "User marked deleted using request feature"
      },
      "customerIdentifiers": {
        "customerId": 622372905,
        "instore": {
          "email": "[email protected]",
          "externalId": "GT000043043",
          "cardNumbers": []
        }
      },
      "customFields": [
        {
          "key": "customer_address",
          "value": "abc123"
        },
        {
          "key": "fax",
          "value": "12345678"
        },
        {
          "key": "golf_class_code",
          "value": "abc123"
        },
        {
          "key": "golf_lastupdateevent",
          "value": "abc123"
        },
        {
          "key": "golf_membership_flag",
          "value": "abc123"
        },
        {
          "key": "kanjifirstname",
          "value": "石川"
        },
        {
          "key": "kanjilastname",
          "value": "鈴木"
        },
        {
          "key": "mobile2",
          "value": "8067944474"
        },
        {
          "key": "quit_date",
          "value": "abc123"
        },
        {
          "key": "quit_reason_number",
          "value": "abc123"
        },
        {
          "key": "quit_reason_text",
          "value": "abc123"
        }
      ],
      "extendedFields": []
    },
    "eventName": "customerUpdated",
    "refId": "2163_622372905",
    "apiRequestId": "",
    "orgId": 2163
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Customer Subscription Event (customerSubscription)

Notifies when a user's subscription status changes for transactional or promotional messages.

```
{
  "eventName": "customerSubscription",
  "data": {
    "customerIdentifiers": {
      "customerId": 3035,
      "firstName": "BTFVIQUN",
      "lastName": "SOGQBY",
      "loyaltyType": "RBPLQJBFL",
      "instore": {
        "id": 6642,
        "mobile": "ZHTTROEFB",
        "email": "DKGOLFALR",
        "externalId": "QMLY",
        "cardnumber": "GFEDIL",
        "cardexternalid": "EUMPR",
        "cardNumbers": [
          "LMLJ"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "EHMQPCFWAT",
            "identifiers": [
              {
                "identifierType": "CWHTH",
                "identifierValue": "RUVDFD"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "HER",
            "identifiers": [
              {
                "identifierType": "BPRE",
                "identifierValue": "TJLOFS"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "XFGDQP",
            "identifiers": [
              {
                "identifierType": "JXLHKMZOT",
                "identifierValue": "MACJWFUX"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IKN",
            "identifiers": [
              {
                "identifierType": "LBGONQFJSJ",
                "identifierValue": "LQQZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "XPRHVOZJU",
            "identifiers": [
              {
                "identifierType": "OTUTY",
                "identifierValue": "ITT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "TIJCMFLJN",
            "identifiers": [
              {
                "identifierType": "YAXUTNID",
                "identifierValue": "SADCL"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "PPJRM",
            "identifiers": [
              {
                "identifierType": "DFIGGVIIQH",
                "identifierValue": "HYLWJUOCEW"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "OFWX",
            "identifiers": [
              {
                "identifierType": "KRQGML",
                "identifierValue": "JOC"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "FJQGVP",
            "identifiers": [
              {
                "identifierType": "YDUFXFGN",
                "identifierValue": "HPC"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "KOP",
            "identifiers": [
              {
                "identifierType": "EQSTIP",
                "identifierValue": "DEDR"
              }
            ]
          }
        ]
      }
    },
    "subscriptions": [
      {
        "sourceAccountId": "TIYFBQ",
        "previousStatus": "MDDNR",
        "currentStatus": "SQXZFX",
        "channel": "XOLEFY",
        "sourceName": "BXCUZZ",
        "priority": "OOLRA",
        "ouId": 5905,
        "ouCode": "QFFGPEDKTK"
      }
    ]
  },
  "eventId": "EDEL",
  "orgId": 9907,
  "refId": "AKOZZ",
  "apiRequestId": "ACILCI",
  "createdAt": 4214,
  "loyaltyEventId": "FCW",
  "traceAttributes": {
    "TBJRARWC": "IEWKJRV",
    "YYRUWM": "XBSC",
    "JWYDT": "CYFW",
    "TWNX": "UHJIPUJ",
    "SHWKVIMKQ": "EWO",
    "JQDQMWSEP": "HSNOC"
  }
}
```

```
{
  "eventName": "customerSubscription",
  "data": {
    "customerIdentifiers": {
      "customerId": 3035,
      "firstName": "BTFVIQUN",
      "lastName": "SOGQBY",
      "loyaltyType": "RBPLQJBFL",
      "instore": {
        "id": 6642,
        "mobile": "ZHTTROEFB",
        "email": "DKGOLFALR",
        "externalId": "QMLY",
        "cardnumber": "GFEDIL",
        "cardexternalid": "EUMPR",
        "cardNumbers": [
          "LMLJ"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "EHMQPCFWAT",
            "identifiers": [
              {
                "identifierType": "CWHTH",
                "identifierValue": "RUVDFD"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "HER",
            "identifiers": [
              {
                "identifierType": "BPRE",
                "identifierValue": "TJLOFS"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "XFGDQP",
            "identifiers": [
              {
                "identifierType": "JXLHKMZOT",
                "identifierValue": "MACJWFUX"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "IKN",
            "identifiers": [
              {
                "identifierType": "LBGONQFJSJ",
                "identifierValue": "LQQZ"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "XPRHVOZJU",
            "identifiers": [
              {
                "identifierType": "OTUTY",
                "identifierValue": "ITT"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "TIJCMFLJN",
            "identifiers": [
              {
                "identifierType": "YAXUTNID",
                "identifierValue": "SADCL"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "PPJRM",
            "identifiers": [
              {
                "identifierType": "DFIGGVIIQH",
                "identifierValue": "HYLWJUOCEW"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "OFWX",
            "identifiers": [
              {
                "identifierType": "KRQGML",
                "identifierValue": "JOC"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "FJQGVP",
            "identifiers": [
              {
                "identifierType": "YDUFXFGN",
                "identifierValue": "HPC"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "KOP",
            "identifiers": [
              {
                "identifierType": "EQSTIP",
                "identifierValue": "DEDR"
              }
            ]
          }
        ]
      }
    },
    "subscriptions": [
      {
        "sourceAccountId": "TIYFBQ",
        "previousStatus": "MDDNR",
        "currentStatus": "SQXZFX",
        "channel": "XOLEFY",
        "sourceName": "BXCUZZ",
        "priority": "OOLRA",
        "ouId": 5905,
        "ouCode": "QFFGPEDKTK"
      }
    ]
  },
  "eventId": "EDEL",
  "orgId": 9907,
  "refId": "AKOZZ",
  "apiRequestId": "ACILCI",
  "createdAt": 4214,
  "loyaltyEventId": "FCW",
  "traceAttributes": {
    "TBJRARWC": "IEWKJRV",
    "YYRUWM": "XBSC",
    "JWYDT": "CYFW",
    "TWNX": "UHJIPUJ",
    "SHWKVIMKQ": "EWO",
    "JQDQMWSEP": "HSNOC"
  }
}
```

# Group

The below event notifications are applicable for family and friends groups. For user group, use the other events.

## Group Created Event (groupCreated)

Notifies when a group has been created. Applicable for family & friends group.

```
{
        "eventName": "groupCreated",
        "data": {
            "groupId": 6454,
            "groupName": "TEIVJVUXCD",
            "primaryMember": {
                "firstName": "IPN",
                "lastName": "NSVYZ",
                "role": "ARL",
                "customerIdentifiers": {
                    "customerId": 6386,
                    "firstName": "QECMNT",
                    "lastName": "AWFW",
                    "loyaltyType": "IBZ",
                    "instore": {
                        "id": 5275,
                        "mobile": "AZOFWOKVNS",
                        "email": "FWEIJBQO",
                        "externalId": "QOIN",
                        "cardnumber": "XJMBDBLMK",
                        "cardexternalid": "DTLZYF",
                        "cardNumbers": [
                            "KFSUUM"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "FVYERZD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "YXZS",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "RWDDQM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "JJNGQIK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "QCO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "FPPAZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "FNMWWC",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "HMFKARRKJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "KMEIOBBREK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "CZQSEGODEF",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 8034,
            "enteredBy": {
                "user": {
                    "username": "QBICVZ"
                },
                "id": 1936,
                "till": {
                    "code": "SELKEVQJQ",
                    "name": "QRMYMIOXD"
                },
                "store": {
                    "code": "NHLLVNT",
                    "name": "YSUP",
                    "externalId": "WGKIFKEDLQ",
                    "externalId1": "KMWFAW",
                    "externalId2": "FGWMFPFFK"
                }
            }
        },
        "eventId": "YZHXQUJIBQ",
        "orgId": 2975,
        "refId": "EUGDEXSXMZ",
        "apiRequestId": "KDKA",
        "createdAt": 5053,
        "loyaltyEventId": "XFCKEGMOT",
        "traceAttributes": {
            "UODI": "TSYZEWFYIC",
            "XAPFDNH": "QPXJNITT",
            "QINZJNUJA": "XGIZAXNDQH"
        }
    }
```

```
{
        "eventName": "groupCreated",
        "data": {
            "groupId": 6454,
            "groupName": "TEIVJVUXCD",
            "primaryMember": {
                "firstName": "IPN",
                "lastName": "NSVYZ",
                "role": "ARL",
                "customerIdentifiers": {
                    "customerId": 6386,
                    "firstName": "QECMNT",
                    "lastName": "AWFW",
                    "loyaltyType": "IBZ",
                    "instore": {
                        "id": 5275,
                        "mobile": "AZOFWOKVNS",
                        "email": "FWEIJBQO",
                        "externalId": "QOIN",
                        "cardnumber": "XJMBDBLMK",
                        "cardexternalid": "DTLZYF",
                        "cardNumbers": [
                            "KFSUUM"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "FVYERZD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "YXZS",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "RWDDQM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "JJNGQIK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "QCO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "FPPAZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "FNMWWC",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "HMFKARRKJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "KMEIOBBREK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "CZQSEGODEF",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 8034,
            "enteredBy": {
                "user": {
                    "username": "QBICVZ"
                },
                "id": 1936,
                "till": {
                    "code": "SELKEVQJQ",
                    "name": "QRMYMIOXD"
                },
                "store": {
                    "code": "NHLLVNT",
                    "name": "YSUP",
                    "externalId": "WGKIFKEDLQ",
                    "externalId1": "KMWFAW",
                    "externalId2": "FGWMFPFFK"
                }
            }
        },
        "eventId": "YZHXQUJIBQ",
        "orgId": 2975,
        "refId": "EUGDEXSXMZ",
        "apiRequestId": "KDKA",
        "createdAt": 5053,
        "loyaltyEventId": "XFCKEGMOT",
        "traceAttributes": {
            "UODI": "TSYZEWFYIC",
            "XAPFDNH": "QPXJNITT",
            "QINZJNUJA": "XGIZAXNDQH"
        }
    }
```

## Group Updated Event (groupUpdated)

Notifies when a group has been updated. Applicable for family & friends group.

```
{
        "eventName": "groupUpdated",
        "data": {
            "groupId": 6155,
            "groupName": "FUEFW",
            "primaryMember": {
                "firstName": "IFNOWNRA",
                "lastName": "WPIZZOD",
                "role": "BWPA",
                "customerIdentifiers": {
                    "customerId": 3900,
                    "firstName": "LJPJXTIMJ",
                    "lastName": "WNPNFJMC",
                    "loyaltyType": "VEPTDQ",
                    "instore": {
                        "id": 6797,
                        "mobile": "TCOBX",
                        "email": "MSLEFNK",
                        "externalId": "EDJO",
                        "cardnumber": "TMRGHP",
                        "cardexternalid": "ROLLUYB",
                        "cardNumbers": [
                            "KPHNYWUC"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "VQRPQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "ACFDAVSVMU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "LNWKPJL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "DRZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "GVBLZBUHJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "RJNHE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "QQHHBNQUL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "JAYKWH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "WKIUPSKAQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "ANO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 635,
            "enteredBy": {
                "user": {
                    "username": "RYLTNTEQCC"
                },
                "id": 7017,
                "till": {
                    "code": "TGDLK",
                    "name": "DVEEEBG"
                },
                "store": {
                    "code": "IJSXMEMFYH",
                    "name": "WSDHTBHBVN",
                    "externalId": "TBVJRW",
                    "externalId1": "AMXQAAEDC",
                    "externalId2": "HZOWPEUGE"
                }
            }
        },
        "eventId": "VWPECGJC",
        "orgId": 5635,
        "refId": "SHLDGAJCRL",
        "apiRequestId": "KOKNJM",
        "createdAt": 3039,
        "loyaltyEventId": "UETYIKX",
        "traceAttributes": {
            "ATUN": "NKPUVYSD",
            "QVMUTCMH": "MSGVXGF",
            "DPMSGQ": "RCLEURMTOC",
            "JIKG": "CHTOAA",
            "EIS": "QFBLKTBB"
        }
    }
```

```
{
        "eventName": "groupUpdated",
        "data": {
            "groupId": 6155,
            "groupName": "FUEFW",
            "primaryMember": {
                "firstName": "IFNOWNRA",
                "lastName": "WPIZZOD",
                "role": "BWPA",
                "customerIdentifiers": {
                    "customerId": 3900,
                    "firstName": "LJPJXTIMJ",
                    "lastName": "WNPNFJMC",
                    "loyaltyType": "VEPTDQ",
                    "instore": {
                        "id": 6797,
                        "mobile": "TCOBX",
                        "email": "MSLEFNK",
                        "externalId": "EDJO",
                        "cardnumber": "TMRGHP",
                        "cardexternalid": "ROLLUYB",
                        "cardNumbers": [
                            "KPHNYWUC"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "VQRPQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "ACFDAVSVMU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "LNWKPJL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "DRZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "GVBLZBUHJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "RJNHE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "QQHHBNQUL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "JAYKWH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "WKIUPSKAQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "ANO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 635,
            "enteredBy": {
                "user": {
                    "username": "RYLTNTEQCC"
                },
                "id": 7017,
                "till": {
                    "code": "TGDLK",
                    "name": "DVEEEBG"
                },
                "store": {
                    "code": "IJSXMEMFYH",
                    "name": "WSDHTBHBVN",
                    "externalId": "TBVJRW",
                    "externalId1": "AMXQAAEDC",
                    "externalId2": "HZOWPEUGE"
                }
            }
        },
        "eventId": "VWPECGJC",
        "orgId": 5635,
        "refId": "SHLDGAJCRL",
        "apiRequestId": "KOKNJM",
        "createdAt": 3039,
        "loyaltyEventId": "UETYIKX",
        "traceAttributes": {
            "ATUN": "NKPUVYSD",
            "QVMUTCMH": "MSGVXGF",
            "DPMSGQ": "RCLEURMTOC",
            "JIKG": "CHTOAA",
            "EIS": "QFBLKTBB"
        }
    }
```

## Group Member Removed Event (groupMemberRemoved)

Notifies when a member is removed from the group. Applicable for family & friends group.

```
{
        "eventName": "groupMemberRemoved",
        "data": {
            "groupId": 6815,
            "groupName": "XFU",
            "primaryMember": {
                "firstName": "JFFYAPX",
                "lastName": "EYPQYDAM",
                "role": "NECB",
                "customerIdentifiers": {
                    "customerId": 1757,
                    "firstName": "WCZY",
                    "lastName": "WZM",
                    "loyaltyType": "BYCMESBJO",
                    "instore": {
                        "id": 4820,
                        "mobile": "QFLAIVBPOF",
                        "email": "SGSHI",
                        "externalId": "OJAUIX",
                        "cardnumber": "FBVKZMMCWH",
                        "cardexternalid": "KBMXA",
                        "cardNumbers": [
                            "JHPMGKDIF"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "XOBBTVOP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "HUWGP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "MHXETUZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "MKW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "OSRJKWR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "YHBBSXR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "MBGGPJQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "SIL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "YVSMTR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "ESTVMSHGIP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "memberRemoved": {
                "firstName": "JUYJ",
                "lastName": "YEW",
                "role": "ZQBBTQVFS",
                "customerIdentifiers": {
                    "customerId": 564,
                    "firstName": "COIIUVCDMR",
                    "lastName": "DXGFR",
                    "loyaltyType": "QDXULGXJ",
                    "instore": {
                        "id": 9506,
                        "mobile": "AGIV",
                        "email": "XAHP",
                        "externalId": "CINEHRP",
                        "cardnumber": "CFWBFLLDC",
                        "cardexternalid": "EYYPR",
                        "cardNumbers": [
                            "JJYKSZZFQW"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "JUYMTCYIBO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "BXZDXE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "UCHTLL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "IEGJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "HXVTRWJUJM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "FLB",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "OMGB",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "JCWVA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "TKS",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "QLM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 6893,
            "enteredBy": {
                "user": {
                    "username": "ETP"
                },
                "id": 9792,
                "till": {
                    "code": "TBMFUSQH",
                    "name": "XIN"
                },
                "store": {
                    "code": "OEQ",
                    "name": "RCFBZV",
                    "externalId": "LZZOZ",
                    "externalId1": "WINYWG",
                    "externalId2": "AROPHIPG"
                }
            }
        },
        "eventId": "XJJVON",
        "orgId": 6700,
        "refId": "HKA",
        "apiRequestId": "DEPY",
        "createdAt": 543,
        "loyaltyEventId": "MFVKRCLH",
        "traceAttributes": {
            "WFP": "THUQOWPZ",
            "TIFXANF": "YBOHTO",
            "MZGVLUZYW": "OJHW",
            "RPSEKXCVM": "ECMTTSEVND"
        }
    }
```

```
{
        "eventName": "groupMemberRemoved",
        "data": {
            "groupId": 6815,
            "groupName": "XFU",
            "primaryMember": {
                "firstName": "JFFYAPX",
                "lastName": "EYPQYDAM",
                "role": "NECB",
                "customerIdentifiers": {
                    "customerId": 1757,
                    "firstName": "WCZY",
                    "lastName": "WZM",
                    "loyaltyType": "BYCMESBJO",
                    "instore": {
                        "id": 4820,
                        "mobile": "QFLAIVBPOF",
                        "email": "SGSHI",
                        "externalId": "OJAUIX",
                        "cardnumber": "FBVKZMMCWH",
                        "cardexternalid": "KBMXA",
                        "cardNumbers": [
                            "JHPMGKDIF"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "XOBBTVOP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "HUWGP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "MHXETUZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "MKW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "OSRJKWR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "YHBBSXR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "MBGGPJQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "SIL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "YVSMTR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "ESTVMSHGIP",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "memberRemoved": {
                "firstName": "JUYJ",
                "lastName": "YEW",
                "role": "ZQBBTQVFS",
                "customerIdentifiers": {
                    "customerId": 564,
                    "firstName": "COIIUVCDMR",
                    "lastName": "DXGFR",
                    "loyaltyType": "QDXULGXJ",
                    "instore": {
                        "id": 9506,
                        "mobile": "AGIV",
                        "email": "XAHP",
                        "externalId": "CINEHRP",
                        "cardnumber": "CFWBFLLDC",
                        "cardexternalid": "EYYPR",
                        "cardNumbers": [
                            "JJYKSZZFQW"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "JUYMTCYIBO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "BXZDXE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "UCHTLL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "IEGJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "HXVTRWJUJM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "FLB",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "OMGB",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "JCWVA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "TKS",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "QLM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 6893,
            "enteredBy": {
                "user": {
                    "username": "ETP"
                },
                "id": 9792,
                "till": {
                    "code": "TBMFUSQH",
                    "name": "XIN"
                },
                "store": {
                    "code": "OEQ",
                    "name": "RCFBZV",
                    "externalId": "LZZOZ",
                    "externalId1": "WINYWG",
                    "externalId2": "AROPHIPG"
                }
            }
        },
        "eventId": "XJJVON",
        "orgId": 6700,
        "refId": "HKA",
        "apiRequestId": "DEPY",
        "createdAt": 543,
        "loyaltyEventId": "MFVKRCLH",
        "traceAttributes": {
            "WFP": "THUQOWPZ",
            "TIFXANF": "YBOHTO",
            "MZGVLUZYW": "OJHW",
            "RPSEKXCVM": "ECMTTSEVND"
        }
    }
```

## Group Member Added Event (groupMemberAdded)

Notifies when a user is added to the group. Applicable for family & friends group.

```
{
        "eventName": "groupMemberAdded",
        "data": {
            "groupId": 5322,
            "groupName": "CDNO",
            "primaryMember": {
                "firstName": "OWAXN",
                "lastName": "QFYKVMFT",
                "role": "EXWCSHZCE",
                "customerIdentifiers": {
                    "customerId": 7098,
                    "firstName": "PYBWGRLSL",
                    "lastName": "EYMPRNY",
                    "loyaltyType": "EYGPRF",
                    "instore": {
                        "id": 5240,
                        "mobile": "DTGWKBQ",
                        "email": "XEWHI",
                        "externalId": "WQMNTLMZH",
                        "cardnumber": "GFHGXTR",
                        "cardexternalid": "PFZXJLOU",
                        "cardNumbers": [
                            "HJWLN"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "IJRPPXDA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "NPNLNJU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "HXZPIXO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "AIXMYREODW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "VGWSDAD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "QQVZVH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "OCMVNLMM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "QAIEXCUPGH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "LUYARPJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "BNSQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "memberAdded": {
                "firstName": "DUJEI",
                "lastName": "LGH",
                "role": "PIXKILY",
                "customerIdentifiers": {
                    "customerId": 3970,
                    "firstName": "BHNN",
                    "lastName": "RDDGQ",
                    "loyaltyType": "FFSVYCB",
                    "instore": {
                        "id": 7905,
                        "mobile": "SEWFB",
                        "email": "LQIMZ",
                        "externalId": "ZTUJYZMQY",
                        "cardnumber": "YDJIRDP",
                        "cardexternalid": "VQRUYH",
                        "cardNumbers": [
                            "SUTYQB"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "MJWLMIU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "BYQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "MUOPUHVG",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "HZE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "RWMN",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "QQOIHQI",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "XOKFREZV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "TQSSADLNBA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "WFFZSBFWR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "WYV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 1426,
            "enteredBy": {
                "user": {
                    "username": "MPQSJA"
                },
                "id": 939,
                "till": {
                    "code": "DSYQOXAV",
                    "name": "AFYDJJKRYC"
                },
                "store": {
                    "code": "GKYXKEZF",
                    "name": "JBKKM",
                    "externalId": "SRAU",
                    "externalId1": "XOAKCQX",
                    "externalId2": "QME"
                }
            }
        },
        "eventId": "RHPEYLIWUE",
        "orgId": 6485,
        "refId": "KFLUYT",
        "apiRequestId": "ZHLGTI",
        "createdAt": 9743,
        "loyaltyEventId": "CWJWPBBF",
        "traceAttributes": {
            "JWE": "RHC",
            "TRRA": "DTQNZ",
            "NDKD": "RLXXDMAHL",
            "DICJW": "CUSFWKB",
            "LDJSKSIDO": "HAOW",
            "OQKQ": "BFHHQBEUHC"
        }
    }
```

```
{
        "eventName": "groupMemberAdded",
        "data": {
            "groupId": 5322,
            "groupName": "CDNO",
            "primaryMember": {
                "firstName": "OWAXN",
                "lastName": "QFYKVMFT",
                "role": "EXWCSHZCE",
                "customerIdentifiers": {
                    "customerId": 7098,
                    "firstName": "PYBWGRLSL",
                    "lastName": "EYMPRNY",
                    "loyaltyType": "EYGPRF",
                    "instore": {
                        "id": 5240,
                        "mobile": "DTGWKBQ",
                        "email": "XEWHI",
                        "externalId": "WQMNTLMZH",
                        "cardnumber": "GFHGXTR",
                        "cardexternalid": "PFZXJLOU",
                        "cardNumbers": [
                            "HJWLN"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "IJRPPXDA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "NPNLNJU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "HXZPIXO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "AIXMYREODW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "VGWSDAD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "QQVZVH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "OCMVNLMM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "QAIEXCUPGH",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "LUYARPJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "BNSQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "memberAdded": {
                "firstName": "DUJEI",
                "lastName": "LGH",
                "role": "PIXKILY",
                "customerIdentifiers": {
                    "customerId": 3970,
                    "firstName": "BHNN",
                    "lastName": "RDDGQ",
                    "loyaltyType": "FFSVYCB",
                    "instore": {
                        "id": 7905,
                        "mobile": "SEWFB",
                        "email": "LQIMZ",
                        "externalId": "ZTUJYZMQY",
                        "cardnumber": "YDJIRDP",
                        "cardexternalid": "VQRUYH",
                        "cardNumbers": [
                            "SUTYQB"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "MJWLMIU",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "BYQ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "MUOPUHVG",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "HZE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "RWMN",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "QQOIHQI",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "XOKFREZV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "TQSSADLNBA",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "WFFZSBFWR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "WYV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "enteredAt": 1426,
            "enteredBy": {
                "user": {
                    "username": "MPQSJA"
                },
                "id": 939,
                "till": {
                    "code": "DSYQOXAV",
                    "name": "AFYDJJKRYC"
                },
                "store": {
                    "code": "GKYXKEZF",
                    "name": "JBKKM",
                    "externalId": "SRAU",
                    "externalId1": "XOAKCQX",
                    "externalId2": "QME"
                }
            }
        },
        "eventId": "RHPEYLIWUE",
        "orgId": 6485,
        "refId": "KFLUYT",
        "apiRequestId": "ZHLGTI",
        "createdAt": 9743,
        "loyaltyEventId": "CWJWPBBF",
        "traceAttributes": {
            "JWE": "RHC",
            "TRRA": "DTQNZ",
            "NDKD": "RLXXDMAHL",
            "DICJW": "CUSFWKB",
            "LDJSKSIDO": "HAOW",
            "OQKQ": "BFHHQBEUHC"
        }
    }
```

## Points Contribution to Group Event (pointsContributionToGroup)

Notifies when points are contributed to the loyalty group. Applicable for family & friends group.

```
{
        "eventName": "pointsContributionToGroup",
        "data": {
            "groupId": 2146,
            "groupName": "RRMB",
            "primaryMember": {
                "firstName": "AVQ",
                "lastName": "VQZZJL",
                "role": "QBZZKNJAXV",
                "customerIdentifiers": {
                    "customerId": 2828,
                    "firstName": "DVSKCOT",
                    "lastName": "HCBTOXKHQ",
                    "loyaltyType": "WIXGDVJST",
                    "instore": {
                        "id": 5646,
                        "mobile": "KMLCG",
                        "email": "OSONXRDAD",
                        "externalId": "LBJURY",
                        "cardnumber": "DTEVR",
                        "cardexternalid": "UZHJ",
                        "cardNumbers": [
                            "DPAID"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "FXRBKNKWC",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "XAVGDRVRL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "PGXPKRE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "DRDX",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "QSUJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "HZPT",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "EXMG",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "TWYD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "TAYEGETJO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "YZOT",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "contributingMember": {
                "firstName": "QPJ",
                "lastName": "SVCC",
                "role": "KDSM",
                "customerIdentifiers": {
                    "customerId": 6560,
                    "firstName": "IATIBBX",
                    "lastName": "IVRCV",
                    "loyaltyType": "JLZFVAQR",
                    "instore": {
                        "id": 8417,
                        "mobile": "JNQ",
                        "email": "BMXXM",
                        "externalId": "NLCQRNBB",
                        "cardnumber": "WBEBQR",
                        "cardexternalid": "PXOVHLLQR",
                        "cardNumbers": [
                            "IERNF"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "AAABR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "MDFUIIKPFO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "APTV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "CEKOFQIK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "PBXDZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "AUIXZI",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "PVTZOPUTY",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "BUEGCQEW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "REIRM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "MOEWWZNQM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "triggeringActivity": {
                "name": "SKYAQOEDX",
                "identifiers": [
                    {
                        "key": "EVRAA",
                        "value": "OZJUDQH"
                    }
                ],
                "enteredBy": {
                    "id": 4493,
                    "till": {
                        "code": "KJXTSY",
                        "name": "QLSEATML"
                    },
                    "store": {
                        "code": "KKX",
                        "name": "DSMKXKSK",
                        "externalId": "IAUSMDZCFY",
                        "externalId1": "JOZJBJZ",
                        "externalId2": "WYHERZQSN"
                    }
                },
                "entityInformation": {
                    "entityType": "NBNCCMY",
                    "entityId": 4348
                },
                "additionalAttributes": [
                    {
                        "key": "XIQUZ",
                        "value": "JKFVMCWXUZ"
                    }
                ]
            },
            "loyaltyProgramDetails": {
                "id": 6178,
                "name": "XXYMNPPPF",
                "isDefault": true,
                "pointsToCurrencyRatio": 279.6401470769947,
                "tiers": [
                    {
                        "tierNumber": 8793,
                        "tierName": "HFT"
                    }
                ]
            },
            "loyaltyProgramId": 3583,
            "pointsContributedToGroup": 446.36640823491007
        },
        "eventId": "VTP",
        "orgId": 5150,
        "refId": "QRPNKMVSN",
        "apiRequestId": "DYUXNRF",
        "createdAt": 1845,
        "loyaltyEventId": "JBKIS",
        "traceAttributes": {
            "INZTJTF": "AMTYVL",
            "CXBYWD": "ZNQ",
            "SPQUS": "QEGKQSFPT",
            "ONLFEQEX": "PQDODJ",
            "PXYUL": "ZVZXMGQRLT"
        }
    }
```

```
{
        "eventName": "pointsContributionToGroup",
        "data": {
            "groupId": 2146,
            "groupName": "RRMB",
            "primaryMember": {
                "firstName": "AVQ",
                "lastName": "VQZZJL",
                "role": "QBZZKNJAXV",
                "customerIdentifiers": {
                    "customerId": 2828,
                    "firstName": "DVSKCOT",
                    "lastName": "HCBTOXKHQ",
                    "loyaltyType": "WIXGDVJST",
                    "instore": {
                        "id": 5646,
                        "mobile": "KMLCG",
                        "email": "OSONXRDAD",
                        "externalId": "LBJURY",
                        "cardnumber": "DTEVR",
                        "cardexternalid": "UZHJ",
                        "cardNumbers": [
                            "DPAID"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "FXRBKNKWC",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "XAVGDRVRL",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "PGXPKRE",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "DRDX",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "QSUJ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "HZPT",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "EXMG",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "TWYD",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "TAYEGETJO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "YZOT",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "contributingMember": {
                "firstName": "QPJ",
                "lastName": "SVCC",
                "role": "KDSM",
                "customerIdentifiers": {
                    "customerId": 6560,
                    "firstName": "IATIBBX",
                    "lastName": "IVRCV",
                    "loyaltyType": "JLZFVAQR",
                    "instore": {
                        "id": 8417,
                        "mobile": "JNQ",
                        "email": "BMXXM",
                        "externalId": "NLCQRNBB",
                        "cardnumber": "WBEBQR",
                        "cardexternalid": "PXOVHLLQR",
                        "cardNumbers": [
                            "IERNF"
                        ]
                    },
                    "facebook": {
                        "accounts": [
                            {
                                "accountId": "AAABR",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "web_engage": {
                        "accounts": [
                            {
                                "accountId": "MDFUIIKPFO",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "wechat": {
                        "accounts": [
                            {
                                "accountId": "APTV",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "martjack": {
                        "accounts": [
                            {
                                "accountId": "CEKOFQIK",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "tmall": {
                        "accounts": [
                            {
                                "accountId": "PBXDZ",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "toabao": {
                        "accounts": [
                            {
                                "accountId": "AUIXZI",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "jd": {
                        "accounts": [
                            {
                                "accountId": "PVTZOPUTY",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "ecommerce": {
                        "accounts": [
                            {
                                "accountId": "BUEGCQEW",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "website": {
                        "accounts": [
                            {
                                "accountId": "REIRM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    },
                    "line": {
                        "accounts": [
                            {
                                "accountId": "MOEWWZNQM",
                                "identifiers": [
                                    {}
                                ]
                            }
                        ]
                    }
                }
            },
            "triggeringActivity": {
                "name": "SKYAQOEDX",
                "identifiers": [
                    {
                        "key": "EVRAA",
                        "value": "OZJUDQH"
                    }
                ],
                "enteredBy": {
                    "id": 4493,
                    "till": {
                        "code": "KJXTSY",
                        "name": "QLSEATML"
                    },
                    "store": {
                        "code": "KKX",
                        "name": "DSMKXKSK",
                        "externalId": "IAUSMDZCFY",
                        "externalId1": "JOZJBJZ",
                        "externalId2": "WYHERZQSN"
                    }
                },
                "entityInformation": {
                    "entityType": "NBNCCMY",
                    "entityId": 4348
                },
                "additionalAttributes": [
                    {
                        "key": "XIQUZ",
                        "value": "JKFVMCWXUZ"
                    }
                ]
            },
            "loyaltyProgramDetails": {
                "id": 6178,
                "name": "XXYMNPPPF",
                "isDefault": true,
                "pointsToCurrencyRatio": 279.6401470769947,
                "tiers": [
                    {
                        "tierNumber": 8793,
                        "tierName": "HFT"
                    }
                ]
            },
            "loyaltyProgramId": 3583,
            "pointsContributedToGroup": 446.36640823491007
        },
        "eventId": "VTP",
        "orgId": 5150,
        "refId": "QRPNKMVSN",
        "apiRequestId": "DYUXNRF",
        "createdAt": 1845,
        "loyaltyEventId": "JBKIS",
        "traceAttributes": {
            "INZTJTF": "AMTYVL",
            "CXBYWD": "ZNQ",
            "SPQUS": "QEGKQSFPT",
            "ONLFEQEX": "PQDODJ",
            "PXYUL": "ZVZXMGQRLT"
        }
    }
```

# Transaction

## Transaction Added Event (transactionAdded)

Notifies when a transaction is added. For example, a transaction is made by a user.

| Parameter | Datatype | Description |

| --- | --- | --- |

| amount | Double | Net transaction amount. |

| billClientId | String | Unique id of the bill as per the client (org) end. |

| billNumber | String | Unique transaction number. The uniqueness depends on the configuration. |

| enteredAt |  |  |

| enteredBy | obj | Details of the store at which the transaction happened. |

| transactionId | long | Unique transaction ID generated internally. |

| deliveryStatus | Enum | Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED. |

| billType | Enum | Type of transaction. Supported value:  regular for loyalty transactions. ‘RETURN’ for return transactions. |

| lineItemCount | Integer | Number of line-items in the transaction. |

| Discount | Double | Discount availed for the transaction (discount amount). |

| grossAmount | Double | Transaction amount before discount. |

| currencyCode | String | ISO currency code that you want to update. For example EUR for Euro, SGD for the Singapore Dollar, CNY for China Yuan Renminbi, SAR Saudi Riyal. For more codes, seeISO currency codes. |



[ISO currency codes](https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html)

```
{
  "eventId": "7a2716a8-9cc7-4beb-999a-a8f02ad9f02d",
  "eventType": "transactionAdded",
  "consumerGroupId": null,
  "actionType": "STA RT",
  "timeStamp": 1683874800103,
  "attributes": {
    "createdAt": 1683874800089,
    "data": {
      "amount": 89000.0,
      "billNumber": "2_134577_12591538_487122",
      "enteredAt": 1683880160000,
      "transactionId": 65658570,
      "billType": "REGULAR",
      "lineItemCount": 1,
      "discount": 0.0,
      "currencyCode": "IDR",
      "enteredBy": {
        "id": 200280487,
        "till": {
          "code": "prod.shell.id.12591538.1",
          "name ": "prod.shell.id.12591538.1"
        },
        "store": {
          "code": "prod.shell.id.12591538",
          "name": "SHELL JABABEKA-1 BKS",
          "externalId": "12591538",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "customerIdentifiers": {
        "customerId": 3122204,
        "loyaltyType": "loyalty",
        "instore": {
          "mobile": "6285692704128"
        },
        "web_engage": {
          "accounts": [
            {
              "accountId": "~1341059d8",
              "identifiers ": [
                {
                  "identifierType": "cuid",
                  "identifierValue": "6285692704128"
                },
                {
                  "identifierType": "mobile",
                  "identifierValue": "6285692704128"
                }
              ]
            }
          ]
        }
      }
    },
    "eventName": "transactionAdded",
    "refId": "151195_65658570",
    "apiRequestId": "e0c09ab511e9f942526944012967b5c4",
    "orgId": 151195
  }
}
```

```
{
  "eventId": "7a2716a8-9cc7-4beb-999a-a8f02ad9f02d",
  "eventType": "transactionAdded",
  "consumerGroupId": null,
  "actionType": "STA RT",
  "timeStamp": 1683874800103,
  "attributes": {
    "createdAt": 1683874800089,
    "data": {
      "amount": 89000.0,
      "billNumber": "2_134577_12591538_487122",
      "enteredAt": 1683880160000,
      "transactionId": 65658570,
      "billType": "REGULAR",
      "lineItemCount": 1,
      "discount": 0.0,
      "currencyCode": "IDR",
      "enteredBy": {
        "id": 200280487,
        "till": {
          "code": "prod.shell.id.12591538.1",
          "name ": "prod.shell.id.12591538.1"
        },
        "store": {
          "code": "prod.shell.id.12591538",
          "name": "SHELL JABABEKA-1 BKS",
          "externalId": "12591538",
          "externalId1": "",
          "externalId2": ""
        }
      },
      "customerIdentifiers": {
        "customerId": 3122204,
        "loyaltyType": "loyalty",
        "instore": {
          "mobile": "6285692704128"
        },
        "web_engage": {
          "accounts": [
            {
              "accountId": "~1341059d8",
              "identifiers ": [
                {
                  "identifierType": "cuid",
                  "identifierValue": "6285692704128"
                },
                {
                  "identifierType": "mobile",
                  "identifierValue": "6285692704128"
                }
              ]
            }
          ]
        }
      }
    },
    "eventName": "transactionAdded",
    "refId": "151195_65658570",
    "apiRequestId": "e0c09ab511e9f942526944012967b5c4",
    "orgId": 151195
  }
}
```

## Transaction Updated Event (transactionUpdated)

Notifies when a transaction is updated. For example, a change to a line-item in a transaction.

| Parameter | Datatype | Description |

| --- | --- | --- |

| amount | Double | Net transaction amount. |

| billClientId | String | Unique id of the bill as per the client (org) end. |

| billNumber | String | Unique transaction number. The uniqueness depends on the configuration. |

| enteredAt | Long | Date and time when the transaction was entered in Epoch time format. |

| enteredBy | obj | Details of the store at which the transaction happened. |

| transactionId | long | Unique transaction ID generated internally. |

| deliveryStatus | Enum | Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED.Delivery status of the order. Value: PLACED, PROCESSED, SHIPPED, DELIVERED, RETURNED. |

| billType | Enum | Type of transaction. Supported value:  regular for loyalty transactions. ‘RETURN’ for return transactions. |

| lineItemCount | Integer | Number of line-items in the transaction. |

| Discount | Double | Discount availed for the transaction (discount amount). |

| grossAmount | Double | Transaction amount before discount. |

| currencyCode | String | ISO currency code that you want to update. For example EUR for Euro, SGD for Singapore Dollar, CNY for China Yuan Renminbi, SAR Saudi Riyal. For more codes, seeISO currency codes. |



[ISO currency codes.](https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html)

```
{
  "eventId": "b9383037-89ce-43a9-9db1-99c5ac96e2b9",
  "eventType": "transactionUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683874807284,
  "attributes": {
    "createdAt": 1683874807271,
    "data": {
      "amount": 50.0,
      "enteredAt": 1683883802000,
      "transactionId": 65658586,
      "deliveryStatus": "DELIVERED",
      "billType": "REGULAR",
      "discount": 0.0,
      "grossAmount": 0.0,
      "enteredBy": {
        "id": 200315709
      },
      "customerIdentifiers": {
        "customerId": 6675787,
        "instore": {
          "mobile": "609110544825 ",
          "externalId": "6018840184080212"
        }
      }
    },
    "eventName": "transactionUpdated",
    "refId": "151229_65658586",
    "apiRequestId": "0cb47446178e9fa4d66b985087a0f6f5",
    "orgId": 151229
  }
}
```

```
{
  "eventId": "b9383037-89ce-43a9-9db1-99c5ac96e2b9",
  "eventType": "transactionUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683874807284,
  "attributes": {
    "createdAt": 1683874807271,
    "data": {
      "amount": 50.0,
      "enteredAt": 1683883802000,
      "transactionId": 65658586,
      "deliveryStatus": "DELIVERED",
      "billType": "REGULAR",
      "discount": 0.0,
      "grossAmount": 0.0,
      "enteredBy": {
        "id": 200315709
      },
      "customerIdentifiers": {
        "customerId": 6675787,
        "instore": {
          "mobile": "609110544825 ",
          "externalId": "6018840184080212"
        }
      }
    },
    "eventName": "transactionUpdated",
    "refId": "151229_65658586",
    "apiRequestId": "0cb47446178e9fa4d66b985087a0f6f5",
    "orgId": 151229
  }
}
```

## Not-Interested Bill Added Event (notInterestedBillAdded)

Notifies when a non-loyalty transaction is made by a user. A non-loyalty or not-interested transaction refers to a purchase made by a user who is not interested in registering for the organisation's loyalty program.

```
{
  "eventName": "notInterestedBillAdded",
  "data": {
    "amount": 9511.0960402456,
    "billClientId": "MZIMAB",
    "billNumber": "RGSMQ",
    "billDate": 1503,
    "enteredAt": 1733,
    "transactionId": 7378,
    "deliveryStatus": "DDRNZJM",
    "billType": "ZNGPNUHI",
    "lineItemCount": 6252,
    "discount": 5424.653652820183,
    "grossAmount": 1025.554923312577,
    "currencyCode": "BYULP",
    "enteredBy": {
      "user": {
        "username": "MFTQNKS"
      },
      "id": 7668,
      "till": {
        "code": "PNJVSZF",
        "name": "LWXKSK"
      },
      "store": {
        "code": "EHO",
        "name": "CWZJGRRFBP",
        "externalId": "ULALNJPS",
        "externalId1": "MYMCSLEBN",
        "externalId2": "GZD"
      }
    },
    "customerIdentifiers": {
      "customerId": 9191,
      "firstName": "AMXUQD",
      "lastName": "FIIG",
      "loyaltyType": "SZGSV",
      "instore": {
        "id": 6296,
        "mobile": "MPERH",
        "email": "NRDTCIPXRF",
        "externalId": "AYCRFBIYDP",
        "cardnumber": "XKWWFAHKYS",
        "cardexternalid": "DIVQ",
        "cardNumbers": [
          "KDGWBPMNVI"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "ROL",
            "identifiers": [
              {
                "identifierType": "RDCDIG",
                "identifierValue": "RYCSJLLF"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GNNBOIEH",
            "identifiers": [
              {
                "identifierType": "CNOBXSKXF",
                "identifierValue": "FSSJ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "RATNLSNXZB",
            "identifiers": [
              {
                "identifierType": "HUNGZBIXGC",
                "identifierValue": "CYXGXRN"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "WNTBGCPZ",
            "identifiers": [
              {
                "identifierType": "GJPHRFZD",
                "identifierValue": "SYPRX"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "PENK",
            "identifiers": [
              {
                "identifierType": "ZFBXIOIP",
                "identifierValue": "ZDVGEVGM"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "KFRNVWJ",
            "identifiers": [
              {
                "identifierType": "GWPCHK",
                "identifierValue": "LEZVBXPS"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "ZBCPPDNCEE",
            "identifiers": [
              {
                "identifierType": "SXQSLUJKR",
                "identifierValue": "SOR"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "VVWU",
            "identifiers": [
              {
                "identifierType": "ZQAQDU",
                "identifierValue": "YZKB"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "TRTEMZ",
            "identifiers": [
              {
                "identifierType": "KSAMFDO",
                "identifierValue": "GBNYYKLN"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "UOULQ",
            "identifiers": [
              {
                "identifierType": "MYVZHLDPZ",
                "identifierValue": "CMJ"
              }
            ]
          }
        ]
      }
    },
    "customFields": [
      {
        "key": "DRSOD",
        "value": "FLBMAO"
      }
    ],
    "extendedFields": [
      {
        "key": "ZLPRWB",
        "value": "CCLW"
      }
    ],
    "outlierStatus": "ULQMAHABTM"
  },
  "eventId": "ZLPVW",
  "orgId": 6590,
  "refId": "FJGZUWELJ",
  "apiRequestId": "BSIYSAGPO",
  "createdAt": 8426,
  "loyaltyEventId": "HAHCUOJ",
  "traceAttributes": {
    "NNILCE": "AGLNT",
    "TNHIFECFF": "ANPQHIP",
    "YLKNQYS": "RJDV",
    "TVFIRAJBS": "QGKKN"
  }
}
```

```
{
  "eventName": "notInterestedBillAdded",
  "data": {
    "amount": 9511.0960402456,
    "billClientId": "MZIMAB",
    "billNumber": "RGSMQ",
    "billDate": 1503,
    "enteredAt": 1733,
    "transactionId": 7378,
    "deliveryStatus": "DDRNZJM",
    "billType": "ZNGPNUHI",
    "lineItemCount": 6252,
    "discount": 5424.653652820183,
    "grossAmount": 1025.554923312577,
    "currencyCode": "BYULP",
    "enteredBy": {
      "user": {
        "username": "MFTQNKS"
      },
      "id": 7668,
      "till": {
        "code": "PNJVSZF",
        "name": "LWXKSK"
      },
      "store": {
        "code": "EHO",
        "name": "CWZJGRRFBP",
        "externalId": "ULALNJPS",
        "externalId1": "MYMCSLEBN",
        "externalId2": "GZD"
      }
    },
    "customerIdentifiers": {
      "customerId": 9191,
      "firstName": "AMXUQD",
      "lastName": "FIIG",
      "loyaltyType": "SZGSV",
      "instore": {
        "id": 6296,
        "mobile": "MPERH",
        "email": "NRDTCIPXRF",
        "externalId": "AYCRFBIYDP",
        "cardnumber": "XKWWFAHKYS",
        "cardexternalid": "DIVQ",
        "cardNumbers": [
          "KDGWBPMNVI"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "ROL",
            "identifiers": [
              {
                "identifierType": "RDCDIG",
                "identifierValue": "RYCSJLLF"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GNNBOIEH",
            "identifiers": [
              {
                "identifierType": "CNOBXSKXF",
                "identifierValue": "FSSJ"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "RATNLSNXZB",
            "identifiers": [
              {
                "identifierType": "HUNGZBIXGC",
                "identifierValue": "CYXGXRN"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "WNTBGCPZ",
            "identifiers": [
              {
                "identifierType": "GJPHRFZD",
                "identifierValue": "SYPRX"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "PENK",
            "identifiers": [
              {
                "identifierType": "ZFBXIOIP",
                "identifierValue": "ZDVGEVGM"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "KFRNVWJ",
            "identifiers": [
              {
                "identifierType": "GWPCHK",
                "identifierValue": "LEZVBXPS"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "ZBCPPDNCEE",
            "identifiers": [
              {
                "identifierType": "SXQSLUJKR",
                "identifierValue": "SOR"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "VVWU",
            "identifiers": [
              {
                "identifierType": "ZQAQDU",
                "identifierValue": "YZKB"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "TRTEMZ",
            "identifiers": [
              {
                "identifierType": "KSAMFDO",
                "identifierValue": "GBNYYKLN"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "UOULQ",
            "identifiers": [
              {
                "identifierType": "MYVZHLDPZ",
                "identifierValue": "CMJ"
              }
            ]
          }
        ]
      }
    },
    "customFields": [
      {
        "key": "DRSOD",
        "value": "FLBMAO"
      }
    ],
    "extendedFields": [
      {
        "key": "ZLPRWB",
        "value": "CCLW"
      }
    ],
    "outlierStatus": "ULQMAHABTM"
  },
  "eventId": "ZLPVW",
  "orgId": 6590,
  "refId": "FJGZUWELJ",
  "apiRequestId": "BSIYSAGPO",
  "createdAt": 8426,
  "loyaltyEventId": "HAHCUOJ",
  "traceAttributes": {
    "NNILCE": "AGLNT",
    "TNHIFECFF": "ANPQHIP",
    "YLKNQYS": "RJDV",
    "TVFIRAJBS": "QGKKN"
  }
}
```

## Transaction Rejected Event (transactionRejected)

Notifies when a transaction is rejected.

```
{
        "eventName": "transactionRejected",
        "data": {
            "customerIdentifiers": {
                "customerId": 90,
                "firstName": "CNNQGEZ",
                "lastName": "PQXW",
                "loyaltyType": "DOZ",
                "instore": {
                    "id": 6608,
                    "mobile": "NSLUWGF",
                    "email": "XDQVVRLT",
                    "externalId": "EDGPJIAPSF",
                    "cardnumber": "HAQT",
                    "cardexternalid": "CLPASCFKA",
                    "cardNumbers": [
                        "FKTW"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "ASG",
                            "identifiers": [
                                {
                                    "identifierType": "AGOAZGL",
                                    "identifierValue": "BWVUMDU"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "WRI",
                            "identifiers": [
                                {
                                    "identifierType": "NAUUKTJPZ",
                                    "identifierValue": "HCBSJFBDW"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "ZOLP",
                            "identifiers": [
                                {
                                    "identifierType": "DANAXFPLF",
                                    "identifierValue": "DJEFIEZOR"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "SYZVLWQGN",
                            "identifiers": [
                                {
                                    "identifierType": "BHV",
                                    "identifierValue": "YNYYUJXJPR"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "DJXP",
                            "identifiers": [
                                {
                                    "identifierType": "PMZMJ",
                                    "identifierValue": "XVKZRWJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "AQJD",
                            "identifiers": [
                                {
                                    "identifierType": "UNKMR",
                                    "identifierValue": "MJZG"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "TZGP",
                            "identifiers": [
                                {
                                    "identifierType": "YZJHL",
                                    "identifierValue": "ZYHCUKZZ"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "BXTYHDI",
                            "identifiers": [
                                {
                                    "identifierType": "BPZG",
                                    "identifierValue": "ATPZ"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "EXZRURCY",
                            "identifiers": [
                                {
                                    "identifierType": "BYXFCPAEK",
                                    "identifierValue": "CKDMTRUBB"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "NJD",
                            "identifiers": [
                                {
                                    "identifierType": "ARGJJYWN",
                                    "identifierValue": "NDORVKDJAH"
                                }
                            ]
                        }
                    ]
                }
            },
            "eventDateTime": "JHSIB",
            "billNumber": "BWMIWH",
            "rejectionType": "NFJ",
            "rejectionDetails": [
                {
                    "rejectionReason": "QITIFBIBDJ",
                    "reasonDetails": "TDZISVBS"
                }
            ],
            "retrialCount": 6284,
            "triggeringActivity": {
                "name": "UTTUZSBS",
                "identifiers": [
                    {
                        "key": "QNAWENU",
                        "value": "FRGOFCKKSK"
                    }
                ],
                "enteredBy": {
                    "id": 2471,
                    "till": {
                        "code": "XLBTXXATJ",
                        "name": "KWVYCIVWBO"
                    },
                    "store": {
                        "code": "FYEOUL",
                        "name": "PAYDQ",
                        "externalId": "QFDJV",
                        "externalId1": "VYUZFCOD",
                        "externalId2": "ZLYY"
                    }
                },
                "entityInformation": {
                    "entityType": "WWUWWPR",
                    "entityId": 1238
                },
                "additionalAttributes": [
                    {
                        "key": "CIRLEOO",
                        "value": "ORDUGBVU"
                    }
                ]
            }
        },
        "eventId": "OALOT",
        "orgId": 8078,
        "refId": "NOE",
        "apiRequestId": "DZAMIMDS",
        "createdAt": 7772,
        "loyaltyEventId": "NGCGBPTBI",
        "traceAttributes": {
            "FANKP": "ANY",
            "CQMWGE": "HCGZ",
            "IBVHSDVRND": "JAN",
            "GSQD": "ONSGR"
        }
    }
```

```
{
        "eventName": "transactionRejected",
        "data": {
            "customerIdentifiers": {
                "customerId": 90,
                "firstName": "CNNQGEZ",
                "lastName": "PQXW",
                "loyaltyType": "DOZ",
                "instore": {
                    "id": 6608,
                    "mobile": "NSLUWGF",
                    "email": "XDQVVRLT",
                    "externalId": "EDGPJIAPSF",
                    "cardnumber": "HAQT",
                    "cardexternalid": "CLPASCFKA",
                    "cardNumbers": [
                        "FKTW"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "ASG",
                            "identifiers": [
                                {
                                    "identifierType": "AGOAZGL",
                                    "identifierValue": "BWVUMDU"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "WRI",
                            "identifiers": [
                                {
                                    "identifierType": "NAUUKTJPZ",
                                    "identifierValue": "HCBSJFBDW"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "ZOLP",
                            "identifiers": [
                                {
                                    "identifierType": "DANAXFPLF",
                                    "identifierValue": "DJEFIEZOR"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "SYZVLWQGN",
                            "identifiers": [
                                {
                                    "identifierType": "BHV",
                                    "identifierValue": "YNYYUJXJPR"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "DJXP",
                            "identifiers": [
                                {
                                    "identifierType": "PMZMJ",
                                    "identifierValue": "XVKZRWJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "AQJD",
                            "identifiers": [
                                {
                                    "identifierType": "UNKMR",
                                    "identifierValue": "MJZG"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "TZGP",
                            "identifiers": [
                                {
                                    "identifierType": "YZJHL",
                                    "identifierValue": "ZYHCUKZZ"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "BXTYHDI",
                            "identifiers": [
                                {
                                    "identifierType": "BPZG",
                                    "identifierValue": "ATPZ"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "EXZRURCY",
                            "identifiers": [
                                {
                                    "identifierType": "BYXFCPAEK",
                                    "identifierValue": "CKDMTRUBB"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "NJD",
                            "identifiers": [
                                {
                                    "identifierType": "ARGJJYWN",
                                    "identifierValue": "NDORVKDJAH"
                                }
                            ]
                        }
                    ]
                }
            },
            "eventDateTime": "JHSIB",
            "billNumber": "BWMIWH",
            "rejectionType": "NFJ",
            "rejectionDetails": [
                {
                    "rejectionReason": "QITIFBIBDJ",
                    "reasonDetails": "TDZISVBS"
                }
            ],
            "retrialCount": 6284,
            "triggeringActivity": {
                "name": "UTTUZSBS",
                "identifiers": [
                    {
                        "key": "QNAWENU",
                        "value": "FRGOFCKKSK"
                    }
                ],
                "enteredBy": {
                    "id": 2471,
                    "till": {
                        "code": "XLBTXXATJ",
                        "name": "KWVYCIVWBO"
                    },
                    "store": {
                        "code": "FYEOUL",
                        "name": "PAYDQ",
                        "externalId": "QFDJV",
                        "externalId1": "VYUZFCOD",
                        "externalId2": "ZLYY"
                    }
                },
                "entityInformation": {
                    "entityType": "WWUWWPR",
                    "entityId": 1238
                },
                "additionalAttributes": [
                    {
                        "key": "CIRLEOO",
                        "value": "ORDUGBVU"
                    }
                ]
            }
        },
        "eventId": "OALOT",
        "orgId": 8078,
        "refId": "NOE",
        "apiRequestId": "DZAMIMDS",
        "createdAt": 7772,
        "loyaltyEventId": "NGCGBPTBI",
        "traceAttributes": {
            "FANKP": "ANY",
            "CQMWGE": "HCGZ",
            "IBVHSDVRND": "JAN",
            "GSQD": "ONSGR"
        }
    }
```

## Rejected Transaction Retrigger Event (rejectedTransactionRetrigger)

Notifies when a rejected transaction is attempted again.

```
{
        "eventName": "rejectedTransactionRetrigger",
        "data": {
            "customerIdentifiers": {
                "customerId": 9595,
                "firstName": "QEJGUGHY",
                "lastName": "THVC",
                "loyaltyType": "APQIUHE",
                "instore": {
                    "id": 2835,
                    "mobile": "FTUIGLWD",
                    "email": "ANIPX",
                    "externalId": "DFGJB",
                    "cardnumber": "EFQPZYZF",
                    "cardexternalid": "UAYUK",
                    "cardNumbers": [
                        "OYWBJEWGIU"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "OSNN",
                            "identifiers": [
                                {
                                    "identifierType": "BAOL",
                                    "identifierValue": "MNOZBSFPAC"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "ZQFRLUM",
                            "identifiers": [
                                {
                                    "identifierType": "RKGAZJT",
                                    "identifierValue": "TRPZ"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UKUDHYD",
                            "identifiers": [
                                {
                                    "identifierType": "STWXLN",
                                    "identifierValue": "CGOCCBPS"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "RYHBEYKGQ",
                            "identifiers": [
                                {
                                    "identifierType": "DQDNYUIBL",
                                    "identifierValue": "DWQJRYQPR"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "BRAVYC",
                            "identifiers": [
                                {
                                    "identifierType": "QWHIIXCVF",
                                    "identifierValue": "PSPDV"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "EECAGMAD",
                            "identifiers": [
                                {
                                    "identifierType": "TFC",
                                    "identifierValue": "CFBSQNBQRD"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VQZONUJIB",
                            "identifiers": [
                                {
                                    "identifierType": "CYBUXMOF",
                                    "identifierValue": "XBICTDHNA"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "GJW",
                            "identifiers": [
                                {
                                    "identifierType": "OWFXY",
                                    "identifierValue": "GAEEN"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "ALHXBZQSTS",
                            "identifiers": [
                                {
                                    "identifierType": "DTVPMET",
                                    "identifierValue": "AXJYVR"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "JPIEAWV",
                            "identifiers": [
                                {
                                    "identifierType": "WTPCZHBMJ",
                                    "identifierValue": "JNZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "eventDateTime": "TIDHRBDOF",
            "billNumber": "JAMKHUFNOP",
            "rejectionType": "KNXUYAA",
            "rejectionDetailsOnRetrigger": [
                {
                    "rejectionReason": "OBIL",
                    "reasonDetails": "LMQEYFF"
                }
            ],
            "retrialCount": 866,
            "triggeringActivity": {
                "name": "HQTLAVU",
                "identifiers": [
                    {
                        "key": "JMHN",
                        "value": "WNZQEUF"
                    }
                ],
                "enteredBy": {
                    "id": 8342,
                    "till": {
                        "code": "RJLOI",
                        "name": "OBZAWOQDN"
                    },
                    "store": {
                        "code": "QIWLI",
                        "name": "AJMYRS",
                        "externalId": "VLNLOOWLL",
                        "externalId1": "PMZDHIY",
                        "externalId2": "HRI"
                    }
                },
                "entityInformation": {
                    "entityType": "PYSJUYUXDN",
                    "entityId": 7530
                },
                "additionalAttributes": [
                    {
                        "key": "DCI",
                        "value": "KDYCNBUFPZ"
                    }
                ]
            },
            "retriggerId": 7372
        },
        "eventId": "PVBYY",
        "orgId": 798,
        "refId": "XLA",
        "apiRequestId": "JQAN",
        "createdAt": 6409,
        "loyaltyEventId": "QWKWI",
        "traceAttributes": {
            "HNEHCDMBFQ": "AXCKBG",
            "VSEV": "RCO",
            "SDQLIPN": "IGYVFCJIPN"
        }
    }
```

```
{
        "eventName": "rejectedTransactionRetrigger",
        "data": {
            "customerIdentifiers": {
                "customerId": 9595,
                "firstName": "QEJGUGHY",
                "lastName": "THVC",
                "loyaltyType": "APQIUHE",
                "instore": {
                    "id": 2835,
                    "mobile": "FTUIGLWD",
                    "email": "ANIPX",
                    "externalId": "DFGJB",
                    "cardnumber": "EFQPZYZF",
                    "cardexternalid": "UAYUK",
                    "cardNumbers": [
                        "OYWBJEWGIU"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "OSNN",
                            "identifiers": [
                                {
                                    "identifierType": "BAOL",
                                    "identifierValue": "MNOZBSFPAC"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "ZQFRLUM",
                            "identifiers": [
                                {
                                    "identifierType": "RKGAZJT",
                                    "identifierValue": "TRPZ"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UKUDHYD",
                            "identifiers": [
                                {
                                    "identifierType": "STWXLN",
                                    "identifierValue": "CGOCCBPS"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "RYHBEYKGQ",
                            "identifiers": [
                                {
                                    "identifierType": "DQDNYUIBL",
                                    "identifierValue": "DWQJRYQPR"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "BRAVYC",
                            "identifiers": [
                                {
                                    "identifierType": "QWHIIXCVF",
                                    "identifierValue": "PSPDV"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "EECAGMAD",
                            "identifiers": [
                                {
                                    "identifierType": "TFC",
                                    "identifierValue": "CFBSQNBQRD"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VQZONUJIB",
                            "identifiers": [
                                {
                                    "identifierType": "CYBUXMOF",
                                    "identifierValue": "XBICTDHNA"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "GJW",
                            "identifiers": [
                                {
                                    "identifierType": "OWFXY",
                                    "identifierValue": "GAEEN"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "ALHXBZQSTS",
                            "identifiers": [
                                {
                                    "identifierType": "DTVPMET",
                                    "identifierValue": "AXJYVR"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "JPIEAWV",
                            "identifiers": [
                                {
                                    "identifierType": "WTPCZHBMJ",
                                    "identifierValue": "JNZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "eventDateTime": "TIDHRBDOF",
            "billNumber": "JAMKHUFNOP",
            "rejectionType": "KNXUYAA",
            "rejectionDetailsOnRetrigger": [
                {
                    "rejectionReason": "OBIL",
                    "reasonDetails": "LMQEYFF"
                }
            ],
            "retrialCount": 866,
            "triggeringActivity": {
                "name": "HQTLAVU",
                "identifiers": [
                    {
                        "key": "JMHN",
                        "value": "WNZQEUF"
                    }
                ],
                "enteredBy": {
                    "id": 8342,
                    "till": {
                        "code": "RJLOI",
                        "name": "OBZAWOQDN"
                    },
                    "store": {
                        "code": "QIWLI",
                        "name": "AJMYRS",
                        "externalId": "VLNLOOWLL",
                        "externalId1": "PMZDHIY",
                        "externalId2": "HRI"
                    }
                },
                "entityInformation": {
                    "entityType": "PYSJUYUXDN",
                    "entityId": 7530
                },
                "additionalAttributes": [
                    {
                        "key": "DCI",
                        "value": "KDYCNBUFPZ"
                    }
                ]
            },
            "retriggerId": 7372
        },
        "eventId": "PVBYY",
        "orgId": 798,
        "refId": "XLA",
        "apiRequestId": "JQAN",
        "createdAt": 6409,
        "loyaltyEventId": "QWKWI",
        "traceAttributes": {
            "HNEHCDMBFQ": "AXCKBG",
            "VSEV": "RCO",
            "SDQLIPN": "IGYVFCJIPN"
        }
    }
```

## Retro Bill Added Event (retroBillAdded)

Notifies when an older transaction is added against the user.

```
{
        "eventName": "retroBillAdded",
        "data": {
            "amount": 246.66453103260665,
            "billClientId": "EFJNGO",
            "billNumber": "XADYJHTNZ",
            "billDate": 1157,
            "enteredAt": 3765,
            "transactionId": 5650,
            "deliveryStatus": "BLQMATBU",
            "billType": "GMV",
            "lineItemCount": 8791,
            "discount": 8154.318560422623,
            "grossAmount": 8109.952753195439,
            "currencyCode": "YBND",
            "enteredBy": {
                "user": {
                    "username": "PDBLNVJOMJ"
                },
                "id": 8822,
                "till": {
                    "code": "PYSIVN",
                    "name": "XLSCOHGLQX"
                },
                "store": {
                    "code": "PSHIA",
                    "name": "GBJIQ",
                    "externalId": "IPHXYWR",
                    "externalId1": "YXAV",
                    "externalId2": "GVYYMAF"
                }
            },
            "customerIdentifiers": {
                "customerId": 7264,
                "firstName": "PVKZNFPPTL",
                "lastName": "TCJHTJY",
                "loyaltyType": "ZBLKXAQ",
                "instore": {
                    "id": 2582,
                    "mobile": "ROFWZ",
                    "email": "VTPP",
                    "externalId": "USDYHBYUG",
                    "cardnumber": "IVWBJFA",
                    "cardexternalid": "TVQVR",
                    "cardNumbers": [
                        "VATLAPHTK"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "MHHRRNJ",
                            "identifiers": [
                                {
                                    "identifierType": "TWFDWZGJ",
                                    "identifierValue": "QCXFAKBG"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "KNJBNFL",
                            "identifiers": [
                                {
                                    "identifierType": "PUNLANYWWF",
                                    "identifierValue": "JDCP"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "ZEHSPZISU",
                            "identifiers": [
                                {
                                    "identifierType": "GQBXBW",
                                    "identifierValue": "WBWEEGISH"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CXTIKNECEZ",
                            "identifiers": [
                                {
                                    "identifierType": "SUTZDRYYTL",
                                    "identifierValue": "QMTIN"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "WHWJ",
                            "identifiers": [
                                {
                                    "identifierType": "DOUSHFNSI",
                                    "identifierValue": "XEL"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "IVHIFFM",
                            "identifiers": [
                                {
                                    "identifierType": "VANKJHXR",
                                    "identifierValue": "UIZRV"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "BSFKRKK",
                            "identifiers": [
                                {
                                    "identifierType": "WMZPVYCLNS",
                                    "identifierValue": "VOJ"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "JUXCZQI",
                            "identifiers": [
                                {
                                    "identifierType": "WJGCEWGRD",
                                    "identifierValue": "UCMPSQ"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TMUQQK",
                            "identifiers": [
                                {
                                    "identifierType": "ITMASKHY",
                                    "identifierValue": "YGTPVBCNCW"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "CYQNJXF",
                            "identifiers": [
                                {
                                    "identifierType": "RKMW",
                                    "identifierValue": "AFXL"
                                }
                            ]
                        }
                    ]
                }
            },
            "customFields": [
                {
                    "key": "CURI",
                    "value": "BSSCEBNI"
                }
            ],
            "extendedFields": [
                {
                    "key": "ZEEJJXW",
                    "value": "XSP"
                }
            ],
            "outlierStatus": "WJLRMBFI"
        },
        "eventId": "SZGDD",
        "orgId": 708,
        "refId": "GABCYPOGH",
        "apiRequestId": "JSNJHDS",
        "createdAt": 2888,
        "loyaltyEventId": "PZNF",
        "traceAttributes": {
            "DEH": "HEPGWRPKG",
            "SUUMEX": "YBNSTCBE",
            "AXSIBTZFR": "DLYRHXGN"
        }
    }
```

```
{
        "eventName": "retroBillAdded",
        "data": {
            "amount": 246.66453103260665,
            "billClientId": "EFJNGO",
            "billNumber": "XADYJHTNZ",
            "billDate": 1157,
            "enteredAt": 3765,
            "transactionId": 5650,
            "deliveryStatus": "BLQMATBU",
            "billType": "GMV",
            "lineItemCount": 8791,
            "discount": 8154.318560422623,
            "grossAmount": 8109.952753195439,
            "currencyCode": "YBND",
            "enteredBy": {
                "user": {
                    "username": "PDBLNVJOMJ"
                },
                "id": 8822,
                "till": {
                    "code": "PYSIVN",
                    "name": "XLSCOHGLQX"
                },
                "store": {
                    "code": "PSHIA",
                    "name": "GBJIQ",
                    "externalId": "IPHXYWR",
                    "externalId1": "YXAV",
                    "externalId2": "GVYYMAF"
                }
            },
            "customerIdentifiers": {
                "customerId": 7264,
                "firstName": "PVKZNFPPTL",
                "lastName": "TCJHTJY",
                "loyaltyType": "ZBLKXAQ",
                "instore": {
                    "id": 2582,
                    "mobile": "ROFWZ",
                    "email": "VTPP",
                    "externalId": "USDYHBYUG",
                    "cardnumber": "IVWBJFA",
                    "cardexternalid": "TVQVR",
                    "cardNumbers": [
                        "VATLAPHTK"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "MHHRRNJ",
                            "identifiers": [
                                {
                                    "identifierType": "TWFDWZGJ",
                                    "identifierValue": "QCXFAKBG"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "KNJBNFL",
                            "identifiers": [
                                {
                                    "identifierType": "PUNLANYWWF",
                                    "identifierValue": "JDCP"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "ZEHSPZISU",
                            "identifiers": [
                                {
                                    "identifierType": "GQBXBW",
                                    "identifierValue": "WBWEEGISH"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CXTIKNECEZ",
                            "identifiers": [
                                {
                                    "identifierType": "SUTZDRYYTL",
                                    "identifierValue": "QMTIN"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "WHWJ",
                            "identifiers": [
                                {
                                    "identifierType": "DOUSHFNSI",
                                    "identifierValue": "XEL"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "IVHIFFM",
                            "identifiers": [
                                {
                                    "identifierType": "VANKJHXR",
                                    "identifierValue": "UIZRV"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "BSFKRKK",
                            "identifiers": [
                                {
                                    "identifierType": "WMZPVYCLNS",
                                    "identifierValue": "VOJ"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "JUXCZQI",
                            "identifiers": [
                                {
                                    "identifierType": "WJGCEWGRD",
                                    "identifierValue": "UCMPSQ"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TMUQQK",
                            "identifiers": [
                                {
                                    "identifierType": "ITMASKHY",
                                    "identifierValue": "YGTPVBCNCW"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "CYQNJXF",
                            "identifiers": [
                                {
                                    "identifierType": "RKMW",
                                    "identifierValue": "AFXL"
                                }
                            ]
                        }
                    ]
                }
            },
            "customFields": [
                {
                    "key": "CURI",
                    "value": "BSSCEBNI"
                }
            ],
            "extendedFields": [
                {
                    "key": "ZEEJJXW",
                    "value": "XSP"
                }
            ],
            "outlierStatus": "WJLRMBFI"
        },
        "eventId": "SZGDD",
        "orgId": 708,
        "refId": "GABCYPOGH",
        "apiRequestId": "JSNJHDS",
        "createdAt": 2888,
        "loyaltyEventId": "PZNF",
        "traceAttributes": {
            "DEH": "HEPGWRPKG",
            "SUUMEX": "YBNSTCBE",
            "AXSIBTZFR": "DLYRHXGN"
        }
    }
```

# Points

## Points Issued Event (pointsIssued)

Notifies when points are issued to a user.

| Parameter | Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| eventType | String | Type of event, e.g., "50660_pointsIssued". |

| consumerGroupId |  | Identifier for a consumer group (empty in this case). |

| actionType | String | Type of action, e.g., "START". |

| timeStamp | Number | Timestamp of the event. |

| attributes | Object | Additional attributes related to the event. |

| - createdAt | Number | Timestamp when the event was created. |

| - data | Object | Data related to the event. |

| -- customerIdentifiers | Object | Identifiers related to the customer. |

| --- customerId | Number | Unique identifier for the customer. |

| -- entityInformation | Object | Information about the entity involved in the event. |

| --- entityType | String | Type of entity, e.g., "USER". |

| --- entityId | Number | Unique identifier for the entity. |

| -- triggeringActivity | Object | Details about the activity that triggered the event. |

| --- name | String | Name of the triggering activity. |

| --- identifiers | Array | Identifiers related to the activity. |

| ---- key | String | Key identifier, e.g., "CustomerId". |

| ---- value | String | Value of the key identifier. |

| --- enteredBy | Object | User who entered the activity. |

| ---- id | Number | Unique identifier for the user. |

| --- additionalAttributes | Array | Additional attributes related to the activity. |

| ---- key | String | Key attribute, e.g., "customerId". |

| ---- value | String | Value of the key attribute. |

| -- loyaltyProgramDetails | Object | Details about the loyalty program. |

| --- id | Number | Unique identifier for the program. |

| --- name | String | Name of the program. |

| --- isDefault | Boolean | Indicates if it's the default program. |

| --- pointsToCurrencyRatio | Number | Points-to-currency conversion ratio. |

| --- tiers | Array | List of program tiers. |

| ---- tierNumber | Number | Tier number, e.g., 1. |

| ---- tierName | String | Tier name, e.g., "Silver". |

| -- loyaltyProgramId | Number | Unique identifier for the loyalty program. |

| -- programCurrentPoints | Number | Current points in the loyalty program. |

| -- programLifetimePoints | Number | Lifetime points in the loyalty program. |

| -- totalPointsIssued | Number | Total points issued in the event. |

| -- regularPointsIssued | Number | Regular points issued in the event. |

| -- regularPointsBreakup | Array | Breakdown of regular points issued (empty in this case). |

| -- promotionalPointsIssued | Array | Promotional points issued in the event. |

| --- promotionIdentifier | String | Identifier for the promotion. |

| --- promotionType | String | Type of promotion, e.g., "CUSTOMER_PROMOTION". |

| --- promotionPoints | Number | Points awarded for the promotion. |

| --- promotionPointsExpiryDate | String | Expiry date of the promotion points. |

| -- promisedPointsIssued | Array | Promised points issued in the event (empty in this case). |

| -- behavioralEventAttributes* | Object | Attributes related to behavioral events. |

| --- webhookId | String | Identifier for the webhook. |

| --- event_flag | Number | Event flag. |

| --- identifier_value | String | Identifier value, e.g., "unionId918821563441". |

| --- requestId | String | Unique identifier for the request. |

| --- event_name | String | Name of the event. |

| --- startTime | Number | Start time of the event. |

| loyaltyEventId | String | Identifier for the loyalty event. |

| eventName | String | Name of the event, e.g., "pointsIssued". |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Identifier for the API request. |

| orgId | Number | Unique identifier for the organization. |



*The addition ofbehavioralEventAttributesis done on a demand basis. To enable it, you need to enable the configurationawardedReferenceEnrichmentEnabled. Raise a JIRA ticket with the sustenance team to enable this feature.

`behavioralEventAttributes`

`awardedReferenceEnrichmentEnabled`

Example of points Issued on Transaction/Add

```
{
  "eventId": "a5557ce1-e364-4688-b7ed-f6e3324580b3",
  "eventLogId": 34804692,
  "eventType": "pointsIssued",
  "consumerGroupId": null,
  "actionType": "START",
  " timeStamp": 1683874800263,
  "attributes": {
    "createdAt": 1683874800251,
    "data": {
      "customerIdentifiers": {
        "customerId": 87884897,
        "instore": {
          "mobile": "84934720774"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 87884897
      },
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "BillId",
            "value": "330676226"
          },
          {
            "key": "BillLineItemId",
            "value": "983202640"
          },
          {
            "key": "billNumber",
            "value": "150956_1683874799412"
          }
        ],
        "enteredBy": {
          "id": 200300301
        },
        "entityInformation": {
          "entityType": "USER",
          "entityId": 87884897
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 838,
        "name": "Jotun VNDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "New"
          },
          {
            "tierNumber": 2,
            "tierName": "Master Painter"
          },
          {
            "tierNumber": 3,
            "tierName": "VIP"
          },
          {
            "tierNumber": 4,
            "tierName": "Super VIP"
          },
          {
            "tierNumber": 5,
            "tierName": " Platinum"
          }
        ]
      },
      "loyaltyProgramId": 838,
      "programCurrentPoints": 165.0,
      "programLifetimePoints": 665.0,
      "totalPointsIssued": 60.0,
      "regularPointsIssued": 60.0,
      "regularPointsBreakup": [
        {
          "po ints": 60.0,
          "expiryAt": "2024-05-31"
        }
      ],
      "promotionalPointsIssued": [
        
      ],
      "promisedPointsIssued": [
        
      ]
    },
    "loyaltyEventId": "tJVGuVbhdB",
    "eventName": "pointsIssued",
    "refId": "150956_tJV GuVbhdB",
    "apiRequestId": "2ba4294402c186d4eae95cb5b3c44dc7",
    "orgId": 150956
  }
}
```

```
{
  "eventId": "a5557ce1-e364-4688-b7ed-f6e3324580b3",
  "eventLogId": 34804692,
  "eventType": "pointsIssued",
  "consumerGroupId": null,
  "actionType": "START",
  " timeStamp": 1683874800263,
  "attributes": {
    "createdAt": 1683874800251,
    "data": {
      "customerIdentifiers": {
        "customerId": 87884897,
        "instore": {
          "mobile": "84934720774"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 87884897
      },
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "BillId",
            "value": "330676226"
          },
          {
            "key": "BillLineItemId",
            "value": "983202640"
          },
          {
            "key": "billNumber",
            "value": "150956_1683874799412"
          }
        ],
        "enteredBy": {
          "id": 200300301
        },
        "entityInformation": {
          "entityType": "USER",
          "entityId": 87884897
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 838,
        "name": "Jotun VNDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "New"
          },
          {
            "tierNumber": 2,
            "tierName": "Master Painter"
          },
          {
            "tierNumber": 3,
            "tierName": "VIP"
          },
          {
            "tierNumber": 4,
            "tierName": "Super VIP"
          },
          {
            "tierNumber": 5,
            "tierName": " Platinum"
          }
        ]
      },
      "loyaltyProgramId": 838,
      "programCurrentPoints": 165.0,
      "programLifetimePoints": 665.0,
      "totalPointsIssued": 60.0,
      "regularPointsIssued": 60.0,
      "regularPointsBreakup": [
        {
          "po ints": 60.0,
          "expiryAt": "2024-05-31"
        }
      ],
      "promotionalPointsIssued": [
        
      ],
      "promisedPointsIssued": [
        
      ]
    },
    "loyaltyEventId": "tJVGuVbhdB",
    "eventName": "pointsIssued",
    "refId": "150956_tJV GuVbhdB",
    "apiRequestId": "2ba4294402c186d4eae95cb5b3c44dc7",
    "orgId": 150956
  }
}
```

## Points Redeemed Event (pointsRedeemed)

Notifies when a user has redeemed points.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| eventType | String | Type of event (e.g., "pointsRedeemed"). |

| consumerGroupId | Integer | Identifier for the consumer group (null if not applicable). |

| actionType | String | Action type of the event (e.g., "START"). |

| timeStamp | Integer | Timestamp of the event in milliseconds since epoch. |

| attributes | Object | Contains details about the attributes of the event. |

| - createdAt | Integer | Timestamp when the event was created (milliseconds since epoch). |

| - data | Object | Contains specific data related to the event. |

| -- customerIdentifiers | Object | Contains identifiers for the customer. |

| --- customerId | Integer | Unique identifier for the customer. |

| --- instore | Object | Contains in-store customer information. |

| ---- mobile | String | Mobile number of the customer. |

| ---- email | String | Email address of the customer. |

| -- entityInformation | Object | Contains information about the entity involved in the event. |

| --- entityType | String | Type of the entity (e.g., "USER"). |

| --- entityId | Integer | Unique identifier for the entity. |

| -- triggeringActivity | Object | It contains information about the activity that triggered the event. |

| --- name | String | Name of the triggering activity (e.g., "PointsRedemption"). |

| --- identifiers | Array of Objects | List of identifiers related to the triggering activity. |

| ---- key | String | Key identifier (e.g., "bill Id"). |

| ---- value | String | Value corresponding to the key (e.g., "-1"). |

| --- enteredBy | Object | Information about the user who entered the activity. |

| ---- id | Integer | Unique identifier for the user who entered the activity. |

| --- entityInformation | Object | Contains information about the entity related to the triggering activity. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the entity. |

| --- additionalAttributes | Array | Additional attributes related to the triggering activity (empty in this case). |

| -- loyaltyProgramDetails | Object | Contains details about the loyalty program. |

| --- id | Integer | Unique identifier for the loyalty program. |

| --- name | String | Name of the loyalty program (e.g., "Louis PhilippeDefaultProgram"). |

| --- isDefault | Boolean | Indicates if the program is the default program. |

| --- pointsToCurrencyRatio | Float | Points-to-currency conversion ratio.. |

| --- tiers | Array of Objects | List of tiers in the loyalty program. |

| ---- tierNumber | Integer | Number of the tier (e.g., 1 for Silver). |

| ---- tierName | String | Name of the tier (e.g., "Silver"). |

| loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| totalPointsRedeemed | Float | Total points redeemed in this transaction. |

| redemptionSummaryId | Integer | Unique identifier for the redemption summary. |

| redeemedPointsCurrencyValue | Float | Currency value of the redeemed points. |

| redemptionNotes | String | Notes regarding the redemption (empty in this case). |

| redemptionBillNumber | String | Bill number associated with the redemption. |

| isGroupRedemption | Boolean | Indicates if the redemption is part of a group. |

| -- redemptionFromEarningPrograms | Array of Objects | Details of redemption from earning programs. |

| --- programId | Integer | Unique identifier for the earning program. |

| --- points Redeemed | Float | Total points redeemed from the earning program. |

| --- programCurrentPoints | Float | Current points in the program after redemption. |

| loyaltyEventId | String | Unique identifier for the loyalty event. |

| eventName | String | Name of the event (e.g., "pointsRedeemed"). |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purpose |

| apiRequestId | String | Unique identifier for the API request. |

| orgId | Integer | Unique identifier for the organization. |



Sample schema of group program redemption.

```
{
  "eventId": "3b231837-db52-48cb-a405-cc162f2e1bd6",
  "eventLogId": 34805323,
  "eventType": "pointsRedeemed",
  "consumerGroupId": null,
  "actionType": " START",
  "timeStamp": 1683874869558,
  "attributes": {
    "createdAt": 1683874869545,
    "data": {
      "customerIdentifiers": {
        "customerId": 161943766,
        "instore": {
          "mobile": "917984690285",
          "email ": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 161943766
      },
      "triggeringActivity": {
        "name": "PointsRedemption",
        "identifiers": [
          {
            "key": "bill Id",
            "value": "-1"
          },
          {
            "key": "redemptionId",
            "value": "xMQy8y"
          }
        ],
        "enteredBy": {
          "id": 200316761
        },
        "entityInformation": {
          "entityType": "USER",
          "entityId": 161943766
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 101,
        "name": "Louis PhilippeDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 0.5,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": " Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 101,
      "totalPointsRedeemed": 1500.0,
      "redemptionSummaryId": 9547005,
      "redeemedPointsCurrencyValue": 750.0,
      "redemptionNotes": "",
      "redemptionBillNumber": "SA8269614",
      "isGroupRedemption": false,
      "redemptionFromEarningPrograms": [
        {
          "programId": 101,
          "points Redeemed": 1500.0,
          "programCurrentPoints": 0.0
        }
      ]
    },
    "loyaltyEventId": "SHjlZN6x2e",
    "eventName": "pointsRedeemed",
    "refId": "150098_SHjlZN6x2e",
    "apiRequestId": "6f2131aeb479a10e5987a f16c915904b",
    "orgId": 150098
  }
}
```

```
{
  "eventId": "3b231837-db52-48cb-a405-cc162f2e1bd6",
  "eventLogId": 34805323,
  "eventType": "pointsRedeemed",
  "consumerGroupId": null,
  "actionType": " START",
  "timeStamp": 1683874869558,
  "attributes": {
    "createdAt": 1683874869545,
    "data": {
      "customerIdentifiers": {
        "customerId": 161943766,
        "instore": {
          "mobile": "917984690285",
          "email ": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 161943766
      },
      "triggeringActivity": {
        "name": "PointsRedemption",
        "identifiers": [
          {
            "key": "bill Id",
            "value": "-1"
          },
          {
            "key": "redemptionId",
            "value": "xMQy8y"
          }
        ],
        "enteredBy": {
          "id": 200316761
        },
        "entityInformation": {
          "entityType": "USER",
          "entityId": 161943766
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 101,
        "name": "Louis PhilippeDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 0.5,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": " Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 101,
      "totalPointsRedeemed": 1500.0,
      "redemptionSummaryId": 9547005,
      "redeemedPointsCurrencyValue": 750.0,
      "redemptionNotes": "",
      "redemptionBillNumber": "SA8269614",
      "isGroupRedemption": false,
      "redemptionFromEarningPrograms": [
        {
          "programId": 101,
          "points Redeemed": 1500.0,
          "programCurrentPoints": 0.0
        }
      ]
    },
    "loyaltyEventId": "SHjlZN6x2e",
    "eventName": "pointsRedeemed",
    "refId": "150098_SHjlZN6x2e",
    "apiRequestId": "6f2131aeb479a10e5987a f16c915904b",
    "orgId": 150098
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

Sample schema of Participating Program Redemption

```
{
   "eventName":"pointsRedeemed",
   "eventId":"ABC-87484sdas&$",
   "eventLogId": 34805312
   "orgId":1655,
   "refId":"1655_684494987",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "Instore":{
            "mobile":"919740000000",
            "email":"[email protected]",
            "externalId":"536236462453"
         },
         "wechat":{
            "accounts":[
               {
                  "accountId":"HDHSDHS32347287D",
                  "identifiers":[
                     {
                        "identifierType":"wechatId",
                        "identifierValue":"SGHDGAHA74278sdfG"
                     }
                  ]
               },
               {
                  "accountId":"JKLMNOPuy4y3554Y",
                  "identifiers":[
                     {
                        "identifierType":"wechatId",
                        "identifierValue":"cbdhdhhad74278sdfj"
                     }
                  ]
               }
            ]
         }
      },
      "triggeringActivity":{
         "name":"pointsRedemption",
         "identifiers":[
            {
               "key":"billId",
               "value":"123456"
            }
         ],
         "enteredAt":{
            "id":949,
            "store":{
               "code":"str1.brand",
               "name":"str1.brand",
               "externalId":"DFSDHGFSH6642664617",
               "externalId1":"GDGSDHDGH3744277474",
               "externalId2":"GHSDGHGHH6776246444"
            },
            "till":{
               "code":"till1.str1.brand",
               "name":"till1.str1.brand"
            }
         }
      },
      "loyaltyProgramId":1487,
      "totalPointsRedeemed":235,
      "redeemedPointsCurrencyValue":470,
      "redemptionFromEarningPrograms":[
         {
            "programId":1487,
            "pointsRedeemed":235,
            "programCurrentPoints":500
         }
      ]
   }
}
```

```
{
   "eventName":"pointsRedeemed",
   "eventId":"ABC-87484sdas&$",
   "eventLogId": 34805312
   "orgId":1655,
   "refId":"1655_684494987",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "Instore":{
            "mobile":"919740000000",
            "email":"[email protected]",
            "externalId":"536236462453"
         },
         "wechat":{
            "accounts":[
               {
                  "accountId":"HDHSDHS32347287D",
                  "identifiers":[
                     {
                        "identifierType":"wechatId",
                        "identifierValue":"SGHDGAHA74278sdfG"
                     }
                  ]
               },
               {
                  "accountId":"JKLMNOPuy4y3554Y",
                  "identifiers":[
                     {
                        "identifierType":"wechatId",
                        "identifierValue":"cbdhdhhad74278sdfj"
                     }
                  ]
               }
            ]
         }
      },
      "triggeringActivity":{
         "name":"pointsRedemption",
         "identifiers":[
            {
               "key":"billId",
               "value":"123456"
            }
         ],
         "enteredAt":{
            "id":949,
            "store":{
               "code":"str1.brand",
               "name":"str1.brand",
               "externalId":"DFSDHGFSH6642664617",
               "externalId1":"GDGSDHDGH3744277474",
               "externalId2":"GHSDGHGHH6776246444"
            },
            "till":{
               "code":"till1.str1.brand",
               "name":"till1.str1.brand"
            }
         }
      },
      "loyaltyProgramId":1487,
      "totalPointsRedeemed":235,
      "redeemedPointsCurrencyValue":470,
      "redemptionFromEarningPrograms":[
         {
            "programId":1487,
            "pointsRedeemed":235,
            "programCurrentPoints":500
         }
      ]
   }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Promised Points Conversion to Current Points Event (promisedToCurrentPointsConversion)

Notifies when promised points are converted to current points in a loyalty program.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| eventType | String | It combines the orgid and event name (e.g., "1000006_promisedToCurrentPointsConversion"). |

| consumerGroupId | Null | Identifier for the consumer group (null if not applicable). |

| actionType | String | Action type of the event (e.g., "START"). |

| timeStamp | Integer | Timestamp of the event in milliseconds since epoch. |

| attributes | Object | Contains details about the event attributes. |

| - createdAt | Integer | Timestamp when the event was created (milliseconds since epoch). |

| - data | Object | Contains specific data related to the event. |

| -- customerIdentifiers | Object | Contains identifiers for the customer. |

| --- customerId | Integer | Unique identifier for the customer. |

| --- instore | Object | Contains in-store customer information. |

| ---- mobile | String | Mobile number of the customer. |

| ---- email | String | Email address of the customer. |

| -- entityInformation | Object | Contains information about the entity involved in the event. |

| --- entityType | String | Type of the entity (e.g., "USER"). |

| --- entityId | Integer | Unique identifier for the entity. |

| -- earningActivityReference | Array of Objects | List of references to earning activities. |

| --- name | String | Name of the earning activity (e.g., "TransactionAdd"). |

| --- enteredAt | Float | Timestamp of when the activity was entered (in milliseconds). |

| --- pointsConverted | Float | Points converted during the activity. |

| --- identifiers | Array of Objects | List of identifiers related to the earning activity. |

| ---- key | String | Key identifier (e.g., "billNumber"). |

| ---- value | String | The value corresponding to the key. |

| ---- key (second) | String | Second key identifier (e.g., "EventLogId"). |

| ---- value (second) | String | The value corresponds to the second key. |

| -- loyaltyProgramDetails | Object | Contains details about the loyalty program. |

| --- id | Integer | Unique identifier for the loyalty program. |

| --- name | String | Name of the loyalty program (e.g., "Tata 1mg"). |

| --- isDefault | Boolean | Indicates if the program is the default program. |

| --- pointsToCurrencyRatio | Float | Points-to-currency conversion ratio. |

| --- tiers | Array of Objects | List of tiers in the loyalty program. |

| ---- tierNumber | Integer | Number of the tier (e.g., 1 for Base). |

| ---- tierName | String | Name of the tier (e.g., "Base"). |

| loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| pointsConverted | Float | Total points converted in this transaction. |

| programCurrentPoints | Float | Current points in the program. |

| programLifetimePoints | Float | Total points earned in the program lifetime. |

| pointsConversionSource | String | Source of the points conversion (e.g., "systemTrigger"). |

| pointsConvertedBreakup | Array | Breakdown of the converted points (empty in this case). |

| loyaltyEventId | String | Unique identifier for the loyalty event. |

| eventName | String | Name of the event (e.g., "promisedToCurrentPointsConversion"). |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Unique identifier for the API request. |

| orgId | Integer | Unique identifier for the organization. |



```
{
  "eventId": "f993741a-89f3-46c8-b70f-6f45cfce7dba",
  "eventLogId": 34805016,
  "eventType": "1000006_promisedToCurrentPointsConversion",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683867642290,
  "attributes": {
    "createdAt": 1683867642243,
    "data": {
      "customerIdentifiers": {
        "customerId": 130354474,
        "instore": {
          "mobile": "d9ace8e94d6f779ff845a401f9dd50a7",
          "email": "d9ace8e94d6f779ff845a401f9dd50a7"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 130354474
      },
      "earningActivityReference": [
        {
          "name": "TransactionAdd",
          "enteredAt": 1.657437873E12,
          "pointsConverted": 0.0,
          "identifiers": [
            {
              "key": "billNumber",
              "value": "PO19022266733111"
            },
            {
              "ke y": "EventLogId",
              "value": "448823777"
            }
          ]
        }
      ],
      "loyaltyProgramDetails": {
        "id": 1000038,
        "name": "Tata 1mg",
        "isDefault": false,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Base"
          },
          {
            "tierNumber": 2,
            "tierName": "1MGCare"
          }
        ]
      },
      "loyaltyProgramId": 1000038,
      "pointsConverted": 0.269,
      "programCurrentPoints": 0.269,
      "programLifetimePoints": 13.269,
      "pointsConversionSource": "systemTrigger",
      "pointsConvertedBreakup": [
        
      ]
    },
    "loyaltyEventId": "9mQMu01tPA6me2X",
    "eventName": "promisedToCurrentPointsConversion",
    "refId": "1000006_9m QMu01tPA6me2X",
    "apiRequestId": "6f9d2624-efa9-4010-a6e4-3022cfeb905b",
    "orgId": 1000006
  }
}
```

```
{
  "eventId": "f993741a-89f3-46c8-b70f-6f45cfce7dba",
  "eventLogId": 34805016,
  "eventType": "1000006_promisedToCurrentPointsConversion",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683867642290,
  "attributes": {
    "createdAt": 1683867642243,
    "data": {
      "customerIdentifiers": {
        "customerId": 130354474,
        "instore": {
          "mobile": "d9ace8e94d6f779ff845a401f9dd50a7",
          "email": "d9ace8e94d6f779ff845a401f9dd50a7"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 130354474
      },
      "earningActivityReference": [
        {
          "name": "TransactionAdd",
          "enteredAt": 1.657437873E12,
          "pointsConverted": 0.0,
          "identifiers": [
            {
              "key": "billNumber",
              "value": "PO19022266733111"
            },
            {
              "ke y": "EventLogId",
              "value": "448823777"
            }
          ]
        }
      ],
      "loyaltyProgramDetails": {
        "id": 1000038,
        "name": "Tata 1mg",
        "isDefault": false,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Base"
          },
          {
            "tierNumber": 2,
            "tierName": "1MGCare"
          }
        ]
      },
      "loyaltyProgramId": 1000038,
      "pointsConverted": 0.269,
      "programCurrentPoints": 0.269,
      "programLifetimePoints": 13.269,
      "pointsConversionSource": "systemTrigger",
      "pointsConvertedBreakup": [
        
      ]
    },
    "loyaltyEventId": "9mQMu01tPA6me2X",
    "eventName": "promisedToCurrentPointsConversion",
    "refId": "1000006_9m QMu01tPA6me2X",
    "apiRequestId": "6f9d2624-efa9-4010-a6e4-3022cfeb905b",
    "orgId": 1000006
  }
}
```

## Points Expired Event (pointsExpired)

Notifies when points earned by a user has expired.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event (e.g., "pointsExpired"). |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| orgId | Integer | Unique identifier for the organization. |

| refId | String | This is used for internal debugging purposes. |

| createdAt | Integer | Timestamp when the event was created. |

| data | Object | Contains specific data related to the event. |

| -- customerIdentifiers | Object | Contains identifiers for the customer. |

| --- customerId | Integer | Unique identifier for the customer. |

| --- instore | Object | Contains in-store customer information. |

| ---- mobile | String | Mobile number of the customer. |

| ---- email | String | Email address of the customer. |

| ---- externalId | String | External identifier for the customer. |

| -- triggeringActivity | Object | Contains information about the activity that triggered the event (empty in this case). |

| loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| pointsExpired | Integer | Total points that have expired. |



```
{
   "eventName":"pointsExpired",
   "eventId":"abacd-12345-ABCD",
  "eventLogId": 34111814,
   "orgId":1655,
   "refId":"1655_684494987",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "instore":{
            "mobile":"919740000000",
            "email":"[email protected]",
            "externalId":"536236462453"
         }
      },
      "triggeringActivity":{
         
      },
      "loyaltyProgramId":1487,
      "pointsExpired":1000
   }
}
```

```
{
   "eventName":"pointsExpired",
   "eventId":"abacd-12345-ABCD",
  "eventLogId": 34111814,
   "orgId":1655,
   "refId":"1655_684494987",
   "createdAt":156474848484,
   "data":{
      "customerIdentifiers":{
         "customerId":876,
         "instore":{
            "mobile":"919740000000",
            "email":"[email protected]",
            "externalId":"536236462453"
         }
      },
      "triggeringActivity":{
         
      },
      "loyaltyProgramId":1487,
      "pointsExpired":1000
   }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Points Expired Reminder Event (pointsExpiryReminder)

Notifies when a user's points are about to expire.

| Field | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event (e.g., "pointsExpiryReminder"). |

| eventId | String | Unique identifier for the event. |

| orgId | Integer | Unique identifier for the organization. |

| refId | String | This is used for internal debugging purposes |

| apiRequestId | String | Unique identifier for the API request. |

| createdAt | Integer | Timestamp when the event was created (milliseconds since epoch). |

| data | Object | Contains specific data related to the event. |

| -- customerIdentifiers | Object | Contains identifiers for the customer. |

| --- customerId | Integer | Unique identifier for the customer. |

| -- entityInformation | Object | Contains information about the entity involved in the event. |

| --- entityType | String | Type of the entity (e.g., "USER"). |

| --- entityId | Integer | Unique identifier for the entity. |

| -- loyaltyProgramDetails | Object | Contains details about the loyalty program. |

| --- id | Integer | Unique identifier for the loyalty program. |

| --- name | String | Name of the loyalty program (e.g., "DefaultProgram"). |

| --- isDefault | Boolean | Indicates if the program is the default program. |

| --- pointsToCurrencyRatio | Float | Points-to-currency conversion ratio. |

| --- tiers | Array of Objects | List of tiers in the loyalty program. |

| ---- tierNumber | Integer | Number of the tier (e.g., 1 for "A"). |

| ---- tierName | String | Name of the tier (e.g., "A"). |

| loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| pointsScheduledForExpiry | Integer | Total points scheduled for expiry. |

| scheduledExpiryDate | String | Date when the points are scheduled to expire (formatted as YYYY-MM-DD). |

| loyaltyEventId | Null | Unique identifier for the loyalty event (null if not applicable). |



```
{
    "eventName": "pointsExpiryReminder",
    "eventId": "bd69ac73-0c7c-471a-b2cd-1f8251b34b60",
    "orgId": 50750,
    "refId": "50750_7616f6fc-9cc3-4b92-9cfa-b1177ea25a6c",
    "apiRequestId": "2cb3ea1a-0841-4cd4-ac6a-1adb1c3891d6",
    "createdAt": 1685864957859,
    "data": {
        "customerIdentifiers": {
            "customerId": 381750905
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 381750905
        },
        "loyaltyProgramDetails": {
            "id": 1933,
            "name": "DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "A"
                },
                {
                    "tierNumber": 2,
                    "tierName": "B"
                },
                {
                    "tierNumber": 3,
                    "tierName": "C"
                }
            ]
        },
        "loyaltyProgramId": 1933,
        "pointsScheduledForExpiry": 300,
        "scheduledExpiryDate": "2023-06-19"
    },
    "loyaltyEventId": null
}
```

```
{
    "eventName": "pointsExpiryReminder",
    "eventId": "bd69ac73-0c7c-471a-b2cd-1f8251b34b60",
    "orgId": 50750,
    "refId": "50750_7616f6fc-9cc3-4b92-9cfa-b1177ea25a6c",
    "apiRequestId": "2cb3ea1a-0841-4cd4-ac6a-1adb1c3891d6",
    "createdAt": 1685864957859,
    "data": {
        "customerIdentifiers": {
            "customerId": 381750905
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 381750905
        },
        "loyaltyProgramDetails": {
            "id": 1933,
            "name": "DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "A"
                },
                {
                    "tierNumber": 2,
                    "tierName": "B"
                },
                {
                    "tierNumber": 3,
                    "tierName": "C"
                }
            ]
        },
        "loyaltyProgramId": 1933,
        "pointsScheduledForExpiry": 300,
        "scheduledExpiryDate": "2023-06-19"
    },
    "loyaltyEventId": null
}
```

## Points Transferred Initiated Event (pointsTransferredInitiated)

Notifies when a points transfer for a user is initiated.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| eventType | String | Type of the event (e.g., "pointsTransferredInitiated"). |

| consumerGroupId | Integer | Identifier for the consumer group (null if not applicable). |

| actionType | String | Action type for the event (e.g., "START"). |

| timeStamp | Integer | Timestamp when the event occurred (milliseconds since epoch). |

| attributes | Object | Contains specific attributes related to the event. |

| -- createdAt | Integer | Timestamp when the attributes were created (milliseconds since epoch). |

| -- data | Object | Contains specific data related to the event. |

| --- customerIdentifiers | Object | Contains identifiers for the customer initiating the transfer. |

| ---- customerId | Integer | Unique identifier for the customer. |

| ---- instore | Object | Contains in-store customer information. |

| ----- mobile | String | Mobile number of the customer. |

| ----- email | String | Email address of the customer. |

| --- entityInformation | Object | Contains information about the entity initiating the transfer. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the entity. |

| --- loyaltyProgramDetails | Object | Contains details about the loyalty program. |

| ---- id | Integer | Unique identifier for the loyalty program. |

| ---- name | String | Name of the loyalty program (e.g., "newshard_orgDefaultProgram"). |

| ---- isDefault | Boolean | Indicates if the program is the default program. |

| ---- pointsToCurrencyRatio | Float | Points-to-currency conversion ratio. |

| ---- tiers | Array of Objects | List of tiers in the loyalty program. |

| ----- tierNumber | Integer | Number of the tier (e.g., 1 for "Silver"). |

| ----- tierName | String | Name of the tier (e.g., "Silver"). |

| loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| totalPointsTransferred | Float | Total points that were transferred. |

| --- transferReceivingCustomerIdentifiers | Object | Contains identifiers for the customer receiving the transfer. |

| ---- customerId | Integer | Unique identifier for the receiving customer. |

| ---- instore | Object | Contains in-store information for the receiving customer. |

| ----- mobile | String | Mobile number of the receiving customer. |

| ----- email | String | Email address of the receiving customer. |

| --- transferReceivingEntityInformation | Object | Contains information about the entity receiving the points. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the receiving entity. |

| --- redemptionFromEarningPrograms | Array of Objects | List of redemption details from earning programs. |

| ---- programId | Integer | Unique identifier for the earning program. |

| ---- pointsRedeemed | Float | Total points redeemed from the program. |

| ---- programCurrentPoints | Float | Current points available in the program. |

| loyaltyEventId | String | Unique identifier for the loyalty event. |

| eventName | String | Name of the event (e.g., "pointsTransferredInitiated"). |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Unique identifier for the API request. |

| orgId | Integer | Unique identifier for the organization |



```
{
  "eventId": "3c9d293a-f9bd-4a49-a54a-63d4af500b46",
  "eventLogId": 34805034,
  "eventType": "pointsTransferredInitiated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683873247544,
  "attributes": {
    "createdAt": 1683873247465,
    "data": {
      "customerIdentifiers": {
        "customerId": 545513704,
        "instore": {
          "mobile": " 917136866183",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 545513704
      },
      "loyaltyProgramDetails": {
        "id": 784,
        "name": "newshard_orgDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 784,
      "totalPointsTransferred": 10.0,
      "transferReceivingCustomerIdentifiers": {
        "customerId": 545513705,
        "instore": {
          "mobile": "9189000 03219",
          "email": "[email protected]"
        }
      },
      "transferReceivingEntityInformation": {
        "entityType": "USER",
        "entityId": 545513705
      },
      "redemptionFromEarningPrograms": [
        {
          " programId": 784,
          "pointsRedeemed": 10.0,
          "programCurrentPoints": 90.0
        }
      ]
    },
    "loyaltyEventId": "HNoDBilpg9",
    "eventName": "pointsTransferredInitiated",
    "refId": "1138_HNoDBilpg9",
    "apiRe questId": "36f63b513c9f787526903e840ea4d04f",
    "orgId": 1138
  }
}
```

```
{
  "eventId": "3c9d293a-f9bd-4a49-a54a-63d4af500b46",
  "eventLogId": 34805034,
  "eventType": "pointsTransferredInitiated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683873247544,
  "attributes": {
    "createdAt": 1683873247465,
    "data": {
      "customerIdentifiers": {
        "customerId": 545513704,
        "instore": {
          "mobile": " 917136866183",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 545513704
      },
      "loyaltyProgramDetails": {
        "id": 784,
        "name": "newshard_orgDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 784,
      "totalPointsTransferred": 10.0,
      "transferReceivingCustomerIdentifiers": {
        "customerId": 545513705,
        "instore": {
          "mobile": "9189000 03219",
          "email": "[email protected]"
        }
      },
      "transferReceivingEntityInformation": {
        "entityType": "USER",
        "entityId": 545513705
      },
      "redemptionFromEarningPrograms": [
        {
          " programId": 784,
          "pointsRedeemed": 10.0,
          "programCurrentPoints": 90.0
        }
      ]
    },
    "loyaltyEventId": "HNoDBilpg9",
    "eventName": "pointsTransferredInitiated",
    "refId": "1138_HNoDBilpg9",
    "apiRe questId": "36f63b513c9f787526903e840ea4d04f",
    "orgId": 1138
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

## Points Transferred Received (pointsTransferredReceived)

Notifies when a points transfer request of a user is received. Points transfer allows users to transfer their loyalty points to other users or user groups.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| eventType | String | Type of the event (e.g., "pointsTransferredReceived"). |

| consumerGroupId | Null | Identifier for the consumer group (null if not applicable). |

| actionType | String | Action type for the event (e.g., "START"). |

| timeStamp | Integer | Timestamp when the event occurred (milliseconds since epoch). |

| attributes | Object | Contains specific attributes related to the event. |

| -- createdAt | Integer | Timestamp when the attributes were created (milliseconds since epoch). |

| -- data | Object | Contains specific data related to the event. |

| --- customerIdentifiers | Object | Contains identifiers for the customer receiving the points. |

| ---- customerId | Integer | Unique identifier for the customer. |

| ---- instore | Object | Contains in-store customer information. |

| ----- mobile | String | Mobile number of the customer. |

| ----- email | String | Email address of the customer. |

| --- entityInformation | Object | Contains information about the entity receiving the points. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the entity. |

| --- loyaltyProgramDetails | Object | Contains details about the loyalty program. |

| ---- id | Integer | Unique identifier for the loyalty program. |

| ---- name | String | Name of the loyalty program (e.g., "newshard_orgDefaultProgram"). |

| ---- isDefault | Boolean | Indicates if the program is the default program. |

| ---- pointsToCurrencyRatio | Float | Points-to-currency conversion ratio. |

| ---- tiers | Array of Objects | List of tiers in the loyalty program. |

| ----- tierNumber | Integer | Number of the tier (e.g., 1 for "Silver"). |

| ----- tierName | String | Name of the tier (e.g., "Silver"). |

| loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| totalPointsTransferred | Float | Total points that were transferred. |

| --- transferInitiatingCustomerIdentifiers | Object | Contains identifiers for the customer initiating the transfer. |

| ---- customerId | Integer | Unique identifier for the initiating customer. |

| ---- instore | Object | Contains in-store information for the initiating customer. |

| ----- mobile | String | Mobile number of the initiating customer. |

| ----- email | String | Email address of the initiating customer. |

| --- transferInitiatingEntityInformation | Object | Contains information about the entity initiating the transfer. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the initiating entity. |

| loyaltyEventId | String | Unique identifier for the loyalty event. |

| eventName | String | Name of the event (e.g., "pointsTransferredReceived"). |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Unique identifier for the API request. |

| orgId | Integer | Unique identifier for the organization. |



```
{
  "eventId": "bb12e156-edfe-4a2d-9831-b1224ebb3d77",
  "eventLogId": 34805034,
  "eventType": "pointsTransferredReceived",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683873247673,
  "attributes": {
    "createdAt": 1683873247470,
    "data": {
      "customerIdentifiers": {
        "customerId": 545513705,
        "instore": {
          "mobile": "91 8900003219",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 545513705
      },
      "loyaltyProgramDetails": {
        "id": 784,
        "name": "n ewshard_orgDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 784,
      "totalPointsTransferred": 10.0,
      "transferInitiatingCustomerIdentifiers": {
        "customerId": 545513704,
        "instore": {
          "mobile": "91713686 6183",
          "email": "[email protected]"
        }
      },
      "transferInitiatingEntityInformation": {
        "entityType": "USER",
        "entityId": 545513704
      }
    },
    "loyaltyEventId": "HNoDBilpg9",
    "e ventName": "pointsTransferredReceived",
    "refId": "1138_HNoDBilpg9",
    "apiRequestId": "36f63b513c9f787526903e840ea4d04f",
    "orgId": 1138
  }
}
```

```
{
  "eventId": "bb12e156-edfe-4a2d-9831-b1224ebb3d77",
  "eventLogId": 34805034,
  "eventType": "pointsTransferredReceived",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683873247673,
  "attributes": {
    "createdAt": 1683873247470,
    "data": {
      "customerIdentifiers": {
        "customerId": 545513705,
        "instore": {
          "mobile": "91 8900003219",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 545513705
      },
      "loyaltyProgramDetails": {
        "id": 784,
        "name": "n ewshard_orgDefaultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Silver"
          },
          {
            "tierNumber": 2,
            "tierName": "Gold"
          },
          {
            "tierNumber": 3,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 784,
      "totalPointsTransferred": 10.0,
      "transferInitiatingCustomerIdentifiers": {
        "customerId": 545513704,
        "instore": {
          "mobile": "91713686 6183",
          "email": "[email protected]"
        }
      },
      "transferInitiatingEntityInformation": {
        "entityType": "USER",
        "entityId": 545513704
      }
    },
    "loyaltyEventId": "HNoDBilpg9",
    "e ventName": "pointsTransferredReceived",
    "refId": "1138_HNoDBilpg9",
    "apiRequestId": "36f63b513c9f787526903e840ea4d04f",
    "orgId": 1138
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

## Redeemed Points Reversed Event (redeemedPointsReversed)

Notifies when redeemed points are reversed. Reversal of redeemed points occurs when a user does not use points they have redeemed for a transaction, or when the transaction for which points were redeemed is returned.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| eventType | String | Type of the event (e.g., "redeemedPointsReversed"). |

| consumerGroupId | Null | Identifier for the consumer group (null if not applicable). |

| actionType | String | Action type for the event (e.g., "START"). |

| timeStamp | Integer | Timestamp when the event occurred (milliseconds since epoch). |

| attributes | Object | Contains specific attributes related to the event. |

| -- createdAt | Integer | Timestamp when the attributes were created (milliseconds since epoch). |

| -- data | Object | Contains specific data related to the event. |

| --- customerIdentifiers | Object | Contains identifiers for the customer. |

| ---- customerId | Integer | Unique identifier for the customer. |

| ---- instore | Object | Contains in-store customer information. |

| ----- mobile | String | Mobile number of the customer. |

| ----- email | String | Email address of the customer. |

| --- entityInformation | Object | Contains information about the entity involved in the event. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the entity. |

| --- triggeringActivity | Object | Contains details about the activity that triggered the event. |

| ---- name | String | Name of the triggering activity (e.g., "PointsRedemptionReversal"). |

| ---- identifiers | Array of Objects | List of identifiers associated with the triggering activity. |

| ----- key | String | Key of the identifier (e.g., "redemptionId"). |

| ----- value | String | Value of the identifier (e.g., "CgDAgY"). |

| ---- enteredBy | Object | Information about who entered the activity. |

| ----- id | Integer | Unique identifier for the user who entered the activity. |

| ---- additionalAttributes | Array | Additional attributes related to the triggering activity. |

| --- loyaltyProgramDetails | Object | Contains details about the loyalty program. |

| ---- id | Integer | Unique identifier for the loyalty program. |

| ---- name | String | Name of the loyalty program (e.g., "Abbott ID_ProdDefaultProgram"). |

| ---- isDefault | Boolean | Indicates if the program is the default program. |

| ---- pointsToCurrencyRatio | Float | Points-to-currency conversion ratio. |

| ---- tiers | Array of Objects | List of tiers in the loyalty program. |

| ----- tierNumber | Integer | Number of the tier (e.g., 1 for "Bronze"). |

| ----- tierName | String | Name of the tier (e.g., "Bronze"). |

| --- loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| --- redeemedPointsReversed | Float | Total points that were reversed. |

| --- redeemedPointsReversedDetails | Object | Contains details about the reversed points. |

| ---- available | Float | Number of available reversed points. |

| ---- expired | Float | The number of expired reversed points. |

| --- redemptionSummaryId | Integer | Unique identifier for the redemption summary. |

| --- redemptionReversalToEarningPrograms | Array of Objects | List of earning programs affected by the reversal. |

| ---- programId | Integer | Unique identifier for the earning program. |

| ---- redeemedPointsReversed | Float | Amount of points reversed for the earning program. |

| ---- redeemedPointsReversedDetails | Object | Contains details about the reversed points for the earning program. |

| ----- available | Float | Number of available reversed points for the earning program. |

| ----- expired | Float | The number of expired reversed points for the earning program. |

| ---- programCurrentPoints | Float | Current points in the earning program after the reversal. |

| -- loyaltyEventId | String | Unique identifier for the loyalty event. |

| -- eventName | String | Name of the event (e.g., "redeemedPointsReversed"). |

| -- refId | String | This is a combination of org id and API request ID and is used for internal debugging purposes. |

| -- apiRequestId | String | Unique identifier for the API request. |

| -- orgId | Integer | Unique identifier for the organization |



```
{
  "eventId": "a5058d77-370f-4544-a420-8337f9d5fbf1",
  "eventLogId": 34805097,
  "eventType": "redeemedPointsReversed",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683871439535,
  "attributes": {
    "createdAt": 1683871439518,
    "data": {
      "customerIdentifiers": {
        "customerId": 6687782,
        "instore": {
          "mobile": "628577693 2889",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6687782
      },
      "triggeringActivity": {
        "name": "PointsRedemptionReversal",
        "identifiers": [
          {
            "key": "redemptionId",
            "value": "CgDAgY"
          }
        ],
        "enteredBy": {
          "id": 200279007
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 1095,
        "name": "Abbott ID_ProdDef aultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Bronze"
          },
          {
            "tierNumber": 2,
            "tierName": "Silver"
          },
          {
            "tierNumber": 3,
            "tierName ": "Gold"
          },
          {
            "tierNumber": 4,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 1095,
      "redeemedPointsReversed": 300.0,
      "redeemedPointsReversedDetails": {
        "available": 300.0,
        "expired": 0.0
      },
      "redemptionSummaryId": 2613711,
      "redemptionReversalToEarningPrograms": [
        {
          "programId": 1095,
          "redeemedPointsReversed": 300.0,
          "redeemedPointsReversedDetails": {
            "available": 300.0,
            "expired": 0.0
          },
          "programCurrentPoints": 2600.0
        }
      ]
    },
    "loyaltyEventId": "a261d029212a09eea3e99a18024d76a9",
    "eventName": "redeemedPointsReversed",
    "refId": "151193_a261d029212a09eea3e99a18024d 76a9",
    "apiRequestId": "a261d029212a09eea3e99a18024d76a9",
    "orgId": 151193
  }
}
```

```
{
  "eventId": "a5058d77-370f-4544-a420-8337f9d5fbf1",
  "eventLogId": 34805097,
  "eventType": "redeemedPointsReversed",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683871439535,
  "attributes": {
    "createdAt": 1683871439518,
    "data": {
      "customerIdentifiers": {
        "customerId": 6687782,
        "instore": {
          "mobile": "628577693 2889",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6687782
      },
      "triggeringActivity": {
        "name": "PointsRedemptionReversal",
        "identifiers": [
          {
            "key": "redemptionId",
            "value": "CgDAgY"
          }
        ],
        "enteredBy": {
          "id": 200279007
        },
        "additionalAttributes": [
          
        ]
      },
      "loyaltyProgramDetails": {
        "id": 1095,
        "name": "Abbott ID_ProdDef aultProgram",
        "isDefault": true,
        "pointsToCurrencyRatio": 1.0,
        "tiers": [
          {
            "tierNumber": 1,
            "tierName": "Bronze"
          },
          {
            "tierNumber": 2,
            "tierName": "Silver"
          },
          {
            "tierNumber": 3,
            "tierName ": "Gold"
          },
          {
            "tierNumber": 4,
            "tierName": "Platinum"
          }
        ]
      },
      "loyaltyProgramId": 1095,
      "redeemedPointsReversed": 300.0,
      "redeemedPointsReversedDetails": {
        "available": 300.0,
        "expired": 0.0
      },
      "redemptionSummaryId": 2613711,
      "redemptionReversalToEarningPrograms": [
        {
          "programId": 1095,
          "redeemedPointsReversed": 300.0,
          "redeemedPointsReversedDetails": {
            "available": 300.0,
            "expired": 0.0
          },
          "programCurrentPoints": 2600.0
        }
      ]
    },
    "loyaltyEventId": "a261d029212a09eea3e99a18024d76a9",
    "eventName": "redeemedPointsReversed",
    "refId": "151193_a261d029212a09eea3e99a18024d 76a9",
    "apiRequestId": "a261d029212a09eea3e99a18024d76a9",
    "orgId": 151193
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Updated Single Points Expiry (singlePointsExpiryUpdated)

Notifies when the points expiry date is updated under the Single Points Expiry feature. Single Points Expiry is a feature in Capillary's Loyalty+ platform that allows points across all loyalty programs for different events to have a common expiry date.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Unique identifier for the event. |

| eventType | String | Type of the event (e.g., "singlePointsExpiryUpdated"). |

| consumerGroupId | Null | Identifier for the consumer group (null if not applicable). |

| actionType | String | Action type for the event (e.g., "START"). |

| timeStamp | Integer | Timestamp when the event occurred (milliseconds since epoch). |

| attributes | Object | Contains specific attributes related to the event. |

| -- createdAt | Integer | Timestamp when the attributes were created (milliseconds since epoch). |

| -- data | Object | Contains specific data related to the event. |

| --- customerIdentifiers | Object | Contains identifiers for the customer. |

| ---- customerId | Integer | Unique identifier for the customer. |

| --- entityInformation | Object | Contains information about the entity involved in the event. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the entity. |

| --- updatedPointsExpiry | Array of Objects | List of updated points expiry details. |

| ---- programId | Integer | Unique identifier for the loyalty program. |

| ---- points | Float | Number of points associated with the expiry update. |

| ---- pointsType | String | Type of points (e.g., "billRegular", "billPromotions"). |

| ---- oldExpiryDate | String | The previous expiry date of the points (in YYYY-MM-DD format). |

| ---- newExpiryDate | String | The new expiry date of the points (in YYYY-MM-DD format). |

| --- eventName | String | Name of the event (e.g., "singlePointsExpiryUpdated"). |

| --- refId | String | This is a combination of org id and apiRequestId and is used for internal debugging purposes. |

| --- apiRequestId | String | Unique identifier for the API request. |

| --- orgId | Integer | Unique identifier for the organization. |



```
{
  "eventId": "a9f1dd54-0477-4a4f-a509-ed5c35cbce7a",
  "eventType": "singlePointsExpiryUpdated",
  "consumerGroupId ": null,
  "actionType": "START",
  "timeStamp": 1683867690435,
  "attributes": {
    "createdAt": 1683867690421,
    "data": {
      "customerIdentifiers": {
        "customerId": 146272039
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 146272039
      },
      "updatedPointsExpiry": [
        {
          "programId": 1000028,
          "points": 3.0,
          "pointsType": "billRegular",
          "oldExpiryDate": "2024-03-23",
          "newExpiryDate ": "2024-05-10"
        },
        {
          "programId": 1000028,
          "points": 5.0,
          "pointsType": "billRegular",
          "oldExpiryDate": "2024-05-10",
          "newExpiryDate": "2024-05-10"
        },
        {
          "programId": 1000007,
          "points": 56.0,
          "pointsType": "billPromotions",
          "oldExpiryDate": "2024-03-23",
          "newExpiryDate": "2024-05-10"
        },
        {
          "programId": 1000007,
          "points": 91.0,
          "pointsType": "billPromotions",
          "oldExpir yDate": "2024-05-10",
          "newExpiryDate": "2024-05-10"
        }
      ]
    },
    "eventName": "singlePointsExpiryUpdated",
    "refId": "1000006_68421c2fbcbeead306651eeb514ef109",
    "apiRequestId": "68421c2fbcbe ead306651eeb514ef109",
    "orgId": 1000006
  }
}
```

```
{
  "eventId": "a9f1dd54-0477-4a4f-a509-ed5c35cbce7a",
  "eventType": "singlePointsExpiryUpdated",
  "consumerGroupId ": null,
  "actionType": "START",
  "timeStamp": 1683867690435,
  "attributes": {
    "createdAt": 1683867690421,
    "data": {
      "customerIdentifiers": {
        "customerId": 146272039
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 146272039
      },
      "updatedPointsExpiry": [
        {
          "programId": 1000028,
          "points": 3.0,
          "pointsType": "billRegular",
          "oldExpiryDate": "2024-03-23",
          "newExpiryDate ": "2024-05-10"
        },
        {
          "programId": 1000028,
          "points": 5.0,
          "pointsType": "billRegular",
          "oldExpiryDate": "2024-05-10",
          "newExpiryDate": "2024-05-10"
        },
        {
          "programId": 1000007,
          "points": 56.0,
          "pointsType": "billPromotions",
          "oldExpiryDate": "2024-03-23",
          "newExpiryDate": "2024-05-10"
        },
        {
          "programId": 1000007,
          "points": 91.0,
          "pointsType": "billPromotions",
          "oldExpir yDate": "2024-05-10",
          "newExpiryDate": "2024-05-10"
        }
      ]
    },
    "eventName": "singlePointsExpiryUpdated",
    "refId": "1000006_68421c2fbcbeead306651eeb514ef109",
    "apiRequestId": "68421c2fbcbe ead306651eeb514ef109",
    "orgId": 1000006
  }
}
```

## Issued Points Reversed Event (issuedPointsReversed)

Notifies when points issued for a user has been reversed. For example, a user has returned a purchase and the points issued have been reversed.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event (e.g., "issuedPointsReversed"). |

| eventId | String | Unique identifier for the event. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| data | Object | Contains specific data related to the event. |

| -- customerIdentifiers | Object | Contains identifiers for the customer. |

| --- customerId | Integer | Unique identifier for the customer. |

| --- instore | Object | Contains instore identification details of the customer. |

| ---- mobile | String | Mobile number of the customer. |

| ---- email | String | Email address of the customer. |

| -- entityInformation | Object | Contains information about the entity involved in the event. |

| --- entityType | String | Type of the entity (e.g., "USER"). |

| --- entityId | Integer | Unique identifier for the entity. |

| -- triggeringActivity | Object | Contains details of the activity that triggered this event. |

| --- name | String | Name of the triggering activity (e.g., "ReturnBill"). |

| --- identifiers | Array of Objects | List of identifiers related to the triggering activity. |

| ---- key | String | Identifier key (e.g., "billId", "billNumber"). |

| ---- value | String | Value corresponding to the key. |

| --- enteredBy | Object | Information about who entered the triggering activity. |

| ---- id | Integer | Unique identifier for the person who entered the activity. |

| --- entityInformation | Object | Information about the entity involved in the triggering activity. |

| ---- entityType | String | Type of the entity (e.g., "USER"). |

| ---- entityId | Integer | Unique identifier for the entity. |

| --- additionalAttributes | Array | Additional attributes related to the triggering activity (empty if none). |

| -- loyaltyProgram Details | Object | Contains details about the loyalty program. |

| --- id | Integer | Unique identifier for the loyalty program. |

| --- name | String | Name of the loyalty program (e.g., "Shell Indonesia_ProdDefaultProgram"). |

| --- isDefault | Boolean | Indicates if this is the default program. |

| --- pointsToCurrencyRatio | Float | Ratio of points to currency value. |

| --- tiers | Array of Objects | List of tiers in the loyalty program. |

| ---- tierNumber | Integer | The number of the tier. |

| ---- tierName | String | Name of the tier. |

| -- loyaltyProgramId | Integer | Unique identifier for the loyalty program. |

| -- programCurrentPoints | Float | Current points available in the loyalty program. |

| -- programLifetimePoints | Float | Total lifetime points accumulated in the loyalty program. |

| -- totalIssuedPointsReversed | Float | Total points issued that have been reversed. |

| -- regularPointsReversed | Float | Total regular points that have been reversed. |

| -- promisedPointsReversed | Float | Total promised points that have been reversed. |

| -- promotionalPointsReversed | Array | List of promotional points that have been reversed (empty if none). |

| -- currentEventPromisedPointsReturned | Float | Total promised points returned in the current event. |

| -- currentEventRegularPointsReturned | Float | Total regular points returned in the current event. |

| -- currentEventTotalPointsReturned | Float | Total points returned in the current event. |

| -- currentEventPromotionPointsReturnedDetails | Array | Details of promotional points returned in the current event (empty if none). |

| orgId | Integer | Unique identifier for the organization. |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Unique identifier for the API request. |

| createdAt | Integer | Timestamp when the event was created (milliseconds since epoch). |

| loyaltyEventId | String | Unique identifier for the loyalty event. |



```
{
  "eventName": "issuedPointsReversed",
  "eventId": "a9f1dd54-0477-4a4f-a509-ed5c35cbce7a",
  "eventLogId": 34805034,
  "data": {
    "customerIdentifiers": {
      "customerId": 6767040,
      "instore": {
        "mobile": "6289652442647",
        "email": "[email protected]"
      }
    },
    "entityInformation": {
      "entityType": "USER",
      "entityId": 6767040
    },
    "triggeringActivity": {
      "name": "ReturnBill",
      "identifiers": [
        {
          "key": "billId",
          "value": "65658330"
        },
        {
          "key": "billNumber",
          "value": "2_6594_12743097_6586"
        }
      ],
      "enteredBy": {
        "id": 200291531
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6767040
      },
      "additionalAttributes": [
        
      ]
    },
    "loyaltyProgram Details": {
      "id": 1098,
      "name": "Shell Indonesia_ProdDefaultProgram",
      "isDefault": true,
      "pointsToCurrencyRatio": 1.0,
      "tiers": [
        {
          "tierNumber": 1,
          "tierName": "NONE"
        }
      ]
    },
    "loyaltyProgramId": 1098,
    "programCurrentPoints": 0.0,
    "programLifetimePoints": 0.0,
    "totalIssuedPointsReversed": 2.0,
    "regularPointsReversed": 2.0,
    "promisedPointsReversed": 0.0,
    "promotionalPointsReversed": [
      
    ],
    "currentEventPromisedPointsReturned": 0.0,
    "currentEventRegularPointsReturned": 2.0,
    "currentEventTotalPointsReturned": 2.0,
    "currentEventPromotionPointsReturnedDetails": [
      
    ]
  },
  "or gId": 151195,
  "refId": "151195_Jqo9Kup5Bm",
  "apiRequestId": "1f575ed0ef2095a1c56714d6b1e961c0",
  "createdAt": 1683874940147,
  "loyaltyEventId": "Jqo9Kup5Bm"
}
```

```
{
  "eventName": "issuedPointsReversed",
  "eventId": "a9f1dd54-0477-4a4f-a509-ed5c35cbce7a",
  "eventLogId": 34805034,
  "data": {
    "customerIdentifiers": {
      "customerId": 6767040,
      "instore": {
        "mobile": "6289652442647",
        "email": "[email protected]"
      }
    },
    "entityInformation": {
      "entityType": "USER",
      "entityId": 6767040
    },
    "triggeringActivity": {
      "name": "ReturnBill",
      "identifiers": [
        {
          "key": "billId",
          "value": "65658330"
        },
        {
          "key": "billNumber",
          "value": "2_6594_12743097_6586"
        }
      ],
      "enteredBy": {
        "id": 200291531
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6767040
      },
      "additionalAttributes": [
        
      ]
    },
    "loyaltyProgram Details": {
      "id": 1098,
      "name": "Shell Indonesia_ProdDefaultProgram",
      "isDefault": true,
      "pointsToCurrencyRatio": 1.0,
      "tiers": [
        {
          "tierNumber": 1,
          "tierName": "NONE"
        }
      ]
    },
    "loyaltyProgramId": 1098,
    "programCurrentPoints": 0.0,
    "programLifetimePoints": 0.0,
    "totalIssuedPointsReversed": 2.0,
    "regularPointsReversed": 2.0,
    "promisedPointsReversed": 0.0,
    "promotionalPointsReversed": [
      
    ],
    "currentEventPromisedPointsReturned": 0.0,
    "currentEventRegularPointsReturned": 2.0,
    "currentEventTotalPointsReturned": 2.0,
    "currentEventPromotionPointsReturnedDetails": [
      
    ]
  },
  "or gId": 151195,
  "refId": "151195_Jqo9Kup5Bm",
  "apiRequestId": "1f575ed0ef2095a1c56714d6b1e961c0",
  "createdAt": 1683874940147,
  "loyaltyEventId": "Jqo9Kup5Bm"
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Manual Points Adjustment Event (manualPointsAdjustment)

Notifies whenever points are adjusted/deducted manually.

```
{
        "eventName": "manualPointsAdjustment",
        "data": {
            "customerIdentifiers": {
                "customerId": 1758,
                "firstName": "UQDSNI",
                "lastName": "AAWFXYIU",
                "loyaltyType": "QRGZ",
                "instore": {
                    "id": 7189,
                    "mobile": "HQPJVKEWIO",
                    "email": "IBMEMP",
                    "externalId": "UKCUFFFU",
                    "cardnumber": "TTRX",
                    "cardexternalid": "XNCLUWP",
                    "cardNumbers": [
                        "KIAZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "MZBUUYLJFY",
                            "identifiers": [
                                {
                                    "identifierType": "APKVE",
                                    "identifierValue": "SYRI"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "IOZ",
                            "identifiers": [
                                {
                                    "identifierType": "VNWVKXSH",
                                    "identifierValue": "ELLM"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DQEIBNUG",
                            "identifiers": [
                                {
                                    "identifierType": "RBLGXPLDE",
                                    "identifierValue": "AHQJZKP"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CPJAMEI",
                            "identifiers": [
                                {
                                    "identifierType": "MWJUGII",
                                    "identifierValue": "DPA"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "GIT",
                            "identifiers": [
                                {
                                    "identifierType": "YTGWQO",
                                    "identifierValue": "HEUAERYR"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "SADEF",
                            "identifiers": [
                                {
                                    "identifierType": "BKICFEMEL",
                                    "identifierValue": "XUJCBLIC"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "SWKTBMWXWT",
                            "identifiers": [
                                {
                                    "identifierType": "HMUVXJSQDC",
                                    "identifierValue": "LOJK"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "IKH",
                            "identifiers": [
                                {
                                    "identifierType": "UIVK",
                                    "identifierValue": "WZMZVQZAV"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TXUZCEH",
                            "identifiers": [
                                {
                                    "identifierType": "GYNVKPV",
                                    "identifierValue": "TKTHDVOVGK"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "EWEYBM",
                            "identifiers": [
                                {
                                    "identifierType": "CZEI",
                                    "identifierValue": "WVRZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "triggeringActivity": {
                "name": "MNAMWHHEA",
                "identifiers": [
                    {
                        "key": "KJQQMRFB",
                        "value": "COFVYLXLQ"
                    }
                ],
                "enteredBy": {
                    "id": 4518,
                    "till": {
                        "code": "CEESGN",
                        "name": "XUR"
                    },
                    "store": {
                        "code": "UOVSN",
                        "name": "XTHGLSQJ",
                        "externalId": "GLMPVHORI",
                        "externalId1": "SQP",
                        "externalId2": "AWVZXGL"
                    }
                },
                "entityInformation": {
                    "entityType": "RGNVYWH",
                    "entityId": 7399
                },
                "additionalAttributes": [
                    {
                        "key": "ZOPCTILV",
                        "value": "QIZ"
                    }
                ]
            },
            "totalPoinstDeducted": "KVLBL",
            "programPointsSplit": [
                {
                    "pointsAwardedId": 5563,
                    "programId": 5201,
                    "points": "MTI",
                    "pointsType": "VTGKSKGRSX"
                }
            ],
            "reason": "RNRS"
        },
        "eventId": "LQRMEP",
			  "eventLogId": 34805085,
        "orgId": 3645,
        "refId": "YJKTQHW",
        "apiRequestId": "ZVWB",
        "createdAt": 2131,
        "loyaltyEventId": "QICGTBS",
        "traceAttributes": {
            "LNYTCZ": "OOKQVJP",
            "FSAXZ": "DXFIGJN",
            "BCCTVSRU": "VNSDASROL",
            "IQMTZR": "BWDCJRK",
            "TGO": "UYNYM"
        }
    }
```

```
{
        "eventName": "manualPointsAdjustment",
        "data": {
            "customerIdentifiers": {
                "customerId": 1758,
                "firstName": "UQDSNI",
                "lastName": "AAWFXYIU",
                "loyaltyType": "QRGZ",
                "instore": {
                    "id": 7189,
                    "mobile": "HQPJVKEWIO",
                    "email": "IBMEMP",
                    "externalId": "UKCUFFFU",
                    "cardnumber": "TTRX",
                    "cardexternalid": "XNCLUWP",
                    "cardNumbers": [
                        "KIAZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "MZBUUYLJFY",
                            "identifiers": [
                                {
                                    "identifierType": "APKVE",
                                    "identifierValue": "SYRI"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "IOZ",
                            "identifiers": [
                                {
                                    "identifierType": "VNWVKXSH",
                                    "identifierValue": "ELLM"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DQEIBNUG",
                            "identifiers": [
                                {
                                    "identifierType": "RBLGXPLDE",
                                    "identifierValue": "AHQJZKP"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CPJAMEI",
                            "identifiers": [
                                {
                                    "identifierType": "MWJUGII",
                                    "identifierValue": "DPA"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "GIT",
                            "identifiers": [
                                {
                                    "identifierType": "YTGWQO",
                                    "identifierValue": "HEUAERYR"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "SADEF",
                            "identifiers": [
                                {
                                    "identifierType": "BKICFEMEL",
                                    "identifierValue": "XUJCBLIC"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "SWKTBMWXWT",
                            "identifiers": [
                                {
                                    "identifierType": "HMUVXJSQDC",
                                    "identifierValue": "LOJK"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "IKH",
                            "identifiers": [
                                {
                                    "identifierType": "UIVK",
                                    "identifierValue": "WZMZVQZAV"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TXUZCEH",
                            "identifiers": [
                                {
                                    "identifierType": "GYNVKPV",
                                    "identifierValue": "TKTHDVOVGK"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "EWEYBM",
                            "identifiers": [
                                {
                                    "identifierType": "CZEI",
                                    "identifierValue": "WVRZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "triggeringActivity": {
                "name": "MNAMWHHEA",
                "identifiers": [
                    {
                        "key": "KJQQMRFB",
                        "value": "COFVYLXLQ"
                    }
                ],
                "enteredBy": {
                    "id": 4518,
                    "till": {
                        "code": "CEESGN",
                        "name": "XUR"
                    },
                    "store": {
                        "code": "UOVSN",
                        "name": "XTHGLSQJ",
                        "externalId": "GLMPVHORI",
                        "externalId1": "SQP",
                        "externalId2": "AWVZXGL"
                    }
                },
                "entityInformation": {
                    "entityType": "RGNVYWH",
                    "entityId": 7399
                },
                "additionalAttributes": [
                    {
                        "key": "ZOPCTILV",
                        "value": "QIZ"
                    }
                ]
            },
            "totalPoinstDeducted": "KVLBL",
            "programPointsSplit": [
                {
                    "pointsAwardedId": 5563,
                    "programId": 5201,
                    "points": "MTI",
                    "pointsType": "VTGKSKGRSX"
                }
            ],
            "reason": "RNRS"
        },
        "eventId": "LQRMEP",
			  "eventLogId": 34805085,
        "orgId": 3645,
        "refId": "YJKTQHW",
        "apiRequestId": "ZVWB",
        "createdAt": 2131,
        "loyaltyEventId": "QICGTBS",
        "traceAttributes": {
            "LNYTCZ": "OOKQVJP",
            "FSAXZ": "DXFIGJN",
            "BCCTVSRU": "VNSDASROL",
            "IQMTZR": "BWDCJRK",
            "TGO": "UYNYM"
        }
    }
```

## Points Expiry Change Event (pointsExpiryChange)

Notifies when a points expiry date changes.

```
{
        "eventName": "pointsExpiryChange",
        "data": {
            "customerIdentifiers": {
                "customerId": 4641,
                "firstName": "WVKZIOEWT",
                "lastName": "FEQKBQT",
                "loyaltyType": "QSGORU",
                "instore": {
                    "id": 3349,
                    "mobile": "YGUBCIUA",
                    "email": "XXNDOK",
                    "externalId": "YYVHQYQ",
                    "cardnumber": "XVUZ",
                    "cardexternalid": "SNEG",
                    "cardNumbers": [
                        "WJOZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "OPQOYMKUHT",
                            "identifiers": [
                                {
                                    "identifierType": "DPQGYCLK",
                                    "identifierValue": "ENIFFN"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "NGTH",
                            "identifiers": [
                                {
                                    "identifierType": "WUHZMJOTS",
                                    "identifierValue": "QSZHE"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "APBUCK",
                            "identifiers": [
                                {
                                    "identifierType": "IBVUKGMS",
                                    "identifierValue": "ZII"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CCAPRK",
                            "identifiers": [
                                {
                                    "identifierType": "WGBMHJPIMN",
                                    "identifierValue": "TOZXM"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "BWWNBYQVV",
                            "identifiers": [
                                {
                                    "identifierType": "FJNFWMLO",
                                    "identifierValue": "PHKNDXPZRU"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "SITHI",
                            "identifiers": [
                                {
                                    "identifierType": "MUAU",
                                    "identifierValue": "FXFEFNU"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "IUVXQIWW",
                            "identifiers": [
                                {
                                    "identifierType": "EPTRNQYDE",
                                    "identifierValue": "XUJJIWRI"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "ZDWBVR",
                            "identifiers": [
                                {
                                    "identifierType": "VZYVLN",
                                    "identifierValue": "KPSV"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "YALFSGSQZ",
                            "identifiers": [
                                {
                                    "identifierType": "MKNAYDWFB",
                                    "identifierValue": "EXUIQ"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "RUVLRDYSU",
                            "identifiers": [
                                {
                                    "identifierType": "UZPBAHR",
                                    "identifierValue": "CUTZWOO"
                                }
                            ]
                        }
                    ]
                }
            },
            "entityInformation": {
                "entityType": "FRXKWQICWL",
                "entityId": 8959
            },
            "triggeringActivity": {
                "name": "POVHEWMEL",
                "identifiers": [
                    {
                        "key": "PGOZULPW",
                        "value": "EAOXDT"
                    }
                ],
                "enteredBy": {
                    "id": 4214,
                    "till": {
                        "code": "KQWMO",
                        "name": "NHRYABBXUZ"
                    },
                    "store": {
                        "code": "RCSWZCKED",
                        "name": "XVDSQAGDWY",
                        "externalId": "QUW",
                        "externalId1": "HOYRXJ",
                        "externalId2": "DEXNVCZF"
                    }
                },
                "entityInformation": {
                    "entityType": "NVQDGZBR",
                    "entityId": 5911
                },
                "additionalAttributes": [
                    {
                        "key": "HNWKJVLAU",
                        "value": "VMAAZEOOP"
                    }
                ]
            },
            "loyaltyProgramDetails": {
                "id": 8128,
                "name": "YEWWHFCVW",
                "isDefault": false,
                "pointsToCurrencyRatio": 2962.620522120906,
                "tiers": [
                    {
                        "tierNumber": 1894,
                        "tierName": "GSLSFZYWZ"
                    }
                ]
            },
            "updatedPointsExpiryBreakup": [
                {
                    "pointAwardedRefID": 1171,
                    "pointsAwardedRefType": "LVVD",
                    "promotionID": 4623,
                    "points": 7844.736601561621,
                    "pointsPreviousExpiryDate": "AHL",
                    "expiryUpdateReasonType": "UXCLOEI",
                    "expiryUpdateReasonNote": "AZTRNNS",
                    "newExpiryDate": "FRN",
                    "newExpirySetType": "NFQFBKVG"
                }
            ]
        },
        "eventId": "ERPX",
        "orgId": 4671,
        "refId": "FIDLZHB",
        "apiRequestId": "VNABEYLQI",
        "createdAt": 8366,
        "loyaltyEventId": "NYJZAGJDW",
        "traceAttributes": {
            "QMZPAITQOM": "WPU",
            "YPHESNB": "NKSFFI",
            "XJBWMHAK": "IFDHCBY"
        }
    }
```

```
{
        "eventName": "pointsExpiryChange",
        "data": {
            "customerIdentifiers": {
                "customerId": 4641,
                "firstName": "WVKZIOEWT",
                "lastName": "FEQKBQT",
                "loyaltyType": "QSGORU",
                "instore": {
                    "id": 3349,
                    "mobile": "YGUBCIUA",
                    "email": "XXNDOK",
                    "externalId": "YYVHQYQ",
                    "cardnumber": "XVUZ",
                    "cardexternalid": "SNEG",
                    "cardNumbers": [
                        "WJOZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "OPQOYMKUHT",
                            "identifiers": [
                                {
                                    "identifierType": "DPQGYCLK",
                                    "identifierValue": "ENIFFN"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "NGTH",
                            "identifiers": [
                                {
                                    "identifierType": "WUHZMJOTS",
                                    "identifierValue": "QSZHE"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "APBUCK",
                            "identifiers": [
                                {
                                    "identifierType": "IBVUKGMS",
                                    "identifierValue": "ZII"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CCAPRK",
                            "identifiers": [
                                {
                                    "identifierType": "WGBMHJPIMN",
                                    "identifierValue": "TOZXM"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "BWWNBYQVV",
                            "identifiers": [
                                {
                                    "identifierType": "FJNFWMLO",
                                    "identifierValue": "PHKNDXPZRU"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "SITHI",
                            "identifiers": [
                                {
                                    "identifierType": "MUAU",
                                    "identifierValue": "FXFEFNU"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "IUVXQIWW",
                            "identifiers": [
                                {
                                    "identifierType": "EPTRNQYDE",
                                    "identifierValue": "XUJJIWRI"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "ZDWBVR",
                            "identifiers": [
                                {
                                    "identifierType": "VZYVLN",
                                    "identifierValue": "KPSV"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "YALFSGSQZ",
                            "identifiers": [
                                {
                                    "identifierType": "MKNAYDWFB",
                                    "identifierValue": "EXUIQ"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "RUVLRDYSU",
                            "identifiers": [
                                {
                                    "identifierType": "UZPBAHR",
                                    "identifierValue": "CUTZWOO"
                                }
                            ]
                        }
                    ]
                }
            },
            "entityInformation": {
                "entityType": "FRXKWQICWL",
                "entityId": 8959
            },
            "triggeringActivity": {
                "name": "POVHEWMEL",
                "identifiers": [
                    {
                        "key": "PGOZULPW",
                        "value": "EAOXDT"
                    }
                ],
                "enteredBy": {
                    "id": 4214,
                    "till": {
                        "code": "KQWMO",
                        "name": "NHRYABBXUZ"
                    },
                    "store": {
                        "code": "RCSWZCKED",
                        "name": "XVDSQAGDWY",
                        "externalId": "QUW",
                        "externalId1": "HOYRXJ",
                        "externalId2": "DEXNVCZF"
                    }
                },
                "entityInformation": {
                    "entityType": "NVQDGZBR",
                    "entityId": 5911
                },
                "additionalAttributes": [
                    {
                        "key": "HNWKJVLAU",
                        "value": "VMAAZEOOP"
                    }
                ]
            },
            "loyaltyProgramDetails": {
                "id": 8128,
                "name": "YEWWHFCVW",
                "isDefault": false,
                "pointsToCurrencyRatio": 2962.620522120906,
                "tiers": [
                    {
                        "tierNumber": 1894,
                        "tierName": "GSLSFZYWZ"
                    }
                ]
            },
            "updatedPointsExpiryBreakup": [
                {
                    "pointAwardedRefID": 1171,
                    "pointsAwardedRefType": "LVVD",
                    "promotionID": 4623,
                    "points": 7844.736601561621,
                    "pointsPreviousExpiryDate": "AHL",
                    "expiryUpdateReasonType": "UXCLOEI",
                    "expiryUpdateReasonNote": "AZTRNNS",
                    "newExpiryDate": "FRN",
                    "newExpirySetType": "NFQFBKVG"
                }
            ]
        },
        "eventId": "ERPX",
        "orgId": 4671,
        "refId": "FIDLZHB",
        "apiRequestId": "VNABEYLQI",
        "createdAt": 8366,
        "loyaltyEventId": "NYJZAGJDW",
        "traceAttributes": {
            "QMZPAITQOM": "WPU",
            "YPHESNB": "NKSFFI",
            "XJBWMHAK": "IFDHCBY"
        }
    }
```

## Promised/External Points Conversion Event

Notifies when a Promised/External Points are converted for a customer.

```
{
    "createdAt": 1739857872597,
    "loyaltyEventId": "WAN63O3tpr",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34219968,
    "refId": "50402_WAN63O3tpr",
    "apiRequestId": "9467677c550449826d9207cec30848c1",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201654,
            "instore": {
                "mobile": "672919878345733",
                "cardNumbers": []
            }
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 348201654
        },
        "earningActivityReference": [
            {
                "name": "TransactionAdd",
                "enteredAt": 1.73985783E12,
                "pointsConverted": 1200.0,
                "identifiers": [
                    {
                        "key": "billNumber",
                        "value": "1739857829"
                    },
                    {
                        "key": "EventLogId",
                        "value": "34219920"
                    }
                ]
            }
        ],
        "loyaltyProgramDetails": {
            "id": 1143,
            "name": "Nirvana DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1.0,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "Bronze"
                },
                {
                    "tierNumber": 2,
                    "tierName": "Silver"
                },
                {
                    "tierNumber": 3,
                    "tierName": "Gold"
                }
            ]
        },
        "loyaltyProgramId": 1143,
        "pointsConverted": 1200.0,
        "pointsConvertedType": "EXTERNAL_TRIGGER_BASED_POINTS",
        "programCurrentPoints": 1200.0,
        "programLifetimePoints": 1200.0,
        "pointsConversionSource": "systemTrigger",
        "pointsConvertedBreakup": []
    }
}
```

```
{
    "createdAt": 1739857872597,
    "loyaltyEventId": "WAN63O3tpr",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34219968,
    "refId": "50402_WAN63O3tpr",
    "apiRequestId": "9467677c550449826d9207cec30848c1",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201654,
            "instore": {
                "mobile": "672919878345733",
                "cardNumbers": []
            }
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 348201654
        },
        "earningActivityReference": [
            {
                "name": "TransactionAdd",
                "enteredAt": 1.73985783E12,
                "pointsConverted": 1200.0,
                "identifiers": [
                    {
                        "key": "billNumber",
                        "value": "1739857829"
                    },
                    {
                        "key": "EventLogId",
                        "value": "34219920"
                    }
                ]
            }
        ],
        "loyaltyProgramDetails": {
            "id": 1143,
            "name": "Nirvana DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1.0,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "Bronze"
                },
                {
                    "tierNumber": 2,
                    "tierName": "Silver"
                },
                {
                    "tierNumber": 3,
                    "tierName": "Gold"
                }
            ]
        },
        "loyaltyProgramId": 1143,
        "pointsConverted": 1200.0,
        "pointsConvertedType": "EXTERNAL_TRIGGER_BASED_POINTS",
        "programCurrentPoints": 1200.0,
        "programLifetimePoints": 1200.0,
        "pointsConversionSource": "systemTrigger",
        "pointsConvertedBreakup": []
    }
}
```

```
{
    "createdAt": 1739859870860,
    "loyaltyEventId": "mBbJnPSQ0XOIwF5",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34220447,
    "refId": "50402_mBbJnPSQ0XOIwF5",
    "apiRequestId": "2d726c58-0bd0-4cec-8cc1-e80c5f5325db",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201817,
            "instore": {
                "mobile": "672919878345735",
                "cardNumbers": []
            }
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 348201817
        },
        "earningActivityReference": [
            {
                "name": "TransactionAdd",
                "enteredAt": 1.739859807E12,
                "pointsConverted": 100.0,
                "identifiers": [
                    {
                        "key": "billNumber",
                        "value": "1739859806"
                    },
                    {
                        "key": "EventLogId",
                        "value": "34220423"
                    }
                ]
            }
        ],
        "loyaltyProgramDetails": {
            "id": 1143,
            "name": "Nirvana DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1.0,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "Bronze"
                },
                {
                    "tierNumber": 2,
                    "tierName": "Silver"
                },
                {
                    "tierNumber": 3,
                    "tierName": "Gold"
                }
            ]
        },
        "loyaltyProgramId": 1143,
        "pointsConverted": 100.0,
        "pointsConvertedType": "PROMISED_POINTS",
        "programCurrentPoints": 0.0,
        "programLifetimePoints": 0.0,
        "pointsConversionSource": "systemTrigger",
        "pointsConvertedBreakup": []
    }
}
```

```
{
    "createdAt": 1739859870860,
    "loyaltyEventId": "mBbJnPSQ0XOIwF5",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34220447,
    "refId": "50402_mBbJnPSQ0XOIwF5",
    "apiRequestId": "2d726c58-0bd0-4cec-8cc1-e80c5f5325db",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201817,
            "instore": {
                "mobile": "672919878345735",
                "cardNumbers": []
            }
        },
        "entityInformation": {
            "entityType": "USER",
            "entityId": 348201817
        },
        "earningActivityReference": [
            {
                "name": "TransactionAdd",
                "enteredAt": 1.739859807E12,
                "pointsConverted": 100.0,
                "identifiers": [
                    {
                        "key": "billNumber",
                        "value": "1739859806"
                    },
                    {
                        "key": "EventLogId",
                        "value": "34220423"
                    }
                ]
            }
        ],
        "loyaltyProgramDetails": {
            "id": 1143,
            "name": "Nirvana DefaultProgram",
            "isDefault": true,
            "pointsToCurrencyRatio": 1.0,
            "tiers": [
                {
                    "tierNumber": 1,
                    "tierName": "Bronze"
                },
                {
                    "tierNumber": 2,
                    "tierName": "Silver"
                },
                {
                    "tierNumber": 3,
                    "tierName": "Gold"
                }
            ]
        },
        "loyaltyProgramId": 1143,
        "pointsConverted": 100.0,
        "pointsConvertedType": "PROMISED_POINTS",
        "programCurrentPoints": 0.0,
        "programLifetimePoints": 0.0,
        "pointsConversionSource": "systemTrigger",
        "pointsConvertedBreakup": []
    }
}
```

```
{
    "createdAt": 1739860477069,
    "loyaltyEventId": "",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34220923,
    "refId": "",
    "apiRequestId": "0755f2991e6773b2e818e6a151a3d108",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201817
        },
        "earningActivityReference": [],
        "pointsConverted": 600.0,
        "eventDateTime": "2025-02-18 06:34:37",
        "pointsConversionSource": "externalTrigger",
        "eventLogId": 34220923,
        "billId": 37245321,
        "pointsConvertedBreakup": [
            {
                "entityName": "BILL",
                "entityDetails": {
                    "id": 37245321
                },
                "promotionalPointsBreakup": [],
                "nonPromotionalPointsBreakup": [
                    {
                        "points": "600.000",
                        "programId": 1143
                    }
                ]
            }
        ]
    }
}
```

```
{
    "createdAt": 1739860477069,
    "loyaltyEventId": "",
    "eventName": "promisedToCurrentPointsConversion",
    "eventLogId": 34220923,
    "refId": "",
    "apiRequestId": "0755f2991e6773b2e818e6a151a3d108",
    "orgId": 50402,
    "data": {
        "customerIdentifiers": {
            "customerId": 348201817
        },
        "earningActivityReference": [],
        "pointsConverted": 600.0,
        "eventDateTime": "2025-02-18 06:34:37",
        "pointsConversionSource": "externalTrigger",
        "eventLogId": 34220923,
        "billId": 37245321,
        "pointsConvertedBreakup": [
            {
                "entityName": "BILL",
                "entityDetails": {
                    "id": 37245321
                },
                "promotionalPointsBreakup": [],
                "nonPromotionalPointsBreakup": [
                    {
                        "points": "600.000",
                        "programId": 1143
                    }
                ]
            }
        ]
    }
}
```

# Coupon

## Coupon Issue Event (CouponIssue)

Notifies when a coupon has been issued to a user.

```
{
   "eventName":"CouponIssue",
   "eventId":"78871533-bec4-457b-8dce-17bc38a5a2d1",
   "orgId":1231,
   "refId":"1231_353122_397759647:397759647",
   "apiRequestId":"08ccc811706f99919580fdf035c52a72",
   "createdAt":1630927651741,
   "data":{
      "addedAt":1630927651741,
      "addedBy":{
         "id":15071481
      },
      "coupons":[
         {
            "id":397759647,
            "code":"2YPHHFQR",
            "valid_till":2556124199000,
            "issued_on":1630927651000,
            "customerIdentifiers":{
               "customerId":414935964
            }
         }
      ],
      "series_info":{
         "id":353122,
         "description":"traffic_simulator",
         "seriesType":"LOYALTY",
         "clientHandlingType":"DISC_CODE",
         "valid_till":2556037800000,
         "discount_code":"NO_VALUE",
         "discount_type":"ABS",
         "discount_value":500
      },
      "issualType":"SINGLE"
   },
   "loyaltyEventId":null
}
```

```
{
   "eventName":"CouponIssue",
   "eventId":"78871533-bec4-457b-8dce-17bc38a5a2d1",
   "orgId":1231,
   "refId":"1231_353122_397759647:397759647",
   "apiRequestId":"08ccc811706f99919580fdf035c52a72",
   "createdAt":1630927651741,
   "data":{
      "addedAt":1630927651741,
      "addedBy":{
         "id":15071481
      },
      "coupons":[
         {
            "id":397759647,
            "code":"2YPHHFQR",
            "valid_till":2556124199000,
            "issued_on":1630927651000,
            "customerIdentifiers":{
               "customerId":414935964
            }
         }
      ],
      "series_info":{
         "id":353122,
         "description":"traffic_simulator",
         "seriesType":"LOYALTY",
         "clientHandlingType":"DISC_CODE",
         "valid_till":2556037800000,
         "discount_code":"NO_VALUE",
         "discount_type":"ABS",
         "discount_value":500
      },
      "issualType":"SINGLE"
   },
   "loyaltyEventId":null
}
```

## Coupon Redeem Event (CouponRedeem)

Notifies when a user has redeemed a coupon.

```
{
  "eventName": "CouponRedeem",
  "eventId": "edc7931a-c1f1-49a6-85f8-41878bbe20ee",
  "orgId": 998,
  "refId": "998_105710_13278432",
  "apiRequestId": "e422a015080377989a23b583e72d849a",
  "createdAt": 1724904056455,
  "data": {
    "addedAt": 1724904056455,
    "addedBy": {
      "id": 12808452
    },
    "coupon": {
      "id": 792947747,
      "code": "STATUSPAGE1",
      "redemptionId": 13278432,
      "redemptionDate": 1724904056000,
      "series_info": {
        "id": 105710,
        "description": "Status_Page_Redeem",
        "seriesType": "LOYALTY",
        "clientHandlingType": "DISC_CODE_PIN",
        "valid_till": 4772066295000,
        "discount_code": "NO_VALUE",
        "discount_type": "ABS",
        "discount_value": 10
      }
    },
    "customerIdentifiers": {
      "customerId": 362028955
    },
    "transaction": {
      "bill_id": 0,
      "number": ""
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "CouponRedeem",
  "eventId": "edc7931a-c1f1-49a6-85f8-41878bbe20ee",
  "orgId": 998,
  "refId": "998_105710_13278432",
  "apiRequestId": "e422a015080377989a23b583e72d849a",
  "createdAt": 1724904056455,
  "data": {
    "addedAt": 1724904056455,
    "addedBy": {
      "id": 12808452
    },
    "coupon": {
      "id": 792947747,
      "code": "STATUSPAGE1",
      "redemptionId": 13278432,
      "redemptionDate": 1724904056000,
      "series_info": {
        "id": 105710,
        "description": "Status_Page_Redeem",
        "seriesType": "LOYALTY",
        "clientHandlingType": "DISC_CODE_PIN",
        "valid_till": 4772066295000,
        "discount_code": "NO_VALUE",
        "discount_type": "ABS",
        "discount_value": 10
      }
    },
    "customerIdentifiers": {
      "customerId": 362028955
    },
    "transaction": {
      "bill_id": 0,
      "number": ""
    }
  },
  "loyaltyEventId": null
}
```

## Issue Bulk Coupon with Count (CouponIssue)

Notifies when bulk coupons are issued

```
{
  "eventName": "CouponIssue",
  "eventId": "de068e40-06e0-4176-b876-ccd4b602347a",
  "orgId": 998,
  "refId": "998_516557_1241056561:1241056570",
  "apiRequestId": "rohan_test",
  "createdAt": 1724907145664,
  "data": {
    "addedAt": 1724907145664,
    "addedBy": {
      "id": 50026273
    },
    "coupons": [
      {
        "id": 1241056561,
        "code": "VQ3U9146",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056562,
        "code": "0TM4WNMA",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056563,
        "code": "T4ZB61TH",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056564,
        "code": "AM70QPZP",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056565,
        "code": "6NR39R38",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056566,
        "code": "BODWSTE5",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056567,
        "code": "TOG3B75Z",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056568,
        "code": "SC5M5CBR",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056569,
        "code": "MXAYVOCB",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056570,
        "code": "C6NPTDX9",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      }
    ],
    "series_info": {
      "id": 516557,
      "description": "Rohan test",
      "seriesType": "UNDEFINED",
      "clientHandlingType": "DISC_CODE",
      "valid_till": 1726165800000,
      "discount_code": "NO_VALUE",
      "discount_type": "ABS",
      "discount_value": 10
    },
    "issualType": "SINGLE"
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "CouponIssue",
  "eventId": "de068e40-06e0-4176-b876-ccd4b602347a",
  "orgId": 998,
  "refId": "998_516557_1241056561:1241056570",
  "apiRequestId": "rohan_test",
  "createdAt": 1724907145664,
  "data": {
    "addedAt": 1724907145664,
    "addedBy": {
      "id": 50026273
    },
    "coupons": [
      {
        "id": 1241056561,
        "code": "VQ3U9146",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056562,
        "code": "0TM4WNMA",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056563,
        "code": "T4ZB61TH",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056564,
        "code": "AM70QPZP",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056565,
        "code": "6NR39R38",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056566,
        "code": "BODWSTE5",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056567,
        "code": "TOG3B75Z",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056568,
        "code": "SC5M5CBR",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056569,
        "code": "MXAYVOCB",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      },
      {
        "id": 1241056570,
        "code": "C6NPTDX9",
        "valid_till": 1726252199000,
        "issued_on": 1724907145000,
        "customerIdentifiers": {
          "customerId": 423813652
        }
      }
    ],
    "series_info": {
      "id": 516557,
      "description": "Rohan test",
      "seriesType": "UNDEFINED",
      "clientHandlingType": "DISC_CODE",
      "valid_till": 1726165800000,
      "discount_code": "NO_VALUE",
      "discount_type": "ABS",
      "discount_value": 10
    },
    "issualType": "SINGLE"
  },
  "loyaltyEventId": null
}
```

# Tier

## Tier Upgraded (tierUpgraded)

Notifies when a user's tier is upgraded.

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720440349027.0,
    "data": {
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "notes": "notes",
        "previousTierNumber": 1676.0,
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        },
        "upgradeType": "upgradeType",
        "upgradedTierNumber": 1676.0
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierUpgraded",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}
```

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720440349027.0,
    "data": {
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "notes": "notes",
        "previousTierNumber": 1676.0,
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        },
        "upgradeType": "upgradeType",
        "upgradedTierNumber": 1676.0
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierUpgraded",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}
```

## Tier Renewed Event (tierRenewed)

Notifies when a user's tier has been renewed.

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720435141002.0,
    "data": {
        "currentTierNumber": 1676.0,
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "notes": "notes",
        "renewType": "renewType",
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierRenewed",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807" }
```

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720435141002.0,
    "data": {
        "currentTierNumber": 1676.0,
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "notes": "notes",
        "renewType": "renewType",
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierRenewed",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807" }
```

## Tier Downgraded Event (tierDowngraded)

Notifies when a user's tier is downgraded. Includes the downgraded tier information.

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720435042600.0,
    "data": {
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "downgradedTierNumber": 1676.0,
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "previousTierNumber": 1676.0,
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierDowngraded",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}
```

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720435042600.0,
    "data": {
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "downgradedTierNumber": 1676.0,
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "previousTierNumber": 1676.0,
        "tierExpiryDate": "tierExpiryDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierDowngraded",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}
```

## Tier Downgrade Reminder Event (tierDowngradeReminder)

Notifies when a user is approaching a tier downgrade.

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720440490349.0,
    "data": {
        "currentTierNumber": 1676.0,
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "scheduledDowngradeDate": "scheduledDowngradeDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierDowngradeReminder",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}
```

```
{
    "apiRequestId": "1344ffd5-7b6f-4af0-a23d-ce354da13c76",
    "createdAt": 1720440490349.0,
    "data": {
        "currentTierNumber": 1676.0,
        "customerIdentifiers": {
            "customerId": 379499720.0
        },
        "entityInformation": {
            "entityId": 1676.0,
            "entityType": "entityType"
        },
        "loyaltyProgramDetails": {
            "id": 1676.0,
            "isDefault": null,
            "name": "name",
            "pointsToCurrencyRatio": 1677.0,
            "tiers": null
        },
        "loyaltyProgramId": 1676.0,
        "scheduledDowngradeDate": "scheduledDowngradeDate",
        "triggeringActivity": {
            "additionalAttributes": null,
            "enteredBy": null,
            "entityInformation": null,
            "identifiers": null,
            "name": "name"
        }
    },
    "eventId": "ccf65d56-1e34-4282-b9ad-8fe3fe558b74",
    "eventName": "tierDowngradeReminder",
    "loyaltyEventId": null,
    "orgId": 50952.0,
    "refId": "50952_7250807"
}
```

# Partner Program

A partner program is a loyalty program that is created outside the Capillary platform.

### Partner Program Linked (partnerProgramLinked)

Notifies when a user is linked to a partner program.

```
{
  "eventId": "1b049b7f-9363-464c-beaf-0c7c2f1f8a12",
  "eventType": "partnerProgramLinked",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683871605623,
  "attributes": {
    "createdAt": 1683871605603,
    "data": {
      "customerIdentifiers": {
        "customerId": 6809254,
        "instore": {
          "mobile": "6590688093",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6809254
      },
      "loyaltyProgramId": 1115,
      "partnerProgramId": 45,
      "partnerProgramName": "Drivers ",
      "partnerProgramType": "SUPPLEMENTARY",
      "customerPartnerProgramDetails": {
        "membershipExpiryDate": "2123-05-12"
      }
    },
    "eventName": "partnerProgramLinked",
    "refId": "151197_C3zPfmvsZL ",
    "apiRequestId": "5ba71b8f-5557-4a68-86b9-8e597722ce16",
    "orgId": 151197
  }
}
```

```
{
  "eventId": "1b049b7f-9363-464c-beaf-0c7c2f1f8a12",
  "eventType": "partnerProgramLinked",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683871605623,
  "attributes": {
    "createdAt": 1683871605603,
    "data": {
      "customerIdentifiers": {
        "customerId": 6809254,
        "instore": {
          "mobile": "6590688093",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6809254
      },
      "loyaltyProgramId": 1115,
      "partnerProgramId": 45,
      "partnerProgramName": "Drivers ",
      "partnerProgramType": "SUPPLEMENTARY",
      "customerPartnerProgramDetails": {
        "membershipExpiryDate": "2123-05-12"
      }
    },
    "eventName": "partnerProgramLinked",
    "refId": "151197_C3zPfmvsZL ",
    "apiRequestId": "5ba71b8f-5557-4a68-86b9-8e597722ce16",
    "orgId": 151197
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Partner Program Updated (partnerProgramUpdated)

Notifies when a partner program is updated.

```
{
   "eventName":"partnerProgramUpdated",
   "eventId":"caff89da-4c1c-4a5c-a27d-8f4f6f74f541",
   "orgId":50191,
   "refId":"50191_esJyjQ23RQ",
   "apiRequestId":"95d1d0d76dda1565a3c2905f230c3975",
   "createdAt":1622457292026,
   "data":{
      "customerIdentifiers":{
         "customerId":354971193,
         "instore":{
            "mobile":"919666308709",
            "email":"[email protected]",
            "externalId":"919666308709"
         }
      },
      "loyaltyProgramId":855,
      "partnerProgramId":25,
      "partnerProgramName":"Demo-p1",
      "partnerProgramType":"EXTERNAL",
      "updateType":"UPGRADE",
      "customerPartnerProgramDetails":{
         "partnerTierExpiryDate":"2021-06-29",
         "partnerTierNumber":2,
         "membershipNumber":"123-asa3"
      }
   },
   "loyaltyEventId":null
}
```

```
{
   "eventName":"partnerProgramUpdated",
   "eventId":"caff89da-4c1c-4a5c-a27d-8f4f6f74f541",
   "orgId":50191,
   "refId":"50191_esJyjQ23RQ",
   "apiRequestId":"95d1d0d76dda1565a3c2905f230c3975",
   "createdAt":1622457292026,
   "data":{
      "customerIdentifiers":{
         "customerId":354971193,
         "instore":{
            "mobile":"919666308709",
            "email":"[email protected]",
            "externalId":"919666308709"
         }
      },
      "loyaltyProgramId":855,
      "partnerProgramId":25,
      "partnerProgramName":"Demo-p1",
      "partnerProgramType":"EXTERNAL",
      "updateType":"UPGRADE",
      "customerPartnerProgramDetails":{
         "partnerTierExpiryDate":"2021-06-29",
         "partnerTierNumber":2,
         "membershipNumber":"123-asa3"
      }
   },
   "loyaltyEventId":null
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Partner Program Delinked (partnerProgramDelinked)

Notifies when a partner program linked to a user's loyalty program is removed.

```
{
  "eventId": "1ef12ace-12f2-41c6-9655-7c016f5adb65",
  "eventType": "partnerProgramDelinked",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683872179078,
  "attributes": {
    "createdAt": 1683872179035,
    "data": {
      "customerIdentifiers": {
        "customerId": 6529619,
        "instore": {
          "mobile": "658750602 4",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6529619
      },
      "loyaltyProgramId": 1115,
      "partnerProgramId": 46,
      "partnerProgramName": " Riders",
      "partnerProgramType": "SUPPLEMENTARY"
    },
    "eventName": "partnerProgramDelinked",
    "refId": "151197_j6THoPLbHd",
    "apiRequestId": "cd49688e-2bb6-4ca5-bfd4-5ec8acb10678",
    "orgId ": 151197
  }
}
```

```
{
  "eventId": "1ef12ace-12f2-41c6-9655-7c016f5adb65",
  "eventType": "partnerProgramDelinked",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683872179078,
  "attributes": {
    "createdAt": 1683872179035,
    "data": {
      "customerIdentifiers": {
        "customerId": 6529619,
        "instore": {
          "mobile": "658750602 4",
          "email": "[email protected]"
        }
      },
      "entityInformation": {
        "entityType": "USER",
        "entityId": 6529619
      },
      "loyaltyProgramId": 1115,
      "partnerProgramId": 46,
      "partnerProgramName": " Riders",
      "partnerProgramType": "SUPPLEMENTARY"
    },
    "eventName": "partnerProgramDelinked",
    "refId": "151197_j6THoPLbHd",
    "apiRequestId": "cd49688e-2bb6-4ca5-bfd4-5ec8acb10678",
    "orgId ": 151197
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Supplementary Partner Program Expiry Reminder (supplementaryMembershipExpiryReminder)

Notifies when a a supplementary membership linked to a loyalty program is about to expire. A supplementary loyalty program is a smaller program that operates alongside primary loyalty programs but runs for a shorter duration.

```
{
   "eventName":"supplementaryMembershipExpiryReminder",
   "eventId":"e084e887-e1d5-45cf-b2bf-55024efeb8fe",
   "orgId":50191,
   "refId":"50191_90ab89ff-ca0d-4ccd-8b40-2b36614d4c20_b1",
   "apiRequestId":"dee1c05f-bbd1-407e-8244-ec4f36a8dcf3",
   "createdAt":1622518207403,
   "data":{
      "customerIdentifiers":{
         "customerId":354971186,
         "instore":{
            "mobile":"919100166820",
            "email":"[email protected]",
            "externalId":"919100166820"
         }
      },
      "loyaltyProgramId":855,
      "partnerProgramId":22,
      "partnerProgramName":"SPprogram1",
      "scheduledExpiryDate":"2021-06-01"
   },
   "loyaltyEventId":null
}
```

```
{
   "eventName":"supplementaryMembershipExpiryReminder",
   "eventId":"e084e887-e1d5-45cf-b2bf-55024efeb8fe",
   "orgId":50191,
   "refId":"50191_90ab89ff-ca0d-4ccd-8b40-2b36614d4c20_b1",
   "apiRequestId":"dee1c05f-bbd1-407e-8244-ec4f36a8dcf3",
   "createdAt":1622518207403,
   "data":{
      "customerIdentifiers":{
         "customerId":354971186,
         "instore":{
            "mobile":"919100166820",
            "email":"[email protected]",
            "externalId":"919100166820"
         }
      },
      "loyaltyProgramId":855,
      "partnerProgramId":22,
      "partnerProgramName":"SPprogram1",
      "scheduledExpiryDate":"2021-06-01"
   },
   "loyaltyEventId":null
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# Rewards

## Reward Created Event (rewardCreated)

Notifes when a reward has been created.

```
{
        "eventName": "rewardCreated",
        "data": {
            "rewardId": 3577,
            "type": "RWJZRCHR",
            "enabled": true,
            "redemptionType": "DONVGEYVJ",
            "startDate": 2282,
            "endDate": 8892,
            "intouchPoints": 2878,
            "intouchSeriesId": "EKUWHLF",
            "priority": 1255,
            "tier": "MTFNKDMD",
            "group": "YXDO",
            "label": "NYHT",
            "programId": 5312,
            "categories": [
                494
            ],
            "geographies": [
                {
                    "countryId": 3963,
                    "cityId": 865,
                    "areaId": 9090
                }
            ],
            "rewardDetails": [
                {
                    "languageCode": "MIFATOGHF",
                    "name": "AMOAFMKNN",
                    "description": "IYUC",
                    "termAndConditionsId": "XDDSRQT",
                    "termAndConditionsUrl": "ETRRGCUDA",
                    "imageId": "WNWGYYALI",
                    "imageUrl": "ICSXRWQR",
                    "thumbnailId": "RZOANKQN",
                    "thumbnailUrl": "KSUJFRSOM",
                    "images": [
                        {
                            "name": "QFQSSEUNN",
                            "id": "KUPNA",
                            "url": "NYISMVQAKY"
                        }
                    ],
                    "videos": [
                        {
                            "name": "POXEPXZZH",
                            "id": "DAHGZZYZK",
                            "url": "UZFY",
                            "isExternal": true
                        }
                    ]
                }
            ],
            "vendorDetails": {
                "id": 4596,
                "name": "VLUDFK"
            },
            "vendorRedemptionDetails": {
                "id": 6257,
                "name": "KAV"
            }
        },
        "eventId": "KHANVC",
        "orgId": 4183,
        "refId": "EAO",
        "apiRequestId": "OHB",
        "createdAt": 4109,
        "loyaltyEventId": "BSWJ",
        "traceAttributes": {
            "TCP": "EVUUCGREU",
            "UQZDTDB": "LHFOS",
            "LITXMR": "XJYGUSFS",
            "XVECI": "ZMMFUDDDUU"
        }
    }
```

```
{
        "eventName": "rewardCreated",
        "data": {
            "rewardId": 3577,
            "type": "RWJZRCHR",
            "enabled": true,
            "redemptionType": "DONVGEYVJ",
            "startDate": 2282,
            "endDate": 8892,
            "intouchPoints": 2878,
            "intouchSeriesId": "EKUWHLF",
            "priority": 1255,
            "tier": "MTFNKDMD",
            "group": "YXDO",
            "label": "NYHT",
            "programId": 5312,
            "categories": [
                494
            ],
            "geographies": [
                {
                    "countryId": 3963,
                    "cityId": 865,
                    "areaId": 9090
                }
            ],
            "rewardDetails": [
                {
                    "languageCode": "MIFATOGHF",
                    "name": "AMOAFMKNN",
                    "description": "IYUC",
                    "termAndConditionsId": "XDDSRQT",
                    "termAndConditionsUrl": "ETRRGCUDA",
                    "imageId": "WNWGYYALI",
                    "imageUrl": "ICSXRWQR",
                    "thumbnailId": "RZOANKQN",
                    "thumbnailUrl": "KSUJFRSOM",
                    "images": [
                        {
                            "name": "QFQSSEUNN",
                            "id": "KUPNA",
                            "url": "NYISMVQAKY"
                        }
                    ],
                    "videos": [
                        {
                            "name": "POXEPXZZH",
                            "id": "DAHGZZYZK",
                            "url": "UZFY",
                            "isExternal": true
                        }
                    ]
                }
            ],
            "vendorDetails": {
                "id": 4596,
                "name": "VLUDFK"
            },
            "vendorRedemptionDetails": {
                "id": 6257,
                "name": "KAV"
            }
        },
        "eventId": "KHANVC",
        "orgId": 4183,
        "refId": "EAO",
        "apiRequestId": "OHB",
        "createdAt": 4109,
        "loyaltyEventId": "BSWJ",
        "traceAttributes": {
            "TCP": "EVUUCGREU",
            "UQZDTDB": "LHFOS",
            "LITXMR": "XJYGUSFS",
            "XVECI": "ZMMFUDDDUU"
        }
    }
```

## Reward Issued Event (rewardIssued)

Notifies when a reward is issued.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event. |

| data | Object | Contains detailed information about the reward issuance. |

| customerIdentifiers | Object | Identifiers for the customer associated with the reward. |

| customerId | Long | Unique customer ID. |

| instore | Object | Details about the customer's in-store information. |

| mobile | String | Customer's mobile number. |

| email | String | Customer's email address. |

| externalId | String | External identifier for the customer. |

| cardNumbers | Array | List of associated card numbers. |

| rewardId | Long | Unique identifier for the reward. |

| type | String | The type of reward. |

| redemptionType | String | Specifies the redemption type. |

| startDate | Long | Start date of the reward in milliseconds in epoch format. |

| endDate | Long | End date of the reward in milliseconds in epoch format. |

| intouchPoints | Integer | Points allocated for the reward. |

| priority | Integer | Priority level of the reward. |

| group | String | The group associated with the reward. |

| label | String | The label associated with the reward. |

| transactionId | String | Identifier for the transaction related to the reward issuance. |

| vendorRewardDetails | Object | Details specific to vendor-related rewards. |

| vendorVoucher | String | Unique identifier for the vendor voucher. |

| orgId | Integer | Organization ID issuing the reward. |

| refId | String | Reference ID combining orgId and rewardId. |

| apiRequestId | String | Unique identifier for the API request. |

| createdAt | Long | Timestamp of when the event was created in milliseconds since epoch. |

| traceAttributes | Object | Metadata for tracing and debugging purposes. |

| requestId | String | Request ID associated with the API call. |



```
{
  "eventName" : "rewardIssued",
  "data" : {
    "customerIdentifiers" : {
      "customerId" : 84793759919,
      "instore" : {
        "mobile" : "84793759919",
        "email" : "[email protected]",
        "externalId" : "847937599191",
        "cardNumbers" : [ ]
      }
    },
    "rewardId" : 1,
    "type" : "POINTS",
    "redemptionType" : "VENDOR_ONLY_REWARD",
    "startDate" : 1735839125000,
    "endDate" : 1767292200000,
    "intouchPoints" : 10,
    "priority" : 1,
    "group" : "Group",
    "label" : "Label",
    "transactionId" : "1",
    "vendorRewardDetails" : {
      "vendorVoucher" : "6a690ff9-0bcf-4b95-9fd4-516eadcd98de"
    }
  },
  "orgId" : 123,
  "refId" : "123_1",
  "apiRequestId" : "1e802a0a-4a06-4e91-98fe-33c128b92bbb",
  "createdAt" : 1735839142990,
  "traceAttributes" : {
    "X-CAP-API-AUTH-ORG-ID" : "123",
    "x-cap-lineage-id" : "trace-id",
    "x-cap-lineage-start" : "2025-01-02T17:32:21.843934Z",
    "requestId" : "1e802a0a-4a06-4e91-98fe-33c128b92bbb"
  }
}
```

```
{
  "eventName" : "rewardIssued",
  "data" : {
    "customerIdentifiers" : {
      "customerId" : 84793759919,
      "instore" : {
        "mobile" : "84793759919",
        "email" : "[email protected]",
        "externalId" : "847937599191",
        "cardNumbers" : [ ]
      }
    },
    "rewardId" : 1,
    "type" : "POINTS",
    "redemptionType" : "VENDOR_ONLY_REWARD",
    "startDate" : 1735839125000,
    "endDate" : 1767292200000,
    "intouchPoints" : 10,
    "priority" : 1,
    "group" : "Group",
    "label" : "Label",
    "transactionId" : "1",
    "vendorRewardDetails" : {
      "vendorVoucher" : "6a690ff9-0bcf-4b95-9fd4-516eadcd98de"
    }
  },
  "orgId" : 123,
  "refId" : "123_1",
  "apiRequestId" : "1e802a0a-4a06-4e91-98fe-33c128b92bbb",
  "createdAt" : 1735839142990,
  "traceAttributes" : {
    "X-CAP-API-AUTH-ORG-ID" : "123",
    "x-cap-lineage-id" : "trace-id",
    "x-cap-lineage-start" : "2025-01-02T17:32:21.843934Z",
    "requestId" : "1e802a0a-4a06-4e91-98fe-33c128b92bbb"
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Reward Updated Event (rewardUpdated)

Notifies when a reward configuration in the loyalty program has been updated. This could involve changes such as enabling/disabling the reward, altering redemption types, adjusting start/end dates, or modifying associated tiers, geographies, and reward details.

```
{
    "data": {
        "eventName": "rewardUpdated",
        "data": {
            "rewardId": 6893,
            "type": "CAEXWJPEZO",
            "enabled": false,
            "redemptionType": "EPZUOSGR",
            "startDate": 7623,
            "endDate": 6189,
            "intouchPoints": 1407,
            "intouchSeriesId": "BFXJSU",
            "priority": 7763,
            "tier": "DOI",
            "group": "ZHVOHXO",
            "label": "ZQTXLRXXU",
            "programId": 3734,
            "categories": [
                2456
            ],
            "geographies": [
                {
                    "countryId": 7234,
                    "cityId": 4408,
                    "areaId": 503
                }
            ],
            "rewardDetails": [
                {
                    "languageCode": "QTHHY",
                    "name": "NWXPK",
                    "description": "CMZPFGPESU",
                    "termAndConditionsId": "ARC",
                    "termAndConditionsUrl": "QZJWUUL",
                    "imageId": "LQEIVE",
                    "imageUrl": "PYQZTLP",
                    "thumbnailId": "JOPOSPIDT",
                    "thumbnailUrl": "XMUGUEQ",
                    "images": [
                        {
                            "name": "OXCXRABXPY",
                            "id": "SSL",
                            "url": "BWRMREX"
                        }
                    ],
                    "videos": [
                        {
                            "name": "RNKU",
                            "id": "MLKG",
                            "url": "JIFFPTTJ",
                            "isExternal": true
                        }
                    ]
                }
            ],
            "vendorDetails": {
                "id": 90,
                "name": "VLHNBHSS"
            },
            "vendorRedemptionDetails": {
                "id": 2831,
                "name": "JSPAKSOT"
            }
        },
        "eventId": "JRNOEHQOO",
        "orgId": 6221,
        "refId": "HWEWC",
        "apiRequestId": "IQWOE",
        "createdAt": 1245,
        "loyaltyEventId": "IRF",
        "traceAttributes": {
            "TRQWWW": "LOOQUXB",
            "OSCLIPDZMD": "BMBTFP",
            "WIWJX": "UKFSJCFV"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "eventName": "rewardUpdated",
        "data": {
            "rewardId": 6893,
            "type": "CAEXWJPEZO",
            "enabled": false,
            "redemptionType": "EPZUOSGR",
            "startDate": 7623,
            "endDate": 6189,
            "intouchPoints": 1407,
            "intouchSeriesId": "BFXJSU",
            "priority": 7763,
            "tier": "DOI",
            "group": "ZHVOHXO",
            "label": "ZQTXLRXXU",
            "programId": 3734,
            "categories": [
                2456
            ],
            "geographies": [
                {
                    "countryId": 7234,
                    "cityId": 4408,
                    "areaId": 503
                }
            ],
            "rewardDetails": [
                {
                    "languageCode": "QTHHY",
                    "name": "NWXPK",
                    "description": "CMZPFGPESU",
                    "termAndConditionsId": "ARC",
                    "termAndConditionsUrl": "QZJWUUL",
                    "imageId": "LQEIVE",
                    "imageUrl": "PYQZTLP",
                    "thumbnailId": "JOPOSPIDT",
                    "thumbnailUrl": "XMUGUEQ",
                    "images": [
                        {
                            "name": "OXCXRABXPY",
                            "id": "SSL",
                            "url": "BWRMREX"
                        }
                    ],
                    "videos": [
                        {
                            "name": "RNKU",
                            "id": "MLKG",
                            "url": "JIFFPTTJ",
                            "isExternal": true
                        }
                    ]
                }
            ],
            "vendorDetails": {
                "id": 90,
                "name": "VLHNBHSS"
            },
            "vendorRedemptionDetails": {
                "id": 2831,
                "name": "JSPAKSOT"
            }
        },
        "eventId": "JRNOEHQOO",
        "orgId": 6221,
        "refId": "HWEWC",
        "apiRequestId": "IQWOE",
        "createdAt": 1245,
        "loyaltyEventId": "IRF",
        "traceAttributes": {
            "TRQWWW": "LOOQUXB",
            "OSCLIPDZMD": "BMBTFP",
            "WIWJX": "UKFSJCFV"
        }
    },
    "errors": null,
    "warnings": null
}
```

## Issue Reward Failure Event (issueRewardFailure)

Notifies when a reward issue fails.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventId | String | Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event.If duplicate, the consumer should ignore the event. |

| eventType | String | Type of the event. |

| consumerGroupId | String | ID of the consumer group. |

| actionType | String | Action type associated with the event. |

| timeStamp | Long | Timestamp when the event occurred. |

| attributes | Object | Additional attributes related to the event. |

| createdAt | Long | Timestamp of when the attributes were created. |

| data | Object | Contains detailed information about the failure event. |

| customerIdentifiers | Object | Identifiers for the customer. |

| customerId | Integer | Unique ID for the customer. |

| instore | Object | Instore information for the customer. |

| mobile | String | Customer's mobile number. |

| email | String | Customer's email address. |

| externalId | String | External identifier for the customer. |

| requestId | String | Unique identifier for the request. |

| totalPoints | Integer | Total points involved in the reward transaction. |

| erroredSteps | Array | List of steps where errors occurred. |

| name | String | Name of the errored step. |

| errorMessage | String | Error message associated with the step. |

| errorCode | Integer | Error code for the issue. |

| rewards | Array | List of rewards affected by the error. |

| id | Integer | Reward ID. |

| qty | Integer | Quantity of the reward. |

| points | Integer | Points associated with the reward. |

| type | String | Type of reward. |

| rewardReference | String | Reference identifier for the reward. |

| transactionId | String | Identifier for the associated transaction. |

| eventName | String | Name of the event. |

| refId | String | Reference ID combining orgId and requestId. |

| apiRequestId | String | Unique identifier for the API request. |

| orgId | Integer | Organization ID associated with the event. |



```
{
  "eventId": "a85bbecd-ac92-4893-8dda-a67c0433100c",
  "eventType": "issueRewardFailure",
  "consumerGroupId": null,
  "actionT ype": "START",
  "timeStamp": 1683874809673,
  "attributes": {
    "createdAt": 1683874809656,
    "data": {
      "customerIdentifiers": {
        "customerId": 4299480,
        "instore": {
          "mobile": "6590116229",
          "email": "[email protected]",
          "externalId": "8099792344"
        }
      },
      "requestId": "0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
      "totalPoints": 10,
      "erroredSteps": [
        {
          "name": "ISSUE_REWARD",
          "errorMessage": "Unknown error : MAX_COUPON_ISSUAL_PER_USER_EXCEEDED",
          "errorCode": 730,
          "rewards": [
            {
              "id": 57141,
              "qty": 1,
              "points": 10,
              "type": "VOUCHER",
              "rewardReference": "736",
              "transactionId":12344
            }
          ]
        }
      ]
    },
    "eventName": "issueRewardFailure",
    "refId": "151197_0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
    "apiRequestId": "0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
    "orgId": 151197
  }
}
```

```
{
  "eventId": "a85bbecd-ac92-4893-8dda-a67c0433100c",
  "eventType": "issueRewardFailure",
  "consumerGroupId": null,
  "actionT ype": "START",
  "timeStamp": 1683874809673,
  "attributes": {
    "createdAt": 1683874809656,
    "data": {
      "customerIdentifiers": {
        "customerId": 4299480,
        "instore": {
          "mobile": "6590116229",
          "email": "[email protected]",
          "externalId": "8099792344"
        }
      },
      "requestId": "0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
      "totalPoints": 10,
      "erroredSteps": [
        {
          "name": "ISSUE_REWARD",
          "errorMessage": "Unknown error : MAX_COUPON_ISSUAL_PER_USER_EXCEEDED",
          "errorCode": 730,
          "rewards": [
            {
              "id": 57141,
              "qty": 1,
              "points": 10,
              "type": "VOUCHER",
              "rewardReference": "736",
              "transactionId":12344
            }
          ]
        }
      ]
    },
    "eventName": "issueRewardFailure",
    "refId": "151197_0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
    "apiRequestId": "0a3731f3-e8ce-4ad4-a331-4b44d44193fe",
    "orgId": 151197
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Reward Expiry Reminder (rewardExpiryReminder)

Notifies when a reward is about to expire.

```
{
  "eventName": "rewardExpiryReminder",
  "eventId": "6b2584aa-8ebe-49de-9c1c-fcba7daed9e4",
  "orgId": 51544,
  "refId": "51544_113659",
  "apiRequestId": "eaeda000-b5a9-4c54-a5f4-2c68e7fbdee4",
  "createdAt": 1726765207054,
  "data": {
    "rewardId": 113659,
    "type": "VOUCHER",
    "enabled": true,
    "redemptionType": "MILES",
    "startDate": 1726768253000,
    "endDate": 1726769453000,
    "intouchPoints": 0,
    "intouchSeriesId": "123",
    "priority": 5,
    "rewardDetails": [
      {
        "languageCode": "en",
        "name": "testReward0001",
        "description": "GIFT_CARD partner reward for test_Rewards_content_type_GIFT_CARD",
        "termAndConditionsId": "t&c",
        "termAndConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/t%26c?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1c963b93ceae555e1ea4ab7248a3ae6cfa3f1eed5cb20a32a7974354a252293",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d290f86c87998761af877e8f1cf4b65e1031eedaf3dd0c40f992d835bf7061f6",
        "thumbnailId": "EXDR02987T",
        "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR02987T?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92de59fdb2b5b1086381090099675ab4c784eacb8d8f7381ce4f77603d6c44a4",
        "images": [
          {
            "name": "createRewardImage17265662870001",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          },
          {
            "name": "createRewardImage17265662870002",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          }
        ],
        "videos": [
          {
            "name": "createRewardImage17265662870001Video",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9",
            "isExternal": false
          },
          {
            "name": "createRewardImage17265662870002Video",
            "url": "https://youtu.be/a_aSgmOqgrA",
            "isExternal": true
          }
        ]
      },
      {
        "languageCode": "fr",
        "name": "testReward-SECOND DETAILS",
        "description": "GIFT_CARD partner reward for test_Rewards_content_type_GIFT_CARD",
        "termAndConditionsId": "t&c",
        "termAndConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/t%26c?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1c963b93ceae555e1ea4ab7248a3ae6cfa3f1eed5cb20a32a7974354a252293",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d290f86c87998761af877e8f1cf4b65e1031eedaf3dd0c40f992d835bf7061f6",
        "thumbnailId": "EXDR02987T",
        "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR02987T?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92de59fdb2b5b1086381090099675ab4c784eacb8d8f7381ce4f77603d6c44a4",
        "images": [
          {
            "name": "createRewardImage17265662870001",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          },
          {
            "name": "createRewardImage17265662870002",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          }
        ],
        "videos": [
          {
            "name": "createRewardImage17265662870001Video",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9",
            "isExternal": false
          },
          {
            "name": "createRewardImage17265662870002Video",
            "url": "https://www.youtube.com/watch?v=a_aSgmOqgrA&feature=youtu.be",
            "isExternal": true
          }
        ]
      }
    ],
    "vendorDetails": {
      "id": 138,
      "name": "Capillary_1"
    },
    "vendorRedemptionDetails": {
      "id": 7930,
      "name": "VENDOR REDEMPTION-Postman_Test-2"
    },
    "paymentModes": [
      {
        "id": 845,
        "paymentMode": "CONV_RATIO",
        "conv_ratio": 0.35
      }
    ]
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "rewardExpiryReminder",
  "eventId": "6b2584aa-8ebe-49de-9c1c-fcba7daed9e4",
  "orgId": 51544,
  "refId": "51544_113659",
  "apiRequestId": "eaeda000-b5a9-4c54-a5f4-2c68e7fbdee4",
  "createdAt": 1726765207054,
  "data": {
    "rewardId": 113659,
    "type": "VOUCHER",
    "enabled": true,
    "redemptionType": "MILES",
    "startDate": 1726768253000,
    "endDate": 1726769453000,
    "intouchPoints": 0,
    "intouchSeriesId": "123",
    "priority": 5,
    "rewardDetails": [
      {
        "languageCode": "en",
        "name": "testReward0001",
        "description": "GIFT_CARD partner reward for test_Rewards_content_type_GIFT_CARD",
        "termAndConditionsId": "t&c",
        "termAndConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/t%26c?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1c963b93ceae555e1ea4ab7248a3ae6cfa3f1eed5cb20a32a7974354a252293",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d290f86c87998761af877e8f1cf4b65e1031eedaf3dd0c40f992d835bf7061f6",
        "thumbnailId": "EXDR02987T",
        "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR02987T?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92de59fdb2b5b1086381090099675ab4c784eacb8d8f7381ce4f77603d6c44a4",
        "images": [
          {
            "name": "createRewardImage17265662870001",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          },
          {
            "name": "createRewardImage17265662870002",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          }
        ],
        "videos": [
          {
            "name": "createRewardImage17265662870001Video",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9",
            "isExternal": false
          },
          {
            "name": "createRewardImage17265662870002Video",
            "url": "https://youtu.be/a_aSgmOqgrA",
            "isExternal": true
          }
        ]
      },
      {
        "languageCode": "fr",
        "name": "testReward-SECOND DETAILS",
        "description": "GIFT_CARD partner reward for test_Rewards_content_type_GIFT_CARD",
        "termAndConditionsId": "t&c",
        "termAndConditionsUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/t%26c?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1c963b93ceae555e1ea4ab7248a3ae6cfa3f1eed5cb20a32a7974354a252293",
        "imageId": "EXDR12987U",
        "imageUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d290f86c87998761af877e8f1cf4b65e1031eedaf3dd0c40f992d835bf7061f6",
        "thumbnailId": "EXDR02987T",
        "thumbnailUrl": "https://s3.amazonaws.com/crm-nightly-new-solutions/testOrg_marvel_20230822_147/EXDR02987T?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDPfZLQAQuIIVJHT0WSLWAVxY%2FHfCb2avDbhz9MdqTieRMchpSyozExCeSW2ulzUnDfxlHco5bBoxK%2BSo7wFaiacimfoHWFqPGS7QowkCPr8HhB%2FWvFPOi88Qaah8omwtzpwSvoASTZ4EEo59HrnrKe7bBNVJ%2BDZ2OCOLAbIx3YwxWUGwd5UkxKXNvM8jocw3ypcpFMQHkobvfGwkZJ%2FautvasTMs%2FdsiswH8rxoCuuQHPGoBTb02exM1chQsWRGhIYQ64SNfxhsf4rDv9jUL0m5BzA9X8yB71QwqposiwYczslkvpnEol7GxtwYyLV%2BaXRp52GXVUVSpfADu%2Bxot4rmrMT19XTE9NFKDkocP%2BJ81VyMa5DjtdiXgew%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T170007Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNLRICZZP6%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92de59fdb2b5b1086381090099675ab4c784eacb8d8f7381ce4f77603d6c44a4",
        "images": [
          {
            "name": "createRewardImage17265662870001",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          },
          {
            "name": "createRewardImage17265662870002",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9"
          }
        ],
        "videos": [
          {
            "name": "createRewardImage17265662870001Video",
            "id": "8837347b-20f1-401e-9a77-bdafb5e3086e",
            "url": "https://crm-nightly-new-fileservice.s3.amazonaws.com/solutions/50672/59d9976a-c4d2-42b0-8193-63a42866.png?X-Amz-Security-Token=FwoGZXIvYXdzEDoaDAbTUObgoVqaJRu7EiLSAXKgjReG65ZtsQrlTbr91u%2Frd1fdxnWdz212KMGOEcxs2nExLcoPD426bpSz%2FOAYf0YBDLERxaCSj%2BiBhMHbPUnpm8k6iGUo17quKssUpQyw19spw5K%2BK0j6l5GUwGoKQS8Vh1w1UA3oy3eT4tEecylpLPh7YwmLCggL6eUan3xWFLN8mAwQDej7KXu0D71Ygay2gnh8fDG4Hn7To%2F%2BEyl9Cd9R7gvlEw%2BrNQuPjSRAcd4ZhKHp7BqzTmO%2Fyk4zXhG92LrOr7r9SGg3iahCm4FgbGiiiqbG3BjItRaS1oWd%2FnWD5cj37kPK2vXf%2Bvq3dAjYcPnwaUapcnWni5OmYBUpGMaeYi%2BF0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T164348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNCPGTBCUM%2F20240919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ad9ce8a9e48c59cd97f20db89076ee9a598a0ec1033d20a77f62fcc73c3dda9",
            "isExternal": false
          },
          {
            "name": "createRewardImage17265662870002Video",
            "url": "https://www.youtube.com/watch?v=a_aSgmOqgrA&feature=youtu.be",
            "isExternal": true
          }
        ]
      }
    ],
    "vendorDetails": {
      "id": 138,
      "name": "Capillary_1"
    },
    "vendorRedemptionDetails": {
      "id": 7930,
      "name": "VENDOR REDEMPTION-Postman_Test-2"
    },
    "paymentModes": [
      {
        "id": 845,
        "paymentMode": "CONV_RATIO",
        "conv_ratio": 0.35
      }
    ]
  },
  "loyaltyEventId": null
}
```

## Update Reward Transaction (updateRewardTransaction)

Notifies when a reward transaction such as fulfilment status or transaction custom field is updated.

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event. |

| eventId | String | Used by the consumer of the event notification for idempotency check, i.e., to check if the event is duplicate or unique before saving the event.If duplicate, the consumer should ignore the event. |

| orgId | Integer | Organization ID associated with the event. |

| refId | String | Reference ID combining the organization ID and request ID. |

| apiRequestId | String | Unique identifier for the API request. |

| createdAt | Long | Timestamp of when the event was created. |

| data | Object | Contains details of the reward transaction update. |

| transactionUpdates | Array of Objects | List of transactions with updated details. |

| transactionId | Long | Unique identifier for the transaction. |

| customerId | Long | Unique identifier for the customer. |

| fulfillmentStatus | String | Current status of the reward fulfilment, e.g.,DELIVERED. |

| transactionCustomFields | String | Custom fields related to the transaction. |

| loyaltyEventId | String | Identifier for the associated loyalty event. |



`DELIVERED`

```
{
    "data": {
        "eventName": "updateRewardTransaction",
        "data": {
            "transactionUpdates": [
                {
                    "transactionId": 3710,
                    "rewardId": 5105,
                    "customerId": 656,
                    "transactionCustomFields": {
                        "ZUSZRDHNY": "ZKXJACQERT",
                        "VRKXFCHL": "DYUVH",
                        "TCDXPR": "BGZ",
                        "RJNDR": "QEPQFYON",
                        "KPDELSW": "WCS"
                    },
                    "fulfillmentStatus": "AMKFVNM"
                }
            ]
        },
        "eventId": "ZTBDMFR",
        "orgId": 7351,
        "refId": "KRZLTAQJG",
        "apiRequestId": "PLINA",
        "createdAt": 8040,
        "loyaltyEventId": "LKEAUWC",
        "traceAttributes": {
            "IYDBI": "OVGPPZIN",
            "CNOQFSHHL": "MEXIQGAWB",
            "FUIWBRQ": "ZJCOF",
            "AZRGYG": "XYTV"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "eventName": "updateRewardTransaction",
        "data": {
            "transactionUpdates": [
                {
                    "transactionId": 3710,
                    "rewardId": 5105,
                    "customerId": 656,
                    "transactionCustomFields": {
                        "ZUSZRDHNY": "ZKXJACQERT",
                        "VRKXFCHL": "DYUVH",
                        "TCDXPR": "BGZ",
                        "RJNDR": "QEPQFYON",
                        "KPDELSW": "WCS"
                    },
                    "fulfillmentStatus": "AMKFVNM"
                }
            ]
        },
        "eventId": "ZTBDMFR",
        "orgId": 7351,
        "refId": "KRZLTAQJG",
        "apiRequestId": "PLINA",
        "createdAt": 8040,
        "loyaltyEventId": "LKEAUWC",
        "traceAttributes": {
            "IYDBI": "OVGPPZIN",
            "CNOQFSHHL": "MEXIQGAWB",
            "FUIWBRQ": "ZJCOF",
            "AZRGYG": "XYTV"
        }
    },
    "errors": null,
    "warnings": null
}
```

# Card

## Card updated event (cardUpdated)

Notifies when card details of a user is updated.

```
{
  "eventId": "20384d37-3c03-4269-83c3-8f8585d8dd06",
  "eventType": "cardUpdated",
  "consumerGroupId": null,
  "actionType": "START ",
  "timeStamp": 1683874852870,
  "attributes": {
    "createdAt": 1683874852857,
    "data": {
      "cardNumber": "event0000000000010210card",
      "previousStatusLabel": "ACTIVE",
      "currentStatusLabel": " SUSPENDED",
      "currentExtendedFields": [
        {
          "name": "limit_set_by",
          "value": "name_event0000000000010210card"
        },
        {
          "name": "card_requested_by",
          "value": "ADMIN"
        },
        {
          "name": "card_balance ",
          "value": "10.9"
        }
      ],
      "previousExtendedFields": [
        
      ],
      "currentCustomFields": [
        {
          "name": "card_custom_fields_3",
          "value": "test3"
        },
        {
          "name": "card_custom_fields_1",
          "value": "test1"
        },
        {
          "name": "card_custom_fields_2",
          "value": "test2"
        }
      ],
      "previousCustomFields": [
        
      ]
    },
    "eventName": "cardUpdated",
    "refId": "150060_1482979",
    "apiRequestId": "db7191805a6375e51cb0443 19f378178",
    "orgId": 150060
  }
}
```

```
{
  "eventId": "20384d37-3c03-4269-83c3-8f8585d8dd06",
  "eventType": "cardUpdated",
  "consumerGroupId": null,
  "actionType": "START ",
  "timeStamp": 1683874852870,
  "attributes": {
    "createdAt": 1683874852857,
    "data": {
      "cardNumber": "event0000000000010210card",
      "previousStatusLabel": "ACTIVE",
      "currentStatusLabel": " SUSPENDED",
      "currentExtendedFields": [
        {
          "name": "limit_set_by",
          "value": "name_event0000000000010210card"
        },
        {
          "name": "card_requested_by",
          "value": "ADMIN"
        },
        {
          "name": "card_balance ",
          "value": "10.9"
        }
      ],
      "previousExtendedFields": [
        
      ],
      "currentCustomFields": [
        {
          "name": "card_custom_fields_3",
          "value": "test3"
        },
        {
          "name": "card_custom_fields_1",
          "value": "test1"
        },
        {
          "name": "card_custom_fields_2",
          "value": "test2"
        }
      ],
      "previousCustomFields": [
        
      ]
    },
    "eventName": "cardUpdated",
    "refId": "150060_1482979",
    "apiRequestId": "db7191805a6375e51cb0443 19f378178",
    "orgId": 150060
  }
}
```

# Request updated

## Transaction request update (requestUpdated)

Notifies when a request is updated, such as a change in the status of a transaction request to "rejected" or "approved."

```
{
  "eventId": "0f5d96e4-f6ff-4a8a-8522-083dc0d2d0e5",
  "eventType": "requestUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683879070938,
  "attributes": {
    "createdAt": 1683879070934,
    "data": {
      "requestType": "TRANSACTION",
      "requestBaseType": "REGULAR_TXN_ADD",
      "requestTrackingId": 10585,
      "status": "REJECTED",
      "comments": "Receipt is missing information",
      "updatedAt": 1683879070915,
      "updatedBy": {
        "user": {
          "username": "1675438912_"
        },
        "id": 441
      },
      "customerIdentifiers": {
        "customerId": 16971,
        "instore": {
          "email": "[email protected]",
          "externalId": "602f0c3c-e8e3-4b7f-9b18-0b7f3448a418"
        }
      },
      "updatedFields": [
        {
          "fieldName": "status",
          "previousVal ue": "PENDING",
          "currentValue": "REJECTED"
        }
      ],
      "associatedEntityFields": [
        
      ]
    },
    "eventName": "requestUpdated",
    "refId": "2000003_10585",
    "apiRequestId": "eb93e66d-5efa-44f7-9f47-ffcd1 a91dd78",
    "orgId": 2000003
  }
}
```

```
{
  "eventId": "0f5d96e4-f6ff-4a8a-8522-083dc0d2d0e5",
  "eventType": "requestUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  "timeStamp": 1683879070938,
  "attributes": {
    "createdAt": 1683879070934,
    "data": {
      "requestType": "TRANSACTION",
      "requestBaseType": "REGULAR_TXN_ADD",
      "requestTrackingId": 10585,
      "status": "REJECTED",
      "comments": "Receipt is missing information",
      "updatedAt": 1683879070915,
      "updatedBy": {
        "user": {
          "username": "1675438912_"
        },
        "id": 441
      },
      "customerIdentifiers": {
        "customerId": 16971,
        "instore": {
          "email": "[email protected]",
          "externalId": "602f0c3c-e8e3-4b7f-9b18-0b7f3448a418"
        }
      },
      "updatedFields": [
        {
          "fieldName": "status",
          "previousVal ue": "PENDING",
          "currentValue": "REJECTED"
        }
      ],
      "associatedEntityFields": [
        
      ]
    },
    "eventName": "requestUpdated",
    "refId": "2000003_10585",
    "apiRequestId": "eb93e66d-5efa-44f7-9f47-ffcd1 a91dd78",
    "orgId": 2000003
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## PII deletion request update

Notifies when a user's personal identifiable information (PII) delete request has been updated, such as a change in the status of the request to "rejected" or "approved."

```
"eventName": "requestUpdated",
	"eventId": "48b6ad35-6232-45bf-bf41-deb77065b9e3",
	"orgId": 781,
	"createdAt": 1663690031667,
	"requestTrackingId": "7676878",
	"requestType": "CUSTOMER",
	"requestBaseType": "DELETE",
	"comments": "any request related comments",
	"status": "APPROVED",
	"customerId": 4545332,
	"data": {
		"requestId": "id",
		"createdBy": {
			"id": 15000375,
			"till": {
				"code": "kn.003",
				"name": "kn.003"
			},
			"store": {
				"code": "sskn1111",
				"name": "KNIGHT_STORE_QA",
				"externalId": "er4543",
				"externalId1": "fef343",
				"externalId2": "fef3434"
			}
		},
		"updatedFields": [{
			"fieldName": "status",
			"previousValue": "PENDING",
			"currentValue": "APPROVED"
		}]
	}
}
```

```
"eventName": "requestUpdated",
	"eventId": "48b6ad35-6232-45bf-bf41-deb77065b9e3",
	"orgId": 781,
	"createdAt": 1663690031667,
	"requestTrackingId": "7676878",
	"requestType": "CUSTOMER",
	"requestBaseType": "DELETE",
	"comments": "any request related comments",
	"status": "APPROVED",
	"customerId": 4545332,
	"data": {
		"requestId": "id",
		"createdBy": {
			"id": 15000375,
			"till": {
				"code": "kn.003",
				"name": "kn.003"
			},
			"store": {
				"code": "sskn1111",
				"name": "KNIGHT_STORE_QA",
				"externalId": "er4543",
				"externalId1": "fef343",
				"externalId2": "fef3434"
			}
		},
		"updatedFields": [{
			"fieldName": "status",
			"previousValue": "PENDING",
			"currentValue": "APPROVED"
		}]
	}
}
```

# Loyalty

## Loyalty Customer Merge Event (loyaltyCustomerMerge)

Notifies on merging of loyalty users.

```
{
  "eventName": "loyaltyCustomerMerge",
  "data": {
    "survivorCustomerIdentifiers": {
      "customerId": 163879182
    },
    "victimCustomerIdentifiers": {
      "customerId": 163879181
    },
    "triggeringActivity": {
      "name": "customerMerge",
      "identifiers": [
        
      ],
      "additionalAttributes": [
        
      ]
    },
    "enteredBy": {
      "id": -1
    },
    "survivorCustomerLoyaltySummary": [
      {
        "loyaltyProgramId": 18,
        "lifetimePoints": 200.0,
        "currentPoints": 200.0,
        "promisedPoints": 0.0,
        "tierNumber": 3
      }
    ]
  },
  "orgId": 150014,
  "refId": "150014_13960169",
  "apiRequestId": "13960169",
  "createdAt": 1683871320301
}
```

```
{
  "eventName": "loyaltyCustomerMerge",
  "data": {
    "survivorCustomerIdentifiers": {
      "customerId": 163879182
    },
    "victimCustomerIdentifiers": {
      "customerId": 163879181
    },
    "triggeringActivity": {
      "name": "customerMerge",
      "identifiers": [
        
      ],
      "additionalAttributes": [
        
      ]
    },
    "enteredBy": {
      "id": -1
    },
    "survivorCustomerLoyaltySummary": [
      {
        "loyaltyProgramId": 18,
        "lifetimePoints": 200.0,
        "currentPoints": 200.0,
        "promisedPoints": 0.0,
        "tierNumber": 3
      }
    ]
  },
  "orgId": 150014,
  "refId": "150014_13960169",
  "apiRequestId": "13960169",
  "createdAt": 1683871320301
}
```

# Milestone (Targets) & Streaks

This section contains the schemas of various milestones (also called targets) related event notifications. These will be sent to the respective brand's webhooks which brands can consume & use at their end.

Supported event notifications are:

1. Target Achieved Value Updated event

2. Target Value Updated event

3. Target Value Achieved event

4. Target period start

5. Target period end

6. Unified target achieved

7. Unified target un-achieved

8. Target enrollment

9. Streak level achievement

10. Streak level unachievement

11. Streak enrolment

12. Streak unenrolment

13. Streak start

14. Streak end

## Target Achieved Value Updated event (targetAchievedValueUpdated)

Notifies when a target achieved value has been updated. For example, a user purchases a line-item that updates the target value.

```
{
  "eventId": "58aa15c9-1a08-422d-9272-f2a1cdc3f8c1",
  "eventType": "1000006_targetAchievedValueUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  " timeStamp": 1683867642403,
  "attributes": {
    "createdAt": 1683867642385,
    "data": {
      "customerIdentifiers": {
        "customerId": 85950037
      },
      "eventName": "TransactionAdd",
      "eventId": 15,
      "targetDetails": {
        "id": 243,
        "name": "League Stage Reward_TxnCount1",
        "targetGroupId": 163,
        "targetGroupName": "League Stage Reward",
        "targetPeriodId": 61,
        "targetPeriodName": "L1"
      },
      "currentE ventTargetValue": "1",
      "achievedTargetValue": "14.000",
      "definedTargetValue": "1.000",
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "TransactionId",
            "value": "175771018"
          }
        ],
        "enteredBy": {
          "id": 100007771
        },
        "additionalAttributes": [
          
        ]
      },
      "milestoneDetails": [
        
      ],
      "transactionId": 175771018
    },
    "loyaltyEventId": "",
    "eventName": "targetAchievedValueUpdated",
    "refId": "1000006_d4658fc5bd809b780b32ad88b1e3c442",
    "apiRequestId": "d4658fc5bd809b780b32ad88b1e3c442",
    "orgId": 1000006
  }
}
```

```
{
  "eventId": "58aa15c9-1a08-422d-9272-f2a1cdc3f8c1",
  "eventType": "1000006_targetAchievedValueUpdated",
  "consumerGroupId": null,
  "actionType": "START",
  " timeStamp": 1683867642403,
  "attributes": {
    "createdAt": 1683867642385,
    "data": {
      "customerIdentifiers": {
        "customerId": 85950037
      },
      "eventName": "TransactionAdd",
      "eventId": 15,
      "targetDetails": {
        "id": 243,
        "name": "League Stage Reward_TxnCount1",
        "targetGroupId": 163,
        "targetGroupName": "League Stage Reward",
        "targetPeriodId": 61,
        "targetPeriodName": "L1"
      },
      "currentE ventTargetValue": "1",
      "achievedTargetValue": "14.000",
      "definedTargetValue": "1.000",
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "TransactionId",
            "value": "175771018"
          }
        ],
        "enteredBy": {
          "id": 100007771
        },
        "additionalAttributes": [
          
        ]
      },
      "milestoneDetails": [
        
      ],
      "transactionId": 175771018
    },
    "loyaltyEventId": "",
    "eventName": "targetAchievedValueUpdated",
    "refId": "1000006_d4658fc5bd809b780b32ad88b1e3c442",
    "apiRequestId": "d4658fc5bd809b780b32ad88b1e3c442",
    "orgId": 1000006
  }
}
```

## Target Value Achieved Event

Notifies when a user achieves the set target.

```
{
  "eventId": "59589150-8626-4841-bfc5-9f53f81af6ec",
  "eventType": "2013_targetValueAchieved",
  "consumerGroupId": "1eb18702-acaf-463c-91f8-39acc62a7c97",
  "actionType": "START",
  "timeSta mp": 1683878597209,
  "attributes": {
    "createdAt": 1683878590899,
    "data": {
      "customerIdentifiers": {
        "customerId": 504662785
      },
      "eventName": "TransactionAdd",
      "eventId": 15,
      "targetDetails": {
        "id": 2112,
        "name": "Order more times via app or ahente to earn points",
        "targetGroupId": 1065,
        "targetGroupName": "Mission_1_May2023_Omni_Frequency",
        "targetPeriodId": 1462,
        "target PeriodName": "P1"
      },
      "currentEventTargetValue": "1",
      "achievedTargetValue": "3.000",
      "definedTargetValue": "3.000",
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "TransactionId",
            "value": "240560693"
          }
        ],
        "enteredBy": {
          "id": 13026505
        },
        "additionalAttributes": [
          
        ]
      },
      "transactionId": 240560693
    },
    "loyaltyEventId": "",
    "eventName": "targetValueAchieved",
    "refId": "2013_77e8f7100269c43d7869f786e85972c3",
    "apiRequestId": "77e8f7100269c43d7869f786e85972c3",
    "orgId": 2013
  }
}
```

```
{
  "eventId": "59589150-8626-4841-bfc5-9f53f81af6ec",
  "eventType": "2013_targetValueAchieved",
  "consumerGroupId": "1eb18702-acaf-463c-91f8-39acc62a7c97",
  "actionType": "START",
  "timeSta mp": 1683878597209,
  "attributes": {
    "createdAt": 1683878590899,
    "data": {
      "customerIdentifiers": {
        "customerId": 504662785
      },
      "eventName": "TransactionAdd",
      "eventId": 15,
      "targetDetails": {
        "id": 2112,
        "name": "Order more times via app or ahente to earn points",
        "targetGroupId": 1065,
        "targetGroupName": "Mission_1_May2023_Omni_Frequency",
        "targetPeriodId": 1462,
        "target PeriodName": "P1"
      },
      "currentEventTargetValue": "1",
      "achievedTargetValue": "3.000",
      "definedTargetValue": "3.000",
      "triggeringActivity": {
        "name": "TransactionAdd",
        "identifiers": [
          {
            "key": "TransactionId",
            "value": "240560693"
          }
        ],
        "enteredBy": {
          "id": 13026505
        },
        "additionalAttributes": [
          
        ]
      },
      "transactionId": 240560693
    },
    "loyaltyEventId": "",
    "eventName": "targetValueAchieved",
    "refId": "2013_77e8f7100269c43d7869f786e85972c3",
    "apiRequestId": "77e8f7100269c43d7869f786e85972c3",
    "orgId": 2013
  }
}
```

## Target Period Completed Event

Notifies the completion of a target period for a user.

```
{
        "eventName": "targetPeriodCompleted",
        "data": {
            "customerIdentifiers": {
                "customerId": 5986,
                "firstName": "GUJZCZBJE",
                "lastName": "XWCPPWAMF",
                "loyaltyType": "SVDSH",
                "instore": {
                    "id": 8219,
                    "mobile": "XBTHUHTK",
                    "email": "RUFMWNJNM",
                    "externalId": "EOXUQ",
                    "cardnumber": "CCNCTWARTF",
                    "cardexternalid": "YKJJHOYINJ",
                    "cardNumbers": [
                        "QUKDYUHJTX"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "LGATUJCHVG",
                            "identifiers": [
                                {
                                    "identifierType": "TFTSLQJ",
                                    "identifierValue": "ADZ"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "JWHYLGF",
                            "identifiers": [
                                {
                                    "identifierType": "XGCPOK",
                                    "identifierValue": "ARBYGKFUR"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UIAU",
                            "identifiers": [
                                {
                                    "identifierType": "QGPSOLJWY",
                                    "identifierValue": "ABUY"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CMOV",
                            "identifiers": [
                                {
                                    "identifierType": "GHLRL",
                                    "identifierValue": "ZZE"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "TGT",
                            "identifiers": [
                                {
                                    "identifierType": "JKZPAYK",
                                    "identifierValue": "UVTFCI"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "BGPJCYHFT",
                            "identifiers": [
                                {
                                    "identifierType": "XUOMQIAASX",
                                    "identifierValue": "WJFUBKGWD"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "CRNXIEHP",
                            "identifiers": [
                                {
                                    "identifierType": "QADMZCEA",
                                    "identifierValue": "IEC"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "KXRELR",
                            "identifiers": [
                                {
                                    "identifierType": "HJANHON",
                                    "identifierValue": "NKLFYVI"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "YTSUEBY",
                            "identifiers": [
                                {
                                    "identifierType": "XPRT",
                                    "identifierValue": "NFQGOV"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "XKZJLT",
                            "identifiers": [
                                {
                                    "identifierType": "OUQHSDMVR",
                                    "identifierValue": "RNOJZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 1599,
                "name": "PXWHUGOHE",
                "targetGroupId": 1311,
                "targetGroupName": "NETQVIXEVZ",
                "targetPeriodId": 2736,
                "targetPeriodName": "KXJAEGWS",
                "description": "LADGQW"
            },
            "achievedTargetValue": "BMPPHDS",
            "definedTargetValue": "XIMIYEHQN",
            "triggeringActivity": {
                "name": "QNKC",
                "identifiers": [
                    {
                        "key": "ACOLY",
                        "value": "MXKTX"
                    }
                ],
                "enteredBy": {
                    "id": 6210,
                    "till": {
                        "code": "BBPBE",
                        "name": "LMV"
                    },
                    "store": {
                        "code": "LVE",
                        "name": "APUKKQDD",
                        "externalId": "VESBCXFCY",
                        "externalId1": "FDPZKOWYF",
                        "externalId2": "GNEOA"
                    }
                },
                "entityInformation": {
                    "entityType": "RBSFDUIB",
                    "entityId": 6103
                },
                "additionalAttributes": [
                    {
                        "key": "RROIITNZ",
                        "value": "QSNJZ"
                    }
                ]
            },
            "milestoneDetails": [
                {
                    "id": 1298,
                    "name": "OOTNIFWHA",
                    "valueType": "LYV",
                    "definedValue": "HSPDZUF",
                    "achievedDate": 4440
                }
            ]
        },
        "eventId": "EKY",
        "orgId": 7257,
        "refId": "SRGCV",
        "apiRequestId": "UFEQCNEEH",
        "createdAt": 7915,
        "loyaltyEventId": "TFHBNGXBN",
        "traceAttributes": {
            "ZJIPBBO": "QDHIQ",
            "HDBA": "UDJH",
            "KPEFS": "DPCCYBUEK"
        }
    }
```

```
{
        "eventName": "targetPeriodCompleted",
        "data": {
            "customerIdentifiers": {
                "customerId": 5986,
                "firstName": "GUJZCZBJE",
                "lastName": "XWCPPWAMF",
                "loyaltyType": "SVDSH",
                "instore": {
                    "id": 8219,
                    "mobile": "XBTHUHTK",
                    "email": "RUFMWNJNM",
                    "externalId": "EOXUQ",
                    "cardnumber": "CCNCTWARTF",
                    "cardexternalid": "YKJJHOYINJ",
                    "cardNumbers": [
                        "QUKDYUHJTX"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "LGATUJCHVG",
                            "identifiers": [
                                {
                                    "identifierType": "TFTSLQJ",
                                    "identifierValue": "ADZ"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "JWHYLGF",
                            "identifiers": [
                                {
                                    "identifierType": "XGCPOK",
                                    "identifierValue": "ARBYGKFUR"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UIAU",
                            "identifiers": [
                                {
                                    "identifierType": "QGPSOLJWY",
                                    "identifierValue": "ABUY"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "CMOV",
                            "identifiers": [
                                {
                                    "identifierType": "GHLRL",
                                    "identifierValue": "ZZE"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "TGT",
                            "identifiers": [
                                {
                                    "identifierType": "JKZPAYK",
                                    "identifierValue": "UVTFCI"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "BGPJCYHFT",
                            "identifiers": [
                                {
                                    "identifierType": "XUOMQIAASX",
                                    "identifierValue": "WJFUBKGWD"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "CRNXIEHP",
                            "identifiers": [
                                {
                                    "identifierType": "QADMZCEA",
                                    "identifierValue": "IEC"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "KXRELR",
                            "identifiers": [
                                {
                                    "identifierType": "HJANHON",
                                    "identifierValue": "NKLFYVI"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "YTSUEBY",
                            "identifiers": [
                                {
                                    "identifierType": "XPRT",
                                    "identifierValue": "NFQGOV"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "XKZJLT",
                            "identifiers": [
                                {
                                    "identifierType": "OUQHSDMVR",
                                    "identifierValue": "RNOJZ"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 1599,
                "name": "PXWHUGOHE",
                "targetGroupId": 1311,
                "targetGroupName": "NETQVIXEVZ",
                "targetPeriodId": 2736,
                "targetPeriodName": "KXJAEGWS",
                "description": "LADGQW"
            },
            "achievedTargetValue": "BMPPHDS",
            "definedTargetValue": "XIMIYEHQN",
            "triggeringActivity": {
                "name": "QNKC",
                "identifiers": [
                    {
                        "key": "ACOLY",
                        "value": "MXKTX"
                    }
                ],
                "enteredBy": {
                    "id": 6210,
                    "till": {
                        "code": "BBPBE",
                        "name": "LMV"
                    },
                    "store": {
                        "code": "LVE",
                        "name": "APUKKQDD",
                        "externalId": "VESBCXFCY",
                        "externalId1": "FDPZKOWYF",
                        "externalId2": "GNEOA"
                    }
                },
                "entityInformation": {
                    "entityType": "RBSFDUIB",
                    "entityId": 6103
                },
                "additionalAttributes": [
                    {
                        "key": "RROIITNZ",
                        "value": "QSNJZ"
                    }
                ]
            },
            "milestoneDetails": [
                {
                    "id": 1298,
                    "name": "OOTNIFWHA",
                    "valueType": "LYV",
                    "definedValue": "HSPDZUF",
                    "achievedDate": 4440
                }
            ]
        },
        "eventId": "EKY",
        "orgId": 7257,
        "refId": "SRGCV",
        "apiRequestId": "UFEQCNEEH",
        "createdAt": 7915,
        "loyaltyEventId": "TFHBNGXBN",
        "traceAttributes": {
            "ZJIPBBO": "QDHIQ",
            "HDBA": "UDJH",
            "KPEFS": "DPCCYBUEK"
        }
    }
```

## Target Value Update Event

Notifies when the target value associated with the user has been updated.

```
{
        "eventName": "targetValueUpdated",
        "data": {
            "customerIdentifiers": {
                "customerId": 2527,
                "firstName": "XYJJSKE",
                "lastName": "CHEMK",
                "loyaltyType": "ZFZYJ",
                "instore": {
                    "id": 8709,
                    "mobile": "OIATBO",
                    "email": "CMMTLDMF",
                    "externalId": "YKHVT",
                    "cardnumber": "PRXJJD",
                    "cardexternalid": "MOBNDIV",
                    "cardNumbers": [
                        "NNVIFQK"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "YBNVGBQRE",
                            "identifiers": [
                                {
                                    "identifierType": "EIAOXKYBFN",
                                    "identifierValue": "KNTE"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PTDPSXK",
                            "identifiers": [
                                {
                                    "identifierType": "CYXZZFCPC",
                                    "identifierValue": "COMAT"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "LOOBI",
                            "identifiers": [
                                {
                                    "identifierType": "WBLMJFUV",
                                    "identifierValue": "BSNGZGTBN"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "JAMV",
                            "identifiers": [
                                {
                                    "identifierType": "VBZDYU",
                                    "identifierValue": "VAUYPP"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "YXIBKT",
                            "identifiers": [
                                {
                                    "identifierType": "CBG",
                                    "identifierValue": "OCSPJDBBJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "IBGOYQBB",
                            "identifiers": [
                                {
                                    "identifierType": "YCQTDRBVO",
                                    "identifierValue": "NUPUY"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "HFVEV",
                            "identifiers": [
                                {
                                    "identifierType": "JOTOS",
                                    "identifierValue": "ZASD"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "FNQORHYAPB",
                            "identifiers": [
                                {
                                    "identifierType": "CSDXMSJS",
                                    "identifierValue": "LWMIA"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "DSHEA",
                            "identifiers": [
                                {
                                    "identifierType": "FXWCVW",
                                    "identifierValue": "ZGGMS"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "JENIHL",
                            "identifiers": [
                                {
                                    "identifierType": "NDCCF",
                                    "identifierValue": "WUY"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 4143,
                "name": "SVHXO",
                "targetGroupId": 9705,
                "targetGroupName": "OHELNMDXMK",
                "targetPeriodId": 1203,
                "targetPeriodName": "UNT",
                "description": "SJCCPZROZ"
            },
            "achievedTargetValue": "OSKRYFAUAY",
            "definedTargetValue": "SXDA"
        },
        "eventId": "OWCGLNF",
        "orgId": 7660,
        "refId": "CLRNYYI",
        "apiRequestId": "YFHG",
        "createdAt": 3061,
        "loyaltyEventId": "YMBME",
        "traceAttributes": {
            "UEPWFKEEF": "GBCEMWAK",
            "WLZCFWHSDA": "HIUJ",
            "ZGTKWB": "HPOONUTW",
            "HJPLYIPS": "EOHYCVJMQY"
        }
    }
```

```
{
        "eventName": "targetValueUpdated",
        "data": {
            "customerIdentifiers": {
                "customerId": 2527,
                "firstName": "XYJJSKE",
                "lastName": "CHEMK",
                "loyaltyType": "ZFZYJ",
                "instore": {
                    "id": 8709,
                    "mobile": "OIATBO",
                    "email": "CMMTLDMF",
                    "externalId": "YKHVT",
                    "cardnumber": "PRXJJD",
                    "cardexternalid": "MOBNDIV",
                    "cardNumbers": [
                        "NNVIFQK"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "YBNVGBQRE",
                            "identifiers": [
                                {
                                    "identifierType": "EIAOXKYBFN",
                                    "identifierValue": "KNTE"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PTDPSXK",
                            "identifiers": [
                                {
                                    "identifierType": "CYXZZFCPC",
                                    "identifierValue": "COMAT"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "LOOBI",
                            "identifiers": [
                                {
                                    "identifierType": "WBLMJFUV",
                                    "identifierValue": "BSNGZGTBN"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "JAMV",
                            "identifiers": [
                                {
                                    "identifierType": "VBZDYU",
                                    "identifierValue": "VAUYPP"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "YXIBKT",
                            "identifiers": [
                                {
                                    "identifierType": "CBG",
                                    "identifierValue": "OCSPJDBBJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "IBGOYQBB",
                            "identifiers": [
                                {
                                    "identifierType": "YCQTDRBVO",
                                    "identifierValue": "NUPUY"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "HFVEV",
                            "identifiers": [
                                {
                                    "identifierType": "JOTOS",
                                    "identifierValue": "ZASD"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "FNQORHYAPB",
                            "identifiers": [
                                {
                                    "identifierType": "CSDXMSJS",
                                    "identifierValue": "LWMIA"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "DSHEA",
                            "identifiers": [
                                {
                                    "identifierType": "FXWCVW",
                                    "identifierValue": "ZGGMS"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "JENIHL",
                            "identifiers": [
                                {
                                    "identifierType": "NDCCF",
                                    "identifierValue": "WUY"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 4143,
                "name": "SVHXO",
                "targetGroupId": 9705,
                "targetGroupName": "OHELNMDXMK",
                "targetPeriodId": 1203,
                "targetPeriodName": "UNT",
                "description": "SJCCPZROZ"
            },
            "achievedTargetValue": "OSKRYFAUAY",
            "definedTargetValue": "SXDA"
        },
        "eventId": "OWCGLNF",
        "orgId": 7660,
        "refId": "CLRNYYI",
        "apiRequestId": "YFHG",
        "createdAt": 3061,
        "loyaltyEventId": "YMBME",
        "traceAttributes": {
            "UEPWFKEEF": "GBCEMWAK",
            "WLZCFWHSDA": "HIUJ",
            "ZGTKWB": "HPOONUTW",
            "HJPLYIPS": "EOHYCVJMQY"
        }
    }
```

## Unified Target Achieved Event

Notifies when a user achieves the set target for a unified target.

```
{
  "event": {
    "body": {
      "apiRequestId": "8725941269715d666d0d18d7ba1d4137",
      "createdAt": 1714025846289,
      "data": {
        "customerIdentifiers": {
          "customerId": 383453066,
          "instore": {
            "mobile": "916661610044"
          },
          "loyaltyType": "loyalty"
        },
        "targetData": [
          {
            "achievedTargetValue": "3000.000",
            "definedTargetValue": "1000.000",
            "targetId": 49272,
            "targetName": "TARGETSFORUNIFIED1",
            "targetPeriodId": 32436,
            "targetPeriodName": "Period1"
          }
        ],
        "transactionId": 2151566715,
        "triggeringActivity": {
          "additionalAttributes": [],
          "enteredBy": {
            "id": 50670145,
            "store": {
              "code": "cc_1",
              "externalId": "cc1",
              "externalId1": "",
              "externalId2": "",
              "name": "CentralZone1"
            },
            "till": {
              "code": "tillhg",
              "name": "tillhg"
            }
          },
          "identifiers": [
            {
              "key": "eventLogId",
              "value": "26192434"
            },
            {
              "key": "transactionId",
              "value": "2151566715"
            }
          ],
          "name": "TransactionAdd"
        },
        "unifiedTargetGroupDetails": {
          "targetGroupId": 25780,
          "targetGroupName": "uniFIEDTargetsANYCase",
          "unifiedTargetsAchievementCondition": {
            "aggregation": "SUM",
            "combinationType": "ANY",
            "ruleExpression": "(49272 | 49273 | 49274)",
            "thresholdValue": 5000
          }
        }
      },
      "eventId": "aa1fabd3-7dac-4e15-8d4a-3a1c75e80d5d",
      "eventName": "unifiedTargetsAchieved",
      "loyaltyEventId": "26192434",
      "orgId": 51174,
      "refId": "51174_8725941269715d666d0d18d7ba1d4137"
    },
    "client_ip": "3.225.18.198",
    "headers": {
      "": ":",
      "accept": "text/plain, application/json, application/*+json, */*",
      "content-length": "1168",
      "content-type": "application/json",
      "host": "eo9bacvfjgkxwz6.m.pipedream.net",
      "user-agent": "Java/1.8.0_272"
    },
    "method": "POST",
    "path": "/",
    "query": {},
    "url": "https://eo9bacvfjgkxwz6.m.pipedream.net/"
  }
}
```

```
{
  "event": {
    "body": {
      "apiRequestId": "8725941269715d666d0d18d7ba1d4137",
      "createdAt": 1714025846289,
      "data": {
        "customerIdentifiers": {
          "customerId": 383453066,
          "instore": {
            "mobile": "916661610044"
          },
          "loyaltyType": "loyalty"
        },
        "targetData": [
          {
            "achievedTargetValue": "3000.000",
            "definedTargetValue": "1000.000",
            "targetId": 49272,
            "targetName": "TARGETSFORUNIFIED1",
            "targetPeriodId": 32436,
            "targetPeriodName": "Period1"
          }
        ],
        "transactionId": 2151566715,
        "triggeringActivity": {
          "additionalAttributes": [],
          "enteredBy": {
            "id": 50670145,
            "store": {
              "code": "cc_1",
              "externalId": "cc1",
              "externalId1": "",
              "externalId2": "",
              "name": "CentralZone1"
            },
            "till": {
              "code": "tillhg",
              "name": "tillhg"
            }
          },
          "identifiers": [
            {
              "key": "eventLogId",
              "value": "26192434"
            },
            {
              "key": "transactionId",
              "value": "2151566715"
            }
          ],
          "name": "TransactionAdd"
        },
        "unifiedTargetGroupDetails": {
          "targetGroupId": 25780,
          "targetGroupName": "uniFIEDTargetsANYCase",
          "unifiedTargetsAchievementCondition": {
            "aggregation": "SUM",
            "combinationType": "ANY",
            "ruleExpression": "(49272 | 49273 | 49274)",
            "thresholdValue": 5000
          }
        }
      },
      "eventId": "aa1fabd3-7dac-4e15-8d4a-3a1c75e80d5d",
      "eventName": "unifiedTargetsAchieved",
      "loyaltyEventId": "26192434",
      "orgId": 51174,
      "refId": "51174_8725941269715d666d0d18d7ba1d4137"
    },
    "client_ip": "3.225.18.198",
    "headers": {
      "": ":",
      "accept": "text/plain, application/json, application/*+json, */*",
      "content-length": "1168",
      "content-type": "application/json",
      "host": "eo9bacvfjgkxwz6.m.pipedream.net",
      "user-agent": "Java/1.8.0_272"
    },
    "method": "POST",
    "path": "/",
    "query": {},
    "url": "https://eo9bacvfjgkxwz6.m.pipedream.net/"
  }
}
```

## Unified Target Unachieved Event

Notifies when a user does not meet the defined unified target within the time-frame.

```
{
  "event": {
    "body": {
      "apiRequestId": "8725941269715d666d0d18d7ba1d4137",
      "createdAt": 1714025846289,
      "data": {
        "customerIdentifiers": {
          "customerId": 383453066,
          "instore": {
            "mobile": "916661610044"
          },
          "loyaltyType": "loyalty"
        },
        "targetData": [
          {
            "achievedTargetValue": "1000.000",
            "definedTargetValue": "3000.000",
            "targetId": 49272,
            "targetName": "TARGETSFORUNIFIED1",
            "targetPeriodId": 32436,
            "targetPeriodName": "Period1"
          }
        ],
        "transactionId": 2151566715,
        "triggeringActivity": {
          "additionalAttributes": [],
          "enteredBy": {
            "id": 50670145,
            "store": {
              "code": "cc_1",
              "externalId": "cc1",
              "externalId1": "",
              "externalId2": "",
              "name": "CentralZone1"
            },
            "till": {
              "code": "tillhg",
              "name": "tillhg"
            }
          },
          "identifiers": [
            {
              "key": "eventLogId",
              "value": "26192434"
            },
            {
              "key": "transactionId",
              "value": "2151566715"
            }
          ],
          "name": "TransactionAdd"
        },
        "unifiedTargetGroupDetails": {
          "targetGroupId": 25780,
          "targetGroupName": "uniFIEDTargetsANYCase",
          "unifiedTargetsAchievementCondition": {
            "aggregation": "SUM",
            "combinationType": "ANY",
            "ruleExpression": "(49272 | 49273 | 49274)",
            "thresholdValue": 5000
          }
        }
      },
      "eventId": "aa1fabd3-7dac-4e15-8d4a-3a1c75e80d5d",
      "eventName": "unifiedTargetsUnAchieved",
      "loyaltyEventId": "26192434",
      "orgId": 51174,
      "refId": "51174_8725941269715d666d0d18d7ba1d4137"
    },
    "client_ip": "3.225.18.198",
    "headers": {
      "": ":",
      "accept": "text/plain, application/json, application/*+json, */*",
      "content-length": "1168",
      "content-type": "application/json",
      "host": "eo9bacvfjgkxwz6.m.pipedream.net",
      "user-agent": "Java/1.8.0_272"
    },
    "method": "POST",
    "path": "/",
    "query": {},
    "url": "https://eo9bacvfjgkxwz6.m.pipedream.net/"
  }
}
```

```
{
  "event": {
    "body": {
      "apiRequestId": "8725941269715d666d0d18d7ba1d4137",
      "createdAt": 1714025846289,
      "data": {
        "customerIdentifiers": {
          "customerId": 383453066,
          "instore": {
            "mobile": "916661610044"
          },
          "loyaltyType": "loyalty"
        },
        "targetData": [
          {
            "achievedTargetValue": "1000.000",
            "definedTargetValue": "3000.000",
            "targetId": 49272,
            "targetName": "TARGETSFORUNIFIED1",
            "targetPeriodId": 32436,
            "targetPeriodName": "Period1"
          }
        ],
        "transactionId": 2151566715,
        "triggeringActivity": {
          "additionalAttributes": [],
          "enteredBy": {
            "id": 50670145,
            "store": {
              "code": "cc_1",
              "externalId": "cc1",
              "externalId1": "",
              "externalId2": "",
              "name": "CentralZone1"
            },
            "till": {
              "code": "tillhg",
              "name": "tillhg"
            }
          },
          "identifiers": [
            {
              "key": "eventLogId",
              "value": "26192434"
            },
            {
              "key": "transactionId",
              "value": "2151566715"
            }
          ],
          "name": "TransactionAdd"
        },
        "unifiedTargetGroupDetails": {
          "targetGroupId": 25780,
          "targetGroupName": "uniFIEDTargetsANYCase",
          "unifiedTargetsAchievementCondition": {
            "aggregation": "SUM",
            "combinationType": "ANY",
            "ruleExpression": "(49272 | 49273 | 49274)",
            "thresholdValue": 5000
          }
        }
      },
      "eventId": "aa1fabd3-7dac-4e15-8d4a-3a1c75e80d5d",
      "eventName": "unifiedTargetsUnAchieved",
      "loyaltyEventId": "26192434",
      "orgId": 51174,
      "refId": "51174_8725941269715d666d0d18d7ba1d4137"
    },
    "client_ip": "3.225.18.198",
    "headers": {
      "": ":",
      "accept": "text/plain, application/json, application/*+json, */*",
      "content-length": "1168",
      "content-type": "application/json",
      "host": "eo9bacvfjgkxwz6.m.pipedream.net",
      "user-agent": "Java/1.8.0_272"
    },
    "method": "POST",
    "path": "/",
    "query": {},
    "url": "https://eo9bacvfjgkxwz6.m.pipedream.net/"
  }
}
```

## Target Customer Enrolment Event (targetCustomerEnrolment)

Notifies when a user is enrolled to a target.

```
{
  "eventName": "targetCustomerEnrolment",
  "data": {
    "customerIdentifiers": {
      "customerId": 3863,
      "firstName": "ZYXM",
      "lastName": "CARSDEV",
      "loyaltyType": "SIVLVXMVE",
      "instore": {
        "id": 6872,
        "mobile": "DIILHYLYRD",
        "email": "HFQ",
        "externalId": "LLHXQ",
        "cardnumber": "APXQS",
        "cardexternalid": "WJEZRPNFU",
        "cardNumbers": [
          "VDD"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "ZDP",
            "identifiers": [
              {
                "identifierType": "EZP",
                "identifierValue": "FEWINPWR"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GKX",
            "identifiers": [
              {
                "identifierType": "YDSHYPMUA",
                "identifierValue": "NRQOD"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "JBSCNCML",
            "identifiers": [
              {
                "identifierType": "GKFKW",
                "identifierValue": "ADFPJV"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "NPRVZFORG",
            "identifiers": [
              {
                "identifierType": "BZYTTJ",
                "identifierValue": "QVKCNXL"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "GBTFHRL",
            "identifiers": [
              {
                "identifierType": "APEBBUYIL",
                "identifierValue": "FGDBFKW"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "WFP",
            "identifiers": [
              {
                "identifierType": "LYZL",
                "identifierValue": "RBZKCLKTJZ"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "VUNVO",
            "identifiers": [
              {
                "identifierType": "WBYHSEEVV",
                "identifierValue": "ELQ"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "KNRHNX",
            "identifiers": [
              {
                "identifierType": "MHKJBWXI",
                "identifierValue": "YVOZRS"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "JBUXMV",
            "identifiers": [
              {
                "identifierType": "YEDSYML",
                "identifierValue": "LCTGZYOQS"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "FARKLZ",
            "identifiers": [
              {
                "identifierType": "PCWWVGHWIB",
                "identifierValue": "XLUG"
              }
            ]
          }
        ]
      }
    },
    "eventId": 1094,
    "defaultTargetValue": "UMWTEP",
    "targetId": 1456,
    "targetName": "OXQJJMLAG",
    "targetGroupId": 5363,
    "targetGroupName": "RLUGUR",
    "source": "FET",
    "targetPeriodId": 4769,
    "targetPeriodName": "PIHT",
    "targetPeriodStartDate": "WFPMVEL",
    "targetCycleStartDate": "RTFWEJ",
    "description": "FXAFKFIVEY",
    "milestoneDetails": [
      {
        "id": 5552,
        "name": "QTRPSQVLQ",
        "valueType": "PUNHMJGV",
        "definedValue": "XYYYVWFU",
        "achievedDate": 3143
      }
    ]
  },
  "eventId": "SYTR",
  "orgId": 2849,
  "refId": "MGLM",
  "apiRequestId": "ZOFC",
  "createdAt": 7503,
  "loyaltyEventId": "OSTAYD",
  "traceAttributes": {
    "ICXXIEWRMY": "NZSWXC",
    "GGI": "JHBDOPEU",
    "EKFH": "ERISPQKPC",
    "ASFKYUGZ": "LXWDOUB",
    "BSDBPAQO": "GKROUZ",
    "RQHNHM": "NCV"
  }
}
```

```
{
  "eventName": "targetCustomerEnrolment",
  "data": {
    "customerIdentifiers": {
      "customerId": 3863,
      "firstName": "ZYXM",
      "lastName": "CARSDEV",
      "loyaltyType": "SIVLVXMVE",
      "instore": {
        "id": 6872,
        "mobile": "DIILHYLYRD",
        "email": "HFQ",
        "externalId": "LLHXQ",
        "cardnumber": "APXQS",
        "cardexternalid": "WJEZRPNFU",
        "cardNumbers": [
          "VDD"
        ]
      },
      "facebook": {
        "accounts": [
          {
            "accountId": "ZDP",
            "identifiers": [
              {
                "identifierType": "EZP",
                "identifierValue": "FEWINPWR"
              }
            ]
          }
        ]
      },
      "web_engage": {
        "accounts": [
          {
            "accountId": "GKX",
            "identifiers": [
              {
                "identifierType": "YDSHYPMUA",
                "identifierValue": "NRQOD"
              }
            ]
          }
        ]
      },
      "wechat": {
        "accounts": [
          {
            "accountId": "JBSCNCML",
            "identifiers": [
              {
                "identifierType": "GKFKW",
                "identifierValue": "ADFPJV"
              }
            ]
          }
        ]
      },
      "martjack": {
        "accounts": [
          {
            "accountId": "NPRVZFORG",
            "identifiers": [
              {
                "identifierType": "BZYTTJ",
                "identifierValue": "QVKCNXL"
              }
            ]
          }
        ]
      },
      "tmall": {
        "accounts": [
          {
            "accountId": "GBTFHRL",
            "identifiers": [
              {
                "identifierType": "APEBBUYIL",
                "identifierValue": "FGDBFKW"
              }
            ]
          }
        ]
      },
      "toabao": {
        "accounts": [
          {
            "accountId": "WFP",
            "identifiers": [
              {
                "identifierType": "LYZL",
                "identifierValue": "RBZKCLKTJZ"
              }
            ]
          }
        ]
      },
      "jd": {
        "accounts": [
          {
            "accountId": "VUNVO",
            "identifiers": [
              {
                "identifierType": "WBYHSEEVV",
                "identifierValue": "ELQ"
              }
            ]
          }
        ]
      },
      "ecommerce": {
        "accounts": [
          {
            "accountId": "KNRHNX",
            "identifiers": [
              {
                "identifierType": "MHKJBWXI",
                "identifierValue": "YVOZRS"
              }
            ]
          }
        ]
      },
      "website": {
        "accounts": [
          {
            "accountId": "JBUXMV",
            "identifiers": [
              {
                "identifierType": "YEDSYML",
                "identifierValue": "LCTGZYOQS"
              }
            ]
          }
        ]
      },
      "line": {
        "accounts": [
          {
            "accountId": "FARKLZ",
            "identifiers": [
              {
                "identifierType": "PCWWVGHWIB",
                "identifierValue": "XLUG"
              }
            ]
          }
        ]
      }
    },
    "eventId": 1094,
    "defaultTargetValue": "UMWTEP",
    "targetId": 1456,
    "targetName": "OXQJJMLAG",
    "targetGroupId": 5363,
    "targetGroupName": "RLUGUR",
    "source": "FET",
    "targetPeriodId": 4769,
    "targetPeriodName": "PIHT",
    "targetPeriodStartDate": "WFPMVEL",
    "targetCycleStartDate": "RTFWEJ",
    "description": "FXAFKFIVEY",
    "milestoneDetails": [
      {
        "id": 5552,
        "name": "QTRPSQVLQ",
        "valueType": "PUNHMJGV",
        "definedValue": "XYYYVWFU",
        "achievedDate": 3143
      }
    ]
  },
  "eventId": "SYTR",
  "orgId": 2849,
  "refId": "MGLM",
  "apiRequestId": "ZOFC",
  "createdAt": 7503,
  "loyaltyEventId": "OSTAYD",
  "traceAttributes": {
    "ICXXIEWRMY": "NZSWXC",
    "GGI": "JHBDOPEU",
    "EKFH": "ERISPQKPC",
    "ASFKYUGZ": "LXWDOUB",
    "BSDBPAQO": "GKROUZ",
    "RQHNHM": "NCV"
  }
}
```

## Target Period Started Event (targetPeriodStarted)

Notifies when the target evaluation period begins.

```
{
        "eventName": "targetPeriodStarted",
        "data": {
            "customerIdentifiers": {
                "customerId": 944,
                "firstName": "CZARYVMKF",
                "lastName": "RPXRUGG",
                "loyaltyType": "PLBGRGTZNX",
                "instore": {
                    "id": 1512,
                    "mobile": "BNKTEF",
                    "email": "SRPPS",
                    "externalId": "IHPJPCL",
                    "cardnumber": "TZOH",
                    "cardexternalid": "AUBGKG",
                    "cardNumbers": [
                        "MPRXJYP"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "FJV",
                            "identifiers": [
                                {
                                    "identifierType": "STSMQYVVM",
                                    "identifierValue": "JLI"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PJIET",
                            "identifiers": [
                                {
                                    "identifierType": "XEOQWAOND",
                                    "identifierValue": "XINNUEU"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "FAGFWQ",
                            "identifiers": [
                                {
                                    "identifierType": "VDFH",
                                    "identifierValue": "KZJTOJ"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "XTXA",
                            "identifiers": [
                                {
                                    "identifierType": "RSOQULQNSZ",
                                    "identifierValue": "MCEHRADG"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "IBKGNWDB",
                            "identifiers": [
                                {
                                    "identifierType": "AXMRPNTJQY",
                                    "identifierValue": "AIRRYPX"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "DIFODDNTTN",
                            "identifiers": [
                                {
                                    "identifierType": "KPQPXMPXYM",
                                    "identifierValue": "OMWKQVJWH"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "JUUG",
                            "identifiers": [
                                {
                                    "identifierType": "UAU",
                                    "identifierValue": "NKIEHDD"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "VEH",
                            "identifiers": [
                                {
                                    "identifierType": "OIXFTACHSM",
                                    "identifierValue": "PBR"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "GYXFXWSCP",
                            "identifiers": [
                                {
                                    "identifierType": "SCOZM",
                                    "identifierValue": "CTFKH"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "GPEDITVWUC",
                            "identifiers": [
                                {
                                    "identifierType": "HPKES",
                                    "identifierValue": "TCDGIESALU"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 4091,
                "name": "MVHRMHKSD",
                "targetGroupId": 2897,
                "targetGroupName": "QAWWVAJG",
                "targetPeriodId": 4150,
                "targetPeriodName": "MQLYD",
                "description": "DBHC"
            },
            "definedTargetValue": "FTHEHKWXP",
            "triggeringActivity": {
                "name": "AIWRCMKFRL",
                "identifiers": [
                    {
                        "key": "QYUEZXDEYT",
                        "value": "NCP"
                    }
                ],
                "enteredBy": {
                    "id": 8462,
                    "till": {
                        "code": "QUCODGXO",
                        "name": "OPQPSXR"
                    },
                    "store": {
                        "code": "UTDJUF",
                        "name": "KEQHWO",
                        "externalId": "KCGA",
                        "externalId1": "CGVDP",
                        "externalId2": "IKCJKQ"
                    }
                },
                "entityInformation": {
                    "entityType": "BACCBZTNDI",
                    "entityId": 2909
                },
                "additionalAttributes": [
                    {
                        "key": "TUR",
                        "value": "UGMZXUWHWM"
                    }
                ]
            }
        },
        "eventId": "YIF",
        "orgId": 3507,
        "refId": "MQBEA",
        "apiRequestId": "ITNQLRIUYS",
        "createdAt": 1681,
        "loyaltyEventId": "WYNP",
        "traceAttributes": {
            "BOOSGYM": "QLJDUSNG",
            "XIE": "TNX",
            "MKT": "ALMK",
            "TOHI": "BHVNVQ"
        }
    }
```

```
{
        "eventName": "targetPeriodStarted",
        "data": {
            "customerIdentifiers": {
                "customerId": 944,
                "firstName": "CZARYVMKF",
                "lastName": "RPXRUGG",
                "loyaltyType": "PLBGRGTZNX",
                "instore": {
                    "id": 1512,
                    "mobile": "BNKTEF",
                    "email": "SRPPS",
                    "externalId": "IHPJPCL",
                    "cardnumber": "TZOH",
                    "cardexternalid": "AUBGKG",
                    "cardNumbers": [
                        "MPRXJYP"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "FJV",
                            "identifiers": [
                                {
                                    "identifierType": "STSMQYVVM",
                                    "identifierValue": "JLI"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PJIET",
                            "identifiers": [
                                {
                                    "identifierType": "XEOQWAOND",
                                    "identifierValue": "XINNUEU"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "FAGFWQ",
                            "identifiers": [
                                {
                                    "identifierType": "VDFH",
                                    "identifierValue": "KZJTOJ"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "XTXA",
                            "identifiers": [
                                {
                                    "identifierType": "RSOQULQNSZ",
                                    "identifierValue": "MCEHRADG"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "IBKGNWDB",
                            "identifiers": [
                                {
                                    "identifierType": "AXMRPNTJQY",
                                    "identifierValue": "AIRRYPX"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "DIFODDNTTN",
                            "identifiers": [
                                {
                                    "identifierType": "KPQPXMPXYM",
                                    "identifierValue": "OMWKQVJWH"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "JUUG",
                            "identifiers": [
                                {
                                    "identifierType": "UAU",
                                    "identifierValue": "NKIEHDD"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "VEH",
                            "identifiers": [
                                {
                                    "identifierType": "OIXFTACHSM",
                                    "identifierValue": "PBR"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "GYXFXWSCP",
                            "identifiers": [
                                {
                                    "identifierType": "SCOZM",
                                    "identifierValue": "CTFKH"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "GPEDITVWUC",
                            "identifiers": [
                                {
                                    "identifierType": "HPKES",
                                    "identifierValue": "TCDGIESALU"
                                }
                            ]
                        }
                    ]
                }
            },
            "targetDetails": {
                "id": 4091,
                "name": "MVHRMHKSD",
                "targetGroupId": 2897,
                "targetGroupName": "QAWWVAJG",
                "targetPeriodId": 4150,
                "targetPeriodName": "MQLYD",
                "description": "DBHC"
            },
            "definedTargetValue": "FTHEHKWXP",
            "triggeringActivity": {
                "name": "AIWRCMKFRL",
                "identifiers": [
                    {
                        "key": "QYUEZXDEYT",
                        "value": "NCP"
                    }
                ],
                "enteredBy": {
                    "id": 8462,
                    "till": {
                        "code": "QUCODGXO",
                        "name": "OPQPSXR"
                    },
                    "store": {
                        "code": "UTDJUF",
                        "name": "KEQHWO",
                        "externalId": "KCGA",
                        "externalId1": "CGVDP",
                        "externalId2": "IKCJKQ"
                    }
                },
                "entityInformation": {
                    "entityType": "BACCBZTNDI",
                    "entityId": 2909
                },
                "additionalAttributes": [
                    {
                        "key": "TUR",
                        "value": "UGMZXUWHWM"
                    }
                ]
            }
        },
        "eventId": "YIF",
        "orgId": 3507,
        "refId": "MQBEA",
        "apiRequestId": "ITNQLRIUYS",
        "createdAt": 1681,
        "loyaltyEventId": "WYNP",
        "traceAttributes": {
            "BOOSGYM": "QLJDUSNG",
            "XIE": "TNX",
            "MKT": "ALMK",
            "TOHI": "BHVNVQ"
        }
    }
```

## Streak Level Achievement Event (streakLevelAchieved)

Notifies when a user has achieved a streak level.

```
{
    "eventId": "e91fd520-7765-4b09-951d-300ba47b5f8d",
    "eventType": "streakLevelAchieved",
    "consumerGroupId": null,
    "actionType": "START",
    "timeStamp": 1719841226275,
    "attributes": {
        "createdAt": 1719841226189,
        "data": {
            "customerIdentifiers": {
                "customerId": 345875284
            },
            "streakData": [
                {
                    "userCurrentStreakValue": "1",
                    "streakLevelName": "test_streak_achievement_EN_1",
                    "streakName": "test_streak_achievement_EN_1",
                    "streakId": "5717",
                    "userStreakId": "61401",
                    "streakLevelAchievedDate": "2024-07-01T13:40:26.172+0000"
                }
            ],
            "targetData": [
                {
                    "id": 90856,
                    "name": "test_streak_achievement_EN",
                    "targetGroupId": 42728,
                    "targetGroupName": "test_streak_achievement_EN",
                    "targetPeriodId": 53200,
                    "targetPeriodName": "Cycle_2"
                }
            ],
            "triggeringActivity": {
                "name": "TransactionAdd",
                "identifiers": [
                    {
                        "key": "eventLogId",
                        "value": "12529131"
                    },
                    {
                        "key": "transactionId",
                        "value": "null"
                    }
                ],
                "enteredBy": {},
                "additionalAttributes": []
            }
        },
        "loyaltyEventId": "12529131",
        "eventName": "streakLevelAchieved",
        "refId": "50282_ee19addfc1c74a506ef735ee0757e191",
        "apiRequestId": "ee19addfc1c74a506ef735ee0757e191",
        "orgId": 50282
    }
}
```

```
{
    "eventId": "e91fd520-7765-4b09-951d-300ba47b5f8d",
    "eventType": "streakLevelAchieved",
    "consumerGroupId": null,
    "actionType": "START",
    "timeStamp": 1719841226275,
    "attributes": {
        "createdAt": 1719841226189,
        "data": {
            "customerIdentifiers": {
                "customerId": 345875284
            },
            "streakData": [
                {
                    "userCurrentStreakValue": "1",
                    "streakLevelName": "test_streak_achievement_EN_1",
                    "streakName": "test_streak_achievement_EN_1",
                    "streakId": "5717",
                    "userStreakId": "61401",
                    "streakLevelAchievedDate": "2024-07-01T13:40:26.172+0000"
                }
            ],
            "targetData": [
                {
                    "id": 90856,
                    "name": "test_streak_achievement_EN",
                    "targetGroupId": 42728,
                    "targetGroupName": "test_streak_achievement_EN",
                    "targetPeriodId": 53200,
                    "targetPeriodName": "Cycle_2"
                }
            ],
            "triggeringActivity": {
                "name": "TransactionAdd",
                "identifiers": [
                    {
                        "key": "eventLogId",
                        "value": "12529131"
                    },
                    {
                        "key": "transactionId",
                        "value": "null"
                    }
                ],
                "enteredBy": {},
                "additionalAttributes": []
            }
        },
        "loyaltyEventId": "12529131",
        "eventName": "streakLevelAchieved",
        "refId": "50282_ee19addfc1c74a506ef735ee0757e191",
        "apiRequestId": "ee19addfc1c74a506ef735ee0757e191",
        "orgId": 50282
    }
}
```

## Streak Level Unachievement  Event (streakLevelUnAchieved)

Notifies when a streak level has not been achieved within the time-frame.

```
{
    "eventId": "462c3420-af0f-4300-b915-f5ea62461158",
    "eventType": "streakLevelUnAchieved",
    "consumerGroupId": null,
    "actionType": "START",
    "timeStamp": 1719841505207,
    "attributes": {
        "createdAt": 1719841505183,
        "data": {
            "customerIdentifiers": {
                "customerId": 345875236
            },
            "streakData": [
                {
                    "userCurrentStreakValue": "1",
                    "streakLevelName": "test_streak_achievement_EN_1",
                    "streakName": "test_streak_achievement_EN_1",
                    "streakId": "5717",
                    "userStreakId": "61399",
                    "streakLevelAchievedDate": "2024-07-01T13:35:31.000+0000"
                }
            ],
            "targetData": [
                {
                    "id": 90856,
                    "name": "test_streak_achievement_EN",
                    "targetGroupId": 42728,
                    "targetGroupName": "test_streak_achievement_EN",
                    "targetPeriodId": 53202,
                    "targetPeriodName": "Cycle_4"
                }
            ],
            "triggeringActivity": {
                "name": "ReturnBill",
                "identifiers": [
                    {
                        "key": "eventLogId",
                        "value": "12529287"
                    },
                    {
                        "key": "transactionId",
                        "value": "null"
                    }
                ],
                "enteredBy": {},
                "additionalAttributes": []
            }
        },
        "loyaltyEventId": "12529287",
        "eventName": "streakLevelUnAchieved",
        "refId": "50282_2d3d46947206e5a142c6e42a544f4e57",
        "apiRequestId": "2d3d46947206e5a142c6e42a544f4e57",
        "orgId": 50282
    }
}
```

```
{
    "eventId": "462c3420-af0f-4300-b915-f5ea62461158",
    "eventType": "streakLevelUnAchieved",
    "consumerGroupId": null,
    "actionType": "START",
    "timeStamp": 1719841505207,
    "attributes": {
        "createdAt": 1719841505183,
        "data": {
            "customerIdentifiers": {
                "customerId": 345875236
            },
            "streakData": [
                {
                    "userCurrentStreakValue": "1",
                    "streakLevelName": "test_streak_achievement_EN_1",
                    "streakName": "test_streak_achievement_EN_1",
                    "streakId": "5717",
                    "userStreakId": "61399",
                    "streakLevelAchievedDate": "2024-07-01T13:35:31.000+0000"
                }
            ],
            "targetData": [
                {
                    "id": 90856,
                    "name": "test_streak_achievement_EN",
                    "targetGroupId": 42728,
                    "targetGroupName": "test_streak_achievement_EN",
                    "targetPeriodId": 53202,
                    "targetPeriodName": "Cycle_4"
                }
            ],
            "triggeringActivity": {
                "name": "ReturnBill",
                "identifiers": [
                    {
                        "key": "eventLogId",
                        "value": "12529287"
                    },
                    {
                        "key": "transactionId",
                        "value": "null"
                    }
                ],
                "enteredBy": {},
                "additionalAttributes": []
            }
        },
        "loyaltyEventId": "12529287",
        "eventName": "streakLevelUnAchieved",
        "refId": "50282_2d3d46947206e5a142c6e42a544f4e57",
        "apiRequestId": "2d3d46947206e5a142c6e42a544f4e57",
        "orgId": 50282
    }
}
```

## Streak Enrolment Event (streakCustomerEnrolment)

Notifies when a user has been enrolled to a streak.

```
{
  "eventId": "d1ef2bf6-7b14-4dbe-aadb-8d911c4b0c08",
  "eventType": "50952_streakCustomerEnrolment",
  "consumerGroupId": "e833d224-2e60-448b-b3eb-d2b1de2cff24",
  "actionType": "START",
  "timeStamp": 1722860014707,
  "attributes": {
    "createdAt": 1722859984403,
    "data": {
      "customerIdentifiers": {
        "customerId": 382513745
      },
      "streakEnrolmentData": [
        {
          "streakName": "tesseractuiTest1_1",
          "numberOfLevel": 1,
          "levelValues": [
            
          ],
          "startDate": "2024-08-05 01:30:00",
          "endDate": "2024-08-06 01:29:59"
        }
      ],
      "targetData": [
        {
          "id": 67105,
          "name": "tesseractuiTest1",
          "targetGroupId": 36996,
          "targetGroupName": "tesseractuiTest1",
          "targetPeriodId": 50708,
          "targetPeriodName": "Cycle_5"
        }
      ],
      "triggeringActivity": {
        "name": "enrolmentIntoStreak",
        "identifiers": [
          {
            "key": "ENROL_VIA_API",
            "value": "a824a8cc43669c9e0091b56725520660"
          }
        ],
        "additionalAttributes": [
          
        ]
      }
    },
    "eventName": "streakCustomerEnrolment",
    "refId": "50952_a824a8cc43669c9e0091b56725520660",
    "apiRequestId": "a824a8cc43669c9e0091b56725520660",
    "orgId": 50952
  }
}
```

```
{
  "eventId": "d1ef2bf6-7b14-4dbe-aadb-8d911c4b0c08",
  "eventType": "50952_streakCustomerEnrolment",
  "consumerGroupId": "e833d224-2e60-448b-b3eb-d2b1de2cff24",
  "actionType": "START",
  "timeStamp": 1722860014707,
  "attributes": {
    "createdAt": 1722859984403,
    "data": {
      "customerIdentifiers": {
        "customerId": 382513745
      },
      "streakEnrolmentData": [
        {
          "streakName": "tesseractuiTest1_1",
          "numberOfLevel": 1,
          "levelValues": [
            
          ],
          "startDate": "2024-08-05 01:30:00",
          "endDate": "2024-08-06 01:29:59"
        }
      ],
      "targetData": [
        {
          "id": 67105,
          "name": "tesseractuiTest1",
          "targetGroupId": 36996,
          "targetGroupName": "tesseractuiTest1",
          "targetPeriodId": 50708,
          "targetPeriodName": "Cycle_5"
        }
      ],
      "triggeringActivity": {
        "name": "enrolmentIntoStreak",
        "identifiers": [
          {
            "key": "ENROL_VIA_API",
            "value": "a824a8cc43669c9e0091b56725520660"
          }
        ],
        "additionalAttributes": [
          
        ]
      }
    },
    "eventName": "streakCustomerEnrolment",
    "refId": "50952_a824a8cc43669c9e0091b56725520660",
    "apiRequestId": "a824a8cc43669c9e0091b56725520660",
    "orgId": 50952
  }
}
```

## Streak unenrolment (streakCustomerUnEnrolment)

This event is triggered when a user is unenrolled from a streak.

```
{
  "eventName": "streakCustomerUnEnrolment",
  "data": {
    "customerIdentifiers": {
      "customerId": 557461034
    },
    "streakUnEnrolmentData": [
      {
        "streakName": "test streaks BE with SUM_1",
        "numberOfLevel": 2,
        "levelValues": [
          
        ],
        "startDate": "2024-08-01 04:00:00",
        "endDate": "2024-08-02 03:59:59"
      }
    ],
    "targetData": [
      {
        "id": 1519,
        "name": "test streaks BE with SUM",
        "targetGroupId": 1332,
        "targetGroupName": "test streaks BE with SUM",
        "targetPeriodId": 6422,
        "targetPeriodName": "Cycle_1"
      }
    ],
    "triggeringActivity": {
      "name": "streak unenrollment",
      "identifiers": [
        {
          "key": "UNENROL_VIA_API",
          "value": "2ee80f8a3a7fc7259fcf1ca82e299453"
        }
      ],
      "additionalAttributes": [
        
      ]
    }
  },
  "orgId": 100323,
  "refId": "100323_2ee80f8a3a7fc7259fcf1ca82e299453",
  "apiRequestId": "2ee80f8a3a7fc7259fcf1ca82e299453",
  "createdAt": 1723016690026
}
```

```
{
  "eventName": "streakCustomerUnEnrolment",
  "data": {
    "customerIdentifiers": {
      "customerId": 557461034
    },
    "streakUnEnrolmentData": [
      {
        "streakName": "test streaks BE with SUM_1",
        "numberOfLevel": 2,
        "levelValues": [
          
        ],
        "startDate": "2024-08-01 04:00:00",
        "endDate": "2024-08-02 03:59:59"
      }
    ],
    "targetData": [
      {
        "id": 1519,
        "name": "test streaks BE with SUM",
        "targetGroupId": 1332,
        "targetGroupName": "test streaks BE with SUM",
        "targetPeriodId": 6422,
        "targetPeriodName": "Cycle_1"
      }
    ],
    "triggeringActivity": {
      "name": "streak unenrollment",
      "identifiers": [
        {
          "key": "UNENROL_VIA_API",
          "value": "2ee80f8a3a7fc7259fcf1ca82e299453"
        }
      ],
      "additionalAttributes": [
        
      ]
    }
  },
  "orgId": 100323,
  "refId": "100323_2ee80f8a3a7fc7259fcf1ca82e299453",
  "apiRequestId": "2ee80f8a3a7fc7259fcf1ca82e299453",
  "createdAt": 1723016690026
}
```

## Streak Start Event (streakStart)

Notifies when a streak has started for a user. A streak starts when a user begins a series of consecutive actions or engagements as defined by the brand.

```
{
    "eventName": "streakStart",
    "eventId": "7e0c5f62-4a65-4dd9-8324-78461258dfa9",
    "orgId": 51512,
    "refId": "51512_c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "apiRequestId": "c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "createdAt": 1721912551142,
    "data": {
        "customerIdentifiers": {
            "customerId": 387114334
        },
        "targetDetails": {
            "id": 65260,
            "name": "Streak 24 July",
            "targetGroupId": 36006,
            "targetGroupName": "Streak 24 July",
            "targetPeriodId": 49006,
            "targetPeriodName": "Cycle_1"
        },
        "streakStartData": [
            {
                "streakName": "Streak 24 July",
                "descriptionOfTheStreak": "Streak 24 July",
                "numberOfLevel": 2,
                "levelValues": ["3","5"],
                "userStreakValueAtTheStart": "0",
                "startDate": "2024-07-24 14:15:59"
            }
        ],
        "triggeringActivity": {
            "name": "streakStartEvent",
            "identifiers": [
                {
                    "key": "TargetRuleId",
                    "value": "65260"
                }
            ],
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": ""
}
```

```
{
    "eventName": "streakStart",
    "eventId": "7e0c5f62-4a65-4dd9-8324-78461258dfa9",
    "orgId": 51512,
    "refId": "51512_c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "apiRequestId": "c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "createdAt": 1721912551142,
    "data": {
        "customerIdentifiers": {
            "customerId": 387114334
        },
        "targetDetails": {
            "id": 65260,
            "name": "Streak 24 July",
            "targetGroupId": 36006,
            "targetGroupName": "Streak 24 July",
            "targetPeriodId": 49006,
            "targetPeriodName": "Cycle_1"
        },
        "streakStartData": [
            {
                "streakName": "Streak 24 July",
                "descriptionOfTheStreak": "Streak 24 July",
                "numberOfLevel": 2,
                "levelValues": ["3","5"],
                "userStreakValueAtTheStart": "0",
                "startDate": "2024-07-24 14:15:59"
            }
        ],
        "triggeringActivity": {
            "name": "streakStartEvent",
            "identifiers": [
                {
                    "key": "TargetRuleId",
                    "value": "65260"
                }
            ],
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": ""
}
```

## Streak End Event (streakEnd)

Notifies when a streak has ended for a user.

```
{
    "eventName": "streakEnd",
    "eventId": "7e0c5f62-4a65-4dd9-8324-78461258dfa9",
    "orgId": 51512,
    "refId": "51512_c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "apiRequestId": "c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "createdAt": 1721912551142,
    "data": {
        "customerIdentifiers": {
            "customerId": 387114334
        },
        "targetDetails": {
            "id": 65260,
            "name": "Streak 24 July",
            "targetGroupId": 36006,
            "targetGroupName": "Streak 24 July",
            "targetPeriodId": 49006,
            "targetPeriodName": "Cycle_1"
        },
        "streakEndData": [
            {
                "streakName": "Streak 24 July",
                "descriptionOfTheStreak": "Streak 24 July",
                "numberOfLevel": 2,
                "levelValues": ["3","5"],
                "numberOfLevelsAchievedByTheUser": "0",
                "levelsAchievedByTheUser": [],
                "userStreakValueByTheEnd": 0,
                "endDate": "2024-07-25 23:59:59"
            }
        ],
        "triggeringActivity": {
            "name": "streakStartEvent",
            "identifiers": [
                {
                    "key": "TargetRuleId",
                    "value": "65260"
                }
            ],
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": ""
}
```

```
{
    "eventName": "streakEnd",
    "eventId": "7e0c5f62-4a65-4dd9-8324-78461258dfa9",
    "orgId": 51512,
    "refId": "51512_c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "apiRequestId": "c9b01aa8-cb98-4dd4-be66-586f34c44b97",
    "createdAt": 1721912551142,
    "data": {
        "customerIdentifiers": {
            "customerId": 387114334
        },
        "targetDetails": {
            "id": 65260,
            "name": "Streak 24 July",
            "targetGroupId": 36006,
            "targetGroupName": "Streak 24 July",
            "targetPeriodId": 49006,
            "targetPeriodName": "Cycle_1"
        },
        "streakEndData": [
            {
                "streakName": "Streak 24 July",
                "descriptionOfTheStreak": "Streak 24 July",
                "numberOfLevel": 2,
                "levelValues": ["3","5"],
                "numberOfLevelsAchievedByTheUser": "0",
                "levelsAchievedByTheUser": [],
                "userStreakValueByTheEnd": 0,
                "endDate": "2024-07-25 23:59:59"
            }
        ],
        "triggeringActivity": {
            "name": "streakStartEvent",
            "identifiers": [
                {
                    "key": "TargetRuleId",
                    "value": "65260"
                }
            ],
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": ""
}
```

## Event notification for the change in milestone achieved value on return of purchases

As of now, whenever a customer makes a purchase, all the milestone values which can be impacted with that purchase will be impacted, and the information of the new milestone achieved value, etc.. will be sent as an event notification.

However, whenever a customer returns a transaction, the milestone value which previously increased because of that purchase will also be decreased accordingly. But there is no event notification for such instances. To understand with an example:

Step 1: Milestone on lifetime purchases created, and milestone value is 10,000.Step 2: Customer made a transaction worth 3000.Step 3: Customer’s milestone achieved value increased from 0 → 3000Step 4: Brand will get an event notification about the above step.Step 5: After days, the customer returned the purchase of step-2.Step 6: Now the milestone achieved value will decrease from 3000 → 0.Step 7: But brands/customers are not getting any event notification of the same.

Now, with this latest enhancement, brands will get notified even in the case of return transactions about the decreased milestone value.Following example shows the value in the notification:

![](https://files.readme.io/f493de1-Screenshot_2023-04-03_at_3.37.26_PM.png)

If the “Name” key is “ReturnBill”, it’s a return transaction where milestone value is decreased by the “currentEventTargetValue” (400 here). We are not returning negative since it can lead to integration issues.

# Badges

## Event notifications on earning a badge (badgeEarned)

Notifies when a badge is earned by a user.

```
{
    "eventName": "badgeEarned",
    "eventId": "72fe1900-a413-42d6-9582-f955474739aa",
    "orgId": 50933,
    "refId": "50933_651bb7bac983d041efbc78fc",
    "apiRequestId": "e4397e00-de8d-4a54-b86b-affe305406cb",
    "createdAt": 1696315322593,
    "data": {
        "customerIdentifiers": {
            "customerId": 381921157,
            "loyaltyType": "loyalty",
            "instore": {
                "mobile": "918811992995",
                "email": "[email protected]",
                "externalId": "5a1111cfc5e3239dc0b92cc410cb28"
            }
        },
        "badgeId": "650c0896aefcde237f3dba43",
        "earnId": "651bb7bac983d041efbc78fc",
        "earnedOn": 1696315322450,
        "earnConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "maxEarnLimit": 1000,
                "currentEarnCount": 5
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 7,
                "maxEarnLimit": 300,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 5,
                "maxEarnLimit": 50,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 100,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 200,
                "currentEarnCount": 5
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "NONE"
            }
        ],
        "triggeringActivity": {
            "identifiers": [],
            "enteredBy": {
                "id": 50660494,
                "till": {
                    "code": "shubham.test123",
                    "name": "shubham.test123"
                }
            },
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": null
}
```

```
{
    "eventName": "badgeEarned",
    "eventId": "72fe1900-a413-42d6-9582-f955474739aa",
    "orgId": 50933,
    "refId": "50933_651bb7bac983d041efbc78fc",
    "apiRequestId": "e4397e00-de8d-4a54-b86b-affe305406cb",
    "createdAt": 1696315322593,
    "data": {
        "customerIdentifiers": {
            "customerId": 381921157,
            "loyaltyType": "loyalty",
            "instore": {
                "mobile": "918811992995",
                "email": "[email protected]",
                "externalId": "5a1111cfc5e3239dc0b92cc410cb28"
            }
        },
        "badgeId": "650c0896aefcde237f3dba43",
        "earnId": "651bb7bac983d041efbc78fc",
        "earnedOn": 1696315322450,
        "earnConstraints": [
            {
                "constraintLevel": "BADGE",
                "constraintType": "OVERALL",
                "maxEarnLimit": 1000,
                "currentEarnCount": 5
            },
            {
                "constraintLevel": "BADGE",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 7,
                "maxEarnLimit": 300,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 5,
                "maxEarnLimit": 50,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 100,
                "currentEarnCount": 2
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 200,
                "currentEarnCount": 5
            },
            {
                "constraintLevel": "CUSTOMER",
                "constraintType": "NONE"
            }
        ],
        "triggeringActivity": {
            "identifiers": [],
            "enteredBy": {
                "id": 50660494,
                "till": {
                    "code": "shubham.test123",
                    "name": "shubham.test123"
                }
            },
            "additionalAttributes": []
        }
    },
    "loyaltyEventId": null
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# Advanced request workflow (requestWorkflowEvent)

Notifies when a request is initiated. For example, a points redemption request.

## Points redemption

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "c5315714-90b0-4aaf-9a5c-19be8190edf3",
  "orgId": 0,
  "refId": "0_2083b025-c1d5-11ee-9641-7277dba3c6a7",
  "apiRequestId": "953d1022f6a80fef82d7c6d9f9133d63",
  "createdAt": 1706883171069,
  "data": {
    "requestId": "2083b025-c1d5-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706883171068,
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "c5315714-90b0-4aaf-9a5c-19be8190edf3",
  "orgId": 0,
  "refId": "0_2083b025-c1d5-11ee-9641-7277dba3c6a7",
  "apiRequestId": "953d1022f6a80fef82d7c6d9f9133d63",
  "createdAt": 1706883171069,
  "data": {
    "requestId": "2083b025-c1d5-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706883171068,
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "76a767ab-ba43-4ff8-b2bd-ce7c042430ed",
  "orgId": 0,
  "refId": "0_2c8e9324-c1d5-11ee-9641-7277dba3c6a7",
  "apiRequestId": "775cefae5c4efa9b4fa9561f24a8f3a1",
  "createdAt": 1706883639869,
  "data": {
    "requestId": "2c8e9324-c1d5-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706883639868,
    "comment": "approving the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "76a767ab-ba43-4ff8-b2bd-ce7c042430ed",
  "orgId": 0,
  "refId": "0_2c8e9324-c1d5-11ee-9641-7277dba3c6a7",
  "apiRequestId": "775cefae5c4efa9b4fa9561f24a8f3a1",
  "createdAt": 1706883639869,
  "data": {
    "requestId": "2c8e9324-c1d5-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706883639868,
    "comment": "approving the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "d6a4ef60-ce52-43d7-b6dd-4b883874123f",
  "orgId": 0,
  "refId": "0_96b672f3-c1d8-11ee-9641-7277dba3c6a7",
  "apiRequestId": "1f0757ac485fc453f031e40a2f46f7a6",
  "createdAt": 1706884672170,
  "data": {
    "requestId": "96b672f3-c1d8-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706884672170,
    "comment": "approving the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121wdewdwe"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "d6a4ef60-ce52-43d7-b6dd-4b883874123f",
  "orgId": 0,
  "refId": "0_96b672f3-c1d8-11ee-9641-7277dba3c6a7",
  "apiRequestId": "1f0757ac485fc453f031e40a2f46f7a6",
  "createdAt": 1706884672170,
  "data": {
    "requestId": "96b672f3-c1d8-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706884672170,
    "comment": "approving the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121wdewdwe"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "acb5d13c-d422-443d-982e-731b3e709f98",
  "orgId": 0,
  "refId": "0_d1f9ff8c-c1d9-11ee-9641-7277dba3c6a7",
  "apiRequestId": "78ddcc06934107da509e3d3ab1c05f3e",
  "createdAt": 1706885234777,
  "data": {
    "requestId": "d1f9ff8c-c1d9-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "rejected",
    "previousRequestState": "AdminTask",
    "updateTime": 1706885234777,
    "comment": "rejecting the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "acb5d13c-d422-443d-982e-731b3e709f98",
  "orgId": 0,
  "refId": "0_d1f9ff8c-c1d9-11ee-9641-7277dba3c6a7",
  "apiRequestId": "78ddcc06934107da509e3d3ab1c05f3e",
  "createdAt": 1706885234777,
  "data": {
    "requestId": "d1f9ff8c-c1d9-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "rejected",
    "previousRequestState": "AdminTask",
    "updateTime": 1706885234777,
    "comment": "rejecting the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

## Customer Status change

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "0df1a81f-b716-4ec0-b456-7ab5242c5ec8",
  "orgId": 0,
  "refId": "0_22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
  "apiRequestId": "05be0e1bdf206764081e384573ada0dd",
  "createdAt": 1706887460576,
  "data": {
    "requestId": "22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706887460576,
    "reason": "testing",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "Suspended"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "0df1a81f-b716-4ec0-b456-7ab5242c5ec8",
  "orgId": 0,
  "refId": "0_22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
  "apiRequestId": "05be0e1bdf206764081e384573ada0dd",
  "createdAt": 1706887460576,
  "data": {
    "requestId": "22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706887460576,
    "reason": "testing",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "Suspended"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "11fe28ab-5d4c-478a-906f-03fe7d7b25c6",
  "orgId": 0,
  "refId": "0_22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
  "apiRequestId": "07acef640bdeb5534263cc0ddec1c9dd",
  "createdAt": 1706955529408,
  "data": {
    "requestId": "22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706955529407,
    "comment": "approving the customer status request",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "Suspended"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "11fe28ab-5d4c-478a-906f-03fe7d7b25c6",
  "orgId": 0,
  "refId": "0_22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
  "apiRequestId": "07acef640bdeb5534263cc0ddec1c9dd",
  "createdAt": 1706955529408,
  "data": {
    "requestId": "22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706955529407,
    "comment": "approving the customer status request",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "Suspended"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "468a8fa7-f03e-4b7b-86b7-91eda4420af6",
  "orgId": 0,
  "refId": "0_75cedb31-c27f-11ee-bc64-7667ffaf5419",
  "apiRequestId": "cfaf3850903f4f041fb4e5d12fdc6308",
  "createdAt": 1706956350430,
  "data": {
    "requestId": "75cedb31-c27f-11ee-bc64-7667ffaf5419",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706956350430,
    "comment": "approving the customer status request",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "bb"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "468a8fa7-f03e-4b7b-86b7-91eda4420af6",
  "orgId": 0,
  "refId": "0_75cedb31-c27f-11ee-bc64-7667ffaf5419",
  "apiRequestId": "cfaf3850903f4f041fb4e5d12fdc6308",
  "createdAt": 1706956350430,
  "data": {
    "requestId": "75cedb31-c27f-11ee-bc64-7667ffaf5419",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706956350430,
    "comment": "approving the customer status request",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "bb"
      }
    }
  },
  "loyaltyEventId": null
}
```

``

``

## Goodwill point request

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "bbc13325-7b79-4bb7-b57f-4791db6f3871",
  "orgId": 0,
  "refId": "0_f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
  "apiRequestId": "e420fbacbe32b4d2db758282ebdeae4f",
  "createdAt": 1706956970545,
  "data": {
    "requestId": "f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
    "requestType": "GOODWILL_POINTS",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706956970545,
    "requestAttributes": {
      "body": {
        "referenceId": "ref_id_12993141722",
        "reason": "reason",
        "baseType": "POINTS",
        "programId": 2739,
        "awardingTillId": 50682616,
        "earningEntityType": "CUSTOMER",
        "earningEntityId": 382332518,
        "points": 20,
        "source": "API"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "bbc13325-7b79-4bb7-b57f-4791db6f3871",
  "orgId": 0,
  "refId": "0_f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
  "apiRequestId": "e420fbacbe32b4d2db758282ebdeae4f",
  "createdAt": 1706956970545,
  "data": {
    "requestId": "f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
    "requestType": "GOODWILL_POINTS",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706956970545,
    "requestAttributes": {
      "body": {
        "referenceId": "ref_id_12993141722",
        "reason": "reason",
        "baseType": "POINTS",
        "programId": 2739,
        "awardingTillId": 50682616,
        "earningEntityType": "CUSTOMER",
        "earningEntityId": 382332518,
        "points": 20,
        "source": "API"
      }
    }
  },
  "loyaltyEventId": null
}
```

``

``

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "d2540d72-f62c-400e-ad2a-422e8c00f187",
  "orgId": 0,
  "refId": "0_f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
  "apiRequestId": "3e55d72e08aa213da99ec29fcf218298",
  "createdAt": 1706957216875,
  "data": {
    "requestId": "f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
    "requestType": "GOODWILL_POINTS",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706957216875,
    "comment": "approving the goodwill points request",
    "requestAttributes": {
      "body": {
        "referenceId": "ref_id_12993141722",
        "reason": "reason",
        "baseType": "POINTS",
        "programId": 2739,
        "awardingTillId": 50682616,
        "earningEntityType": "CUSTOMER",
        "earningEntityId": 382332518,
        "points": 20,
        "source": "API"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "d2540d72-f62c-400e-ad2a-422e8c00f187",
  "orgId": 0,
  "refId": "0_f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
  "apiRequestId": "3e55d72e08aa213da99ec29fcf218298",
  "createdAt": 1706957216875,
  "data": {
    "requestId": "f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
    "requestType": "GOODWILL_POINTS",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706957216875,
    "comment": "approving the goodwill points request",
    "requestAttributes": {
      "body": {
        "referenceId": "ref_id_12993141722",
        "reason": "reason",
        "baseType": "POINTS",
        "programId": 2739,
        "awardingTillId": 50682616,
        "earningEntityType": "CUSTOMER",
        "earningEntityId": 382332518,
        "points": 20,
        "source": "API"
      }
    }
  },
  "loyaltyEventId": null
}
```

``

``

## Earn badge (Issue badge to customer)

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "32274496-3f73-483f-9743-2ab03ed74ecf",
  "orgId": 0,
  "refId": "0_57934965-c295-11ee-9c77-3ae88acc3158",
  "apiRequestId": "0155afd1c3a2bd55f76edbe636a84a13",
  "createdAt": 1706965718307,
  "data": {
    "requestId": "57934965-c295-11ee-9c77-3ae88acc3158",
    "requestType": "EARN_BADGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706965718306,
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "123"
        },
        "customerId": 382477526,
        "requestId": "0f77333928-9878-441c-a78e-c1d2334q",
        "badgeMetaId": "65be200710126e55359f1969"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "32274496-3f73-483f-9743-2ab03ed74ecf",
  "orgId": 0,
  "refId": "0_57934965-c295-11ee-9c77-3ae88acc3158",
  "apiRequestId": "0155afd1c3a2bd55f76edbe636a84a13",
  "createdAt": 1706965718307,
  "data": {
    "requestId": "57934965-c295-11ee-9c77-3ae88acc3158",
    "requestType": "EARN_BADGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706965718306,
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "123"
        },
        "customerId": 382477526,
        "requestId": "0f77333928-9878-441c-a78e-c1d2334q",
        "badgeMetaId": "65be200710126e55359f1969"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "7597f468-ebfc-4151-8b7a-6e5b2c3ef974",
  "orgId": 0,
  "refId": "0_57934965-c295-11ee-9c77-3ae88acc3158",
  "apiRequestId": "1f5c11d9c793311c2ac79333f0f147e6",
  "createdAt": 1706965813316,
  "data": {
    "requestId": "57934965-c295-11ee-9c77-3ae88acc3158",
    "requestType": "EARN_BADGE",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706965813316,
    "comment": "approving the earn badge request",
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "123"
        },
        "customerId": 382477526,
        "requestId": "0f77333928-9878-441c-a78e-c1d2334q",
        "badgeMetaId": "65be200710126e55359f1969"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "7597f468-ebfc-4151-8b7a-6e5b2c3ef974",
  "orgId": 0,
  "refId": "0_57934965-c295-11ee-9c77-3ae88acc3158",
  "apiRequestId": "1f5c11d9c793311c2ac79333f0f147e6",
  "createdAt": 1706965813316,
  "data": {
    "requestId": "57934965-c295-11ee-9c77-3ae88acc3158",
    "requestType": "EARN_BADGE",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706965813316,
    "comment": "approving the earn badge request",
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "123"
        },
        "customerId": 382477526,
        "requestId": "0f77333928-9878-441c-a78e-c1d2334q",
        "badgeMetaId": "65be200710126e55359f1969"
      }
    }
  },
  "loyaltyEventId": null
}
```

``

``

``

``

## Issue badge (Enrol customers to badge)

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "390a6575-cb60-4164-bd5d-2e06a421f3ba",
  "orgId": 0,
  "refId": "0_a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
  "apiRequestId": "c6edd0830ecf4f9f80705b314f11043b",
  "createdAt": 1706983022684,
  "data": {
    "requestId": "a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
    "requestType": "ISSUE_BADGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706983022684,
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [
          113460811
        ],
        "requestId": "e5811requestd62c5ec7d115a2859228cefd8ee8cgh",
        "badgeMetaId": "65be3c4d10126e55359f196a"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "390a6575-cb60-4164-bd5d-2e06a421f3ba",
  "orgId": 0,
  "refId": "0_a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
  "apiRequestId": "c6edd0830ecf4f9f80705b314f11043b",
  "createdAt": 1706983022684,
  "data": {
    "requestId": "a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
    "requestType": "ISSUE_BADGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706983022684,
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [
          113460811
        ],
        "requestId": "e5811requestd62c5ec7d115a2859228cefd8ee8cgh",
        "badgeMetaId": "65be3c4d10126e55359f196a"
      }
    }
  },
  "loyaltyEventId": null
}
```

``

``

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "45bb68bc-29a4-4009-9337-72a7784fe189",
  "orgId": 0,
  "refId": "0_a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
  "apiRequestId": "43e862ea6239afe41d8f1afbed35d32a",
  "createdAt": 1706983256871,
  "data": {
    "requestId": "a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
    "requestType": "ISSUE_BADGE",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706983256871,
    "comment": "approving the issue badge request",
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [
          113460811
        ],
        "requestId": "e5811requestd62c5ec7d115a2859228cefd8ee8cgh",
        "badgeMetaId": "65be3c4d10126e55359f196a"
      }
    }
  },
  "loyaltyEventId": null
}
```

```
{
  "eventName": "requestWorkflowEvent",
  "eventId": "45bb68bc-29a4-4009-9337-72a7784fe189",
  "orgId": 0,
  "refId": "0_a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
  "apiRequestId": "43e862ea6239afe41d8f1afbed35d32a",
  "createdAt": 1706983256871,
  "data": {
    "requestId": "a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
    "requestType": "ISSUE_BADGE",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706983256871,
    "comment": "approving the issue badge request",
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [
          113460811
        ],
        "requestId": "e5811requestd62c5ec7d115a2859228cefd8ee8cgh",
        "badgeMetaId": "65be3c4d10126e55359f196a"
      }
    }
  },
  "loyaltyEventId": null
}
```

``

``

# Alternate currencies

## Alternate currencies issued (alternateCurrenciesIssued)

Notifies when alternate currencies are issued to a user.

```
data: {
        customerIdentifiers: {
          customerId: 386959475,
          instore:{
            email:[email protected],
            mobile: 917237869215
          }
        },
        entityInformation: {
          entityId: 386959475
          entityType:USER
        },
        loyaltyProgramDetails: {
          id: 2645
          isDefault:true
          name: Test_OrgDefaultProgram
          pointsToCurrencyRatio:1
          tiers : [
            {
              tierName:Default_tier
              tierNumber:1
            },
            {
              tierName:Silver_tier
              tierNumber:2
            },
            {
              tierName:Gold_tier
              tierNumber:2
            }
          ]
        },
        loyaltyProgramId: 2645,
        alternateCurrencies": [
          {
            alternateCurrencyName: stars,
            alternateCurrencyIdentifier: dsgagg,
            programCurrentAlternateCurrencies: 130,
            programLifetimeAlternateCurrencies: 130,
            promisedAlternateCurrenciesIssued: [
              {
                promisedAlternateCurrencies : 10,
                isExternalTriggerBased: true,
                promisedAlternateCurrenciesConversionDate: 2024-05-17,
                promotionIdentifier: sdged181-7e91-4abe-86cd-sgdcee9b8ccf
              }
            ]
            promotionalAlternateCurrenciesIssued : [
              {
                promotionName: promo1
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              },
              {
                promotionName: promo2
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              }
            ],
            regularAlternateCurrenciesBreakup : [
              {
                alternateCurrencies : 10,
                expiryAt: 2025-05-31
              }
            ]
            regularAlternateCurrenciesIssued: 0
            totalAlternateCurrenciesIssued: 130
          },
          {
            alternateCurrencyName: coins,
            alternateCurrencyIdentifier: gwggdg,
            programCurrentAlternateCurrencies: 130,
            programLifetimeAlternateCurrencies: 130,
            promisedAlternateCurrenciesIssued: [
              {
                promisedAlternateCurrencies : 10,
                isExternalTriggerBased: true,
                promisedAlternateCurrenciesConversionDate: 2024-05-17,
                promotionIdentifier: sdged181-7e91-4abe-86cd-sgdcee9b8ccf
              }
            ]
            promotionalAlternateCurrenciesIssued : [
              {
                promotionName: promo1
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              },
              {
                promotionName: promo2
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              }
            ],
            regularAlternateCurrenciesBreakup : [
              {
                alternateCurrencies : 10,
                expiryAt: 2025-05-31
              }
            ]
            regularAlternateCurrenciesIssued: 0
            totalAlternateCurrenciesIssued: 130           
          }
        ],
        triggeringActivity: {
          additionalAttributes: {},
          enteredBy: {
            id: 50672906
          },
          entityInformation: {
            entityId: 386959475,
            entityType: USER
          },
          identifiers: [
            {
              key: CustomerId.
              value: 386959475
            }
          ],
          name: TargetCompleted
        },
        eventId: 1de73162-daf8-4c39-bc63-0af20bb4371e,
				eventLogId: 34805034,
        eventName: alternateCurrenciesIssued,
        loyaltyEventId: 1c1716568b10135aa4e59fda77935ea2014b3bfc,
        orgId: 51182
        refId: 51182_1c1716568b10135aa4e59fda77935ea2014b3bfc
           
    }
```

```
data: {
        customerIdentifiers: {
          customerId: 386959475,
          instore:{
            email:[email protected],
            mobile: 917237869215
          }
        },
        entityInformation: {
          entityId: 386959475
          entityType:USER
        },
        loyaltyProgramDetails: {
          id: 2645
          isDefault:true
          name: Test_OrgDefaultProgram
          pointsToCurrencyRatio:1
          tiers : [
            {
              tierName:Default_tier
              tierNumber:1
            },
            {
              tierName:Silver_tier
              tierNumber:2
            },
            {
              tierName:Gold_tier
              tierNumber:2
            }
          ]
        },
        loyaltyProgramId: 2645,
        alternateCurrencies": [
          {
            alternateCurrencyName: stars,
            alternateCurrencyIdentifier: dsgagg,
            programCurrentAlternateCurrencies: 130,
            programLifetimeAlternateCurrencies: 130,
            promisedAlternateCurrenciesIssued: [
              {
                promisedAlternateCurrencies : 10,
                isExternalTriggerBased: true,
                promisedAlternateCurrenciesConversionDate: 2024-05-17,
                promotionIdentifier: sdged181-7e91-4abe-86cd-sgdcee9b8ccf
              }
            ]
            promotionalAlternateCurrenciesIssued : [
              {
                promotionName: promo1
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              },
              {
                promotionName: promo2
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              }
            ],
            regularAlternateCurrenciesBreakup : [
              {
                alternateCurrencies : 10,
                expiryAt: 2025-05-31
              }
            ]
            regularAlternateCurrenciesIssued: 0
            totalAlternateCurrenciesIssued: 130
          },
          {
            alternateCurrencyName: coins,
            alternateCurrencyIdentifier: gwggdg,
            programCurrentAlternateCurrencies: 130,
            programLifetimeAlternateCurrencies: 130,
            promisedAlternateCurrenciesIssued: [
              {
                promisedAlternateCurrencies : 10,
                isExternalTriggerBased: true,
                promisedAlternateCurrenciesConversionDate: 2024-05-17,
                promotionIdentifier: sdged181-7e91-4abe-86cd-sgdcee9b8ccf
              }
            ]
            promotionalAlternateCurrenciesIssued : [
              {
                promotionName: promo1
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              },
              {
                promotionName: promo2
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionAlternateCurrenciesExpiryDate: 2025-05-31,
                promotionType:CUSTOMER_PROMOTION
              }
            ],
            regularAlternateCurrenciesBreakup : [
              {
                alternateCurrencies : 10,
                expiryAt: 2025-05-31
              }
            ]
            regularAlternateCurrenciesIssued: 0
            totalAlternateCurrenciesIssued: 130           
          }
        ],
        triggeringActivity: {
          additionalAttributes: {},
          enteredBy: {
            id: 50672906
          },
          entityInformation: {
            entityId: 386959475,
            entityType: USER
          },
          identifiers: [
            {
              key: CustomerId.
              value: 386959475
            }
          ],
          name: TargetCompleted
        },
        eventId: 1de73162-daf8-4c39-bc63-0af20bb4371e,
				eventLogId: 34805034,
        eventName: alternateCurrenciesIssued,
        loyaltyEventId: 1c1716568b10135aa4e59fda77935ea2014b3bfc,
        orgId: 51182
        refId: 51182_1c1716568b10135aa4e59fda77935ea2014b3bfc
           
    }
```

[[email protected]](/cdn-cgi/l/email-protection)

## Issued Alternate Currency Reversed (issuedAlternateCurrenciesReversed)

Notifies when alternate currencies issued to the user are reversed. For example, issued alternate currencies for a line-item is reversed when a customer returns the item.

```
data: {
        customerIdentifiers: {
          customerId: 386959475,
          instore:{
            email:[email protected],
            mobile: 917237869215
          }
        },
        entityInformation: {
          entityId: 386959475
          entityType:USER
        },
        loyaltyProgramDetails: {
          id: 2645
          isDefault:true
          name: Test_OrgDefaultProgram
          pointsToCurrencyRatio:1
          tiers : [
            {
              tierName:Default_tier
              tierNumber:1
            },
            {
              tierName:Silver_tier
              tierNumber:2
            },
            {
              tierName:Gold_tier
              tierNumber:2
            }
          ]
        },
        loyaltyProgramId: 2645,
        alternateCurrencies": [
          {
            currentEventPromisedAlternateCurrenciesReturned: 10,
            currentEventRegularAlternateCurrenciesReturned: 10,
            currentEventTotalAlternateCurrenciesReturned: 130,
            currentEventPromotionAlternateCurrenciesReturnedDetails: {
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionType:BILL
              },
              {
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionType:BILL
              }
            }
            alternateCurrencyName: stars,
            alternateCurrencyIdentifier: dsgagg,
            programCurrentAlternateCurrencies: 0,
            programLifetimeAlternateCurrencies: 0,
            promisedAlternateCurrenciesReversed: 10
            promotionalAlternateCurrenciesReversed : [
              {
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionType:CUSTOMER_PROMOTION
              },
              {
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionType:CUSTOMER_PROMOTION
              }
            ],
            regularAlternateCurrenciesReversed: 10
            totalAlternateCurrenciesReversed: 130
          },
          {
            alternateCurrencyName: coins,
            alternateCurrencyIdentifier: gwggdg,
            programCurrentAlternateCurrencies: 0,
            programLifetimeAlternateCurrencies: 0,
            promisedAlternateCurrenciesReversed: 10
            promotionalAlternateCurrenciesReversed : [
              {
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies100,
                promotionType:BILL
              },
              {
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionType:BILL
              }
            ],
            regularAlternateCurrenciesReversed: 10
            totalAlternateCurrenciesReversed: 130           
          }
        ],
        triggeringActivity: {
          additionalAttributes: {},
          enteredBy: {
            id: 50672906
          },
          entityInformation: {
            entityId: 386959475,
            entityType: USER
          },
          identifiers: [
            {
              key: billId.
              value: 0
            },
            {
              key: billNumber,
              value: 454545
            }
          ],
          name: ReturnBill
        },
        eventId: 1de73162-daf8-4c39-bc63-0af20bb4371e
				eventLogId: 34805034,
        eventName: issuedalternateCurrenciesReversed
        loyaltyEventId: 1c1716568b10135aa4e59fda77935ea2014b3bfc
        orgId: 51182
        refId: 51182_1c1716568b10135aa4e59fda77935ea2014b3bfc
           
    }
```

```
data: {
        customerIdentifiers: {
          customerId: 386959475,
          instore:{
            email:[email protected],
            mobile: 917237869215
          }
        },
        entityInformation: {
          entityId: 386959475
          entityType:USER
        },
        loyaltyProgramDetails: {
          id: 2645
          isDefault:true
          name: Test_OrgDefaultProgram
          pointsToCurrencyRatio:1
          tiers : [
            {
              tierName:Default_tier
              tierNumber:1
            },
            {
              tierName:Silver_tier
              tierNumber:2
            },
            {
              tierName:Gold_tier
              tierNumber:2
            }
          ]
        },
        loyaltyProgramId: 2645,
        alternateCurrencies": [
          {
            currentEventPromisedAlternateCurrenciesReturned: 10,
            currentEventRegularAlternateCurrenciesReturned: 10,
            currentEventTotalAlternateCurrenciesReturned: 130,
            currentEventPromotionAlternateCurrenciesReturnedDetails: {
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionType:BILL
              },
              {
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionType:BILL
              }
            }
            alternateCurrencyName: stars,
            alternateCurrencyIdentifier: dsgagg,
            programCurrentAlternateCurrencies: 0,
            programLifetimeAlternateCurrencies: 0,
            promisedAlternateCurrenciesReversed: 10
            promotionalAlternateCurrenciesReversed : [
              {
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies:100,
                promotionType:CUSTOMER_PROMOTION
              },
              {
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionType:CUSTOMER_PROMOTION
              }
            ],
            regularAlternateCurrenciesReversed: 10
            totalAlternateCurrenciesReversed: 130
          },
          {
            alternateCurrencyName: coins,
            alternateCurrencyIdentifier: gwggdg,
            programCurrentAlternateCurrencies: 0,
            programLifetimeAlternateCurrencies: 0,
            promisedAlternateCurrenciesReversed: 10
            promotionalAlternateCurrenciesReversed : [
              {
                promotionIdentifier: 528d181-7e91-4abe-86cd-598cee9b8ccf,
                promotionAlternateCurrencies100,
                promotionType:BILL
              },
              {
                promotionIdentifier: a6cb5a7e-3d84-4f1f-87c6-5f26006f6392,
                promotionAlternateCurrencies:10,
                promotionType:BILL
              }
            ],
            regularAlternateCurrenciesReversed: 10
            totalAlternateCurrenciesReversed: 130           
          }
        ],
        triggeringActivity: {
          additionalAttributes: {},
          enteredBy: {
            id: 50672906
          },
          entityInformation: {
            entityId: 386959475,
            entityType: USER
          },
          identifiers: [
            {
              key: billId.
              value: 0
            },
            {
              key: billNumber,
              value: 454545
            }
          ],
          name: ReturnBill
        },
        eventId: 1de73162-daf8-4c39-bc63-0af20bb4371e
				eventLogId: 34805034,
        eventName: issuedalternateCurrenciesReversed
        loyaltyEventId: 1c1716568b10135aa4e59fda77935ea2014b3bfc
        orgId: 51182
        refId: 51182_1c1716568b10135aa4e59fda77935ea2014b3bfc
           
    }
```

[[email protected]](/cdn-cgi/l/email-protection)

## Promised Alternate Currencies Issued Event (promisedToCurrentAlternateCurrencyConversion)

Notifies when promised alternate currencies are issued to the user.

```
{
        "eventName": "promisedToCurrentAlternateCurrencyConversion",
			  "eventLogId": 34805034,
        "data": {
            "customerIdentifiers": {
                "customerId": 958,
                "firstName": "RBOZCJP",
                "lastName": "RYBBNKHMVX",
                "loyaltyType": "OEUYS",
                "instore": {
                    "id": 2144,
                    "mobile": "JREHPYLFEA",
                    "email": "SEGXTJ",
                    "externalId": "OSVWTPJSRA",
                    "cardnumber": "OXUFFHKPGB",
                    "cardexternalid": "IUSJOTINM",
                    "cardNumbers": [
                        "FSZDPVYT"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "BBXOFTXDHK",
                            "identifiers": [
                                {
                                    "identifierType": "GBIIYPUBD",
                                    "identifierValue": "BRIDSITULA"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "UDR",
                            "identifiers": [
                                {
                                    "identifierType": "OQJANDY",
                                    "identifierValue": "LRORSMV"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "JVIQGODB",
                            "identifiers": [
                                {
                                    "identifierType": "XYFHNYLV",
                                    "identifierValue": "RUSOIPDF"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "COZLO",
                            "identifiers": [
                                {
                                    "identifierType": "OCWJFF",
                                    "identifierValue": "RGTJ"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "JQM",
                            "identifiers": [
                                {
                                    "identifierType": "JEAHUZQ",
                                    "identifierValue": "GASQEN"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "FZMEW",
                            "identifiers": [
                                {
                                    "identifierType": "UWSHONSN",
                                    "identifierValue": "YMYBACHZP"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "XSOIY",
                            "identifiers": [
                                {
                                    "identifierType": "UIDWEL",
                                    "identifierValue": "ICVRDBGGBL"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "MTYHT",
                            "identifiers": [
                                {
                                    "identifierType": "SQHB",
                                    "identifierValue": "DDGLBNGTZD"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TIJAETPXRY",
                            "identifiers": [
                                {
                                    "identifierType": "QUGFXB",
                                    "identifierValue": "BNJJLYDDDK"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HYFMSFJGVL",
                            "identifiers": [
                                {
                                    "identifierType": "BBKHSXGYL",
                                    "identifierValue": "XPXNRI"
                                }
                            ]
                        }
                    ]
                }
            },
            "entityInformation": {
                "entityType": "YIPGQQPR",
                "entityId": 7264
            },
            "triggeringActivity": {
                "name": "YNWBSSQ",
                "identifiers": [
                    {
                        "key": "IQAMSM",
                        "value": "SDWDVBIOG"
                    }
                ],
                "enteredBy": {
                    "id": 7978,
                    "till": {
                        "code": "YVRCWPP",
                        "name": "HFXQ"
                    },
                    "store": {
                        "code": "LJYREMHDV",
                        "name": "RNIE",
                        "externalId": "FLO",
                        "externalId1": "IKRJTAOV",
                        "externalId2": "GFHKLFP"
                    }
                },
                "entityInformation": {
                    "entityType": "AKJRMISE",
                    "entityId": 913
                },
                "additionalAttributes": [
                    {
                        "key": "RBITV",
                        "value": "SSRUML"
                    }
                ]
            },
            "earningAlternateCurrencyReference": [
                {
                    "name": "TKSIFWVXYZ",
                    "enteredAt": 6432.45479400494,
                    "alternateCurrencyConverted": 9865.310300613735,
                    "alternateCurrencyIdentifier": "ETHJLZJWND",
                    "alternateCurrencyName": "TBHW",
                    "identifiers": [
                        {
                            "key": "BEHZCVZ",
                            "value": "YQOTZYQ"
                        }
                    ]
                }
            ],
            "loyaltyProgramDetails": {
                "id": 2366,
                "name": "UNENWLG",
                "isDefault": false,
                "pointsToCurrencyRatio": 3443.0982449376006,
                "tiers": [
                    {
                        "tierNumber": 6383,
                        "tierName": "TNMXUY"
                    }
                ]
            },
            "loyaltyProgramId": 7268,
            "alternateCurrencyConverted": [
                {
                    "alternateCurrencyIdentifier": "MFS",
                    "alternateCurrencyName": "XXCBJ",
                    "alternateCurrencyValue": "ZLJSFVMZ"
                }
            ],
            "eventDateTime": "GRRPXKJCBO",
            "alternateCurrencyConversionSource": "YLEEXT",
            "eventLogId": 8859,
            "billId": 2828,
            "alternateCurrencyConvertedBreakup": [
                {
                    "entityName": "LOZLTUPIU",
                    "alternateCurrencyEntityDetails": {
                        "alternateCurrencyIdentifier": "MHWL",
                        "alternateCurrencyName": "LLIPO",
                        "alternateCurrencyValue": "LHRCTD",
                        "id": 8716,
                        "billNumber": "UJB",
                        "itemCode": "HJRLOCFAUP",
                        "billDate": "MLVE"
                    },
                    "promotionalAlternateCurrencyBreakup": [
                        {
                            "alternateCurrencyIdentifier": "TACIWFYFI",
                            "alternateCurrencyName": "SVOFRRE",
                            "alternateCurrencyValue": "EVZZHMMWRT",
                            "programId": 8197,
                            "promotionId": 3251,
                            "promotionName": "AONFA"
                        }
                    ],
                    "nonPromotionalAlternateCurrencyBreakup": [
                        {
                            "alternateCurrencyIdentifier": "QGSW",
                            "alternateCurrencyName": "AUU",
                            "alternateCurrencyValue": "REKEYXFQF",
                            "programId": 6746
                        }
                    ]
                }
            ]
        },
        "eventId": "JISJPZLV",
        "orgId": 2257,
        "refId": "KZSPKA",
        "apiRequestId": "WVWFRJ",
        "createdAt": 9669,
        "loyaltyEventId": "VGCFYPAXMT",
        "traceAttributes": {
            "DAP": "FGIP",
            "YIG": "KLKUJKSM",
            "IWJVFPU": "NGFSJNRAM",
            "WQGOAU": "UMMA",
            "DBZ": "WRZDQVDU"
        }
    }
```

```
{
        "eventName": "promisedToCurrentAlternateCurrencyConversion",
			  "eventLogId": 34805034,
        "data": {
            "customerIdentifiers": {
                "customerId": 958,
                "firstName": "RBOZCJP",
                "lastName": "RYBBNKHMVX",
                "loyaltyType": "OEUYS",
                "instore": {
                    "id": 2144,
                    "mobile": "JREHPYLFEA",
                    "email": "SEGXTJ",
                    "externalId": "OSVWTPJSRA",
                    "cardnumber": "OXUFFHKPGB",
                    "cardexternalid": "IUSJOTINM",
                    "cardNumbers": [
                        "FSZDPVYT"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "BBXOFTXDHK",
                            "identifiers": [
                                {
                                    "identifierType": "GBIIYPUBD",
                                    "identifierValue": "BRIDSITULA"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "UDR",
                            "identifiers": [
                                {
                                    "identifierType": "OQJANDY",
                                    "identifierValue": "LRORSMV"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "JVIQGODB",
                            "identifiers": [
                                {
                                    "identifierType": "XYFHNYLV",
                                    "identifierValue": "RUSOIPDF"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "COZLO",
                            "identifiers": [
                                {
                                    "identifierType": "OCWJFF",
                                    "identifierValue": "RGTJ"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "JQM",
                            "identifiers": [
                                {
                                    "identifierType": "JEAHUZQ",
                                    "identifierValue": "GASQEN"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "FZMEW",
                            "identifiers": [
                                {
                                    "identifierType": "UWSHONSN",
                                    "identifierValue": "YMYBACHZP"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "XSOIY",
                            "identifiers": [
                                {
                                    "identifierType": "UIDWEL",
                                    "identifierValue": "ICVRDBGGBL"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "MTYHT",
                            "identifiers": [
                                {
                                    "identifierType": "SQHB",
                                    "identifierValue": "DDGLBNGTZD"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "TIJAETPXRY",
                            "identifiers": [
                                {
                                    "identifierType": "QUGFXB",
                                    "identifierValue": "BNJJLYDDDK"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HYFMSFJGVL",
                            "identifiers": [
                                {
                                    "identifierType": "BBKHSXGYL",
                                    "identifierValue": "XPXNRI"
                                }
                            ]
                        }
                    ]
                }
            },
            "entityInformation": {
                "entityType": "YIPGQQPR",
                "entityId": 7264
            },
            "triggeringActivity": {
                "name": "YNWBSSQ",
                "identifiers": [
                    {
                        "key": "IQAMSM",
                        "value": "SDWDVBIOG"
                    }
                ],
                "enteredBy": {
                    "id": 7978,
                    "till": {
                        "code": "YVRCWPP",
                        "name": "HFXQ"
                    },
                    "store": {
                        "code": "LJYREMHDV",
                        "name": "RNIE",
                        "externalId": "FLO",
                        "externalId1": "IKRJTAOV",
                        "externalId2": "GFHKLFP"
                    }
                },
                "entityInformation": {
                    "entityType": "AKJRMISE",
                    "entityId": 913
                },
                "additionalAttributes": [
                    {
                        "key": "RBITV",
                        "value": "SSRUML"
                    }
                ]
            },
            "earningAlternateCurrencyReference": [
                {
                    "name": "TKSIFWVXYZ",
                    "enteredAt": 6432.45479400494,
                    "alternateCurrencyConverted": 9865.310300613735,
                    "alternateCurrencyIdentifier": "ETHJLZJWND",
                    "alternateCurrencyName": "TBHW",
                    "identifiers": [
                        {
                            "key": "BEHZCVZ",
                            "value": "YQOTZYQ"
                        }
                    ]
                }
            ],
            "loyaltyProgramDetails": {
                "id": 2366,
                "name": "UNENWLG",
                "isDefault": false,
                "pointsToCurrencyRatio": 3443.0982449376006,
                "tiers": [
                    {
                        "tierNumber": 6383,
                        "tierName": "TNMXUY"
                    }
                ]
            },
            "loyaltyProgramId": 7268,
            "alternateCurrencyConverted": [
                {
                    "alternateCurrencyIdentifier": "MFS",
                    "alternateCurrencyName": "XXCBJ",
                    "alternateCurrencyValue": "ZLJSFVMZ"
                }
            ],
            "eventDateTime": "GRRPXKJCBO",
            "alternateCurrencyConversionSource": "YLEEXT",
            "eventLogId": 8859,
            "billId": 2828,
            "alternateCurrencyConvertedBreakup": [
                {
                    "entityName": "LOZLTUPIU",
                    "alternateCurrencyEntityDetails": {
                        "alternateCurrencyIdentifier": "MHWL",
                        "alternateCurrencyName": "LLIPO",
                        "alternateCurrencyValue": "LHRCTD",
                        "id": 8716,
                        "billNumber": "UJB",
                        "itemCode": "HJRLOCFAUP",
                        "billDate": "MLVE"
                    },
                    "promotionalAlternateCurrencyBreakup": [
                        {
                            "alternateCurrencyIdentifier": "TACIWFYFI",
                            "alternateCurrencyName": "SVOFRRE",
                            "alternateCurrencyValue": "EVZZHMMWRT",
                            "programId": 8197,
                            "promotionId": 3251,
                            "promotionName": "AONFA"
                        }
                    ],
                    "nonPromotionalAlternateCurrencyBreakup": [
                        {
                            "alternateCurrencyIdentifier": "QGSW",
                            "alternateCurrencyName": "AUU",
                            "alternateCurrencyValue": "REKEYXFQF",
                            "programId": 6746
                        }
                    ]
                }
            ]
        },
        "eventId": "JISJPZLV",
        "orgId": 2257,
        "refId": "KZSPKA",
        "apiRequestId": "WVWFRJ",
        "createdAt": 9669,
        "loyaltyEventId": "VGCFYPAXMT",
        "traceAttributes": {
            "DAP": "FGIP",
            "YIG": "KLKUJKSM",
            "IWJVFPU": "NGFSJNRAM",
            "WQGOAU": "UMMA",
            "DBZ": "WRZDQVDU"
        }
    }
```

# Loyalty Promotion

## Creating loyalty promotion (promotionCreated)

Notifies when a loyalty promotion is created. An event notification is triggered when a loyalty promotion is created.

```
{
  "eventName": "promotionCreated",
  "eventId": "8d0bf8c4-d3a8-470f-ae50-083938ff9c80",
  "eventLogId": -1,
  "orgId": 51135,
  "refId": "51135_ec1d48406b1f8c5de151065386521bb2",
  "apiRequestId": "ec1d48406b1f8c5de151065386521bb2",
  "createdAt": 1738242661581,
  "data": {
    "loyaltyProgramId": 2568,
    "promotionId": 2000060,
    "promotionName": "testPromotinfoEN",
    "promotionStartDate": 1736965800000,
    "promotionEndDate": 1740076199999,
    "externalIdentifier": "",
    "type": "CUSTOMER",
    "status": "INACTIVE",
    "sourceType": "UI",
    "description": "cs",
    "customFields": [],
    "linkedEventId": 25,
    "linkedEventName": "TargetCompleted",
    "createdOn": 1738242661418,
    "updatedOn": 904788626831872,
    "updatedBy": 50665423,
    "loyaltyEventId": "ec1d48406b1f8c5de151065386521bb2"
  }
}
```

```
{
  "eventName": "promotionCreated",
  "eventId": "8d0bf8c4-d3a8-470f-ae50-083938ff9c80",
  "eventLogId": -1,
  "orgId": 51135,
  "refId": "51135_ec1d48406b1f8c5de151065386521bb2",
  "apiRequestId": "ec1d48406b1f8c5de151065386521bb2",
  "createdAt": 1738242661581,
  "data": {
    "loyaltyProgramId": 2568,
    "promotionId": 2000060,
    "promotionName": "testPromotinfoEN",
    "promotionStartDate": 1736965800000,
    "promotionEndDate": 1740076199999,
    "externalIdentifier": "",
    "type": "CUSTOMER",
    "status": "INACTIVE",
    "sourceType": "UI",
    "description": "cs",
    "customFields": [],
    "linkedEventId": 25,
    "linkedEventName": "TargetCompleted",
    "createdOn": 1738242661418,
    "updatedOn": 904788626831872,
    "updatedBy": 50665423,
    "loyaltyEventId": "ec1d48406b1f8c5de151065386521bb2"
  }
}
```

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event notification |

| eventId | String | Unique ID that is generated when the event is triggered. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| orgId | Integer | Unique ID of the organisation where the event occurred. |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Unique identifier for the API request. |

| createdAt | Long | Timestamp when the event was stored in the database in Epoch time format. |

| data | Object | Object containing details of the promotion |

| - loyaltyProgramId | Integer | Unique identifier for the loyalty program associated with the promotion |

| - promotionId | Integer | Unique id that is generated when a promotion is created. |

| - promotionName | String | Unique name of the promotion that is created. |

| - promotionStartDate | Long | Start date of the promotion in Epoch time format. |

| - promotionEndDate | Long | End date of the promotion in Epoch time format. |

| - externalIdentifier | String | Unique external identifier of the promotion that is configured. |

| - type | ENUM | Type of entity linked to the promotion. Possible values:BILL: Promotion applied on the bill levelLINEITEM: Promotion applied on the line item levelCUSTOMER: Promotions targeted towards individual customers.RETURN: Promotions applied on return transactions. |

| - status | ENUM | Current status of the promotion. Possible values:ACTIVE: The promotion is currently active.INACTIVE: The promotion is currently inactive. |

| - sourceType | String | Source from where the promotion was created. Possible values:USER_CREATED: UCC promotionUI: Promotion created from the UI. |

| - description | String | Description of the promotion |

| - customFields | Array | Object containing details of custom fields configured for the promotion if any. |

| - linkedEventId | Integer | ID of the event linked with the promotion. |

| - linkedEventName | String | Name of the event linked with the promotion. For generic events, the event name will be the name provided for the behavioural event. Possible values:TransactionAdd,CustomerRegistration,CustomerUpdate,PointsTransfer,ReturnBill,PointsRedemption,TargetCompleted,PointsRedemption,VoucherRedemption,GenericEvent(name of the behavioural event) |

| - createdOn | Long | Date when the promotion was created in Epoch time format. |

| - updatedOn | Long | Date when the promotion was updated in Epoch time format. |

| - updatedBy | Integer | Unique customer ID of the user who last updated the promotion. |

| - loyaltyEventId | String | Unique ID of the loyalty event linked with the promotion. A loyalty event can include points activities (earning, redemption, reversal), tier changes (upgrade, downgrade, renewal), coupon activities (issuance, redemption) or behavioral events. |



`BILL`

`LINEITEM`

`CUSTOMER`

`RETURN`

`ACTIVE`

`INACTIVE`

`USER_CREATED`

`UI`

`TransactionAdd`

`CustomerRegistration`

`CustomerUpdate`

`PointsTransfer`

`ReturnBill`

`PointsRedemption`

`TargetCompleted`

`PointsRedemption`

`VoucherRedemption`

`GenericEvent`

## Updating loyalty promotion (promotionUpdated)

Notifies when a loyalty promotion is updated. An event notification is triggered when a loyalty promotion is updated.

```
{
  "eventName": "promotionUpdated",
  "eventId": "8d0bf8c4-d3a8-470f-ae50-083938ff9c80",
  "eventLogId": -1,
  "orgId": 51135,
  "refId": "51135_ec1d48406b1f8c5de151065386521bb2",
  "apiRequestId": "ec1d48406b1f8c5de151065386521bb2",
  "createdAt": 1738242661581,
  "data": {
    "loyaltyProgramId": 2568,
    "promotionId": 2000060,
    "promotionName": "testPromotinfoEN",
    "promotionStartDate": 1736965800000,
    "promotionEndDate": 1740076199999,
    "externalIdentifier": "",
    "type": "CUSTOMER",
    "status": "INACTIVE",
    "sourceType": "UI",
    "description": "cs",
    "customFields": [],
    "linkedEventId": 25,
    "linkedEventName": "TargetCompleted",
    "createdOn": 1738242661418,
    "updatedOn": 904788626831872,
    "updatedBy": 50665423,
    "loyaltyEventId": "ec1d48406b1f8c5de151065386521bb2"
  }
}
```

```
{
  "eventName": "promotionUpdated",
  "eventId": "8d0bf8c4-d3a8-470f-ae50-083938ff9c80",
  "eventLogId": -1,
  "orgId": 51135,
  "refId": "51135_ec1d48406b1f8c5de151065386521bb2",
  "apiRequestId": "ec1d48406b1f8c5de151065386521bb2",
  "createdAt": 1738242661581,
  "data": {
    "loyaltyProgramId": 2568,
    "promotionId": 2000060,
    "promotionName": "testPromotinfoEN",
    "promotionStartDate": 1736965800000,
    "promotionEndDate": 1740076199999,
    "externalIdentifier": "",
    "type": "CUSTOMER",
    "status": "INACTIVE",
    "sourceType": "UI",
    "description": "cs",
    "customFields": [],
    "linkedEventId": 25,
    "linkedEventName": "TargetCompleted",
    "createdOn": 1738242661418,
    "updatedOn": 904788626831872,
    "updatedBy": 50665423,
    "loyaltyEventId": "ec1d48406b1f8c5de151065386521bb2"
  }
}
```

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventName | String | Name of the event notification |

| eventId | String | Unique ID that is generated when the event is triggered. |

| eventLogId | Integer | Unique ID that is generated when the event is triggered. |

| orgId | Integer | Unique ID of the organisation where the event occurred. |

| refId | String | This is a combination of org id and loyalty event ID and is used for internal debugging purposes. |

| apiRequestId | String | Unique identifier for the API request. |

| createdAt | Long | Timestamp when the event was stored in the database in Epoch time format. |

| data | Object | Object containing details of the promotion |

| - loyaltyProgramId | Integer | Unique identifier for the loyalty program associated with the promotion |

| - promotionId | Integer | Unique id that is generated when a promotion is created. |

| - promotionName | String | Unique name of the promotion that is created. |

| - promotionStartDate | Long | Start date of the promotion in Epoch time format. |

| - promotionEndDate | Long | End date of the promotion in Epoch time format. |

| - externalIdentifier | String | Unique external identifier of the promotion that is configured. |

| - type | ENUM | Type of entity linked to the promotion. Possible values:BILL: Promotion applied on the bill levelLINEITEM: Promotion applied on the line item levelCUSTOMER: Promotions targeted towards individual customers.RETURN: Promotions applied on return transactions. |

| - status | ENUM | Current status of the promotion. Possible values:ACTIVE: The promotion is currently active.INACTIVE: The promotion is currently inactive. |

| - sourceType | String | Source from where the promotion was created. Possible values:USER_CREATED: UCC promotionUI: Promotion created from the UI. |

| - description | String | Description of the promotion |

| - customFields | Array | Object containing details of custom fields configured for the promotion if any. |

| - linkedEventId | Integer | ID of the event linked with the promotion. |

| - linkedEventName | String | Name of the event linked with the promotion. For generic events, the event name will be the name provided for the behavioural event. Possible values:TransactionAdd,CustomerRegistration,CustomerUpdate,PointsTransfer,ReturnBill,PointsRedemption,TargetCompleted,PointsRedemption,VoucherRedemption,GenericEvent(name of the behavioural event) |

| - createdOn | Long | Date when the promotion was created in Epoch time format. |

| - updatedOn | Long | Date when the promotion was updated in Epoch time format. |

| - updatedBy | Integer | Unique customer ID of the user who last updated the promotion. |

| - loyaltyEventId | String | Unique ID of the loyalty event linked with the promotion. A loyalty event can include points activities (earning, redemption, reversal), tier changes (upgrade, downgrade, renewal), coupon activities (issuance, redemption) or behavioral events. |



`BILL`

`LINEITEM`

`CUSTOMER`

`RETURN`

`ACTIVE`

`INACTIVE`

`USER_CREATED`

`UI`

`TransactionAdd`

`CustomerRegistration`

`CustomerUpdate`

`PointsTransfer`

`ReturnBill`

`PointsRedemption`

`TargetCompleted`

`PointsRedemption`

`VoucherRedemption`

`GenericEvent`

## Issued loyalty promotion (promotionIssued)

Notifies when a promotion is issued to a user.

```
{
    "eventName": "promotionIssued",
    "data": {
        "customerIdentifiers": {
            "customerId": 423817587,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2751,
        "promotionId": 200281,
        "promotionName": "Promo_L",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionIssuedDate": "2024-08-06",
        "promotionIssuedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_L",
        "pointsOfferType": "GENERIC",
        "customFields": [],
        "issueRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                "maxLimit": 100
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ],
        "issualId": 229
    },
    "orgId": 4000070,
    "refId": "4000070_aB8DFsImX7",
    "apiRequestId": "a4849fdcaffd0df64c2d6acbc91ec49b",
    "createdAt": 1722943950142
}
```

```
{
    "eventName": "promotionIssued",
    "data": {
        "customerIdentifiers": {
            "customerId": 423817587,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2751,
        "promotionId": 200281,
        "promotionName": "Promo_L",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionIssuedDate": "2024-08-06",
        "promotionIssuedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_L",
        "pointsOfferType": "GENERIC",
        "customFields": [],
        "issueRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                "maxLimit": 100
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ],
        "issualId": 229
    },
    "orgId": 4000070,
    "refId": "4000070_aB8DFsImX7",
    "apiRequestId": "a4849fdcaffd0df64c2d6acbc91ec49b",
    "createdAt": 1722943950142
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Earned loyalty promotion (promotionEarned)

Notifies when a user has earned a promotion.

```
{
    "eventName": "promotionEarned",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionEarnedDate": "2024-08-06",
        "promotionEarnedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "pointsOfferType": "GENERIC",
        "customFields": [],
        "issualId": 2901,
        "earnedId": 2522,
        "earnRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                "maxLimit": 3
            },
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                "maxLimit": -1
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ]
    },
    "orgId": 51538,
    "refId": "51538_X07F0IEo6o",
    "apiRequestId": "b39b47ff9f6dd8cd7c2181a6cc7b12f3",
    "createdAt": 1722944534772
}
```

```
{
    "eventName": "promotionEarned",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionEarnedDate": "2024-08-06",
        "promotionEarnedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "pointsOfferType": "GENERIC",
        "customFields": [],
        "issualId": 2901,
        "earnedId": 2522,
        "earnRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                "maxLimit": 3
            },
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                "maxLimit": -1
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ]
    },
    "orgId": 51538,
    "refId": "51538_X07F0IEo6o",
    "apiRequestId": "b39b47ff9f6dd8cd7c2181a6cc7b12f3",
    "createdAt": 1722944534772
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Revoke issued loyalty promotion (revokeIssuedPromotion)

Notifies when an issued promotion is revoked.

```
{
    "eventName": "revokeIssuedPromotion",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionIssuedDate": "2024-08-06",
        "promotionIssuedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "customFields": [],
        "issueRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                "maxLimit": 3
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ],
        "revokedIssualId": 2901
    },
    "orgId": 51538,
    "refId": "51538_V2KxxB3KKb",
    "apiRequestId": "c3560c2840c9254785bf98d7a9de6e1d",
    "createdAt": 1722945100073
}
```

```
{
    "eventName": "revokeIssuedPromotion",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionIssuedDate": "2024-08-06",
        "promotionIssuedExpiryDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "customFields": [],
        "issueRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                "maxLimit": 3
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ],
        "revokedIssualId": 2901
    },
    "orgId": 51538,
    "refId": "51538_V2KxxB3KKb",
    "apiRequestId": "c3560c2840c9254785bf98d7a9de6e1d",
    "createdAt": 1722945100073
}
```

[[email protected]](/cdn-cgi/l/email-protection)

## Revoke earned loyalty promotion (revokeEarnedPromotion)

Notifies when an earned loyalty promotion has been revoked for a user.

```
{
    "eventName": "revokeEarnedPromotion",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "customFields": [],
        "revokedEarnedPromotionDetails": [
            {
                "revokedEarnedId": 2523,
                "promotionEarnedDate": "2024-08-06",
                "promotionEarnedExpiryDate": "2024-08-31"
            }
        ],
        "earnRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                "maxLimit": 3
            },
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                "maxLimit": -1
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ]
    },
    "orgId": 51538,
    "refId": "51538_LEpXJt8Vd9",
    "apiRequestId": "025f37887d8814414da0b7e3fcb5d88e",
    "createdAt": 1722945241191
}
```

```
{
    "eventName": "revokeEarnedPromotion",
    "data": {
        "customerIdentifiers": {
            "customerId": 387337123,
            "instore": {
                "mobile": "919191920700",
                "email": "[email protected]",
                "cardNumbers": []
            }
        },
        "loyaltyProgramId": 2845,
        "promotionId": 1133570767,
        "promotionName": "Promo_Loyalty_Earn",
        "promotionStartDate": "2024-07-01",
        "promotionEndDate": "2024-08-31",
        "promotionDescription": "Promo_Loyalty_Earn",
        "customFields": [],
        "revokedEarnedPromotionDetails": [
            {
                "revokedEarnedId": 2523,
                "promotionEarnedDate": "2024-08-06",
                "promotionEarnedExpiryDate": "2024-08-31"
            }
        ],
        "earnRestrictions": [
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                "maxLimit": 3
            },
            {
                "limitOn": "CUSTOMER",
                "kpi": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                "maxLimit": -1
            }
        ],
        "redemptionRestrictions": [
            {
                "limitOn": "",
                "kpi": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                "restrictionType": "NON_PERIOD_BASED",
                "maxLimit": 3
            }
        ]
    },
    "orgId": 51538,
    "refId": "51538_LEpXJt8Vd9",
    "apiRequestId": "025f37887d8814414da0b7e3fcb5d88e",
    "createdAt": 1722945241191
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# Cart promotion

## Cart Promotion Issued Event (cartPromotionIssued)

Notifies when a cart promotion is issued.

```
{
        "eventName": "cartPromotionIssued",
        "data": {
            "customerIdentifiers": {
                "customerId": 4663,
                "firstName": "BGUOZRE",
                "lastName": "MSJKWQ",
                "loyaltyType": "IEXVTDCP",
                "instore": {
                    "id": 9942,
                    "mobile": "NHLE",
                    "email": "JCJV",
                    "externalId": "LUES",
                    "cardnumber": "OAFFXCN",
                    "cardexternalid": "HGKX",
                    "cardNumbers": [
                        "GYCYSLS"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "VOQBUXTRPC",
                            "identifiers": [
                                {
                                    "identifierType": "ARQ",
                                    "identifierValue": "CMFMUHDDFX"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PDYDJ",
                            "identifiers": [
                                {
                                    "identifierType": "HHIWUZUU",
                                    "identifierValue": "XBYAXTP"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DOI",
                            "identifiers": [
                                {
                                    "identifierType": "HAG",
                                    "identifierValue": "BRWCCUB"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "PYKCMFU",
                            "identifiers": [
                                {
                                    "identifierType": "NNVEKHWSN",
                                    "identifierValue": "IHMRPJHCO"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "SJRJI",
                            "identifiers": [
                                {
                                    "identifierType": "TVFDMV",
                                    "identifierValue": "BNUESBSJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "WBLQSK",
                            "identifiers": [
                                {
                                    "identifierType": "XFBIRJ",
                                    "identifierValue": "FYTIKULNLO"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "DEKM",
                            "identifiers": [
                                {
                                    "identifierType": "QXUDKD",
                                    "identifierValue": "SDBNILOJMG"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "AHADQOUOO",
                            "identifiers": [
                                {
                                    "identifierType": "DSHXLYUBBN",
                                    "identifierValue": "VNOOEF"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "CKVPGRZ",
                            "identifiers": [
                                {
                                    "identifierType": "GYKOQHT",
                                    "identifierValue": "ZMKUWCRQ"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "USPIFKZ",
                            "identifiers": [
                                {
                                    "identifierType": "RBZVSAJD",
                                    "identifierValue": "LYUEVN"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "DHDAFNXDUH",
            "issueId": "RMQRZEI",
            "issueDate": "GDYDBSNTHO"
        },
        "eventId": "AKDVFVIJAV",
        "orgId": 9475,
        "refId": "WEEVQBDJRJ",
        "apiRequestId": "OZOLOVGXST",
        "createdAt": 9439,
        "loyaltyEventId": "IYNSIEE",
        "traceAttributes": {
            "VFVLXT": "IUQAIPC",
            "FMKATR": "NBXVNBKO",
            "XHLZUANMIU": "YIPFQHOKLE",
            "SWUFTBOBDL": "KAGJIHOJEH",
            "TZKYJJLB": "WELRWURJK"
        }
    }
```

```
{
        "eventName": "cartPromotionIssued",
        "data": {
            "customerIdentifiers": {
                "customerId": 4663,
                "firstName": "BGUOZRE",
                "lastName": "MSJKWQ",
                "loyaltyType": "IEXVTDCP",
                "instore": {
                    "id": 9942,
                    "mobile": "NHLE",
                    "email": "JCJV",
                    "externalId": "LUES",
                    "cardnumber": "OAFFXCN",
                    "cardexternalid": "HGKX",
                    "cardNumbers": [
                        "GYCYSLS"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "VOQBUXTRPC",
                            "identifiers": [
                                {
                                    "identifierType": "ARQ",
                                    "identifierValue": "CMFMUHDDFX"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "PDYDJ",
                            "identifiers": [
                                {
                                    "identifierType": "HHIWUZUU",
                                    "identifierValue": "XBYAXTP"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DOI",
                            "identifiers": [
                                {
                                    "identifierType": "HAG",
                                    "identifierValue": "BRWCCUB"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "PYKCMFU",
                            "identifiers": [
                                {
                                    "identifierType": "NNVEKHWSN",
                                    "identifierValue": "IHMRPJHCO"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "SJRJI",
                            "identifiers": [
                                {
                                    "identifierType": "TVFDMV",
                                    "identifierValue": "BNUESBSJ"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "WBLQSK",
                            "identifiers": [
                                {
                                    "identifierType": "XFBIRJ",
                                    "identifierValue": "FYTIKULNLO"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "DEKM",
                            "identifiers": [
                                {
                                    "identifierType": "QXUDKD",
                                    "identifierValue": "SDBNILOJMG"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "AHADQOUOO",
                            "identifiers": [
                                {
                                    "identifierType": "DSHXLYUBBN",
                                    "identifierValue": "VNOOEF"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "CKVPGRZ",
                            "identifiers": [
                                {
                                    "identifierType": "GYKOQHT",
                                    "identifierValue": "ZMKUWCRQ"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "USPIFKZ",
                            "identifiers": [
                                {
                                    "identifierType": "RBZVSAJD",
                                    "identifierValue": "LYUEVN"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "DHDAFNXDUH",
            "issueId": "RMQRZEI",
            "issueDate": "GDYDBSNTHO"
        },
        "eventId": "AKDVFVIJAV",
        "orgId": 9475,
        "refId": "WEEVQBDJRJ",
        "apiRequestId": "OZOLOVGXST",
        "createdAt": 9439,
        "loyaltyEventId": "IYNSIEE",
        "traceAttributes": {
            "VFVLXT": "IUQAIPC",
            "FMKATR": "NBXVNBKO",
            "XHLZUANMIU": "YIPFQHOKLE",
            "SWUFTBOBDL": "KAGJIHOJEH",
            "TZKYJJLB": "WELRWURJK"
        }
    }
```

## Cart Promotion Redeemed Event (cartPromotionRedeemed)

Notifies whenever a cart promotion is redeemed by the user.

```
{
        "eventName": "cartPromotionRedeemed",
        "data": {
            "customerIdentifiers": {
                "customerId": 5389,
                "firstName": "KKXYFYWJ",
                "lastName": "ZESRIQCPM",
                "loyaltyType": "XKOLOAHIBC",
                "instore": {
                    "id": 1623,
                    "mobile": "UVH",
                    "email": "EFJK",
                    "externalId": "HJJ",
                    "cardnumber": "PPLBDZ",
                    "cardexternalid": "MCNZXBSDIZ",
                    "cardNumbers": [
                        "NXPEHKXL"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "ZCHJWFMKCC",
                            "identifiers": [
                                {
                                    "identifierType": "KKHID",
                                    "identifierValue": "BLV"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "EDGMQKRA",
                            "identifiers": [
                                {
                                    "identifierType": "LFY",
                                    "identifierValue": "YHMIO"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DXQLH",
                            "identifiers": [
                                {
                                    "identifierType": "FEOKK",
                                    "identifierValue": "MBHPWQ"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "YXD",
                            "identifiers": [
                                {
                                    "identifierType": "VCXOHLX",
                                    "identifierValue": "IEXFYTFU"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "DLZKACZFA",
                            "identifiers": [
                                {
                                    "identifierType": "IMQGCSRPD",
                                    "identifierValue": "ZEUKBJZN"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "RIPV",
                            "identifiers": [
                                {
                                    "identifierType": "IVZYIT",
                                    "identifierValue": "RBJKM"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VEBJMPMVF",
                            "identifiers": [
                                {
                                    "identifierType": "ZMWOBMUUO",
                                    "identifierValue": "LXMARZIC"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "AQKTD",
                            "identifiers": [
                                {
                                    "identifierType": "RWPMFPGSH",
                                    "identifierValue": "JSI"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "KBZVADXCS",
                            "identifiers": [
                                {
                                    "identifierType": "YYRZZUQ",
                                    "identifierValue": "YZQPZA"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HRZZAKEHD",
                            "identifiers": [
                                {
                                    "identifierType": "YJIAPEJPS",
                                    "identifierValue": "EENOI"
                                }
                            ]
                        }
                    ]
                }
            },
            "addedBy": {
                "id": 5206,
                "till": {
                    "code": "DYQOBU",
                    "name": "XIQV"
                },
                "store": {
                    "code": "NWNV",
                    "name": "WTQVRTNL",
                    "externalId": "FPZNGYUV",
                    "externalId1": "WFM",
                    "externalId2": "TBITHF"
                }
            },
            "redemptionDateTime": "WNB",
            "transactionIdentifier": "SGA",
            "appliedPromotions": [
                {
                    "redemptionCount": 4933,
                    "promotionId": "VOSY",
                    "earnId": "MGVADJSQO",
                    "discountAppliedOnQuantity": 2662.682769091687,
                    "discount": 3127.1389321916945,
                    "redemptionType": "TQIAZNDWD"
                }
            ],
            "lineItemInfo": [
                {
                    "sku": "XNK",
                    "productId": "GMX",
                    "appliedPromotions": [
                        {
                            "redemptionCount": 4947,
                            "promotionId": "ORKC",
                            "earnId": "RQHH",
                            "discountAppliedOnQuantity": 2178.8487374098336,
                            "discount": 6697.317986678818,
                            "redemptionType": "PJB"
                        }
                    ]
                }
            ]
        },
        "eventId": "RAKUK",
        "orgId": 3401,
        "refId": "DXLDCYH",
        "apiRequestId": "AWTDZLHDJ",
        "createdAt": 9510,
        "loyaltyEventId": "NUWRBLX",
        "traceAttributes": {
            "CPGY": "KAWUEBFOYA",
            "VXG": "JBJTTIHYFR",
            "YXLOW": "BYHZ"
        }
    }
```

```
{
        "eventName": "cartPromotionRedeemed",
        "data": {
            "customerIdentifiers": {
                "customerId": 5389,
                "firstName": "KKXYFYWJ",
                "lastName": "ZESRIQCPM",
                "loyaltyType": "XKOLOAHIBC",
                "instore": {
                    "id": 1623,
                    "mobile": "UVH",
                    "email": "EFJK",
                    "externalId": "HJJ",
                    "cardnumber": "PPLBDZ",
                    "cardexternalid": "MCNZXBSDIZ",
                    "cardNumbers": [
                        "NXPEHKXL"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "ZCHJWFMKCC",
                            "identifiers": [
                                {
                                    "identifierType": "KKHID",
                                    "identifierValue": "BLV"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "EDGMQKRA",
                            "identifiers": [
                                {
                                    "identifierType": "LFY",
                                    "identifierValue": "YHMIO"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "DXQLH",
                            "identifiers": [
                                {
                                    "identifierType": "FEOKK",
                                    "identifierValue": "MBHPWQ"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "YXD",
                            "identifiers": [
                                {
                                    "identifierType": "VCXOHLX",
                                    "identifierValue": "IEXFYTFU"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "DLZKACZFA",
                            "identifiers": [
                                {
                                    "identifierType": "IMQGCSRPD",
                                    "identifierValue": "ZEUKBJZN"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "RIPV",
                            "identifiers": [
                                {
                                    "identifierType": "IVZYIT",
                                    "identifierValue": "RBJKM"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VEBJMPMVF",
                            "identifiers": [
                                {
                                    "identifierType": "ZMWOBMUUO",
                                    "identifierValue": "LXMARZIC"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "AQKTD",
                            "identifiers": [
                                {
                                    "identifierType": "RWPMFPGSH",
                                    "identifierValue": "JSI"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "KBZVADXCS",
                            "identifiers": [
                                {
                                    "identifierType": "YYRZZUQ",
                                    "identifierValue": "YZQPZA"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HRZZAKEHD",
                            "identifiers": [
                                {
                                    "identifierType": "YJIAPEJPS",
                                    "identifierValue": "EENOI"
                                }
                            ]
                        }
                    ]
                }
            },
            "addedBy": {
                "id": 5206,
                "till": {
                    "code": "DYQOBU",
                    "name": "XIQV"
                },
                "store": {
                    "code": "NWNV",
                    "name": "WTQVRTNL",
                    "externalId": "FPZNGYUV",
                    "externalId1": "WFM",
                    "externalId2": "TBITHF"
                }
            },
            "redemptionDateTime": "WNB",
            "transactionIdentifier": "SGA",
            "appliedPromotions": [
                {
                    "redemptionCount": 4933,
                    "promotionId": "VOSY",
                    "earnId": "MGVADJSQO",
                    "discountAppliedOnQuantity": 2662.682769091687,
                    "discount": 3127.1389321916945,
                    "redemptionType": "TQIAZNDWD"
                }
            ],
            "lineItemInfo": [
                {
                    "sku": "XNK",
                    "productId": "GMX",
                    "appliedPromotions": [
                        {
                            "redemptionCount": 4947,
                            "promotionId": "ORKC",
                            "earnId": "RQHH",
                            "discountAppliedOnQuantity": 2178.8487374098336,
                            "discount": 6697.317986678818,
                            "redemptionType": "PJB"
                        }
                    ]
                }
            ]
        },
        "eventId": "RAKUK",
        "orgId": 3401,
        "refId": "DXLDCYH",
        "apiRequestId": "AWTDZLHDJ",
        "createdAt": 9510,
        "loyaltyEventId": "NUWRBLX",
        "traceAttributes": {
            "CPGY": "KAWUEBFOYA",
            "VXG": "JBJTTIHYFR",
            "YXLOW": "BYHZ"
        }
    }
```

## Cart Promotion Revoked Event (cartPromotionRevoked)

Notifies whenever a cart promotion is revoked from the user.

```
{
        "eventName": "cartPromotionRevoked",
        "data": {
            "customerIdentifiers": {
                "customerId": 6104,
                "firstName": "MBTXFZD",
                "lastName": "DAKW",
                "loyaltyType": "FMLEMKUMD",
                "instore": {
                    "id": 4309,
                    "mobile": "OVGPFLU",
                    "email": "WKQ",
                    "externalId": "BGQYITYA",
                    "cardnumber": "UFVWTD",
                    "cardexternalid": "GVOUS",
                    "cardNumbers": [
                        "CFZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "QDYFNYLFND",
                            "identifiers": [
                                {
                                    "identifierType": "RQXQL",
                                    "identifierValue": "LHVWANWYL"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "OKBE",
                            "identifiers": [
                                {
                                    "identifierType": "MGX",
                                    "identifierValue": "ZKAMHL"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "OVMFKXJGVJ",
                            "identifiers": [
                                {
                                    "identifierType": "BTHPNOOMYL",
                                    "identifierValue": "XBCH"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "IMH",
                            "identifiers": [
                                {
                                    "identifierType": "FQCZL",
                                    "identifierValue": "RAUIRHRHV"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "ZWWLE",
                            "identifiers": [
                                {
                                    "identifierType": "JUDOWMMXN",
                                    "identifierValue": "LALGWJTQIA"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "GLTLMCZE",
                            "identifiers": [
                                {
                                    "identifierType": "IKPVM",
                                    "identifierValue": "XVMONWYDKQ"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "OTMGM",
                            "identifiers": [
                                {
                                    "identifierType": "LFQEHG",
                                    "identifierValue": "THGZS"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "TSKD",
                            "identifiers": [
                                {
                                    "identifierType": "DPYSUVYZP",
                                    "identifierValue": "DOVT"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "LPM",
                            "identifiers": [
                                {
                                    "identifierType": "IBZTAM",
                                    "identifierValue": "IGLNS"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HASYHRHCK",
                            "identifiers": [
                                {
                                    "identifierType": "JOQGUNUU",
                                    "identifierValue": "TLSBVOYVMF"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "SJRKYILE",
            "earnId": "TXISYZVZMM"
        },
        "eventId": "ONGUZWFNV",
        "orgId": 5155,
        "refId": "WHEQ",
        "apiRequestId": "BLJC",
        "createdAt": 4840,
        "loyaltyEventId": "JUYQET",
        "traceAttributes": {
            "CGY": "FAUY",
            "BKKS": "GYCDXOJBPM"
        }
    }
```

```
{
        "eventName": "cartPromotionRevoked",
        "data": {
            "customerIdentifiers": {
                "customerId": 6104,
                "firstName": "MBTXFZD",
                "lastName": "DAKW",
                "loyaltyType": "FMLEMKUMD",
                "instore": {
                    "id": 4309,
                    "mobile": "OVGPFLU",
                    "email": "WKQ",
                    "externalId": "BGQYITYA",
                    "cardnumber": "UFVWTD",
                    "cardexternalid": "GVOUS",
                    "cardNumbers": [
                        "CFZ"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "QDYFNYLFND",
                            "identifiers": [
                                {
                                    "identifierType": "RQXQL",
                                    "identifierValue": "LHVWANWYL"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "OKBE",
                            "identifiers": [
                                {
                                    "identifierType": "MGX",
                                    "identifierValue": "ZKAMHL"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "OVMFKXJGVJ",
                            "identifiers": [
                                {
                                    "identifierType": "BTHPNOOMYL",
                                    "identifierValue": "XBCH"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "IMH",
                            "identifiers": [
                                {
                                    "identifierType": "FQCZL",
                                    "identifierValue": "RAUIRHRHV"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "ZWWLE",
                            "identifiers": [
                                {
                                    "identifierType": "JUDOWMMXN",
                                    "identifierValue": "LALGWJTQIA"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "GLTLMCZE",
                            "identifiers": [
                                {
                                    "identifierType": "IKPVM",
                                    "identifierValue": "XVMONWYDKQ"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "OTMGM",
                            "identifiers": [
                                {
                                    "identifierType": "LFQEHG",
                                    "identifierValue": "THGZS"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "TSKD",
                            "identifiers": [
                                {
                                    "identifierType": "DPYSUVYZP",
                                    "identifierValue": "DOVT"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "LPM",
                            "identifiers": [
                                {
                                    "identifierType": "IBZTAM",
                                    "identifierValue": "IGLNS"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "HASYHRHCK",
                            "identifiers": [
                                {
                                    "identifierType": "JOQGUNUU",
                                    "identifierValue": "TLSBVOYVMF"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "SJRKYILE",
            "earnId": "TXISYZVZMM"
        },
        "eventId": "ONGUZWFNV",
        "orgId": 5155,
        "refId": "WHEQ",
        "apiRequestId": "BLJC",
        "createdAt": 4840,
        "loyaltyEventId": "JUYQET",
        "traceAttributes": {
            "CGY": "FAUY",
            "BKKS": "GYCDXOJBPM"
        }
    }
```

## Cart Promotion Earned Event (cartPromotionEarned)

Notifies whenever the user earns the cart promotion on meeting the defined criteria for the promotion.

```
{
        "eventName": "cartPromotionEarned",
        "data": {
            "customerIdentifiers": {
                "customerId": 1944,
                "firstName": "LBPKGKD",
                "lastName": "IPDPQVJ",
                "loyaltyType": "WJIDT",
                "instore": {
                    "id": 9878,
                    "mobile": "KFDVCAGNXG",
                    "email": "AOZQTBGP",
                    "externalId": "JCBN",
                    "cardnumber": "ADRLRPMO",
                    "cardexternalid": "JQPE",
                    "cardNumbers": [
                        "ECCLNRRXWU"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "HKXCKVRFC",
                            "identifiers": [
                                {
                                    "identifierType": "DGOVKD",
                                    "identifierValue": "THUWJLY"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "COTO",
                            "identifiers": [
                                {
                                    "identifierType": "MHITBN",
                                    "identifierValue": "ZWLVYUQ"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UTIHGNGC",
                            "identifiers": [
                                {
                                    "identifierType": "IZXYNGXLFS",
                                    "identifierValue": "AGTAVCCWDT"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "FWTLHC",
                            "identifiers": [
                                {
                                    "identifierType": "UIQZKVZEN",
                                    "identifierValue": "RHIM"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "VILJGGC",
                            "identifiers": [
                                {
                                    "identifierType": "LGTWZCJCI",
                                    "identifierValue": "TRZSEOL"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "YNUCRYCRHB",
                            "identifiers": [
                                {
                                    "identifierType": "KZLQI",
                                    "identifierValue": "ABNWWMEZC"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VSSFLWR",
                            "identifiers": [
                                {
                                    "identifierType": "MZZY",
                                    "identifierValue": "XKFWW"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "KEO",
                            "identifiers": [
                                {
                                    "identifierType": "SOWOMRPAL",
                                    "identifierValue": "WVSINXXUPU"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "GATFZAX",
                            "identifiers": [
                                {
                                    "identifierType": "BMWEXEPDOH",
                                    "identifierValue": "AMATDTZNE"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "BED",
                            "identifiers": [
                                {
                                    "identifierType": "VEEQTZ",
                                    "identifierValue": "ZAPLGNY"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "VUCFN",
            "issueId": "GDVPLFNF",
            "issueDate": "KOYYHVH",
            "earnId": "TDXOQ",
            "earnedTime": "XOKIIO"
        },
        "eventId": "ABN",
        "orgId": 4227,
        "refId": "BEVHYZI",
        "apiRequestId": "CQPZZNTB",
        "createdAt": 3064,
        "loyaltyEventId": "QSWXPULJRD",
        "traceAttributes": {
            "WVS": "PQRJSPY",
            "WDZFEKXGUE": "MIRTVR",
            "SONQ": "JJVTVWXQMM",
            "OXMJIMZD": "FDROQD",
            "WMXI": "AFDJBR"
        }
    }
```

```
{
        "eventName": "cartPromotionEarned",
        "data": {
            "customerIdentifiers": {
                "customerId": 1944,
                "firstName": "LBPKGKD",
                "lastName": "IPDPQVJ",
                "loyaltyType": "WJIDT",
                "instore": {
                    "id": 9878,
                    "mobile": "KFDVCAGNXG",
                    "email": "AOZQTBGP",
                    "externalId": "JCBN",
                    "cardnumber": "ADRLRPMO",
                    "cardexternalid": "JQPE",
                    "cardNumbers": [
                        "ECCLNRRXWU"
                    ]
                },
                "facebook": {
                    "accounts": [
                        {
                            "accountId": "HKXCKVRFC",
                            "identifiers": [
                                {
                                    "identifierType": "DGOVKD",
                                    "identifierValue": "THUWJLY"
                                }
                            ]
                        }
                    ]
                },
                "web_engage": {
                    "accounts": [
                        {
                            "accountId": "COTO",
                            "identifiers": [
                                {
                                    "identifierType": "MHITBN",
                                    "identifierValue": "ZWLVYUQ"
                                }
                            ]
                        }
                    ]
                },
                "wechat": {
                    "accounts": [
                        {
                            "accountId": "UTIHGNGC",
                            "identifiers": [
                                {
                                    "identifierType": "IZXYNGXLFS",
                                    "identifierValue": "AGTAVCCWDT"
                                }
                            ]
                        }
                    ]
                },
                "martjack": {
                    "accounts": [
                        {
                            "accountId": "FWTLHC",
                            "identifiers": [
                                {
                                    "identifierType": "UIQZKVZEN",
                                    "identifierValue": "RHIM"
                                }
                            ]
                        }
                    ]
                },
                "tmall": {
                    "accounts": [
                        {
                            "accountId": "VILJGGC",
                            "identifiers": [
                                {
                                    "identifierType": "LGTWZCJCI",
                                    "identifierValue": "TRZSEOL"
                                }
                            ]
                        }
                    ]
                },
                "toabao": {
                    "accounts": [
                        {
                            "accountId": "YNUCRYCRHB",
                            "identifiers": [
                                {
                                    "identifierType": "KZLQI",
                                    "identifierValue": "ABNWWMEZC"
                                }
                            ]
                        }
                    ]
                },
                "jd": {
                    "accounts": [
                        {
                            "accountId": "VSSFLWR",
                            "identifiers": [
                                {
                                    "identifierType": "MZZY",
                                    "identifierValue": "XKFWW"
                                }
                            ]
                        }
                    ]
                },
                "ecommerce": {
                    "accounts": [
                        {
                            "accountId": "KEO",
                            "identifiers": [
                                {
                                    "identifierType": "SOWOMRPAL",
                                    "identifierValue": "WVSINXXUPU"
                                }
                            ]
                        }
                    ]
                },
                "website": {
                    "accounts": [
                        {
                            "accountId": "GATFZAX",
                            "identifiers": [
                                {
                                    "identifierType": "BMWEXEPDOH",
                                    "identifierValue": "AMATDTZNE"
                                }
                            ]
                        }
                    ]
                },
                "line": {
                    "accounts": [
                        {
                            "accountId": "BED",
                            "identifiers": [
                                {
                                    "identifierType": "VEEQTZ",
                                    "identifierValue": "ZAPLGNY"
                                }
                            ]
                        }
                    ]
                }
            },
            "promotionId": "VUCFN",
            "issueId": "GDVPLFNF",
            "issueDate": "KOYYHVH",
            "earnId": "TDXOQ",
            "earnedTime": "XOKIIO"
        },
        "eventId": "ABN",
        "orgId": 4227,
        "refId": "BEVHYZI",
        "apiRequestId": "CQPZZNTB",
        "createdAt": 3064,
        "loyaltyEventId": "QSWXPULJRD",
        "traceAttributes": {
            "WVS": "PQRJSPY",
            "WDZFEKXGUE": "MIRTVR",
            "SONQ": "JJVTVWXQMM",
            "OXMJIMZD": "FDROQD",
            "WMXI": "AFDJBR"
        }
    }
```

Updated3 days ago