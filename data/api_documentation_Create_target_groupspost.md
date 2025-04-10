# Create target groupspost

This API is used to create a target group. A target group is an entity under which individual targets can be created. The targets are defined under the target group.

A target group is essential for creating a target, even when defining a single target. The target group serves as a container in the backend system. When creating a target through the user interface, you may not explicitly create a target group; however, the system automatically assigns the target to a backend group.

You can also use the same API to define targets and periods under the target group.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic/OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | v3/targetGroups |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/v3/targetGroups

```
https://eucrm.cc.capillarytech.com/v3/targetGroups
```

# Request body

```
{
  "active": true,
  "description": "Opp",
  
  
  "name": "UCCtesttarget2",
  "preferredTillId": 75050875,
  "trackingType": "DEFAULT",
  "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
  "totalPeriods": 4,
  "frequencyType": "DAILY",
  "frequency": 0,
  "recurringCycles": 0,
  "userCreated": false,
  "periods": [
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-08T23:59:59.999Z",
      "periodStatus": "RUNNING",
      "refCode": "Cycle_1",
      "startDate": "2024-10-08T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-09T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_2",
      "startDate": "2024-10-09T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-10T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_3",
      "startDate": "2024-10-10T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-11T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_4",
      "startDate": "2024-10-11T00:00:00.000Z"
    }
  ],
  "targets": [
    {
      "active": true,
      "description": "",
      "expression": true,
      "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
      "filters": [],
      "name": "UCCtesttarget2",
      "targetEntity": "EVENT",
      "eventName": "spinTheWheel",
      
      "targetType": "EVENT_ATTRIBUTE",
      "extendedFieldInfo": {
        "name": "points",
        "aggregateFunction": "SUM"
      },
      "defaultValues": [
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        }
       
      ]
    }
  ]
}
```

```
{
  "active": true,
  "description": "Opp",
  
  
  "name": "UCCtesttarget2",
  "preferredTillId": 75050875,
  "trackingType": "DEFAULT",
  "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
  "totalPeriods": 4,
  "frequencyType": "DAILY",
  "frequency": 0,
  "recurringCycles": 0,
  "userCreated": false,
  "periods": [
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-08T23:59:59.999Z",
      "periodStatus": "RUNNING",
      "refCode": "Cycle_1",
      "startDate": "2024-10-08T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-09T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_2",
      "startDate": "2024-10-09T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-10T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_3",
      "startDate": "2024-10-10T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-11T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_4",
      "startDate": "2024-10-11T00:00:00.000Z"
    }
  ],
  "targets": [
    {
      "active": true,
      "description": "",
      "expression": true,
      "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
      "filters": [],
      "name": "UCCtesttarget2",
      "targetEntity": "EVENT",
      "eventName": "spinTheWheel",
      
      "targetType": "EVENT_ATTRIBUTE",
      "extendedFieldInfo": {
        "name": "points",
        "aggregateFunction": "SUM"
      },
      "defaultValues": [
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        }
       
      ]
    }
  ]
}
```

```
{
  "active": true,
  "description": "Opp",
  
  
  "name": "UCCtesttarget2",
  "preferredTillId": 75050875,
  "trackingType": "DEFAULT",
  "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
  "totalPeriods": 4,
  "frequencyType": "DAILY",
  "frequency": 0,
  "recurringCycles": 0,
  "userCreated": true,
  "periods": [
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-08T23:59:59.999Z",
      "periodStatus": "RUNNING",
      "refCode": "Cycle_1",
      "startDate": "2024-10-08T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-09T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_2",
      "startDate": "2024-10-09T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-10T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_3",
      "startDate": "2024-10-10T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-11T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_4",
      "startDate": "2024-10-11T00:00:00.000Z"
    }
  ],
  "targets": [
    {
      "active": true,
      "description": "",
      "expression": true,
      "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
      "filters": [],
      "name": "UCCtesttarget2",
      "targetEntity": "EVENT",
      "eventName": "spinTheWheel",
      
      "targetType": "EVENT_ATTRIBUTE",
      "extendedFieldInfo": {
        "name": "points",
        "aggregateFunction": "SUM"
      },
      "defaultValues": [
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        }
       
      ]
    }
  ]
}
```

```
{
  "active": true,
  "description": "Opp",
  
  
  "name": "UCCtesttarget2",
  "preferredTillId": 75050875,
  "trackingType": "DEFAULT",
  "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
  "totalPeriods": 4,
  "frequencyType": "DAILY",
  "frequency": 0,
  "recurringCycles": 0,
  "userCreated": true,
  "periods": [
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-08T23:59:59.999Z",
      "periodStatus": "RUNNING",
      "refCode": "Cycle_1",
      "startDate": "2024-10-08T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-09T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_2",
      "startDate": "2024-10-09T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-10T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_3",
      "startDate": "2024-10-10T00:00:00.000Z"
    },
    {
      "active": true,
      "description": "",
      "endDate": "2024-10-11T23:59:59.999Z",
      "periodStatus": "NOT_STARTED",
      "refCode": "Cycle_4",
      "startDate": "2024-10-11T00:00:00.000Z"
    }
  ],
  "targets": [
    {
      "active": true,
      "description": "",
      "expression": true,
      "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
      "filters": [],
      "name": "UCCtesttarget2",
      "targetEntity": "EVENT",
      "eventName": "spinTheWheel",
      
      "targetType": "EVENT_ATTRIBUTE",
      "extendedFieldInfo": {
        "name": "points",
        "aggregateFunction": "SUM"
      },
      "defaultValues": [
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        },
        {
          "defaultValue": "1.00"
        }
       
      ]
    }
  ]
}
```

```
{
    "description": "test via postman",
    "name": "Fixed Window Milestone Group 1725974277",
    "fromDate": "2024-08-20T08:41:00.529Z",
    "toDate": "2024-10-20T08:41:00.529Z",
    "targetCycleStartDate": "2024-08-20T08:42:00.529Z",
    "targetCycleEndDate": "2024-10-20T08:42:00.529Z",
    "totalPeriods": 2,
    "periods": [
        {
            "refCode": "TP1",
            "startDate": "2024-08-20",
            "endDate": "2024-09-19"
        },
        {
            "refCode": "TP2",
            "startDate": "2024-09-20",
            "endDate": "2024-10-19"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "target created via postman",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "name": "target-2024-09-10T13:17:57.210Z",
            "targetEntity": "EVENT",
            "eventName": "TransactionAdd",
            "targetType": "COUNT",
            "extendedFieldInfo": {
                "name": "cartId",
                "aggregateFunction": "SUM"
            },
            "defaultValues": [
                {
                    "defaultValue": 500
                },
                {
                    "defaultValue": 500
                }
            ]
        }
    ],
    "preferredTillId": 50692189,
    "active": true,
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "frequencyType": "MONTHLY",
    "trackingType": "DEFAULT"
    ,"userCreated": false
    ,"leaderboardEnabled": true
}
```

```
{
    "description": "test via postman",
    "name": "Fixed Window Milestone Group 1725974277",
    "fromDate": "2024-08-20T08:41:00.529Z",
    "toDate": "2024-10-20T08:41:00.529Z",
    "targetCycleStartDate": "2024-08-20T08:42:00.529Z",
    "targetCycleEndDate": "2024-10-20T08:42:00.529Z",
    "totalPeriods": 2,
    "periods": [
        {
            "refCode": "TP1",
            "startDate": "2024-08-20",
            "endDate": "2024-09-19"
        },
        {
            "refCode": "TP2",
            "startDate": "2024-09-20",
            "endDate": "2024-10-19"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "target created via postman",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "name": "target-2024-09-10T13:17:57.210Z",
            "targetEntity": "EVENT",
            "eventName": "TransactionAdd",
            "targetType": "COUNT",
            "extendedFieldInfo": {
                "name": "cartId",
                "aggregateFunction": "SUM"
            },
            "defaultValues": [
                {
                    "defaultValue": 500
                },
                {
                    "defaultValue": 500
                }
            ]
        }
    ],
    "preferredTillId": 50692189,
    "active": true,
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "frequencyType": "MONTHLY",
    "trackingType": "DEFAULT"
    ,"userCreated": false
    ,"leaderboardEnabled": true
}
```

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| active | Boolean | Indicates if target tracking is active. |

| description | String | Brief description of the target group. |

| name* | String | The name identifier for the target group.The character limit for the name is 200 characters. |

| preferredTillId | Number | Identifier for the preferred POS till. |

| trackingType* | String | The type of tracking the milestone is created for. Supported values:DEFAULT: Track a single targetUNIFIED:Track multiple targetsSTREAK: Track multiple targets as a streak.CAPPING: Track the number of points a user has got over a period, so that capping can be applied.Refer to the documentation onmilestones,unified targets,streaksandcappingfor more information. |

| targetEvaluationType* | String | The evaluation strategy for the targets. Supported values:FIXED_CALENDAR_WINDOW,CYCLIC_WINDOW,PERIOD_AGNOSTIC_WINDOW |

| totalPeriods* | Number | The total number of periods over which the tracking is evaluated. |

| frequencyType* | Enum | The frequency of each cycle in which the user has to achieve the target value.Supported values:MONTHLY, QUARTERLY,HALF_YEARLY,YEARLY,WEEKLY,DAILY,CUSTOM. |

| frequency* | Number | The frequency count, based on thefrequencyType. |

| recurringCycles* | Number | The number of cycles for which the tracking recurs. |

| userCreated | Boolean | If set to true, auser-createdtarget group is created. A user-created target is a promotion that rewards customers for achieving goals they set themselves.By default the value is set to false and a regular target group is created. |

| leaderboardEnabled | Boolean | If enabled, aleaderboardenabled target group is created. |

| aggregateWindow * | ENUM | Contains information related to the aggregate window.  An aggregate window is a defined time period during which you can track an extended field or behavioral event. |

| windowType * | ENUM | The type of window period (MIN or MAX).MIN: This function identifies the smallest value within a given time frame. For example, if you're tracking daily steps, the MIN would show you the least number of steps taken in that period.MAX: This function finds the largest value within that same time frame. Continuing with the step count example, the MAX would reveal the highest number of steps taken during the period. |

| windowTimeUnit * | ENUM | The timeframe for which the window will be active. Currently, DAY is supported. |

| windowValue | String | The time units for which the window will be active. Currently, one time unit is supported. |

| periods | Object | Details on target period creation, updates, and time-frame. |

| active | Boolean | Indicates if the period is active. |

| description | String | A brief description of the period. |

| endDate | Date Time | The end date and time of the period in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| periodStatus | String | Indicates if the cycle of the Milestone is running or upcoming.Supported values:RUNNING,UPCOMING,NOT_STARTED |

| refCode | String | A reference code for the period. |

| startDate | Date Time | The start date and time of the period  in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| targets | Object | An array of target objects, each outlining a target within the tracking. |

| active | Boolean | Indicates if the target is active. |

| description | String | A brief description of the target. |

| expression | Boolean | Indicates if the target has an expression for evaluation. |

| expressionJson | String | A JSON expression that specifies the conditions required to achieve the target. |

| filters | Object | Details on the scope filters active on the target. |

| entityType | Enum | The entity to which the specified expressions related to the target will be applied.For example: The user has to make a purchase of shoes from ABC store.Here, purchase of shoes is the expression and the entity is ABC store.Supported values:STORE,ZONE,CONCEPT. |

| entityIds | Array | IDs of the entities to which the is filter applied on. |

| name | String | The name identifier for the target.The character limit for the target group name is 200 characters. |

| targetEntity | Enum | The KPI on which the target is tracked.For the transactional KPIs, the supported value for this areTRANSACTIONandLINEITEM.For the Behavioural or EMF events, the supported value isEVENT.For the tracking based on rewards such as points, the supported value isREWARDS.Refer to creating target groups based onbehavioural event,EMF eventandalternate currenciesfor more details. |

| eventName | String | The name of the event that triggers the target. |

| targetType | Enum | Target type on which the target is set.Supported values:QUANTITY, SALES, GROSS_SALES,REGULAR_POINTS, PROMOTIONAL_POINTS,ALL_POINTSFor information based on configuring target based on behavioural event (COUNT, VISIT, and SUM) and EMF event (COUNT and VISIT), refer totarget based on behavioural eventandtarget based on EMF eventdocumentation. |

| defaultValues | Object | Details of the default values for the target. |

| defaultValue | Integer | Default value for the target. |

| extendedFieldInfo | Object | Details on extended field information for the target group. |



`DEFAULT`

`UNIFIED`

`STREAK`

`CAPPING`

[milestones](/docs/milestones-new-flow)

[unified targets](/docs/unified-milestones)

[streaks](/docs/streaks)

[capping](/docs/advance-capping)

`FIXED_CALENDAR_WINDOW`

`CYCLIC_WINDOW`

`PERIOD_AGNOSTIC_WINDOW`

`MONTHLY, QUARTERLY`

`HALF_YEARLY`

`YEARLY`

`WEEKLY`

`DAILY`

`CUSTOM`

`frequencyType`

[user-created](/reference/user-created-challenges)

[leaderboard](/reference/leaderboards)

`YYYY-MM-DDTHH:mm:ss.SSS`

`RUNNING`

`UPCOMING`

`NOT_STARTED`

`YYYY-MM-DDTHH:mm:ss.SSS`

`STORE`

`ZONE`

`CONCEPT`

`TRANSACTION`

`LINEITEM`

`EVENT`

`REWARDS`

[behavioural event](/reference/create-target-group-based-on-behavioural-event)

[EMF event](/reference/create-target-based-on-emf-eventss)

[alternate currencies](/reference/create-target-based-on-alternate-currencies)

`QUANTITY, SALES, GROSS_SALES`

`REGULAR_POINTS, PROMOTIONAL_POINTS`

`ALL_POINTS`

[target based on behavioural event](/reference/create-target-group-based-on-behavioural-event)

[target based on EMF event](/reference/create-target-based-on-emf-event)

# Response body

```
{
    "data": {
        "id": 2330,
        "name": "Opp111",
        "active": true,
        "preferredTillId": 75050875,
        "periods": [
            {
                "id": 6701,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-08",
                "endDate": "2024-10-08",
                "refCode": "Cycle_1",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            },
            {
                "id": 6702,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-09",
                "endDate": "2024-10-09",
                "refCode": "Cycle_2",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            },
            {
                "id": 6703,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-10",
                "endDate": "2024-10-10",
                "refCode": "Cycle_3",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            },
            {
                "id": 6704,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-11",
                "endDate": "2024-10-11",
                "refCode": "Cycle_4",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            }
        ],
        "totalPeriods": 4,
        "description": "Opp111",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-10-08T00:00:00.000Z",
        "targetCycleEndDate": "2024-10-11T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 1753,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.532+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.532+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "name": "Opp111",
                "emfRuleSetId": 126353138,
                "targetType": "EVENT_ATTRIBUTE",
                "targetEntity": "EVENT",
                "eventName": "spinTheWheel",
                "targetGroupId": 2330,
                "description": "",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 8199,
                        "periodId": 6701,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 8200,
                        "periodId": 6702,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 8201,
                        "periodId": 6703,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 8202,
                        "periodId": 6704,
                        "defaultValue": 1.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "6704": {
                        "id": 8202,
                        "periodId": 6704,
                        "defaultValue": 1.000
                    },
                    "6701": {
                        "id": 8199,
                        "periodId": 6701,
                        "defaultValue": 1.000
                    },
                    "6702": {
                        "id": 8200,
                        "periodId": 6702,
                        "defaultValue": 1.000
                    },
                    "6703": {
                        "id": 8201,
                        "periodId": 6703,
                        "defaultValue": 1.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "points",
                    "aggregateFunction": "SUM"
                }
            }
        ],
        "leaderboardEnabled": false,
        "userCreated": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 2330,
        "name": "Opp111",
        "active": true,
        "preferredTillId": 75050875,
        "periods": [
            {
                "id": 6701,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-08",
                "endDate": "2024-10-08",
                "refCode": "Cycle_1",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            },
            {
                "id": 6702,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-09",
                "endDate": "2024-10-09",
                "refCode": "Cycle_2",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            },
            {
                "id": 6703,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-10",
                "endDate": "2024-10-10",
                "refCode": "Cycle_3",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            },
            {
                "id": 6704,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-11",
                "endDate": "2024-10-11",
                "refCode": "Cycle_4",
                "periodStatus": "ENDED",
                "targetGroupId": 2330,
                "description": "",
                "active": true
            }
        ],
        "totalPeriods": 4,
        "description": "Opp111",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-10-08T00:00:00.000Z",
        "targetCycleEndDate": "2024-10-11T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 1753,
                "attribution": {
                    "createdOn": "2024-11-25T04:36:21.532+0000",
                    "lastUpdatedOn": "2024-11-25T04:36:21.532+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "name": "Opp111",
                "emfRuleSetId": 126353138,
                "targetType": "EVENT_ATTRIBUTE",
                "targetEntity": "EVENT",
                "eventName": "spinTheWheel",
                "targetGroupId": 2330,
                "description": "",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 8199,
                        "periodId": 6701,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 8200,
                        "periodId": 6702,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 8201,
                        "periodId": 6703,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 8202,
                        "periodId": 6704,
                        "defaultValue": 1.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "6704": {
                        "id": 8202,
                        "periodId": 6704,
                        "defaultValue": 1.000
                    },
                    "6701": {
                        "id": 8199,
                        "periodId": 6701,
                        "defaultValue": 1.000
                    },
                    "6702": {
                        "id": 8200,
                        "periodId": 6702,
                        "defaultValue": 1.000
                    },
                    "6703": {
                        "id": 8201,
                        "periodId": 6703,
                        "defaultValue": 1.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "points",
                    "aggregateFunction": "SUM"
                }
            }
        ],
        "leaderboardEnabled": false,
        "userCreated": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 1901,
        "name": "UCCtesttarget2",
        "active": true,
        "preferredTillId": 75050875,
        "periods": [
            {
                "id": 5751,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-08",
                "endDate": "2024-10-08",
                "refCode": "Cycle_1",
                "periodStatus": "ENDED",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            },
            {
                "id": 5752,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-09",
                "endDate": "2024-10-09",
                "refCode": "Cycle_2",
                "periodStatus": "RUNNING",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            },
            {
                "id": 5753,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-10",
                "endDate": "2024-10-10",
                "refCode": "Cycle_3",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            },
            {
                "id": 5754,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-11",
                "endDate": "2024-10-11",
                "refCode": "Cycle_4",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            }
        ],
        "totalPeriods": 4,
        "description": "Opp",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-10-08T00:00:00.000Z",
        "targetCycleEndDate": "2024-10-11T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 1293,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.218+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.218+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "name": "UCCtesttarget2",
                "emfRuleSetId": 126337565,
                "targetType": "EVENT_ATTRIBUTE",
                "targetEntity": "EVENT",
                "eventName": "spinTheWheel",
                "targetGroupId": 1901,
                "description": "",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 7180,
                        "periodId": 5751,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 7181,
                        "periodId": 5752,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 7182,
                        "periodId": 5753,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 7183,
                        "periodId": 5754,
                        "defaultValue": 1.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "5751": {
                        "id": 7180,
                        "periodId": 5751,
                        "defaultValue": 1.000
                    },
                    "5752": {
                        "id": 7181,
                        "periodId": 5752,
                        "defaultValue": 1.000
                    },
                    "5753": {
                        "id": 7182,
                        "periodId": 5753,
                        "defaultValue": 1.000
                    },
                    "5754": {
                        "id": 7183,
                        "periodId": 5754,
                        "defaultValue": 1.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "points",
                    "aggregateFunction": "SUM",
                    "aggregateWindow": null
                }
            }
        ],
        "leaderboardEnabled": false,
        "userCreated": true
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 1901,
        "name": "UCCtesttarget2",
        "active": true,
        "preferredTillId": 75050875,
        "periods": [
            {
                "id": 5751,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-08",
                "endDate": "2024-10-08",
                "refCode": "Cycle_1",
                "periodStatus": "ENDED",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            },
            {
                "id": 5752,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-09",
                "endDate": "2024-10-09",
                "refCode": "Cycle_2",
                "periodStatus": "RUNNING",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            },
            {
                "id": 5753,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-10",
                "endDate": "2024-10-10",
                "refCode": "Cycle_3",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            },
            {
                "id": 5754,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.000+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-11",
                "endDate": "2024-10-11",
                "refCode": "Cycle_4",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 1901,
                "description": "",
                "active": true
            }
        ],
        "totalPeriods": 4,
        "description": "Opp",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-10-08T00:00:00.000Z",
        "targetCycleEndDate": "2024-10-11T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 1293,
                "attribution": {
                    "createdOn": "2024-10-09T11:58:28.218+0000",
                    "lastUpdatedOn": "2024-10-09T11:58:28.218+0000",
                    "lastUpdatedBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75122513,
                        "code": "till.marketsuper",
                        "description": "",
                        "name": "till.marketsuper",
                        "type": "TILL"
                    }
                },
                "name": "UCCtesttarget2",
                "emfRuleSetId": 126337565,
                "targetType": "EVENT_ATTRIBUTE",
                "targetEntity": "EVENT",
                "eventName": "spinTheWheel",
                "targetGroupId": 1901,
                "description": "",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 7180,
                        "periodId": 5751,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 7181,
                        "periodId": 5752,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 7182,
                        "periodId": 5753,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 7183,
                        "periodId": 5754,
                        "defaultValue": 1.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "5751": {
                        "id": 7180,
                        "periodId": 5751,
                        "defaultValue": 1.000
                    },
                    "5752": {
                        "id": 7181,
                        "periodId": 5752,
                        "defaultValue": 1.000
                    },
                    "5753": {
                        "id": 7182,
                        "periodId": 5753,
                        "defaultValue": 1.000
                    },
                    "5754": {
                        "id": 7183,
                        "periodId": 5754,
                        "defaultValue": 1.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "points",
                    "aggregateFunction": "SUM",
                    "aggregateWindow": null
                }
            }
        ],
        "leaderboardEnabled": false,
        "userCreated": true
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 2084,
        "name": "Fixed Window Milestone Group 1725974313",
        "fromDate": "2024-08-20",
        "toDate": "2024-10-20",
        "active": true,
        "preferredTillId": 50692189,
        "periods": [
            {
                "id": 3720,
                "attribution": {
                    "createdOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-08-20",
                "endDate": "2024-09-19",
                "refCode": "TP1",
                "periodStatus": "RUNNING",
                "targetGroupId": 2084,
                "active": true
            },
            {
                "id": 3721,
                "attribution": {
                    "createdOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-09-20",
                "endDate": "2024-10-19",
                "refCode": "TP2",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 2084,
                "active": true
            }
        ],
        "totalPeriods": 2,
        "description": "test via postman",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "targetCycleStartDate": "2024-08-20T08:42:00.529Z",
        "targetCycleEndDate": "2024-10-20T08:42:00.529Z",
        "frequencyType": "MONTHLY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 2746,
                "attribution": {
                    "createdOn": "2024-09-10T13:18:35.999+0000",
                    "lastUpdatedOn": "2024-09-10T13:18:35.999+0000",
                    "lastUpdatedBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    }
                },
                "name": "target-2024-09-10T13:18:32.999Z",
                "emfRuleSetId": 2030748,
                "targetType": "COUNT",
                "targetEntity": "EVENT",
                "eventName": "TransactionAdd",
                "targetGroupId": 2084,
                "description": "target created via postman",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 4472,
                        "periodId": 3720,
                        "defaultValue": 500.000
                    },
                    {
                        "id": 4473,
                        "periodId": 3721,
                        "defaultValue": 500.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "3720": {
                        "id": 4472,
                        "periodId": 3720,
                        "defaultValue": 500.000
                    },
                    "3721": {
                        "id": 4473,
                        "periodId": 3721,
                        "defaultValue": 500.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "cartId",
                    "aggregateFunction": "SUM",
                    "aggregateWindow": null
                }
            }
        ],
        "leaderboardEnabled": true,
        "userCreated": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 2084,
        "name": "Fixed Window Milestone Group 1725974313",
        "fromDate": "2024-08-20",
        "toDate": "2024-10-20",
        "active": true,
        "preferredTillId": 50692189,
        "periods": [
            {
                "id": 3720,
                "attribution": {
                    "createdOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-08-20",
                "endDate": "2024-09-19",
                "refCode": "TP1",
                "periodStatus": "RUNNING",
                "targetGroupId": 2084,
                "active": true
            },
            {
                "id": 3721,
                "attribution": {
                    "createdOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedOn": "2024-09-10T13:18:36.000+0000",
                    "lastUpdatedBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-09-20",
                "endDate": "2024-10-19",
                "refCode": "TP2",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 2084,
                "active": true
            }
        ],
        "totalPeriods": 2,
        "description": "test via postman",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "targetCycleStartDate": "2024-08-20T08:42:00.529Z",
        "targetCycleEndDate": "2024-10-20T08:42:00.529Z",
        "frequencyType": "MONTHLY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 2746,
                "attribution": {
                    "createdOn": "2024-09-10T13:18:35.999+0000",
                    "lastUpdatedOn": "2024-09-10T13:18:35.999+0000",
                    "lastUpdatedBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50677655,
                        "code": "nirvana01",
                        "description": "",
                        "name": "nirvana01",
                        "type": "TILL"
                    }
                },
                "name": "target-2024-09-10T13:18:32.999Z",
                "emfRuleSetId": 2030748,
                "targetType": "COUNT",
                "targetEntity": "EVENT",
                "eventName": "TransactionAdd",
                "targetGroupId": 2084,
                "description": "target created via postman",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 4472,
                        "periodId": 3720,
                        "defaultValue": 500.000
                    },
                    {
                        "id": 4473,
                        "periodId": 3721,
                        "defaultValue": 500.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "3720": {
                        "id": 4472,
                        "periodId": 3720,
                        "defaultValue": 500.000
                    },
                    "3721": {
                        "id": 4473,
                        "periodId": 3721,
                        "defaultValue": 500.000
                    }
                },
                "extendedFieldInfo": {
                    "name": "cartId",
                    "aggregateFunction": "SUM",
                    "aggregateWindow": null
                }
            }
        ],
        "leaderboardEnabled": true,
        "userCreated": false
    },
    "errors": null,
    "warnings": null
}
```

# Response parameters

| Field | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique ID of the target group |

| name | String | Unique name of the target group. |

| active | Boolean | Indicates if target tracking is active. |

| preferredTillId | Number | Identifier for the preferred POS till. |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values:DEFAULT: Track a single targetUNIFIED:Track multiple targetsSTREAK: Track multiple targets as a streak.CAPPING: Track the number of points a user has got over a period, so that capping can be applied. |

| frequency | Number | Frequency count, based on thefrequencyType. |

| recurringCycles | Number | Number of cycles for which the tracking recurs. |

| periods | Object | Details on target creation, updates, and time-frame. |

| - id | Integer | The unique ID of the target period. |

| - attribution | Object | Details on the creation and update details of the target period. |

| -- createdOn | String | Date the target period was created in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| --lastUpdatedOn | String | Date the target period was last updated in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| --lastUpdatedBy | Object | Details on updates to the target period. |

| ---id | Integer | Unique ID of the user who last modified the target period. |

| ---code | String | Code of the user who last modified the target period. |

| ---description | String | Description of the user who last modified the target period. |

| ---name | String | Name of the user who last modified the target period. |

| ---type | String | Type of user who last modified the target period. |

| - startDate | String | Start date of the target group, inYYYY-MM-DDformat. |

| - endDate | String | End date of the target group, inYYYY-MM-DDformat. |

| - refCode | Integer | Reference code of the target period. |

| - periodStatus | String | Current status of the target period. Supported valuesNOT_STARTED,LIVEandENDED. |

| - targetGroupId | Integer | Unique ID of the target group. |

| - description | String | Description of the target group. |

| - active | Boolean | Current active status of the target period. If true, the target is currently active, else the target is inactive. |

| totalPeriods | Integer | Total number of periods for the target group. |

| description | String | Description of the target period. |

| targetEvaluationType | ENUM | Evaluation strategy for the target. |

| recurringCycles | Integer | Number of cycles for which the tracking recurs. |

| targetCycleStartDate | String | Start date of the target cycle in  ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| targetCycleEndDate | String | End date of the target cycle in  ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| frequencyType | String | The frequency of each cycle in which the user has to achieve the target value. |

| trackingType | Enum | The type of tracking the milestone is created for. |

| targets | Object | Details on creation of the target. |

| - id | Boolean | Unique ID of the target. |

| - attribution | Object | Details on the creation and update details of the target. |

| -- createdOn | String | Date the target was created in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| -- lastUpdatedOn | String | Date the target was last updated in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. |

| -- lastUpdatedBy | Object | Details on updates to the target. |

| --- id | Integer | Unique ID of the user who last modified the target. |

| --- code | Integer | Code of the user who last modified the target. |

| -- description | String | Description of the user who last modified the target. |

| --- name | String | Name of the user who last modified the target. |

| --- type | String | Type of user who last modified the target. |

| -- createdBy | Object | Details on creation of the target. |

| --- id | Integer | Unique ID of the user who created the target . |

| --- code | Integer | Code of the user who created the target. |

| --- description | String | Description of the user who created the target. |

| --- name | String | Name of the user who created the target. |

| --- type | String | Type of user who created the target. |

| - name | String | Unique name for the target. |

| - targetType | String | The type of targetSupported values:ALL: Tracks points that a customer earns across a loyalty program and from a loyalty promotion.REGULAR: Track the points that a customer earns across a loyalty program. Points earned from promotions are excluded.PROMOTION: Tracks the points that a customer earns from a loyalty promotion. |

| - targetEntity | Enum | The KPI on which the target is tracked.For the transactional KPIs, the supported value for this areTRANSACTIONandLINEITEM.For the Behavioural or EMF events, the supported value isEVENT.For the tracking based on rewards such as points, the supported value isREWARDS. |

| - eventName | String | Name of the event that triggers the target. |

| - targetGroupId | Integer | Unique ID of the target group associated with the target. |

| - description | String | Description of the target. |

| - active | Boolean | Current active status of the target. If true, the target is currently active, else the target is inactive. |

| -- expression | Boolean | Indicates if the target has an expression for evaluation. |

| -- expressionJson | String | A JSON expression that specifies the conditions required to achieve the target. |

| -- filters | Object | Details on the scope filters active on the target. |

| -- enrolmentMethod | Enum | The method of enrolment for the target. Supported values:TRANSACTION,IMPORT. |

| -- defaultValues | Object | Details on the default values for the target. |

| --- defaultValue | Float | A default value used in the target evaluation. |

| -- targetPeriodDefaultValuesMap | Object | Details on the default values for the target period. |

| -- extendedFieldInfo | Object | Details on extended field information for the target group. |

| leaderboardEnabled | Boolean | Indicates if theleaderboardfeature is enabled. |

| userCreated | Boolean | Indicates if the target is auser-createdtarget. |

| errors | null or Object | Contains error details if any occurred during the API request. |

| warnings | null or Object | Contains warning details if any occurred during the API request. |



`DEFAULT`

`UNIFIED`

`STREAK`

`CAPPING`

`frequencyType`

`YYYY-MM-DDTHH:mm:ss.SSS`

`YYYY-MM-DDTHH:mm:ss.SSS`

`YYYY-MM-DD`

`YYYY-MM-DD`

`NOT_STARTED`

`LIVE`

`ENDED`

`YYYY-MM-DDTHH:mm:ss.SSS`

`YYYY-MM-DDTHH:mm:ss.SSS`

`YYYY-MM-DDTHH:mm:ss.SSS`

`YYYY-MM-DDTHH:mm:ss.SSS`

`ALL`

`REGULAR`

`PROMOTION`

`TRANSACTION`

`LINEITEM`

`EVENT`

`REWARDS`

`TRANSACTION`

`IMPORT`

[leaderboard](/reference/leaderboards)

[user-created](/reference/user-created-challenges)

# API error codes

| Code | Description |

| --- | --- |

| 310069 | Target group name already exists |

| 300004 | Invalid input, check all values and ensure they are correct. |

| 310133 | Leaderboard is not enabled for the org |

| 310132 | Target evaluation type not supported for leaderboard, currently onlyFIXED_CALENDER_WINDOWis supported |

| 310008 | Length of Target rule name cannot exceed 200 |



`FIXED_CALENDER_WINDOW`

`Try It!`