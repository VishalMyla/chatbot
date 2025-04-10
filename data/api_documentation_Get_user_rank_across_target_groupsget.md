# Get user rank across target groupsget

The API fetches a user’s rankings in all enrolled targets within a timeframe.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation onAPI overviewand step-by-step guide onmaking your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation onAPI overviewand step-by-step guide onmaking your first API call.

# Prerequisites

- Authentication: Basic/OAuth authentication

- Default access group

- Enable leaderboards for the organisation.

- Create a target milestone or streak.

- Enable leaderboards for the milestone or streak

# Resource Information

|  |  |

| --- | --- |

| URI | api_gateway/intouch-api-v3/v3.1/leaderboards/user/{userId} |

| HTTP Method | GET |

| Pagination | No |

| Rate limit information | NA |



# API Endpoint Example

https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/user/381329847

```
https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/user/381329847
```

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organisation IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation.Supported headers: SELF, OTHER and ALL.Refer to connected orgsdata scopesfor more information. |



[data scopes](/reference/connected-orgs-data-scopes)

# Request query parameters

| Parameters(Parameters marked with * sign are mandatory) | Type | Description |

| --- | --- | --- |

| userID | Int | The unique ID of the customer. |



# Request body

```
[
   {
        "orgId" : 50711,
        "targetGroupId" : 232,
        "targetRuleId" : 365,
        "periodId": 243
    },
    {
        "orgId" : 50711,
        "targetGroupId" : 232,
        "targetRuleId" : 366 ,
        "periodId" : 243
    }
]
```

```
[
   {
        "orgId" : 50711,
        "targetGroupId" : 232,
        "targetRuleId" : 365,
        "periodId": 243
    },
    {
        "orgId" : 50711,
        "targetGroupId" : 232,
        "targetRuleId" : 366 ,
        "periodId" : 243
    }
]
```

# Request body parameters

| Parameters(Parameters marked with * sign are mandatory) | Type | Description |

| --- | --- | --- |

| orgId | Long | Unique identifier for the organisation. |

| targetGroupId* | Long | Unique identifier for target group |

| targetRuleId* | Long | Unique identifier for target rule.Maximum of 25 rule IDs supported. |

| periodId | Long | Identifier of period for which result will be fetched |



# Response body

```
{
    "data": {
        "lastSyncTime": "2024-06-24T17:37:00.000IST",
        "customerId": 381329847,
        "userEnrichmentDetails": {
            "mobile": "918781885773",
            "last_name": "",
            "first_name": "",
            "email": "[email protected]"
        },
        "userRanks": [
            {
                "orgId": 50711,
                "targetGroupId": 232,
                "targetRuleId": 366,
                "periodId": 243,
                "achievedValue": 3000,
                "rank": 1771,
                "lastActivityTime": "2022-11-25T21:45:05.000IST",
                "totalUsersInTargetGroup": 4527
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "lastSyncTime": "2024-06-24T17:37:00.000IST",
        "customerId": 381329847,
        "userEnrichmentDetails": {
            "mobile": "918781885773",
            "last_name": "",
            "first_name": "",
            "email": "[email protected]"
        },
        "userRanks": [
            {
                "orgId": 50711,
                "targetGroupId": 232,
                "targetRuleId": 366,
                "periodId": 243,
                "achievedValue": 3000,
                "rank": 1771,
                "lastActivityTime": "2022-11-25T21:45:05.000IST",
                "totalUsersInTargetGroup": 4527
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| data | Object | An object that contains details of the leaderboard. |

| – lastSyncTime | String | The time when the data was updated.Supported format:YYYY-MM-DDTHH:MM:SS.000zThe system uses the organisation time zone to display the time. |

| –customerId | Integer | Identifier of the customer. |

| –userEnrichmentDetails | Object | An object that contains key-value pairs of information related to the user. |

| –userRanks | Object | A list of the user’s ranks across different target rules. |

| –orgId | Integer | The organisation ID to which the target group belongs. |

| –targetGroupId | Integer | The unique identifier for the target group. |

| –targetRuleId | Integer | The unique ID of the target rule. A target rule is a set of parameters that define the rules for achieving a target. |

| –periodId | Integer | The unique ID of the target period. A period is a set of parameters that define the timeframe for a target. |

| –achievedValue | Long | The value achieved by the user for that target rule.Example: If the customer has earned 5000 points, the value will be 5000. |

| –rank | Integer | Rank of the user in the target group for the target rule in the target period |

| –lastActivityTime | String | Last activity time Supported format:YYYY-MM-DDTHH:MM:SS.000z |

| –totalUsersInTargetGroup | Integer | The number of users enrolled in the target rule. |

| errors | Object | Errors encountered while fetching the object. |

| warnings | Object | Warnings encountered while fetching object. |



`YYYY-MM-DDTHH:MM:SS.000z`

`YYYY-MM-DDTHH:MM:SS.000z`

# API-specific warnings and errors

| Error Code | Description | Reason |

| --- | --- | --- |

| - | Maximum number of target rules allowed is 25, only first 25 target rules will be considered | More than 25 target rules are passed in the request body |

| - | Target group id 999 not found or deactivated | The target group ID is invalid or not found. |

| - | Leaderboard is not enabled for the target group id 43879 | Leaderboard is not enabled for the requested target group. |

| - | Target rule id 999 does not belong to target group id 232 | The target rule ID passed does not belong to the target group passed or is invalid. |

| - | Target period id 999 not found for the target id 366 | The target period ID passed does not belong to the target group passed or is invalid. |

| - | No active target period found for the target id 366 | The current target period does not exist. |

| 51512 | The following orgs are not part of the hierarchy | One or more of the organisations passed is not part of the connected organisation hierarchy. |

| 310133 | Leaderboards are not enabled for the following orgs | Leaderboards are not enabled for the organisation. |



`Try It!`