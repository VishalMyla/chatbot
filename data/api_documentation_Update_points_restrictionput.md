# Update points restrictionput

The API allows you to update the points restriction the brands can apply to the customer to the number of points they burn/redeem in the rewards catalog.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/rewards/core/v1/brand/constraints |

| HTTP Method | PUT |

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

| rewardConstraintId* | Integer | The rewardConstraintId is generated on creating the points restriction. This is mandatory to update the points restriction. |

| kpi* | String | The KPI on which the restriction is applied. Supported value: POINTS |

| constraintLevel* | Enum | The level at which restrictions would be defined by org and applied.Supported values: CUSTOMER_SEGMENT, CUSTOMER_TIER, CUSTOMER_LOYALTY_PROGRAM, CUSTOMER_REDEMPTION_TYPE, CUSTOMER_SUPPL_PROGRAM, REWARD, CUSTOMER_LABEL, CUSTOMER, TRANSACTIONOnly one combination of Constraint_Level & KPI is allowed with the DAILY, WEEKLY, or MONTHLY frequency type. |

| frequencyType* | Enum | The frequency at which the constraint is applied. Supported values: DAILY, WEEKLY, MONTHLY. |

| intervalValue* | Integer | The interval at which the frequency is applied. |

| constraintLimitValue* | Integer | The limit value for the constraint. |

| isActive* | Boolean | Status of the constraint, whether it is active or not |

| redemptionType* | String | Type of intouch reward.Supported values: GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC. |



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

| orgId | Integer | Identifier for the organization |

| kpi | String | The KPI on which the restriction is applied. Supported value: POINTS |

| constraintLevel | String | The level at which restrictions would be defined by org and applied on.Supported values: CUSTOMER_CONTENT_TYPE, CUSTOMER.Only one combination of Constraint_Level & KPI is allowed with the DAILY, WEEKLY, or MONTHLY frequency type. |

| frequencyType | String | Frequency at which the constraint is applied, "DAILY" |

| constraintLimitValue | Integer | The limit value for the constraint, set at 15 |

| isActive | Boolean | Status indicating whether the constraint is active |

| intervalValue | Integer | The interval at which the frequency is applied, here it is daily (1) |

| status.success | Boolean | Indicates if the status check was successful |

| status.code | Integer | Status code associated with the constraint check |

| redemptionType | String | Type of redemption managed by this constraint, "POINTS" |



```
[
    {
        "rewardConstraintId": 6759,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 8,
        "isActive": false,
        "intervalValue": 3,
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
        "rewardConstraintId": 6759,
        "orgId": 50672,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 8,
        "isActive": false,
        "intervalValue": 3,
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

| 12014 | Constraint already exist. |

| 12015 | Constraint does not exist with the passed constraintId, create a new constraint. |

| 12016 | Cannot pass rewardConstraintId in the create new constraint API. |

| 12017 | Pass the rewardConstraintId in the update points constraint AP. |

| 12019 | The limit of org level constraint is reached. Please disable existing constraints to add new constraints.Max org constraints: 50 |

| 12020 | The limit of org level KPIs is reached. Please disable existing KPI constraints to add new constraints.Max org constraints: 15 |

| 12022 | Multiple restrictions are passed. Only one combination of constraint level and KPI is allowed. |



`Try It!`