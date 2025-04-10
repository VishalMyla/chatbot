# Contacted Standard Export Template

The Contacted template is based on the Contact Info fact table.

This template consists of details of customers that were contacted for a specific campaign, except for timeline campaigns.

## Measures

| Measure | Description |

| --- | --- |

| auto_update_time_comm_details | Date and time (in Unix timestamp) when communication details table is updated. |

| auto_update_time_contact | Date and time (in Unix timestamp) when the contact table is updated. |

| message_body | Template of the campaign message. |

| msg_id | This is the template id generated for each message template of a campaign. For example, if there are 5 types of messages sent in a campaign, it will have 5 msg_ids. |

| nsadmin_id | Communication id corresponding to a specific communication to a customer. This represents a granular level view of a specific communication. |

| open_count | Number of times the email message has been opened. |

| total_link_click_count | Total number of times the links within an email have been clicked by the customer. |

| unsubscribed | Captures the subscription status of the customer. If the customer has unsubscribed, it will be marked as "Yes"; if not, it will be marked as "Not yet". |

| year | Year of the communication. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| Communication Type | Identifier for the type of communication received by the customer. |

| User | Unique identifier assigned to the customer by Capillary. |

| Campaign Group | Unique identifier assigned to the campaign group. Possible values are - Test, and Control. |

| Store Hierarchy(zone till) | Identifier assigned to the point-of-sale (POS) terminal within a store. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Communication Channel | Indicates the channel used for communicating with the customer. Possible values are - SMS, email, voicemail, etc. |

| Date | Date when the communication with the customer was done. |

| Time | Time when the communication with the customer was done. |

| Campaign Contact Date | Date when the customer was contacted. |

| Campaign Contact Time | Time when the customer was contacted. |

| Unsubscription Status | Unique ID for the unsubscription status, indicating whether the customer has opted to unsubscribe or not. |

| Link Open Date | Date when the email within a campaign was accessed. |

| Link Open Time | Time when the email within a campaign was accessed. |

| Campaign | Unique identifier assigned to the campaign. |

| Campaign Message | Unique identifier assigned to the message sent for the campaign. |

| Campaign Delivery Status | Unique identifier assigned to the campaign delivery status. Possible values: Sent, Delivered, Not Delivered, Failed. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |

| Journey Block | Identifier of the journey block. It is the combination of journeyMetaId - journeyVersion - blockId. |



[Communication Type](/docs/dimension-tables#communication-type)

[User](/docs/dimension-tables#users-users)

[Campaign Group](/docs/dimension-tables#campaign-group)

[Store Hierarchy](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Communication Channel](/docs/dimension-tables#communication-channel)

[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Campaign Contact Date](/docs/dimension-tables#date)

[Campaign Contact Time](/docs/dimension-tables#time)

[Unsubscription Status](/docs/dimension-tables#unsubscription-status)

[Link Open Date](/docs/dimension-tables#date)

[Link Open Time](/docs/dimension-tables#time)

[Campaign](/docs/dimension-tables#campaigns)

[Campaign Message](/docs/dimension-tables#campaign-message-campaign_msg)

[Campaign Delivery Status](/docs/dimension-tables#campaign-delivery-status)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

[Journey Block](/docs/dimension-tables#journey-block)

Updated6 months ago