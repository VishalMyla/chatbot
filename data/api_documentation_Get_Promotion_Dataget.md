# Get Promotion Dataget

This API retrieves the promotion data of a specified customer. It provides detailed information on the various promotions the customer is associated with within a loyalty program. This includes the types of promotions, point and redemption restriction details, start and end dates,  and activation status.

By default, the types of promotions are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, referTypes of promotions.

# API endpoint example

https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/1000/promotionsV2?limit=10&offset=0&sourceType=USER_CREATED

```
https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/1000/promotionsV2?limit=10&offset=0&sourceType=USER_CREATED
```

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access group resource: Read access to customer group resource

# Resource information

|  |  |

| --- | --- |

| URI |  |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Path parameters

| Parameter Name | DataType | Description |

| --- | --- | --- |

| programId | String | Unique ID of the program |



# Query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| limit* | String | Number of results that need to be displayed. The values from zero to a maximum of 100 are supported. |

| sourceType* | ENUM | Filter promotion data based on its source type. Supported values areUI,IMPORT,GOODWILL,CAMPAIGN,POINTS_TRANSFER,IMPORT_API,PROMOTION_API,POINTS_CONTRIBUTION_TO_GROUP,MANUAL_POINTS_ADJUSTMENT,BADGES,USER_CREATEDUse the filterUSER_CREATEDto filter the promotions created forUser Created Challenges (UCC) |

| offset* | String | Start index for data retrieval. This value should not be negative. |

| promotionId | Integer | The unique ID of the promotion. |

| includeInactivePromotions | Boolean | Include promotions that are currently inactive.By default this is set to false. |

| startRuleIdentifier | Integer | The unique identifier of the start rule. |

| eventName | String | Set the event name to filter based on an event. |



`UI`

`IMPORT`

`GOODWILL`

`CAMPAIGN`

`POINTS_TRANSFER`

`IMPORT_API`

`PROMOTION_API`

`POINTS_CONTRIBUTION_TO_GROUP`

`MANUAL_POINTS_ADJUSTMENT`

`BADGES`

`USER_CREATED`

`USER_CREATED`

[User Created Challenges (UCC)](/reference/user-created-challenges)

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/2822/userCreatedPromotions?limit=10&offset=0&sourceType=USER_CREATED' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGlsbG5pcnZhahahbmE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data ''
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/2822/userCreatedPromotions?limit=10&offset=0&sourceType=USER_CREATED' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGlsbG5pcnZhahahbmE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data ''
```

# Response body

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

# Response parameters

| Field | Data Type | Description |

| --- | --- | --- |

| status | Object | Contains the status of the API response. |

| - code | Integer | HTTP status code. |

| - message | String | Describes the result of the request (e.g., "success"). |

| validationErrors | Object or null | If validation fails, errors are displayed here. |

| data | Array of Objects | Contains promotion data. |

| - id | Integer | The unique identifier for the promotion. |

| - name | String | The name of the promotion. |

| - description | String | Description of the promotion. |

| - promotionStatus | String | The current status of the promotion (e.g., "LIVE"). |

| - lastUpdateDate | String (ISO 8601) | Timestamp of the last update made to the promotion. |

| - lastUpdatedBy | Integer | ID of the user who last updated the promotion. |

| - rulesetInfos | Array of Objects | A list of rulesets associated with the promotion. |

| -- id | Integer | The unique identifier for the ruleset. |

| -- orgName | String | Name of the organization to which the ruleset belongs. |

| -- contextID | Integer | Context ID in which the ruleset applies (e.g., program). |

| -- orgID | Integer | Organization ID to which the ruleset belongs. |

| -- contextType | String | The type of context the ruleset belongs to (e.g., "program"). |

| -- rules | Array of Objects | A list of rules within the ruleset. |

| --- id | Integer | Unique identifier for the rule. |

| --- exp | String | Expression used by the rule. |

| --- expJSON | String | JSON representation of the rule expression. |

| --- jsonType | String | The JSON node type used in the rule. |

| --- isActive | Boolean | Indicates if the rule is active. |

| --- priority | Integer | Priority level of the rule (lower numbers indicate higher priority). |

| --- startDate | Long | Start date of the rule in epoch time. |

| --- endDate | Long | End date of the rule in epoch time. |

| --- createdOn | Long | Date the rule was created, in epoch time. |

| --- caseToActions | Object | Actions tied to the rule when certain conditions are met (in this case,"true"). |

| ---- true | Array of Objects | Actions to be executed when the expression evaluates to true. |

| ----- id | Integer | ID of the action to be executed. |

| ----- actionName | String | Name of the action (e.g., "AWARD_TARGET_POINTS_ACTION"). |

| ----- actionClass | String | Java class that implements the action. |

| ----- mandatoryPropertiesValues | Object | Key-value pairs defining mandatory properties for the action. |

| ------ (key-value pairs) | Varies (String, Integer) | Specific mandatory properties and their values. |

| ----- mandatoryComplexPropertiesValues | Object | Holds any mandatory complex properties for the action (if applicable). |

| ----- description | String or null | Description of the action (if applicable). |

| --- ruleScope | String | Scope of the rule (e.g., "SERVER"). |

| --- createdBy | Integer | ID of the user who created the rule. |

| --- modifiedBy | Integer | ID of the user who last modified the rule. |

| --- modifiedOn | Long | Date the rule was last modified, in epoch time. |

| --- name | String | Name of the rule. |

| --- description | String | Description of the rule. |

| --- ruleSetId | Integer | ID of the ruleset to which the rule belongs. |

| --- updatedViaNewUI | Boolean | Indicates if the rule was updated via the new UI. |

| - programName | String | Name of the program associated with the promotion. |

| - programId | Integer | Unique identifier for the program. |

| - startDate | String (ISO 8601) | Start date of the promotion in ISO format. |

| - endDate | String (ISO 8601) | End date of the promotion in ISO format. |

| - identifier | String | A unique identifier for the promotion. |

| - isActive | Boolean | Indicates if the promotion is active. |

| - eventName | String | The name of the event that triggers the promotion (e.g., "TARGETCOMPLETED"). |

| - allocatePointsOn | String | Defines when points should be allocated (e.g., "BILL"). |

| - limits | Object | Defines various limits related to the promotion. |

| -- pointsPerCustomer | Integer | Limit on the number of points a customer can earn through this promotion (-1 indicates no limit). |

| -- numberOfTimesPerCustomer | Integer | Limit on the number of times a customer can participate in the promotion (-1 indicates no limit). |

| -- totalPointsInPromotion | Integer | Total number of points that can be awarded in this promotion (-1 indicates no limit). |

| -- totalPointsPerEventLimit | Integer | Limit on the number of points that can be earned per event (-1 indicates no limit). |

| - useProportions | Boolean | Indicates if points should be allocated based on proportions. |

| - pointsOfferType | String | Type of points offer (e.g., "LOYALTY"). |

| - promotionRestrictions | Object | Defines restrictions for the promotion. |

| -- restrictions | Object | Specific restrictions such as redemption or earning limits. |

| --- redemptionRestrictions | Array of Objects | Restrictions on how many times a customer can redeem the promotion. |

| ---- name | String | Name of the redemption restriction. |

| ---- value | Integer | Value of the redemption restriction. |

| ---- type | String | Type of the redemption restriction (e.g., "PERIOD_BASED"). |

| ---- periodType | String or null | Defines the period type for period-based restrictions (e.g., "WEEKLY"). |

| ---- periodUnit | String or null | Defines the unit for the period (e.g., "MOVING_WINDOW"). |

| --- issualRestrictions | Array of Objects | Restrictions on how many times the promotion can be issued to a customer. |

| --- earnRestrictions | Array of Objects | Restrictions on how many times the promotion can be earned by a customer. |

| --- expiryRestrictions | Array of Objects | Defines rules for when points or rewards will expire. |

| scope | Object or null | Scope of the promotion restrictions. |

| isStackable | Boolean | Defines if this promotion can be stacked with other promotions. |

| isConsideredForRanking | Boolean | Indicates if this promotion should be considered for ranking purposes. |

| loyaltyEarningType | String | Defines the type of loyalty earning (e.g., "ISSUE_AND_EARN"). |

| isExclusive | Boolean | Defines if the promotion is exclusive. |

| isAlwaysApply | Boolean | Indicates if the promotion should always be applied. |

| targetGroupIds | Array of Integers | A list of target group IDs associated with the promotion. |

| targetRuleIds | Array of Integers | A list of target rule IDs associated with the promotion. |

| pageDetails | Object | Contains pagination information. |

| - pageNumber | Integer | Current page number in the paginated result. |

| - pageSize | Integer | Number of items displayed per page. |

| - totalEntries | Integer | Total number of records available for pagination. |



`"true"`

# API specific error codes

| Error | Description |

| --- | --- |

| 8013 | Identifier name missing or incorrect. |

| 8015 | Identifier value missing or incorrect. |

| 8003 | Source is missing or incorrect. |

| 4086 | Limit / offset/ sourceType is not passed |

| 4055 | Limit passed is greater than 100 |

| 4027 | promotionIdorstartRuleIdentifierpassed doesn't exist |

| 4083 | Incorrect event name is passed |

| 4082 | eventNameis null / empty |

| 4084 | sourceTypeis empty / null |

| 4085 | WrongsourceTypeenum is passed |



`promotionId`

`startRuleIdentifier`

`eventName`

`sourceType`

`sourceType`

`Try It!`