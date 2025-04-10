# Get Associated Target Groups of a Userget

This API allows you to retrieve the details of all the associated target groups, including the user's milestones and streaks information.

# API endpoint example

https://eucrm.cc.capillarytech.com/v3.1/users/{userId}/targetGroups

```
https://eucrm.cc.capillarytech.com/v3.1/users/{userId}/targetGroups
```

# Prerequisites

- Authentication; Basic or OAuth authentication details

- Access group resource - NA

# Resource information

|  |  |

| --- | --- |

| URI | /users/{userId}/targetGroups |

| HTTP method | GET |

| Pagination supported? | NO |

| Rate limit | NA |

| Batch support | NA |



# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELF,OTHERandALL.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

`ALL`

[data scopes](/reference/connected-orgs-data-scopes)

# Request path parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| UserID* | Long | The userId represents the unique identifier of a user. It allows you to retrieve the target groups associated with a specific user. |



# Request query parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| includeInactive | Boolean | TheincludeInactiveparameter determines whether the API response includes information about all cycles within a milestone or only the active cycle.False: The API response for the milestone will include information only about the current active cycle. For example, if there are four cycles (C1, C2, C3, and C4) in a milestone named ABC and the current cycle is C3, then settingincludeInactiveto false will return information only about cycle C3, where the user has performed an activity.True: The API response for the milestone will include information about all cycles, both active and inactive. In the same example, settingincludeInactiveto true will return information about all four cycles (C1, C2, C3, and C4) within the milestone ABC. |

| targetRuleId | Long | Rule ID of the target. To fetch the information of a particular target in the API response. |

| includeInactiveTargets | Boolean | TheincludeInactiveTargetsparameter determines whether the API response includes information about all milestone or only the active milestones.False: The API response will include information on all active milestones. For example: If there are four milestones (M1, M2, M3, M4) and milestone M1 is deactivated, then settingincludeInactiveTargetsto false will return information only about milestones M2, M3, and M4.True: The API response for milestones will include information about ALL the milestones present in the org. |



`includeInactive`

`includeInactive`

`includeInactive`

`includeInactiveTargets`

`includeInactiveTargets`

```
curl --location 'http://{host}/api_gateway/intouch-api-v3/v3.1/users/347286146/targetGroups?includeInactive=true' \
--header 'DATA-SCOPE: SELF' \
--header 'DATA-SCOPE-ORG: 50363'
```

```
curl --location 'http://{host}/api_gateway/intouch-api-v3/v3.1/users/347286146/targetGroups?includeInactive=true' \
--header 'DATA-SCOPE: SELF' \
--header 'DATA-SCOPE-ORG: 50363'
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| userId | Long | The unique identifier of the customer. |

| customer | Object | An object containing information about customer. |

| -id | Integer | The unique identifier of the customer. |

| -.profiles | Array of objects | An array containing profiles details of the customer |

| - - firstName | String | The first name of the customer. |

| - - lastName | String | The last name of the customer. |

| - - commChannels | Array of objects | An array containing communication information of the customer. |

| - - - type | String | The type of communication channel from which we connect to customer. (e.g., mobile, email). |

| - - - accountId | Enum | For sources that support multiple accounts, For example, FACEBOOK, WEB_ENGAGE, WECHAT, MOBILE_APP. |

| - - - value | String | The value of the communication channel (e.g., phone number, email address). |

| - - - primary | Boolean | this indicates that the above channel is primary or not |

| - - - verified | Boolean | Indicates if the communication channel has been verified. |

| - - - subscribed | Boolean | Pass true if the identifier is subscribed for the org's newsletters (bulk messages). |

| - - - attributes | Object | Additional Details of the identifier. |

| - - source | String | The source from which the customer profile was created (e.g., instore). |

| - - accountId | String | The account ID of the customer . |

| - - userId | Integer | The unique identifier for the customer. |

| - - orgSourceId | Integer | The organization source ID for the customer. |

| -loyaltyInfo | Object | Containing loyalty information of the customer. |

| - - attribution | Object | Containing attribution information for the loyalty information. |

| - - - createdOn | String | The date and time when the loyalty information was created. |

| - - - lastUpdatedOn | String | The date and time when the loyalty information was last updated. |

| - - - lastUpdatedBy | Object | The information about the user who last updated the loyalty information. |

| - - - - id | Integer | The unique identifier for the user who last updated the loyalty information. |

| - - - - code | Null | The  code associated with the last updated user. |

| - - - - description | String | The description about the last update. |

| - - - - name | Null | Name of the user last updated. |

| - - - - type | Enum | Type of the customer identifier. |

| - - - createdBy | Object | Containing information about the user who created the loyalty information. |

| - - - - id | Integer | The unique identifier for the user who created the loyalty information. |

| - - - - code | Null | The  code associated with the last updated user. |

| - - - - description | String | The description about the last update. |

| - - - - name | Null | Name of the user last updated. |

| - - - - type | Enum | Type of the customer identifier. |

| - - loyaltyType | String | The type of loyalty program. |

| - - lifetimePurchases | Float | The total amount of purchases made by the customer in his entire  lifetime. |

| - customFields | Object | Containing custom fields of the customer. |

| - - gender | String | The gender of the customer. |

| targetGroups | Array of objects | Containing information about target groups associated with customer. |

| - id | Integer | The unique identifier for the target group. |

| - attribution | Object | Containing attribution information for the target group. |

| - - createdOn | String | The date and time when the target group was created. |

| - - lastUpdatedOn | String | The date and time when the target group was last updated. |

| - - lastUpdatedBy | Object | Containing information about the user who last updated the target group. |

| - - -id | Integer | The unique identifier for the user who last updated the target group. |

| - - - code | String | The code associated with the user who last updated the target group. |

| - - - description | String | The description associated with the user who last updated the target group. |

| - - - name | String | The name of the user who last updated the target group. |

| - - - type | String | The type of the user who last updated the target group like ADMIN_USER. |

| - -createdBy | Object | Containing information about the user who created the target group. |

| - - - id | Integer | The unique identifier for the user who created the target group. |

| - - - code | String | The code associated with the user who created the target group. |

| - - - description | String | The description of the  user who created the target group. |

| - - - name | String | The name of the user who created the target group. |

| - - - type | String | The type of the user who created the target group like ADMIN_USER. |

| - targets | Array of objects | Containing information about targets within the target group. |

| - - targetId | Integer | The unique identifier for the target. |

| - - orgId | Integer | Unique ID of the associated organization. |

| - - periodId | Integer | The unique identifier for the period. |

| - - periodRefCode | Sting | The reference code for the period of the target. |

| - - periodStartDate | String | The start date of the period for the target. |

| - - periodEndDate | String | The end date of the period for the target. |

| - - targetValue | Float | The target value to be achieved. |

| - - targetAchievedValue | Float | The value achieved towards the target. |

| - - targetType | Enum | The type of target:SUM, COUNT,VISIT.Refer to thisAPI documentationfor more information. |

| - - targetEntity | Enum | The KPI on which the target is tracked.TRANSACTION, LINEITEM, EVENT, REWARDS.Refer to thisAPI documentationfor more information. |

| - - targetRuleId | Integer | The rule identifier for the target. |

| - - enrolledOn | String | The date and time when the target was enrolled. |

| - - eventName | String | The name of the event associated with the target. |

| - -periodStartDateWithTimeStamp | String | The start date and time of the period associated with the target rule. |

| - - periodEndDateWithTimeStamp | String | The end date and time of the period associated with the target rule. |

| - - targetAchievedDateTime | String | The achieved date and time of the period associated with the target rule. |

| - - streakAchievedDateTime | String | The achieved date and time of the period associated with the streak rule. |

| - - currentPeriod | Boolean | Indicates if the target is for the current period. |

| - - milestones | Array of objects | Containing information about milestones for the target. |

| - - - id | Integer | The unique identifier for the milestone. |

| - - -triggerName | String | The name of the trigger of the milestone. |

| - - - triggerValue | Float | The value of the trigger of the milestone. |

| - - - isAchieved | Boolean | Indicates if the milestone has been achieved. |

| --- streaks | Array | An array of streaks for the target group. |

| ---- userStreakId | Integer | The user streak ID. |

| ---- streakId | Integer | The streak ID. |

| ---- streakName | String | The name of the streak. |

| ---- status | String | The status of the streak (For Example- ACHIEVED). |

| ---- currentCount | Integer | The current count of the streak. |

| ---- totalTargetCountOfSequence | Integer | The total target count of the streak sequence. |

| ---- streakAchievedUserTargetId | String | The ID of the streak achieved by the user. |

| - targetEvaluationType | Enum | The type of evaluation for the target group :FIXED_CALENDAR_WINDOWCYCLIC_WINDOWPERIOD_AGNOSTIC_WINDOW                                                                                           Refer to thisAPI documentationfor more information. |

| - trackingType | Enum | The type of target for tracking the created milestone:- Default- Unified- Streak- Capping-Non continuous streakRefer to thisAPI documentationfor more information. |

| errors | Object | Error in the API call if any. |

| warnings | Object | Warning in the API call if any. |



[API documentation](/reference/create-target-groups#request-body-parameters)

[API documentation](/reference/create-target-groups#request-body-parameters)

[API documentation](/reference/create-target-groups#request-body-parameters)

[API documentation](/reference/create-target-groups#request-body-parameters)

```
{
    "data": {
        "userId": 347286146,
        "customer": {
            "id": 347286146,
            "profiles": [
                {
                    "firstName": "919111122111",
                    "lastName": "919111122111",
                    "commChannels": [
                        {
                            "type": "email",
                            "accountId": null,
                            "value": "[email protected]",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        },
                        {
                            "type": "mobile",
                            "accountId": null,
                            "value": "918111255499",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        }
                    ],
                    "source": "instore",
                    "accountId": "",
                    "userId": 347286146,
                    "orgSourceId": -1
                }
            ],
            "loyaltyInfo": {
                "attribution": {
                    "createdOn": "2024-08-27T09:35:24.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:43:41.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    }
                },
                "loyaltyType": "loyalty",
                "lifetimePurchases": 2400
            },
            "customFields": {}
        },
        "targetGroups": [
            {
                "id": 33008,
                "attribution": {
                    "createdOn": "2024-04-30T13:15:44.000+0000",
                    "lastUpdatedOn": "2024-04-30T13:15:44.000+0000",
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
                "name": "Ac test",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 38375,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-04-30",
                        "periodEndDate": "2024-05-29",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "Ac test",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 72389,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-30T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-29T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 51922,
                "attribution": {
                    "createdOn": "2024-08-16T11:11:07.000+0000",
                    "lastUpdatedOn": "2024-08-16T11:11:07.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    }
                },
                "name": "streakTest112",
                "orgId": 50363,
                "preferredTillId": 50697469,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 66783,
                        "periodRefCode": "period4445",
                        "periodStartDate": "2024-08-16",
                        "periodEndDate": "2024-08-17",
                        "targetValue": 2.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTargetttt",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 111007,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-16T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-17T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 66784,
                        "periodRefCode": "period44456",
                        "periodStartDate": "2024-08-18",
                        "periodEndDate": "2024-08-19",
                        "targetValue": 2.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTargetttt",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 111007,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-18T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-19T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": null,
                        "streakId": 9008,
                        "streakName": "streaks_dummffy",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 1,
                        "streakAchievedDateTime": null
                    },
                    {
                        "userStreakId": null,
                        "streakId": 9009,
                        "streakName": "streaks_dummffffy",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 2,
                        "streakAchievedDateTime": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 53235,
                "attribution": {
                    "createdOn": "2024-08-27T09:42:52.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:42:52.000+0000",
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
                "name": "t1Cyclic",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 68704,
                        "periodRefCode": "PERIOD_G_53235_2",
                        "periodStartDate": "2024-08-28",
                        "periodEndDate": "2024-08-29",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-28T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-29T09:43:40.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68705,
                        "periodRefCode": "PERIOD_G_53235_3",
                        "periodStartDate": "2024-08-29",
                        "periodEndDate": "2024-08-30",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-29T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-30T09:43:40.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68706,
                        "periodRefCode": "PERIOD_G_53235_4",
                        "periodStartDate": "2024-08-30",
                        "periodEndDate": "2024-08-31",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-30T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-31T09:43:40.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68707,
                        "periodRefCode": "PERIOD_G_53235_5",
                        "periodStartDate": "2024-08-31",
                        "periodEndDate": "2024-08-31",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-31T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-31T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 1915903,
                        "periodId": 68703,
                        "periodRefCode": "PERIOD_G_53235_1",
                        "periodStartDate": "2024-08-27",
                        "periodEndDate": "2024-08-28",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 1200.000,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-27T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-28T09:43:40.000Z",
                        "targetAchievedDateTime": "2024-08-27T09:43:41.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "CYCLIC_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 53236,
                "attribution": {
                    "createdOn": "2024-08-27T09:43:26.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:43:26.000+0000",
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
                "name": "t1PA",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 68710,
                        "periodRefCode": "PERIOD_G_53236_3",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68711,
                        "periodRefCode": "PERIOD_G_53236_4",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68712,
                        "periodRefCode": "PERIOD_G_53236_5",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 1915904,
                        "periodId": 68708,
                        "periodRefCode": "PERIOD_G_53236_1",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 1000.000,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": "2024-08-27T09:43:41.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 1915905,
                        "periodId": 68709,
                        "periodRefCode": "PERIOD_G_53236_2",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 200.000,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 39540,
                "attribution": {
                    "createdOn": "2024-06-11T11:33:00.000+0000",
                    "lastUpdatedOn": "2024-06-11T11:33:00.000+0000",
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
                "name": "1000test",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 47904,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-06-01",
                        "periodEndDate": "2024-06-30",
                        "targetValue": 1500.000,
                        "targetAchievedValue": 0,
                        "targetName": "1000test",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 84132,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-06-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-30T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 42788,
                "attribution": {
                    "createdOn": "2024-07-01T14:04:16.000+0000",
                    "lastUpdatedOn": "2024-07-01T14:04:16.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    }
                },
                "name": "streakTest6",
                "orgId": 50363,
                "preferredTillId": 50697469,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 53292,
                        "periodRefCode": "period44457",
                        "periodStartDate": "2024-07-01",
                        "periodEndDate": "2024-07-05",
                        "targetValue": 4.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTarget7",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 90988,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-07-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-07-05T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": null,
                        "streakId": 5731,
                        "streakName": "streaks_dummy7",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 1,
                        "streakAchievedDateTime": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 38135,
                "attribution": {
                    "createdOn": "2024-05-30T14:06:40.000+0000",
                    "lastUpdatedOn": "2024-05-30T14:06:40.000+0000",
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
                "name": "generictest",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 45870,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-05-29",
                        "periodEndDate": "2024-06-28",
                        "targetValue": 2.000,
                        "targetAchievedValue": 0,
                        "targetName": "generictest",
                        "targetType": "COUNT",
                        "targetEntity": "EVENT",
                        "targetRuleId": 81015,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "test",
                        "periodStartDateWithTimeStamp": "2024-05-29T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-28T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 42775,
                "attribution": {
                    "createdOn": "2024-07-01T13:57:23.000+0000",
                    "lastUpdatedOn": "2024-07-01T13:57:23.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    }
                },
                "name": "streakTest5",
                "orgId": 50363,
                "preferredTillId": 50697469,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 53278,
                        "periodRefCode": "period4445",
                        "periodStartDate": "2024-06-01",
                        "periodEndDate": "2024-06-05",
                        "targetValue": 4.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTarget5",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 90956,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-06-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-05T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": null,
                        "streakId": 5730,
                        "streakName": "streaks_dummy5",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 1,
                        "streakAchievedDateTime": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 53230,
                "attribution": {
                    "createdOn": "2024-08-27T09:41:56.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:41:56.000+0000",
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
                "name": "t1Fixed",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 68691,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-08-26",
                        "periodEndDate": "2024-08-26",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-26T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-26T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68693,
                        "periodRefCode": "Cycle_3",
                        "periodStartDate": "2024-08-28",
                        "periodEndDate": "2024-08-28",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-28T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-28T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68694,
                        "periodRefCode": "Cycle_4",
                        "periodStartDate": "2024-08-29",
                        "periodEndDate": "2024-08-29",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-29T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-29T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68695,
                        "periodRefCode": "Cycle_5",
                        "periodStartDate": "2024-08-30",
                        "periodEndDate": "2024-08-30",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-30T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-30T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": true,
                        "milestones": null
                    },
                    {
                        "targetId": 1915906,
                        "periodId": 68692,
                        "periodRefCode": "Cycle_2",
                        "periodStartDate": "2024-08-27",
                        "periodEndDate": "2024-08-27",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 1200.000,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-27T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-27T23:59:59.000Z",
                        "targetAchievedDateTime": "2024-08-27T09:43:41.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            }
        ]
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "userId": 347286146,
        "customer": {
            "id": 347286146,
            "profiles": [
                {
                    "firstName": "919111122111",
                    "lastName": "919111122111",
                    "commChannels": [
                        {
                            "type": "email",
                            "accountId": null,
                            "value": "[email protected]",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        },
                        {
                            "type": "mobile",
                            "accountId": null,
                            "value": "918111255499",
                            "primary": false,
                            "verified": false,
                            "subscribed": null,
                            "attributes": null
                        }
                    ],
                    "source": "instore",
                    "accountId": "",
                    "userId": 347286146,
                    "orgSourceId": -1
                }
            ],
            "loyaltyInfo": {
                "attribution": {
                    "createdOn": "2024-08-27T09:35:24.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:43:41.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": null,
                        "description": null,
                        "name": null,
                        "type": null
                    }
                },
                "loyaltyType": "loyalty",
                "lifetimePurchases": 2400
            },
            "customFields": {}
        },
        "targetGroups": [
            {
                "id": 33008,
                "attribution": {
                    "createdOn": "2024-04-30T13:15:44.000+0000",
                    "lastUpdatedOn": "2024-04-30T13:15:44.000+0000",
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
                "name": "Ac test",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 38375,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-04-30",
                        "periodEndDate": "2024-05-29",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "Ac test",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 72389,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-04-30T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-05-29T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 51922,
                "attribution": {
                    "createdOn": "2024-08-16T11:11:07.000+0000",
                    "lastUpdatedOn": "2024-08-16T11:11:07.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    }
                },
                "name": "streakTest112",
                "orgId": 50363,
                "preferredTillId": 50697469,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 66783,
                        "periodRefCode": "period4445",
                        "periodStartDate": "2024-08-16",
                        "periodEndDate": "2024-08-17",
                        "targetValue": 2.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTargetttt",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 111007,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-16T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-17T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 66784,
                        "periodRefCode": "period44456",
                        "periodStartDate": "2024-08-18",
                        "periodEndDate": "2024-08-19",
                        "targetValue": 2.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTargetttt",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 111007,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-18T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-19T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": null,
                        "streakId": 9008,
                        "streakName": "streaks_dummffy",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 1,
                        "streakAchievedDateTime": null
                    },
                    {
                        "userStreakId": null,
                        "streakId": 9009,
                        "streakName": "streaks_dummffffy",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 2,
                        "streakAchievedDateTime": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 53235,
                "attribution": {
                    "createdOn": "2024-08-27T09:42:52.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:42:52.000+0000",
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
                "name": "t1Cyclic",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 68704,
                        "periodRefCode": "PERIOD_G_53235_2",
                        "periodStartDate": "2024-08-28",
                        "periodEndDate": "2024-08-29",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-28T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-29T09:43:40.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68705,
                        "periodRefCode": "PERIOD_G_53235_3",
                        "periodStartDate": "2024-08-29",
                        "periodEndDate": "2024-08-30",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-29T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-30T09:43:40.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68706,
                        "periodRefCode": "PERIOD_G_53235_4",
                        "periodStartDate": "2024-08-30",
                        "periodEndDate": "2024-08-31",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-30T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-31T09:43:40.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68707,
                        "periodRefCode": "PERIOD_G_53235_5",
                        "periodStartDate": "2024-08-31",
                        "periodEndDate": "2024-08-31",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-31T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-31T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 1915903,
                        "periodId": 68703,
                        "periodRefCode": "PERIOD_G_53235_1",
                        "periodStartDate": "2024-08-27",
                        "periodEndDate": "2024-08-28",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 1200.000,
                        "targetName": "t1Cyclic",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113762,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-27T09:43:40.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-28T09:43:40.000Z",
                        "targetAchievedDateTime": "2024-08-27T09:43:41.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "CYCLIC_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 53236,
                "attribution": {
                    "createdOn": "2024-08-27T09:43:26.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:43:26.000+0000",
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
                "name": "t1PA",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 68710,
                        "periodRefCode": "PERIOD_G_53236_3",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68711,
                        "periodRefCode": "PERIOD_G_53236_4",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68712,
                        "periodRefCode": "PERIOD_G_53236_5",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 1915904,
                        "periodId": 68708,
                        "periodRefCode": "PERIOD_G_53236_1",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 1000.000,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": "2024-08-27T09:43:41.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": 1915905,
                        "periodId": 68709,
                        "periodRefCode": "PERIOD_G_53236_2",
                        "periodStartDate": "2024-08-24",
                        "periodEndDate": "2024-08-24",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 200.000,
                        "targetName": "t1PA",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113764,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-24T18:30:00.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "PERIOD_AGNOSTIC_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 39540,
                "attribution": {
                    "createdOn": "2024-06-11T11:33:00.000+0000",
                    "lastUpdatedOn": "2024-06-11T11:33:00.000+0000",
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
                "name": "1000test",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 47904,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-06-01",
                        "periodEndDate": "2024-06-30",
                        "targetValue": 1500.000,
                        "targetAchievedValue": 0,
                        "targetName": "1000test",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 84132,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-06-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-30T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 42788,
                "attribution": {
                    "createdOn": "2024-07-01T14:04:16.000+0000",
                    "lastUpdatedOn": "2024-07-01T14:04:16.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    }
                },
                "name": "streakTest6",
                "orgId": 50363,
                "preferredTillId": 50697469,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 53292,
                        "periodRefCode": "period44457",
                        "periodStartDate": "2024-07-01",
                        "periodEndDate": "2024-07-05",
                        "targetValue": 4.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTarget7",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 90988,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-07-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-07-05T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": null,
                        "streakId": 5731,
                        "streakName": "streaks_dummy7",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 1,
                        "streakAchievedDateTime": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 38135,
                "attribution": {
                    "createdOn": "2024-05-30T14:06:40.000+0000",
                    "lastUpdatedOn": "2024-05-30T14:06:40.000+0000",
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
                "name": "generictest",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 45870,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-05-29",
                        "periodEndDate": "2024-06-28",
                        "targetValue": 2.000,
                        "targetAchievedValue": 0,
                        "targetName": "generictest",
                        "targetType": "COUNT",
                        "targetEntity": "EVENT",
                        "targetRuleId": 81015,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "test",
                        "periodStartDateWithTimeStamp": "2024-05-29T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-28T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            },
            {
                "id": 42775,
                "attribution": {
                    "createdOn": "2024-07-01T13:57:23.000+0000",
                    "lastUpdatedOn": "2024-07-01T13:57:23.000+0000",
                    "lastUpdatedBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    },
                    "createdBy": {
                        "id": 50150886,
                        "code": "tillrustaging2",
                        "description": "",
                        "name": "tillrustaging2",
                        "type": "TILL"
                    }
                },
                "name": "streakTest5",
                "orgId": 50363,
                "preferredTillId": 50697469,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 53278,
                        "periodRefCode": "period4445",
                        "periodStartDate": "2024-06-01",
                        "periodEndDate": "2024-06-05",
                        "targetValue": 4.000,
                        "targetAchievedValue": 0,
                        "targetName": "streaksTarget5",
                        "targetType": "COUNT",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 90956,
                        "enrolledOn": "2024-08-30T09:21:43.741+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-06-01T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-06-05T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "streaks": [
                    {
                        "userStreakId": null,
                        "streakId": 5730,
                        "streakName": "streaks_dummy5",
                        "status": "NOT_STARTED",
                        "currentCount": 0,
                        "totalTargetCountOfSequence": 1,
                        "streakAchievedDateTime": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "STREAKS"
            },
            {
                "id": 53230,
                "attribution": {
                    "createdOn": "2024-08-27T09:41:56.000+0000",
                    "lastUpdatedOn": "2024-08-27T09:41:56.000+0000",
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
                "name": "t1Fixed",
                "orgId": 50363,
                "preferredTillId": 50150886,
                "targets": [
                    {
                        "targetId": null,
                        "periodId": 68691,
                        "periodRefCode": "Cycle_1",
                        "periodStartDate": "2024-08-26",
                        "periodEndDate": "2024-08-26",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-26T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-26T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68693,
                        "periodRefCode": "Cycle_3",
                        "periodStartDate": "2024-08-28",
                        "periodEndDate": "2024-08-28",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-28T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-28T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68694,
                        "periodRefCode": "Cycle_4",
                        "periodStartDate": "2024-08-29",
                        "periodEndDate": "2024-08-29",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-29T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-29T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": false,
                        "milestones": null
                    },
                    {
                        "targetId": null,
                        "periodId": 68695,
                        "periodRefCode": "Cycle_5",
                        "periodStartDate": "2024-08-30",
                        "periodEndDate": "2024-08-30",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 0,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-30T09:21:43.744+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-30T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-30T23:59:59.000Z",
                        "targetAchievedDateTime": null,
                        "currentPeriod": true,
                        "milestones": null
                    },
                    {
                        "targetId": 1915906,
                        "periodId": 68692,
                        "periodRefCode": "Cycle_2",
                        "periodStartDate": "2024-08-27",
                        "periodEndDate": "2024-08-27",
                        "targetValue": 1000.000,
                        "targetAchievedValue": 1200.000,
                        "targetName": "t1Fixed",
                        "targetType": "GROSS_SALES",
                        "targetEntity": "TRANSACTION",
                        "targetRuleId": 113753,
                        "enrolledOn": "2024-08-27T09:43:41.000+0000",
                        "eventName": "TransactionAdd",
                        "periodStartDateWithTimeStamp": "2024-08-27T00:00:00.000Z",
                        "periodEndDateWithTimeStamp": "2024-08-27T23:59:59.000Z",
                        "targetAchievedDateTime": "2024-08-27T09:43:41.000Z",
                        "currentPeriod": false,
                        "milestones": null
                    }
                ],
                "targetEvaluationType": "FIXED_CALENDAR_WINDOW",
                "trackingType": "DEFAULT"
            }
        ]
    },
    "errors": null,
    "warnings": null
}
```

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`