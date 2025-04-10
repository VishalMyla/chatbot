# Email Click Stats Fact Table

This fact table represents the event where the customer clicks the link in the campaign email. It captures information like the number of times links within emails were clicked; the link and message id; date and time of the click; etc. It is linked to the campaign, users, date and time dimension tables which provide other relevant attributes.

Databricks Table Name:email_click_stats

Email Click Stats - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Email Click Stats Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time_link_redirection | bigint | Date and time when the corresponding record in the link redirection table available at the source was last updated. It is in the Unix timestamp format. | _ |

| auto_update_time_link_redirection_stats | bigint | Date and time when the corresponding record in the link redirection stats table available at the source was last updated. It is in the Unix timestamp format. | _ |

| clicks | int | Number of times the link in the email was clicked. | _ |

| dim_campaign_id | bigint | Identifier for the campaign in which the email message is configured. | campaigns |

| dim_event_date_id | bigint | Date when the email was accessed by the customer. | date |

| dim_event_time_id | bigint | Time when the email was accessed by the customer. | time |

| dim_event_user_id | bigint | Identifier of the customer associated with the email click. | users |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time |

| id | bigint | Unique identifier of the table. It is the primary key of the table. | _ |

| link_id | bigint | Unique identifier of the link. It is the primary key of the table. | _ |

| msg_id | bigint | Identifier of the email message. | _ |

| year | int | Year when the email was clicked. | _ |



[campaigns](/docs/dimension-tables#campaigns)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago