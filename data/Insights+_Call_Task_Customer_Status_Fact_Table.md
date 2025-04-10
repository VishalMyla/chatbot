# Call Task Customer Status Fact Table

Call tasks are tasks created at the POS (point of sale machines) for cashiers to process. The tasks could be call customers for birthday wishes that will get populated every day for the cashier to process. These tasks have a specific validity within which these needs to be closed. The call task customer status fact table captures the details of the call task such as call task id, the associated campaign, and date and time of the call task.

Databricks Table Name:call_task_customer_status

Call Task Customer Status Fact - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Call Task Customer Status Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theCall TasksTemplate |

| --- | --- | --- | --- | --- |

| auto_update_time_task_status | bigint | Date and time when the corresponding record in the task status table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Task Status |

| call_task_id | bigint | Identifier for the call task. It is the primary key for the table. | _ | Yes; Measure Name: Call Task Id |

| dim_campaign_id | bigint | Identifier of the campaign associated with the call task. | campaign | Yes; Dimension Name: Campaign > Campaign Id |

| dim_campaign_message_id | bigint | Identifier of the campaign message associated with the call task. | campaign_msg | Yes; Dimension Name: Campaign Message > Id |

| dim_event_date_id | bigint | Date of the call task. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Time of the call task. | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Used Id of the customer for which the task is created. | users | Yes; Dimension Name: User > User Id |

| dim_event_zone_till_id | bigint | Identifier of the store associated with the call task. It is the identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_till | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_internal_status_id | bigint | Identifier for the internal status of the call task. Possible values are - Open, and complete. | internal_status | Yes; Dimension Name: Internal Status > Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_task_id | bigint | Identifier that links to the task dimension table, which provides additional details about the task, including the task type, task description, etc. | tasks | Yes; Dimension Name: Task > Task Id |

| dim_updated_by_user_id | bigint | Identifier of the user who updated the call task status. | users | Yes; Dimension Name: Updated By User > User Id |

| dim_updated_date_id | bigint | Captures the date when the date has been updated. | date | Yes; Dimension Name: Updated Date |

| dim_updated_time_id | bigint | Captures the time when the date has been updated. | time | Yes; Dimension Name: Updated Time |

| task_id | bigint | Unique identifier for the task configured for the campaigns. It is the primary key for the table. | _ | Yes; Measure Name: Task Id |

| year | integer | Year of the call task creation. | _ | Yes; Dimension Name: Year |



[Call Tasks](/docs/call-tasks-standard-export-template)

[campaign](/docs/dimension-tables#campaigns)

[campaign_msg](/docs/dimension-tables#campaign-message-campaign_msg)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_till](/docs/dimension-tables#zone-till)

[internal_status](/docs/dimension-tables#internal-status)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[tasks](/docs/dimension-tables#tasks)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated6 months ago