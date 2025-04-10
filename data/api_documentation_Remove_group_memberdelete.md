# Remove group memberdelete

> 📘Pass at lease one among the query parameters. - id, externalId, primaryUserId.

## 📘

Pass at lease one among the query parameters. - id, externalId, primaryUserId.

> ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

host}.api.capillarytech.com/v2/organization/userGroup2/{groupId}/leave

# Path parameters

| Path Parameter | Description |

| --- | --- |

| groupId | The ID of the group. |



# Query parameters

| Query parameters | Description |

| --- | --- |

| source | Source in which the customer identifier is registered. |

| accountId | Unique account ID for sources with multiple accounts. Not applicable for the INSTORE source. |

| identifierName | Identifier type used to identify the customer. The supported identifiers are mobile, email, externalId, cardnumber, and cardExternalId. |

| identifierValue | Value of the identifierName passed. For example, identifierName=cardExternalId&identifierValue=cardUUID123 |



# Response parameters

| Parameter | Description |

| --- | --- |

| warnings | This is an array containing any warning messages generated during the processing of the request. |

| errors | This is an array containing any error messages that were generated if the request failed for some reason. |

| success | This is a boolean value indicating whether the request was successful. |



`Try It!`