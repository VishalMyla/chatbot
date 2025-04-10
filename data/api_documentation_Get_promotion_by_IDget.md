# Get promotion by IDget

This API retrieves the details of the specified promotion using the promotion ID and the corresponding program ID. It provides detailed information about the specific promotion including the type of promotion, its status, associated ruleset, program details, dates, limits, stacking, ranking, and restrictions.

By default, the types of promotions, ranking and stacking are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, referTypes of promotions.

## Types of promotions

There are three different types of promotions:

- GENERIC (UI term - Available without issue)

- LOYALTY (UI term - Direct issue)

- LOYALTY_EARNING (UI term - Enrol & Issue)

The fieldpointsOfferTypein the response provides information on the type of promotion.

`pointsOfferType`

## Limits and restrictions

if theTypes of promotionsare enabled for your organisation, then the information regarding the limits and restrictions on issual, earning, or redemption is available in the objectspromotionRestriction,  object. This information is also replicated in thelimitsobjects.

If your organisation does not have theTypes of promotionsenabled, the details on the limits and restrictions are only available in thelimitsobject.

# API endpoint example

'https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/469/promotions/57099/get

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource : Read access to customer group resource

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/loyalty/v1/programs/{programs}/promotions/{promotions}/get |

| HTTP method | GET |

| Pagination supported? | No |

| Rate limit | NA |

| Batch support | NA |



# Path parameters

|  |  |  |

| --- | --- | --- |

| programs* | Long | Unique program ID. |

| promotions* | Long | Unique promotion ID. |



```
curl --location 'https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/469/promotions/57099/get' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic mRmMmQ0NOTMyMWYI=' \
--header 'Cookie: CS=17999bae3c0f41269ea0947f75896090'
```

```
curl --location 'https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/469/promotions/57099/get' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic mRmMmQ0NOTMyMWYI=' \
--header 'Cookie: CS=17999bae3c0f41269ea0947f75896090'
```

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| id | Integer | The unique identifier for the promotion. |

| name | String | The name of the promotion. |

| description | String | A brief description of the promotion. |

| promotionStatus | String | The current status of the promotion (e.g., LIVE, PENDING). |

| lastUpdateDate | String | The date and time when the promotion was last updated. |

| lastUpdatedBy | Integer | The ID of the user who last updated the promotion. |

| rulesetInfos | Object | Information about the ruleset associated with the promotion. |

| orgName | String | The name of the organization associated with the ruleset. |

| contextID | Integer | The ID of the context associated with the ruleset. |

| orgID | Integer | The ID of the organization associated with the ruleset. |

| contextType | String | The value is Program. |

| rules | Array | The rules defined for the promotion. |

| id | Integer | The unique identifier for the rule. |

| exp | String | The expression defining the rule. |

| expJSON | String | The expression in JSON format. |

| jsonType | String | The JSON type of the expression. |

| isActive | Boolean | Indicates whether the rule is active. |

| priority | Integer | The priority of the rule. |

| startDate | Integer | The start date of the rule. |

| endDate | Integer | The end date of the rule. |

| createdOn | Integer | The timestamp when the rule was created. |

| caseToActions | Object | The actions to be taken based on the rule. |

| ruleScope | String | The scope of the rule (e.g., SERVER, CLIENT). |

| createdBy | Integer | The ID of the user who created the rule. |

| modifiedBy | Integer | The ID of the user who last modified the rule. |

| modifiedOn | Integer | The timestamp when the rule was last modified. |

| name | String | The name of the rule. |

| description | String | A brief description of the rule. |

| expDataType | String | The data type of the expression. |

| filterInfo | Object | Information about the filters applied to the rule. |

| eventType | String | The type of event associated with the rule. |

| cappingInfo | Array | Information about capping associated with the rule. |

| updatedViaNewUI | Boolean | Indicates whether the rule was updated via the new UI. |

| private | Boolean | Indicates whether the rule is private. |

| programName | String | The name of the program associated with the promotion. |

| programId | Integer | The ID of the program associated with the promotion. |

| startDate | String | The start date of the promotion. |

| endDate | String | The end date of the promotion. |

| identifier | String | The universally unique identifier for the promotion. |

| isActive | Boolean | Indicates whether the promotion is active. |

| eventName | String | The name of the event associated with the promotion. |

| allocatePointsOn | String | Indicates where the points are allocated. The values is based on the event type. |

| limits | Object | Limits and constraints for the promotion. |

| pointsPerCustomer | Integer | Maximum points a customer can earn. |

| numberOfTimesPerCustomer | Integer | The maximum number of activities per customer that can allocate points. |

| totalPointsInPromotion | Integer | The maximum points permitted across customers within the promotion duration. |

| totalPointsPerEventLimit | Integer | Limit on the total points that can be earned per event within the promotion. |

| useProportions | Boolean | Indicates whether proportions are used for the promotion. |

| pointsOfferType | String | The type of promotion. GENERIC/LOYALTY/LOYALTY_EARNING |

| promotionRestrictions | Object | Restrictions and settings for the promotion. Issual restrictions - Provides info on the restrictions on the enrolment of the customers. earnRestrictions provides information on the restrictions on the promotion issual. expiryRestrictions provide info on the enrol and issue expiry. Redemption restrictions provides information on the maximum redemptions of points per issue of promotion |

| isAlwaysApply | Boolean | Indicates whether the promotion is always applied. |

| isStackable | Boolean | Indicates whether the promotion is stackable. |

| isConsideredForRanking | Boolean | Indicates whether the promotion is considered for ranking. |

| loyaltyEarningType | String | This parameter is not in use. |

| expiryReminder | String | The expiry reminder settings for the promotion. |

| isExclusive | Boolean | Indicates whether the promotion is exclusive. |



```
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 57099,
            "name": "test enroll and issue",
            "description": "Promotion Description",
            "promotionStatus": "LIVE",
            "lastUpdateDate": "2024-04-10T12:59:11Z",
            "lastUpdatedBy": 75069206,
            "rulesetInfos": [
                {
                    "id": 126289300,
                    "orgName": "Bukl Enterprises",
                    "contextID": 469,
                    "orgID": 100458,
                    "contextType": "program",
                    "rules": [
                        {
                            "id": 126450375,
                            "exp": "true",
                            "expJSON": "{ \"arity\": \"literal\", \"value\": \"true\", \"type\": \"boolean:primitive\" }",
                            "jsonType": "JNODE",
                            "isActive": true,
                            "priority": -1,
                            "startDate": 1081601860018,
                            "endDate": 33585195460018,
                            "createdOn": 1712753899436,
                            "caseToActions": {
                                "true": [
                                    {
                                        "id": 126590124,
                                        "actionName": "PE_ISSUE_VOUCHER_ACTION",
                                        "actionClass": "com.capillary.shopbook.pointsengine.endpoint.impl.action.PointsEngineIssueVoucherActionImpl",
                                        "mandatoryPropertiesValues": {
                                            "VoucherSeriesId": "349357"
                                        },
                                        "mandatoryComplexPropertiesValues": {},
                                        "description": "17% off on all products"
                                    }
                                ]
                            },
                            "ruleScope": "SERVER",
                            "createdBy": 5036393,
                            "modifiedBy": 5036393,
                            "modifiedOn": 1712753950845,
                            "name": "Rule 1",
                            "description": "",
                            "expDataType": null,
                            "filterInfo": [],
                            "ruleSetId": 126289300,
                            "updatedViaNewUI": false
                        }
                    ],
                    "ruleScope": "SERVER",
                    "startDate": 1712707200000,
                    "endDate": 1717199999000,
                    "createdOn": 1712753899436,
                    "createdBy": 5036393,
                    "modifiedBy": 5036393,
                    "modifiedOn": 1712753950845,
                    "name": "ruleset_20240410125740",
                    "packageName": "",
                    "description": "",
                    "filterInfo": [
                        {
                            "id": 126393617,
                            "orgID": 100458,
                            "ruleID": -1,
                            "name": "LoyaltyType",
                            "className": "com.capillary.shopbook.emf.impl.filter.LoyaltyTypeFilterImpl",
                            "isInclude": true,
                            "propertyToValues": {
                                "loyaltyType": [
                                    "loyalty"
                                ]
                            }
                        },
                        {
                            "id": 126393618,
                            "orgID": 100458,
                            "ruleID": -1,
                            "name": "EventSource",
                            "className": "com.capillary.shopbook.emf.impl.filter.EventSourceFilterImpl",
                            "isInclude": true,
                            "propertyToValues": {
                                "eventSource": [
                                    "INSTORE"
                                ]
                            }
                        }
                    ],
                    "eventType": null,
                    "cappingInfo": [],
                    "updatedViaNewUI": false,
                    "private": false
                }
            ],
            "programName": "Default Program",
            "programId": 469,
            "startDate": "2024-04-10T00:00Z",
            "endDate": "2024-05-31T23:59:59Z",
            "identifier": "10c2fc95-acd4-476b-9784-9ccb7a410874",
            "isActive": true,
            "eventName": "TRANSACTIONADD",
            "allocatePointsOn": "BILL",
            "limits": {
                "pointsPerCustomer": 0,
                "numberOfTimesPerCustomer": 0,
                "totalPointsInPromotion": 0,
                "totalPointsPerEventLimit": 0
            },
            "useProportions": false,
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 10,
                            "type": "NON_PERIOD_BASED",
                            "periodType": "MOVING_WINDOW",
                            "periodUnit": "DAILY"
                        }
                    ],
                    "issualRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                            "value": 10
                        }
                    ],
                    "earnRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                            "value": 10
                        },
                        {
                            "name": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                            "value": -1
                        }
                    ],
                    "expiryRestrictions": [
                        {
                            "name": "EARN_PROMOTION_EXPIRY_BASED_ON",
                            "value": 0,
                            "type": "PROMOTION"
                        },
                        {
                            "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                            "value": 0,
                            "type": "PROMOTION"
                        }
                    ]
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": "ISSUE_AND_EARN",
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        }
    ]
}
```

```
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 57099,
            "name": "test enroll and issue",
            "description": "Promotion Description",
            "promotionStatus": "LIVE",
            "lastUpdateDate": "2024-04-10T12:59:11Z",
            "lastUpdatedBy": 75069206,
            "rulesetInfos": [
                {
                    "id": 126289300,
                    "orgName": "Bukl Enterprises",
                    "contextID": 469,
                    "orgID": 100458,
                    "contextType": "program",
                    "rules": [
                        {
                            "id": 126450375,
                            "exp": "true",
                            "expJSON": "{ \"arity\": \"literal\", \"value\": \"true\", \"type\": \"boolean:primitive\" }",
                            "jsonType": "JNODE",
                            "isActive": true,
                            "priority": -1,
                            "startDate": 1081601860018,
                            "endDate": 33585195460018,
                            "createdOn": 1712753899436,
                            "caseToActions": {
                                "true": [
                                    {
                                        "id": 126590124,
                                        "actionName": "PE_ISSUE_VOUCHER_ACTION",
                                        "actionClass": "com.capillary.shopbook.pointsengine.endpoint.impl.action.PointsEngineIssueVoucherActionImpl",
                                        "mandatoryPropertiesValues": {
                                            "VoucherSeriesId": "349357"
                                        },
                                        "mandatoryComplexPropertiesValues": {},
                                        "description": "17% off on all products"
                                    }
                                ]
                            },
                            "ruleScope": "SERVER",
                            "createdBy": 5036393,
                            "modifiedBy": 5036393,
                            "modifiedOn": 1712753950845,
                            "name": "Rule 1",
                            "description": "",
                            "expDataType": null,
                            "filterInfo": [],
                            "ruleSetId": 126289300,
                            "updatedViaNewUI": false
                        }
                    ],
                    "ruleScope": "SERVER",
                    "startDate": 1712707200000,
                    "endDate": 1717199999000,
                    "createdOn": 1712753899436,
                    "createdBy": 5036393,
                    "modifiedBy": 5036393,
                    "modifiedOn": 1712753950845,
                    "name": "ruleset_20240410125740",
                    "packageName": "",
                    "description": "",
                    "filterInfo": [
                        {
                            "id": 126393617,
                            "orgID": 100458,
                            "ruleID": -1,
                            "name": "LoyaltyType",
                            "className": "com.capillary.shopbook.emf.impl.filter.LoyaltyTypeFilterImpl",
                            "isInclude": true,
                            "propertyToValues": {
                                "loyaltyType": [
                                    "loyalty"
                                ]
                            }
                        },
                        {
                            "id": 126393618,
                            "orgID": 100458,
                            "ruleID": -1,
                            "name": "EventSource",
                            "className": "com.capillary.shopbook.emf.impl.filter.EventSourceFilterImpl",
                            "isInclude": true,
                            "propertyToValues": {
                                "eventSource": [
                                    "INSTORE"
                                ]
                            }
                        }
                    ],
                    "eventType": null,
                    "cappingInfo": [],
                    "updatedViaNewUI": false,
                    "private": false
                }
            ],
            "programName": "Default Program",
            "programId": 469,
            "startDate": "2024-04-10T00:00Z",
            "endDate": "2024-05-31T23:59:59Z",
            "identifier": "10c2fc95-acd4-476b-9784-9ccb7a410874",
            "isActive": true,
            "eventName": "TRANSACTIONADD",
            "allocatePointsOn": "BILL",
            "limits": {
                "pointsPerCustomer": 0,
                "numberOfTimesPerCustomer": 0,
                "totalPointsInPromotion": 0,
                "totalPointsPerEventLimit": 0
            },
            "useProportions": false,
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 10,
                            "type": "NON_PERIOD_BASED",
                            "periodType": "MOVING_WINDOW",
                            "periodUnit": "DAILY"
                        }
                    ],
                    "issualRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                            "value": 10
                        }
                    ],
                    "earnRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                            "value": 10
                        },
                        {
                            "name": "MAX_POINTS_PER_EARN_PER_CUSTOMER",
                            "value": -1
                        }
                    ],
                    "expiryRestrictions": [
                        {
                            "name": "EARN_PROMOTION_EXPIRY_BASED_ON",
                            "value": 0,
                            "type": "PROMOTION"
                        },
                        {
                            "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                            "value": 0,
                            "type": "PROMOTION"
                        }
                    ]
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": "ISSUE_AND_EARN",
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        }
    ]
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 4029 | Promotion ID is invalid. |

| 2010 | Program ID is invalid. |



`Try It!`