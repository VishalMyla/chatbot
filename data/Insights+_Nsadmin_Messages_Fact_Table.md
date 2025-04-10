# Nsadmin Messages Fact Table

This fact table captures all communications sent to customers. It lets you access both, transaction and campaign messages together.

Databricks Table Name:nsadmin_messages

Nsadmin Messages - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Nsadmin Messages Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theMessagesTemplate |

| --- | --- | --- | --- | --- |

| auto_update_time_nsadmin | bigint | Date and time when the corresponding record in the nsadmin table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Nsadmin |

| client_context_id | bigint | The context ID to which the message belongs. If the message is triggered by campaigns, it will be the communication details ID. | _ | Yes; Measure Name: Client Context Id |

| client_id | bigint | Identifier of the client that triggered the message, such as campaigns. Each module has a unique static ID. | _ | Yes; Measure Name: Client Id |

| dim_account_id | bigint | Identifier for the gateway account used for the communication. | gateway | Yes; Dimension Name: Gateway Account > Id |

| dim_campaign_id | bigint | Captures the campaign details for which the communication occurred. | campaigns | Yes; Dimension Name: Campaign > Campaign Id |

| dim_communication_channel_id | bigint | Indicates the channel used for communicating with the customer. Possible values are - SMS, email, voicemail, Wechat, Facebook, Viber, etc. | communication_channelLink | Yes; Dimension Name: Communication Channel > Id |

| dim_communication_client_id | bigint | Identifier of the client associated with the communication. Possible values are - Loyalty, promotion, referral, etc. | communication_clientLink | Yes; Dimension Name: Communication Client > Id |

| dim_delivery_status_id | bigint | Identifier assigned to the nsadmin message delivery status. Possible values are - Delayed delivery, clicked, opened, received, read, sending, sent, blocked, etc. | campaign_delivery_statusLink | Yes; Dimension Name: Delivery Status > Id |

| dim_event_date_id | bigint | Date of the communication. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Time of the communication. | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Identifier of the customer for which the communication occurred, set internally by Capillary. | users | Yes; Dimension Name: User > User Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_nsadmin_priority_id | bigint | Identifier of the nsadmin message priority. Possible values are - High, default, and bulk. | nsadmin_priority | Yes; Dimension Name: Nsadmin Priority > Id |

| message | string | Content of the message. | _ | Yes; Measure Name: Message |

| message_count | bigint | Total number of messages sent. | _ | Yes; Measure Name: Message Count |

| nsadmin_id | bigint | Unique id of the message as available in the nsadmin table. It is the primary key of the table. | _ | Yes; Measure Name: Nsadmin Id |

| year | int | Year when the communication was sent. | _ | Yes; Dimension Name: Year |



[Messages](/docs/messages-standard-export-template)

[gateway](/docs/dimension-tables#gateway)

[campaigns](/docs/dimension-tables#campaigns)

[Link](/docs/dimension-tables#communication-channel)

[Link](/docs/dimension-tables#communication-client)

[Link](/docs/dimension-tables#campaign-delivery-status)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[nsadmin_priority](/docs/dimension-tables#nsadmin-priority)

Updated7 months ago