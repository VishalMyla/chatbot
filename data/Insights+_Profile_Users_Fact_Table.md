# Profile Users Fact Table

This table captures the events related to user profile creation and modification.

Databricks Table Name:profile_users

Profile Users - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Profile Users Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theProfilesTemplate |

| --- | --- | --- | --- | --- |

| auto_update_time_profile_users | bigint | Date and time when the corresponding record in the communications table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Profile Users |

| comm_channel_android | string | Unique identifier if the customer's profile was created using an Android app. | _ | Yes; Measure Name: Comm Channel Android |

| comm_channel_email | string | Email address associated with the customer's profile, specifically if the profile was created through an Android or iOS app. | _ | Yes; Measure Name: Comm Channel Email |

| comm_channel_ios | string | Unique identifier if the customer's profile was created using an iOS app. | _ | Yes; Measure Name: Comm Channel Ios |

| comm_channel_mobile | string | Unique identifier (mobile number), if the customer's profile was created using a mobile device. | _ | Yes; Measure Name: Comm Channel Mobile |

| comm_channel_wechat | string | Unique identifier (wechat number), if the customer's profile was created using WeChat. | _ | Yes; Measure Name: Comm Channel Wechat |

| dim_channel_account_id | bigint | Identifier for the channel where the customer's profile was created. Possible values are - Whatsapp, Web_engage, Mobile_app, Line, and WeChat. It is the primary key of this table. | channel_account | Yes; Dimension Name: Channel Account > Channel Account Id |

| dim_event_date_id | bigint | Date when the customer registered/ customer's profile was created. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Time when the customer registered/ customer's profile was created. | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Identifier for the customer details. It is the primary key of this table. | users | Yes; Dimension Name: User > User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_tills | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_modified_date_id | bigint | Date when modifications were made to the customer's profile. | date | _ |

| dim_modified_time_id | bigint | Time when modifications were made to the customer's profile. | time | _ |

| dim_modified_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | _ | _ |

| dim_source_profile_type_id | int | Identifier for the source where the customer's profile was created. If the customer's profile was created in-store, the value will be 'Instore', and if not, the value will be 'Not-instore'. It is the primary key of this table. | source_profile_type | _ |

| first_name | string | First name of the customer. | _ | Yes; Measure Name: First Name |

| id_email | string | Email address of the customer. | _ | Yes; Measure Name: Id Email |

| id_external | string | External ID of the customer. | _ | Yes; Measure Name: Id External |

| id_mobile | string | Mobile number of the customer. | _ | Yes; Measure Name: Id Mobile |

| id_unique | string | Unique identifier of the customer. | _ | Yes; Measure Name: Id Unique |

| last_name | string | Customer's last name. | _ | Yes; Measure Name: Last Name |

| union_id | string | Unique identifier for the table. | _ | Yes; Measure Name: Union Id |

| year | int | Year when the customer's profile was created. | _ | Yes; Dimension Name: Year |



[Profiles](/docs/profiles-2-standard-export-template)

[channel_account](/docs/dimension-tables#channel-account)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_tills](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[source_profile_type](/docs/dimension-tables#source-profile-type)

Updated7 months ago