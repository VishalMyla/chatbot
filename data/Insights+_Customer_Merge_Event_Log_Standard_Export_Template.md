# Customer Merge Event Log Standard Export Template

This template is based on thecustomer_merge_logfact.

Customer Merge Event Log lets you export the log of customer account merge event which includes both victim and survivor details. The template also supports, audience filter based and customer segment based filters.

## Measures

| Measure | Dimension |

| --- | --- |

| Auto Update Time | Date and time (in Unix timestamp) when the customer merge log is recently updated. |

| Details | Details about the merge process. |

| Merge Reason | Reason specified while merging the account. |

| Victim External Id | External id of the victim account. |

| Victim Mobile | Mobile number of the victim account. |

| Merge Event Id | Unique internal id associated to the merge event. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Victim User | Identifier for the user with which the customer profile was merged. |

| Date | Date attributes of the customer merge. |

| Time | Time attributes of the customer merge. |

| Merge By Till | Identifier for the store (till) where the customer profile was merged. |

| Merge By Admin User | Identifier for the admin user who performed the merge. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |



[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Victim User](/docs/dimension-tables#users-users)

[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Merge By Till](/docs/dimension-tables#zone-till)

[Merge By Admin User](/docs/dimension-tables#admin-users)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

Updated6 months ago