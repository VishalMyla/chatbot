# Upsert target communicationpost

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

https://{host}/v3/targetGroups/{groupId}targets/{targetId}/communications/upsert

> 📘The two path parameterstargetGroupIdandtargetIdare mandatory fields.

## 📘The two path parameterstargetGroupIdandtargetIdare mandatory fields.

The two path parameterstargetGroupIdandtargetIdare mandatory fields.

# Body parameters

| Parameter | Description |

| --- | --- |

| active | Pass true to make the communication active. |

| channelId | Unique ID of the channel through which the communication needs to be sent. |

| communicationType | Type of the communication. Values: START, FINISH, CHANGE, REMINDER. |

| messageTemplate | Content that should go in the message. |

| offsetDays |  |

| sender | Sender ID from which the communication needs to go. |

| subjectTemplate | Subject line of the template. |



# Response parameters

| Parameter | Description |

| --- | --- |

| data | Array containing details of communication. |

| data[].id | Unique identifier of the communication. |

| data[].attribution | Contains metadata about the creation and last update of the communication. |

| data[].attribution.createdOn | Timestamp indicating when the communication was created. |

| data[].attribution.lastUpdatedOn | Timestamp indicating the last update made to the communication. |

| data[].attribution.lastUpdatedBy | Details of the entity or user that last updated the communication. |

| data[].attribution.lastUpdatedBy.id | Unique identifier of the last updater. |

| data[].attribution.lastUpdatedBy.code | Code related to the last updater. |

| data[].attribution.lastUpdatedBy.description | A description related to the last updater. |

| data[].attribution.lastUpdatedBy.name | Name of the last updater. |

| data[].attribution.lastUpdatedBy.type | Type of the last updater. |

| data[].attribution.createdBy | Details of the entity or user that created the communication. |

| data[].attribution.createdBy.id | Unique identifier of the creator. |

| data[].attribution.createdBy.code | Code related to the creator. |

| data[].attribution.createdBy.description | A description related to the creator. |

| data[].attribution.createdBy.name | Name of the creator. |

| data[].attribution.createdBy.type | Type of the creator. |

| data[].targetId | Identifier of the target for the communication. |

| data[].targetGroupId | Identifier of the target group for the communication. |

| data[].communicationType | Type of the communication. |

| data[].channelId | Unique ID of the channel through which the communication is sent. |

| data[].subjectTemplate | Subject line of the template for the communication. |

| data[].messageTemplate | Content/message template of the communication. |

| data[].sender | Sender ID from which the communication is sent. |

| data[].offsetDays | Number of days offset. |

| data[].active | Boolean indicating if the communication is active. |

| errors | Contains any errors related to the response. |



`Try It!`