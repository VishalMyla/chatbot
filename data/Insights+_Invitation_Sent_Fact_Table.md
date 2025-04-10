# Invitation Sent Fact Table

This fact table captures events related to the sending of invitations during a referral campaign. It stores detailed information about each invitation sent, including the date and time at which the invitation was sent, identifiers for the campaign, client, and invitee, type of identifier and the status of the invitee.

Databricks Table Name:invitation_sent

Invitation Sent Fact - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Invitation Sent Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theInvitation SentTemplate** |

| --- | --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the corresponding record in the invitation_sent table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time |

| client_code | string | Referrers to the store code. | _ | Yes; Measure Name: Client Code |

| client_type | string | Referrers to the client type from where the invitee came. | _ | Yes; Measure Name: Client Type |

| dim_campaign_id | bigint | Identifier for the campaign under which the referral was made. | campaign | Yes; Dimension Name: Campaign > Campaign Id |

| dim_event_date_id | bigint | Date when the invitation was sent. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Time when the invitation was sent. | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Identifier for the user who sent the invitation. | users | Yes; Dimension Name: User > User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_till | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| identifier_type | string | Type of identifier used for the invitee (e.g., email, mobile). | _ | Yes; Measure Name: Identifier Type |

| invitee_id | bigint | Unique identifier for the invitee. It is the primary key of the table. | _ | Yes; Measure Name: Invitee Id |

| invitee_identifier | string | Identifier for the invitee, such as mobile number. | _ | Yes; Measure Name: Invitee Identifier |

| invitee_name | string | Name of the invitee. | _ | Yes; Measure Name: Invitee Name |

| year | int | Year when the invitation was sent. | _ | Yes; Dimension Name: Year |



[Invitation Sent](/docs/invitation-sent-standard-export-template)

[campaign](/docs/dimension-tables#campaigns)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

Updated7 months ago