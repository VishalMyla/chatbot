# Streaks Fact Table

This table captures the streak event of the customers, where the consecutive instances of a task performed by a customer are tracked. These include the current streak count, unique identifiers for event, and streak, and timestamp for the record update.

Fact Table Name:user_streak_fact

User Streak Fact - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

User Streak Fact Table

| Column name | Data type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the corresponding record in the streaks table available at the source was last updated. It is in the Unix timestamp format. | _ |

| current_count | bigint | Denotes the streak count (number of times the customer has performed the task in a row). | _ |

| dim_event_date_id | bigint | Start date of the streak. | date |

| dim_event_time_id | bigint | Start time of the streak. | time |

| dim_event_user_id | bigint | Identifier for the user associated with the streak. It is an internally assigned value by Capillary for user identification. | users |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_streak_id | bigint | Identifier linking to a table containing streak information. | streaks |

| dim_streak_status_id | string | Identifier linking to a table containing streak status information. | streak_status |

| id | bigint | Unique identifier of the table. | _ |

| year | int | Year of the streak. | _ |



[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[streaks](/docs/dimension-tables#streaks-streaks)

[streak_status](/docs/dimension-tables#streak-status-streak_status)

Updated7 months ago