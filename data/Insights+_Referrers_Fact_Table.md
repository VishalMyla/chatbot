# Referrers Fact Table

This table captures the information of the referrers. A referrer is a customer who refers other customers to transact with the brand. This fact table captures all the information surrounding the referrer, such as the referrer identifier, date and time of the referral, campaign associated with the referral, and the token associated with the referral campaign.

Databricks Table Name:referrers

Referrers Fact - Entity Relationship Diagram (ERD)

# LegendPKPrimary KeyLKLinking Key

Zoom in the table for more clarity. Click the table title to view its details.

Referrers Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the corresponding table available at the source was last updated. It is in the Unix timestamp format. | _ |

| dim_campaign_id | bigint | Identifier for the campaign associated with the referral action. | campaign |

| dim_event_date_id | bigint | Date when the referral action occurred. | date |

| dim_event_time_id | bigint | Time when the referral action occurred. | time |

| dim_event_user_id | bigint | Identifier for the customer associated with the referral action. | users |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time |

| referrer_id | bigint | Unique identifier for the referrer (the customer who referred another customer). It is the primary key for this table. | _ |

| token | string | Unique token of the referral campaign. | _ |

| year | int | Year of the referral. | _ |



[campaign](/docs/dimension-tables#campaigns)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago