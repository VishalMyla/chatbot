# Referrals Fact Table

This table records referral events, where existing customers introduce new customers to the brand. The person who makes the referral is known as a referrer, while the individual who receives the referral invite is called a referee. This fact table captures all the information surrounding the referral event, such as the date and time of the referral, store associated with the referral, referrer and referee identifiers, and the campaign associated with the referral.

Databricks Table Name:referrals

Referrals Fact - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Referrals Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the corresponding table available at the source was last updated. It is in the Unix timestamp format. | _ |

| context_id | bigint | Identifier for the context in which the action occurred, such as a specific campaign or promotion context. | _ |

| dim_campaign_id | bigint | Identifier for the campaign associated with the referral action. | campaign |

| dim_event_date_id | bigint | Date when the referral action occurred. | date |

| dim_event_time_id | bigint | Time when the referral action occurred. | time |

| dim_event_user_id | bigint | Identifier for the customer associated with the referral action. | users |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store, where the referral occurred. It distinguishes one checkout location from another within the same store. | zone till |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time |

| dim_referred_to_user_id | bigint | Identifier for the customer who was referred (referee). | users |

| event_type | string | The type of event, such as "Referral Registration" (when a referee registers as a result of a referral) or "Referral Transaction" (when a referee makes a transaction as a result of a referral). | _ |

| referee_id | bigint | Unique identifier for the referee (the customer who was referred). It is the primary key of the table. | _ |

| year | int | Year of the referral. | _ |



[campaign](/docs/dimension-tables#campaigns)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

Updated7 months ago