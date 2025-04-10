# Edit streakput

A streak refers to a consecutive series of actions or engagements by a customer, based on which loyalty benefits are provided.

Only the target-related part of the streak can be edited once the streak is created. The target-group-related section and the period-related section are not editable once created. So, to edit a create, first the target-group ID & the target ID needs to be figured out.

Then, by using the update target API, we can edit the following components of the streak.

1. expression

2. expressionJson

3. filters (scope filters & rule filters)

4. defaultValues

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

| URI | v3/targetGroups/{groupId}/targets/{targetIdd} |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/v3/targetGroups/{groupId}/targets/{targetIdd}

```
https://eucrm.cc.capillarytech.com/v3/targetGroups/{groupId}/targets/{targetIdd}
```

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| active | Boolean | Indicates if the tracking is active or not. |

| description | String | A brief description of the target group. |

| name | String | The name identifier for the target group.The character limit for the name is 200 characters. |

| preferredTillId | Number | Identifier for a preferred till. |

| trackingType | String | The type of tracking the milestone is created for. Supported values:- Default (single target tracking),- Unified (tracking multiple targets as a unit),- Streak  (Tracking the achievement of a user across the cycles continuously),- Capping  (Tracking the number of points a user has got over a period, so that capping can be applied). |

| targetEvaluationType | String | The evaluation strategy for the targets. Supported values:FIXED_CALENDAR_WINDOW - Each cycle runs for a defined period from the selected start dateCYCLIC_WINDOW - Cycle starts after customer's 1st transaction post enrolmentPERIOD_AGNOSTIC_WINDOW  - The cycle continues until the user achieves the specified target. |

| totalPeriods | Number | The total number of periods over which the tracking is evaluated. |

| frequencyType | Enum | The frequency of each cycle in which the user has to achieve the target value. Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly. |

| frequency | Number | The frequency count, relevant to the frequencyType. |

| recurringCycles | Number | The number of cycles for which the tracking recurs. |

| periods | Object | An array of period objects, each containing details about the individual periods within the tracking. |

| active | Boolean | Indicates if the period is active. |

| description | String | A brief description of the period. |

| endDate | Date Time | The end date and time of the period. |

| periodStatus | String | Indicates if the cycle of the Milestone is active/inactive. |

| refCode | String | A reference code for the period. |

| startDate | Date Time | The start date and time of the period. |

| targets | Object | An array of target objects, each outlining a target within the tracking. |

| active | Boolean | Indicates if the target is active. |

| description | String | A brief description of the target. |

| expression* | String | A string representing the condition to meet the target. |

| expressionJson* | String | A JSON expression that specifies the conditions required to achieve the target. |

| filters* | Object | In this object, you can define the entity to which the specified expressions related to the target will be applied. |

| entityType* | Enum | The entity to which the specified expressions related to the target will be applied.The entityType must satisfy the condition (expression) required to achieve the target.Supported values: STORE, ZONE, CONCEPT. |

| entityIds* | Array | The IDs of the entities to which the is  filter applied on. |

| name | String | The name identifier for the target. |

| targetEntity | Enum | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS.To track the transactional KPIs, use TRANSACTION and LINEITEM .To track the Behavioural or EMF events, use EVENT.To track the tracking based on rewards such as points, use REWARDS. |

| eventName | String | The behavioral name of the event that triggers the target. |

| targetType | Enum | The type of target.Supported values: QUANTITY, SALES, COUNT, VISIT, GROSS_SALES,REGULAR_POINTS, PROMOTIONAL_POINTS,ALL_POINTS, EXTENDED_FIELD and EVENT_ATTRIBUTEThe system supports targets based on behavioural events (SUM, VISIT, and COUNT). To use SUM, set the value as EVENT_ATTRIBUTE and then define the details in the extendedFieldInfo object. |

| extendedFieldInfo | Object | Includes the details of the event attribute that needs to be tracked. This object is applicable only when targetType is SUM. |

| name | String | Event on which the sum calculation is performed. For example, the number of adding to cart events. |

| aggregateFunction | Enum | The aggregate function checks whether the behavioral event is satisfied based on the sum.Supported values: SUMFor example: To track total cart value, use SUM as your "aggregateFunction" with a related behavioural event to sum up the value and check against your target. |

| defaultValues* | Object | An array of objects providing default values related to the target. |

| defaultValue* | Integer | A default value used in the target evaluation. |

| streaks | Object | An array of streak information. |

| name | String | Name of the streak. |

| targetCountOfSequence | Integer | The number of times the user has to achieve the target to redeem the reward. |



```
{
    "active": true,
    "description": "streak group",
    "name": "streakTestt123",
    "preferredTillId": 0,
    "trackingType": "STREAKS",
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "totalPeriods": 1,
    "frequencyType": "CUSTOM",
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-11-17T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-11-17T00:45:12.063"
        },
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-11-20T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period45",
            "startDate": "2023-11-18T00:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "streak",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,
                        50679770
                    ]
                }
            ],
            "name": "streakTestt123",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 500
                },
                {
                    "defaultValue": 1000
                }
            ]
        }
    ],
    "streaks": [
        {
            "name": "streakTestt193",
            "targetCountOfSequence": 1
        },
         {
            "name": "streakTestt123",
            "targetCountOfSequence": 2
        }
    ]
}
```

```
{
    "active": true,
    "description": "streak group",
    "name": "streakTestt123",
    "preferredTillId": 0,
    "trackingType": "STREAKS",
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "totalPeriods": 1,
    "frequencyType": "CUSTOM",
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-11-17T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-11-17T00:45:12.063"
        },
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-11-20T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period45",
            "startDate": "2023-11-18T00:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "streak",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,
                        50679770
                    ]
                }
            ],
            "name": "streakTestt123",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 500
                },
                {
                    "defaultValue": 1000
                }
            ]
        }
    ],
    "streaks": [
        {
            "name": "streakTestt193",
            "targetCountOfSequence": 1
        },
         {
            "name": "streakTestt123",
            "targetCountOfSequence": 2
        }
    ]
}
```

# Response parameters

| Field | Datatype | Description |

| --- | --- | --- |

| id | integer | Unique identifier for the group. |

| name | string | Name of the group. |

| active | boolean | Indicates if the group is active. |

| preferredTillId | integer | Preferred till ID, indicating no specific preference with 0. |

| totalPeriods | integer | Total number of periods specified. |

| description | string | Description of the /roup. |

| targetEvaluationType | string | Type of target evaluation, e.g., "FIXED_CALENDAR_WINDOW". |

| targetCycleStartDate | string (date-time) | Start date and time for the target cycle. |

| targetCycleEndDate | string (date-time) | End date and time for the target cycle (if applicable). |

| frequencyType | string | Frequency type, e.g., "CUSTOM" (if applicable). |

| trackingType | string | Type of tracking, e.g., "STREAKS" (if applicable). |

| fromDate | string (date) | Start date for the setting (if applicable). |

| toDate | string (date) | End date for the setting (if applicable). |

| recurringCycles | integer | Number of recurring cycles specified (if applicable). |

| frequency | integer | Frequency value set for the setting (if applicable). |

| id | integer | Unique identifier for each period. |

| startDate | string (date) | Start date for each period. |

| endDate | string (date) | End date for each period. |

| refCode | string | Reference code for each period. |

| periodStatus | string | Status of each period, e.g., "RUNNING", "NOT_STARTED". |

| targetGroupId | integer | Identifier linking each period to a target group. |

| description | string | Description of each period. |

| active | boolean | Indicates if each period is active. |

| id | integer | Unique identifier for each streak. |

| name | string | Name of each streak. |

| targetCountOfSequence | integer | Target count of sequence for each streak. |

| id | integer | Unique identifier for each target. |

| name | string | Name of each target. |

| targetType | string | Type of each target, e.g., "SALES". |

| targetEntity | string | Type of entity targeted by each target, e.g. |

| eventName | string | Name of the event associated with each target. |

| description | string | Description of each target. |

| active | boolean | Indicates if each target is active. |

| expression | string | Expression defining the criteria for each target. |

| expressionJson | string (JSON) | Target expression in JSON format for each target. |

| entityType | string | Type of entity for the filter of each target. |

| entityIds | array of integers | IDs of entities for the filter of each target. |

| enrolmentMethod | string | Method of enrolment for each target. |

| defaultValue | float | Specifies a default value for the target criteria for each target. |



```
{
    "data": {
        "id": 32,
        "name": "TGF19",
        "fromDate": "2021-05-27",
        "toDate": "2021-05-28",
        "active": true,
        "preferredTillId": 0,
        "periods": [
            {
                "id": 74,
                "attribution": {
                    "createdOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    }
                },
                "startDate": "2022-03-29",
                "endDate": "2022-05-29",
                "refCode": "string",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 32,
                "description": "string",
                "active": true
            }
        ],
        "activePeriod": {
            "startDate": "2022-03-28",
            "endDate": "2022-04-29",
            "refCode": "gdf123",
            "periodStatus": "RUNNING",
            "description": "Samplr description",
            "active": true
        },
        "totalPeriods": 0,
        "description": "TGF19",
        "recurringCycles": 2,
        "frequency": 5,
        "targetCycleStartDate": "2021-05-28T08:41:00.529Z"
    },
    "errors": null
}
```

```
{
    "data": {
        "id": 32,
        "name": "TGF19",
        "fromDate": "2021-05-27",
        "toDate": "2021-05-28",
        "active": true,
        "preferredTillId": 0,
        "periods": [
            {
                "id": 74,
                "attribution": {
                    "createdOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedOn": "2022-03-28T13:28:32.602+0000",
                    "lastUpdatedBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75040399,
                        "code": "bukl.till",
                        "description": "",
                        "name": "bukl.till",
                        "type": "TILL"
                    }
                },
                "startDate": "2022-03-29",
                "endDate": "2022-05-29",
                "refCode": "string",
                "periodStatus": "NOT_STARTED",
                "targetGroupId": 32,
                "description": "string",
                "active": true
            }
        ],
        "activePeriod": {
            "startDate": "2022-03-28",
            "endDate": "2022-04-29",
            "refCode": "gdf123",
            "periodStatus": "RUNNING",
            "description": "Samplr description",
            "active": true
        },
        "totalPeriods": 0,
        "description": "TGF19",
        "recurringCycles": 2,
        "frequency": 5,
        "targetCycleStartDate": "2021-05-28T08:41:00.529Z"
    },
    "errors": null
}
```

`Try It!`