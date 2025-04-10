# Unenrol users from a milestone and streakpost

This API helps brands unenroll users from a milestone/streak depending on the brand's use case.

### Case 1 (Milestones):

Assume there is a milestone 'ABC' that has 5 cycles in it (c1, c2, c3, c4, c5).

Sub-case 1:The user has already enrolled in the milestone during the beginning of the c1.

Now if the user gets unenrolled during the middle of c1:

1. The user will get unenrolled from all the cycles including c1

2. If the user had already achieved the milestone before the unenrolling, and the milestone is of 'immediate reward allocation type', then the user would have already gotten the reward.However, if the milestone is of 'period-end reward allocation type', the user won't get the reward for c1 even though the user has achieved the target before the unenrolling.

1. However, if the milestone is of 'period-end reward allocation type', the user won't get the reward for c1 even though the user has achieved the target before the unenrolling.

Sub-case 2:The user has unenrolled in the middle of c3.

1. Whatever rewards (immediate type or period-end type) the user is supposed to get for the c1, and c2, the user would have already gotten them because the un-enrolment happened during the c3.

2. The user will get un-enrolled from all the cycles starting from c3 to the end.

3. The 2nd point mentioned in Sub-case1 will still hold here but this time with c3.

### Case 2 (Streaks):

Assume there is a streak 'XYZ' that has 30 cycles and 3 levels (4, 8, 12) in it.

Sub-case 1:The user has un-enrolled during the 13th cycle.

1. If the user has already achieved the levels (say 4, 8) before the un-enrolment, the user would have already gotten the benefits for them. In the case of streaks, we support only "immediate reward allocation".

2. The user will get un-enrolled from all the cycles from c13 to c30.

3. During the re-enroll, the brand could re-enroll the user by resetting (by making the resetStreakStatus as 'true'). This helps in letting the user achieve the streak (aka streak levels) again & again even though the user has achieved them before.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /targetGroups/{targetGroupId}/targets/{targetId}/unEnroll |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/targetGroups/{targetGroupId}/targets/{targetId}/unEnroll

```
https://eucrm.cc.capillarytech.com/targetGroups/{targetGroupId}/targets/{targetId}/unEnroll
```

# Request path parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| targetGroupId* | Integer | The ID of the target group associated. |

| targetId* | Integer | The ID of the target associated. |



# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| customerId* | Integer | Unique ID of the customer who needs to be un-enrolled from the milestone/streak.. |



```
[
    {
        "customerId":423789336
    }
]
```

```
[
    {
        "customerId":423789336
    }
]
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Integer | The unique identifier of the customer. |

| errors | Array | Errors during the API call, if any. |

| warnings | Array | Warnings during the API call, if any. |



```
{
  "data": 423789336,
  "errors": null,
  "warnings": null
}
```

```
{
  "data": 423789336,
  "errors": null,
  "warnings": null
}
```

# API-specific errors

| Error code | Description |

| --- | --- |

| 310119 | The user already enrolled for the target. |

| 310011 | Invalid userId. Check if the customerID is valid. |

| 310019 | Target period not found. Check the target period ID to troubleshoot this error. |



`Try It!`