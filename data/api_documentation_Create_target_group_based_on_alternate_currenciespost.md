# Create target group based on alternate currenciespost

Alternate currencies are a flexible reward system, functioning like points but customised to meet brand-specific needs, such as stars or custom coins. A target group based on alternate currencies tracks the alternate currencies earned by customers and rewards them upon reaching the target.

Refer to the documentation onalternate currenciesfor more information.

> 👍NoteFor detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and  step-by-step guide onmaking your first API call.

## 👍Note

Note

For detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and  step-by-step guide onmaking your first API call.

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

https://eu.api.capillarytech.com/v3/targetGroups

```
https://eu.api.capillarytech.com/v3/targetGroups
```

# Request body

```
{
    "active": true,
    "description": "alternate currency target ",
    "name": "alternatecuurency_target",
    "preferredTillId": 50155487,
    "trackingType": "DEFAULT",
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "totalPeriods": 2,
    "frequencyType": "DAILY",
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2024-10-24T23:59:00.000",
            "periodStatus": "RUNNING",
            "refCode": 1720782952,
            "startDate": "2024-10-24T00:00:00.000"
        },
        {
            "active": true,
            "description": "p2",
            "endDate": "2024-10-25T23:59:00.000",
            "periodStatus": "NOT_STARTED",
            "refCode": "firstperiod",
            "startDate": "2024-10-25T00:01:00.000"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "name": "alternatecuurency_target",
            "targetEntity": "ALTERNATE_CURRENCIES",
            "enrolmentMethod": "IMPORT",
            "targetType": "ALL",
            "defaultValues": [
                {
                    "defaultValue": 20
                },
                {
                    "defaultValue": 20
                }
            ],
            "extendedFieldInfo": {
                "alternateCurrencyIdentifier": "0nzyDx",
                "programId": 46
            }
        }
    ]
}
```

```
{
    "active": true,
    "description": "alternate currency target ",
    "name": "alternatecuurency_target",
    "preferredTillId": 50155487,
    "trackingType": "DEFAULT",
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "totalPeriods": 2,
    "frequencyType": "DAILY",
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2024-10-24T23:59:00.000",
            "periodStatus": "RUNNING",
            "refCode": 1720782952,
            "startDate": "2024-10-24T00:00:00.000"
        },
        {
            "active": true,
            "description": "p2",
            "endDate": "2024-10-25T23:59:00.000",
            "periodStatus": "NOT_STARTED",
            "refCode": "firstperiod",
            "startDate": "2024-10-25T00:01:00.000"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "name": "alternatecuurency_target",
            "targetEntity": "ALTERNATE_CURRENCIES",
            "enrolmentMethod": "IMPORT",
            "targetType": "ALL",
            "defaultValues": [
                {
                    "defaultValue": 20
                },
                {
                    "defaultValue": 20
                }
            ],
            "extendedFieldInfo": {
                "alternateCurrencyIdentifier": "0nzyDx",
                "programId": 46
            }
        }
    ]
}
```

# Request body parameters

| Parameter Name(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| active | Boolean | Indicate if target tracking is active. Default value:true |

| description | String | Brief description of the target group.The character limit for the description is 255 characters and special characters are supported. |

| name* | String | Name for the target group.The name can be up to 200 characters long, supports special characters, and is case-insensitive. |

| preferredTillId | Integer | Identifier for the preferred or primary POS till for the target.Note:All alternate currencies allocated for a milestone achievement will be tagged to the preferred till. |

| trackingType* | Enum | Type of tracking the milestone is created for. Supported values:DEFAULT: Track a single targetSTREAK: Track multiple targets as a streak.CAPPING: Track the number of points a user has got over a period, so that capping can be applied.Creating a target based on alternate currencies are not supported for unified targets.Refer to the documentation onmilestones,unified targets,streaksandcappingfor more information. |

| targetEvaluationType* | Enum | Defines the type of time frame used for evaluating the target.Supported values:FIXED_CALENDAR_WINDOW:Each cycle runs for a fixed, predefined time period (for example, one month or one year) from the selected start date.CYCLIC_WINDOW:Each cycle can have individual time periods.PERIOD_AGNOSTIC_WINDOW:: The cycle ends as soon as the user achieves the target, regardless of the time taken. There’s no set time frame for the cycle.Refer to the documentation onmilestone cyclesfor more details. |

| totalPeriods* | Integer | Total number of period cycles for the target group. |

| frequencyType* | Enum | Frequency of each cycle in which the user has to achieve the target value.Supported values:MONTHLY, QUARTERLY,HALF_YEARLY,YEARLY,WEEKLY,DAILY,CUSTOM. |

| frequency* | Integer | Number of units corresponding to the selectedfrequencyTypeFor example: IffrequencyTypeisDAILYand frequency is10, the cycle spans ten days. |

| recurringCycles* | Integer | Total number of cycles defined for the target group. Once a cycle is complete, the target is reset for the new cycle.A maximum of 100 cycles can be defined for a target group. |

| periods | Object | An object containing details on the target period creation, updates, and time-frame. |

| - active | Boolean | Indicate if the period is active. Default value:true |

| - description | String | Brief description of the period.The character limit for the description is 255 characters and special characters are supported. |

| - endDate* | String | End date and time of the period in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-10-24T23:59:00.000. |

| - periodStatus | Enum | Indicate if the cycle of the Milestone is running or upcoming.Supported values:RUNNING,UPCOMING,NOT_STARTED,LIVEandENDED. |

| - refCode* | String | A reference code for the period. |

| - startDate* | String | Start date and time of the period  in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-10-24T00:00:00.000 |

| targets | Object | An object containing details on the targets in the target group. |

| - active | Boolean | Indicate if the target is active. Default value:true |

| - description | String | Brief description of the target.The character limit for the description is 255 characters and special characters are supported. |

| - expression | Boolean | Indicate if the target has an expression for evaluation. Default value:true |

| - expressionJson | String | A JSON expression that specifies the conditions required to achieve the target. The expression is generated in the backend. |

| - filters | Object | An object containing details on the scope filters active on the target. |

| - name* | String | Name for the target.The name can be up to 200 characters long, supports special characters, and is case-insensitive. |

| - targetEntity* | Enum | KPI on which the target is tracked.For alternate currencies, the value isALTERNATE_CURRENCIES |

| - enrolmentMethod | Enum | Method of enrolment for the target. Supported values:TRANSACTIONandIMPORT. |

| - targetType* | Enum | Type of targetSupported values:ALL: Tracks points that a customer earns across a loyalty program and from a loyalty promotion.REGULAR: Track the points that a customer earns across a loyalty program. Points earned from promotions are excluded.PROMOTION: Tracks the points that a customer earns from a loyalty promotion. |

| - defaultValues | Object | An object containing details of the default values for the target. |

| -- defaultValue | Float | Default value for the target. |

| - extendedFieldInfo* | Object | An object containing details on the extended field information for the target group. |

| -- alternateCurrencyIdentifier* | String | Unique identifier of the alternate currency that is generated when creating an alternate currency. |

| -- programId* | Integer | Unique ID of the loyalty program that includes the alternate currency. |



`true`

`DEFAULT`

`STREAK`

`CAPPING`

[milestones](/docs/milestones-new-flow)

[unified targets](/docs/unified-milestones)

[streaks](/docs/streaks)

[capping](/docs/advance-capping)

`FIXED_CALENDAR_WINDOW:`

`CYCLIC_WINDOW:`

`PERIOD_AGNOSTIC_WINDOW:`

[milestone cycles](/docs/milestones-new-flow#milestone-cycle-details)

`MONTHLY, QUARTERLY`

`HALF_YEARLY`

`YEARLY`

`WEEKLY`

`DAILY`

`CUSTOM`

`frequencyType`

`frequencyType`

`DAILY`

`10`

`true`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-10-24T23:59:00.000`

`RUNNING`

`UPCOMING`

`NOT_STARTED`

`LIVE`

`ENDED`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-10-24T00:00:00.000`

`true`

`true`

`ALTERNATE_CURRENCIES`

`TRANSACTION`

`IMPORT`

`ALL`

`REGULAR`

`PROMOTION`

# Response body

```
{
    "data": {
        "id": 1635,
        "name": "alternatecuurency_target",
        "active": true,
        "preferredTillId": 50155487,
        "periods": [
            {
                "id": 9022,
                "attribution": {
                    "createdOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-24",
                "endDate": "2024-10-24",
                "refCode": "1720782952",
                "periodStatus": "ENDED",
                "targetGroupId": 1635,
                "description": "p1",
                "active": true
            },
            {
                "id": 9023,
                "attribution": {
                    "createdOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-25",
                "endDate": "2024-10-25",
                "refCode": "vbnmihffgnkji",
                "periodStatus": "ENDED",
                "targetGroupId": 1635,
                "description": "p2",
                "active": true
            }
        ],
        "totalPeriods": 2,
        "description": "streak group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-10-24T00:00:00.000Z",
        "targetCycleEndDate": "2024-10-25T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 1912,
                "attribution": {
                    "createdOn": "2024-11-22T05:07:08.885+0000",
                    "lastUpdatedOn": "2024-11-22T05:07:08.885+0000",
                    "lastUpdatedBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "name": "alternatecuurency_target",
                "targetType": "ALL",
                "targetEntity": "ALTERNATE_CURRENCIES",
                "eventName": "TransactionAdd",
                "targetGroupId": 1635,
                "description": "strnbeasdwascs9",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 11954,
                        "periodId": 9022,
                        "defaultValue": 20
                    },
                    {
                        "id": 11955,
                        "periodId": 9023,
                        "defaultValue": 20
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "9022": {
                        "id": 11954,
                        "periodId": 9022,
                        "defaultValue": 20
                    },
                    "9023": {
                        "id": 11955,
                        "periodId": 9023,
                        "defaultValue": 20
                    }
                },
                "extendedFieldInfo": {
                    "programId": 46,
                    "alternateCurrencyIdentifier": "0nzyDx"
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
        "id": 1635,
        "name": "alternatecuurency_target",
        "active": true,
        "preferredTillId": 50155487,
        "periods": [
            {
                "id": 9022,
                "attribution": {
                    "createdOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-24",
                "endDate": "2024-10-24",
                "refCode": "1720782952",
                "periodStatus": "ENDED",
                "targetGroupId": 1635,
                "description": "p1",
                "active": true
            },
            {
                "id": 9023,
                "attribution": {
                    "createdOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedOn": "2024-11-22T05:07:09.000+0000",
                    "lastUpdatedBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-10-25",
                "endDate": "2024-10-25",
                "refCode": "vbnmihffgnkji",
                "periodStatus": "ENDED",
                "targetGroupId": 1635,
                "description": "p2",
                "active": true
            }
        ],
        "totalPeriods": 2,
        "description": "streak group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-10-24T00:00:00.000Z",
        "targetCycleEndDate": "2024-10-25T23:59:59.000Z",
        "frequencyType": "DAILY",
        "trackingType": "DEFAULT",
        "targets": [
            {
                "id": 1912,
                "attribution": {
                    "createdOn": "2024-11-22T05:07:08.885+0000",
                    "lastUpdatedOn": "2024-11-22T05:07:08.885+0000",
                    "lastUpdatedBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75140757,
                        "code": "naman",
                        "description": "",
                        "name": "naman",
                        "type": "TILL"
                    }
                },
                "name": "alternatecuurency_target",
                "targetType": "ALL",
                "targetEntity": "ALTERNATE_CURRENCIES",
                "eventName": "TransactionAdd",
                "targetGroupId": 1635,
                "description": "strnbeasdwascs9",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [],
                "enrolmentMethod": "IMPORT",
                "defaultValues": [
                    {
                        "id": 11954,
                        "periodId": 9022,
                        "defaultValue": 20
                    },
                    {
                        "id": 11955,
                        "periodId": 9023,
                        "defaultValue": 20
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "9022": {
                        "id": 11954,
                        "periodId": 9022,
                        "defaultValue": 20
                    },
                    "9023": {
                        "id": 11955,
                        "periodId": 9023,
                        "defaultValue": 20
                    }
                },
                "extendedFieldInfo": {
                    "programId": 46,
                    "alternateCurrencyIdentifier": "0nzyDx"
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
    "data": null,
    "errors": [
        {
            "code": 310033,
            "message": "Invalid target entity and target type combination"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310033,
            "message": "Invalid target entity and target type combination"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310146,
            "message": "Invalid program id"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310146,
            "message": "Invalid program id"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310094,
            "message": "Target rule metadata is required in case of EXTENDED_FIELD/ALTERNATE_CURRENCIES target type"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310094,
            "message": "Target rule metadata is required in case of EXTENDED_FIELD/ALTERNATE_CURRENCIES target type"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310147,
            "message": "Invalid or null Alternate Currency Identifier for target rule"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 310147,
            "message": "Invalid or null Alternate Currency Identifier for target rule"
        }
    ],
    "warnings": null
}
```

# Response parameters

| Parameters | DataType | Description |

| --- | --- | --- |

| id | Integer | Unique ID of the target group. |

| name | String | Unique name of the target group. |

| active | Boolean | Indicates if target tracking is active. |

| preferredTillId | Integer | Identifier for the preferred or primary POS till for the target.Note:All alternate currencies allocated for a milestone achievement will be tagged to the preferred till. |

| periods | Object | An object containing details on target creation, updates, and time-frame. |

| - id | Integer | Unique ID of the target period. |

| - attribution | Object | An object containing details on the creation and update details of the target period. |

| -- createdOn | String | Date the target period was created in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-12-10T11:49:28.972+0000 |

| --lastUpdatedOn | String | Date the target period was last updated in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-12-10T11:49:28.972+0000 |

| --lastUpdatedBy | Object | An object containing details on the updates to the target period. |

| ---id | Integer | Unique ID of the user who last modified the target period. |

| ---code | String | Code of the user who last modified the target period. |

| ---description | String | Description of the user who last modified the target period. |

| ---name | String | Name of the user who last modified the target period. |

| ---type | String | Type of user who last modified the target period. |

| - startDate | String | Start date of the target group, inYYYY-MM-DDformat. Example:2024-10-24 |

| - endDate | String | End date of the target group, inYYYY-MM-DDformat. Example:2024-10-24 |

| - refCode | Integer | Reference code of the target period. This is a custom identifier that can be used to identify a target. You can use any custom string as therefCode |

| - periodStatus | Enum | Current status of the target period. Supported valuesRUNNING,UPCOMING,NOT_STARTED,LIVEandENDED. |

| - targetGroupId | Integer | Unique ID of the target group. |

| - description | String | Description of the target group. |

| - active | Boolean | Current status of the target period. If true, the target is currently active, else the target is inactive. |

| totalPeriods | Integer | Total number of periods for the target group. |

| description | String | Description of the target period. |

| targetEvaluationType | Enum | Defines the type of time frame used for evaluating the target. Supported values:FIXED_CALENDAR_WINDOW,CYCLIC_WINDOWandPERIOD_AGNOSTIC_WINDOW. |

| recurringCycles | Integer | Total number of cycles defined for the target group. Once a cycle is complete, the target is reset for the new cycle.A maximum of 100 cycles can be defined for a target group. |

| frequency | Integer | Number of units corresponding to the selectedfrequencyType |

| targetCycleStartDate | String | Start date of the target cycle in  ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-10-24T00:00:00.000Z. |

| targetCycleEndDate | String | End date of the target cycle in  ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-10-25T23:59:59.000Z. |

| frequencyType | Enum | Frequency of each cycle in which the user has to achieve the target value.Supported values:MONTHLY, QUARTERLY,HALF_YEARLY,YEARLY,WEEKLY,DAILY,CUSTOM. |

| trackingType | Enum | Fype of tracking the milestone is created for. Supported values:DEFAULT,STREAK,CAPPING |

| targets | Object | An object containing details on the targets in the target group. |

| - id | Integer | Unique ID of the target. |

| - attribution | Object | An object containing details on the creation and update details of the target. |

| -- createdOn | String | Date the target was created in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-12-10T11:49:28.972+0000. |

| -- lastUpdatedOn | String | Date the target was last updated in ISO 8601YYYY-MM-DDTHH:mm:ss.SSSformat. Example:2024-12-10T11:49:28.972+0000. |

| -- lastUpdatedBy | Object | An object containing details on updates to the target. |

| --- id | Integer | Unique ID of the user who last modified the target. |

| --- code | String | Code of the user who last modified the target. |

| --- description | String | Description of the user who last modified the target. |

| --- name | String | Name of the user who last modified the target. |

| --- type | String | Type of user who last modified the target. |

| -- createdBy | Object | An object containing details on creation of the target. |

| --- id | Integer | Unique ID of the user who created the target . |

| --- code | String | Code of the user who created the target. |

| --- description | String | Description of the user who created the target. |

| --- name | String | Name of the user who created the target. |

| --- type | String | Type of user who created the target. |

| - name | String | Unique name for the target. |

| - targetType | Enum | Type of targetSupported values:ALL: Tracks points that a customer earns across a loyalty program and from a loyalty promotion.REGULAR: Track the points that a customer earns across a loyalty program. Points earned from promotions are excluded.PROMOTION: Tracks the points that a customer earns from a loyalty promotion. |

| - targetEntity | Enum | KPI on which the target is tracked.For alternate currencies, the value isALTERNATE_CURRENCIES |

| - eventName | String | Name of the event that triggers the target. |

| - targetGroupId | Integer | Unique ID of the target group associated with the target. |

| - description | String | Description of the target. |

| - active | Boolean | Current status of the target. If true, the target is currently active, else the target is inactive. |

| - expression | Boolean | Indicates if the target has an expression for evaluation. |

| - expressionJson | String | A JSON expression that specifies the conditions required to achieve the target. |

| - filters | Object | An object containing details on the scope filters active on the target. |

| - enrolmentMethod | Enum | Method of enrolment for the target. Supported values:TRANSACTIONandIMPORT. |

| - defaultValues | Object | An object containing details on the default values for the target. |

| -- id | Integer | Unique ID of the default value. |

| -- periodId | Integer | Unique ID of the period. |

| -- defaultValue | Float | Default value for the period. |

| - targetPeriodDefaultValuesMap | Object | An object containing details on the mapping of default values for the target period. |

| -- id | Integer | Unique ID of the default value. |

| -- periodId | Integer | Unique ID of the period. |

| -- defaultValue | Float | Default value for the period. |

| - extendedFieldInfo | Object | Details on extended field information for the target group. |

| -- programId | Integer | Unique ID of the loyalty program. |

| -- alternateCurrencyIdentifier | String | Unique ID of the alternate currency that is generated while creating an alternate currency. |

| leaderboardEnabled | Boolean | Indicates ifleaderboardtracking in enabled for the target group. |

| userCreated | Boolean | Indicates if the target is auser-createdtarget. |

| errors | Object | An object containing details on errors if any occurred during the API request. |

| warnings | Object | An object containing details on warnings if any occurred during the API request. |



`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-12-10T11:49:28.972+0000`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-12-10T11:49:28.972+0000`

`YYYY-MM-DD`

`2024-10-24`

`YYYY-MM-DD`

`2024-10-24`

`refCode`

`RUNNING`

`UPCOMING`

`NOT_STARTED`

`LIVE`

`ENDED`

`FIXED_CALENDAR_WINDOW`

`CYCLIC_WINDOW`

`PERIOD_AGNOSTIC_WINDOW`

`frequencyType`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-10-24T00:00:00.000Z`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-10-25T23:59:59.000Z`

`MONTHLY, QUARTERLY`

`HALF_YEARLY`

`YEARLY`

`WEEKLY`

`DAILY`

`CUSTOM`

`DEFAULT`

`STREAK`

`CAPPING`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-12-10T11:49:28.972+0000`

`YYYY-MM-DDTHH:mm:ss.SSS`

`2024-12-10T11:49:28.972+0000`

`ALL`

`REGULAR`

`PROMOTION`

`ALTERNATE_CURRENCIES`

`TRANSACTION`

`IMPORT`

[leaderboard](/reference/leaderboards)

[user-created](/reference/user-created-challenges)

# API error codes

| Code | Description |

| --- | --- |

| 310069 | Target group name already exists |

| 300004 | Invalid input, check all values and ensure they are correct. |

| 310008 | Length of Target rule name cannot exceed 200 |

| 310033 | Invalid target entity and target type combination |

| 310146 | Invalid program id |

| 310094 | Target rule metadata is required in case of EXTENDED_FIELD/ALTERNATE_CURRENCIES target type |

| 310147 | Invalid or null Alternate Currency Identifier for target rule |



`Try It!`