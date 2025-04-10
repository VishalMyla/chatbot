# Communication Credits Log Fact Table

This fact table captures the addition or removal of credits. Organisations are charged credits for sending communications (SMS, email, and X-Engage) to customers through Capillary products. This fact table captures information such as the user who added the credits; the credit type; and date and time of the credit addition/ removal. Mapping data from this table and the linked dimension tables helps in analysing the credit usage patterns for brands.

Databricks Table Name:communication_credit_logs

Communication Credits Log - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Communication Credits Log Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| abs_credit_value | integer | Absolute value of 'src (source)_credit_value' (e.g, if 'src_credit_value' is -2 or 2, then 'abs_credit_value' would be 2). | _ |

| auto_update_time_credits_log | bigint | Date and time when the corresponding record in the credits_log table available at the source was last updated. It is in the Unix timestamp format. | _ |

| comments | string | Comments or notes associated with the credit utilization. | _ |

| dim_added_by_user_id | bigint | Unique identifier of the user from the brand/ Capillary side who initiated the credit utilization or modification. | users |

| dim_communication_channel_id | bigint | Indicates the channel used for communicating with the customer. Possible values are - SMS, email, voicemail, Wechat, Facebook, Viber, etc. | communication_channel |

| dim_credit_type_id | bigint | Identifier for the type of credit utilization. Possible values are, credits - Added, or Removed. | credit_type |

| dim_event_date_id | bigint | Date when the credit utilization occurred. | date |

| dim_event_time_id | bigint | Time when the credit utilization occurred. | time |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time |

| id | bigint | Unique identifier of the credit log entry. It is the primary key of the table. | _ |

| is_deleted | integer | Indicates whether the credit log entry has been deleted (0 for not deleted, 1 for deleted). | _ |

| src_credit_value | integer | Represents the source credit value, before any modifications (addition or removal). | _ |

| year | integer | Year of the credit utilization. | _ |



[users](/docs/dimension-tables#users-users)

[communication_channel](/docs/dimension-tables#communication-channel)

[credit_type](/docs/dimension-tables#credit-type)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago