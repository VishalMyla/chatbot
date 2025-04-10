# Get target groups based on IDget

This API fetches target group information. Enter a target group ID to get details of a specific target.

# API endpoint example

'https://eu.api.capillarytech.com/v3/targetGroups?includeUserCreatedTargetGroups=true&includeOnlyActive=true

```
'https://eu.api.capillarytech.com/v3/targetGroups?includeUserCreatedTargetGroups=true&includeOnlyActive=true
```

# Prerequisites

- Basic or OAuth authentication

- Default access group

# API Specification

|  |  |

| --- | --- |

| URI | v3/targetGroups |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# Request path parameters

| Parameter Name | DataType | Description |

| --- | --- | --- |

| targetGroupId | Long | Group ID of the target to retrieve |



# Request query parameters

| Parameter Name | DataType | Description |

| --- | --- | --- |

| includePeriods | Boolean | Include the period information associated with the target.The period object contains information on the start date, end date and current status of the target. |

| includeUserCreatedTargetGroups | Boolean | Include theuser createdtarget groups in the response. This value is false by default. |

| includeOnlyActive | Boolean | Include only targets that are currently active. |



[user created](/reference/user-created-challenges)

# Response body

```
{
    "data": {
        "id": 20,
        "attribution": {
            "createdOn": "2021-11-17T06:02:54.000+0000",
            "lastUpdatedOn": "2021-11-17T06:02:54.000+0000",
            "lastUpdatedBy": {
                "id": 75047814,
                "code": "1614748040_",
                "description": "",
                "name": "Tom Sawyer",
                "type": "ADMIN_USER"
            },
            "createdBy": {
                "id": 75047814,
                "code": "1614748040_",
                "description": "",
                "name": "Tom Sawyer",
                "type": "ADMIN_USER"
            }
        },
        "name": "Demo Targets",
        "fromDate": "2021-11-18",
        "toDate": "2022-01-17",
        "active": true,
        "preferredTillId": 75043577,
        "totalPeriods": 2,
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": -1,
        "frequency": 0,
        "frequencyType": "MONTHLY"
    },
    "errors": null
}
```

```
{
    "data": {
        "id": 20,
        "attribution": {
            "createdOn": "2021-11-17T06:02:54.000+0000",
            "lastUpdatedOn": "2021-11-17T06:02:54.000+0000",
            "lastUpdatedBy": {
                "id": 75047814,
                "code": "1614748040_",
                "description": "",
                "name": "Tom Sawyer",
                "type": "ADMIN_USER"
            },
            "createdBy": {
                "id": 75047814,
                "code": "1614748040_",
                "description": "",
                "name": "Tom Sawyer",
                "type": "ADMIN_USER"
            }
        },
        "name": "Demo Targets",
        "fromDate": "2021-11-18",
        "toDate": "2022-01-17",
        "active": true,
        "preferredTillId": 75043577,
        "totalPeriods": 2,
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": -1,
        "frequency": 0,
        "frequencyType": "MONTHLY"
    },
    "errors": null
}
```

```
{
    "data": [
        {
            "id": 39536,
            "attribution": {
                "createdOn": "2024-08-26T13:08:58.000+0530",
                "lastUpdatedOn": "2024-08-26T13:08:58.000+0530",
                "lastUpdatedBy": {
                    "id": 50691660,
                    "code": "adm01",
                    "description": "",
                    "name": "adm01",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50691660,
                    "code": "adm01",
                    "description": "",
                    "name": "adm01",
                    "type": "TILL"
                }
            },
            "name": "Fixed Window Milestone Group 1724657937",
            "active": true,
            "preferredTillId": 50692189,
            "activePeriod": {
                "id": 55434,
                "attribution": {
                    "createdOn": "2024-08-26T12:50:11.000+0530",
                    "lastUpdatedOn": "2024-08-26T12:50:11.000+0530",
                    "lastUpdatedBy": {
                        "id": 50691660,
                        "code": "adm01",
                        "description": "",
                        "name": "adm01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50691660,
                        "code": "adm01",
                        "description": "",
                        "name": "adm01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-08-20",
                "endDate": "2024-09-19",
                "refCode": "TP1",
                "periodStatus": "RUNNING",
                "targetGroupId": 39536,
                "active": true
            },
            "totalPeriods": 2,
            "description": "test via postman",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-08-20T08:42:01.000Z",
            "targetCycleEndDate": "2024-10-20T08:42:01.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1724657938000,
            "targets": [
                {
                    "id": 71087,
                    "attribution": {
                        "createdOn": "2024-08-26T12:50:11.000+0530",
                        "lastUpdatedOn": "2024-08-26T12:50:11.000+0530",
                        "lastUpdatedBy": {
                            "id": 50691660,
                            "code": "adm01",
                            "description": "",
                            "name": "adm01",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50691660,
                            "code": "adm01",
                            "description": "",
                            "name": "adm01",
                            "type": "TILL"
                        }
                    },
                    "name": "target-2024-08-26T07:20:09.894Z",
                    "emfRuleSetId": 1334912,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 39536,
                    "description": "targetf",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 96664,
                            "periodId": 55434,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 96665,
                            "periodId": 55435,
                            "defaultValue": 500.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "55434": {
                            "id": 96664,
                            "periodId": 55434,
                            "defaultValue": 500.000
                        },
                        "55435": {
                            "id": 96665,
                            "periodId": 55435,
                            "defaultValue": 500.000
                        }
                    },
                    "extendedFieldInfo": {
                        "name": "cartId",
                        "aggregateFunction": "SUM",
                        "aggregateWindow": null
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "userCreated": true
        }
  ],
    "errors": null,
    "warnings": null
}
```

```
{
    "data": [
        {
            "id": 39536,
            "attribution": {
                "createdOn": "2024-08-26T13:08:58.000+0530",
                "lastUpdatedOn": "2024-08-26T13:08:58.000+0530",
                "lastUpdatedBy": {
                    "id": 50691660,
                    "code": "adm01",
                    "description": "",
                    "name": "adm01",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50691660,
                    "code": "adm01",
                    "description": "",
                    "name": "adm01",
                    "type": "TILL"
                }
            },
            "name": "Fixed Window Milestone Group 1724657937",
            "active": true,
            "preferredTillId": 50692189,
            "activePeriod": {
                "id": 55434,
                "attribution": {
                    "createdOn": "2024-08-26T12:50:11.000+0530",
                    "lastUpdatedOn": "2024-08-26T12:50:11.000+0530",
                    "lastUpdatedBy": {
                        "id": 50691660,
                        "code": "adm01",
                        "description": "",
                        "name": "adm01",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50691660,
                        "code": "adm01",
                        "description": "",
                        "name": "adm01",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-08-20",
                "endDate": "2024-09-19",
                "refCode": "TP1",
                "periodStatus": "RUNNING",
                "targetGroupId": 39536,
                "active": true
            },
            "totalPeriods": 2,
            "description": "test via postman",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-08-20T08:42:01.000Z",
            "targetCycleEndDate": "2024-10-20T08:42:01.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1724657938000,
            "targets": [
                {
                    "id": 71087,
                    "attribution": {
                        "createdOn": "2024-08-26T12:50:11.000+0530",
                        "lastUpdatedOn": "2024-08-26T12:50:11.000+0530",
                        "lastUpdatedBy": {
                            "id": 50691660,
                            "code": "adm01",
                            "description": "",
                            "name": "adm01",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50691660,
                            "code": "adm01",
                            "description": "",
                            "name": "adm01",
                            "type": "TILL"
                        }
                    },
                    "name": "target-2024-08-26T07:20:09.894Z",
                    "emfRuleSetId": 1334912,
                    "targetType": "COUNT",
                    "targetEntity": "EVENT",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 39536,
                    "description": "targetf",
                    "active": true,
                    "expression": "true",
                    "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 96664,
                            "periodId": 55434,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 96665,
                            "periodId": 55435,
                            "defaultValue": 500.000
                        }
                    ],
                    "targetPeriodDefaultValuesMap": {
                        "55434": {
                            "id": 96664,
                            "periodId": 55434,
                            "defaultValue": 500.000
                        },
                        "55435": {
                            "id": 96665,
                            "periodId": 55435,
                            "defaultValue": 500.000
                        }
                    },
                    "extendedFieldInfo": {
                        "name": "cartId",
                        "aggregateFunction": "SUM",
                        "aggregateWindow": null
                    },
                    "targetMilestoneTriggers": []
                }
            ],
            "userCreated": true
        }
  ],
    "errors": null,
    "warnings": null
}
```

# Response parameters

### API Documentation

| Field | Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the milestone. |

| createdOn | String | The creation date and time of the target group (ISO 8601 format). |

| lastUpdatedOn | String | The last update date and time of the target group (ISO 8601 format). |

| lastUpdatedBy | Object | Define this object first: |

| -id | Integer | The ID of the last user who updated the target group. |

| -code | String | The code associated with the user. |

| createdBy | Object | Define this object first: |

| -id | Integer | The ID of the user who created the target group. |

| -code | String | The code associated with the user |

| name | String | Name of the target group. |

| fromDate | Date | Start date of the target group's active period (Format:yyyy-MM-dd). |

| toDate | Date | End date of the target group's active period (Format:yyyy-MM-dd). |

| active | Boolean | Status indicating if the target group is currently active. |

| preferredTillId | Integer | A reference ID for internal use, possibly related to prioritization. |

| activePeriod | Object | Define this object first: |

| -id | Integer | The ID of the currently active period. |

| -startDate | Date | Start date of the active period (Format:yyyy-MM-dd). |

| -endDate | Date | End date of the active period (Format:yyyy-MM-dd). |

| -createdOn | String | The creation date and time of the period (ISO 8601 format). |

| -lastUpdatedOn | String | The last update date and time of the period (ISO 8601 format). |

| -lastUpdatedBy | Object | Define this object first: |

| -id | Integer | The ID of the last user who updated the period. |

| -code | String | The code of the last user who updated the period. |

| -createdBy | Object | Define this object first: |

| -id | Integer | The ID of the user who created the period. |

| -code | String | The code of the last user who created the period. |

| totalPeriods | Integer | The total number of periods over which the tracking is evaluated. |

| description | String | Description of the non-continuous-streaks group. |

| targetEvaluationType | String | The evaluation strategy for the targets. Supported values: FIXED_CALENDAR_WINDOW, CYCLIC_WINDOW, PERIOD_AGNOSTIC_WINDOW. |

| recurringCycles | Integer | Number of recurring cycles. |

| frequency | Integer | The frequency count, relevant to the frequencyType. |

| targetCycleStartDate | DateTime | Start date and time of the target cycle (ISO 8601 format). |

| targetCycleEndDate | DateTime | End date and time of the target cycle (ISO 8601 format). |

| frequencyType | Enum | The frequency of each cycle in which the user has to achieve the target value. Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly. |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values: Default (single target tracking), Unified (tracking multiple targets as a unit), Streak (Tracking the achievement of a user across the cycles continuously), Capping (Tracking the number of points a user has got over a period, so that capping can be applied). |

| targets | Array | A collection of targets within the target group. |

| -id | Integer | Unique identifier for each target. |

| -name | String | Name of the target. |

| -emfRuleSetId | Integer | Rule set ID associated with the target. |

| -targetType | Enum | Type of target (e.g., COUNT). |

| -targetEntity | Enum | Entity of the target. Supported values: CUSTOMER, TRANSACTIONS, STORE, PRODUCT, BEHAVIOURAL EVENTS |

| -eventName | String | Event name associated with the target. |

| -targetGroupId | Integer | ID of the target group to which the target belongs. |

| -description | String | Description of the target. |

| -expression | String | Expression defining the target condition. |

| -expressionJson | JSON | JSON format of the expression defining the target condition. |

| -defaultValues | Array | Default values associated with periods for the target. |

| -id | Integer | Unique identifier for each default value. |

| -periodId | Integer | ID of the period to which the default value belongs. |

| -defaultValue | Decimal | Default value of the period. |

| extendedFieldInfo | Object | Information related to extended fields. |

| userCreated | Boolean | Whether the target group is user created. |

| errors | Object | Errors, if any. |

| warnings | Object | Warnings, if any. |



`yyyy-MM-dd`

`yyyy-MM-dd`

`yyyy-MM-dd`

`yyyy-MM-dd`

`Try It!`