# Update target groupput

This API allows you to update the target group.

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

| URI | v3/targetGroups |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/v3/targetGroups/editTargetGroup/{targetGroupId}

```
https://eucrm.cc.capillarytech.com/v3/targetGroups/editTargetGroup/{targetGroupId}
```

# Request path parameters

| Parameter | Description |

| --- | --- |

| targetGroupId | Identifier for the target group |



# Request body parameters

> ❗️AttentionOnly milestone name, expression and JSON expression parameters are editable.

## ❗️Attention

Attention

Only milestone name, expression and JSON expression parameters are editable.

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique target group identifier for the non-cont-streakTest13. |

| name | String | Name of the target group.The character limit for the name is 200 characters. |

| fromDate | Date | Start date of the target group's active period. |

| toDate | Date | End date of the target group's active period. |

| active | Boolean | Status indicating if the target group is currently active. |

| preferredTillId | Integer | A reference ID for internal use, possibly related to prioritization. |

| periods | Array | A collection of periods within the target group. |

| -- id | Integer | Unique identifier for each period. |

| -- startDate | Date | Start date of the period. |

| -- endDate | Date | End date of the period. |

| -- refCode | String | A reference code for the period. |

| -- periodStatus | Enum | Indicates if the cycle of the Milestone is active/inactive.Supported values: NOT_STARTED, RUNNING. |

| -- targetGroupId | Integer | ID of the target group to which the period belongs. |

| -- description | String | Description of the period. |

| -- active | Boolean | Status indicating if the period is currently active. |

| streaks | Array | A collection of streaks within the target group. |

| -- id | Integer | Unique identifier for each streak. |

| -- targetGroupId | Integer | ID of the target group to which the streak belongs. |

| -- name | String | Name of the streak. |

| -- targetCountOfSequence | Integer | Number of the times the user has to achieve the target to redeem the reward. |

| totalPeriods | Integer | The total number of periods over which the tracking is evaluated. |

| description | String | Description of the non-cont-streaks group. |

| targetEvaluationType | String | The evaluation strategy for the targets. Supported values:FIXED_CALENDAR_WINDOW, CYCLIC_WINDOW,PERIOD_AGNOSTIC_WINDOW |

| recurringCycles | Integer | Number of recurring cycles. |

| frequency | Integer | Frequency of occurrence. |

| targetCycleStartDate | DateTime | Start date and time of the target cycle. |

| targetCycleEndDate | DateTime | End date and time of the target cycle. |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values:Default (single target tracking),Unified (tracking multiple targets as a unit),Streak  (Tracking the achievement of a user across the cycles continuously),Capping  (Tracking the number of points a user has got over a period, so that capping can be applied). |

| targets | Array | A collection of targets within the target group. |

| -- id | Integer | Unique identifier for each target. |

| -- name | String | Name of the target. |

| -- emfRuleSetId | Integer | Rule set ID associated with the target. |

| -- targetType | Enum | The type of target.Supported values: QUANTITY, SALES, COUNT, VISIT, GROSS_SALES,REGULAR_POINTS, PROMOTIONAL_POINTS,ALL_POINTS, EXTENDED_FIELD. |

| -- targetEntity | Enum | The KPI on which the target is tracked.For the transactional KPIs, the supported value for this are Transaction and Lineitem.For the Behavioural or EMF events, the supported value is EVENT.For the tracking based on rewards such as points, the supported value will be REWARDS. |

| -- eventName | String | The behavioral name of the event that triggers the target. |

| -- targetGroupId | Integer | ID of the target group to which the target belongs. |

| -- description | String | Description of the target. |

| -- expression | String | Expression defining the target condition. |

| -- expressionJson | JSON | JSON format of the expression defining the target condition. |

| -- filters | Array | Filters applied to the target. |

| -- enrolmentMethod | String | Method of enrolment for the target. |

| -- defaultValues | Array | Default values associated with periods for the target. |

| -- -- id | Integer | Unique identifier for each default value. |

| -- -- periodId | Integer | ID of the period to which the default value belongs. |

| -- -- defaultValue | Decimal | Default value for the period. |



```
{
        "id": 18044,
        "name": "non-cont-streakTest13",
        "fromDate": "2024-02-19",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50698511,
        "periods": [
            {
                "id": 22057,
                "startDate": "2024-02-19",
                "endDate": "2024-11-17",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            },
            {
                "id": 22058,
                "startDate": "2024-11-18",
                "endDate": "2024-11-20",
                "refCode": "period45",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            }
        ],
        "streaks": [
            {
                "id": 1415,
                "targetGroupId": 18044,
                "name": "streakTest13test124",
                "targetCountOfSequence": 1
            },
            {
                "id": 1416,
                "targetGroupId": 18044,
                "name": "streakTestt13",
                "targetCountOfSequence": 2
            }
        ],
        "totalPeriods": 1,
        "description": "non-cont-streaks group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-02-19T00:00:00.000Z",
        "targetCycleEndDate": "2024-11-20T23:59:59.000Z",
        "trackingType": "NON_CONTINUOUS_STREAKS",
        "targets": [
            {
                "id": 33502,
                "name": "streaksnoncontTarget13",
                "emfRuleSetId": 1279391,
                "targetType": "COUNT",
                "targetEntity": "TRANSACTION",
                "eventName": "TransactionAdd",
                "targetGroupId": 18044,
                "description": "string",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 39359,
                        "periodId": 22057,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 39360,
                        "periodId": 22058,
                        "defaultValue": 1.000
                    }
                ]
            }
        ]
    
}
```

```
{
        "id": 18044,
        "name": "non-cont-streakTest13",
        "fromDate": "2024-02-19",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50698511,
        "periods": [
            {
                "id": 22057,
                "startDate": "2024-02-19",
                "endDate": "2024-11-17",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            },
            {
                "id": 22058,
                "startDate": "2024-11-18",
                "endDate": "2024-11-20",
                "refCode": "period45",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            }
        ],
        "streaks": [
            {
                "id": 1415,
                "targetGroupId": 18044,
                "name": "streakTest13test124",
                "targetCountOfSequence": 1
            },
            {
                "id": 1416,
                "targetGroupId": 18044,
                "name": "streakTestt13",
                "targetCountOfSequence": 2
            }
        ],
        "totalPeriods": 1,
        "description": "non-cont-streaks group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-02-19T00:00:00.000Z",
        "targetCycleEndDate": "2024-11-20T23:59:59.000Z",
        "trackingType": "NON_CONTINUOUS_STREAKS",
        "targets": [
            {
                "id": 33502,
                "name": "streaksnoncontTarget13",
                "emfRuleSetId": 1279391,
                "targetType": "COUNT",
                "targetEntity": "TRANSACTION",
                "eventName": "TransactionAdd",
                "targetGroupId": 18044,
                "description": "string",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 39359,
                        "periodId": 22057,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 39360,
                        "periodId": 22058,
                        "defaultValue": 1.000
                    }
                ]
            }
        ]
    
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the non-cont-streakTest13. |

| attribution.createdOn | String | The creation date and time of the target group. |

| attribution.lastUpdatedOn | String | The last update date and time of the target group. |

| attribution.lastUpdatedBy.id | Integer | The ID of the last user who updated the target group. |

| attribution.createdBy.id | Integer | The ID of the user who created the target group. |

| name | String | Name of the target group. |

| fromDate | Date | Start date of the target group's active period. |

| toDate | Date | End date of the target group's active period. |

| active | Boolean | Status indicating if the target group is currently active. |

| preferredTillId | Integer | A reference ID for internal use, possibly related to prioritization. |

| periods | Array | A collection of periods within the target group. |

| -- id | Integer | Unique identifier for each period. |

| -- startDate | Date | Start date of the period. |

| -- endDate | Date | End date of the period. |

| -- refCode | String | Reference code for the period. |

| -- periodStatus | String | Status of the period (e.g., RUNNING, NOT_STARTED). |

| -- targetGroupId | Integer | ID of the target group to which the period belongs. |

| -- description | String | Description of the period. |

| -- active | Boolean | Status indicating if the period is currently active. |

| streaks | Array | A collection of streaks within the target group. |

| -- id | Integer | Unique identifier for each streak. |

| -- targetGroupId | Integer | ID of the target group to which the streak belongs. |

| -- name | String | Name of the streak. |

| -- targetCountOfSequence | Integer | Target count of sequences for the streak. |

| activePeriod.id | Integer | The ID of the currently active period. |

| totalPeriods | Integer | Total number of periods in the target group. |

| description | String | Description of the non-cont-streaks group. |

| targetEvaluationType | String | Type of target evaluation (e.g., FIXED_CALENDAR_WINDOW). |

| recurringCycles | Integer | Number of recurring cycles. |

| frequency | Integer | Frequency of occurrence. |

| targetCycleStartDate | DateTime | Start date and time of the target cycle. |

| targetCycleEndDate | DateTime | End date and time of the target cycle. |

| frequencyType | String | Type of frequency (e.g., CUSTOM). |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values:Default (single target tracking),Unified (tracking multiple targets as a unit),Streak  (Tracking the achievement of a user across the cycles continuously),Capping  (Tracking the number of points a user has got over a period, so that capping can be applied). |

| createdOn | Long | The creation timestamp of the data in milliseconds since epoch. |

| targets | Array | A collection of targets within the target group. |

| -- id | Integer | Unique identifier for each target. |

| -- name | String | Name of the target. |

| -- emfRuleSetId | Integer | Rule set ID associated with the target. |

| -- targetType | Enum | The type of target.Supported values: QUANTITY, SALES, COUNT, VISIT, GROSS_SALES,REGULAR_POINTS, PROMOTIONAL_POINTS,ALL_POINTS, EXTENDED_FIELD. |

| -- targetEntity | Enum | The KPI on which the target is tracked.For the transactional KPIs, the supported value for this are Transaction and Lineitem.For the Behavioural or EMF events, the supported value is EVENT.For the tracking based on rewards such as points, the supported value will be REWARDS. |

| -- eventName | String | Event name associated with the target. |

| -- targetGroupId | Integer | ID of the target group to which the target belongs. |

| -- description | String | Description of the target. |

| -- expression | String | Expression defining the target condition. |

| -- expressionJson | JSON | JSON format of the expression defining the target condition. |

| -- filters | Array | Filters applied to the target. |

| -- enrolmentMethod | String | Method of enrolment for the target. |

| -- defaultValues | Array | Default values associated with periods for the target. |

| -- -- id | Integer | Unique identifier for each default value. |

| -- -- periodId | Integer | ID of the period to which the default value belongs. |

| -- -- defaultValue | Integer | Default value for the period. |



```
{
    "data": {
        "id": 18044,
        "attribution": {
            "createdOn": "2024-04-01T16:04:29.145+0530",
            "lastUpdatedOn": "2024-04-01T16:04:29.145+0530",
            "lastUpdatedBy": {
                "id": 50698511,
                "code": null,
                "description": null,
                "name": null,
                "type": null
            },
            "createdBy": {
                "id": 50698511,
                "code": null,
                "description": null,
                "name": null,
                "type": null
            }
        },
        "name": "non-cont-streakTest13",
        "fromDate": "2024-02-19",
        "toDate": "2024-11-20",
        "active": true,
        "preferredTillId": 50698511,
        "periods": [
            {
                "id": 22057,
                "attribution": {
                    "createdOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-02-19",
                "endDate": "2024-11-17",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            },
            {
                "id": 22058,
                "attribution": {
                    "createdOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-11-18",
                "endDate": "2024-11-20",
                "refCode": "period45",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            }
        ],
        "streaks": [
            {
                "id": 1415,
                "attribution": {
                    "createdOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "targetGroupId": 18044,
                "name": "streakTest13test124",
                "targetCountOfSequence": 1
            },
            {
                "id": 1416,
                "attribution": {
                    "createdOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "targetGroupId": 18044,
                "name": "streakTestt13",
                "targetCountOfSequence": 2
            }
        ],
        "activePeriod": {
            "id": 22057,
            "attribution": {
                "createdOn": "2024-02-19T15:41:53.000+0530",
                "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                "lastUpdatedBy": {
                    "id": 50698511,
                    "code": "tillrulocaldemonightly1",
                    "description": "",
                    "name": "tillrulocaldemonightly1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50698511,
                    "code": "tillrulocaldemonightly1",
                    "description": "",
                    "name": "tillrulocaldemonightly1",
                    "type": "TILL"
                }
            },
            "startDate": "2024-02-19",
            "endDate": "2024-11-17",
            "refCode": "period44",
            "periodStatus": "RUNNING",
            "targetGroupId": 18044,
            "description": "p1",
            "active": true
        },
        "totalPeriods": 2,
        "description": "non-cont-streaks group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-02-19T00:00:00.000Z",
        "targetCycleEndDate": "2024-11-20T23:59:59.000Z",
        "frequencyType": "CUSTOM",
        "trackingType": "NON_CONTINUOUS_STREAKS",
        "createdOn": 1711967626000,
        "targets": [
            {
                "id": 33502,
                "attribution": {
                    "createdOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "name": "streaksnoncontTarget13",
                "emfRuleSetId": 1279391,
                "targetType": "COUNT",
                "targetEntity": "TRANSACTION",
                "eventName": "TransactionAdd",
                "targetGroupId": 18044,
                "description": "string",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 39359,
                        "periodId": 22057,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 39360,
                        "periodId": 22058,
                        "defaultValue": 1.000
                    }
                ]
            }
        ]
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 18044,
        "attribution": {
            "createdOn": "2024-04-01T16:04:29.145+0530",
            "lastUpdatedOn": "2024-04-01T16:04:29.145+0530",
            "lastUpdatedBy": {
                "id": 50698511,
                "code": null,
                "description": null,
                "name": null,
                "type": null
            },
            "createdBy": {
                "id": 50698511,
                "code": null,
                "description": null,
                "name": null,
                "type": null
            }
        },
        "name": "non-cont-streakTest13",
        "fromDate": "2024-02-19",
        "toDate": "2024-11-20",
        "active": true,
        "preferredTillId": 50698511,
        "periods": [
            {
                "id": 22057,
                "attribution": {
                    "createdOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-02-19",
                "endDate": "2024-11-17",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            },
            {
                "id": 22058,
                "attribution": {
                    "createdOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-11-18",
                "endDate": "2024-11-20",
                "refCode": "period45",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 18044,
                "description": "p1",
                "active": true
            }
        ],
        "streaks": [
            {
                "id": 1415,
                "attribution": {
                    "createdOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "targetGroupId": 18044,
                "name": "streakTest13test124",
                "targetCountOfSequence": 1
            },
            {
                "id": 1416,
                "attribution": {
                    "createdOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedOn": "2024-04-01T16:04:29.145+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "targetGroupId": 18044,
                "name": "streakTestt13",
                "targetCountOfSequence": 2
            }
        ],
        "activePeriod": {
            "id": 22057,
            "attribution": {
                "createdOn": "2024-02-19T15:41:53.000+0530",
                "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                "lastUpdatedBy": {
                    "id": 50698511,
                    "code": "tillrulocaldemonightly1",
                    "description": "",
                    "name": "tillrulocaldemonightly1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50698511,
                    "code": "tillrulocaldemonightly1",
                    "description": "",
                    "name": "tillrulocaldemonightly1",
                    "type": "TILL"
                }
            },
            "startDate": "2024-02-19",
            "endDate": "2024-11-17",
            "refCode": "period44",
            "periodStatus": "RUNNING",
            "targetGroupId": 18044,
            "description": "p1",
            "active": true
        },
        "totalPeriods": 2,
        "description": "non-cont-streaks group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-02-19T00:00:00.000Z",
        "targetCycleEndDate": "2024-11-20T23:59:59.000Z",
        "frequencyType": "CUSTOM",
        "trackingType": "NON_CONTINUOUS_STREAKS",
        "createdOn": 1711967626000,
        "targets": [
            {
                "id": 33502,
                "attribution": {
                    "createdOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedOn": "2024-02-19T15:41:53.000+0530",
                    "lastUpdatedBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50698511,
                        "code": "tillrulocaldemonightly1",
                        "description": "",
                        "name": "tillrulocaldemonightly1",
                        "type": "TILL"
                    }
                },
                "name": "streaksnoncontTarget13",
                "emfRuleSetId": 1279391,
                "targetType": "COUNT",
                "targetEntity": "TRANSACTION",
                "eventName": "TransactionAdd",
                "targetGroupId": 18044,
                "description": "string",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 39359,
                        "periodId": 22057,
                        "defaultValue": 1.000
                    },
                    {
                        "id": 39360,
                        "periodId": 22058,
                        "defaultValue": 1.000
                    }
                ]
            }
        ]
    },
    "errors": null,
    "warnings": null
}
```

`Try It!`