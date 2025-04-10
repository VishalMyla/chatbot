# Registration Event Standard Export Template

The registration event template is based on theregistration_eventfact.

Lets you export the details of the events in which an entity (customer/ store staff) registration takes place.

# Measures

| Measure Name | Description |

| --- | --- |

| Activity | Specifies the source activity that triggered the registration event. Specifies the source activity that triggered the registration event. Possible values are - wechat_follow, wechat_register, tmall_register, system, website_register, ecommerce_register, and jd_register. |

| Registration Event Rank | Rank for the event, computed on the Insights side. |

| Auto Update Time Entity Life Cycle | Date and time when the corresponding record in the entity life cycle table available at the source was last updated. It is in the Unix timestamp format. |

| Reference Id | Represents the request_id of the API call that resulted in the creation of this entity. For example, it could be the requestId from a customer update call. |

| Id | Unique identifier of the table. |



# Dimensions

| Dimension Name | Description |

| --- | --- |

| Entity Type | Identifier for the entity type. Possible values are - Customer, and Store staff. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Channel Account | Identifier for the channel where the customer's profile was created. These include Whatsapp, Web_engage, Mobile_app, Line, and WeChat. |

| State | Identifier of the status of the registration. Possible values are - Completed, executing, int_wait, failed, queued, temporary failure, and ext_wait. |

| Store Hierarchy (zone till) | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Date | Date attributes of the registration. |

| Time | Time attributes of the registration. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |



[Entity Type](/docs/dimension-tables#entity-type)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Channel Account](/docs/dimension-tables#channel-account)

[State](/docs/dimension-tables#state)

[Store Hierarchy (zone till)](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

Updated5 months ago