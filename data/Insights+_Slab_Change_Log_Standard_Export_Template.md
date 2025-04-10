# Slab Change Log Standard Export Template

The slab change log template is based on theslab_change_logfact.

This template lets you export the entire slab history of the customer. You can also get the slab change in a specific duration.

## Measures

| Measure | Description |

| --- | --- |

| Auto Update Time Slab Upgrade | Date and time when the slab upgrade table is available at the source was last updated. It is in the Unix timestamp format. |

| Event Date Time | Date and time in Unix timestamp when a slab is changed |

| Event Source Id | Unique id of the event source. |

| Notes | Reason why the slab is changed. |

| Slab Name | Name of the slab or tier. |

| User Id | Unique id of a customer. |

| Id | Unique id of slab upgrade history table. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| Date | Date attributes of the payment. |

| Time | Time attributes of the payment. |

| Customer Slab | Slab details to which the customer belongs. |

| Scd Type | Captures the SCD type used for customer segmentation. |

| Previous Customer Slab | Gives the details of the customer slab before the change. |

| Store Hierarchy (zone till) | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Slab Upgrade Event Type | Captures event that caused the customer's slab upgrade. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Slab Change Action | Captures the action associated with the customer's slab change. |

| Slab Change Source | Captures the source associated with the customer's slab change. |



[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Customer Slab](/docs/dimension-tables#customer-slab)

[Scd Type](/docs/dimension-tables#scd-type)

[Previous Customer Slab](/docs/dimension-tables#customer-slab)

[Store Hierarchy (zone till)](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Slab Upgrade Event Type](/docs/dimension-tables#upgrade-event-type)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Slab Change Action](/docs/dimension-tables#slab-change-action-slab_change_action)

[Slab Change Source](/docs/dimension-tables#slab-change-source-slab_change_source)

Updated6 months ago