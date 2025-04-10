# Assign Leadget

# Request URL

http://{host}/v2/leads?{queryParams}={value}

```
http://{host}/v2/leads?{queryParams}={value}
```

# Request Query Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| userId | long | Get leads of a specific customer. Pass the user ID of the customer. |

| status | enum | Get leads of a specific status. Values: OPEN, ON_HOLD, WON, LOST, DELETED. |

| substatus | string | Get leads by lead sub-status. |

| owner | string | Fetch leads assigned to a specific associate. Pass the associate/staff ID (user id of the staff). |

| limit | int | Limit the number of results to retrieve. |

| offset | long | Number of rows (as per the data entered into the table) that you want omit from showing. |

| entityType | enum | Get leads of a specific entity. You also need to pass the entityCode accordingly. Pass entityType and e Values: ZONE, CONCEPT, STORE, TILL, STR_SERVER, ADMIN_USER, ASSOCIATE, STAFF. |

| entityCode | string | Pass the code of the respective entityType. For example, if entityType is STORE, then entityCode should be store code by which you want to get leads. |



## Additional Header

| Header | Description |

| --- | --- |

| language | Specify the ISO code of a language to get extended field values in your preferred language. For example,zhfor Chinese,idfor Indonesian,arfor Arabic. English is the default language. |



`zh`

`id`

`ar`

# Response parameters

| Field | Datatype | Description |

| --- | --- | --- |

| id | integer | Unique identifier for the lead. |

| userId | integer | The user's unique identifier. |

| type | string | The type of the lead. |

| leadFor | string | The product for which the lead is created. |

| status | string | The status of the lead (e.g., ON_HOLD, OPEN). |

| nextFollowUp | timestamp | The timestamp for the next follow up. |

| createdOn | timestamp | The timestamp when the lead was created. |

| createdBy | integer | The user's unique identifier who created the lead. |

| lastUpdatedOn | timestamp | The timestamp when the lead was last updated. |

| lastUpdatedBy | integer | The user's unique identifier who last updated the lead. |

| followUpDetails | object | Details of follow-up activities for the lead. |

| statusLogDetails | object | Log of status updates for the lead. |

| orgSourceId | integer | Organization's source ID. |

| extendedFields | object | Additional, customizable fields. |

| followUpDetails.id | integer | Unique identifier for the follow-up activity. |

| followUpDetails.userId | integer | The user's unique identifier for follow-up activities. |

| followUpDetails.leadId | integer | The lead's unique identifier related to follow-up activities. |

| followUpDetails.notes | string | Notes related to follow-up activities. |

| followUpDetails.createdBy | integer | The user's unique identifier who created the follow-up activity. |

| followUpDetails.createdOn | timestamp | The timestamp when the follow-up activity was created. |

| followUpDetails.followedUpBy | integer | The user's unique identifier who followed up the activity. |

| followUpDetails.followedUpOn | timestamp | The timestamp when the follow-up activity was followed up. |

| followUpDetails.scheduledFollowUp | timestamp | The timestamp when the follow-up activity was scheduled. |

| statusLogDetails.id | integer | Unique identifier for the status log. |

| statusLogDetails.userId | integer | The user's unique identifier for the status log. |

| statusLogDetails.leadId | integer | The lead's unique identifier related to the status log. |

| statusLogDetails.status | string | Status related to the status log (e.g., OPEN, ON_HOLD). |

| statusLogDetails.createdBy | integer | The user's unique identifier who created the status log. |

| statusLogDetails.createdOn | timestamp | The timestamp when the status log was created. |

| statusLogDetails.reasonId | integer | Unique identifier for the reason in the status log. |

| statusLogDetails.reason | string | Reason for the status update. |

| extendedFields.trial_status | string | Custom field for trial status. |

| warnings | array | Array of warning messages, if any. |

| errors | array | Array of error messages, if any. |



`Try It!`