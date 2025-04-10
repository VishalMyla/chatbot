# Call Tasks Standard Export Template

This template is based oncall_task_customer_statusfact.

The template lets you export all the call tasks created at the POS for cashiers to process. The tasks could be call customers for birthday wishes that will get populated every day for the cashier to process. These tasks have a specific validity within which these needs to be closed.

## Measures

| Measure | Description |

| --- | --- |

| Auto Update Time Task Status | Date and time when the corresponding record in the task status table available at the source was last updated. It is in the Unix timestamp format. |

| Call Task Id | Unique id associated to the call task. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| Store Hierarchy (zone till) | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Task | Provides details about the task, including the task type, task description, etc. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Updated By User | Details of the user who updated the call task status. |

| Date | Date attributes of the call task. |

| Time | Time attributes of the call task. |

| Updated Date | Captures the date when the date has been updated. |

| Updated Time | Captures the time when the date has been updated. |

| Internal Status | Identifier for the internal status of the call task, such as open and closed task. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |

| Campaign | Identifier of the campaign associated with the call task. |

| Campaign Message | Identifier of the campaign message associated with the call task. |



[Store Hierarchy (zone till)](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Task](/docs/dimension-tables#tasks)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Updated By User](/docs/dimension-tables#users-users)

[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Updated Date](/docs/dimension-tables#date)

[Updated Time](/docs/dimension-tables#time)

[Internal Status](/docs/dimension-tables#internal-status)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

[Campaign](/docs/dimension-tables#campaigns)

[Campaign Message](/docs/dimension-tables#campaign-message-campaign_msg)

Updated6 months ago