# Milestones Fact Table

This table captures the milestone event of customers, such as the start date of the milestone target, client/ org to which the milestone belongs, and identifier of the milestone.

Databricks Table Name:target_milestone_trigger_communications

Milestones Entity Relationship Diagram

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Milestones Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the corresponding record in the milestone table available at the source was last updated. It is in the Unix timestamp format. | _ |

| client_id | bigint | Unique identifier for the client or organization. | _ |

| dim_event_date_id | bigint | Start date of the milestone. | date |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_milestone_id | bigint | Identifier for the milestone. | milestone |

| dim_user_target_id | bigint | Identifier for the user target. | user_target |

| id | bigint | Unique identifier and primary key for the table. | _ |

| year | integer | Year of the milestone. | _ |



[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[milestone](/docs/dimension-tables#milestone)

[user_target](/docs/dimension-tables#user-target-user_target)

Updated7 months ago