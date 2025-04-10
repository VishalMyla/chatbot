# Journeys Fact Table

Journeysis an engagement automation interface that enables brands to create scenario-based flows to nurture your customers throughout their lifecycle. Journeys are created usingbuilding blocks. After the entry trigger, the building blocks define the journey of a customer. Each building block has a specific purpose in the journey.

The journey_block_execution_fact table captures information about each execution of a journey block, including timestamps, journey and block identifiers, user identifiers, and status.

Databricks Table Name:journey_block_execution_fact

Journeys Fact - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Journeys Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time_journey | bigint | Date and time when the corresponding record in the journeys table available at the source was last updated. It is in the Unix timestamp format. | _ |

| auto_update_time_journey_block_execution | bigint | Date and time when the corresponding record in the journey_block_execution table available at the source was last updated. It is in the Unix timestamp format. | _ |

| block_id | string | Unique identifier for the journey meta block. | _ |

| dim_event_date_id | bigint | Journey block execution start date (that is, the date on which the user started processing the corresponding journey block). | date |

| dim_event_time_id | bigint | Journey block execution start time (that is, the time when the user started processing the corresponding journey block). | time |

| dim_event_user_id | bigint | Identifier for the user associated with the journey. | user |

| dim_journeyLevel_id | bigint | Identifier for the user journey level. | _ |

| dim_journey_block_status_id | bigint | Identifier for the status of the journey block. Possible values are - completed, executing, failed, queued, temporary failure, etc. | journey block status |

| dim_journey_block_type_id | bigint | Identifier for the type of the journey block. Possible values are - Entry, join, jump, reminder, incentives, whatsapp engagement, email engagement, sms engagement, etc. | journey block type |

| dim_journey_meta_block_id | string | Identifier of the journey block. It is the combination of journeyMetaId - journeyVersion - blockId. | journey block |

| dim_journey_status_id | bigint | Identifier for the status of the user journey. | journey status |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time |

| is_control | string | Indicates whether the journey block is part of a control group. Possible values are - 'true' and 'false'. | _ |

| journey_block_execution_id | string | Unique identifier for the execution of the user journey block. This is the primary key for the table. | _ |

| journey_id | string | Unique identifier for the user journey. | _ |

| journey_meta_id | string | Unique identifier for the journey meta. | _ |

| journey_version | int | Version number of the journey meta. | _ |

| level_id | string | Identifier for the user journey level. | _ |

| next_block_id | string | Identifier for the next block id to be executed for the user journey. | _ |

| year | int | Year of the user journey block execution event. | _ |



[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[user](/docs/dimension-tables#users-users)

[journey block status](/docs/dimension-tables#journey-block-status)

[journey block type](/docs/dimension-tables#journey-block-type)

[journey block](/docs/dimension-tables#journey-block)

[journey status](/docs/dimension-tables#journey-status)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago