# Enroll/Re-Enroll a Customer to a Milestone or Streakpost

This API enrolls or re-enrolls users into a milestone or streak in a connected organisation.

Enroll: The user is enrolling into a milestone or streak for the first time.

Re-enroll: The user was previously enrolled in a streak or milestone but is currently unenrolled. They now want to re-enroll and participate again.

## Milestones and Streaks

AMilestonein Loyalty+ is a feature that lets brands set specific targets for their customers. When customers reach these defined targets, they are rewarded.

For more information refer to thedocumentation on Milestones.

AStreakin Loyalty+ refers to a series of consecutive customer actions or engagements. When customers complete a series of consecutive actions, they are rewarded.

For more information refer to thedocumentation on Streaks.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer to the documentation inAPI overviewand step-by-step guide onmaking your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer to the documentation inAPI overviewand step-by-step guide onmaking your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /targetGroups/{targetGroupId}/targets/{targetId}/enroll |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API Endpoint Example

https://eucrm.cc.capillarytech.com/v3.1/targetGroups/{targetGroupId}/targets/{targetId}/enroll

```
https://eucrm.cc.capillarytech.com/v3.1/targetGroups/{targetGroupId}/targets/{targetId}/enroll
```

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELFandOTHER.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

[data scopes](/reference/connected-orgs-data-scopes)

# Request Path Parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| targetGroupId* | Integer | The ID of the target group associated with the item. A target group is the primary entity under which individual targets can be created. |

| targetId* | Integer | The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal. |



# Request Body Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| customerId* | Integer | The unique identifier of the customer. |

| periodName* | String | The name of the period/cycle. The is used to identify to which period/cycle, the customer should be enrolled/re-enrolled in the case of milestones.Note: For Streaks, It is not mandatory to enter the period name as the period is not applicable for streaks. |

| initialBalance | Integer | When a value is entered in this field, the user will enroll or re-enroll in the milestone's cycle or period, with the initial balance set to the user's target achieved value.For re-enrollment, if this field is set to "NULL," the user's target achieved value will resume from the value at which the user last unenrolled.This field does not apply to streaks and is applicable only to milestones. |

| resetStreakStatus | boolean | This field is only for streaks. If this field is set to false, the user will continue from the streak value before unenrolling. If this field is marked as true during re-enrollment, the streak value will be reset, effectively starting fresh. |



```
[
  {       
       "customerId":345651201,  
       "periodName":"PERIOD_G_29463_1",
       "initialBalance":100,
  		 "resetStreakStatus":false
  }
]

// Maximum number records in the payload should be 1. For example, if there is a milestone with 10
// cycles & want to enroll a user, then this API needs to be called 10 times as this is for each cycle.

// In the case of streak, no need of period name & user will be enrolled into all the periods.
```

```
[
  {       
       "customerId":345651201,  
       "periodName":"PERIOD_G_29463_1",
       "initialBalance":100,
  		 "resetStreakStatus":false
  }
]

// Maximum number records in the payload should be 1. For example, if there is a milestone with 10
// cycles & want to enroll a user, then this API needs to be called 10 times as this is for each cycle.

// In the case of streak, no need of period name & user will be enrolled into all the periods.
```

# Response Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Integer | The unique identifier of the customer. |

| errors | Array | Errors during the API call, if any. |

| warnings | Array | Warnings during the API call, if any. |



```
{
    "data": 345651201,
    "errors": null,
    "warnings": null
}
```

```
{
    "data": 345651201,
    "errors": null,
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
      {
        "code": 310141,
        "message": 'Datascope 'ALL' is not supported for this 'API'
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
        "code": 310141,
        "message": 'Datascope 'ALL' is not supported for this 'API'
      }
      ],
    "warnings": null
}
```

# API-Specific Errors

| Error code | Description |

| --- | --- |

| 310119 | User already enrolled for the target. |

| 310011 | Invalid userId. Check if the customerId is valid. |

| 310019 | Target period not found. Check the target period ID to troubleshoot this error. |

| 310017 | Target group not found or deactivated. Check the target group ID to troubleshoot this error. |

| 310018 | Target rule not found. Check the target rule ID to troubleshoot this error. |

| 300004 | Invalid input. |

| 310141 | Datascope 'ALL' is not supported for this 'API |

| 310144 | Connected Orgs not set properly in Headers.- Check whether the target organisation is a connected organisation.- Check the API endpoint. |



`Try It!`