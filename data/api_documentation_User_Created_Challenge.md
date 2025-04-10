# User Created Challenge

This API is used to create a loyalty promotion. A loyalty promotion rewards customers for achieving a target.

# Prerequisites

- Authentication: Basic/OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | v1/programs/{programId}/createPromotion/{promotionType} |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/699/createPromotion/simple

```
https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/699/createPromotion/simple
```

# Request path parameters

| Parameter | DataType | Description |

| --- | --- | --- |

| programID | Integer | Unique id of the loyalty program |

| promotionType | String | Type of promotion. Supported valuesSIMPLE,RANGE,KEYWORD |



`SIMPLE`

`RANGE`

`KEYWORD`

# Sample request body

```
{
    "promotion": {
        "id": -1,
        "name": "promotion_name",
        "programId": 2932,
        "startDate": "2024-08-09T12:00:00+01:00",
        "endDate": "2024-08-25T12:00:00+01:00",
        "allocatePointsOn": "BILL",
        "identifier": "promotion_identfier",
        "eventName": "TARGETCOMPLETED",
        "pointsOfferType": "LOYALTY",
        "promotionType": "BILL",
        "promotionSourceType": "USER_CREATED",
        "limits": {
            "pointsPerCustomer": -1,
            "numberOfTimesPerCustomer": -1,
            "totalPointsInPromotion": -1
        },
        "promotionRestrictions": {
            "loyaltyEarningType": "ISSUE_AND_EARN",
            "isStackable": false,
            "isExclusive": false,
            "isConsideredForRanking": false,
            "targetRuleIds": [
                123
            ],
            "targetGroupIds": [
                1234567
            ],
            "restrictions": {
                "redemptionRestrictions": [
                    {
                        "name": "MAX_ALLOWED_TIMES_PER_CUSTOMER",
                        "value": 3,
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "WEEKLY"
                    },
                    {
                        "name": "MAX_ALLOWED_TIMES_PER_PROMOTION",
                        "value": 3,
                        "type": "NON_PERIOD_BASED"
                    }
                ],
                "issualRestrictions": [
                    {
                        "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                        "value": 3,
                        "type": "NON_PERIOD_BASED"
                    }
                ],
                "earnRestrictions": [
                    {
                        "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                        "value": 3
                    }
                ],
                "expiryRestrictions": [
                    {
                        "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                        "type": "PROMOTION",
                        "value": 10
                    }
                ]
            }
        },
        "rulesetInfos": [
            {
                "id": -1,
                "contextID": 2932,
                "orgID": 51174,
                "contextType": "program",
                "endpointName": "POINTSENGINE_ENDPOINT",
                "name": "rulesetName_uniqueue1",
                "type": "USER_CREATED",
                "startDate": 1089532593324,
                "endDate": 33593126193324,
                "active": true,
                "rules": [
                    {
                        "id": -1,
                        "exp": "true",
                        "expJSON": "{ \"arity\": \"literal\", \"value\": \"true\", \"type\": \"boolean:primitive\" }",
                        "isActive": true,
                        "caseToActions": {
                            "true": [
                                {
                                    "id": -1,
                                    "actionName": "AWARD_TARGET_POINTS_ACTION",
                                    "mandatoryPropertiesValues": {
                                        "ProRateOnSourceValue": "EVENT_DEFAULT_VALUE",
                                        "DelayStrategy": "AS_DEFINED_IN_ALLOCATION_STRATEGY",
                                        "SourceValueRoundingStrategy": "ACTUAL",
                                        "ExpiryStrategy": "81042",
                                        "AwardStrategy": "82690",
                                        "PointsRoundingStrategy": "ACTUAL",
                                        "TargetGroupId": "1234567",
                                        "TargetRuleName": "TargetRuleName"
                                    }
                                }
                            ]
                        },
                        "filterInfo": [],
                        "description": "",
                        "expDataType": "",
                        "ruleSetId": -1,
                        "updatedViaNewUI": false
                    }
                ],
                "filterInfo": [
                    {
                        "id": -1,
                        "contextType": "RULESET",
                        "name": "LoyaltyType",
                        "description": "LoyaltyType",
                        "isInclude": true,
                        "propertyToValues": {
                            "loyaltyType": [
                                "loyalty"
                            ]
                        }
                    },
                    {
                        "id": -1,
                        "contextType": "RULESET",
                        "name": "EventSource",
                        "description": "EventSource",
                        "isInclude": true,
                        "propertyToValues": {
                            "eventSource": [
                                "INSTORE"
                            ]
                        }
                    }
                ],
                "cappingInfo": [],
                "isRulesetForGlobalPromotion": "false",
                "programIds": []
            }
        ]
    }
}
```

```
{
    "promotion": {
        "id": -1,
        "name": "promotion_name",
        "programId": 2932,
        "startDate": "2024-08-09T12:00:00+01:00",
        "endDate": "2024-08-25T12:00:00+01:00",
        "allocatePointsOn": "BILL",
        "identifier": "promotion_identfier",
        "eventName": "TARGETCOMPLETED",
        "pointsOfferType": "LOYALTY",
        "promotionType": "BILL",
        "promotionSourceType": "USER_CREATED",
        "limits": {
            "pointsPerCustomer": -1,
            "numberOfTimesPerCustomer": -1,
            "totalPointsInPromotion": -1
        },
        "promotionRestrictions": {
            "loyaltyEarningType": "ISSUE_AND_EARN",
            "isStackable": false,
            "isExclusive": false,
            "isConsideredForRanking": false,
            "targetRuleIds": [
                123
            ],
            "targetGroupIds": [
                1234567
            ],
            "restrictions": {
                "redemptionRestrictions": [
                    {
                        "name": "MAX_ALLOWED_TIMES_PER_CUSTOMER",
                        "value": 3,
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "WEEKLY"
                    },
                    {
                        "name": "MAX_ALLOWED_TIMES_PER_PROMOTION",
                        "value": 3,
                        "type": "NON_PERIOD_BASED"
                    }
                ],
                "issualRestrictions": [
                    {
                        "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                        "value": 3,
                        "type": "NON_PERIOD_BASED"
                    }
                ],
                "earnRestrictions": [
                    {
                        "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                        "value": 3
                    }
                ],
                "expiryRestrictions": [
                    {
                        "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                        "type": "PROMOTION",
                        "value": 10
                    }
                ]
            }
        },
        "rulesetInfos": [
            {
                "id": -1,
                "contextID": 2932,
                "orgID": 51174,
                "contextType": "program",
                "endpointName": "POINTSENGINE_ENDPOINT",
                "name": "rulesetName_uniqueue1",
                "type": "USER_CREATED",
                "startDate": 1089532593324,
                "endDate": 33593126193324,
                "active": true,
                "rules": [
                    {
                        "id": -1,
                        "exp": "true",
                        "expJSON": "{ \"arity\": \"literal\", \"value\": \"true\", \"type\": \"boolean:primitive\" }",
                        "isActive": true,
                        "caseToActions": {
                            "true": [
                                {
                                    "id": -1,
                                    "actionName": "AWARD_TARGET_POINTS_ACTION",
                                    "mandatoryPropertiesValues": {
                                        "ProRateOnSourceValue": "EVENT_DEFAULT_VALUE",
                                        "DelayStrategy": "AS_DEFINED_IN_ALLOCATION_STRATEGY",
                                        "SourceValueRoundingStrategy": "ACTUAL",
                                        "ExpiryStrategy": "81042",
                                        "AwardStrategy": "82690",
                                        "PointsRoundingStrategy": "ACTUAL",
                                        "TargetGroupId": "1234567",
                                        "TargetRuleName": "TargetRuleName"
                                    }
                                }
                            ]
                        },
                        "filterInfo": [],
                        "description": "",
                        "expDataType": "",
                        "ruleSetId": -1,
                        "updatedViaNewUI": false
                    }
                ],
                "filterInfo": [
                    {
                        "id": -1,
                        "contextType": "RULESET",
                        "name": "LoyaltyType",
                        "description": "LoyaltyType",
                        "isInclude": true,
                        "propertyToValues": {
                            "loyaltyType": [
                                "loyalty"
                            ]
                        }
                    },
                    {
                        "id": -1,
                        "contextType": "RULESET",
                        "name": "EventSource",
                        "description": "EventSource",
                        "isInclude": true,
                        "propertyToValues": {
                            "eventSource": [
                                "INSTORE"
                            ]
                        }
                    }
                ],
                "cappingInfo": [],
                "isRulesetForGlobalPromotion": "false",
                "programIds": []
            }
        ]
    }
}
```

# Request Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| promotion | Object | Root object containing all promotion details. |

| - id* | Integer | Unique ID of the promotion. Set this value to -1 while creating a new promotion. |

| - name* | String | Unique name of the loyalty promotion.The character limit for the name is 255 characters. |

| - programId* | Integer | Unique ID of the loyalty program to associate with the promotion. You can create multiple promotions under a single loyalty program. |

| - startDate* | String | Start date of the promotion in ISO 8601yyyy-mm-ddThh:mm:ss.s+zformat. |

| - endDate* | String | End date of the promotion in ISO 8601yyyy-mm-ddThh:mm:ss.s+zformat. |

| - allocatePointsOn | Enum | Category for point allocation. Supported values:BILL,LINEITEM,CUSTOMER |

| - identifier* | String | Unique identifier for the promotion. This is an external identifier that can be used to identify the promotion.The character limit for the identifier is 255 characters. |

| - eventName* | Enum | Name of the event to associate with the promotion. Supported values:TRANSACTIONADD,CUSTOMERUPDATE,CUSTOMERREGISTRATION.TARGETCOMPLETED. |

| - pointsOfferType | Enum | Type of loyalty promotion. Supported values:LOYALTYandLOYALTY_EARNING. Refer to the documentation onloyalty promotionsfor more information. |

| - promotionType | Enum | Type of promotion. Supported values:BILL,LINEITEM,CUSTOMER. |

| - promotionSourceType | Enum | Source from where the promotion is created. Supported valuesPROMOTION_API,CAMPAIGN,BADGES,USER_CREATED.Pass the value asUSER_CREATEDfor creating a UCC promotion. |

| - limits | Object | Promotion limits configuration. |

| -- pointsPerCustomer | Integer | Maximum points that can be issued per customer (set to-1for no limit). |

| -- numberOfTimesPerCustomer | Integer | Maximum number of times points can be issued to a customer (set to-1for no limit). |

| -- totalPointsInPromotion | Integer | Total points that can be generated during the promotion (set to-1for no limit). |

| - promotionRestrictions | Integer | Restriction settings for the promotion. |

| -- loyaltyEarningType | Enum | Type of earning. Supported valuesISSUE_AND_EARNandDIRECT_EARNRefer to the documentation onloyalty promotionsfor more information. |

| -- isStackable | Boolean | Indicate if the promotion is stackable. A stackable promotion refers to the application of multiple promotions within a single transaction.Refer to the documentation onpromotion stacking strategiesfor more information. |

| -- isExclusive | Boolean | Indicate if the promotion is exclusive Exclusive promotions are evaluated individually and do not stack with any other promotion.For creating a UCC promotion, set this value tofalse.Refer to the documentation onpromotion stacking strategiesfor more information. |

| -- isConsideredForRanking | Boolean | Indicate if the promotion is considered for ranking. Rankings allow you to order promotions based on their priority.For creating a UCC promotion, set this value tofalse.Refer to the documentation onpromotion rankingfor more information. |

| -- targetRuleIds* | Array | List of target rule IDs. |

| -- targetGroupIds* | Array | List of target group IDs. |

| -- restrictions | Object | Contains details on various restrictions for redemption, issual, and earning. |

| --- redemptionRestrictions | Object | Contains information on the redemption limits for a promotion. |

| ---- name | Enum | Type of redemption restriction. Supported values:MAX_ALLOWED_POINTS_PER_EVENT: The maximum points that can be earned in a single event for a customer.MAX_ALLOWED_TIMES_PER_CUSTOMER: The maximum number of times a promotion can be issued to a customer.MAX_ALLOWED_POINTS_PER_CUSTOMER:The maximum points a customer can earn across the promotion.MAX_ALLOWED_TIMES_PER_PROMOTION:The maximum number of times a promotion can be issued.MAX_ALLOWED_POINTS_PER_PROMOTION:The maximum points that can be award across the promotion.MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER:The maximum number of times a customer can redeem a promotion after earning. |

| ---- value | Integer | Number of units corresponding to the name. Specify the value as-1for no limit. The maximum limit supported by the system is 100. |

| ---- type | Enum | Type of period for restriction. Supported values:PERIOD_BASED: Restriction is applied for a defined period of time.NON_PERIOD_BASED: Restriction is applied for the entire duration of the promotion. |

| ---- periodType | Enum | Type of period for the restriction. Supported value:MOVING_WINDOW. |

| ---- periodUnit | Enum | Frequency of the period. Supported valuesDAILYWEEKLY,MONTHLY |

| --- issualRestrictions | Object | Contains information on the issual limits for a promotion. |

| ---- name | Enum | Type of issual restriction. Supported values:MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER: Maximum number of times a promotion can be issued to a customer. |

| ---- value | Integer | Number of units corresponding to the name. Specify the value as-1for no limit. The maximum limit supported by the system is 100. |

| ---- type | Enum | Type of period for restriction. Supported values:PERIOD_BASED: Restriction is applied for a defined period of time.NON_PERIOD_BASED: Restriction is applied for the entire duration of the promotion. |

| --- earnRestrictions | Object | Contains information on the earn limits for a promotion. This is specific forenrol and issuetype promotion. |

| ---- name | Enum | Type of earn restriction. Supported values:MAX_NUMBER_OF_EARNS_PER_CUSTOMERMAX_POINTS_PER_EARN_PER_CUSTOMER |

| ---- value | Integer | Number of units corresponding to the name. Specify the value as-1for no limit. The maximum limit supported by the system is 100. |

| --- expiryRestrictions | Object | Contains information on the expiry for a promotion. This is mandatory for bothenrol and issueanddirect issuetypes of promotion. |

| ---- name* | Enum | Action that is expiring. Supported values:ISSUAL_PROMOTION_EXPIRY_BASED_ON: Expiration of the promotion issue.EARN_PROMOTION_EXPIRY_BASED_ON: Expiration of the promotion earn. |

| ---- value* | Integer | Number of days the loyalty promotion expires from the date of issual. |

| ---- type* | Enum | Type of expiration. Supported values:PROMOTION: The loyalty promotion expires on the date defined inendDateCUSTOM: Define the number of days when the loyalty promotion expires from the date of issual. |

| - rulesetInfos* | Object | Information about the ruleset associated with the promotion. |

| -- id | Integer | Unique ID of the ruleset. Set to-1for creating a new UCC promotion. |

| -- contextID* | Integer | Unique ID of the program. |

| -- orgID* | Integer | Unique ID of the organisation |

| -- contextType* | String | Type of context. |

| -- endpointName* | String | Name of the endpoint |

| -- name* | String | Unique name for the ruleset |

| -- type* | Enum | Type of ruleset.For creating a UCC promotion, set this value toUSER_CREATED. |

| -- startDate* | Integer | Start date of the ruleset in Epoch time format. |

| -- endDate* | Integer | End date of the ruleset in Epoch time format. |

| -- active* | Boolean | Status of the ruleset (set totrue). |

| -- rules* | Array | List of rules applied to the promotion. |

| --- id | Integer | Unique ID of the rule (set to-1for creating a new rule). |

| --- exp* | Boolean | Rule expression to determine if the rule is true or false. |

| --- expJSON* | String | Rule expression in JSON format. |

| --- isActive* | Boolean | Status of the rule. |

| --- caseToActions* | Object | Defines actions to take when the rule is satisfied. |

| ---- actionName* | String | Name of the action. |

| ---- mandatoryPropertiesValues* | Object | Defines the mandatory properties for the action (e.g.,ProRateOnSourceValue,AwardStrategy). |

| -- filterInfo | Object | Information on the scope filters applied to the ruleset. |

| --- name | String | Name of the filter, e.g.,LoyaltyType. |

| --- propertyToValues | Object | Key-value pairs for filter properties, e.g.,loyaltyType: [ "loyalty" ]. |

| -- cappingInfo | Object | Optional capping information for the ruleset. |

| -- isRulesetForGlobalPromotion | Boolean | Indicates if the ruleset is for a global promotion. |



`yyyy-mm-ddThh:mm:ss.s+z`

`yyyy-mm-ddThh:mm:ss.s+z`

`BILL`

`LINEITEM`

`CUSTOMER`

`TRANSACTIONADD`

`CUSTOMERUPDATE`

`CUSTOMERREGISTRATION`

`TARGETCOMPLETED`

`LOYALTY`

`LOYALTY_EARNING`

[loyalty promotions](/docs/advanced-loyalty-promotions)

`BILL`

`LINEITEM`

`CUSTOMER`

`PROMOTION_API`

`CAMPAIGN`

`BADGES`

`USER_CREATED`

`USER_CREATED`

`-1`

`-1`

`-1`

`ISSUE_AND_EARN`

`DIRECT_EARN`

[loyalty promotions](/docs/advanced-loyalty-promotions)

[promotion stacking strategies](/docs/loyalty-promotion-priority-order-stacking-strategy#promotion-stacking)

`false`

[promotion stacking strategies](/docs/loyalty-promotion-priority-order-stacking-strategy#functionality-when-stacking-strategy-is-on)

`false`

[promotion ranking](/docs/loyalty-promotion-priority-order-stacking-strategy#promotion-priority-order-ranking-promotions)

`MAX_ALLOWED_POINTS_PER_EVENT`

`MAX_ALLOWED_TIMES_PER_CUSTOMER`

`MAX_ALLOWED_POINTS_PER_CUSTOMER`

`MAX_ALLOWED_TIMES_PER_PROMOTION`

`MAX_ALLOWED_POINTS_PER_PROMOTION`

`MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER`

`-1`

`PERIOD_BASED`

`NON_PERIOD_BASED`

`MOVING_WINDOW`

`DAILY`

`WEEKLY`

`MONTHLY`

`MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER`

`-1`

`PERIOD_BASED`

`NON_PERIOD_BASED`

[enrol and issue](/reference/enrol-and-issue-promotion)

`MAX_NUMBER_OF_EARNS_PER_CUSTOMER`

`MAX_POINTS_PER_EARN_PER_CUSTOMER`

`-1`

[enrol and issue](/reference/enrol-and-issue-promotion)

[direct issue](/docs/direct-issue-loyalty-promotion)

`ISSUAL_PROMOTION_EXPIRY_BASED_ON`

`EARN_PROMOTION_EXPIRY_BASED_ON`

`PROMOTION`

`endDate`

`CUSTOM`

`-1`

`USER_CREATED`

`true`

`-1`

`ProRateOnSourceValue`

`AwardStrategy`

`LoyaltyType`

`loyaltyType: [ "loyalty" ]`

# Sample response

```
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 200654,
            "name": "test_promo_uniqueName10",
            "promotionStatus": "COMPLETED",
            "programId": 2822,
            "startDate": "2024-08-09T00:00:00.284Z",
            "endDate": "2024-08-10T23:59:59.285Z",
            "identifier": "test_promo_uniqueIdentifier10",
            "isActive": true,
            "eventName": "TARGETCOMPLETED",
            "allocatePointsOn": "BILL",
            "limits": {
                "pointsPerCustomer": -1,
                "numberOfTimesPerCustomer": -1,
                "totalPointsInPromotion": -1,
                "totalPointsPerEventLimit": -1
            },
            "pointsOfferType": "LOYALTY",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_ALLOWED_TIMES_PER_CUSTOMER",
                            "value": 3,
                            "type": "PERIOD_BASED",
                            "periodType": "MOVING_WINDOW",
                            "periodUnit": "WEEKLY"
                        },
                        {
                            "name": "MAX_ALLOWED_TIMES_PER_PROMOTION",
                            "value": 3,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        },
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                            "value": 3
                        }
                    ],
                    "earnRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                            "value": 3
                        }
                    ],
                    "expiryRestrictions": [
                        {
                            "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                            "value": 10,
                            "type": "PROMOTION"
                        }
                    ]
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": true,
                "loyaltyEarningType": "ISSUE_AND_EARN",
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
                "targetGroupIds": [
                    1234567
                ],
                "targetRuleIds": [
                    123
                ]
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
            "id": 200654,
            "name": "test_promo_uniqueName10",
            "promotionStatus": "COMPLETED",
            "programId": 2822,
            "startDate": "2024-08-09T00:00:00.284Z",
            "endDate": "2024-08-10T23:59:59.285Z",
            "identifier": "test_promo_uniqueIdentifier10",
            "isActive": true,
            "eventName": "TARGETCOMPLETED",
            "allocatePointsOn": "BILL",
            "limits": {
                "pointsPerCustomer": -1,
                "numberOfTimesPerCustomer": -1,
                "totalPointsInPromotion": -1,
                "totalPointsPerEventLimit": -1
            },
            "pointsOfferType": "LOYALTY",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_ALLOWED_TIMES_PER_CUSTOMER",
                            "value": 3,
                            "type": "PERIOD_BASED",
                            "periodType": "MOVING_WINDOW",
                            "periodUnit": "WEEKLY"
                        },
                        {
                            "name": "MAX_ALLOWED_TIMES_PER_PROMOTION",
                            "value": 3,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        },
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER",
                            "value": 3
                        }
                    ],
                    "earnRestrictions": [
                        {
                            "name": "MAX_NUMBER_OF_EARNS_PER_CUSTOMER",
                            "value": 3
                        }
                    ],
                    "expiryRestrictions": [
                        {
                            "name": "ISSUAL_PROMOTION_EXPIRY_BASED_ON",
                            "value": 10,
                            "type": "PROMOTION"
                        }
                    ]
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": true,
                "loyaltyEarningType": "ISSUE_AND_EARN",
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false,
                "targetGroupIds": [
                    1234567
                ],
                "targetRuleIds": [
                    123
                ]
            }
        }
    ]
}
```

# Response parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| status | Object | Contains the response status. |

| -code | Integer | Status code of the response (e.g., 200 for success). |

| -message | String | Status message (e.g., "success"). |

| validationErrors | Object | Contains validation errors, if any. Null indicates no errors. |

| data | Array | Contains data related to the promotion. |

| - id | Integer | Unique identifier for the promotion. |

| - name | String | Name of the promotion. |

| -promotionStatus | String | Current status of the promotion (e.g., “LIVE”, "COMPLETED"). |

| - programId | Integer | ID of the associatedloyalty program. |

| - startDate | String | Start date of the promotion in ISO 8601 format. |

| - endDate | String | End date of the promotion in ISO 8601 format. |

| - identifier | String | Unique identifier for the promotion. |

| -isActive | Boolean | Indicates if the promotion is active. |

| - eventName | String | Event that triggers the promotion. An event refers to a specific action for example a store visit or transaction. |

| - allocatePointsOn | String | Where points are allocated (e.g., "BILL"). |

| - limits | Object | Promotion limits. |

| -- pointsPerCustomer | Integer | Maximum points a customer can earn.(-1 indicates no limit). |

| -- numberOfTimesPerCustomer | Integer | Number of times a customer can participate.(-1 indicates no limit). |

| -- totalPointsInPromotion | Integer | Total points available in the promotion.(-1 indicates no limit). |

| -- totalPointsPerEventLimit | Integer | Total points limit per event.(-1 indicates no limit). |

| - pointsOfferType | String | Type of points offered (e.g., "LOYALTY"). A points offer refers to loyalty points issued to customers |

| promotionRestrictions | Object | Contains the restrictions applicable to the promotion. Restrictions can be configured while setting up the loyalty promotion. |

| - restrictions | Object | Contains various restriction types. |

| -- redemptionRestrictions | Array | Redemption-related restrictions. These are advanced settings for redemption. |

| --- name | String | Name of the redemption restriction |

| --- value | Integer | Maximum allowed times per customer. |

| --- type | String | Restriction type (e.g., "PERIOD_BASED"). |

| --- periodType | String | Period type for restriction (e.g., "MOVING_WINDOW", FIXED_WINDOW). |

| --- periodUnit | Array | Period unit for restriction (e.g., "WEEKLY", “MONTHLY”). |

| -- issualRestrictions | Array | Issualrelated restrictions. An“issual” refers to the issuance of a specific promotion to customers based on their behavioral events or transactions. |

| --- name | Array | Name of the issuance restriction |

| --- value | Integer | Maximum issuances per customer. |

| -- earnRestrictions | Array | Earnrelated restrictions. “Earn" refers to the process where a customer completes the necessary activities to qualify for a promotion. |

| --- name | String | Name of the earning restriction |

| --- value | Integer | Maximum earnings per customer. |

| -- expiryRestrictions | Array | Expiry-related restrictions. |

| --- name | String | Name of the expiry restriction |

| --- value | Integer | Expiry value. |

| --- type | String | Expiry type (e.g., "PROMOTION"). |

| - scope | Object | Scope of the promotion (if applicable). |

| - isStackable | Boolean | Indicates if the promotion can be combined with other promotions. |

| - isConsideredForRanking | Boolean | Indicates if the promotion is considered for ranking. |

| - loyaltyEarningType | String | Type of loyalty earning. |

| - expiryReminder | Object | Expiry reminder, if any. Null indicates no reminder. |

| - isExclusive | Boolean | Indicates if the promotion is exclusive. |

| - isAlwaysApply | Boolean | Indicates if the promotion always applies. |

| - targetGroupIds | Integer | List of target group IDs. |

| - targetRuleIds | Integer | List of target rule IDs. |



[loyalty program.](/docs/create-a-multi-loyalty-program)

[Issual](/docs/enrol-issue-loyalty-promotion#defining-limits-for-enrolment)

[“issual](/docs/advanced-loyalty-promotions)

[Earn](/docs/enrol-issue-loyalty-promotion#defining-limits-for-enrolment)

# API error codes

| Code | Description | Solution |

| --- | --- | --- |

| 4007 | Promotion identifier already exists for the program | Check the promotion id and ensure it is unique. |

| 4003 | A promotion with the same name exists for the program | Check the promotion name and ensure it is unique. |

| 4011 | Given start date is null or empty | Check the promotion start date and ensure it is in the correct format |

| 4012 | Given end date is null or empty | Check the promotion end date and ensure it is in the correct format |

| 4074 | For SourceType UserCreated,  TargetGroupId and  TargetRuleId are mandatory | Enter the TargetGroupID and TargetRuleID for the promotion |

| 4079 | Promotion Source Type cannot be null or empty | Enter the promotion source type |

| 4075 | UCC Promotions should always have one RuleSet | Ensure that only one ruleset is passed. Add the rulesets for the promotion if not added. |

| 4076 | Invalid UCC Promotions Ruleset check for ruleSetName, ContextId, OrgId, ContextType and start & End is not null | Check if the mandatory rule set fields are passed. |

| 4076 | Invalid UCC Promotions Rules passed check for expression , expressionJson and name is not null | Check if the mandatory rule set fields are correct. |

| 4080 | Invalid UCC Promotions Actions, Both key and value in cannot be null or empty | Check if the mandatoryPropertiesValues key / value is null or Empty. |

| 4078 | Invalid name in Promotions RuleSet Filter | Check the filter name and ensure it is valid. |



`Try It!`