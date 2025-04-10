# Customer Notes Fact Table

This table captures the event when a customer note is created. It has additional information about the customer. The table captures the date and time when the customer note was created, store at which the note was created, and details of the customer for whom the note is added.

Databricks Table Name:customer_notes

Customer Notes - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Customer Notes Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time_customer_note | bigint | Date and time when the corresponding record in the customer_note table available at the source was last updated. It is in the Unix timestamp format. | _ |

| customer_note | string | Captures additional information about the customer. | _ |

| dim_event_date_id | bigint | Date when customer note was created. | date |

| dim_event_time_id | bigint | Time when customer note was created. | time |

| dim_event_user_id | bigint | Identifier for the customer associated with the note. It is an internally assigned value by Capillary for user identification. | users |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_tills |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time |

| note_id | bigint | Unique identifier of the customer note. It is the primary key of this table. | _ |

| year | int | Year of customer note addition. | _ |



[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_tills](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago