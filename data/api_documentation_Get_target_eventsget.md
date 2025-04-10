# Get target eventsget

This API fetches theeventsthat are associated with a target or streak for a customer. Enter auserId(customer Id) and thetargetRuleIdof the target the customer is enrolled in to fetch the data of the customer events (behavioural and non-behavioural).

`userId`

`targetRuleId`

> 👍NoteFor detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and step-by-step guide onmaking your first API call.

## 👍Note

Note

For detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and step-by-step guide onmaking your first API call.

# Prerequisites

- Authentication: Basic/OAuth authentication

- Default access group

# Resource Information

|  |  |

| --- | --- |

| URI | v3/users/{userId}/trackedTargetEvents/{targetRuleId} |

| HTTP method | GET |

| Pagination | Yes. Sorting is not supported. Results are displayed in chronological order. |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/v3/users/387538614/trackedTargetEvents/79196

```
https://eu.api.capillarytech.com/v3/users/387538614/trackedTargetEvents/79196
```

# Path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| userId | Long | Unique ID of the customer. |

| targetRuleId | Long | Unique ID of the target rule.Use theGet associated target groups of a user APIto fetch thetargetRuleIdfor a customer enrolled in a milestone / target. |



[Get associated target groups of a user API](/reference/getusertargetgroupdetails)

`targetRuleId`

# Query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| periodId | Long | Unique ID of the target period. Provide aperiodIdto filter events for a specific time period /target cyclewithin the target.Use theGet target periods APIand use thetargetGroupIdof the target to fetch theperiodIdfor a customer enrolled in a milestone / target. |

| limit | Integer | Number of events to display per page. For example, if the total events are 15 and the limit is 5, the first page will display the first 5 events . |

| offset | Integer | Page number to retrieve. To view the first page, set the value to 0. |



`periodId`

[target cycle](/docs/milestones-new-flow#milestone-cycle-details)

[Get target periods API](/reference/get-target-periods)

`targetGroupId`

`periodId`

# Response body

```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 10
    },
    "data": [
        {
            "eventLogId": 606066681,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880613909",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 606066721,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880613938",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 606068043,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880614460",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 606072487,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880616667",
            "eventDate": "2025-01-09 13:00:12.0",
            "eventProcessedDate": "2025-01-09 13:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000.46
        },
        {
            "eventLogId": 608082820,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880897427",
            "eventDate": "2025-01-09 13:00:12.0",
            "eventProcessedDate": "2025-01-09 13:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000.46
        },
        {
            "eventLogId": 615116253,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881039056",
            "eventDate": "2025-01-20 13:00:00.0",
            "eventProcessedDate": "2025-01-20 13:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 999.54
        },
        {
            "eventLogId": 615376598,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881070102",
            "eventDate": "2025-01-21 09:00:00.0",
            "eventProcessedDate": "2025-01-21 09:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 615376684,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881070130",
            "eventDate": "2025-01-21 09:00:00.0",
            "eventProcessedDate": "2025-01-21 09:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615460983,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101809",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615461137,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101873",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
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
        "total": 10
    },
    "data": [
        {
            "eventLogId": 606066681,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880613909",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 606066721,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880613938",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 606068043,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880614460",
            "eventDate": "2025-01-09 12:00:12.0",
            "eventProcessedDate": "2025-01-09 12:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 606072487,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880616667",
            "eventDate": "2025-01-09 13:00:12.0",
            "eventProcessedDate": "2025-01-09 13:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000.46
        },
        {
            "eventLogId": 608082820,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "880897427",
            "eventDate": "2025-01-09 13:00:12.0",
            "eventProcessedDate": "2025-01-09 13:00:12.0",
            "periodId": 9887,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000.46
        },
        {
            "eventLogId": 615116253,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881039056",
            "eventDate": "2025-01-20 13:00:00.0",
            "eventProcessedDate": "2025-01-20 13:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 999.54
        },
        {
            "eventLogId": 615376598,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881070102",
            "eventDate": "2025-01-21 09:00:00.0",
            "eventProcessedDate": "2025-01-21 09:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 2000
        },
        {
            "eventLogId": 615376684,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881070130",
            "eventDate": "2025-01-21 09:00:00.0",
            "eventProcessedDate": "2025-01-21 09:00:00.0",
            "periodId": 9888,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615460983,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101809",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615461137,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101873",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
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
            "eventLogId": 31748158,
            "eventName": "GENERIC_EVENT",
            "customerId": 387544807,
            "eventDisplayName": "testBehavioural",
            "uniqueId": "6621dee9-6c2a-43ad-aa41-be2bf138de04",
            "eventDate": "2024-12-05 00:00:00.0",
            "eventProcessedDate": "2024-12-12 18:42:52.0",
            "periodId": 77865,
            "targetGroupId": 52065,
            "targetRuleId": 79192,
            "targetValue": 1.000
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
            "eventLogId": 31748158,
            "eventName": "GENERIC_EVENT",
            "customerId": 387544807,
            "eventDisplayName": "testBehavioural",
            "uniqueId": "6621dee9-6c2a-43ad-aa41-be2bf138de04",
            "eventDate": "2024-12-05 00:00:00.0",
            "eventProcessedDate": "2024-12-12 18:42:52.0",
            "periodId": 77865,
            "targetGroupId": 52065,
            "targetRuleId": 79192,
            "targetValue": 1.000
        }
    ],
    "errors": [],
    "warnings": []
}
```

```
{
    "pagination": {
        "limit": 30,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "eventLogId": 615460983,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101809",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615461137,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101873",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        }
    ],
    "errors": [],
    "warnings": []
}
```

```
{
    "pagination": {
        "limit": 30,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "eventLogId": 615460983,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101809",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        },
        {
            "eventLogId": 615461137,
            "eventName": "ADD_TRANSACTION",
            "customerId": 564332013,
            "eventDisplayName": null,
            "uniqueId": "881101873",
            "eventDate": "2025-01-22 14:00:00.0",
            "eventProcessedDate": "2025-01-22 14:00:00.0",
            "periodId": 9889,
            "targetGroupId": 1717,
            "targetRuleId": 1986,
            "targetValue": 1000
        }
    ],
    "errors": [],
    "warnings": []
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| pagination | Object containing details of the page. |

| - limit | Number of events displayed on the page. |

| - offset | Current page number. |

| - total | Total number of pages. |

| data | Object containing details of the events. |

| - eventLogId | Unique ID of the event that is triggered. |

| - eventName | Name of the event. Possible values:GENERIC_EVENT,ADD_TRANSACTION,RETURN_BILL,ENROL,UNENROL |

| - customerId | Unique ID of the customer who triggered the event. |

| - eventDisplayName | Unique name of the behavioural event that is triggered. The value isnullfor transactional events. |

| - uniqueId | Unique ID of the event.For a behavioural event, theuniqueIdis therequestIdof the event.For a non-behavioural event, theuniqueIdis theeventSubjectIdof the event. |

| - eventDate | Date when the event is triggered inYYYY-MM-DD HH:MM:SS.sformat. |

| - eventProcessedDate | Date when the event is processed by the backend inYYYY-MM-DD HH:MM:SS.sformat. |

| - periodId | Unique ID of thetarget period. |

| - targetGroupId | Unique ID of the target group associated with the target. |

| - targetRuleId | Unique ID of the target rule. |

| - targetValue | Total transaction amount for a transactional event. For behavioural event the value is always1.000. |

| errors | Object containing errors, if any. |

| warnings | Object containing warnings, if any. |



`GENERIC_EVENT`

`ADD_TRANSACTION`

`RETURN_BILL`

`ENROL`

`UNENROL`

`null`

`uniqueId`

`requestId`

`uniqueId`

`eventSubjectId`

`YYYY-MM-DD HH:MM:SS.s`

`YYYY-MM-DD HH:MM:SS.s`

[target period](/docs/milestones-new-flow#milestone-cycle-details)

`1.000`

# API error codes

| Error Code | Description | Reason |

| --- | --- | --- |

| 310019 | Target period not found | periodIdis incorrect or invalid. |

| 310018 | Target rule not found | ruleIdis incorrect or invalid. |

| 310011 | Invalid userId | userIdis incorrect or invalid. |

| 310149 | No record found in user target for given UserId and TargetId | No events are recorded for the user. |



`periodId`

`ruleId`

`userId`

`Try It!`