# Return Transactions Standard Export Template

This template is based on the fact Return Bill Line Items

It contains details of transaction returns of any type. For example, partial return, full return, exchange of items (mixed transaction). However, it is required to specify parent bill id when returning an item. The parent bill id is the bill id of the actual transaction of the item. If the parent bill id is left blank, you will see the column blank in the export file.

## Measures

| Measure | Description |

| --- | --- |

| auto_update_time_returned_bill | Date and time (in Unix timestamp) when the return bill level information is updated. |

| auto_update_time_returned_lineitem | Date and time (in Unix timestamp) when the return bill line item information is updated. |

| bill_amount | The net bill amount after returning a purchase - Bill amount - the cost of return item. |

| bill_id | The unique id generated for a particular return bill internally in the capillary system. |

| bill_number | The unique number of a particular return bill which is either generated at the POS machine or provided manually. |

| exchange_bill_id | The unique id generated internally in the Capillary system for the mixed transaction (item exchange). |

| issued_bill_id | Unique parent bill id of that particular transaction. |

| issued_lineitem_id | Unique parent line-item id for that particular line-item of a transaction. |

| parent_bill_number | Actual transaction number of the return item used in case of exchange. This will be blank if the parent bill number is not mentioned during return. |

| item_code | Unique item code of the returned line item. |

| line_item_amount | Net amount of the line item including discount and tax. |

| line_item_discount | Discount given for that particular line item. |

| line_item_id | Unique internal reference id for the line item. |

| line_item_value | Price of the line item excluding discount and tax. |

| notes | Any specific note mentioned for a transaction return. |

| quantity | Quantity of a line-item returned. |

| rate | Purchase price of the return item - the actual cost after availing offers and discounts. |

| parent_bill_outlier_status | Outlier status of the parent bill id of the return bill. |

| parent_bill_lineitem_outlier_status | Outlier status of the bill line item. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| Store Hierarchy(zone till) | Identifier for the store. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Returned Type | Identifier for the return type. |

| Product | Product details such as color, style, description, price, image url, item code, category, sub-category, item id, etc. |

| Product Attributes | Product attributes such as description, item Sku, and item Id. |

| Date | Date attributes. |

| Membership | Details such as membership type, and Id. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Time | Time attributes. |

| Parent Bill Lineitem Outlier Status | Gives the outlier status of the parent bill line item. |

| Parent Bill Outlier Status | Outlier status of the parent bill. |

| Bill Outlier | Outlier status of the bill. |

| Latest Updated Date | Last updated date details. |

| Latest Updated Time | Last updated time details. |



[Store Hierarchy](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Returned Type](/docs/dimension-tables#return-type)

[Product](/docs/dimension-tables#item)

[Product Attributes](/docs/dimension-tables#item)

[Date](/docs/dimension-tables#date)

[Membership](/docs/dimension-tables#membership-type)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Time](/docs/dimension-tables#time)

[Parent Bill Lineitem Outlier Status](/docs/dimension-tables#outlier-status)

[Parent Bill Outlier Status](/docs/dimension-tables#outlier-status)

[Bill Outlier](/docs/dimension-tables#outlier-status)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

Updated6 months ago