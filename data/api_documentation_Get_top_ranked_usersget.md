# Get top ranked usersget

The API fetches a ranked list of users who have achieved a target within a timeframe

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

| URI | api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/{targetGroup} |

| HTTP Method | GET |

| Pagination | Yes |

| Rate limit information | NA |



# API Endpoint Example

https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/232?targetId=366&periodId=243&pageOffset=4&pageSize=10

```
https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/232?targetId=366&periodId=243&pageOffset=4&pageSize=10
```

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organisation IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation. Supported headers: SELF, OTHER and ALL. Refer to connected orgsdata scopesfor more information. |



[data scopes](/reference/connected-orgs-data-scopes)

# Request path parameters

Request path parameters

| Parameters | Type | Description |

| --- | --- | --- |

| targetGroups | Integer | The ID of the target group. A target group is an entity that contains targets. |



# Request query parameters

| Parameters (Parameters marked with * sign are mandatory) | Type | Description |

| --- | --- | --- |

| targetId* | Long | The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal. |

| periodId | Long | The period ID of the target. A period is a set of parameters that define the timeframe for a target. If periodId is not provided, the current period of the target group will be used. |

| pageSize | Integer | The number of results required.For example, to view the top five ranks only, set the value to 5. |

| pageOffset | Integer | The start page from which data retrieval starts. This value should not be negative.For example, a value of 5 indicates that data retrieval will begin from the 4th page. |

| pageLimit | Integer | Number of pages from which results are displayed.A maximum of 100 pages can be viewed in one request. |



# Response body

```
"pagination": {
        "limit": 3,
        "offset": 0,
        "total": 4527
    },
    "data": {
        "lastSyncTime": "2024-06-24T17:37:00.000IST",
        "targetGroupId": 232,
        "targetGroupName": "Target",
        "periodId": 243,
        "periodRefCode": "target_period",
        "targetRuleId": 366,
        "targetRuleName": "target1",
        "rankings": [
            {
                "rank": 1,
                "userId": 381329844,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-25T21:44:40.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918828069049",
                    "last_name": "Emf_lname_918828069049",
                    "first_name": "Emf_fname_918828069049",
                    "anniversary": "NOT-CAPTURED",
                    "email": "[email protected]"
                }
            },
            {
                "rank": 2,
                "userId": 381332324,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-29T00:14:48.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918969294257",
                    "last_name": "Emf_lname_918969294257",
                    "first_name": "Emf_fname_918969294257",
                    "anniversary": "NOT-CAPTURED",
                    "email": "[email protected]"
                }
            },
            {
                "rank": 3,
                "userId": 381333386,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-29T13:48:28.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918424528743",
                    "last_name": "Emf_lname_918424528743",
                    "first_name": "Emf_fname_918424528743",
                    "anniversary": "NOT-CAPTURED",
                    "email": "[email protected]"
                }
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```

```
"pagination": {
        "limit": 3,
        "offset": 0,
        "total": 4527
    },
    "data": {
        "lastSyncTime": "2024-06-24T17:37:00.000IST",
        "targetGroupId": 232,
        "targetGroupName": "Target",
        "periodId": 243,
        "periodRefCode": "target_period",
        "targetRuleId": 366,
        "targetRuleName": "target1",
        "rankings": [
            {
                "rank": 1,
                "userId": 381329844,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-25T21:44:40.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918828069049",
                    "last_name": "Emf_lname_918828069049",
                    "first_name": "Emf_fname_918828069049",
                    "anniversary": "NOT-CAPTURED",
                    "email": "[email protected]"
                }
            },
            {
                "rank": 2,
                "userId": 381332324,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-29T00:14:48.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918969294257",
                    "last_name": "Emf_lname_918969294257",
                    "first_name": "Emf_fname_918969294257",
                    "anniversary": "NOT-CAPTURED",
                    "email": "[email protected]"
                }
            },
            {
                "rank": 3,
                "userId": 381333386,
                "achievedValue": 21000,
                "lastActivityTime": "2022-11-29T13:48:28.000IST",
                "userEnrichmentDetails": {
                    "birthday": "NOT-CAPTURED",
                    "gender": "Male",
                    "mobile": "918424528743",
                    "last_name": "Emf_lname_918424528743",
                    "first_name": "Emf_fname_918424528743",
                    "anniversary": "NOT-CAPTURED",
                    "email": "[email protected]"
                }
            }
        ]
    },
    "errors": [],
    "warnings": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameters | Type | Description |

| --- | --- | --- |

| pagination | Object | Object containing pagination details. |

| – limit | String | Number of entries per page. |

| – offset | String | Page number of the current result set. |

| – total | String | Total number of entries. |

| data | Object | Object containing details of the leaderboard. |

| – lastSyncTime | String | Time when data was updated Supported format:YYYY-MM-DDTHH:MM:SS.000z.The system uses the organisation time zone to display. |

| –targetGroupId | Integer | The unique ID of the target group. A target group contains an array of targets. |

| –targetGroupName | String | Unique name of the target group. |

| –periodId | Integer | Unique ID of the target period. A period is a set of parameters that define the timeframe for a target. |

| –periodRefCode | String | Unique name of the target period. |

| –targetRuleId | Integer | Unique ID of the target rule. A target rule is a set of parameters that define the rules for achieving a target. |

| –targetRuleName | String | Unique name of the target rule. |

| –rankings | Object | Object containing user ranking details. |

| –rank | Integer | Rank of the user. |

| –userId | Integer | Unique identifier of the customer. |

| –achievedValue | Integer | The achieved value of the customer in the period.Example: If the customer has earned 5000 points, the value will be 5000. |

| –lastActivityTime | String | Last activity time Supported format:YYYY-MM-DDTHH:MM:SS.000z. |

| --mobile | Integer | Mobile number associated with the user. |

| –userEnrichmentDetails | Object | An object containing information related to the user. |

| --birthday | String | Birthday of the user. |

| gender | String | Gender of the user. |

| --last_name | String | Last name of the user. |

| --first_name | String | First name of the user. |

| --anniversary | String | Anniversary date of the user. |

| --email | String | Email address associated with the user. |



`YYYY-MM-DDTHH:MM:SS.000z`

`YYYY-MM-DDTHH:MM:SS.000z`

# API-specific warnings and errors

| Error Code | Description | Reason |

| --- | --- | --- |

| - | Page offset can not be in negative, fetching the first page by default | The page offset value is negative. |

| - | Page Size can not be more than 100, capping the page size to 100 | The page size value is more than the supported limit of 100. |

| 310133 | Leaderboards are not enabled for the following orgs | Leaderboards are not enabled for the organisation. |

| 310017 | Target group not found or deactivated | The target group passed is either invalid or currently inactive. |

| 310134 | Leaderboard is not enabled for the target group | Leaderboard is not enabled for the requested target group. |

| 310079 | target rule id doesn't belong to target group | The target rule ID passed does not belong to the target group or is invalid. |

| 310118 | Target Period not found for the target | The target period ID passed does not belong to the target group or is invalid or does not exist. |



`Try It!`