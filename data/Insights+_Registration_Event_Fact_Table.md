# Registration Event Fact Table

Each row in this table represents an event in which an entity (customer/ store staff) registration takes place.  It captures information like the channel where the profile was created; the type of entity registered; date and time of the registration; and the store identifier for the registration.

Databricks Table Name:registration_event

Registration Event - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Registration Event Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theRegistration Event LogTemplate |

| --- | --- | --- | --- | --- |

| activity | string | Specifies the source activity that triggered the registration event. Possible values are - wechat_follow, wechat_register, tmall_register, system, website_register, ecommerce_register, and jd_register. | _ | Yes; Measure Name: Activity |

| auto_update_time_entity_life_cycle | bigint | Date and time when the corresponding record in the entity life cycle table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Entity Life Cycle |

| dim_channel_account_id | bigint | Identifier for the channel where the customer's profile was created. Possible values are - Whatsapp, Web_engage, Mobile_app, Line, and WeChat. | channel_account | Yes; Dimension Name: Channel Account > Channel Account Id |

| dim_entity_type_id | bigint | Identifier for the entity type. Possible values are - Customer, and Store staff. | entity_type | Yes; Dimension Name: Entity Type > Id |

| dim_event_date_id | bigint | Date when the registration was done. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Time when the registration was done. | time | Yes; Dimension Name: Time > Time |

| dim_event_user_id | bigint | Identifier of the customer who has registered. It is an internally assigned value by Capillary for user identification. | users | Yes; Dimension Name: User > User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store, aiding in transaction tracking and management. | zone till | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_state_id | bigint | Identifier of the status of the registration. Possible values are - Completed, executing, int_wait, failed, queued, temporary failure, and ext_wait. | state | Yes; Dimension Name: State > Id |

| id | bigint | Unique identifier of the table. It is the primary key of the table. | _ | Yes; Measure Name: Id |

| reference_id | string | Represents the request_id of the API call that resulted in the creation of this entity. For example, it could be the requestId from a customer update call. This is the primary key for this table. | _ | Yes; Measure Name: Reference Id |

| registration_event_rank | bigint | This field is computed on the Enhanced Insights side. | _ | Yes; Measure Name: Registration Event Rank |

| year | int | Year of registration. | _ | Yes; Dimension Name: Year |



[Registration Event Log](/docs/registration-event-standard-export-template)

[channel_account](/docs/dimension-tables#channel-account)

[entity_type](/docs/dimension-tables#entity-type)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[state](/docs/dimension-tables#state)

Updated7 months ago