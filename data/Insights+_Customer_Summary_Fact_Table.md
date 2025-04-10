# Customer Summary Fact Table

Also known as members fact. This table summarizes all the data pertaining to the customer, such as their registration date, points information, total transaction amount, number of transactions made, their date of birth, and wedding date.

Databricks Table Name:customer_summary

Customer Summary (members) - Entity Relationship Diagram ERD

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Customer summary facts table(members)

| Column Name | Column Type | Description | Linked Table | Availability for Export in theMember FactTemplate |

| --- | --- | --- | --- | --- |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date | Yes; Dimension Name: Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time | Yes; Dimension Name: Date |

| dim_event_date_id | bigint | Date when the customer was registered. | date | Yes; Dimension Name: Date |

| dim_event_time_id | bigint | Time when the customer was registered (up to minutes). | time | Yes; Dimension Name: Time |

| dim_event_user_id | bigint | Unique identifier for the customer_summary table, set internally by Capillary. It is the primary key of this facts table. | users | Yes; Dimension Name: User Id |

| dim_joined_date_id | bigint | Records the loyalty registration date for the customer. | date | Yes; Dimension Name: Joined Date |

| auto_update_time_cps | bigint | Date and time when the corresponding record in the customer_point_summary table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Cps |

| dim_conversion_date_id | bigint | Date when the customer is converted from a non loyalty customer to a loyalty customer. | date | Yes; Dimension Name: Conversion Date |

| auto_update_time_extnd | bigint | Date and time when the corresponding record in the extended field table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Extnd |

| auto_update_time_loyalty | bigint | Date and time when the corresponding record in the loyalty table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Loyalty |

| average_spent_per_sku | double | Average amount spent by the customer on each product type (per SKU). Stock Keeping Unit (SKU) is a unique identifier assigned to each distinct product or item in inventory. | _ | Yes; Measure Name: Average Spent Per Sku |

| average_spent_per_visit | double | Average amount of money a customer spends during each visit they make to the store (total amount spent divided by number of visits). | _ | Yes; Measure Name: Average Spent Per Visit |

| cancelled_points | double | Cancelled points are the number of reverted points. That is, issued points that were reverted due to reasons like transaction return. | _ | Yes; Measure Name: Cancelled Points |

| year | integer | Year in which the customer was registered. | _ | Yes; Dimension Name: Year |

| dim_conversion_time_id | bigint | Time when the customer is converted from a non loyalty customer to a loyalty customer. | time | Yes; Dimension Name: Conversion Time |

| dim_dob_id | bigint | Denotes date of birth of the customer. | date | Yes; Dimension Name: DOB |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_till | Yes; Dimension Name: Store Hierarchy |

| dim_first_awarded_date_id | bigint | Date when a point was awarded to the customer for the first time. | date | Yes; Dimension Name: First Awarded Date |

| dim_first_bill_date_id | bigint | Date when the customer did his first transaction or purchase. | date | Yes; Dimension Name: First Txn Date |

| dim_first_points_redemption_date_id | bigint | Date when the customer redeemed his points for the first time. | date | Yes; Dimension Name: First Points Redemption Date |

| dim_first_purchased_till_id | bigint | Till Id of the store where the customer did his first transaction. | zone_till | Yes; Dimension Name: First Purchased Till |

| dim_first_redeemption_date_id | bigint | Records the date of the first redemption of coupons. | date | Yes; Dimension Name: First Redemption Date |

| dim_lapsation_date_id | bigint | Lapsation date of customers, calculated as last bill date plus 90 days. | date | Yes; Dimension Name: Lapsation Date |

| dim_last_bill_date_id | bigint | Records the date of the most recent transaction. | date | Yes; Dimension Name: Last Txn Date |

| dim_last_points_redemption_date_id | bigint | Records the date of the most recent redemption of loyalty points. | date | Yes; Dimension Name: Last Points Redemption Date |

| dim_last_purchased_till_id | bigint | Identifier of the point-of-sale (till) where the customer made their most recent purchase. | zone_till | Yes; Dimension Name: Last Purchased Store |

| dim_last_redeemption_date_id | bigint | Records the date of the most recent redemption of coupons. | date | Yes; Dimension Name: Last Redemption Date |

| dim_loyalty_type_id | bigint | Customer's loyalty status, which can be categorized as: loyalty, non-loyalty, or not registered. | loyalty_type | Yes; Dimension Name: Loyalty Type |

| dim_points_redemption_status_id | bigint | Records the status of points redemption. Possible values are - Issued, and Redeemed. | _ | Yes; Dimension Name: Points Redemption Status |

| dim_preferred_order_channel_id | bigint | Stores the preferred channel through which the customer places orders. Possible values are online, in-store, through a mobile app, etc. | order_channel | Yes; Dimension Name: Preferred Order Channel |

| dim_preferred_store_id | string | Preferred store where the customer performs most of the transactions. | zone_till | Yes; Dimension Name: Preferred Store |

| dim_repeat_status_id | bigint | Shows if the customer has made previous purchases or if it's their first transaction. | repeat_status | Yes; Dimension Name: Repeat Status |

| dim_source_type_id | bigint | Source through which the customer got registered. Possible values are in-store, app, WeChat, e-comm, Facebook, campaigns, etc. | source_type | Yes; Dimension Name: Source Type |

| dim_voucher_redemption_status_id | bigint | Indicates the status of voucher redemption for a customer. | _ | Yes; Dimension Name: Voucher Redemption Status |

| dim_wedding_date_id | bigint | Stores the customer's wedding date. | date | Yes; Dimension Name: Wedding Date |

| expired_points | double | Total points that have expired for the customer since registration. | _ | Yes; Measure Name: Expired Points |

| first_visit_basket_size | double | Number of items purchased during the customer's first transaction. | _ | Yes; Measure Name: First Visit Basket Size |

| first_visit_bill_amount | double | Total amount spent by the customer during their first transaction. | _ | Yes; Measure Name: First Visit Bill Amount |

| has_spike_bill | integer | Records whether the customer has ever made a purchase that is 10 times greater than their average spending. It is mainly used for detecting fraud. | _ | Yes; Measure Name: Has Spike Bill |

| last_updated_by_till_id | bigint | Records the till id (point of sale) where the customer details were last updated. | _ | Yes; Measure Name: Last Updated By Till Id |

| last_visit_bill_amount | double | Total amount spent by the customer during their most recent transaction. | _ | Yes; Measure Name: Last Visit Bill Amount |

| latency | double | Average number of days between two successive visits made by the customer. | _ | Yes; Measure Name: Latency |

| line_item_count | bigint | Total number of items purchased by the customer, since registration. | _ | Yes; Measure Name: Line Item Count |

| loyalty_id | bigint | Unique identifier for the loyalty source table. | _ | Yes; Measure Name: Loyalty Id |

| loyalty_points | double | Total number of points that the customer can redeem as of today. | _ | Yes; Measure Name: Loyalty Points |

| max_bill_amount | double | Highest amount spent by the customer in a single transaction, since registration. | _ | Yes; Measure Name: Max Bill Amount |

| max_bill_count_in_day | bigint | Maximum number of transactions made by the customer in a single day, since registration. | _ | Yes; Measure Name: Max Bill Count In Day |

| max_bill_count_in_week | bigint | Maximum number of transactions made by the customer in a week, since registration. | _ | Yes; Measure Name: Max Bill Count In Week |

| max_bill_hour_count_in_day | double | Maximum number of transactions made by the customer in an hour in a single day, since registration. | _ | Yes; Measure Name: Max Bill Hour Count In Day |

| max_zones_with_billing_on_same_day | bigint | Maximum number of zones where the customer made a transaction in a single day, since registration. | _ | Yes; Measure Name: Max Zones With Billing On Same Day |

| number_of_visit_days | bigint | Total number of different days on which the customer has visited the store, since registration. | _ | Yes; Measure Name: Number Of Visit Days |

| number_of_visits | bigint | Total number of transactions made by the customer since registration. | _ | Yes; Measure Name: Number Of Visits |

| points_awarded_days | bigint | Total number of days on which the customer received points, since registration. | _ | Yes; Measure Name: Points awarded days |

| redeemed_points | double | Total points redeemed by the customer since registration. | _ | Yes; Measure Name: Redeemed Points |

| redeemed_rate | double | Ratio of redeemed transactions to the total transactions, since registration. | _ | Yes; Measure Name: Redeemed Rate |

| redeemed_visit_days | bigint | Total number of days on which the customer redeemed points during visits, since registration. | _ | Yes; Measure Name: Redeemed Visit Days |

| redeemed_visits | bigint | Total number of visits during which the customer redeemed points, since registration. | _ | Yes; Measure Name: Redeemed Visits |

| redeemed_voucher_count | bigint | Total number of vouchers redeemed by the customer, since registration. | _ | Yes; Measure Name: Redeemed Voucher Count |

| redemption_latency | double | Average number of days between two successive point redemptions by the customer. | _ | Yes; Measure Name: Redemption Latency |

| returned_bill_amount | double | The total amount corresponding to the items returned by the customer, since registration. | _ | Yes; Measure Name: Returned Bill Amount |

| returned_bill_count | bigint | Total number of bills for which the items have been returned by the customer, since registration. | _ | Yes; Measure Name: Returned Bill Count |

| sku_purchased | bigint | Total number of different product types (SKUs) purchased by the customer, since registration. Stock Keeping Unit (SKU) is a unique identifier assigned to each distinct product or item in inventory. | _ | Yes; Measure Name: Sku Purchased |

| skus_returned | bigint | Total number of different product types (SKUs) returned by the customer, since registration. | _ | Yes; Measure Name: Skus Returned |

| total_bill_amount | double | Total amount spent by the customer across all the bills, since registration. | _ | Yes; Measure Name: Total Bill Amount |

| total_bill_count | bigint | Total number of transactions made by the customer since registration. | _ | Yes; Measure Name: Total Bill Count |

| total_line_item_amount | double | Total amount spent on all line items purchased by the customer across all the bills, since registration. | _ | Yes; Measure Name: Total Line Item Amount |

| total_points_redeemed | double | Total points that have been redeemed by the customer, since registration. | _ | Yes; Measure Name: Total Points Redeemed |

| total_returned_line_item_amount | double | Total amount refunded for all individual line items returned by the customer, since registration. | _ | Yes; Measure Name: Total Returned Line Item Amount |

| lifetime_points | double | Total points accumulated by the customer since registration. | _ | Yes; Measure Name: Lifetime Points |

| lifetime_purchased | double | Total amount spent by the customer since registration. | _ | Yes; Measure Name: Lifetime Purchased |



[Member Fact](/docs/members-standard-export-template)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[zone_till](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[loyalty_type](/docs/dimension-tables#loyalty-type)

[order_channel](/docs/dimension-tables#order-channel)

[zone_till](/docs/dimension-tables#zone-till)

[repeat_status](/docs/dimension-tables#repeat-status)

[source_type](/docs/dimension-tables#source-type)

[date](/docs/dimension-tables#date)

Updated7 months ago