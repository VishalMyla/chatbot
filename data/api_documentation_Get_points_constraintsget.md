# Get points constraintsget

This API allows the brand to retrieve the details of the points restrictions set for the customer.

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

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/constraints
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| rewardConstraintId | Integer | Unique identifier for the reward constraint |

| orgId | Integer | Identifier for the organization |

| kpi | String | The KPI on which the restriction is applied. Supported value: POINTS |

| constraintLevel | String | The level at which restrictions would be defined by org and applied on.Values: CUSTOMER_REDEMPTION_TYPE, CUSTOMER, CUSTOMER_SEGMENT, CUSTOMER_TIER, CUSTOMER_LOYALTY_PROGRAM, CUSTOMER_SUPPL_PROGRAM, CUSTOMER_LABEL.Only one combination of Constraint_Level & KPI is allowed with the DAILY, WEEKLY, or MONTHLY frequency type. |

| frequencyType | String | The frequency at which the constraint is applied. Supported values: DAILY, WEEKLY, MONTHLY. |

| constraintLimitValue | Integer | The limit value for the constraint |

| isActive | Boolean | Status indicating whether the constraint is active |

| intervalValue | Integer | The interval at which the frequency is applied (daily) |

| status.success | Boolean | Indicates if the status check was successful |

| status.code | Integer | Status code associated with the constraint check |

| redemptionType | String | Type of redemption managed by this constraint. Supported Values: GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC. |



```
[
    {
        "rewardConstraintId": 10259,
        "orgId": 100458,
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
    },
    {
        "rewardConstraintId": 10857,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        }
    },
    {
        "rewardConstraintId": 11123,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "POINTS"
    },
    {
        "rewardConstraintId": 11436,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LOYALTY_PROGRAM",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "programId": "1680"
    },
    {
        "rewardConstraintId": 11662,
        "orgId": 100458,
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
        "redemptionType": "MILES"
    },
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
    },
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
    },
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
        "rewardConstraintId": 10259,
        "orgId": 100458,
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
    },
    {
        "rewardConstraintId": 10857,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER",
        "frequencyType": "DAILY",
        "constraintLimitValue": 5,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        }
    },
    {
        "rewardConstraintId": 11123,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_REDEMPTION_TYPE",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "redemptionType": "POINTS"
    },
    {
        "rewardConstraintId": 11436,
        "orgId": 100458,
        "kpi": "POINTS",
        "constraintLevel": "CUSTOMER_LOYALTY_PROGRAM",
        "frequencyType": "DAILY",
        "constraintLimitValue": 15,
        "isActive": true,
        "intervalValue": 1,
        "status": {
            "success": true,
            "code": 0
        },
        "programId": "1680"
    },
    {
        "rewardConstraintId": 11662,
        "orgId": 100458,
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
        "redemptionType": "MILES"
    },
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
    },
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
    },
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

`Try It!`