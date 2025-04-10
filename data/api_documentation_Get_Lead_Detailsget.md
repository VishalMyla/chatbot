# Get Lead Detailsget

> 📘To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org.

## 📘To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org.

To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org.

# Query parameter

| Parameter | Description |

| --- | --- |

| userId | Get leads of a specific customer. Pass the user ID of the customer. |

| status | Get leads of a specific status. |

| substatus | Get leads by lead sub-status. |

| owner | Fetch leads assigned to a specific associate. |

| limit | Limit the number of results to retrieve. |

| offset | Number of rows (as per the data entered into the table) that you want omit from showing. |

| entityType | Get leads of a specific entity. You also need to pass the entityCode accordingly. |

| entityCode | Pass the code of the respective entityType. |



# Response parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| id | int | Unique identifier for the lead. |

| userId | long | User ID associated with the lead. |

| type | string | Type of the lead (e.g., SKU). |

| leadFor | string | Description of what the lead is for. |

| status | string | Current status of the lead. |

| nextFollowUp | string | Scheduled date and time for the next follow-up. |

| createdOn | string | Date and time when the lead was created. |

| createdBy | long | User ID of the person who created the lead. |

| lastUpdatedOn | string | Date and time when the lead was last updated. |

| lastUpdatedBy | long | User ID of the person who last updated the lead. |

| followUpDetails | array | Details of the follow-up activities. |

| statusLogDetails | array | Details of the status log activities. |

| orgSourceId | int | Organization source ID. |

| extendedFields | object | Additional extended fields related to the lead. |



`Try It!`