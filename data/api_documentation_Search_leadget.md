# Search leadget

# Query parameter

| Parameter | Description |

| --- | --- |

| type | Fetch by lead type. Values: SKU, CATEGORY, BRAND, CUSTOM (for any custom types) |

| limit | Limit the number of results to be fetched |

| orgSourceId | Specify the source account id from which you want to fetch the leads. For example, -1 for INSTORE. |

| userId | Fetch the leads of a specific user |

| status | Fetch leads by status. Values: OPEN, WON, LOST, ON_HOLD, DELETED |

| substatus | Fetch leads with a specific sub-status |

| offset | Fetches leads > the offset number. Offset is the position of the lead in the db record. |

| sortBy | Lets you sort the list by createdon or lastUpdatedOn |

| sortOrder | Sort the results in ascending (ASC) or descending (DESC) order |



# Response parameter

| Parameter | Description |

| --- | --- |

| id | Unique identifier for the data item |

| userId | Identifier for the user associated with the data |

| type | Type of the lead, e.g., "SKU" |

| leadFor | The specific item or entity the lead is for |

| status | Current status of the lead |

| nextFollowUp | Date and time of the next follow-up |

| createdOn | Date and time when the data item was created |

| createdBy | Identifier of the user who created the data item |

| lastUpdatedOn | Date and time when the data item was last updated |

| lastUpdatedBy | Identifier of the user who last updated the data item |

| followUpDetails | Details of follow-ups. |

| statusLogDetails | Details of status changes. |

| orgSourceId | Identifier for the source organization |



`Try It!`