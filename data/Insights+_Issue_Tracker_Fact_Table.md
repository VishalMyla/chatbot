# Issue Tracker Fact Table

This fact table captures details of all customer complaints that have been converted into "issues" and are managed by the Customer Care Management System.

Databricks Table Name:issue_tracker_fact

Issue Tracker Fact - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Issue Tracker Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theIssue TrackersTemplate |

| --- | --- | --- | --- | --- |

| dim_active_status_id | bigint | Identifier indicating whether the issue is still active or not. Possible values are 0 and 1. | active_status | Yes; Dimension Name: Active Status > Id |

| dim_assigned_by_id | bigint | Identifier for the person or entity who assigned the issue. | zone_till | Yes; Dimension Name: Assigned By > Till Id |

| dim_assigned_to_id | bigint | Identifier for the person or department to whom the issue is assigned. | zone_till | Yes; Dimension Name: Assigned To > Id |

| dim_created_by_id | bigint | Identifier for the person who created the issue record. | zone_till | Yes; Dimension Name: Created By > Till Id |

| dim_due_date_id | bigint | Identifier for the due date of the issue resolution. | date | Yes; Dimension Name: Due Date > Date |

| dim_event_date_id | bigint | Date when the issue event occurred. | date | Yes; Dimension Name: Date |

| dim_event_time_id | bigint | Time when the issue event occurred. | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Identifier for the user involved in the issue event. | users | Yes; Dimension Name: User > User Id |

| dim_issue_type_id | bigint | Identifier for the type or category of the issue. Possible values are - Store, and Customer. | issue_type | Yes; Dimension Name: Issue Type > Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_reported_by_id | bigint | Identifier indicating how the issue was reported. Possible values are - email, intouch, call center, client and microsite. | reported_by | Yes; Dimension Name: Reported By > Id |

| issue_code | string | Identifier of the issue. | _ | Yes; Measure Name: Issue Code |

| issue_depearment | string | Department to which the issue belongs. | _ | Yes; Measure Name: Issue Department |

| issue_name | string | Gives the actual issue description. | _ | Yes; Measure Name: Issue Name |

| issue_priority | string | Priority of the complaint as per the escalation metrics. Possible values are - high, medium, and low. | _ | Yes; Measure Name: Issue Priority |

| issue_status | string | Current status of the issue. Possible values are - open, and closed. | _ | Yes; Measure Name: Issue Status |

| issue_tracker_id | bigint | Unique identifier generated for the issue or complaint. It is the primary key for the table. | _ | Yes; Measure Name: Issue Tracker Id |

| ticket_code | string | Unique identifier of the issue for internal reference. | _ | Yes; Measure Name: Ticket Code |

| year | int | Year of the issue. | _ | Yes; Dimension Name: Year |



[Issue Trackers](/docs/issue-trackers-standard-export-template)

[active_status](/docs/dimension-tables#active-status)

[zone_till](/docs/dimension-tables#zone-till)

[zone_till](/docs/dimension-tables#zone-till)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[issue_type](/docs/dimension-tables#issue-type)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[reported_by](/docs/dimension-tables#reported-by)

Updated7 months ago