# Custom Field Data Fact Table

Custom fieldsare used to store organization-specific data for customers, transactions, line items, coupons, and more. These fields accommodate any data type and value, providing the flexibility to capture a wide range of information that doesn't fit into standard or extended fields. The custom field data fact table captures the custom field values, and is linked to date, time, and store dimension tables.

Databricks Table Name:custom_field_data

Custom Field Data - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Custom Field Data Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| assoc_id | bigint | Acts as a versatile linkage identifier that can reference different types of associations (e.g., user ID, bill ID) based on the context in which the custom fields are tagged. | _ |

| auto_update_time_cf_data | bigint | Date and time when the corresponding record in the custom field data table available at the source was last updated. It is in the Unix timestamp format. | _ |

| cf_value | string | Value of the custom field. | _ |

| dim_cf_id | bigint | Unique identifier for the custom field. | custom_field_info |

| dim_event_date_id | bigint | Date when any associate like transaction/card/customer was attached to any custom field. | date |

| dim_event_time_id | bigint | Time when any associate like transaction/card/customer was attached to any custom field. | time |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store, aiding in transaction tracking and management. | zone_till |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time |

| id | bigint | Unique identifier of the table. It is the primary key for this table. | _ |

| year | int | Year when value was tagged to the custom field. | _ |



[custom_field_info](/docs/dimension-tables#custom-field-info)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago