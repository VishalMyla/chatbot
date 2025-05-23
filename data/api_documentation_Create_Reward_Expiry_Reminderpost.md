# Create Reward Expiry Reminderpost

This API is designed to create a reward expiry reminder, notifying users when their rewards are nearing expiration.

Use Cases:

1. Reward Expiration Notification : When a reward expires, notify the user via push notification, email, or SMS.

2. Sweepstakes Expiration Notification and Winner Finalization : When a sweepstake expires, notify who entered, and trigger a Databricks notebook to finalize the winner.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.This an org Level config and this feature this feature is disabled by default

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- This an org Level config and this feature this feature is disabled by default

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

- This is an organization-level configuration, and the feature is disabled by default. To enable it, use thisAPIwith the keyCONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLEDset to true or false. You can also configure the notification timing using the keyCONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIMEwith the value in HH:MM format.

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/reward/expiryReminder |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/expiryReminder

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/expiryReminder
```

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| duration* | Integer | The duration specifies how many days in advance the reward expiry reminder will be sent before the reward expires. This does not have any default value set and is mandatory. |

| timing | timestamp | This defines the specific time when the reminder will be sent. The time should be provided in 24-hour format (HH:MM) and represents the the org's cluster (server) time. If no time is specified, the reminder will automatically be set for 16:00 server time for the org's cluster. |



```
{
    "duration": 32,
    "timing": "18:00"
}
```

```
{
    "duration": 32,
    "timing": "18:00"
}
```

# Response parameters

| Parameter Name | Description |

| --- | --- |

| success | Indicates if the request was successful. |

| code | Response status code. |

| message | Message describing the status of the response. |

| id | Unique identifier for the reward expiry reminder. |

| orgId | Identifier for the organization associated with the reminder. |

| duration | Duration before the expiry to send a reminder. |

| durationType | Type of duration. |

| cronTaskId | This is the unique database ID for each cron setup, which includes specific timing, modules, and other relevant settings. This is a backend term. |

| timing | Time at which the reminder will be triggered (in HH:MM format). |

| isActive | Indicates whether the reminder is currently active. |

| createdOn | Timestamp of when the reminder was created in epoch timestamp |

| createdBy | Identifier of the user who created the reminder. |

| createdOnDateTime | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedBy | Identifier of the user who last updated the reminder. |

| lastUpdatedOnDateTime | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |



```
{
    "status": {
        "success": true,
        "code": 12038,
        "message": "Reward expiry reminder created"
    },
    "rewardExpiryReminder": {
        "id": 35,
        "orgId": 100737,
        "duration": 32,
        "durationType": "DAYS",
        "cronTaskId": 605381,
        "timing": "18:00",
        "isActive": true,
        "createdOn": 1742186349783,
        "createdOnDateTime": "2025-03-17T04:39:09Z",
        "lastUpdatedOn": 1742186349783,
        "lastUpdatedOnDateTime": "2025-03-17T04:39:09Z",
        "createdBy": 75155282,
        "lastUpdatedBy": 75155282
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 12038,
        "message": "Reward expiry reminder created"
    },
    "rewardExpiryReminder": {
        "id": 35,
        "orgId": 100737,
        "duration": 32,
        "durationType": "DAYS",
        "cronTaskId": 605381,
        "timing": "18:00",
        "isActive": true,
        "createdOn": 1742186349783,
        "createdOnDateTime": "2025-03-17T04:39:09Z",
        "lastUpdatedOn": 1742186349783,
        "lastUpdatedOnDateTime": "2025-03-17T04:39:09Z",
        "createdBy": 75155282,
        "lastUpdatedBy": 75155282
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duration is mandatory"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Duration is mandatory"
    }
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 400 | Duration is mandatory |



`Try It!`