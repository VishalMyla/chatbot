# Messages Standard Export Template

This template is based on thensadminfact.

The template lets you export all the communications sent to customers. This is the only template through which you can get both transaction and campaign messages together.

## Measures

| Measure | Description |

| --- | --- |

| Auto Update Time Nsadmin | Date and time when the corresponding record in the nsadmin table available at the source was last updated. It is in the Unix timestamp format. |

| Client Context Id | The context id to which the message belongs. If the message is triggered by campaigns, it will be the communication details id. |

| Client Id | Identifier of the client that triggered the message, such as campaigns. Each module has a unique static id. |

| Message | Actual message sent to NS Admin. |

| Message Count | Number of messages sent to NS Admin. |

| Nsadmin Id | Unique id of the message as available in the nsadmin table. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| Date | Date attributes related to the communication. |

| Nsadmin Priority | Identifier of the nsadmin message priority, such as high or low priority. |

| Campaign | Captures the campaign details for which the communication occurred. |

| Communication Channel | Indicates the channel used for communicating with the customer. These include SMS, email, voicemail, WeChat, Facebook, Viber, etc. |

| Delivery Status | Identifier assigned to the nsadmin message delivery status. These include delayed delivery, clicked, opened, received, read, sending, sent, blocked, etc. |

| Gateway Account | Identifier for the gateway account used for the communication. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Time | Time attributes related to the communication. |

| Communication Client | Identifier of the client associated with the communication. |



[Date](/docs/dimension-tables#date)

[Nsadmin Priority](/docs/dimension-tables#nsadmin-priority)

[Campaign](/docs/dimension-tables#campaigns)

[Communication Channel](/docs/dimension-tables#communication-channel)

[Delivery Status](/docs/dimension-tables#campaign-delivery-status)

[Gateway Account](/docs/dimension-tables#gateway)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Time](/docs/dimension-tables#time)

[Communication Client](/docs/dimension-tables#communication-client)

Updated6 months ago