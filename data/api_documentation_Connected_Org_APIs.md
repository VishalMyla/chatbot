# Connected Org APIs

A loyalty promotion is a strategy used to reward customers for their engagement and transactions with a brand.

This API retrieves promotion data for a specific customer who is part of a connected organisation. It provides detailed information about the promotions associated with the customer within a loyalty program. This includes the types of promotions, point and redemption restrictions, start and end dates, and activation status.

By default, types of promotions are not available for all organisations. This feature must be enabled separately. For more details on types of promotions, refer totypes of promotions.

## Types of promotions

There are three different types of promotions:

- GENERIC (UI term - Available without issue)

- LOYALTY (UI term - Direct issue)

- LOYALTY_EARNING (UI term - Enroll & Issue)

The fieldpointsOfferTypein the response provides information on the type of promotion.

`pointsOfferType`

# API endpoint example

(https://eucrm.cc.capillarytech.com/v2.1/customers/lookup/promotionData?identifierName=mobile&identifierValue=917406400033&source=INSTORE

```
(https://eucrm.cc.capillarytech.com/v2.1/customers/lookup/promotionData?identifierName=mobile&identifierValue=917406400033&source=INSTORE
```

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access group resource: Read access to customer group resource

# Resource information

|  |  |

| --- | --- |

| URI | /v2.1/customers/lookup/promotionData |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organisation IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation.Supported headers:SELF,OTHERandALL.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

`ALL`

[data scopes](/reference/connected-orgs-data-scopes)

# Query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| identifierName* | String | Identifier of the customer. Supported valuesmobile,id,emailandexternalid |

| identifierValue* | Integer | Value for the identifier. For example, the mobile number or customer ID. |

| source* | String | Source in which the identifier is available. For example,INSTORE,MARTJACK,WECHAT,FACEBOOK,WEB_ENGAGE,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL |

| promotionStatusForCustomer | String | Provides information about customer enrollment and issuances in the promotion. Supported values are:-AVAILABLE_TO_ENROL:- Promotions of the "Enrol & Issue" type that customers can still enroll in.AVAILABLE_TO_EARN:- Promotions the customer is eligible to earn, including "Direct Issue" promotions and "Enrol & Issue" promotions where the customer is already enrolled.AVAILABLE_TO_REDEEM:- Active promotions that the customer can currently redeem (get benefits) across all types of promotionns including "Enrol & Issue", "Direct Issue" and "Available to Issue"EXPIRED:- Promotions that have expired, i.e. promotion's end date is in past. |

| includeAlternateCurrencyUsage | Boolean | With the parameter, the backend includes alternate currency usage in the same response fields used for points. By default, the value is false. |

| limit | String | Number of results that need to be displayed. The values from zero to a maximum of 100 are supported. |

| offset | String | Start index for data retrieval. This value should not be negative. |



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

`AVAILABLE_TO_ENROL`

`AVAILABLE_TO_EARN`

`AVAILABLE_TO_REDEEM`

`EXPIRED`

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

| - startDate | String | Start date of the promotion. ISO 8601 Date Format |

| - endDate | String | End date of the promotion. ISO 8601 Date Format |

| - identifier | String | Universally Unique Identifier for the promotion. |

| - description | String | Description of the promotion. |

| - active | Boolean | Indicates if the promotion is active. |

| - eventName | String | Event triggering the promotion. |

| - promotionMetadata | Object | Array containing metadata for the promotion. |

| - - key | String | Key of the metadata. |

| - - value | String | Value of the metadata. |

| - - brandDefined | Boolean | Indicates if the metadata is brand-defined. |

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

| - promotionRestriction | Object | Object containingpromotion restrictiondetails.You can set limits on how many times a promotion can be issued and redeemed. Information in this field is replicated if Advanced loyalty Promotion is available for your organisation. |

| - - issualRestrictions | Object | Array containing issual restriction details. |

| - - - kpi | String | Key performance indicator for the restriction. The KPI values are MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER and MAX_POINTS_PER_ISSUAL_PER_CUSTOMER. |

| - - - maxLimit | String | Maximum times a customer can be enrolled in a promotion. |

| - - - currentCustomerUsage | String | The present count of a customer's enrolment in a promotion. |

| - - - limitOn | String | Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION. |

| - - earnRestrictions | Object | Array containing earn restriction details. |

| - - - kpi | String | Key performance indicator for the restriction. The KPI values are MAX_NUMBER_OF_EARNS_PER_CUSTOMER and MAX_POINTS_PER_EARN_PER_CUSTOMER. |

| - - - maxLimit | String | Maximum times a promotion can be issued to a customer. |

| - - - currentCustomerUsage | String | The present number of instances a promotion is issued to the customer. |

| - - - limitOn | String | Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION. |

| - - redemptionRestrictions | Object | Array containing redemption restriction details. |

| - - - kpi | String | Key performance indicator for the restriction. The KPI values are:MAX_ALLOWED_TIMES_PER_CARTMAX_ALLOWED_POINTS_PER_CARTMAX_ALLOWED_TIMES_PER_CUSTOMERMAX_ALLOWED_EVENTS_PER_CUSTOMERMAX_ALLOWED_POINTS_PER_CUSTOMERMAX_ALLOWED_TIMES_PER_CUSTOMERMAX_ALLOWED_EVENTS_PER_PROMOTIONMAX_ALLOWED_POINTS_PER_PROMOTION |

| - - - maxLimit | String | Maximum number of times the points can be availed. |

| - - - currentCustomerUsage | String | The present number of points availed by the customer. |

| - - - limitOn | String | Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION. |

| - - - type | String | Type of restrictions. The values are NON_PERIOD_BASED or PERIOD_BASED. |

| orgID | Integer | Unique ID of the associated organisation. |

| warnings | Object | An array containing any warnings. |



[promotion restriction](/docs/direct-issue-loyalty-promotion#defining-limits-for-issuing-promotions-and-redemption)

# Sample Response

```
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
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
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
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
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
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
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
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
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
        },
        {
            "promotionId": 1122935,
            "promotionName": "Award 100 Points",
            "programId": 1148,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "26a1b64a-f61d-4a64-9dd0-f3fe5a25dcf5",
            "description": "Award 100 Points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "100.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50406
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
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
        },
        {
            "promotionId": 1122935,
            "promotionName": "Award 100 Points",
            "programId": 1148,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "26a1b64a-f61d-4a64-9dd0-f3fe5a25dcf5",
            "description": "Award 100 Points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "100.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50406
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