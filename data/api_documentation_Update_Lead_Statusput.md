# Update Lead Statusput

# Body parameter

| Parameter | Description |

| --- | --- |

| status | Status for which you want to add sub-status. |

| subStatus | Name of the new sub-status that you want to create. |

| reasonId | Reason id that you want to associate to the lead. |

| createdBy | Entity id of the staff who created the lead. |

| createdOn | Date and time of lead creation in YYYY-MM-DDThh:mm:ssTZD format. |



# Response parameter

| Parameter | Description |

| --- | --- |

| id | Unique identifier for the lead. |

| userId | User ID associated with the lead. |

| type | Type of lead, e.g., SKU. |

| leadFor | Lead for a specific item or SKU. |

| status | Current status of the lead. |

| nextFollowUp | Scheduled date and time for the next follow-up. |

| createdOn | Date and time when the lead was created. |

| createdBy | User ID of the creator of the lead. |

| lastUpdatedOn | Date and time when the lead was last updated. |

| lastUpdatedBy | User ID of the person who last updated the lead. |

| followUpDetails | Details of follow-up activities for the lead. |

| statusLogDetails | Details of the status log for the lead. |

| orgSourceId | Organization source ID associated with the lead. |

| extendedFields | Extended fields related to the lead. |

| subStatus | Sub-status of the lead. |

| warnings | List of warnings associated with the response. |



`Try It!`