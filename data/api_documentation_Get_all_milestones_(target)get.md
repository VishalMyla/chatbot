# Get all milestones (target)get

This API is used to retrieve details of the milestones configured for the org.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://eucrm.cc.capillarytech.com/v3/milestones

```
https://eucrm.cc.capillarytech.com/v3/milestones
```

# Prerequisites

- Basic or OAuth authentication

- Default access group

# API Specification

|  |  |

| --- | --- |

| URI | v3/milestones |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| start-date | Date | Filter on the start date of the milestone.  This param is used to get the active milestones on and after the specified date. |

| end-date | Date | Filter on the end date of the milestone.  This param is used to get the milestones active on and before the specified date. |

| status | Enum | Filter based on the status of the milestone. Supported values: LIVE, UPCOMING, ENDED, STOPPED. |

| type | Enum | Filter based on the tracking type of the milestone. Supported values: DEFAULT, CAPPING, UNIFIED, STREAKS. |

| target-on | Enum | Filter based on the target type of the milestone. Supported values: QUANTITY,SALES,COUNT,VISIT,GROSS_SALES,REGULAR_POINTS,PROMOTIONAL_POINTS,ALL_POINTS,EXTENDED_FIELD,EVENT_ATTRIBUTE |

| name | String | Filter based on the name of the milestone. |

| require-periods | Boolean | Set true to retrieve all period information. |

| limit | Integer | Page size for pagination. |

| offset | Integer | Page offset for pagination. |

| includeUserCreatedTargetGroups | Boolean | Include theuser createdtarget groups in the response. This value is false by default. |



[user created](/reference/user-created-challenges)

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier the milestone. |

| createdOn | String | The creation date and time of the target group. |

| lastUpdatedOn | String | The last update date and time of the target group. |

| lastUpdatedBy.id | Integer | The ID of the last user who updated the target group. |

| createdBy.id | Integer | The ID of the user who created the target group. |

| name | String | Name of the target group. |

| fromDate | Date | Start date of the target group's active period. |

| toDate | Date | End date of the target group's active period. |

| active | Boolean | Status indicating if the target group is currently active. |

| preferredTillId | Integer | A reference ID for internal use, possibly related to prioritization. |

| periods | Array | A collection of periods within the target group. |

| - id | Integer | Unique identifier for each period. |

| -startDate | Date | Start date of the period. |

| - endDate | Date | End date of the period. |

| - refCode | String | Reference code for the period. |

| - periodStatus | String | Status of the period (e.g., RUNNING, NOT_STARTED). |

| - targetGroupId | Integer | ID of the target group to which the period belongs. |

| - description | String | Description of the period. |

| - active | Boolean | Status indicating if the period is currently active. |

| streaks | Array | A collection of streaks within the target group. |

| - id | Integer | Unique identifier for each streak. |

| -targetGroupId | Integer | ID of the target group to which the streak belongs. |

| - name | String | Name of the streak. |

| - targetCountOfSequence | Integer | Target count of sequences for the streak. |

| activePeriod.id | Integer | The ID of the currently active period. |

| totalPeriods | Integer | The total number of periods over which the tracking is evaluated. |

| description | String | Description of the non-continuous-streaks group. |

| targetEvaluationType | String | The evaluation strategy for the targets. Supported values:FIXED_CALENDAR_WINDOW, CYCLIC_WINDOW,PERIOD_AGNOSTIC_WINDOW |

| recurringCycles | Integer | Number of recurring cycles. |

| frequency | Integer | The frequency count, relevant to the frequencyType. |

| targetCycleStartDate | DateTime | Start date and time of the target cycle. |

| targetCycleEndDate | DateTime | End date and time of the target cycle. |

| frequencyType | Enum | The frequency of each cycle in which the user has to achieve the target value. Supported values: Monthly, Quarterly, Half-yearly, Yearly, Weekly. |

| trackingType | Enum | The type of tracking the milestone is created for. Supported values:Default (single target tracking),Unified (tracking multiple targets as a unit),Streak (Tracking the achievement of a user across the cycles continuously),Capping (Tracking the number of points a user has got over a period, so that capping can be applied). |

| createdOn | Long | The creation timestamp of the data in milliseconds since epoch. |

| targets | Array | A collection of targets within the target group. |

| - id | Integer | Unique identifier for each target. |

| - name | String | Name of the target. |

| - emfRuleSetId | Integer | Rule set ID associated with the target. |

| - targetType | Eum | Type of target (e.g., COUNT). |

| - targetEntity | Enum | Entity of the target. Supported values:CUSTOMER, TRANSACTIONS, STORE, PRODUCT, BEHAVIOURAL EVENTS |

| - eventName | String | Event name associated with the target. |

| - targetGroupId | Integer | ID of the target group to which the target belongs. |

| - description | String | Description of the target. |

| - expression | String | Expression defining the target condition. |

| - expressionJson | JSON | JSON format of the expression defining the target condition. |

| - filters | Array | Filters applied to the target. |

| - enrolmentMethod | String | Method of enrolment for the target. |

| - defaultValues | Array | Default values associated with periods for the target. |

| --id | Integer | Unique identifier for each default value. |

| -- periodId | Integer | ID of the period to which the default value belongs. |

| -- defaultValue | Decimal | Default value of the period. |

| targetAudienceFilter | Array | List of audience filters used for the milestone. This applies when the target customers are selected from the audience list during the creation of the milestone in the UI. |

| - audienceGroupId | Integer | Unique identifier for the audience group |

| - versionId | Integer | Version identifier for the audience filter |

| - audienceFilterMetaId | Integer | Metadata identifier for the audience filter |

| - lastUpdatedOn | String | Timestamp of the last update (ISO 8601 format) |

| userCreated | Boolean | Whether the target is a user created target. Iftrue, the target is a user created target. |

| leaderboardEnabled | Boolean | Indicates if the target has a leaderboard tracking enabled |



```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 20
    },
    "data": [
        {
            "id": 23113,
            "attribution": {
                "createdOn": "2024-04-02T10:35:15.000+0530",
                "lastUpdatedOn": "2024-04-02T10:35:15.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "testsub",
            "active": true,
            "preferredTillId": 50681568,
            "activePeriod": {
                "id": 28714,
                "attribution": {
                    "createdOn": "2024-04-02T10:35:15.000+0530",
                    "lastUpdatedOn": "2024-04-02T10:35:15.000+0530",
                    "lastUpdatedBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2024-04-02",
                "endDate": "2024-05-01",
                "refCode": "Cycle_1",
                "periodStatus": "RUNNING",
                "targetGroupId": 23113,
                "active": true
            },
            "totalPeriods": 1,
            "description": "testsub",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-04-02T05:04:45.000Z",
            "targetCycleEndDate": "2024-05-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1712034315000,
            "targets": [
                {
                    "id": 43653,
                    "attribution": {
                        "createdOn": "2024-04-02T10:35:16.000+0530",
                        "lastUpdatedOn": "2024-04-02T10:35:16.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "testsub",
                    "emfRuleSetId": 1294439,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 23113,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 52582,
                            "periodId": 28714,
                            "defaultValue": 10000.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16832,
            "attribution": {
                "createdOn": "2024-02-07T17:53:40.000+0530",
                "lastUpdatedOn": "2024-02-07T17:53:40.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "ew",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-07T12:22:48.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707308620000,
            "targets": [
                {
                    "id": 31203,
                    "attribution": {
                        "createdOn": "2024-02-07T17:53:40.000+0530",
                        "lastUpdatedOn": "2024-02-07T17:53:40.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "ew",
                    "emfRuleSetId": 1276042,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16832,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36763,
                            "periodId": 20639,
                            "defaultValue": 1.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16794,
            "attribution": {
                "createdOn": "2024-02-07T11:59:06.000+0530",
                "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "unified",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-07T06:28:45.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "UNIFIED",
            "createdOn": 1707287346000,
            "targets": [
                {
                    "id": 31133,
                    "attribution": {
                        "createdOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "unified_b8abd528-02b2-42ca-98b4-b296b2d6940f",
                    "emfRuleSetId": 1275657,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16794,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36693,
                            "periodId": 20604,
                            "defaultValue": 100.000
                        }
                    ]
                },
                {
                    "id": 31132,
                    "attribution": {
                        "createdOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "unified_e96004bd-4d78-48da-9f66-e93b3c3dbd7a",
                    "emfRuleSetId": 1275656,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16794,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36692,
                            "periodId": 20604,
                            "defaultValue": 100.000
                        }
                    ]
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": null,
                "thresholdValue": null,
                "ruleExpression": "(31132 & 31133)"
            }
        },
        {
            "id": 16503,
            "attribution": {
                "createdOn": "2024-02-05T15:03:08.000+0530",
                "lastUpdatedOn": "2024-02-05T15:03:08.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "wbc",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-05T09:32:53.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707125588000,
            "targets": [
                {
                    "id": 30534,
                    "attribution": {
                        "createdOn": "2024-02-05T15:03:08.000+0530",
                        "lastUpdatedOn": "2024-02-05T15:03:08.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "wbc",
                    "emfRuleSetId": 1274403,
                    "targetType": "EXTENDED_FIELD",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16503,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36017,
                            "periodId": 20267,
                            "defaultValue": 12.000
                        }
                    ],
                    "extendedFieldInfo": {
                        "name": "CentralGST",
                        "aggregateFunction": "COUNT"
                    }
                }
            ]
        },
        {
            "id": 16500,
            "attribution": {
                "createdOn": "2024-02-05T10:29:38.000+0530",
                "lastUpdatedOn": "2024-02-05T10:29:38.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "wew",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-05T04:58:38.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707109178000,
            "targets": [
                {
                    "id": 30533,
                    "attribution": {
                        "createdOn": "2024-02-05T10:29:38.000+0530",
                        "lastUpdatedOn": "2024-02-05T10:29:38.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "wew",
                    "emfRuleSetId": 1274390,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16500,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36016,
                            "periodId": 20265,
                            "defaultValue": 12.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16175,
            "attribution": {
                "createdOn": "2024-01-31T12:48:16.000+0530",
                "lastUpdatedOn": "2024-01-31T12:48:16.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "ewdwe",
            "active": true,
            "preferredTillId": 50681568,
            "activePeriod": {
                "id": 19881,
                "attribution": {
                    "createdOn": "2024-01-31T12:48:16.000+0530",
                    "lastUpdatedOn": "2024-01-31T12:48:16.000+0530",
                    "lastUpdatedBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2024-01-31",
                "endDate": "2024-04-29",
                "refCode": "wdse",
                "periodStatus": "RUNNING",
                "targetGroupId": 16175,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-01-31T00:00:00.000Z",
            "targetCycleEndDate": "2024-04-29T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "DEFAULT",
            "createdOn": 1706685496000,
            "targets": [
                {
                    "id": 29827,
                    "attribution": {
                        "createdOn": "2024-01-31T12:48:57.000+0530",
                        "lastUpdatedOn": "2024-01-31T12:48:57.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "e",
                    "emfRuleSetId": 1273473,
                    "emfUnrolledRulesetId": 1273472,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "LINEITEM",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16175,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 35203,
                            "periodId": 19881,
                            "defaultValue": 12.000
                        }
                    ]
                },
                {
                    "id": 30532,
                    "attribution": {
                        "createdOn": "2024-02-05T10:27:13.000+0530",
                        "lastUpdatedOn": "2024-02-05T10:27:13.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "eeeeee",
                    "emfRuleSetId": 1274389,
                    "emfUnrolledRulesetId": 1274388,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "LINEITEM",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16175,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36015,
                            "periodId": 19881,
                            "defaultValue": 11.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 8670,
            "attribution": {
                "createdOn": "2023-12-28T17:38:42.000+0530",
                "lastUpdatedOn": "2023-12-28T17:38:42.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "Madridstaloyaltystreak",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 10,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad2",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 11,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad4",
                    "targetCountOfSequence": 4
                },
                {
                    "id": 12,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad7",
                    "targetCountOfSequence": 7
                }
            ],
            "totalPeriods": 15,
            "description": "edit",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-11-01T00:00:00.000Z",
            "targetCycleEndDate": "2023-11-15T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703765322000,
            "targets": [
                {
                    "id": 15106,
                    "attribution": {
                        "createdOn": "2023-10-31T19:59:51.000+0530",
                        "lastUpdatedOn": "2023-10-31T19:59:51.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTXN500",
                    "emfRuleSetId": 1254321,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 8670,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 16963,
                            "periodId": 10034,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16964,
                            "periodId": 10035,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16965,
                            "periodId": 10036,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16966,
                            "periodId": 10037,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16967,
                            "periodId": 10038,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16968,
                            "periodId": 10039,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16969,
                            "periodId": 10040,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16970,
                            "periodId": 10041,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16971,
                            "periodId": 10042,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16972,
                            "periodId": 10043,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16973,
                            "periodId": 10044,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16974,
                            "periodId": 10045,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16975,
                            "periodId": 10046,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16976,
                            "periodId": 10047,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16977,
                            "periodId": 10048,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 12951,
            "attribution": {
                "createdOn": "2023-12-28T15:26:54.000+0530",
                "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "MadridstaloyaltystreakTargetGroup003",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 252,
                    "attribution": {
                        "createdOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12951,
                    "name": "Madridstaloyaltystreak003Streak3",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 253,
                    "attribution": {
                        "createdOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12951,
                    "name": "Madridstaloyaltystreak003Streak4",
                    "targetCountOfSequence": 3
                }
            ],
            "totalPeriods": 5,
            "description": "Madridsta Demo streak 1",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-12-29T00:00:00.000Z",
            "targetCycleEndDate": "2024-01-03T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703757414000,
            "targets": [
                {
                    "id": 23511,
                    "attribution": {
                        "createdOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTargetGroup003TXN500",
                    "emfRuleSetId": 1265434,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 12951,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 27002,
                            "periodId": 15576,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27003,
                            "periodId": 15577,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27004,
                            "periodId": 15578,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27005,
                            "periodId": 15579,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27006,
                            "periodId": 15580,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 12949,
            "attribution": {
                "createdOn": "2023-12-28T15:22:28.000+0530",
                "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "MadridstaloyaltystreakTargetGroup002",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 250,
                    "attribution": {
                        "createdOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12949,
                    "name": "Madridstaloyaltystreak001Streak22",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 251,
                    "attribution": {
                        "createdOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12949,
                    "name": "Madridstaloyaltystreak001Streak44",
                    "targetCountOfSequence": 3
                }
            ],
            "totalPeriods": 5,
            "description": "Madridsta Demo streak 1",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-12-29T00:00:00.000Z",
            "targetCycleEndDate": "2024-01-03T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703757148000,
            "targets": [
                {
                    "id": 23510,
                    "attribution": {
                        "createdOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTargetGroup002TXN500",
                    "emfRuleSetId": 1265433,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 12949,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 26997,
                            "periodId": 15566,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 26998,
                            "periodId": 15567,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 26999,
                            "periodId": 15568,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27000,
                            "periodId": 15569,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27001,
                            "periodId": 15570,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 11905,
            "attribution": {
                "createdOn": "2023-12-18T17:22:30.000+0530",
                "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "MadridstaloyaltystreakTargetGroup001",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 219,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 11905,
                    "name": "Madridstaloyaltystreak001Streak2",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 220,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 11905,
                    "name": "Madridstaloyaltystreak001Streak4",
                    "targetCountOfSequence": 4
                },
                {
                    "id": 221,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 11905,
                    "name": "Madridstaloyaltystreak001Streak7",
                    "targetCountOfSequence": 7
                }
            ],
            "totalPeriods": 15,
            "description": "Madridsta Demo streak 1",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-12-19T00:00:00.000Z",
            "targetCycleEndDate": "2024-01-02T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1702900350000,
            "targets": [
                {
                    "id": 21401,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTargetGroup001TXN500",
                    "emfRuleSetId": 1262814,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 11905,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 24442,
                            "periodId": 14189,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24443,
                            "periodId": 14190,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24444,
                            "periodId": 14191,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24445,
                            "periodId": 14192,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24446,
                            "periodId": 14193,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24447,
                            "periodId": 14194,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24448,
                            "periodId": 14195,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24449,
                            "periodId": 14196,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24450,
                            "periodId": 14197,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24451,
                            "periodId": 14198,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24452,
                            "periodId": 14199,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24453,
                            "periodId": 14200,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24454,
                            "periodId": 14201,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24455,
                            "periodId": 14202,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24456,
                            "periodId": 14203,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        }
    ],
    "errors": [],
    "warnings": []
}
```

```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 20
    },
    "data": [
        {
            "id": 23113,
            "attribution": {
                "createdOn": "2024-04-02T10:35:15.000+0530",
                "lastUpdatedOn": "2024-04-02T10:35:15.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "testsub",
            "active": true,
            "preferredTillId": 50681568,
            "activePeriod": {
                "id": 28714,
                "attribution": {
                    "createdOn": "2024-04-02T10:35:15.000+0530",
                    "lastUpdatedOn": "2024-04-02T10:35:15.000+0530",
                    "lastUpdatedBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2024-04-02",
                "endDate": "2024-05-01",
                "refCode": "Cycle_1",
                "periodStatus": "RUNNING",
                "targetGroupId": 23113,
                "active": true
            },
            "totalPeriods": 1,
            "description": "testsub",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-04-02T05:04:45.000Z",
            "targetCycleEndDate": "2024-05-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1712034315000,
            "targets": [
                {
                    "id": 43653,
                    "attribution": {
                        "createdOn": "2024-04-02T10:35:16.000+0530",
                        "lastUpdatedOn": "2024-04-02T10:35:16.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "testsub",
                    "emfRuleSetId": 1294439,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 23113,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 52582,
                            "periodId": 28714,
                            "defaultValue": 10000.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16832,
            "attribution": {
                "createdOn": "2024-02-07T17:53:40.000+0530",
                "lastUpdatedOn": "2024-02-07T17:53:40.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "ew",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-07T12:22:48.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707308620000,
            "targets": [
                {
                    "id": 31203,
                    "attribution": {
                        "createdOn": "2024-02-07T17:53:40.000+0530",
                        "lastUpdatedOn": "2024-02-07T17:53:40.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "ew",
                    "emfRuleSetId": 1276042,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16832,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36763,
                            "periodId": 20639,
                            "defaultValue": 1.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16794,
            "attribution": {
                "createdOn": "2024-02-07T11:59:06.000+0530",
                "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "unified",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-07T06:28:45.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "UNIFIED",
            "createdOn": 1707287346000,
            "targets": [
                {
                    "id": 31133,
                    "attribution": {
                        "createdOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "unified_b8abd528-02b2-42ca-98b4-b296b2d6940f",
                    "emfRuleSetId": 1275657,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16794,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36693,
                            "periodId": 20604,
                            "defaultValue": 100.000
                        }
                    ]
                },
                {
                    "id": 31132,
                    "attribution": {
                        "createdOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedOn": "2024-02-07T11:59:06.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "unified_e96004bd-4d78-48da-9f66-e93b3c3dbd7a",
                    "emfRuleSetId": 1275656,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16794,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36692,
                            "periodId": 20604,
                            "defaultValue": 100.000
                        }
                    ]
                }
            ],
            "combinationType": "ALL",
            "unifiedTargetExpression": {
                "aggregation": null,
                "thresholdValue": null,
                "ruleExpression": "(31132 & 31133)"
            }
        },
        {
            "id": 16503,
            "attribution": {
                "createdOn": "2024-02-05T15:03:08.000+0530",
                "lastUpdatedOn": "2024-02-05T15:03:08.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "wbc",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-05T09:32:53.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707125588000,
            "targets": [
                {
                    "id": 30534,
                    "attribution": {
                        "createdOn": "2024-02-05T15:03:08.000+0530",
                        "lastUpdatedOn": "2024-02-05T15:03:08.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "wbc",
                    "emfRuleSetId": 1274403,
                    "targetType": "EXTENDED_FIELD",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16503,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36017,
                            "periodId": 20267,
                            "defaultValue": 12.000
                        }
                    ],
                    "extendedFieldInfo": {
                        "name": "CentralGST",
                        "aggregateFunction": "COUNT"
                    }
                }
            ]
        },
        {
            "id": 16500,
            "attribution": {
                "createdOn": "2024-02-05T10:29:38.000+0530",
                "lastUpdatedOn": "2024-02-05T10:29:38.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "wew",
            "active": false,
            "preferredTillId": 50681568,
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-02-05T04:58:38.000Z",
            "targetCycleEndDate": "2024-03-31T18:30:00.000Z",
            "frequencyType": "MONTHLY",
            "trackingType": "DEFAULT",
            "createdOn": 1707109178000,
            "targets": [
                {
                    "id": 30533,
                    "attribution": {
                        "createdOn": "2024-02-05T10:29:38.000+0530",
                        "lastUpdatedOn": "2024-02-05T10:29:38.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "wew",
                    "emfRuleSetId": 1274390,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16500,
                    "active": false,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36016,
                            "periodId": 20265,
                            "defaultValue": 12.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 16175,
            "attribution": {
                "createdOn": "2024-01-31T12:48:16.000+0530",
                "lastUpdatedOn": "2024-01-31T12:48:16.000+0530",
                "lastUpdatedBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 50685529,
                    "code": "[email protected]",
                    "description": "",
                    "name": "Vinayak Radhakrishnan",
                    "type": "ADMIN_USER"
                }
            },
            "name": "ewdwe",
            "active": true,
            "preferredTillId": 50681568,
            "activePeriod": {
                "id": 19881,
                "attribution": {
                    "createdOn": "2024-01-31T12:48:16.000+0530",
                    "lastUpdatedOn": "2024-01-31T12:48:16.000+0530",
                    "lastUpdatedBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 50685529,
                        "code": "[email protected]",
                        "description": "",
                        "name": "Vinayak Radhakrishnan",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2024-01-31",
                "endDate": "2024-04-29",
                "refCode": "wdse",
                "periodStatus": "RUNNING",
                "targetGroupId": 16175,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2024-01-31T00:00:00.000Z",
            "targetCycleEndDate": "2024-04-29T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "DEFAULT",
            "createdOn": 1706685496000,
            "targets": [
                {
                    "id": 29827,
                    "attribution": {
                        "createdOn": "2024-01-31T12:48:57.000+0530",
                        "lastUpdatedOn": "2024-01-31T12:48:57.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "e",
                    "emfRuleSetId": 1273473,
                    "emfUnrolledRulesetId": 1273472,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "LINEITEM",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16175,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "IMPORT",
                    "defaultValues": [
                        {
                            "id": 35203,
                            "periodId": 19881,
                            "defaultValue": 12.000
                        }
                    ]
                },
                {
                    "id": 30532,
                    "attribution": {
                        "createdOn": "2024-02-05T10:27:13.000+0530",
                        "lastUpdatedOn": "2024-02-05T10:27:13.000+0530",
                        "lastUpdatedBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 50685529,
                            "code": "[email protected]",
                            "description": "",
                            "name": "Vinayak Radhakrishnan",
                            "type": "ADMIN_USER"
                        }
                    },
                    "name": "eeeeee",
                    "emfRuleSetId": 1274389,
                    "emfUnrolledRulesetId": 1274388,
                    "targetType": "GROSS_SALES",
                    "targetEntity": "LINEITEM",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 16175,
                    "active": true,
                    "expression": "true",
                    "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 36015,
                            "periodId": 19881,
                            "defaultValue": 11.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 8670,
            "attribution": {
                "createdOn": "2023-12-28T17:38:42.000+0530",
                "lastUpdatedOn": "2023-12-28T17:38:42.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "Madridstaloyaltystreak",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 10,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad2",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 11,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad4",
                    "targetCountOfSequence": 4
                },
                {
                    "id": 12,
                    "attribution": {
                        "createdOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedOn": "2023-11-06T18:59:52.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 8670,
                    "name": "streakmad7",
                    "targetCountOfSequence": 7
                }
            ],
            "totalPeriods": 15,
            "description": "edit",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-11-01T00:00:00.000Z",
            "targetCycleEndDate": "2023-11-15T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703765322000,
            "targets": [
                {
                    "id": 15106,
                    "attribution": {
                        "createdOn": "2023-10-31T19:59:51.000+0530",
                        "lastUpdatedOn": "2023-10-31T19:59:51.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTXN500",
                    "emfRuleSetId": 1254321,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 8670,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 16963,
                            "periodId": 10034,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16964,
                            "periodId": 10035,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16965,
                            "periodId": 10036,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16966,
                            "periodId": 10037,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16967,
                            "periodId": 10038,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16968,
                            "periodId": 10039,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16969,
                            "periodId": 10040,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16970,
                            "periodId": 10041,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16971,
                            "periodId": 10042,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16972,
                            "periodId": 10043,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16973,
                            "periodId": 10044,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16974,
                            "periodId": 10045,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16975,
                            "periodId": 10046,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16976,
                            "periodId": 10047,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 16977,
                            "periodId": 10048,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 12951,
            "attribution": {
                "createdOn": "2023-12-28T15:26:54.000+0530",
                "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "MadridstaloyaltystreakTargetGroup003",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 252,
                    "attribution": {
                        "createdOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12951,
                    "name": "Madridstaloyaltystreak003Streak3",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 253,
                    "attribution": {
                        "createdOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12951,
                    "name": "Madridstaloyaltystreak003Streak4",
                    "targetCountOfSequence": 3
                }
            ],
            "totalPeriods": 5,
            "description": "Madridsta Demo streak 1",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-12-29T00:00:00.000Z",
            "targetCycleEndDate": "2024-01-03T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703757414000,
            "targets": [
                {
                    "id": 23511,
                    "attribution": {
                        "createdOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:26:54.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTargetGroup003TXN500",
                    "emfRuleSetId": 1265434,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 12951,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 27002,
                            "periodId": 15576,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27003,
                            "periodId": 15577,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27004,
                            "periodId": 15578,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27005,
                            "periodId": 15579,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27006,
                            "periodId": 15580,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 12949,
            "attribution": {
                "createdOn": "2023-12-28T15:22:28.000+0530",
                "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "MadridstaloyaltystreakTargetGroup002",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 250,
                    "attribution": {
                        "createdOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12949,
                    "name": "Madridstaloyaltystreak001Streak22",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 251,
                    "attribution": {
                        "createdOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 12949,
                    "name": "Madridstaloyaltystreak001Streak44",
                    "targetCountOfSequence": 3
                }
            ],
            "totalPeriods": 5,
            "description": "Madridsta Demo streak 1",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-12-29T00:00:00.000Z",
            "targetCycleEndDate": "2024-01-03T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1703757148000,
            "targets": [
                {
                    "id": 23510,
                    "attribution": {
                        "createdOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedOn": "2023-12-28T15:22:28.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTargetGroup002TXN500",
                    "emfRuleSetId": 1265433,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 12949,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 26997,
                            "periodId": 15566,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 26998,
                            "periodId": 15567,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 26999,
                            "periodId": 15568,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27000,
                            "periodId": 15569,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 27001,
                            "periodId": 15570,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        },
        {
            "id": 11905,
            "attribution": {
                "createdOn": "2023-12-18T17:22:30.000+0530",
                "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                "lastUpdatedBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50681568,
                    "code": "kerala1_till1",
                    "description": "",
                    "name": "kerala1_till1",
                    "type": "TILL"
                }
            },
            "name": "MadridstaloyaltystreakTargetGroup001",
            "active": false,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 219,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 11905,
                    "name": "Madridstaloyaltystreak001Streak2",
                    "targetCountOfSequence": 2
                },
                {
                    "id": 220,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 11905,
                    "name": "Madridstaloyaltystreak001Streak4",
                    "targetCountOfSequence": 4
                },
                {
                    "id": 221,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "targetGroupId": 11905,
                    "name": "Madridstaloyaltystreak001Streak7",
                    "targetCountOfSequence": 7
                }
            ],
            "totalPeriods": 15,
            "description": "Madridsta Demo streak 1",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 0,
            "frequency": 0,
            "targetCycleStartDate": "2023-12-19T00:00:00.000Z",
            "targetCycleEndDate": "2024-01-02T23:59:59.000Z",
            "frequencyType": "DAILY",
            "trackingType": "STREAKS",
            "createdOn": 1702900350000,
            "targets": [
                {
                    "id": 21401,
                    "attribution": {
                        "createdOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedOn": "2023-12-18T17:22:30.000+0530",
                        "lastUpdatedBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        },
                        "createdBy": {
                            "id": 50681568,
                            "code": "kerala1_till1",
                            "description": "",
                            "name": "kerala1_till1",
                            "type": "TILL"
                        }
                    },
                    "name": "MadridstaloyaltystreakTargetGroup001TXN500",
                    "emfRuleSetId": 1262814,
                    "targetType": "SALES",
                    "targetEntity": "TRANSACTION",
                    "eventName": "TransactionAdd",
                    "targetGroupId": 11905,
                    "description": "streak",
                    "active": false,
                    "expression": "currentTxn.value>500",
                    "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
                    "filters": [
                        {
                            "entityType": "STORE",
                            "entityIds": [
                                50681567
                            ]
                        }
                    ],
                    "enrolmentMethod": "TRANSACTION",
                    "defaultValues": [
                        {
                            "id": 24442,
                            "periodId": 14189,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24443,
                            "periodId": 14190,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24444,
                            "periodId": 14191,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24445,
                            "periodId": 14192,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24446,
                            "periodId": 14193,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24447,
                            "periodId": 14194,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24448,
                            "periodId": 14195,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24449,
                            "periodId": 14196,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24450,
                            "periodId": 14197,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24451,
                            "periodId": 14198,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24452,
                            "periodId": 14199,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24453,
                            "periodId": 14200,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24454,
                            "periodId": 14201,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24455,
                            "periodId": 14202,
                            "defaultValue": 500.000
                        },
                        {
                            "id": 24456,
                            "periodId": 14203,
                            "defaultValue": 500.000
                        }
                    ]
                }
            ]
        }
    ],
    "errors": [],
    "warnings": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
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
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 2
  },
  "data": [
    {
      "id": 48825,
      "attribution": {
        "createdOn": "2024-07-31T11:32:41.000+0000",
        "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
        "lastUpdatedBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        },
        "createdBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        }
      },
      "name": "TG_2024-07-31T17:02:41.041113Z",
      "active": true,
      "preferredTillId": 50145093,
      "periods": [
        {
          "id": 62128,
          "attribution": {
            "createdOn": "2024-07-31T11:32:41.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "startDate": "2024-07-31",
          "endDate": "2024-08-10",
          "refCode": "TestPeriod",
          "periodStatus": "RUNNING",
          "targetGroupId": 48825,
          "description": "Period No. 1",
          "active": true
        }
      ],
      "activePeriod": {
        "id": 62128,
        "attribution": {
          "createdOn": "2024-07-31T11:32:41.000+0000",
          "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
          "lastUpdatedBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          }
        },
        "startDate": "2024-07-31",
        "endDate": "2024-08-10",
        "refCode": "TestPeriod",
        "periodStatus": "RUNNING",
        "targetGroupId": 48825,
        "description": "Period No. 1",
        "active": true
      },
      "totalPeriods": 1,
      "description": "New target group",
      "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
      "recurringCycles": -1,
      "frequency": 0,
      "targetCycleStartDate": "2024-07-31T11:32:41.000Z",
      "targetCycleEndDate": "2029-07-31T11:32:41.000Z",
      "frequencyType": "CUSTOM",
      "trackingType": "CAPPING",
      "createdOn": 1722425561000,
      "targets": [
        {
          "id": 104296,
          "attribution": {
            "createdOn": "2024-07-31T11:32:42.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:42.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "name": "testTargetFixedWindow_2024-07-31T17:02:41.391797Z",
          "targetType": "SALES",
          "targetEntity": "TRANSACTION",
          "eventName": "TransactionAdd",
          "targetGroupId": 48825,
          "description": "milestone",
          "active": true,
          "expression": "true",
          "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
          "filters": [
            {
              "entityType": "STORE",
              "entityIds": []
            }
          ],
          "enrolmentMethod": "AUDIENCE_FILTER",
          "defaultValues": [
            {
              "id": 129407,
              "periodId": 62128,
              "defaultValue": 1.0
            }
          ],
          "targetPeriodDefaultValuesMap": {
            "62128": {
              "id": 129407,
              "periodId": 62128,
              "defaultValue": 1.0
            }
          },
          "targetMilestoneTriggers": [
            {
              "id": 21799,
              "triggerName": "targetAchieved",
              "isActive": true,
              "triggerType": "SYSTEM_TRIGGER",
              "triggerValueType": "PERCENTAGE",
              "triggerValue": 100.0,
              "targetRuleId": 104296
            }
          ],
          "targetAudienceFilter": [
            {
              "audienceGroupId": 200297896,
              "versionId": 200584500,
              "audienceFilterMetaId": 1990,
              "lastUpdatedOn": "2024-07-31T11:32:44.000+0000"
            }
          ]
        }
      ]
    },
    {
      "id": 48824,
      "attribution": {
        "createdOn": "2024-07-31T11:32:34.000+0000",
        "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
        "lastUpdatedBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        },
        "createdBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        }
      },
      "name": "TG_2024-07-31T17:02:33.517716Z",
      "active": true,
      "preferredTillId": 50145093,
      "periods": [
        {
          "id": 62127,
          "attribution": {
            "createdOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "startDate": "2024-07-31",
          "endDate": "2024-08-10",
          "refCode": "TestPeriod",
          "periodStatus": "RUNNING",
          "targetGroupId": 48824,
          "description": "Period No. 1",
          "active": true
        }
      ],
      "activePeriod": {
        "id": 62127,
        "attribution": {
          "createdOn": "2024-07-31T11:32:34.000+0000",
          "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
          "lastUpdatedBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          }
        },
        "startDate": "2024-07-31",
        "endDate": "2024-08-10",
        "refCode": "TestPeriod",
        "periodStatus": "RUNNING",
        "targetGroupId": 48824,
        "description": "Period No. 1",
        "active": true
      },
      "totalPeriods": 1,
      "description": "New target group",
      "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
      "recurringCycles": -1,
      "frequency": 0,
      "targetCycleStartDate": "2024-07-31T11:32:34.000Z",
      "targetCycleEndDate": "2029-07-31T11:32:34.000Z",
      "frequencyType": "CUSTOM",
      "trackingType": "DEFAULT",
      "createdOn": 1722425554000,
      "targets": [
        {
          "id": 104294,
          "attribution": {
            "createdOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "name": "testTargetFixedWindow_2024-07-31T17:02:33.843917Z",
          "emfRuleSetId": 1303778,
          "targetType": "COUNT",
          "targetEntity": "TRANSACTION",
          "eventName": "TransactionAdd",
          "targetGroupId": 48824,
          "description": "milestone",
          "active": true,
          "expression": "true",
          "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
          "filters": [
            {
              "entityType": "STORE",
              "entityIds": []
            }
          ],
          "enrolmentMethod": "AUDIENCE_FILTER",
          "defaultValues": [
            {
              "id": 129405,
              "periodId": 62127,
              "defaultValue": 1.0
            }
          ],
          "targetPeriodDefaultValuesMap": {
            "62127": {
              "id": 129405,
              "periodId": 62127,
              "defaultValue": 1.0
            }
          },
          "targetMilestoneTriggers": [
            {
              "id": 21798,
              "triggerName": "targetAchieved",
              "isActive": true,
              "triggerType": "SYSTEM_TRIGGER",
              "triggerValueType": "PERCENTAGE",
              "triggerValue": 100.0,
              "targetRuleId": 104294
            }
          ],
          "targetAudienceFilter": [
            {
              "audienceGroupId": 200297896,
              "versionId": 200584500,
              "audienceFilterMetaId": 1989,
              "lastUpdatedOn": "2024-07-31T11:32:40.000+0000"
            }
          ]
        }
      ]
    }
  ],
  "errors": [],
  "warnings": []
}
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 2
  },
  "data": [
    {
      "id": 48825,
      "attribution": {
        "createdOn": "2024-07-31T11:32:41.000+0000",
        "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
        "lastUpdatedBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        },
        "createdBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        }
      },
      "name": "TG_2024-07-31T17:02:41.041113Z",
      "active": true,
      "preferredTillId": 50145093,
      "periods": [
        {
          "id": 62128,
          "attribution": {
            "createdOn": "2024-07-31T11:32:41.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "startDate": "2024-07-31",
          "endDate": "2024-08-10",
          "refCode": "TestPeriod",
          "periodStatus": "RUNNING",
          "targetGroupId": 48825,
          "description": "Period No. 1",
          "active": true
        }
      ],
      "activePeriod": {
        "id": 62128,
        "attribution": {
          "createdOn": "2024-07-31T11:32:41.000+0000",
          "lastUpdatedOn": "2024-07-31T11:32:41.000+0000",
          "lastUpdatedBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          }
        },
        "startDate": "2024-07-31",
        "endDate": "2024-08-10",
        "refCode": "TestPeriod",
        "periodStatus": "RUNNING",
        "targetGroupId": 48825,
        "description": "Period No. 1",
        "active": true
      },
      "totalPeriods": 1,
      "description": "New target group",
      "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
      "recurringCycles": -1,
      "frequency": 0,
      "targetCycleStartDate": "2024-07-31T11:32:41.000Z",
      "targetCycleEndDate": "2029-07-31T11:32:41.000Z",
      "frequencyType": "CUSTOM",
      "trackingType": "CAPPING",
      "createdOn": 1722425561000,
      "targets": [
        {
          "id": 104296,
          "attribution": {
            "createdOn": "2024-07-31T11:32:42.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:42.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "name": "testTargetFixedWindow_2024-07-31T17:02:41.391797Z",
          "targetType": "SALES",
          "targetEntity": "TRANSACTION",
          "eventName": "TransactionAdd",
          "targetGroupId": 48825,
          "description": "milestone",
          "active": true,
          "expression": "true",
          "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
          "filters": [
            {
              "entityType": "STORE",
              "entityIds": []
            }
          ],
          "enrolmentMethod": "AUDIENCE_FILTER",
          "defaultValues": [
            {
              "id": 129407,
              "periodId": 62128,
              "defaultValue": 1.0
            }
          ],
          "targetPeriodDefaultValuesMap": {
            "62128": {
              "id": 129407,
              "periodId": 62128,
              "defaultValue": 1.0
            }
          },
          "targetMilestoneTriggers": [
            {
              "id": 21799,
              "triggerName": "targetAchieved",
              "isActive": true,
              "triggerType": "SYSTEM_TRIGGER",
              "triggerValueType": "PERCENTAGE",
              "triggerValue": 100.0,
              "targetRuleId": 104296
            }
          ],
          "targetAudienceFilter": [
            {
              "audienceGroupId": 200297896,
              "versionId": 200584500,
              "audienceFilterMetaId": 1990,
              "lastUpdatedOn": "2024-07-31T11:32:44.000+0000"
            }
          ]
        }
      ]
    },
    {
      "id": 48824,
      "attribution": {
        "createdOn": "2024-07-31T11:32:34.000+0000",
        "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
        "lastUpdatedBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        },
        "createdBy": {
          "id": 50145093,
          "code": "default.till.pyapps1695382050",
          "description": "default.till.pyapps1695382050",
          "name": "default.till.pyapps1695382050",
          "type": "TILL"
        }
      },
      "name": "TG_2024-07-31T17:02:33.517716Z",
      "active": true,
      "preferredTillId": 50145093,
      "periods": [
        {
          "id": 62127,
          "attribution": {
            "createdOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "startDate": "2024-07-31",
          "endDate": "2024-08-10",
          "refCode": "TestPeriod",
          "periodStatus": "RUNNING",
          "targetGroupId": 48824,
          "description": "Period No. 1",
          "active": true
        }
      ],
      "activePeriod": {
        "id": 62127,
        "attribution": {
          "createdOn": "2024-07-31T11:32:34.000+0000",
          "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
          "lastUpdatedBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          },
          "createdBy": {
            "id": 50145093,
            "code": "default.till.pyapps1695382050",
            "description": "default.till.pyapps1695382050",
            "name": "default.till.pyapps1695382050",
            "type": "TILL"
          }
        },
        "startDate": "2024-07-31",
        "endDate": "2024-08-10",
        "refCode": "TestPeriod",
        "periodStatus": "RUNNING",
        "targetGroupId": 48824,
        "description": "Period No. 1",
        "active": true
      },
      "totalPeriods": 1,
      "description": "New target group",
      "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
      "recurringCycles": -1,
      "frequency": 0,
      "targetCycleStartDate": "2024-07-31T11:32:34.000Z",
      "targetCycleEndDate": "2029-07-31T11:32:34.000Z",
      "frequencyType": "CUSTOM",
      "trackingType": "DEFAULT",
      "createdOn": 1722425554000,
      "targets": [
        {
          "id": 104294,
          "attribution": {
            "createdOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedOn": "2024-07-31T11:32:34.000+0000",
            "lastUpdatedBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            },
            "createdBy": {
              "id": 50145093,
              "code": "default.till.pyapps1695382050",
              "description": "default.till.pyapps1695382050",
              "name": "default.till.pyapps1695382050",
              "type": "TILL"
            }
          },
          "name": "testTargetFixedWindow_2024-07-31T17:02:33.843917Z",
          "emfRuleSetId": 1303778,
          "targetType": "COUNT",
          "targetEntity": "TRANSACTION",
          "eventName": "TransactionAdd",
          "targetGroupId": 48824,
          "description": "milestone",
          "active": true,
          "expression": "true",
          "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
          "filters": [
            {
              "entityType": "STORE",
              "entityIds": []
            }
          ],
          "enrolmentMethod": "AUDIENCE_FILTER",
          "defaultValues": [
            {
              "id": 129405,
              "periodId": 62127,
              "defaultValue": 1.0
            }
          ],
          "targetPeriodDefaultValuesMap": {
            "62127": {
              "id": 129405,
              "periodId": 62127,
              "defaultValue": 1.0
            }
          },
          "targetMilestoneTriggers": [
            {
              "id": 21798,
              "triggerName": "targetAchieved",
              "isActive": true,
              "triggerType": "SYSTEM_TRIGGER",
              "triggerValueType": "PERCENTAGE",
              "triggerValue": 100.0,
              "targetRuleId": 104294
            }
          ],
          "targetAudienceFilter": [
            {
              "audienceGroupId": 200297896,
              "versionId": 200584500,
              "audienceFilterMetaId": 1989,
              "lastUpdatedOn": "2024-07-31T11:32:40.000+0000"
            }
          ]
        }
      ]
    }
  ],
  "errors": [],
  "warnings": []
}
```

```
{
    "pagination": {
        "limit": 1,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "id": 1927,
            "attribution": {
            ........
            },
            "orgId": 4000110,
            "name": "milestonename",
            "active": true,
            "preferredTillId": 0,
            "totalPeriods": 1,
            "description": "a trial test ",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2024-08-02T00:00:00.000Z",
            "targetCycleEndDate": "2024-08-02T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1723454603000,
            "targets": [
                ......
            ],
            "leaderboardEnabled": true,
            "userCreated": true
        }
    ],
    "errors": [],
    "warnings": []
}
```

```
{
    "pagination": {
        "limit": 1,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "id": 1927,
            "attribution": {
            ........
            },
            "orgId": 4000110,
            "name": "milestonename",
            "active": true,
            "preferredTillId": 0,
            "totalPeriods": 1,
            "description": "a trial test ",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 1,
            "frequency": 1,
            "targetCycleStartDate": "2024-08-02T00:00:00.000Z",
            "targetCycleEndDate": "2024-08-02T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1723454603000,
            "targets": [
                ......
            ],
            "leaderboardEnabled": true,
            "userCreated": true
        }
    ],
    "errors": [],
    "warnings": []
}
```

`Try It!`