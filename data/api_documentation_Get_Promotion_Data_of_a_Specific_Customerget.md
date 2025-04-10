# Get Promotion Data of a Specific Customerget

This API retrieves the promotion data of a specified customer. It provides detailed information on the various promotions the customer is associated with within a loyalty program. This includes the types of promotions, point and redemption restriction details, start and end dates,  and activation status.

By default, the types of promotions are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, referTypes of promotions.

## Types of promotions

There are three different types of promotions:

- GENERIC (UI term - Available without issue)

- LOYALTY (UI term - Direct issue)

- LOYALTY_EARNING (UI term - Enrol & Issue)

The fieldpointsOfferTypein the response provides information on the type of promotion.

`pointsOfferType`

## Limits and restrictions

If theTypes of promotionsare enabled for your organisation, then the information regarding the limits and restrictions on issual, earning, or redemption is available in the objectpromotionRestriction. This information is also replicated in thelimitsandcustomerUsageobjects.

If your organisation does not have theTypes of promotionsenabled, the details on the limits and restrictions are available only in thelimitsandcustomerUsageobjects.

# API endpoint example

(https://eucrm.cc.capillarytech.com/v2/customers/lookup/promotionData?identifierName=externalId&identifierValue=000003873354&source=INSTORE&limit=10&offset=0)

```
(https://eucrm.cc.capillarytech.com/v2/customers/lookup/promotionData?identifierName=externalId&identifierValue=000003873354&source=INSTORE&limit=10&offset=0)
```

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access group resource: Read access to customer group resource

# Resource information

|  |  |

| --- | --- |

| URI | /v2/customers/lookup/promotionData |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| identifierName* | String | Identifier type to identify the customer. Supported Values: mobile, email, externalId, id,cuid |

| identifierValue* | Integer | Value for the identifier. |

| source* | String | Source from which you want to fetch the customer details. Supported Values:- FACEBOOK, WEB_ENGAGE, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL. |

| promotionStatusForCustomer | String | Provides information about customer enrollment and issuances in the promotion. Supported values are:-AVAILABLE_TO_ENROL:- Promotions of the "Enrol & Issue" type that customers can still enroll in.AVAILABLE_TO_EARN:- Promotions the customer is eligible to enrol to promotion, including "Direct Issue" promotions and "Enrol & Issue" promotions where the customer is already enrolled.AVAILABLE_TO_REDEEM:- Active promotions that the customer can currently redeem (get benefits) across all types of promotionns including "Enrol & Issue", "Direct Issue" and "Available to Issue"EXPIRED:- Promotions that have expired, i.e. promotion's end date is in past. |

| fetchAllUsage | Boolean | Set to true to fetch details of allredemption restrictions, including both enabled and disabled.If a restriction is not enabled andfetchAllUsage=true, themaxLimitvalue is displayed as -1, which indicates that there are no restrictions. |

| limit | String | Number of results that need to be displayed. The values from zero to a maximum of 100 are supported. |

| offset | String | Start index for data retrieval. This value should not be negative. |

| promotionType | String (ENUM) | Specify the type of the promotionsSupported values: GENERIC, DIRECT_ISSUE, ENROL_AND_ISSUE |

| sourceType | ENUM | Pass any one values among UI, API, CAMPAIGN , if want to filter promotion data based on its source type |

| programs | String | Comma separated list of program ids |



[redemption restrictions](/docs/direct-issue-loyalty-promotion#defining-limits-for-issuing-promotions-and-redemption)

`fetchAllUsage`

`maxLimit`

```
https://eu.api.capillarytech.com/v2/customers/lookup/promotionData?identifierName=externalId&identifierValue=000003873354&source=INSTORE&limit=10&offset=0
```

```
https://eu.api.capillarytech.com/v2/customers/lookup/promotionData?identifierName=externalId&identifierValue=000003873354&source=INSTORE&limit=10&offset=0
```

```
https://eu.api.capillarytech.com/v2/customers/lookup/promotionData?identifierName=mobile&source=INSTORE&identifierValue=919456430850&promotionType=GENERIC
```

```
https://eu.api.capillarytech.com/v2/customers/lookup/promotionData?identifierName=mobile&source=INSTORE&identifierValue=919456430850&promotionType=GENERIC
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| pageDetails | Object | Object containing pagination details. |

| - pageNumber | Integer | Page number of the current result set. |

| - pageSize | Integer | Number of entries per page. |

| - totalEntries | Integer | Total number of entries in the result set. |

| - pageCount | Integer | Total number of pages in the result set. |

| customerId | Integer | Identifier of the customer. |

| promotions | Object | An object containing details of promotions. |

| - promotionId | Integer | Unique identifier for the promotion issued to the customer. |

| - promotionName | String | Name of the promotion. |

| - programId | Integer | Identifier of the loyalty program associated with the promotion. |

| - startDate | String | Start date of the promotion. Supported format: YYYY-MM-DDTHH:MM:SS.000Z. The system uses the server's cluster time for determining the badge expiry. For example, if a badge expires at 7 PM IST in an Asia-based cluster, it will expire at that exact time, regardless of the user's local time zone. |

| - endDate | String | End date of the promotion. Supported format: YYYY-MM-DDTHH:MM:SS.000Z. The system uses the server's cluster time for determining the badge expiry. For example, if a badge expires at 7 PM IST in an Asia-based cluster, it will expire at that exact time, regardless of the user's local time zone. |

| - identifier | String | Universally Unique Identifier for the promotion. |

| - description | String | Description of the promotion. |

| - active | Boolean | Indicates if the promotion is active. |

| - eventName | String | Event triggering the promotion. |

| - promotionMetadata | Object | Array containing metadata for the promotion. It allows you to provide additional information for the promotion. |

| - - key | String | Key of the additional information. |

| - - value | String | Value of the additional information. |

| - - brandDefined | Boolean | Indicates if the additional information about promotion is assigned to some brands or not. Values: TRUE or FALSE |

| - limits | Object | Object containing limits set for the promotion. |

| - - maxPointsPerEvent | Integer | Maximum number of points offered per event. |

| - - pointsPerCustomer | Integer | Maximum points a customer can earn. |

| - - numberOFTimesPerCustomer | Integer | The maximum number of activities per customer that can allocate points. |

| - - totalPointsInPromotion | Integer | The maximum points permitted across customers within the promotion duration. |

| - customerUsage | Object | Object containing customer usage details. |

| - - currentPointsPerCustomer | String | The current points accrued by the customer. |

| - - currentNumberOfTimesPerCustomer | Integer | The number of activities through which the customer has received the points. |

| - - currentTotalPointsInPromotion | String | The points received by all customers within the promotion duration. |

| - pointsOfferType | String | Type of promotion. The types of promotion are GENERIC, LOYALTY, and LOYALTY_EARNING. |

| - promotionRestriction | Object | Object containing promotion restriction details. Information in this field is replicated if Advanced loyalty Promotion is available in your org. |

| - - issualRestrictions | Object | Array containing issual restriction details. This restriction can configured using API and UI both. |

| - - - kpi | String | Key performance indicator for the restriction. The KPI values are NUMBER_OF_ISSUALS: Number of promotion issual doneNUMBER_OF_TIMES: Number of times the issual was done.NUMBER_OF_POINTS: Points issued to a customer. |

| - - - maxLimit | String | Maximum times a customer can be enrolled in a promotion. |

| - - - currentCustomerUsage | String | The present count of a customer's enrolment in a promotion. |

| - - - limitOn | String | Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION. |

| - - earnRestrictions | Object | Array containing earn restriction details. This restriction can configured using API and UI both. |

| - - - kpi | String | Key performance indicator for the restriction. The KPI values are NUMBER_OF_EARNS: Number of enrol doneNUMBER_OF_TIMES: Number of times the promotion got enrolled to customer.NUMBER_OF_POINTS: Points issued to a customer. |

| - - - maxLimit | String | Maximum times a promotion can be issued to a customer. |

| - - - currentCustomerUsage | String | The present number of instances a promotion is issued to the customer. |

| - - - limitOn | String | Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION. |

| - - redemptionRestrictions | Object | Array containing redemption restriction details. |

| - - - kpi | String | Key performance indicator for the restriction. The KPI values are NUMBER_OF_EARNS: Number of promotion enrolling doneNUMBER_OF_ISSUALS: Number of promotion issual doneNUMBER_OF_TIMES: Number of times the issual and enrolling was done.NUMBER_OF_POINTS: Points issued to a customer. |

| - - - maxLimit | String | Maximum number of times the points can be availed. |

| - - - currentCustomerUsage | String | The present number of points availed by the customer. |

| - - - limitOn | String | Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION. |

| - - - type | String | Type of restrictions. The values are NON_PERIOD_BASED or PERIOD_BASED. |

| warnings | Object | An array containing any warnings. |



```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 2,
        "totalEntries": 169,
        "pageCount": 85
    },
    "customerId": 555380204,
    "promotions": [
        {
            "promotionId": 67248,
            "promotionName": "100 Points for 3+ Transactions5",
            "programId": 469,
            "startDate": "2024-10-31T18:30:00.000Z",
            "endDate": "2025-01-31T18:30:00.000Z",
            "identifier": "billslayer5",
            "description": "Earn 100 points for completing more than 3 transactions",
            "active": true,
            "eventName": "TargetCompleted",
            "limits": {
                "maxPointsPerEvent": "100",
                "pointsPerCustomer": "100",
                "numberOFTimesPerCustomer": 1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 67247,
            "promotionName": "duplicate_test_5",
            "programId": 469,
            "startDate": "2023-12-30T18:30:00.000Z",
            "endDate": "2024-12-30T18:30:00.000Z",
            "identifier": "e823c904-34bf-4b8a-8124-16085183177f",
            "description": "Welcome offer for first-time customers with specific conditions",
            "active": true,
            "eventName": "TransactionAdd",
            "promotionMetadata": [
                {
                    "key": "preferred language",
                    "value": "en",
                    "brandDefined": true
                },
                {
                    "key": "testt",
                    "value": "vall",
                    "brandDefined": true
                }
            ],
            "limits": {
                "maxPointsPerEvent": "150",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "150",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "20",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "MONTHLY"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "200",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "DAILY"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "WEEKLY"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 2,
        "totalEntries": 169,
        "pageCount": 85
    },
    "customerId": 555380204,
    "promotions": [
        {
            "promotionId": 67248,
            "promotionName": "100 Points for 3+ Transactions5",
            "programId": 469,
            "startDate": "2024-10-31T18:30:00.000Z",
            "endDate": "2025-01-31T18:30:00.000Z",
            "identifier": "billslayer5",
            "description": "Earn 100 points for completing more than 3 transactions",
            "active": true,
            "eventName": "TargetCompleted",
            "limits": {
                "maxPointsPerEvent": "100",
                "pointsPerCustomer": "100",
                "numberOFTimesPerCustomer": 1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 67247,
            "promotionName": "duplicate_test_5",
            "programId": 469,
            "startDate": "2023-12-30T18:30:00.000Z",
            "endDate": "2024-12-30T18:30:00.000Z",
            "identifier": "e823c904-34bf-4b8a-8124-16085183177f",
            "description": "Welcome offer for first-time customers with specific conditions",
            "active": true,
            "eventName": "TransactionAdd",
            "promotionMetadata": [
                {
                    "key": "preferred language",
                    "value": "en",
                    "brandDefined": true
                },
                {
                    "key": "testt",
                    "value": "vall",
                    "brandDefined": true
                }
            ],
            "limits": {
                "maxPointsPerEvent": "150",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "150",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "20",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "MONTHLY"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "200",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "DAILY"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "WEEKLY"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```

```
"pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```

```
"pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```

```
"pointsOfferType": "LOYALTY",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "10",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "10.000",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```

```
"pointsOfferType": "LOYALTY",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "10",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "10.000",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```

```
"pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "2",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```

```
"pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "2",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345853998,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": []
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345853998,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": []
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:41:55.000Z",
                    "enrollmentExpiryDate": "2024-06-30T12:41:55.000Z",
                    "enrollmentId": 1580,
                    "enrollEventLogId": 12413589,
                    "issuedDetails": []
                }
            ]
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:41:55.000Z",
                    "enrollmentExpiryDate": "2024-06-30T12:41:55.000Z",
                    "enrollmentId": 1580,
                    "enrollEventLogId": 12413589,
                    "issuedDetails": []
                }
            ]
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 6,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:41:55.000Z",
                    "enrollmentExpiryDate": "2024-06-30T12:41:55.000Z",
                    "enrollmentId": 1580,
                    "enrollEventLogId": 12413589,
                    "issuedDetails": [
                        {
                            "issualId": 1583,
                            "issualDate": "2024-06-25T12:44:13.000Z",
                            "issualExpiryDate": "2024-06-30T12:41:55.000Z",
                            "issualEventLogId": 12413647,
                            "redeemedCount": 0
                        }
                    ]
                }
            ]
        },
        {
            "promotionId": 1119509,
            "promotionName": "Direct issue | LOYALTY PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-07-31T23:59:59.000Z",
            "identifier": "d1a3a7ec-b4c6-46f2-ba1f-adbe2e01e31d",
            "description": "include \"L+DIRECT_PROMO\" in Txn notes to earn this",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "3",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:44:13.000Z",
                    "enrollmentExpiryDate": "2024-07-31T23:59:59.000Z",
                    "enrollmentId": 1581,
                    "enrollEventLogId": 12413647,
                    "issuedDetails": [
                        {
                            "issualId": 1582,
                            "issualDate": "2024-06-25T12:44:13.000Z",
                            "issualExpiryDate": "2024-07-31T23:59:59.000Z",
                            "issualEventLogId": 12413647,
                            "redeemedCount": 0
                        }
                    ]
                }
            ]
        },
        {
            "promotionId": 1119508,
            "promotionName": "Available Aise Hi | GENERIC PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-07-31T23:59:59.000Z",
            "identifier": "358f87c6-877b-4181-aea7-23037a0990e4",
            "description": "include \"GENERIC\" in Txn notes to earn this",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 1119105,
            "promotionName": "Target Completed Promo",
            "programId": 1085,
            "startDate": "2024-04-30T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "079bd606-9a39-4308-9fb0-0c4b24fd909b",
            "description": "",
            "active": true,
            "eventName": "TargetCompleted",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        },
        {
            "promotionId": 1119103,
            "promotionName": "Item Viewed Behavioural Promo",
            "programId": 1085,
            "startDate": "2024-04-30T00:00:00.000Z",
            "endDate": "2027-05-31T23:59:59.000Z",
            "identifier": "ff0fc9a6-e3ef-4ad1-b9c5-e31645487c50",
            "description": "curl -L 'https://1j67rz51x7.execute-api.us-east-1.amazonaws.com/crm-staging-new/webhooks/7e0883bce52f9455c73460f89fe747bd' -d'{\n    \"customerId\": \"mobileNum\",\n    \"event_name\": \"Item Viewed\",\n    \"itemCode\": \"sku_1\",\n    \"items_in_product_set\": 14}",
            "active": true,
            "eventName": "GenericEvent",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        },
        {
            "promotionId": 1115386,
            "promotionName": "17 POINTS LYT PROMO ",
            "programId": 1085,
            "startDate": "2023-11-06T00:00:00.000Z",
            "endDate": "2023-12-31T23:59:59.000Z",
            "identifier": "ddafcfc2-781c-43d6-92e3-5263760aeb76",
            "description": "lyt promo: awards 17 points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 6,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:41:55.000Z",
                    "enrollmentExpiryDate": "2024-06-30T12:41:55.000Z",
                    "enrollmentId": 1580,
                    "enrollEventLogId": 12413589,
                    "issuedDetails": [
                        {
                            "issualId": 1583,
                            "issualDate": "2024-06-25T12:44:13.000Z",
                            "issualExpiryDate": "2024-06-30T12:41:55.000Z",
                            "issualEventLogId": 12413647,
                            "redeemedCount": 0
                        }
                    ]
                }
            ]
        },
        {
            "promotionId": 1119509,
            "promotionName": "Direct issue | LOYALTY PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-07-31T23:59:59.000Z",
            "identifier": "d1a3a7ec-b4c6-46f2-ba1f-adbe2e01e31d",
            "description": "include \"L+DIRECT_PROMO\" in Txn notes to earn this",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "3",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:44:13.000Z",
                    "enrollmentExpiryDate": "2024-07-31T23:59:59.000Z",
                    "enrollmentId": 1581,
                    "enrollEventLogId": 12413647,
                    "issuedDetails": [
                        {
                            "issualId": 1582,
                            "issualDate": "2024-06-25T12:44:13.000Z",
                            "issualExpiryDate": "2024-07-31T23:59:59.000Z",
                            "issualEventLogId": 12413647,
                            "redeemedCount": 0
                        }
                    ]
                }
            ]
        },
        {
            "promotionId": 1119508,
            "promotionName": "Available Aise Hi | GENERIC PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-07-31T23:59:59.000Z",
            "identifier": "358f87c6-877b-4181-aea7-23037a0990e4",
            "description": "include \"GENERIC\" in Txn notes to earn this",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 1119105,
            "promotionName": "Target Completed Promo",
            "programId": 1085,
            "startDate": "2024-04-30T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "079bd606-9a39-4308-9fb0-0c4b24fd909b",
            "description": "",
            "active": true,
            "eventName": "TargetCompleted",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        },
        {
            "promotionId": 1119103,
            "promotionName": "Item Viewed Behavioural Promo",
            "programId": 1085,
            "startDate": "2024-04-30T00:00:00.000Z",
            "endDate": "2027-05-31T23:59:59.000Z",
            "identifier": "ff0fc9a6-e3ef-4ad1-b9c5-e31645487c50",
            "description": "curl -L 'https://1j67rz51x7.execute-api.us-east-1.amazonaws.com/crm-staging-new/webhooks/7e0883bce52f9455c73460f89fe747bd' -d'{\n    \"customerId\": \"mobileNum\",\n    \"event_name\": \"Item Viewed\",\n    \"itemCode\": \"sku_1\",\n    \"items_in_product_set\": 14}",
            "active": true,
            "eventName": "GenericEvent",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        },
        {
            "promotionId": 1115386,
            "promotionName": "17 POINTS LYT PROMO ",
            "programId": 1085,
            "startDate": "2023-11-06T00:00:00.000Z",
            "endDate": "2023-12-31T23:59:59.000Z",
            "identifier": "ddafcfc2-781c-43d6-92e3-5263760aeb76",
            "description": "lyt promo: awards 17 points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 3,
        "pageCount": 1
    },
    "customerId": 564332013,
    "promotions": [
        {
            "promotionId": 79877,
            "promotionName": "Promotion Points",
            "programId": 973,
            "startDate": "2025-01-01T00:00:00.000Z",
            "endDate": "2025-02-13T23:59:59.000Z",
            "identifier": "4b0478e1-d2fd-4ffc-9032-a45547b64665",
            "description": "Promotion Points",
            "active": true,
            "eventName": "PointsRedemption",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 79874,
            "promotionName": "Points Promo",
            "programId": 973,
            "startDate": "2025-01-22T00:00:00.000Z",
            "endDate": "2025-04-17T23:59:59.000Z",
            "identifier": "5fe57e1c-ca55-4b6d-a88c-72eff058e8c2",
            "description": "Points Promo",
            "active": true,
            "eventName": "PointsRedemption",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 79555,
            "promotionName": "2X Points",
            "programId": 973,
            "startDate": "2025-01-20T00:00:00.000Z",
            "endDate": "2025-02-28T23:59:59.000Z",
            "identifier": "33c82f8f-f6b3-4264-9b72-3ecb969a03bf",
            "description": "2X Points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "4990.000",
                "currentNumberOfTimesPerCustomer": 4,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "4",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "4990.000",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 3,
        "pageCount": 1
    },
    "customerId": 564332013,
    "promotions": [
        {
            "promotionId": 79877,
            "promotionName": "Promotion Points",
            "programId": 973,
            "startDate": "2025-01-01T00:00:00.000Z",
            "endDate": "2025-02-13T23:59:59.000Z",
            "identifier": "4b0478e1-d2fd-4ffc-9032-a45547b64665",
            "description": "Promotion Points",
            "active": true,
            "eventName": "PointsRedemption",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 79874,
            "promotionName": "Points Promo",
            "programId": 973,
            "startDate": "2025-01-22T00:00:00.000Z",
            "endDate": "2025-04-17T23:59:59.000Z",
            "identifier": "5fe57e1c-ca55-4b6d-a88c-72eff058e8c2",
            "description": "Points Promo",
            "active": true,
            "eventName": "PointsRedemption",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 79555,
            "promotionName": "2X Points",
            "programId": 973,
            "startDate": "2025-01-20T00:00:00.000Z",
            "endDate": "2025-02-28T23:59:59.000Z",
            "identifier": "33c82f8f-f6b3-4264-9b72-3ecb969a03bf",
            "description": "2X Points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "4990.000",
                "currentNumberOfTimesPerCustomer": 4,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "4",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "4990.000",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1115386,
            "promotionName": "17 POINTS LYT PROMO ",
            "programId": 1085,
            "startDate": "2023-11-06T00:00:00.000Z",
            "endDate": "2023-12-31T23:59:59.000Z",
            "identifier": "ddafcfc2-781c-43d6-92e3-5263760aeb76",
            "description": "lyt promo: awards 17 points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        }
    ],
    "warnings": []
}
```

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1115386,
            "promotionName": "17 POINTS LYT PROMO ",
            "programId": 1085,
            "startDate": "2023-11-06T00:00:00.000Z",
            "endDate": "2023-12-31T23:59:59.000Z",
            "identifier": "ddafcfc2-781c-43d6-92e3-5263760aeb76",
            "description": "lyt promo: awards 17 points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        }
    ],
    "warnings": []
}
```

```
{
    "errors": [
        {
            "status": false,
            "code": 8015,
            "message": "Customer not found for the given identifiers"
        }
    ]
}
```

```
{
    "errors": [
        {
            "status": false,
            "code": 8015,
            "message": "Customer not found for the given identifiers"
        }
    ]
}
```

```
{
    "errors": [
        {
            "status": false,
            "message": "Invalid source",
            "code": 8003
        }
    ]
}
```

```
{
    "errors": [
        {
            "status": false,
            "message": "Invalid source",
            "code": 8003
        }
    ]
}
```

# API specific error codes

| Error | Description |

| --- | --- |

| 8013 | Identifier name missing or incorrect. |

| 8015 | Identifier value missing or incorrect. |

| 8003 | Source is missing or incorrect. |



`Try It!`