# Payment Mode Standard Export Template

The Payment Mode template is based on thepayment_detailsfact

- Allows you to export payment data, including the modes of payment used.

- Granularity at bill id level.

- Only a detailed breakdown of payments made, not a summarized one.

- Exports the payment mode details for each transaction. You can export transaction-level data, including a breakdown of payment modes.

- A bill can be paid through cash, credit card, gift card, points or coupon redemption or some other means either fully or partially.

## Measures

| Measure | Description |

| --- | --- |

| bill_amount | The net transaction amount. |

| bill_discount | The total discount on the bill amount. |

| bill_id | A unique id generated for the bill internally by capillary system. It helps in differentiating one customer's bill with the other. |

| central_gst | Central GST (Goods and Service Tax) amount levied on the bill. GST is charged at state level and central level. |

| integrated_gst | GST (Goods and Service Tax) amount levied by the central government in case of inter-state supplies and imports. |

| payment_mode_amount | Amount paid through a specific payment mode. |

| payment_mode_details_id | Unique id associated to a specific payment mode. |

| quantity | Quantity of items purchased. |

| state_gst | State GST (Goods and Service Tax) amount levied on the bill. GST is charged at state level and central level. |

| tax_amount | Total tax levied at the bill level. |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| Payment Mode Attribute | Gives the payment mode attributes such as the payment attribute name, value, and id. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Nps | Gives the Net Promoter Score (from 1 to 10) given by the customer. |

| Order Channel | Identifier for the order channel with which the order is placed, such as online or in-store. |

| Source | Identifier for the source of the bill, e.g., instore, e-comm, newsletter, campaigns. |

| Loyalty | Indicates the loyalty type of the customer. |

| Date | Date attributes of the payment. |

| Store Hierarchy (zone till) | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Time | Time attributes of the payment. |

| Dim Bill Type Id | Captures the type of bill for which the payment has been made, e.g., Regular, Not interested. |

| Added On Date | Links to the date dimension. |

| Payment Mode | Includes the payment mode label and Id. |

| Bill Outlier | Outlier status of the bill. |

| Cashier Id | Identifier of the cashier. |

| Repeat | Shows if the customer has made previous purchases or if it's their first transaction. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |



[Payment Mode Attribute](/docs/dimension-tables#payment-attributes)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Nps](/docs/dimension-tables#nps-score)

[Order Channel](/docs/dimension-tables#order-channel)

[Source](/docs/dimension-tables#source-type)

[Loyalty](/docs/dimension-tables#loyalty-type)

[Date](/docs/dimension-tables#date)

[Store Hierarchy (zone till)](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Time](/docs/dimension-tables#time)

[Dim Bill Type Id](/docs/dimension-tables#bill-type)

[Added On Date](/docs/dimension-tables#date)

[Payment Mode](/docs/dimension-tables#payment-mode)

[Bill Outlier](/docs/dimension-tables#outlier-status)

[Cashier Id](/docs/dimension-tables#cashier)

[Repeat](/docs/dimension-tables#repeat-status)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

Updated6 months ago