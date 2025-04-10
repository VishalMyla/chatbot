# Create target based on EMF eventpost

EMF Events are nothing but the different kinds of customer-level events present in loyalty workflows. For example, returnTransaction, pointsRedemption, etc... and all these are different kinds of EMF events in our systems.

Important note:

Now, brands will be able to create targets based on these EMF events. Now, unlike the normal targets, where the user has to make 3 API calls (target-group, period, and target) to create a single target, the EMF type of targets can be created using a single call by placing the entire information in the single call itself. It means the definition of all the keys will be the same except for the following:

1. targetEntity = "Event".

2. eventName = "name of the emf event".This is a new key that will be present in the request body for the behavioral event type of targets.As of today, we are only supporting the following:CustomerRegistrationPointsRedemptionReturnBillPointsTransfer

1. This is a new key that will be present in the request body for the behavioral event type of targets.

2. As of today, we are only supporting the following:CustomerRegistrationPointsRedemptionReturnBillPointsTransfer

1. CustomerRegistration

2. PointsRedemption

3. ReturnBill

4. PointsTransfer

9. targetType = "COUNT"/"VISIT". Only these 2 are supported for the EMF event type of targets.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

Using create target group:https://eucrm.cc.capillarytech.com/v3/targetGroups

```
https://eucrm.cc.capillarytech.com/v3/targetGroups
```

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



# Request body parameters (that are related to target-group)

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| active | Boolean | Indicates if the tracking is active or not. |

| description | String | A brief description of the target group. |

| name* | String | The name identifier for the target group.The character limit for the name is 200 characters. |

| preferredTillId | Number | Identifier for a preferred till. |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values:- Default (single target tracking),- Unified (tracking multiple targets as a unit),- Streak  (Tracking the achievement of a user across the cycles continuously),- Capping  (Tracking the number of points a user has got over a period, so that capping can be applied).- Non continuous streak (Non-continuous streaks is a variation of streak, where the user is not required to perform specified activity continously). |

| targetEvaluationType | Enum | The evaluation strategy for the targets. Supported values:FIXED_CALENDAR_WINDOW - Each cycle runs for a defined period from the selected start date.CYCLIC_WINDOW - Cycle starts after customer's 1st transaction post enrolment.PERIOD_AGNOSTIC_WINDOW  - The cycle continues until the user achieves the specified target. |

| totalPeriods | Number | The total number of periods over which the tracking is evaluated. |

| frequencyType | Enum | The frequency of each cycle in which the user has to achieve the target value.Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly, Daily, CUSTOM. |

| frequency | Number | The frequency count, relevant to the frequencyType. |

| recurringCycles | Number | The number of cycles for which the tracking recurs. |

| periods | Object | An array of period objects, each containing details about the individual periods within the tracking. |

| active | Boolean | Indicates if the period is active. |

| description | String | A brief description of the period. |

| endDate | Date Time | The end date and time of the period. |

| periodStatus | Enum | Indicates if the cycle of the Milestone is running or upcoming.Supported values: RUNNING, UPCOMING, NOT_STARTED. |

| refCode | String | A reference code for the period. |

| startDate | Date Time | The start date and time of the period. |

| targets | Object | An array of target objects. |

| active | Boolean | Indicates if the target is active. |

| description | String | A brief description of the target. |

| expression | String | A string representing the condition to meet the target aka rule. |

| expressionJson | String | A JSON expression that specifies the conditions required to achieve the target. |

| filters | Object | In this object, you can define the entity to which the specified expressions related to the target will be applied. |

| entityType | Enum | The entity to which the specified expressions related to the target will be applied.For example: The user has to make a purchase of shoes from ABC store.Here, purchase of shoes is the expression and the entity is ABC store.Supported values: STORE, ZONE, CONCEPT. |

| entityIds | Array | The IDs of the entities to which the is  filter applied on. |

| name | String | The name identifier for the target. |

| targetEntity | Enum | The KPI on which the target is tracked.Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS.To track the transactional KPIs, use TRANSACTION and LINEITEM .To track the Behavioural events & EMF events, use EVENT.To track the tracking based on rewards such as points, use REWARDS. |

| eventName | String | The behavioral name of the event that triggers the target. Only valid in the case of behavioral events & EMF events. |

| targetType* | Enum | The type of target.Supported values:  VISIT, and COUNT (These are only 2 supported for EMF event type of targets) |

| extendedFieldInfo | Object | Includes the details of the event attribute that needs to be tracked.This object is applicable only when targetType is SUM. Not applicable for EMF event type of targets, as SUM is not supported for them. |

| name | String | Event on which the sum calculation is performed. For example, the number of adding to cart events. |

| aggregateFunction | Enum | The aggregate function checks whether the behavioral event is satisfied based on the sum.Supported values: SUM. Not applicable for these type of targets. |

| defaultValues | Object | An array of objects providing default values related to the target. |

| defaultValue | Integer | A default value used in the target evaluation. |



# Request body parameters (that are related to target)

| Parameter | Data Type | Description |

| --- | --- | --- |

| active | Boolean | Indicates if the target is active. |

| description | String | A brief description of the target. |

| expression | String | A string representing the condition to meet the target. |

| expressionJson | JSON | A JSON expression that specifies the conditions required to achieve the target. |

| filters | Array | In this object, you can define the entity to which the specified expressions related to the target will be applied. |

| - entityIds | Array | The IDs of the entities to which the is  filter applied on. |

| - entityType | Enum | The entity to which the specified expressions related to the target will be applied.For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store.Supported values: STORE, ZONE, CONCEPT. |

| name* | String | Name assigned to the target. |

| targetEntity | Enum | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS.To track the transactional KPIs, use TRANSACTION and LINEITEM .To track the Behavioural events, use EVENT.To track the tracking based on rewards such as points, use REWARDS. |

| enrolmentMethod | Enum | The method of enrolment for the target. Supported values: TRANSACTION, IMPORT |

| targetGroupId* | Integer | ID of the target group. |

| targetType* | String | The type of target.Supported values:  VISIT, and COUNT. |

| defaultValues | Array | An array of objects providing default values related to the target. |

| - targetName | String | Name of the target. |

| - periodId | Integer | Unique identifier for the period. |

| - defaultValue | Integer | A default value used in the target evaluation. |

| extendedFieldInfo | Object | Includes the details of the event attribute that needs to be tracked. This object is applicable only when targetType is SUM. Not applicable here. |

| - name | String | Event on which the sum calculation is performed. For example, the number of adding to cart events. |

| - aggregateFunction | String | The aggregate function checks whether the behavioral event is satisfied based on the sum.Supported values: SUM |



```
{
    "active": true,
    "fromDate": "2024-02-19T00:00:00.529Z",
    "name": "GoodNightForNightly",
    "preferredTillId": 50692127,
    "toDate": "2024-05-31T08:41:00.529Z",
    "trackingType": "DEFAULT",
    "totalPeriods": 2,
    "frequency": 1,
    "recurringCycles": 1,
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "targetCycleStartDate": "2024-02-19T00:31:00.529Z",
    "periods": [
        {
            "active": true,
            "description": "p66912",
            "endDate": "2024-02-22T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period66921",
            "startDate": "2024-02-19T00:00:00.529Z"
        },
        {
            "active": true,
            "description": "p66222",
            "endDate": "2024-04-30T23:45:12.063",
            "periodStatus": "NOT_STARTED",
            "refCode": "period6628911",
            "startDate": "2024-04-01T23:45:12.063Z"
        }
    ],
    "targets": [
        {
            "targetEntity": "EVENT",
            "targetType": "VISIT",
            "eventName": "PointsRedemption",
            "defaultValues": [
                {
                    "defaultValue": "2"
                },
                {
                    "defaultValue": "3"
                }
            ],
            "targetMilestoneTriggers": [],
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "name": "goodNightTargetRule",
            "enrolmentMethod": "TRANSACTION"
        }
    ]
}
```

```
{
    "active": true,
    "fromDate": "2024-02-19T00:00:00.529Z",
    "name": "GoodNightForNightly",
    "preferredTillId": 50692127,
    "toDate": "2024-05-31T08:41:00.529Z",
    "trackingType": "DEFAULT",
    "totalPeriods": 2,
    "frequency": 1,
    "recurringCycles": 1,
    "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
    "targetCycleStartDate": "2024-02-19T00:31:00.529Z",
    "periods": [
        {
            "active": true,
            "description": "p66912",
            "endDate": "2024-02-22T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period66921",
            "startDate": "2024-02-19T00:00:00.529Z"
        },
        {
            "active": true,
            "description": "p66222",
            "endDate": "2024-04-30T23:45:12.063",
            "periodStatus": "NOT_STARTED",
            "refCode": "period6628911",
            "startDate": "2024-04-01T23:45:12.063Z"
        }
    ],
    "targets": [
        {
            "targetEntity": "EVENT",
            "targetType": "VISIT",
            "eventName": "PointsRedemption",
            "defaultValues": [
                {
                    "defaultValue": "2"
                },
                {
                    "defaultValue": "3"
                }
            ],
            "targetMilestoneTriggers": [],
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [],
            "name": "goodNightTargetRule",
            "enrolmentMethod": "TRANSACTION"
        }
    ]
}
```

# Response parameters (that are related to the target group)

| Field | Datatype | Description |

| --- | --- | --- |

| id | integer | Unique identifier for the tagrget group. |

| name | string | Name of the target group. |

| active | boolean | Indicates if the group is active. |

| preferredTillId | integer | Preferred till ID. |

| totalPeriods | integer | Total number of periods specified. |

| description | string | Description of the target. |

| targetEvaluationType | Enum | The evaluation strategy for the targets. Supported values:FIXED_CALENDAR_WINDOW - Each cycle runs for a defined period from the selected start date.CYCLIC_WINDOW - Cycle starts after customer's 1st transaction post enrolment.PERIOD_AGNOSTIC_WINDOW  - The cycle continues until the user achieves the specified target. |

| targetCycleStartDate | string (date-time) | Start date and time for the target cycle. |

| targetCycleEndDate | string (date-time) | End date and time for the target cycle. |

| frequencyType | Enum | The frequency of each cycle in which the user has to achieve the target value. Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly. |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values:- Default (single target tracking),- Unified (tracking multiple targets as a unit),- Streak  (Tracking the achievement of a user across the cycles continuously),- Capping  (Tracking the number of points a user has got over a period, so that capping can be applied).- Non continuous streak (Non-continuous streaks is a variation of streak, where the user is not required to perform specified activity continously). |

| fromDate | string (date) | Start date for the target. |

| toDate | string (date) | End date for thetarget. |

| recurringCycles | integer | Number of recurring cycles specified. |

| frequency | integer | Frequency value set for the setting. |

| id | integer | Unique identifier for each period. |

| startDate | string (date) | Start date for each period. |

| endDate | string (date) | End date for each period. |

| refCode | string | Reference code for each period. |

| periodStatus | Enum | Status of each period. Supported values: RUNNING, NOT_STARTED, UPCOMING. |

| targetGroupId | integer | Identifier linking each period to a target group. |

| description | string | Description of each period. |

| active | boolean | Indicates if each period is active. |

| id | integer | Unique identifier for each streak. |

| name | string | Name of each streak. |

| targetCountOfSequence | integer | Target count of sequence for each streak. |

| id | integer | Unique identifier for each target. |

| name | string | Name of each target. |

| targetType | Enum | The type of target.Supported values:  COUNT, VISIT, SUMTo use SUM, set the value as EVENT_ATTRIBUTE and then define the details in the extendedFieldInfo object. |

| targetEntity | Enum | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS.To track the transactional KPIs, use TRANSACTION and LINEITEM .To track the Behavioural events, use EVENT.To track the tracking based on rewards such as points, use REWARDS. |

| eventName | string | Name of the event associated with each target. |

| description | string | Description of each target. |

| active | boolean | Indicates if each target is active. |

| expression | string | Expression defining the criteria for each target. |

| expressionJson | string (JSON) | Target expression in JSON format for each target. |

| entityType | Enum | The entity to which the specified expressions related to the target will be applied.For example: The user has to make a purchase of shoes from ABC store. Here, purchase of shoes is the expression and the entity is ABC store.Supported values: STORE, ZONE, CONCEPT. |

| entityIds | array of integers | IDs of entities for the filter of each target. |

| enrolmentMethod | string | Method of enrolment for each target. |

| defaultValue | float | Specifies a default value for the target criteria for each target. |



# Response parameters (that are related to the target)

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the data entry. |

| attribution.createdOn | String | Timestamp when the entry was created. |

| attribution.lastUpdatedOn | String | Timestamp when the entry was last updated. |

| attribution.lastUpdatedBy.id | Integer | ID of the user who last updated the entry. |

| name | String | Name of the entry. |

| emfRuleSetId | Integer | ID for the rule set. |

| emfUnrolledRulesetId | Integer | ID for the unrolled rule set. |

| targetType | Eum | The type of target.Supported values:  SUM, VISIT, and COUNT.To use SUM, set the value as EVENT_ATTRIBUTE and then define the details in the extendedFieldInfo object. |

| targetEntity | Enum | The KPI on which the target is tracked. Supported values: TRANSACTION, LINEITEM, EVENT, REWARDS.To track the transactional KPIs, use TRANSACTION and LINEITEM .To track the Behavioural events, use EVENT.To track the tracking based on rewards such as points, use REWARDS. |

| targetGroupId | Integer | ID of the target group associated. |

| description | String | Brief description of the entry. |

| active | Boolean | Indicates whether the entry is active. |

| expression | String | Expression evaluated for the entry. |

| expressionJson | JSON | JSON format of the expression. |

| filters | Array | Filters applied to the entry. |

| -- entityIds | Array of Integers | IDs of entities within the filter. |

| -- entityType | Enum | Type of entity being filtered. |

| enrolmentMethod | Enum | Method of enrollment. Supported values: IMPORT,TRANSACTION |

| defaultValues | Array | Default values set for the entry. |

| -- id | Integer | Unique identifier for each default value. |

| -- periodId | Integer | Period ID associated with the default value. |

| -- defaultValue | Integer | The default value set. |

| extendedFieldInfo | Object | Extended field information for the entry. |

| -- name | String | Name of the extended field. |

| -- aggregateFunction | String | Aggregate function applied to the extended field. |



```
{
    "data": [
        {
            "id": 9067,
            "attribution": {
                "createdOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                }
            },
            "name": "test_name",
            "emfRuleSetId": 1246657,
            "emfUnrolledRulesetId": 1246656,
            "targetType": "VISIT",
            "targetEntity": "EVENT",
            "eventName":"PointsRedemption"
            "targetGroupId": 5869,
            "description": "test210",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "ZONE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 10083,
                    "periodId": 1,
                    "defaultValue": 20
                }
            ],
            
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
            "id": 9067,
            "attribution": {
                "createdOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedOn": "2023-09-25T11:42:35.850+0530",
                "lastUpdatedBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50666468,
                    "code": "amanv2",
                    "description": "",
                    "name": "amanv2",
                    "type": "TILL"
                }
            },
            "name": "test_name",
            "emfRuleSetId": 1246657,
            "emfUnrolledRulesetId": 1246656,
            "targetType": "VISIT",
            "targetEntity": "EVENT",
            "eventName":"PointsRedemption"
            "targetGroupId": 5869,
            "description": "test210",
            "active": true,
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "ZONE",
                    "entityIds": [
                        0
                    ]
                }
            ],
            "enrolmentMethod": "TRANSACTION",
            "defaultValues": [
                {
                    "id": 10083,
                    "periodId": 1,
                    "defaultValue": 20
                }
            ],
            
        }
    ],
    "errors": null,
    "warnings": null
}
```

# API error codes

| Code | Description |

| --- | --- |

| 310069 | Target group name already exists |

| 300004 | Invalid input, check all values and ensure they are correct. |

| 310008 | Length of Target rule name cannot exceed 200 |



`Try It!`