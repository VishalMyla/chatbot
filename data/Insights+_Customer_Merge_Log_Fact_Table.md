# Customer Merge Log Fact Table

This table captures the details of customer account merges within the system. It includes information about the accounts involved, the reason for the merge, and the date and time details of various events related to the merge process.

Databricks Table Name:customer_merge_log

Customer Merge Log - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Customer Merge Log Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theCustomer Merge EventLog Template |

| --- | --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the corresponding record in the communications table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time |

| details | string | Details about the merge process. | _ | Yes; Measure Name: Details |

| dim_event_date_id | bigint | Date when the customer profile was merged. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Time when the customer profile was merged. | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Current user id of the customer whose account was merged. | users | Yes; Dimension Name: User > User Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_merged_by_admin_id | bigint | Identifier for the admin user who performed the merge. | admin_users | Yes; Dimension Name: Merge By Admin User > Id |

| dim_merged_by_zone_till_id | bigint | Identifier for the store (till) where the customer profile was merged. | zone till | Yes; Dimension Name: Merge By Till > Till Id |

| dim_victim_user_id | bigint | Identifier for the user with which the customer profile was merged. | users | Yes; Dimension Name: Victim User > User Id |

| merge_event_id | bigint | Unique identifier for the merge event. It is the primary key of this table. | _ | Yes; Measure Name: Merge Event Id |

| merge_reason | string | The reason provided for merging the accounts. | _ | Yes; Measure Name: Merge Reason |

| victim_external_id | string | External id of customer for which the customer profile has been merged. | _ | Yes; Measure Name: Victim External Id |

| victim_mobile | string | Mobile number of the customer for which the customer profile has been merged. | _ | Yes; Measure Name: Victim Mobile |

| year | int | Year when the merge occurred. | _ | Yes; Dimension Name: Year |



[Customer Merge Event](/docs/customer-merge-event-log-standard-export-template)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[admin_users](/docs/dimension-tables#admin-users)

[zone till](/docs/dimension-tables#zone-till)

[users](/docs/dimension-tables#users-users)

Updated7 months ago