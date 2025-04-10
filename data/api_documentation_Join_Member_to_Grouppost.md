# Join Member to Grouppost

> 📘Pass at lease one among the path parameters. - id, externalId, primaryUserId.

## 📘

Pass at lease one among the path parameters. - id, externalId, primaryUserId.

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

{host}.api.capillarytech.com/v2/userGroup2/join?id={id/externalId/primaryUserId}

# Path parameter

| Parameter | Description |  |

| --- | --- | --- |

| id | Unique ID of the user group. |  |

| externalId | External ID of the user group. |  |

| primaryUserId | User ID of the primary member of the group. |  |



# Body parameters

| Parameter | Description |

| --- | --- |

| userId | The unique identifier for the user. |

| primaryMember | A boolean value indicating whether the user is a primary member or not.Notes:- The primary member acts as the group owner and the primary member's identifier serves as the group's unique identifier.- Once a primary member is added, you cannot change the primary member of the group.- Only one primary member is allowed per group.- If the primary member leaves the group, the group becomes defunct. If you want the group to remain active after the primary member leaves the group, raise a ticket to the Product Support team and enable the configCONF_DISABLE_GROUP_DEACTIVATION_ON_PRIMARY_MEMBER_EXIT. |

| permissions | An array of strings that represent the permissions assigned to the user. |



`userId`

`primaryMember`

```
CONF_DISABLE_GROUP_DEACTIVATION_ON_PRIMARY_MEMBER_EXIT
```

`permissions`

# Response parameters

| Parameter | Description |

| --- | --- |

| response | Array containing details of the response entity and the result. |

| response[].entityId | Contains information about the entity's identification and associated properties. |

| response[].entityId.userId | Unique identifier of the user associated with the entity. |

| response[].entityId.groupId | Unique identifier of the group associated with the entity. |

| response[].entityId.permissions | Array of permissions granted to the entity. |

| response[].entityId.defaultGroup | Boolean indicating whether the entity belongs to a default group or not. |

| response[].entityId.active | Boolean indicating if the entity is active. |

| response[].entityId.primaryMember | Boolean indicating if the entity is a primary member or not. |

| response[].result | Contains the resultant details after processing the request,. |

| response[].result.userId | Unique identifier of the user associated with the result. |

| response[].result.groupId | Unique identifier of the group associated with the result. |

| response[].result.permissions | Array of permissions granted to the result. |

| response[].result.defaultGroup | Boolean indicating whether the result belongs to a default group or not. |

| response[].result.active | Boolean indicating if the result is active. |

| response[].result.primaryMember | Boolean indicating if the result is a primary member or not. |

| response[].warnings | Array containing any warnings related to the response. |

| totalCount | The total number of entities in the response. |

| failureCount | The total number of failures during the processing. |



`Try It!`