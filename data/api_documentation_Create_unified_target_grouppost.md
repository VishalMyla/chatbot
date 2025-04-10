# Create unified target grouppost

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

Aunified targetis a combination of two or more targets within atarget group. You can combine individual targets that involve differentcustomer activitiesandtracking configurations(KPIs). You can also define an overall target that a user must achieve along with the defined targets.

# API endpoint example

https://eu.api.capillarytech.com/v3/targetGroups

```
https://eu.api.capillarytech.com/v3/targetGroups
```

# Prerequisites

- Authentication: Basic authentication details

- Access group resource: WRITE access to target loyalty access group resource

# Resource information

|  |  |

| --- | --- |

| URI | /v3/targetGroups |

| HTTP method | POST |

| Rate limit | NA |

| Batch support | NA |



# Request body parameters

| Parameter (Parameters marked with * are required) | Data Type | Description |

| --- | --- | --- |

| active | Boolean | Indicates whether the group is active or not. |

| description | String | A brief description of the group. |

| fromDate | String | The start date and time of the target. |

| name* | String | The name of the target group.The character limit for the name is 200 characters. |

| preferredTillId | Integer | TILL that needs to be associated with points issued on completing the target. |

| toDate | String | The end date and time of the target. |

| trackingType* | Enum | Defines the type of activity tracking in the target. Supported values:UNIFIED,DEFAULT,STREAKS,CAPPING.Unified: Unified targets where brands can configure multiple targets in a single milestone.Default: The milestone contains only one target.Streaks: A type of gamification tracking that indicates the user to do something continuously until the streak value.Capping: Used when the milestone created is used to apply capping on benefits to customers. |

| totalPeriods* | Integer | The total number of periods in the group. |

| frequency* | Integer | The frequency of the target. |

| recurringCycles* | Integer | The number of cycles the user configures in the group.  It is set in case ofCYCLIC_WINDOWorPERIOD_AGNOSTIC_WINDOW. |

| periods | Array | An array of period objects detailing specific periods within the target. |

| - active | Boolean | Indicates whether the specific period is active. |

| - description | String | A brief description of the period. |

| - endDate | String | The end date and time of the period, in ISO 8601 format. |

| - periodStatus | Enum | The status of the unified target. Supported values:RUNNING,ENDED,NOT_STARTED |

| - refCode | String | Reference code of the target period. |

| - startDate | String | The start date and time of the period. |

| targets | Array | An array of target objects detailing specific targets within the group. |

| - active | Boolean | Indicates if the specific target is active. |

| - description | String | A brief description of the target. |

| - expression | String | A representation of the target's condition rule. |

| - expressionJson | String | A JSON body that represents the target's rule. |

| - filters | Array | An array of filter objects applied to the target. |

| -- entityType | Enum | The type of entity the filter applied. Supported values:TransactionandLine item. |

| -- entityIds | Array | An array of entity IDs to which the filter applies. |

| - name | String | The name of the target. |

| - targetEntity | Enum | Entity to define target condition. Supported values:To track transactions:TRANSACTION,LINEITEM,POINTS.To track behavioural events:EVENT.To track alternate currencies:ALTERNATE_CURRENCIESTo track points:REWARDSYou can create multiple targets using any combination of the supported target entities. For example, one target can haveTRANSACTIONas itstargetEntity, while another target could useEVENTas itstargetEntity.Refer to the documentation on creating targets that trackcustomer (EMF) events,behavioural eventsandalternate currenciesfor more information on creating these targets. |

| - enrolmentMethod | Enum | Method to enroll customers and add target values. Supported values:TRANSACTION(enroll loyalty customers who transact during the target period),IMPORT(to import a list of customers with custom target value). |

| - targetType | Enum | Target type on which the target is set. Supported values:- Transactional activities:QUANTITY,SALES(SUM),COUNT,VISIT- Behavioral events:EVENT_ATTRIBUTE.You can create multiple targets using any combination of the supported target types. For example, one target can haveQUANTITYas itstargetType, while another target could useCOUNTas itstargetType. |

| - defaultValues | Object | An array of objects specifying default values. |

| -- defaultValue | Integer | The actual target value user wants to set for the period. |

| combinationType* | Enum | A logical operator between the specified targets. Supported values:ANY(If any 1 target needs to be achieved) andALL(All the targets in a unified target group need to be achieved). |

| unifiedTargetExpression | Object | An object representing a unified expression for target evaluation. |

| - aggregation | Enum | The type of aggregation used in the unified target expression. Supported values:SUMandCOUNT. |

| - thresholdValue | Integer | The threshold value is used in the unified target expression for evaluation. This field is mandatory if you have defined value for aggregation parameter. |



`UNIFIED`

`DEFAULT`

`STREAKS`

`CAPPING`

`CYCLIC_WINDOW`

`PERIOD_AGNOSTIC_WINDOW`

`RUNNING`

`ENDED`

`NOT_STARTED`

`Transaction`

`Line item`

`TRANSACTION`

`LINEITEM`

`POINTS`

`EVENT`

`ALTERNATE_CURRENCIES`

`REWARDS`

`TRANSACTION`

`targetEntity`

`EVENT`

`targetEntity`

[customer (EMF) events](/reference/create-target-based-on-emf-eventss)

[behavioural events](/reference/create-target-group-based-on-behavioural-event)

[alternate currencies](/reference/create-target-based-on-alternate-currencies)

`TRANSACTION`

`IMPORT`

`QUANTITY`

`SALES`

`COUNT`

`VISIT`

`EVENT_ATTRIBUTE`

`QUANTITY`

`targetType`

`COUNT`

`targetType`

`ANY`

`ALL`

`SUM`

`COUNT`

```
{
    "active": true,
    "description": "unified group",
    "fromDate": "2023-09-25T13:45:12.063",
    "name": "demo-unified1",
    "preferredTillId": 50679771,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "UNIFIED",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-10-31T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-09-25T13:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "uni15",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,50679770
                    ]
                }
            ],
            "name": "t4",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",            
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni25",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t5",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni35",
            "expression": "currentTxn.value<1000",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t6",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        }
    ],
    "combinationType": "ALL",
    "unifiedTargetExpression":{
        "aggregation":"SUM",
        "thresholdValue":5000
    }
}
```

```
{
    "active": true,
    "description": "unified group",
    "fromDate": "2023-09-25T13:45:12.063",
    "name": "demo-unified1",
    "preferredTillId": 50679771,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "UNIFIED",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-10-31T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-09-25T13:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "uni15",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,50679770
                    ]
                }
            ],
            "name": "t4",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",            
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni25",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t5",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni35",
            "expression": "currentTxn.value<1000",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t6",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        }
    ],
    "combinationType": "ALL",
    "unifiedTargetExpression":{
        "aggregation":"SUM",
        "thresholdValue":5000
    }
}
```

```
{
    "active": true,
    "description": "unified group",
    "fromDate": "2023-09-25T13:45:12.063",
    "name": "demo-unified2",
    "preferredTillId": 50679771,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "UNIFIED",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-10-31T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-09-25T13:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "uni15",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,50679770
                    ]
                }
            ],
            "name": "t123",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",            
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni25",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t2656",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni35",
            "expression": "currentTxn.value<1000",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t344",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        }
    ],
    "combinationType": "ALL"

}
```

```
{
    "active": true,
    "description": "unified group",
    "fromDate": "2023-09-25T13:45:12.063",
    "name": "demo-unified2",
    "preferredTillId": 50679771,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "UNIFIED",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-10-31T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-09-25T13:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "uni15",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,50679770
                    ]
                }
            ],
            "name": "t123",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",            
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni25",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t2656",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni35",
            "expression": "currentTxn.value<1000",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "t344",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        }
    ],
    "combinationType": "ALL"

}
```

```
{
    "active": true,
    "description": "unified group",
    "fromDate": "2023-09-25T13:45:12.063",
    "name": "demo-unified3",
    "preferredTillId": 50679771,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "UNIFIED",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-10-31T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-09-25T13:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "uni15",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,50679770
                    ]
                }
            ],
            "name": "T790",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",            
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni25",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "T423",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni35",
            "expression": "currentTxn.value<1000",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "T980",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        }
    ],
    "combinationType": "ANY"

}
```

```
{
    "active": true,
    "description": "unified group",
    "fromDate": "2023-09-25T13:45:12.063",
    "name": "demo-unified3",
    "preferredTillId": 50679771,
    "toDate": "2024-10-31T08:41:00.529Z",
    "trackingType": "UNIFIED",
    "totalPeriods": 1,
    "frequency": 0,
    "recurringCycles": 0,
    "periods": [
        {
            "active": true,
            "description": "p1",
            "endDate": "2023-10-31T23:45:12.063",
            "periodStatus": "RUNNING",
            "refCode": "period44",
            "startDate": "2023-09-25T13:45:12.063"
        }
    ],
    "targets": [
        {
            "active": true,
            "description": "uni15",
            "expression": "currentTxn.value>500",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\">\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"500\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                        50679757,50679770
                    ]
                }
            ],
            "name": "T790",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",            
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni25",
            "expression": "true",
            "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "T423",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        },
        {
            "active": true,
            "description": "uni35",
            "expression": "currentTxn.value<1000",
            "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
            "filters": [
                {
                    "entityType": "STORE",
                    "entityIds": [
                      50679757,50679770
                    ]
                }
            ],
            "name": "T980",
            "targetEntity": "TRANSACTION",
            "enrolmentMethod": "TRANSACTION",
            "targetType": "SALES",
            "defaultValues": [
                {
                    "defaultValue": 2000
                }
            ]
        }
    ],
    "combinationType": "ANY"

}
```

```
{
    "data": {
        "id": 1780,
        "name": "UnifiedTarget",
        "active": true,
        "preferredTillId": 50713807,
        "periods": [
            {
                "id": 10341,
                "attribution": {
                    "createdOn": "2025-02-06T08:57:11.000+0000",
                    "lastUpdatedOn": "2025-02-06T08:57:11.000+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-12-25",
                "endDate": "2025-01-24",
                "refCode": "Cycle_1111",
                "periodStatus": "ENDED",
                "targetGroupId": 1780,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "Unified-TG",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-12-24T18:30:00.000Z",
        "targetCycleEndDate": "2025-02-25T18:29:59.999Z",
        "frequencyType": "MONTHLY",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 2042,
                "attribution": {
                    "createdOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    }
                },
                "name": "TransactionTarget",
                "emfRuleSetId": 126376826,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "eventName": "TransactionAdd",
                "targetGroupId": 1780,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1001",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1001\",\"type\":\"number:primitive\"}]}",
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 13479,
                        "periodId": 10341,
                        "defaultValue": 2000.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "10341": {
                        "id": 13479,
                        "periodId": 10341,
                        "defaultValue": 2000.000
                    }
                }
            },
            {
                "id": 2043,
                "attribution": {
                    "createdOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    }
                },
                "name": "BehavioralTarget",
                "emfRuleSetId": 126376827,
                "targetType": "COUNT",
                "targetEntity": "EVENT",
                "eventName": "CustomerUpdate",
                "targetGroupId": 1780,
                "description": "unified-TG-custUpdateCount2",
                "active": true,
                "expression": "true",
                "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                "filters": [],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 13480,
                        "periodId": 10341,
                        "defaultValue": 2.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "10341": {
                        "id": 13480,
                        "periodId": 10341,
                        "defaultValue": 2.000
                    }
                }
            }
        ],
        "combinationType": "ALL",
        "unifiedTargetExpression": {
            "aggregation": "SUM",
            "thresholdValue": 2002,
            "ruleExpression": "(2042 & 2043)"
        },
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
        "id": 1780,
        "name": "UnifiedTarget",
        "active": true,
        "preferredTillId": 50713807,
        "periods": [
            {
                "id": 10341,
                "attribution": {
                    "createdOn": "2025-02-06T08:57:11.000+0000",
                    "lastUpdatedOn": "2025-02-06T08:57:11.000+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    }
                },
                "startDate": "2024-12-25",
                "endDate": "2025-01-24",
                "refCode": "Cycle_1111",
                "periodStatus": "ENDED",
                "targetGroupId": 1780,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "Unified-TG",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2024-12-24T18:30:00.000Z",
        "targetCycleEndDate": "2025-02-25T18:29:59.999Z",
        "frequencyType": "MONTHLY",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 2042,
                "attribution": {
                    "createdOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    }
                },
                "name": "TransactionTarget",
                "emfRuleSetId": 126376826,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "eventName": "TransactionAdd",
                "targetGroupId": 1780,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1001",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1001\",\"type\":\"number:primitive\"}]}",
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 13479,
                        "periodId": 10341,
                        "defaultValue": 2000.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "10341": {
                        "id": 13479,
                        "periodId": 10341,
                        "defaultValue": 2000.000
                    }
                }
            },
            {
                "id": 2043,
                "attribution": {
                    "createdOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedOn": "2025-02-06T08:57:11.153+0000",
                    "lastUpdatedBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 75152721,
                        "code": "naman_doc",
                        "description": "",
                        "name": "naman_doc",
                        "type": "TILL"
                    }
                },
                "name": "BehavioralTarget",
                "emfRuleSetId": 126376827,
                "targetType": "COUNT",
                "targetEntity": "EVENT",
                "eventName": "CustomerUpdate",
                "targetGroupId": 1780,
                "description": "unified-TG-custUpdateCount2",
                "active": true,
                "expression": "true",
                "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
                "filters": [],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 13480,
                        "periodId": 10341,
                        "defaultValue": 2.000
                    }
                ],
                "targetPeriodDefaultValuesMap": {
                    "10341": {
                        "id": 13480,
                        "periodId": 10341,
                        "defaultValue": 2.000
                    }
                }
            }
        ],
        "combinationType": "ALL",
        "unifiedTargetExpression": {
            "aggregation": "SUM",
            "thresholdValue": 2002,
            "ruleExpression": "(2042 & 2043)"
        },
        "leaderboardEnabled": false,
        "userCreated": false
    },
    "errors": null,
    "warnings": null
}
```

```
{
   "name": "UnifiedTarget",
   "description": "",
   "active": true,
   "trackingType": "UNIFIED",
   "preferredTillId": 50713807,
   "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
   "targetCycleStartDate": "2024-12-24T18:30:00.000Z",
   "targetCycleEndDate": "2025-02-25T18:29:59.999Z",
   "leaderboardEnabled": false,
   "totalPeriods": 1,
   "frequencyType": "MONTHLY",
   "frequency": 0,
   "recurringCycles": 0,
   "periods": [
     {
       "refCode": "Cycle_1111",
       "startDate": "2024-12-25",
       "endDate": "2025-01-24",
       "active": true,
       "description": "p1",
       "periodStatus": "RUNNING"
     }
   ],
 "targets": [
       {
   "expression": "true",
   "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
   "filters": [],
   "eventName": "event2",
   "name": "visit_target",
   "targetType": "VISIT",
   "targetEntity": "EVENT",
   "defaultValues": [
       {
       "defaultValue": "2"
       }
   ],
   "enrolmentMethod": "TRANSACTION",
   "description": "unified-TG-BE-VISIT1"
   },
   {
     "eventName": "event",
     "name": "sum_target",
     "targetType": "EVENT_ATTRIBUTE",
     "targetEntity": "EVENT",
     "expression": "true",
     "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
     "filters": [],
     "defaultValues": [
       {
         "defaultValue": "4"
       }
     ],
     "extendedFieldInfo": {
                "name": "steps",
                "aggregateFunction": "SUM"
    },
     "enrolmentMethod": "TRANSACTION",
     "description": "unified-TG-BE-SUM22"
   }
 ],
   "combinationType": "ALL",
   "unifiedTargetExpression":{
       "aggregation":"SUM",
       "thresholdValue":6
   }
}
```

```
{
   "name": "UnifiedTarget",
   "description": "",
   "active": true,
   "trackingType": "UNIFIED",
   "preferredTillId": 50713807,
   "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
   "targetCycleStartDate": "2024-12-24T18:30:00.000Z",
   "targetCycleEndDate": "2025-02-25T18:29:59.999Z",
   "leaderboardEnabled": false,
   "totalPeriods": 1,
   "frequencyType": "MONTHLY",
   "frequency": 0,
   "recurringCycles": 0,
   "periods": [
     {
       "refCode": "Cycle_1111",
       "startDate": "2024-12-25",
       "endDate": "2025-01-24",
       "active": true,
       "description": "p1",
       "periodStatus": "RUNNING"
     }
   ],
 "targets": [
       {
   "expression": "true",
   "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
   "filters": [],
   "eventName": "event2",
   "name": "visit_target",
   "targetType": "VISIT",
   "targetEntity": "EVENT",
   "defaultValues": [
       {
       "defaultValue": "2"
       }
   ],
   "enrolmentMethod": "TRANSACTION",
   "description": "unified-TG-BE-VISIT1"
   },
   {
     "eventName": "event",
     "name": "sum_target",
     "targetType": "EVENT_ATTRIBUTE",
     "targetEntity": "EVENT",
     "expression": "true",
     "expressionJson": "\n{\n  \"arity\":\"literal\",\n  \"value\":\"true\",\n  \"type\":\"boolean:primitive\"\n}",
     "filters": [],
     "defaultValues": [
       {
         "defaultValue": "4"
       }
     ],
     "extendedFieldInfo": {
                "name": "steps",
                "aggregateFunction": "SUM"
    },
     "enrolmentMethod": "TRANSACTION",
     "description": "unified-TG-BE-SUM22"
   }
 ],
   "combinationType": "ALL",
   "unifiedTargetExpression":{
       "aggregation":"SUM",
       "thresholdValue":6
   }
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Object | The main object containing all the details. |

| id | Integer | The unique identifier for the target. |

| name | String | The name of the target. |

| fromDate | String | The start date for the target. |

| toDate | String | The end date for the target . |

| active | Boolean | Indicates whether the target is active. |

| preferredTillId | Integer | A unique identifier of the till. |

| periods | Array | An array of period objects detailing specific periods within the target. |

| id | Integer | The unique identifier for each target. |

| attribution | Object | An object containing attribution details for the target. |

| createdOn | String | The creation timestamp of the target. |

| lastUpdatedOn | String | The last update timestamp of the target. |

| lastUpdatedBy | Object | An object containing details about who last updated the target. |

| createdBy | Object | An object containing details about who created the target. |

| startDate | String | The start date of the target. |

| endDate | String | The end date of the target. |

| refCode | String | A reference code for the period. |

| periodStatus | String | The status of the target. (e.g., "RUNNING"). |

| targetGroupId | Integer | The ID of the target group associated with the target. |

| description | String | A brief description of the target. |

| active | Boolean | Indicates whether the period is active. |

| totalPeriods | Integer | The total number of periods within the target. |

| description | String | A brief description of the target. |

| targetEvaluationType | String | The type of target evaluation used. |

| recurringCycles | Integer | The number of recurring cycles. |

| frequency | Integer | The frequency of the target. |

| targetCycleStartDate | String | The start date of the target cycle. |

| targetCycleEndDate | String | The end date of the target cycle. |

| trackingType | String | Defines the type of activity tracking in the target. Possible values:UNIFIED,DEFAULT,STREAKS,CAPPING. |

| targets | Array | An array of target objects detailing specific targets. |

| id | Integer | The unique identifier for each target. |

| attribution | Object | An object containing attribution details for the target. |

| name | String | The name of the target. |

| emfRuleSetId | Integer | The ID of the rule set associated with the target. |

| targetType | String | The type of target. |

| targetEntity | String | Entity to define target condition. Possible values:TRANSACTION,LINEITEM,POINTS. |

| targetGroupId | Integer | The ID of the target group associated with the target. |

| description | String | A brief description of the target. |

| active | Boolean | Indicates whether the target is active. |

| expression | String | A textual representation of the target's condition or rule. |

| expressionJson | String | A JSON string representing the logical structure of the target's condition or rule. |

| filters | Array | An array of filter objects applied to the target. |

| enrolmentMethod | String | Method to enroll customers and add target values. Possible values:TRANSACTION(enroll loyalty customers who transact during the target period),IMPORT(to import a list of customers with custom target value). |

| defaultValues | Array | An array of objects specifying default values, likely for some calculations or thresholds. |

| id | Integer | The unique identifier for each default value. |

| periodId | Integer | The ID of the period associated with the default value. |

| defaultValue | Integer | A default value used within the target's context. |

| combinationType | String | A logical operator between the specified targets. Possible values:ANY(If any 1 target needs to be achieved) andALL(All the targets in a unified target group need to be achieved). |

| unifiedTargetExpression | Object | An object representing a unified expression for target evaluation. |

| aggregation | String | The type of aggregation used in the unified target expression (e.g., "SUM"). |

| thresholdValue | Integer | The threshold value used in the unified target expression for evaluation. |

| ruleExpression | String | A string representing the rule expression in the unified target expression. |



`UNIFIED`

`DEFAULT`

`STREAKS`

`CAPPING`

`TRANSACTION`

`LINEITEM`

`POINTS`

`TRANSACTION`

`IMPORT`

`ANY`

`ALL`

```
{
    "data": {
        "id": 6104,
        "name": "demo-unified1",
        "fromDate": "2023-09-25",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50679771,
        "periods": [
            {
                "id": 6883,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.320+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.320+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-09-25",
                "endDate": "2023-10-31",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 6104,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "unified group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2023-09-25T00:00:00.000Z",
        "targetCycleEndDate": "2023-10-31T23:59:59.000Z",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 9107,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t4",
                "emfRuleSetId": 1246740,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10123,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9108,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t5",
                "emfRuleSetId": 1246741,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10124,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9109,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t6",
                "emfRuleSetId": 1246742,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10125,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9110,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t4_ReturnBill",
                "emfRuleSetId": 1246743,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10126,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9111,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t5_ReturnBill",
                "emfRuleSetId": 1246744,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10127,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9112,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t6_ReturnBill",
                "emfRuleSetId": 1246745,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10128,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            }
        ],
        "combinationType": "ALL",
        "unifiedTargetExpression": {
            "aggregation": "SUM",
            "thresholdValue": 5000,
            "ruleExpression": "(9107 & 9108 & 9109)"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 6104,
        "name": "demo-unified1",
        "fromDate": "2023-09-25",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50679771,
        "periods": [
            {
                "id": 6883,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.320+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.320+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-09-25",
                "endDate": "2023-10-31",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 6104,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "unified group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2023-09-25T00:00:00.000Z",
        "targetCycleEndDate": "2023-10-31T23:59:59.000Z",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 9107,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t4",
                "emfRuleSetId": 1246740,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10123,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9108,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t5",
                "emfRuleSetId": 1246741,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10124,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9109,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.340+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t6",
                "emfRuleSetId": 1246742,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10125,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9110,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t4_ReturnBill",
                "emfRuleSetId": 1246743,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10126,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9111,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t5_ReturnBill",
                "emfRuleSetId": 1246744,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10127,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9112,
                "attribution": {
                    "createdOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedOn": "2023-09-25T17:26:26.480+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t6_ReturnBill",
                "emfRuleSetId": 1246745,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6104,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10128,
                        "periodId": 6883,
                        "defaultValue": 2000
                    }
                ]
            }
        ],
        "combinationType": "ALL",
        "unifiedTargetExpression": {
            "aggregation": "SUM",
            "thresholdValue": 5000,
            "ruleExpression": "(9107 & 9108 & 9109)"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 6107,
        "name": "demo-unified2",
        "fromDate": "2023-09-25",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50679771,
        "periods": [
            {
                "id": 6886,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.471+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.471+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-09-25",
                "endDate": "2023-10-31",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 6107,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "unified group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2023-09-25T00:00:00.000Z",
        "targetCycleEndDate": "2023-10-31T23:59:59.000Z",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 9115,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t123",
                "emfRuleSetId": 1246748,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10131,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9116,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t2656",
                "emfRuleSetId": 1246749,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10132,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9117,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t344",
                "emfRuleSetId": 1246750,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10133,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9118,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t123_ReturnBill",
                "emfRuleSetId": 1246751,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10134,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9119,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t2656_ReturnBill",
                "emfRuleSetId": 1246752,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10135,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9120,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t344_ReturnBill",
                "emfRuleSetId": 1246753,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10136,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            }
        ],
        "combinationType": "ALL",
        "unifiedTargetExpression": {
            "aggregation": null,
            "thresholdValue": null,
            "ruleExpression": "(9115 & 9116 & 9117)"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 6107,
        "name": "demo-unified2",
        "fromDate": "2023-09-25",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50679771,
        "periods": [
            {
                "id": 6886,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.471+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.471+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-09-25",
                "endDate": "2023-10-31",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 6107,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "unified group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2023-09-25T00:00:00.000Z",
        "targetCycleEndDate": "2023-10-31T23:59:59.000Z",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 9115,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t123",
                "emfRuleSetId": 1246748,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10131,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9116,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t2656",
                "emfRuleSetId": 1246749,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10132,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9117,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.483+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t344",
                "emfRuleSetId": 1246750,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10133,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9118,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t123_ReturnBill",
                "emfRuleSetId": 1246751,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10134,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9119,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t2656_ReturnBill",
                "emfRuleSetId": 1246752,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10135,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9120,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:24.632+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "t344_ReturnBill",
                "emfRuleSetId": 1246753,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6107,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10136,
                        "periodId": 6886,
                        "defaultValue": 2000
                    }
                ]
            }
        ],
        "combinationType": "ALL",
        "unifiedTargetExpression": {
            "aggregation": null,
            "thresholdValue": null,
            "ruleExpression": "(9115 & 9116 & 9117)"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 6108,
        "name": "demo-unified3",
        "fromDate": "2023-09-25",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50679771,
        "periods": [
            {
                "id": 6887,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.313+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.313+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-09-25",
                "endDate": "2023-10-31",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 6108,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "unified group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2023-09-25T00:00:00.000Z",
        "targetCycleEndDate": "2023-10-31T23:59:59.000Z",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 9121,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T790",
                "emfRuleSetId": 1246754,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10137,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9122,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T423",
                "emfRuleSetId": 1246755,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10138,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9123,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T980",
                "emfRuleSetId": 1246756,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10139,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9124,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T790_ReturnBill",
                "emfRuleSetId": 1246757,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10140,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9125,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T423_ReturnBill",
                "emfRuleSetId": 1246758,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10141,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9126,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T980_ReturnBill",
                "emfRuleSetId": 1246759,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10142,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            }
        ],
        "combinationType": "ANY",
        "unifiedTargetExpression": {
            "aggregation": null,
            "thresholdValue": null,
            "ruleExpression": "(9121 | 9122 | 9123)"
        }
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": 6108,
        "name": "demo-unified3",
        "fromDate": "2023-09-25",
        "toDate": "2024-10-31",
        "active": true,
        "preferredTillId": 50679771,
        "periods": [
            {
                "id": 6887,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.313+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.313+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-09-25",
                "endDate": "2023-10-31",
                "refCode": "period44",
                "periodStatus": "RUNNING",
                "targetGroupId": 6108,
                "description": "p1",
                "active": true
            }
        ],
        "totalPeriods": 1,
        "description": "unified group",
        "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
        "recurringCycles": 0,
        "frequency": 0,
        "targetCycleStartDate": "2023-09-25T00:00:00.000Z",
        "targetCycleEndDate": "2023-10-31T23:59:59.000Z",
        "trackingType": "UNIFIED",
        "targets": [
            {
                "id": 9121,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T790",
                "emfRuleSetId": 1246754,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10137,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9122,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T423",
                "emfRuleSetId": 1246755,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10138,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9123,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.327+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T980",
                "emfRuleSetId": 1246756,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10139,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9124,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T790_ReturnBill",
                "emfRuleSetId": 1246757,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni15",
                "active": true,
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
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10140,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9125,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T423_ReturnBill",
                "emfRuleSetId": 1246758,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni25",
                "active": true,
                "expression": "true",
                "expressionJson": "{\"arity\":\"literal\",\"value\":\"true\",\"type\":\"boolean:primitive\"}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10141,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            },
            {
                "id": 9126,
                "attribution": {
                    "createdOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedOn": "2023-09-25T17:27:53.539+0530",
                    "lastUpdatedBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50679771,
                        "code": "walmart_1",
                        "description": "",
                        "name": "walmart_1",
                        "type": "TILL"
                    }
                },
                "name": "T980_ReturnBill",
                "emfRuleSetId": 1246759,
                "targetType": "SALES",
                "targetEntity": "TRANSACTION",
                "targetGroupId": 6108,
                "description": "uni35",
                "active": true,
                "expression": "currentTxn.value<1000",
                "expressionJson": "{\"arity\":\"binary_operation\",\"value\":\"<\",\"type\":\"boolean:primitive\",\"operands\":[{\"arity\":\"object_dereference\",\"type\":\"real:object:primitive\",\"operands\":[{\"arity\":\"name\",\"value\":\"currentTxn\",\"type\":\"tx:object:primitive\"},{\"arity\":\"name\",\"value\":\"value\",\"type\":\"real:object:primitive\"}]},{\"arity\":\"literal\",\"value\":\"1000\",\"type\":\"number:primitive\"}]}",
                "filters": [
                    {
                        "entityType": "STORE",
                        "entityIds": [
                            50679757,
                            50679770
                        ]
                    }
                ],
                "enrolmentMethod": "TRANSACTION",
                "defaultValues": [
                    {
                        "id": 10142,
                        "periodId": 6887,
                        "defaultValue": 2000
                    }
                ]
            }
        ],
        "combinationType": "ANY",
        "unifiedTargetExpression": {
            "aggregation": null,
            "thresholdValue": null,
            "ruleExpression": "(9121 | 9122 | 9123)"
        }
    },
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