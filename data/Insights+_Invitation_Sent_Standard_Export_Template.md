# Invitation Sent Standard Export Template

This export template is base on theinvitation_sentfact.

Lets you export details of events related to the sending of invitations during a referral campaign. They include fields such as the date and time at which the invitation was sent, identifiers for the campaign, client, and invitee, type of identifier and the status of the invitee.

# Measures

| Measure Name | Description |

| --- | --- |

| Client Type | Referrers to the client type from where the invitee came. |

| Identifier Type | Type of identifier used for the invitee, such as email, or mobile. |

| Invitee Identifier | Identifier for the invitee, such as mobile number. |

| Client Code | Referrers to the store code. |

| Auto Update Time | Date and time when the corresponding record in the invitation_sent table available at the source was last updated. It is in the Unix timestamp format. |

| Invitee Name | Name of the invitee. |

| Invitee Id | Unique identifier for the invitee. |



# Dimensions

| Dimension Name | Description |

| --- | --- |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |

| Date | Date when the invitation was sent. |

| Time | Time when the invitation was sent. |

| Store Hierarchy (zone till) | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Campaign | Identifier for the campaign under which the referral was made. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |



[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Store Hierarchy (zone till)](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Campaign](/docs/dimension-tables#campaigns)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

Updated5 months ago