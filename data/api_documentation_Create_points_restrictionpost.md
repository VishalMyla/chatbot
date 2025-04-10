# Create points restrictionpost

This API allows the brand to restrict the customer to the number of points they burn/redeem in the rewards catalog.

This helps brands control the customer’s activity on the rewards catalog and instead use these points while making transactions, eventually bringing more business to the brands.

For example: A brand wants to limit the number of points that a customer can redeem in the rewards catalog to 100 points in a week to purchase Intouch rewards. Using the points restriction API, the brand can limit the number of points redeemed by the customer.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.An org can have a limit of 50 restrictions that can be created.For specific KPI, you can set a  maximum of 15 active restrictions.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- An org can have a limit of 50 restrictions that can be created.

- For specific KPI, you can set a  maximum of 15 active restrictions.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/rewards/core/v1/brand/constraints |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints
```

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| kpi* | String | The KPI on which the restriction is applied. Supported value:  POINTS |

| constraintLevel* | Enum | The level at which restrictions would be defined by org and applied.Supported values:- CUSTOMER_SEGMENT: Pass thesegmentIdandpartitionIdto apply restriction on customer segment. (The segment ID and partition ID are not currently available in the Insights+ UI. You can create the Jira ticket in order to get the segment and partition ID.)- CUSTOMER_TIER: Pass theTierIDin the input while creating a constraint with level Customer Tier.- CUSTOMER_LOYALTY_PROGRAM: The restriction is applied to a specific loyalty program.ProgramIDneeds to be passed while creating a constraint with Customer Loyalty Program.- CUSTOMER_REDEMPTION_TYPE: In this constraint level, the restriction is applied to the vouchers that can be redeemed.redemptionTypeshould be passed to create constraint.- CUSTOMER_SUPPL_PROGRAM: The restriction is applied to a supplementary program. Pass thesupplementaryProgramIdto apply points restriction on the supplementary program.- CUSTOMER_LABEL:-Labelneeds to be passed while creating a constraint with Customer Label.- CUSTOMER:- Customer can be used as a constraint.Only one combination of Constraint_Level & KPI is allowed with the DAILY, WEEKLY, or MONTHLY frequency type. |

| frequencyType* | Enum | The frequency at which the constraint is applied. Supported values: DAILY, WEEKLY, MONTHLY. The points redemption is only applicable on fixed window restrictions. |

| intervalValue* | Integer | The interval at which the frequency is applied. |

| constraintLimitValue* | Integer | The limit value for the constraint. |

| isActive* | Boolean | Status of the constraint, whether it is active or not |

| redemptionType* | String | Type of intouch reward.Supported values: GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC. |



`segmentId`

`partitionId`

`TierID`

`ProgramID`

`redemptionType`

`supplementaryProgramId`

`Label`

```
[
    {   
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "MONTHLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 100,
        "isActive" : true,
        "redemptionType": "NULL"
    }
]
```

```
[
    {   
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "MONTHLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 100,
        "isActive" : true,
        "redemptionType": "NULL"
    }
]
```

```
[
    {
        "orgId": 51544,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "redemptionType": "INTOUCH_REWARD"
    }
]
```

```
[
    {
        "orgId": 51544,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "redemptionType": "INTOUCH_REWARD"
    }
]
```

```
[
    {
        "orgId": 51544,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "redemptionType": "INTOUCH_REWARD"
    }
]
```

```
[
    {
        "orgId": 51544,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "redemptionType": "INTOUCH_REWARD"
    }
]
```

```
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true,
        "redemptionType": "VOUCHER"
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "CHARITY"
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "GAMES"
    }

]
```

```
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true,
        "redemptionType": "VOUCHER"
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "CHARITY"
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "GAMES"
    }

]
```

```
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "MILES"
    }

]
```

```
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    },
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType" : "WEEKLY",
        "intervalValue" : 1,
        "constraintLimitValue" : 10,
        "isActive" : true,
        "redemptionType": "MILES"
    }

]
```

```
[
    {
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SUPPL_PROGRAM",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10000,
        "supplementaryProgramId":"27001187",
        "isActive": true,
        "intervalValue": 90000
    }
]
```

```
[
    {
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SUPPL_PROGRAM",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10000,
        "supplementaryProgramId":"27001187",
        "isActive": true,
        "intervalValue": 90000
    }
]
```

```
[  {
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SEGMENT",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 3000,
        "segmentId":"6136",
        "partitionId":"2676",
        "isActive": true,
        "intervalValue": 100
    }
]
```

```
[  {
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SEGMENT",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 3000,
        "segmentId":"6136",
        "partitionId":"2676",
        "isActive": true,
        "intervalValue": 100
    }
]
```

```
[
    {   
        "orgId": 4000036,      
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_LOYALTY_PROGRAM",
        "programId" : 469,
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

```
[
    {   
        "orgId": 4000036,      
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_LOYALTY_PROGRAM",
        "programId" : 469,
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

```
[
    {   
        "orgId": 4000036,      
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_LABEL",
        "label":"Fashion",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

```
[
    {   
        "orgId": 4000036,      
        "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_LABEL",
        "label":"Fashion",
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

```
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_TIER",
        "tierId" : 1,
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

```
[
    {   "kpi" :"POINTS",
        "constraintLevel" : "CUSTOMER_TIER",
        "tierId" : 1,
        "frequencyType" : "DAILY",
        "intervalValue" : 1,
        "constraintLimitValue" : 5,
        "isActive" : true
    }
]
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| rewardConstraintId | Integer | Unique identifier for the reward constraint |

| orgId | Integer | Unique identifier for the org |

| kpi | String | The KPI on which the restriction is applied. Supported value: POINTS |

| constraintLevel | String | The level at which restrictions would be defined by org and applied on.Only one combination of Constraint_Level & KPI is allowed with the DAILY, WEEKLY, or MONTHLY frequency type. |

| frequencyType | String | Frequency at which the constraint is applied, "DAILY" |

| constraintLimitValue | Integer | The limit value for the constraint. |

| isActive | Boolean | Status indicating whether the constraint is active |

| intervalValue | Integer | The interval at which the frequency is applied. |

| status.success | Boolean | Indicates if the status check was successful |

| status.code | Integer | Status code associated with the constraint check |

| redemptionType | String | Type of intouch reward.Supported values: INTOUCH_REWARD, VENDOR_INTOUCH_REWARD, VENDOR_ONLY_REWARD, CART_PROMOTION, MILES, VOUCHER, POINTS, CHARITY, CASH_BACK,CASH_WALLET,CARD_DISC, GAMES. |



```
[
    {
        "rewardConstraintId": 7010,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "MONTHLY",
        "constraintLimitValue": 100,
        "isActive": true,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "NULL"
    }
]
```

```
[
    {
        "rewardConstraintId": 7010,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "MONTHLY",
        "constraintLimitValue": 100,
        "isActive": true,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "NULL"
    }
]
```

```
[
    {
        "rewardConstraintId": 6984,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "CHARITY"
    },
    {
        "rewardConstraintId": 6985,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "GAMES"
    },
    {
        "rewardConstraintId": 4915,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0,
        },
       "redemptionType": "VOUCHER"
    }
]
```

```
[
    {
        "rewardConstraintId": 6984,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "CHARITY"
    },
    {
        "rewardConstraintId": 6985,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "GAMES"
    },
    {
        "rewardConstraintId": 4915,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0,
        },
       "redemptionType": "VOUCHER"
    }
]
```

```
[
    {
        "rewardConstraintId": 4226,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        }
    }
]
```

```
[
    {
        "rewardConstraintId": 4226,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        }
    }
]
```

```
[
    {
        "rewardConstraintId": 4227,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "INTOUCH_REWARD"
    }
]
```

```
[
    {
        "rewardConstraintId": 4227,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 3,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "INTOUCH_REWARD"
    }
]
```

```
[
    {
        "rewardConstraintId": 4228,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "TUESDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "MILES"
    },
    {
        "rewardConstraintId": 4226,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": false,
            "code": 12014,
            "message": "Constraint already exist, use update constraints api"
        }
    }
]
```

```
[
    {
        "rewardConstraintId": 4228,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10,
        "isActive": true,
        "startDayOfTheWeek": "TUESDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "MILES"
    },
    {
        "rewardConstraintId": 4226,
        "orgId": 100606,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": false,
            "code": 12014,
            "message": "Constraint already exist, use update constraints api"
        }
    }
]
```

```
[
    {
        "rewardConstraintId": 2888,
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SUPPL_PROGRAM",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10000,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "supplementaryProgramId": "27001187"
    }
]
```

```
[
    {
        "rewardConstraintId": 2888,
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SUPPL_PROGRAM",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 10000,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "supplementaryProgramId": "27001187"
    }
]
```

```
[
    {
        "rewardConstraintId": 2887,
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SEGMENT",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 3000,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "segmentId": "6136",
        "partitionId": "2676"
    }
]
```

```
[
    {
        "rewardConstraintId": 2887,
        "orgId": 4000036,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_SEGMENT",
        "frequencyType": "WEEKLY",
        "constraintLimitValue": 3000,
        "isActive": true,
        "startDayOfTheWeek": "MONDAY",
        "status": {
            "success": true,
            "code": 0
        },
        "segmentId": "6136",
        "partitionId": "2676"
    }
]
```

```
[
    {
        "rewardConstraintId": 11664,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LOYALTY_PROGRAM",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "programId": "469"
    }
]
```

```
[
    {
        "rewardConstraintId": 11664,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LOYALTY_PROGRAM",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "programId": "469"
    }
]
```

```
[
    {
        "rewardConstraintId": 11667,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LABEL",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "label": "Fashion"
    }
]
```

```
[
    {
        "rewardConstraintId": 11667,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LABEL",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "label": "Fashion"
    }
]
```

```
[
    {
        "rewardConstraintId": 13059,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_TIER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "tierId": "1"
    }
]
```

```
[
    {
        "rewardConstraintId": 13059,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_TIER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "tierId": "1"
    }
]
```

# API-specific errors

| Error code | Description |

| --- | --- |

| 12014 | Constraint already exist. Use the update points restriction API to update the existing constraint. |

| 12015 | Constraint does not exist with the passed constraintId, create a new constraint. |

| 12016 | Cannot pass rewardConstraintId in the create new constraint API. |

| 12017 | Pass the rewardConstraintId in the update points constraint API. |

| 12018 | Please make sure isActive flag is true for all the entries in the request body in create constraint call. |

| 12020 | The limit of org level KPIs is reached. Please disable existing KPI constraints to add new constraints. |

| 12022 | Multiple restrictions are passed. Only one combination of constraint level and KPI is allowed. |



`Try It!`