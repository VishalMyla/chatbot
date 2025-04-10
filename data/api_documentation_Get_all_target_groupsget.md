# Get all target groupsget

This API allows you to fetch all the target groups.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

<https://eucrm.cc.capillarytech.com/v3/targetGroups>

```
<https://eucrm.cc.capillarytech.com/v3/targetGroups>
```

# Prerequisites

- Basic Authentication

- Default access group

# API Specification

|  |  |

| --- | --- |

| URI | v3/targetGroups |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| includePeriods | Boolean | Boolean flag to include target period. |



```
https://eucrm.cc.capillarytech.com/v3/targetGroups
```

```
https://eucrm.cc.capillarytech.com/v3/targetGroups
```

# Response parameters

| Field | Datatype | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the target group. |

| attribution.createdOn | Date-time | Creation date and time for the target group. |

| attribution.lastUpdatedOn | Date-time | Last update date and time for the target group. |

| attribution.lastUpdatedBy.id | Integer | ID of the last user who updated the target group. |

| attribution.lastUpdatedBy.code | String | Code of the last user who updated the target group. |

| attribution.lastUpdatedBy.description | String | Description of the last user who updated the target group. |

| attribution.lastUpdatedBy.name | String | Name of the last user who updated the target group. |

| attribution.lastUpdatedBy.type | String | Type of the last user who updated the target group, e.g., "ADMIN_USER". |

| attribution.createdBy.id | Integer | ID of the user who created the target group. |

| attribution.createdBy.code | String | Code of the user who created the target group. |

| attribution.createdBy.description | String | Description of the user who created the target group. |

| attribution.createdBy.name | String | Name of the user who created the target group. |

| attribution.createdBy.type | String | Type of the user who created the target group, e.g., "ADMIN_USER". |

| name | String | Name of the target group. |

| active | Boolean | Indicates if the target group is active. |

| preferredTillId | Integer | Preferred till ID. |

| streaks[] | Object | Array of streak objects related to the target group. |

| activePeriod | Object | Details of the currently active period, including its ID, start and end dates, and status. |

| totalPeriods | Integer | Total number of periods specified. |

| description | String | Description of the target group. |

| targetEvaluationType | String | Type of target evaluation, e.g., "FIXED_CALENDAR_WINDOW". |

| recurringCycles | Integer | Number of recurring cycles specified. |

| frequency | Integer | Frequency value set for the target cycle. |

| targetCycleStartDate | Date-time | Start date and time for the target cycle. |

| targetCycleEndDate | Date-time | End date and time for the target cycle. |

| frequencyType | String | Frequency type, e.g., "CUSTOM", "QUARTERLY". |

| trackingType | String | Type of tracking, e.g., "DEFAULT", "STREAKS", "CAPPING". |

| createdOn | Long | Creation timestamp for the target group. |



```
{
    "data": [
        {
            "id": 1388,
            "attribution": {
                "createdOn": "2023-10-09T15:00:51.000+0000",
                "lastUpdatedOn": "2023-10-09T15:00:51.000+0000",
                "lastUpdatedBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                }
            },
            "name": "TEST_CAP_105137bjhg",
            "active": true,
            "preferredTillId": 0,
            "streaks": [],
            "activePeriod": {
                "id": 1795,
                "attribution": {
                    "createdOn": "2023-10-09T15:01:03.000+0000",
                    "lastUpdatedOn": "2023-10-09T15:01:03.000+0000",
                    "lastUpdatedBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-10-09",
                "endDate": "2024-10-29",
                "refCode": "string1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1388,
                "description": "string",
                "active": true
            },
            "totalPeriods": 1,
            "description": "TGF19",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 5,
            "targetCycleStartDate": "2023-10-09T15:00:51.000Z",
            "targetCycleEndDate": "2028-10-09T15:00:51.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1696863651000
        },
        {
            "id": 1387,
            "attribution": {
                "createdOn": "2023-10-09T13:18:40.000+0000",
                "lastUpdatedOn": "2023-10-09T13:18:40.000+0000",
                "lastUpdatedBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                }
            },
            "name": "TEST_CAP_105137b",
            "active": true,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 3,
                    "attribution": {
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "lastUpdatedBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        }
                    },
                    "targetGroupId": 1387,
                    "name": "streaks_dummy3",
                    "targetCountOfSequence": 1
                }
            ],
            "activePeriod": {
                "id": 1794,
                "attribution": {
                    "createdOn": "2023-10-09T13:19:08.000+0000",
                    "lastUpdatedOn": "2023-10-09T13:19:08.000+0000",
                    "lastUpdatedBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-10-09",
                "endDate": "2024-10-29",
                "refCode": "string1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1387,
                "description": "string",
                "active": true
            },
            "totalPeriods": 1,
            "description": "TGF19",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 5,
            "targetCycleStartDate": "2023-10-09T13:18:40.000Z",
            "targetCycleEndDate": "2028-10-09T13:18:40.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "STREAKS",
            "createdOn": 1696857520000
        },
        {
            "id": 1386,
            "attribution": {
                "createdOn": "2023-10-09T12:44:45.000+0000",
                "lastUpdatedOn": "2023-10-09T12:44:45.000+0000",
                "lastUpdatedBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                }
            },
            "name": "TEST_CAP_105137",
            "active": true,
            "preferredTillId": 0,
            "streaks": [],
            "activePeriod": {
                "id": 1793,
                "attribution": {
                    "createdOn": "2023-10-09T13:12:06.000+0000",
                    "lastUpdatedOn": "2023-10-09T13:12:06.000+0000",
                    "lastUpdatedBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-10-09",
                "endDate": "2024-10-29",
                "refCode": "string1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1386,
                "description": "string",
                "active": true
            },
            "totalPeriods": 1,
            "description": "TGF19",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 5,
            "targetCycleStartDate": "2023-10-09T12:44:45.000Z",
            "targetCycleEndDate": "2028-10-09T12:44:45.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1696855485000
        },
        {
            "id": 1253,
            "attribution": {
                "createdOn": "2023-08-29T07:18:49.000+0000",
                "lastUpdatedOn": "2023-08-29T07:18:49.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "billExtendedFieldsTracking",
            "active": true,
            "preferredTillId": 50674058,
            "streaks": [
                {
                    "id": 1,
                    "attribution": {
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "lastUpdatedBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        }
                    },
                    "targetGroupId": 1253,
                    "name": "streaks_dummy",
                    "targetCountOfSequence": 1
                },
                {
                    "id": 2,
                    "attribution": {
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "lastUpdatedBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        }
                    },
                    "targetGroupId": 1253,
                    "name": "streaks_dummy2",
                    "targetCountOfSequence": 1
                }
            ],
            "activePeriod": {
                "id": 1743,
                "attribution": {
                    "createdOn": "2023-08-29T07:18:49.000+0000",
                    "lastUpdatedOn": "2023-08-29T07:18:49.000+0000",
                    "lastUpdatedBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2023-08-29",
                "endDate": "2023-11-28",
                "refCode": "p1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1253,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-29T00:00:00.000Z",
            "targetCycleEndDate": "2023-11-28T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "DEFAULT",
            "createdOn": 1693293529000
        },
        {
            "id": 1221,
            "attribution": {
                "createdOn": "2023-08-22T11:14:19.000+0000",
                "lastUpdatedOn": "2023-08-22T11:14:19.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetAgnosticPoints",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 4,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 4,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-22T11:14:15.000Z",
            "targetCycleEndDate": "2023-09-29T18:30:00.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1692702859000
        },
        {
            "id": 1220,
            "attribution": {
                "createdOn": "2023-08-22T11:07:56.000+0000",
                "lastUpdatedOn": "2023-08-22T11:07:56.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetAgnostic",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 3,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 3,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-22T11:07:51.000Z",
            "targetCycleEndDate": "2023-09-29T18:30:00.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1692702476000
        },
        {
            "id": 1219,
            "attribution": {
                "createdOn": "2023-08-22T10:55:46.000+0000",
                "lastUpdatedOn": "2023-08-22T10:55:46.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "agnosticPeriodGrp",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 4,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 4,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-22T10:55:46.000Z",
            "targetCycleEndDate": "2028-08-22T10:55:46.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1692701746000
        },
        {
            "id": 1030,
            "attribution": {
                "createdOn": "2023-07-10T12:16:21.000+0000",
                "lastUpdatedOn": "2023-07-10T12:16:21.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetGrpNEW",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "activePeriod": {
                "id": 1363,
                "attribution": {
                    "createdOn": "2023-07-10T12:16:21.000+0000",
                    "lastUpdatedOn": "2023-07-10T12:16:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2023-07-10",
                "endDate": "2023-10-31",
                "refCode": "periodd1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1030,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleEndDate": "2028-12-31T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1688991381000
        },
        {
            "id": 36,
            "attribution": {
                "createdOn": "2023-05-23T07:27:10.000+0000",
                "lastUpdatedOn": "2023-05-23T07:27:10.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetGrp1",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleEndDate": "2028-12-31T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1684826830000
        },
        {
            "id": 34,
            "attribution": {
                "createdOn": "2023-05-15T05:55:30.000+0000",
                "lastUpdatedOn": "2023-05-15T05:55:30.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "cappingTargetGrp",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleEndDate": "2028-12-31T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "CAPPING",
            "createdOn": 1684130130000
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
            "id": 1388,
            "attribution": {
                "createdOn": "2023-10-09T15:00:51.000+0000",
                "lastUpdatedOn": "2023-10-09T15:00:51.000+0000",
                "lastUpdatedBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                }
            },
            "name": "TEST_CAP_105137bjhg",
            "active": true,
            "preferredTillId": 0,
            "streaks": [],
            "activePeriod": {
                "id": 1795,
                "attribution": {
                    "createdOn": "2023-10-09T15:01:03.000+0000",
                    "lastUpdatedOn": "2023-10-09T15:01:03.000+0000",
                    "lastUpdatedBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-10-09",
                "endDate": "2024-10-29",
                "refCode": "string1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1388,
                "description": "string",
                "active": true
            },
            "totalPeriods": 1,
            "description": "TGF19",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 5,
            "targetCycleStartDate": "2023-10-09T15:00:51.000Z",
            "targetCycleEndDate": "2028-10-09T15:00:51.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1696863651000
        },
        {
            "id": 1387,
            "attribution": {
                "createdOn": "2023-10-09T13:18:40.000+0000",
                "lastUpdatedOn": "2023-10-09T13:18:40.000+0000",
                "lastUpdatedBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                }
            },
            "name": "TEST_CAP_105137b",
            "active": true,
            "preferredTillId": 0,
            "streaks": [
                {
                    "id": 3,
                    "attribution": {
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "lastUpdatedBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        }
                    },
                    "targetGroupId": 1387,
                    "name": "streaks_dummy3",
                    "targetCountOfSequence": 1
                }
            ],
            "activePeriod": {
                "id": 1794,
                "attribution": {
                    "createdOn": "2023-10-09T13:19:08.000+0000",
                    "lastUpdatedOn": "2023-10-09T13:19:08.000+0000",
                    "lastUpdatedBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-10-09",
                "endDate": "2024-10-29",
                "refCode": "string1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1387,
                "description": "string",
                "active": true
            },
            "totalPeriods": 1,
            "description": "TGF19",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 5,
            "targetCycleStartDate": "2023-10-09T13:18:40.000Z",
            "targetCycleEndDate": "2028-10-09T13:18:40.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "STREAKS",
            "createdOn": 1696857520000
        },
        {
            "id": 1386,
            "attribution": {
                "createdOn": "2023-10-09T12:44:45.000+0000",
                "lastUpdatedOn": "2023-10-09T12:44:45.000+0000",
                "lastUpdatedBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                },
                "createdBy": {
                    "id": 50674058,
                    "code": "vidhidev",
                    "description": "",
                    "name": "vidhidev",
                    "type": "TILL"
                }
            },
            "name": "TEST_CAP_105137",
            "active": true,
            "preferredTillId": 0,
            "streaks": [],
            "activePeriod": {
                "id": 1793,
                "attribution": {
                    "createdOn": "2023-10-09T13:12:06.000+0000",
                    "lastUpdatedOn": "2023-10-09T13:12:06.000+0000",
                    "lastUpdatedBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50674058,
                        "code": "vidhidev",
                        "description": "",
                        "name": "vidhidev",
                        "type": "TILL"
                    }
                },
                "startDate": "2023-10-09",
                "endDate": "2024-10-29",
                "refCode": "string1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1386,
                "description": "string",
                "active": true
            },
            "totalPeriods": 1,
            "description": "TGF19",
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": 2,
            "frequency": 5,
            "targetCycleStartDate": "2023-10-09T12:44:45.000Z",
            "targetCycleEndDate": "2028-10-09T12:44:45.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1696855485000
        },
        {
            "id": 1253,
            "attribution": {
                "createdOn": "2023-08-29T07:18:49.000+0000",
                "lastUpdatedOn": "2023-08-29T07:18:49.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "billExtendedFieldsTracking",
            "active": true,
            "preferredTillId": 50674058,
            "streaks": [
                {
                    "id": 1,
                    "attribution": {
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "lastUpdatedBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        }
                    },
                    "targetGroupId": 1253,
                    "name": "streaks_dummy",
                    "targetCountOfSequence": 1
                },
                {
                    "id": 2,
                    "attribution": {
                        "createdOn": null,
                        "lastUpdatedOn": null,
                        "lastUpdatedBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        },
                        "createdBy": {
                            "id": 4,
                            "code": "First",
                            "description": null,
                            "name": "First User",
                            "type": "ADMIN_USER"
                        }
                    },
                    "targetGroupId": 1253,
                    "name": "streaks_dummy2",
                    "targetCountOfSequence": 1
                }
            ],
            "activePeriod": {
                "id": 1743,
                "attribution": {
                    "createdOn": "2023-08-29T07:18:49.000+0000",
                    "lastUpdatedOn": "2023-08-29T07:18:49.000+0000",
                    "lastUpdatedBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2023-08-29",
                "endDate": "2023-11-28",
                "refCode": "p1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1253,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-29T00:00:00.000Z",
            "targetCycleEndDate": "2023-11-28T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "DEFAULT",
            "createdOn": 1693293529000
        },
        {
            "id": 1221,
            "attribution": {
                "createdOn": "2023-08-22T11:14:19.000+0000",
                "lastUpdatedOn": "2023-08-22T11:14:19.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetAgnosticPoints",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 4,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 4,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-22T11:14:15.000Z",
            "targetCycleEndDate": "2023-09-29T18:30:00.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1692702859000
        },
        {
            "id": 1220,
            "attribution": {
                "createdOn": "2023-08-22T11:07:56.000+0000",
                "lastUpdatedOn": "2023-08-22T11:07:56.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetAgnostic",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 3,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 3,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-22T11:07:51.000Z",
            "targetCycleEndDate": "2023-09-29T18:30:00.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1692702476000
        },
        {
            "id": 1219,
            "attribution": {
                "createdOn": "2023-08-22T10:55:46.000+0000",
                "lastUpdatedOn": "2023-08-22T10:55:46.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "agnosticPeriodGrp",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 4,
            "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
            "recurringCycles": 4,
            "frequency": 0,
            "targetCycleStartDate": "2023-08-22T10:55:46.000Z",
            "targetCycleEndDate": "2028-08-22T10:55:46.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1692701746000
        },
        {
            "id": 1030,
            "attribution": {
                "createdOn": "2023-07-10T12:16:21.000+0000",
                "lastUpdatedOn": "2023-07-10T12:16:21.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetGrpNEW",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "activePeriod": {
                "id": 1363,
                "attribution": {
                    "createdOn": "2023-07-10T12:16:21.000+0000",
                    "lastUpdatedOn": "2023-07-10T12:16:21.000+0000",
                    "lastUpdatedBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    },
                    "createdBy": {
                        "id": 4,
                        "code": "First",
                        "description": null,
                        "name": "First User",
                        "type": "ADMIN_USER"
                    }
                },
                "startDate": "2023-07-10",
                "endDate": "2023-10-31",
                "refCode": "periodd1",
                "periodStatus": "RUNNING",
                "targetGroupId": 1030,
                "active": true
            },
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleEndDate": "2028-12-31T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1688991381000
        },
        {
            "id": 36,
            "attribution": {
                "createdOn": "2023-05-23T07:27:10.000+0000",
                "lastUpdatedOn": "2023-05-23T07:27:10.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "targetGrp1",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleEndDate": "2028-12-31T23:59:59.000Z",
            "frequencyType": "CUSTOM",
            "trackingType": "DEFAULT",
            "createdOn": 1684826830000
        },
        {
            "id": 34,
            "attribution": {
                "createdOn": "2023-05-15T05:55:30.000+0000",
                "lastUpdatedOn": "2023-05-15T05:55:30.000+0000",
                "lastUpdatedBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                },
                "createdBy": {
                    "id": 4,
                    "code": "First",
                    "description": null,
                    "name": "First User",
                    "type": "ADMIN_USER"
                }
            },
            "name": "cappingTargetGrp",
            "active": false,
            "preferredTillId": 50674058,
            "streaks": [],
            "totalPeriods": 1,
            "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
            "recurringCycles": -1,
            "frequency": 0,
            "targetCycleEndDate": "2028-12-31T23:59:59.000Z",
            "frequencyType": "QUARTERLY",
            "trackingType": "CAPPING",
            "createdOn": 1684130130000
        }
    ],
    "errors": null,
    "warnings": null
}
```

`Try It!`