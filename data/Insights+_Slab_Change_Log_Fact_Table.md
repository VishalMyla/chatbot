# Slab Change Log Fact Table

This table captures the event wherein slab change for a customer occurs, such as the date and time of slab change, the associated customer, and the store where the slab change occurred.

Databricks Table Name:slab_change_log

Slab Change Log - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Slab Change Log Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theSlab Change LogTemplate |

| --- | --- | --- | --- | --- |

| Auto_Update_Time_Slab_Upgrade | bigint | Date and time when the corresponding record in the slab change log table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Slab Upgrade |

| dim_customer_slab_id | integer | Identifier of the slab to which the customer currently belongs. | customer_slab | Yes; Dimension Name: Customer Slab |

| dim_event_date_id | bigint | Date when the slab change occurred. | date | Yes; Dimension Name: Date |

| dim_event_program_id | integer | Identifier of the program associated with the customer's slab change. | program |  |

| dim_event_time_id | bigint | Time when the slab change occurred. | time | Yes; Dimension Name: Time |

| dim_event_user_id | bigint | Unique identifier for the customer assigned by Capillary. | users | Yes; Dimension Name: User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store, where the customer's slab change occurred. It distinguishes one checkout location from another. | zone_tills | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time |

| dim_previous_slab_id | bigint | Slab ID of the customer prior to the slab change. | customer_slab | Yes; Dimension Name: Previous Customer Slab |

| dim_scd_type_id | integer | Unique identifier and primary key of the table. | scd_type | Yes; Dimension Name: Scd Type |

| dim_slab_change_action_id | string | Indicates the action associated with the slab change. Possible values are - Upgrade, downgrade, and renewal. | slab change action | Yes; Dimension Name: Slab Change Action |

| dim_slab_change_source_id | string | Source ID associated with the customer's slab change. Possible values are - Import, merge, rule, strategy, partner program, etc. | slab_change_source | Yes; Dimension Name: Slab Change Source |

| dim_upgrade_event_type_id | bigint | Identifier for the type of event that caused the customer's slab upgrade. Possible values are - Customer registration, new bill, points redemption, voucher redemption, campaign referral, etc. | upgrade_event_type | Yes; Dimension Name: Slab Upgrade Event Type |

| event_date_time | bigint | Date and time when the slab change occurred. | _ | Yes; Measure Name: Event Date Time |

| event_source_id | bigint | Identifier for the event. | _ | Yes; Measure Name: Event Source Id |

| id | bigint | Unique identifier and primary key of the table. Refers to the change log id. | _ | Yes; Measure Name: Id |

| notes | string | Additional details or notes related to the slab change. | _ | Yes; Measure Name: Notes |

| slab_name | string | The name of the slab to which the customer migrated after the change. | _ | Yes; Measure Name: Slab Name |

| user_id | bigint | Identifier for the customer. | _ | Yes; Measure Name: User Id |

| year | integer | Year when the slab change occurred. | _ | Yes; Dimension Name: Year |



[Slab Change Log](/docs/slab-change-log-standard-export-template)

[customer_slab](/docs/dimension-tables#customer-slab)

[date](/docs/dimension-tables#date)

[program](/docs/dimension-tables#program)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_tills](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[customer_slab](/docs/dimension-tables#customer-slab)

[scd_type](/docs/dimension-tables#scd-type)

[slab change action](/docs/dimension-tables#slab-change-action-slab_change_action)

[slab_change_source](/docs/dimension-tables#slab-change-source-slab_change_source)

[upgrade_event_type](/docs/dimension-tables#upgrade-event-type)

Updated7 months ago