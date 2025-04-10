# Get Points Ledger Explode Info in Connected Orgsget

The Customer Ledger Explode Info API retrieves additional points ledger info for a customer or user group in a connected organisation.

A customer points ledger is essentially a record that tracks the points earned, spent, and adjusted within an organization and its affiliates. These points are treated like currency and can be redeemed across various units or loyalty programs within the organization.

For more information, refer to the documentation onPoints Ledgers.

# API endpoint example

(https://eucrm.cc.capillarytech.com/v2.1/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE&eventIds=18608683

```
(https://eucrm.cc.capillarytech.com/v2.1/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE&eventIds=18608683
```

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access points group resource: Read access to customer points group resource

# Resource information

|  |  |

| --- | --- |

| URI | v2.1/pointsLedger/getLedgerExplodeInfo |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELFandOTHER.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

[data scopes](/reference/connected-orgs-data-scopes)

# Query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| identifierName* | String | Identifier of the customer. Supported valuesmobile,id,emailandexternalid |

| identifierValue* | Integer | Value for the identifier. For example, the mobile number or customer ID. |

| source* | String | Source in which the identifier is available. For example,INSTORE,MARTJACK,WECHAT,FACEBOOK,WEB_ENGAGE,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL |

| eventIds* | String | The list of eventIDs with comma separated values. These are eventLogIds, corresponding to the events in loyalty likeTransactionAdd,CustomerRegistrationetc. |

| accountId | String | For a source with multiple accounts, pass the specific accountId in which the customer identifier is available. |

| getBillDetails | Boolean | Setting this to true will return Bill details like the bill no, amount, discount, line items etc |

| getPointsEarnedBreakup | Boolean | Setting this to true will return the points breakup details like points category Name, points allocation strategy Name, expiry strategy etc |

| getCustomFields | Boolean | Setting this value will return the custom fields set up by the brand |

| getExtendedFields | Boolean | Setting this field will return the extended fields set up by the brand |

| getMaxConversionDetails | Boolean | Setting this field to true will return the max conversion details which is set for Add Transation, for all line items where delayed accrual is based on fixed or return date, max of all dates is calculated and show in the field name “maxConversionDate” |

| getPaymentMode | String | Setting this field will show an array of payment modes used ex UPI, CASH etc |

| type | String | Setting this filed returns entries for type of user, whether individual customer or a group. Only two values are allowed here - CUSTOMER, USERGROUP2 |

| isPrimaryUser | Boolean | Returns entry for the primary member of a group, in case of usergroups. |

| includeAlternateCurrencies | Boolean | Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer. |

| alternateCurrencyNames | String | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies. |

| eventName | String | Name of the event (GenericEvent, TransactionAdd, ReturnBill). An event refers to any activity performed by a customer, whether in an online store or a physical store.GenericEvent: Ageneric eventrefers to a customizable behavioral event where specific attributes like Customer ID or Product SKU are used to track events.TransactionAdd:  Atransaction addrefers to the addition of a new transaction to the system.ReturnBill: Areturn billrefers to a transaction where items previously purchased are returned, and any achievements earned are revoked. |

| eventReferenceIds | Integer | A reference ID is a unique identifier that links to an event.For TransactionAdd and ReturnBill, the reference ID is the billId of the transaction.For GenericEvent, the reference ID is the unique request ID for the event.You can add up totenreference IDs for the specifiedeventNameseparated by commas.Refer to the documentation ongetting transaction detailsandgetting event detailsfor more information. |



`mobile`

`id`

`email`

`externalid`

`INSTORE`

`MARTJACK`

`WECHAT`

`FACEBOOK`

`WEB_ENGAGE`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`ALL`

`TransactionAdd`

`CustomerRegistration`

[generic event](/docs/behavioral-loyalty#behavioral-attributes-as-tags-in-the-communication)

[transaction add](/reference/addreturn-transaction-bulk)

[return bill](/reference/return-transaction#request-body-parameters)

`eventName`

[getting transaction details](/reference/get_transaction_detailsv1)

[getting event details](/reference/search-events)

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| eventLogId | Integer | Unique identifier for the event log. |

| eventName | String | Name of the event that occurred. |

| eventDetails | Object | Contains details about the event, such as time and ID. |

| eventTime | String | Timestamp of when the event occurred. YYYY-MM-DD HH:MM:SS.S |

| tillId | Integer | Unique ID of the till. |

| eventReferenceId | String | Reference ID associated with the event. |

| orgId | Integer | Unique ID of the associated organization. |



# Sample Response

```
{
    "events": [
        {
            "eventLogId": 13499091,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-08-30 11:17:57.0",
                "tillId": 50161182
            "eventReferenceId": "36363905",
            "uniqueId": "aBcdEfG1H2",
            "orgId": 50406
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 13499091,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-08-30 11:17:57.0",
                "tillId": 50161182
            "eventReferenceId": "36363905",
            "uniqueId": "aBcdEfG1H2",
            "orgId": 50406
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 18608683,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-08-20 11:29:02.0",
                "tillId": 50681412
            },
            "eventReferenceId": "2151165932",
            "orgId": 4000218
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 18608683,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-08-20 11:29:02.0",
                "tillId": 50681412
            },
            "eventReferenceId": "2151165932",
            "orgId": 4000218
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId1},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        },

{
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId2},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId1},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        },

{
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId2},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        }
    ],
    "warnings": []
}
```

# API specific error codes

| Error | Description |

| --- | --- |

| 8013 | Identifier name missing or incorrect. |

| 8015 | Identifier value missing or incorrect. |

| 8003 | Source is missing or incorrect. |

| 310144 | Connected Orgs not set properly in Headers.Check whether the target organisation is a connected organisation. |



`Try It!`