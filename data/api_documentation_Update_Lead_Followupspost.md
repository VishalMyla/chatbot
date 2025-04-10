# Update Lead Followupspost

# Path parameter

| Parameter | Description |

| --- | --- |

| leadId | Unique ID of the lead to update. |



# Body parameter

| Parameter | Description |

| --- | --- |

| followedUpBy | Unique ID of the staff who followed up. |

| createdOn | Date and time of lead creation in YYYY-MM-DDThh:mm:ssTZD format. |

| followedUpOn | Date of recent follow up discussion with the customer in YYYY-MM-DDTHH:MM:SS+TZD |

| createdBy | Till ID that updated the follow up |

| nextFollowUp | Date and time of the next follow up discussion with the customer in YYYY-MM-DDTHH:MM:SS+TZD |

| notes | Brief follow up notes. |

| scheduledFollowUp | Actual scheduled date and time of the current follow up discussion with the customer in YYYY-MM-DDTHH:MM:SS+TZD |



# Response parameter

| Parameter | Description |

| --- | --- |

| createdBy | User ID of the entity creator. |

| createdOn | Date and time when the entity was created. |

| extendedFields | Additional fields related to the lead. |

| followUpDetails | Details of follow-up activities for the lead. |

| id | Unique identifier for the lead. |

| lastFollowUp | Date and time of the last follow-up. |

| lastUpdatedBy | User ID of the person who last updated the lead. |

| lastUpdatedOn | Date and time when the lead was last updated. |

| leadFor | The specific item or SKU the lead is for. |

| orgSourceId | Organization source ID associated with the lead. |

| status | Current status of the lead. |

| statusLogDetails | Details of the status log for the lead. |

| type | Type of lead. |

| userId | User ID associated with the lead. |

| warnings | List of warnings associated with the response. |



`Try It!`