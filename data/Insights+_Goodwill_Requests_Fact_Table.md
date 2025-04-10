# Goodwill Requests Fact Table

A goodwill request involves the allocation of goodwill points or coupons to a customer for various reasons. This table records the generation of goodwill requests. It captures the event details such as the number of goodwill points that have been approved, loyalty program against which the goodwill points have been allocated, date and time when the request was made.

Databricks Table Name:goodwill_requests

Goodwill Requests - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Goodwill Requests Facts Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theGoodwill RequestsTemplate |

| --- | --- | --- | --- | --- |

| allocated_points | double | Total number of goodwill points issued to the customer. | _ | Yes; Measure Name: Allocated Points |

| approval_comments | string | Comments added by the approver for the goodwill point allocation request. | _ | Yes; Measure Name: Approval Comments |

| approved_value | string | Value of the points that has been approved. | _ | Yes; Measure Name: Approved Value |

| comments | string | Any remarks related to the goodwill points, added by the user. | _ | Yes; Measure Name: Comments |

| dim_event_program_id | bigint | Identifier for the loyalty program name against which the goodwill points have been allocated. | program | Yes; Dimension Name: Event Program |

| dim_event_user_id | bigint | Identifier for the user associated with the event. It is an internally assigned value by Capillary for user identification. | users | Yes; Dimension Name: User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_till | Yes; Dimension Name: Store Hierarchy |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date | Yes; Dimension Name: Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time | Yes; Dimension Name: Date |

| dim_points_category_id | bigint | Gives the category name against which the goodwill points have been allocated. Possible values are - Regular points, Trackers, Promised points, Alternate currencies, and External trigger based points. | points_category | Yes; Dimension Name: Points Category |

| dim_request_created_date_id | bigint | Date when the goodwill request was created. | date | Yes; Dimension Name: Date |

| dim_request_updated_date_id | bigint | Date when the goodwill request was updated. | date | Yes; Dimension Name: Date |

| event_id | bigint | Unique identifier for the Goodwill points table. It is the primary key for this table. | _ | Yes; Measure Name: Event Id |

| goodwill_points_log_notes | string | Additional information about goodwill points. | _ | Yes; Measure Name: GoodWill Points log notes |

| goodwill_points_log_status | bigint | Status indicator for the goodwill points log. | _ | Yes; Measure Name: GoodWill Points Log Status |

| goodwill_points_logs_id | bigint | Unique identifier for each entry in the goodwill points log. | _ | Yes; Measure Name: Goodwill Points Logs Id |

| goodwill_request_status | string | Status of the goodwill request associated with the points. Whether is the status is approved or not. | _ | Yes; Measure Name: Goodwill Request Status |

| goodwill_type | string | Type or category of the goodwill points. Possible values are - Coupon, and Points. | _ | Yes; Measure Name: Goodwill Type |

| gpl_auto_update_time | bigint | Time when the goodwill points logs table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Gpl Auto Update Time |

| gr_auto_update_time | bigint | Time when the goodwill request table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Gr Auto Update Time |

| is_one_step_change | bigint | Indicates if one step issual of goodwill points is active or not. In one step issual, goodwill points are issued instantly without requiring additional approval steps. | _ | Yes; Measure Name: Is One Step Change |

| points_event_id | bigint | Refers to the points fact table event id. | _ | Yes; Measure Name: Points event Id |

| reason | string | Reason for the goodwill request. | _ | Yes; Measure Name: Reason |

| request_assoc_id | bigint | Associated ID for the goodwill request. | _ | Yes; Measure Name: Request Assoc Id |

| request_auto_update_time | bigint | Time when the goodwill request table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Request Auto Update Time |

| request_status | string | Status of the request. Possible values are - Pending, Approved, and Rejected. | _ | Yes; Measure Name: Request Status |

| request_type | string | Type of the request. | _ | Yes; Measure Name: Request Type |

| year | integer | Year when the goodwill points are issued. | _ | Yes; Dimension Name: Year |



[Goodwill Requests](/docs/goodwill-requests-standard-export-template)

[program](/docs/dimension-tables#program)

[users](/docs/dimension-tables#users-users)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[points_category](/docs/dimension-tables#points-category)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

Updated5 months ago