# Get Points Ledger Explode infoget

The Customer Ledger Explode Info API retrieves additional points ledger info for a customer or user group.

A customer points ledger is essentially a record that tracks the points earned, spent, and adjusted within an organization and its affiliates. These points are treated like currency and can be redeemed across various units or loyalty programs within the organization.

For more information, refer to the documentation onPoints Ledgers.

# API endpoint example

https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE&eventIds=18608683

```
https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=917406401004&source=INSTORE&eventIds=18608683
```

With event name and reference ID for a transactional event:https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=id&identifierValue=1709400643455&source=INSTORE&offset=0&limit=10&eventName=TransactionAdd&eventReferenceIds=37195406289&getBillDetails=true&getCustomFields=true&getPaymentModes=true&getMaxConversionDetails=true

```
https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=id&identifierValue=1709400643455&source=INSTORE&offset=0&limit=10&eventName=TransactionAdd&eventReferenceIds=37195406289&getBillDetails=true&getCustomFields=true&getPaymentModes=true&getMaxConversionDetails=true
```

With event name and request ID for a behavioral event:https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?eventName=GenericEvent&eventReferenceIds=c30af8e0-1c51-475c-bbda-ca94b1d67074&identifierName=id&identifierValue=347689245&source=INSTORE&getPointsEarnedBreakup=true&getMaxConversionDetails=true&getCustomFields=true&getExtendedFields=true&getBillDetails=true&includeLastOneYearData=false&offset=0&limit=10

```
https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?eventName=GenericEvent&eventReferenceIds=c30af8e0-1c51-475c-bbda-ca94b1d67074&identifierName=id&identifierValue=347689245&source=INSTORE&getPointsEarnedBreakup=true&getMaxConversionDetails=true&getCustomFields=true&getExtendedFields=true&getBillDetails=true&includeLastOneYearData=false&offset=0&limit=10
```

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access points group resource: Read access to customer points group resource

# Resource information

|  |  |

| --- | --- |

| URI | v2/pointsLedger/getLedgerExplodeInfo |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| identifierName* | String | Identifier type to identify the customer. Supported valuesMOBILE,ID,EMAIL,CustomerID,primaryUserIdandEXTERNALID |

| identifierValue* | Integer | Value for the identifier. For example, the mobile number or customer ID. |

| source* | String | Source in which the identifier is available. For example, INSTORE, MARTJACK, WECHAT, FACEBOOK , WEB_ENGAGE, , TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL |

| eventIds\ | String | The list ofeventLogIdwith comma separated values. These are eventLogIds, corresponding to the events in loyalty like TransactionAdd, CustomerRegistration etc. |

| accountId | String | For a source with multiple accounts, pass the specific accountId in which the customer identifier is available. |

| getBillDetails | Boolean | Setting this to true will return Bill details like the bill no, amount, discount, line items etc |

| getPointsEarnedBreakup | Boolean | Setting this to true will return the points breakup details like points category Name, points allocation strategy Name, expiry strategy etc |

| getCustomFields | Boolean | Setting this value will return the custom fields set up by the brand |

| getExtendedFields | Boolean | Setting this field will return the extended fields set up by the brand |

| getMaxConversionDetails | Boolean | Setting this field to true will return the max conversion details which is set for Add Transation, for all line items where delayed accrual is based on fixed or return date, max of all dates is calculated and show in the field name “maxConversionDate” |

| getPaymentModes | Boolean | Setting this field will show an array of payment modes used ex UPI, CASH etc |

| type | String | Setting this filed returns entries for type of user, whether individual customer or a group. Only two values are allowed here - CUSTOMER, USERGROUP2 |

| isPrimaryUser | Boolean | Returns entry for the primary member of a group, in case of usergroups. |

| includeAlternateCurrencies | Boolean | Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer. |

| alternateCurrencyNames | String | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies. |

| eventName | String | Name of the event. Supports both Behavioural and Transaction events. |

| eventReferenceIds | Integer | Reference ID for the event.For a transactional event, the reference ID is the transaction ID.For a behavioral event, the reference ID is the unique request ID that is generated when a behavioral event is triggered.You can add up totenreference IDs for the specifiedeventNameseparated by commas.Refer to the documentation ongetting transaction detailsandgetting behavioral event detailsfor more information on getting reference IDs for an event. |



`eventLogId`

`eventName`

[getting transaction details](/reference/get_transaction_detailsv1)

[getting behavioral event details](/reference/search-events)

# Sample Response

```
{
    "events": [
        {
            "eventLogId": 30527930,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName",
                "targetId": 76041,
                "targetName": "TName",
                "targetDescription": "TDescription",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "targetValue": "1000.000",
                "achievedValue": "1200.000",
                "sourceId": 641554,
                "sourceType": "USERTARGET",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Progname",
                            "programId": 1933,
                            "programName": "DefaultProgram",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                }
            },
            "eventReferenceId": "263985",
            "uniqueId": "71730c8b628d0978e21e5e374f50fae606779fd412"
        },
        {
            "eventLogId": 30527931,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "300.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 1"
            },
            "eventReferenceId": "263986",
            "uniqueId": "88248bc99f945f1778f85af7c6ba69e4b90651c6"
        },
        {
            "eventLogId": 30527932,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "600.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 2"
            },
            "eventReferenceId": "263987",
            "uniqueId": "7470f2457563461f66bc1aasgf1760d8ga71ec3ee0174c267"
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 30527930,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName",
                "targetId": 76041,
                "targetName": "TName",
                "targetDescription": "TDescription",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "targetValue": "1000.000",
                "achievedValue": "1200.000",
                "sourceId": 641554,
                "sourceType": "USERTARGET",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Progname",
                            "programId": 1933,
                            "programName": "DefaultProgram",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                }
            },
            "eventReferenceId": "263985",
            "uniqueId": "71730c8b628d0978e21e5e374f50fae606779fd412"
        },
        {
            "eventLogId": 30527931,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "300.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 1"
            },
            "eventReferenceId": "263986",
            "uniqueId": "88248bc99f945f1778f85af7c6ba69e4b90651c6"
        },
        {
            "eventLogId": 30527932,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "600.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 2"
            },
            "eventReferenceId": "263987",
            "uniqueId": "7470f2457563461f66bc1aasgf1760d8ga71ec3ee0174c267"
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

```
{
    "events": [
        {
            "eventLogId": 8143509,
            "eventName": "AllocateGoodwillPoints",
            "eventDetails": {
                "eventTime": "2023-07-27 19:14:10.0",
                "reason": "POINTS_ISSUE",
                "comments": "Customer has reached the milestone. Awarding him 100 points.",
                "assocId": 0,
                "requestId": 980464
            },
            "pointsEarned": {
                "regular": [],
                "promo": [
                    {
                        "promotionId": 1114107,
                        "promotionName": "Goodwill Promotion",
                        "programId": 890,
                        "programName": "huhuhuDefaultProgram",
                        "value": 100.0,
                        "expiresOn": "2023-08-01 23:59:59.0",
                        "expiryType": "fixed"
                    }
                ],
                "promised": []
            },
            "eventReferenceId": "-1",
            "uniqueId": "GzKOlmc0eM"
        }
    ],
    "warnings": []
}
```

```
{
    "events": [
        {
            "eventLogId": 8143509,
            "eventName": "AllocateGoodwillPoints",
            "eventDetails": {
                "eventTime": "2023-07-27 19:14:10.0",
                "reason": "POINTS_ISSUE",
                "comments": "Customer has reached the milestone. Awarding him 100 points.",
                "assocId": 0,
                "requestId": 980464
            },
            "pointsEarned": {
                "regular": [],
                "promo": [
                    {
                        "promotionId": 1114107,
                        "promotionName": "Goodwill Promotion",
                        "programId": 890,
                        "programName": "huhuhuDefaultProgram",
                        "value": 100.0,
                        "expiresOn": "2023-08-01 23:59:59.0",
                        "expiryType": "fixed"
                    }
                ],
                "promised": []
            },
            "eventReferenceId": "-1",
            "uniqueId": "GzKOlmc0eM"
        }
    ],
    "warnings": []
}
```

```
{
  "events": [
    {
      "eventLogId": 617258993,
      "eventName": "ReturnBill",
      "eventDetails": {
        "eventTime": "2025-02-04 09:00:00.0",
        "tillId": 75152721
      },
      "billDetails": {
        "billNumber": "txn-30",
        "billAmount": 500,
        "note": "this is test",
        "returnDate": "2025-02-04 09:00:00.0",
        "returnAmount": 500,
        "billDate": "2025-02-04 09:00:00.0",
        "returnType": "FULL",
        "returnBillId": 25489000,
        "pointsEarned": {
          "regular": [
            {
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "returnPoints": 1000,
              "expiryType": "rolling"
            }
          ],
          "promo": [
            {
              "promotionId": 79555,
              "promotionName": "2X Points",
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "returnedPoints": 1000,
              "expiryType": "rolling"
            }
          ],
          "promised": []
        },
        "pointsEarnedBreakup": {
          "regular": [
            {
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "awardedOn": "2025-02-04 10:47:50.0",
              "sourceValue": 0,
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "allocationStrategyId": 11879,
              "allocationStrategyName": "2X",
              "pointsCategoryId": 2143,
              "pointsCategoryName": "Main",
              "expiryStrategyId": 11833,
              "expiryStrategyName": "1 month",
              "promotionDetails": {
                "promotionId": 79555,
                "promotionName": "2X Points"
              },
              "returnPoints": 1000,
              "expiryType": "rolling"
            },
            {
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "awardedOn": "2025-02-04 10:47:50.0",
              "sourceValue": 0,
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "allocationStrategyId": 11879,
              "allocationStrategyName": "2X",
              "pointsCategoryId": 2143,
              "pointsCategoryName": "Main",
              "expiryStrategyId": 11833,
              "expiryStrategyName": "1 month",
              "returnPoints": 1000,
              "expiryType": "rolling"
            }
          ],
          "promised": []
        },
        "lineItems": []
      },
      "eventReferenceId": "881656638",
      "uniqueId": "esVgKMifP6"
    }
  ],
  "warnings": []
}
```

```
{
  "events": [
    {
      "eventLogId": 617258993,
      "eventName": "ReturnBill",
      "eventDetails": {
        "eventTime": "2025-02-04 09:00:00.0",
        "tillId": 75152721
      },
      "billDetails": {
        "billNumber": "txn-30",
        "billAmount": 500,
        "note": "this is test",
        "returnDate": "2025-02-04 09:00:00.0",
        "returnAmount": 500,
        "billDate": "2025-02-04 09:00:00.0",
        "returnType": "FULL",
        "returnBillId": 25489000,
        "pointsEarned": {
          "regular": [
            {
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "returnPoints": 1000,
              "expiryType": "rolling"
            }
          ],
          "promo": [
            {
              "promotionId": 79555,
              "promotionName": "2X Points",
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "returnedPoints": 1000,
              "expiryType": "rolling"
            }
          ],
          "promised": []
        },
        "pointsEarnedBreakup": {
          "regular": [
            {
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "awardedOn": "2025-02-04 10:47:50.0",
              "sourceValue": 0,
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "allocationStrategyId": 11879,
              "allocationStrategyName": "2X",
              "pointsCategoryId": 2143,
              "pointsCategoryName": "Main",
              "expiryStrategyId": 11833,
              "expiryStrategyName": "1 month",
              "promotionDetails": {
                "promotionId": 79555,
                "promotionName": "2X Points"
              },
              "returnPoints": 1000,
              "expiryType": "rolling"
            },
            {
              "value": 0,
              "expiresOn": "2025-03-01 23:59:59.0",
              "awardedOn": "2025-02-04 10:47:50.0",
              "sourceValue": 0,
              "programId": 973,
              "programName": "DocDemoDefaultProgram",
              "allocationStrategyId": 11879,
              "allocationStrategyName": "2X",
              "pointsCategoryId": 2143,
              "pointsCategoryName": "Main",
              "expiryStrategyId": 11833,
              "expiryStrategyName": "1 month",
              "returnPoints": 1000,
              "expiryType": "rolling"
            }
          ],
          "promised": []
        },
        "lineItems": []
      },
      "eventReferenceId": "881656638",
      "uniqueId": "esVgKMifP6"
    }
  ],
  "warnings": []
}
```

# Response Parameters

| Parameter Name | Type | Description |

| --- | --- | --- |

| eventLogId | Integer | A unique identifier for the event. |

| eventName | String | The name of the event, in this case,"GenericEvent". |

| eventDetails | Object | Contains details about the event. |

| - eventDisplayName | String | Display name of the event, e.g.,"CupSeries2024". |

| - tillId | Integer | ID of the till where the event was recorded. |

| - comments | String | Additional comments provided while issuing goodwill points. |

| -assocId | long | User ID of the Intouch user who issued the Goodwill points. |

| - displayName | String | Name to display for the event, e.g.,"CUP SERIES CHECK-IN". |

| - redemptionDetails | Array | Includes the details related to the redemption of points. |

| - - pointsRedeemed | String | The number of points that were redeemed in the transaction. |

| - - redemptionPurpose | String | Purpose of points redemption. |

| - - transactionNumber | String | The transaction/bill number associated with the points redemption. |

| - - redemptionId | String | A unique identifier for the redemption transaction. |

| targetCompletedDetails | Array | Object containing details of a completed target. |

| - targetGroupID | String | The unique group ID of the target. |

| - targetGroupName | String | The unique name of the target group. |

| - targetId | Integer | The unique ID of the target. |

| - targetName | String | The unique name of the target. |

| - targetDescription | String | Description of the target (if added). |

| - targetPeriodID | Integer | The unique ID of the target period. |

| - targetPeriodName | String | The unique name of the target period. |

| - sourceId | Integer | The unique ID of the target source. |

| - sourceType | String | The type of source (MILESTONE, STREAKS, UNIFIED). |

| pointsEarned | Object | Contains details of points earned in the event. |

| - regular | Array | Array of regular points earned (empty in this case). |

| - promo | Array | Array of promotional points earned during the event. |

| - - promotionId | Integer | The ID of the promotion, e.g.,8166. |

| - - promotionName | String | The name of the promotion, e.g.,"CupSeriesatClashColiseumBuschLightTrack_4Feb-5Feb". |

| - - programId | Integer | The ID of the loyalty program associated with the promotion, e.g.,1155. |

| - - programName | String | The name of the loyalty program, e.g.,"NASCAR LoyaltyDefaultProgram". |

| - - value | Float | The value of the points earned from the promotion, e.g.,200.0. |

| - - promotionStartDate | String | The start date of the promotion, e.g.,"2024-02-04 00:00:00.0". |

| - - promotionEndDate | String | The end date of the promotion, e.g.,"2024-03-05 23:59:59.0". |

| - - promised | Array | Array of promised points (empty in this case). |

| behavioralEventMetadata | Object | Metadata about the behavioral event associated with the check-in. |

| - label | String | The label for the behavioral event, e.g.,"CUP SERIES CHECK-IN". |

| - fields | Array | An array of fields related to the event's metadata. |

| - - fieldName | String | The name of the field, e.g.,"activity_date". |

| - - fieldType | String | The type of the field, e.g.,"DATE". |

| - attributes.isRequired.valueType | String | The type of value for theisRequiredattribute for the event, e.g.,"BOOLEAN". This is configured during thecreation of the event. |

| - attributes.isRequired.value | String | The value indicating if the field is required, e.g.,"false". |

| - isUniqueKeyField.valueType | String | The type of value for theisUniqueKeyFieldattribute, e.g.,"BOOLEAN". This is configured during thecreation of the event. |

| - isUniqueKeyField.value | String | The value indicating if the field is a unique key, e.g.,"false". |

| eventReferenceId | String | The event request ID. This is generated when theevent is sent. This helps to trace the event.ForTargetCompletedevents, this ID (targetAchievedEventLogId) is generated when a user has achieved a target. |

| uniqueId | String | Aunique identifierfor this specific event instance, e.g.,"70375599-a144-4065-8db5-a6abd061ddf7". This can be the same asrequestIdor a hash of the payload when theisUniqueKeyFieldis enabled. |

| billDetails | Object | Object containing details on  the following information: type (type of transaction), bill number (unique transaction number), gross amount, discount, bill amount, note, source, bill date (time in ISO 8601 format), and points earned details. |

| - billNumber | String | Unique identifier for the transaction. This is defined when adding the original transaction. |

| - billAmount | Float | Total transaction amount for the transaction. |

| - note | String | Note for the transaction. |

| - returnDate | String | Date when the transaction was returned in in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| - returnAmount | Float | Total amount for the return transaction. |

| - billDate | String | Date when the transaction was created in in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| - returnType | Enum | Type of return. Possible values:AMOUNT,FULL,LINE_ITEM,CANCELLED. |

| - returnBillId | long | Unique ID for the return transaction that is generated after a return transaction. This is theentityIdof the return transaction. |

| - pointsEarned | Object | Object containing details on the points earned for the transaction. |

| - pointsEarned | Object | Object containing more details on the points earned for the transaction. |

| - lineItems | Object | Object containing details on line items in the bill. |

| warnings | Array | Warnings, if any. |



`"GenericEvent"`

`"CupSeries2024"`

`"CUP SERIES CHECK-IN"`

`8166`

```
"CupSeriesatClashColiseumBuschLightTrack_4Feb-5Feb"
```

`1155`

`"NASCAR LoyaltyDefaultProgram"`

`200.0`

`"2024-02-04 00:00:00.0"`

`"2024-03-05 23:59:59.0"`

`"CUP SERIES CHECK-IN"`

`"activity_date"`

`"DATE"`

`isRequired`

`"BOOLEAN"`

[creation of the event](/docs/setup-test-behavioral-events)

`"false"`

`isUniqueKeyField`

`"BOOLEAN"`

[creation of the event](/docs/setup-test-behavioral-events)

`"false"`

[event is sent](/reference/post-event)

`TargetCompleted`

`targetAchievedEventLogId`

[unique identifier](/docs/setup-test-behavioral-events#enabling-uniqueness-check)

`"70375599-a144-4065-8db5-a6abd061ddf7"`

`requestId`

`isUniqueKeyField`

`YYYY-MM-DDTHH:mm:ss.SSS`

`YYYY-MM-DDTHH:mm:ss.SSS`

`AMOUNT`

`FULL`

`LINE_ITEM`

`CANCELLED`

`entityId`

# API specific errors

| Error Code | Description |

| --- | --- |

| 9022 | Event reference IDs are invalid |

| 11014 | Event name not found |

| 11023 | Valid identifiers not found |

| 11012 | Invalid userId passed in request |



`Try It!`