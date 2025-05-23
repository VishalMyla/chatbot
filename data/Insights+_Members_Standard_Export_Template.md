# Members Standard Export Template

This export template is based on thecustomer_summaryfact table. It contains details of members (loyalty and non-loyalty customers) and non-members based on the last updated date or event date (registration date).

[customer_summary](/docs/customer-summary-members-fact-table)

# Measures

| Measure Name | Description |

| --- | --- |

| Redeemed Points | Total points redeemed by the customer since registration. |

| First Visit Basket Size | Number of items purchased during the customer's first transaction. |

| Number Of Visit Days | Total number of different days on which the customer has visited the store, since registration. |

| Returned Bill Amount | The total amount corresponding to the items returned by the customer, since registration. |

| Loyalty Points | Total number of points that the customer can redeem as of today. |

| Expired Points | Total points that have expired for the customer since registration. |

| First Visit Bill Amount | Total amount spent by the customer during their first transaction. |

| Average Spent Per Visit | Average amount of money a customer spends during each visit they make to the store (total amount spent divided by number of visits). |

| Redeemed Voucher Count | Total number of vouchers redeemed by the customer, since registration. |

| Lifetime Points | Total points accumulated by the customer since registration. |

| Number Of Visits | Total number of transactions made by the customer since registration. |

| Lifetime Purchased | Total amount spent by the customer since registration. |

| Sku Purchased | Total number of different product types (SKUs) purchased by the customer, since registration. Stock Keeping Unit (SKU) is a unique identifier assigned to each distinct product or item in inventory. |

| Average Spent Per Sku | Average amount spent by the customer on each product type (that is, per SKU). Stock Keeping Unit (SKU) is a unique identifier assigned to each distinct product or item in inventory. |

| Returned Bill Count | Total number of bills for which the items have been returned by the customer, since registration. |

| Total Bill Amount | Total amount spent by the customer across all the bills, since registration. |

| Total Line Item Amount | Total amount spent on all line items purchased by the customer across all the bills, since registration. |

| Total Returned Line Item Amount | Total amount refunded for all individual line items returned by the customer, since registration. |

| Total Bill Count | Total number of transactions made by the customer since registration. |

| Skus Returned | Total number of different product types (SKUs) returned by the customer, since registration. |

| Line Item Count | Total number of items purchased by the customer, since registration. |

| Latency | Average number of days between two successive visits made by the customer. |

| Dim Preferred Store Id | Preferred store where the customer performs most of the transactions. |

| Auto Update Time Loyalty | Date and time when the corresponding record in the loyalty table available at the source was last updated. It is in the Unix timestamp format. |

| Auto Update Time Cps | Date and time when the corresponding record in the customer_point_summary table available at the source was last updated. It is in the Unix timestamp format. |

| Auto Update Time Extnd | Date and time when the corresponding record in the extended field table available at the source was last updated. It is in the Unix timestamp format. |

| Last Visit Bill Amount | Total amount spent by the customer during their most recent transaction. |

| Max Bill Amount | Highest amount spent by the customer in a single transaction, since registration. |

| Max Bill Count In Week | Maximum number of transactions made by the customer in a week, since registration. |

| Max Bill Count In Day | Maximum number of transactions made by the customer in a single day, since registration. |

| Redeemed Visit Days | Total number of days on which the customer redeemed points during visits, since registration. |

| Redemption Latency | Average number of days between two successive point redemptions by the customer. |

| Redeemed Visits | Total number of visits during which the customer redeemed points, since registration. |

| Points Awarded Days | Total number of days on which the customer received points, since registration. |

| Redeemed Rate | Ratio of redeemed transactions to the total transactions, since registration. |

| Total Points Redeemed | Total points that have been redeemed by the customer, since registration. |

| Loyalty Id | Unique identifier for the loyalty source table. |

| Last Updated By Till Id | Records the till id (point of sale) where the customer details were last updated. |

| Has Spike Bill | Records whether the customer has ever made a purchase that is 10 times greater than their average spending. It is mainly used for detecting fraud. |

| Max Zones With Billing On Same Day | Maximum number of zones where the customer made a transaction in a single day, since registration. |

| Cancelled Points | Cancelled points are the number of reverted points. That is, issued points that were reverted due to reasons like transaction return. |

| Max Bill Hour Count In Day | Maximum number of transactions made by the customer in an hour in a single day, since registration. |



# Dimensions

| Dimension Name | Description |

| --- | --- |

| Source | Source through which the customer got registered, such as in-store, app, WeChat, e-comm, Facebook, campaigns, etc. |

| Time | Time attributes. |

| Last Purchased Store | Identifier of the point-of-sale (till) where the customer made their most recent purchase. |

| Last Purchased Concept Store | Identifier of the concept store where the customer made their most recent purchase. |

| Conversion Date | Date when the customer is converted from a non-loyalty customer to a loyalty customer. |

| Last Txn Date | Records the date of the most recent transaction. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Store Hierarchy | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Conversion Time | Time when the customer is converted from a non-loyalty customer to a loyalty customer. |

| First Txn Date | Date when the customer did their first transaction or purchase. |

| First Redemption Date | Records the date of the first redemption of coupons. |

| Loyalty | Provides customer's loyalty status, which can be categorized as: loyalty, non-loyalty, or not registered. |

| Date | Date attributes. |

| Last Redemption Date | Records the date of the most recent redemption of coupons. |

| Lapsation Date | Lapsation date of the customer, calculated as the last bill date plus 90 days. |

| Preferred Order Channel | Stores the preferred channel through which the customer places orders, such as online, in-store, mobile app, etc. |

| First Purchased Till | The identifier of the store's till where the customer made their first transaction. |

| First Purchased Concept Store | Identifier of the concept store where the customer made their first transaction. |

| Dob | Denotes the customer's date of birth. |

| Wedding Date | Stores the customer's wedding date. |

| First Points Redemption Date | The date when the customer first redeemed loyalty points. |

| Last Points Redemption Date | The date of the most recent loyalty points redemption. |

| Repeat | Indicates if the customer has made repeat purchases or if it was their first transaction. |

| First Awarded Date | The date when the customer was first awarded loyalty points. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest time when the data is updated. |

| Joined Date | Records the loyalty registration date for the customer. |



[Source](/docs/dimension-tables#source-type)

[Time](/docs/dimension-tables#time)

[Last Purchased Store](/docs/dimension-tables#zone-till)

[Last Purchased Concept Store](/docs/dimension-tables#zone-till)

[Conversion Date](/docs/dimension-tables#date)

[Last Txn Date](/docs/dimension-tables#date)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Store Hierarchy](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Conversion Time](/docs/dimension-tables#time)

[First Txn Date](/docs/dimension-tables#date)

[First Redemption Date](/docs/dimension-tables#date)

[Loyalty](/docs/dimension-tables#loyalty-type)

[Date](/docs/dimension-tables#date)

[Last Redemption Date](/docs/dimension-tables#date)

[Lapsation Date](/docs/dimension-tables#date)

[Preferred Order Channel](/docs/dimension-tables#order-channel)

[First Purchased Till](/docs/dimension-tables#zone-till)

[First Purchased Concept Store](/docs/dimension-tables#zone-till)

[Dob](/docs/dimension-tables#date)

[Wedding Date](/docs/dimension-tables#date)

[First Points Redemption Date](/docs/dimension-tables#date)

[Last Points Redemption Date](/docs/dimension-tables#date)

[Repeat](/docs/dimension-tables#repeat-status)

[First Awarded Date](/docs/dimension-tables#date)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#time)

[Joined Date](/docs/dimension-tables#date)

Updated6 months ago