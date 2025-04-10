# Bill Line Items Fact Table

The Bill Line Items fact table provides a granular level view of each transaction at the line item level. For instance, if a customer buys 5 items in a single transaction, the table would contain 5 rows corresponding to each line item. This table captures the information such as bill amount, discount, GST details, line item description, quantity, and price.

Databricks Table Name:bill_lineitems

> 📘NoteBill level details remain the same and are repeated across rows.

## 📘Note

Note

Bill level details remain the same and are repeated across rows.

Bill Line Items - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Bill Line Items Facts Table

| Column Name | Data Type | Description | Linked Table | Availability for Export inTransactionsTemplate |

| --- | --- | --- | --- | --- |

| allocated_points | double | Number of loyalty points allocated to a customer for a specific transaction. Can be on bill level, line item level or customer level. | _ | Yes; Measure Name: Allocated Points |

| additional_discount | double | Extra discount availed on a transaction, for example, discount on combo or bulk items. However, this is a extended field and takes the user input values. | - | Yes; Measure Name: Additional Discount |

| auto_update_time_bill | bigint | Date and time when the corresponding record in the bill table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Bill |

| auto_update_time_combo_details | bigint | Date and time when the corresponding record in the combo_details table available at the source was last updated. Combos typically refer to bundled offers or packages where multiple items are sold together at a discounted price. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Combo Details |

| auto_update_time_lineitem | bigint | Date and time when the line item table (e.g., product name, quantity, price) available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Lineitem |

| auto_update_time_shipping | bigint | Date and time when the corresponding record in the shipping table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Shipping |

| auto_update_time_bill _extended_fields | bigint | Date and time when the corresponding record in the bill extended fields table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Bill Extended Fields |

| auto_update_time_lineitem_extended_fields | bigint | Date and time when the line item extended fields table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Lineitem Extended Fields |

| bill_amount | double | Net amount of the transaction made by the customer. Refers to the total amount of the transaction after adjusting any discounts, taxes, etc. It represents the final amount that the customer is required to pay. | _ | Yes; Measure Name: Bill Amount |

| bill_discount | double | Total discount applied on the bill. Possible values are flat discount, percentage discount, etc. | _ | Yes; Measure Name: Bill Discount |

| bill_id | bigint | Unique identifier assigned to a bill internally by capillary system. It helps in differentiating one bill from the other. It is the primary key for the table. | _ | Yes; Measure Name: Bill Id |

| bill_number | string | Unique identifier for the transaction which is either auto-generated at the POS machine or provided manually. | _ | Yes; Measure Name: Bill Number |

| central_gst | double | GST tax levied by the Central Government. | _ | Yes; Measure Name: Central Gst |

| converted_bill_id | bigint | The new bill id after conversion from non-loyal customer to loyal customer. | _ | Yes; Measure Name: Converted Bill Id |

| days_since_last_visit | bigint | The number of days since the customer's last transaction. | _ | Yes; Measure Name: Days Since Last Visit |

| description | string | Description of the line items. | _ | Yes; Measure Name: Description |

| dim_bill_conversion_date_id | bigint | Date of the bill conversion when the customer has been converted from non loyalty customer to loyalty customer. | date | Yes; Dimension Name: Bill Conversion Date > Date |

| dim_bill_conversion_time_id | bigint | Time of the bill conversion when the customer has been converted from non loyalty customer to loyalty customer. | time | Yes; Dimension Name: Bill Conversion Time > Time Id |

| dim_bill_outlier_status_id | bigint | Captures whether a bill, identified by its bill_id, contains outlier items. Possible values are - failed, deleted, fraud, invalid, etc. | outlier_status | Yes; Dimension Name: Bill Outlier > Id |

| dim_buyer_type_id | bigint | Identifier for the type of buyer. Possible values are retail, and wholesale. | buyer_type | Yes; Dimension Name: Buyer Type > Id |

| dim_cashier_id | bigint | Identifier of the cashier who processed the transaction. | cashier | Yes; Dimension Name:  Cashier Id > Id |

| dim_cashier_name_id | bigint | Name of the cashier who made the bill in POS (point-of-sale) machine. | cashier_name | Yes; Dimension Name: Cashier Name > Id |

| dim_conversion_request_date_id | bigint | Date when the request was raised to convert a bill from non-loyalty customer to loyalty customer status. | date | Yes; Dimension Name: Conversion Request Date > Date |

| dim_conversion_request_time_id | bigint | Time when the request was raised to convert a bill from non-loyalty customer to loyalty customer status. | time | Yes; Dimension Name: Conversion Request Time > Time Id |

| dim_discount_reason_id | bigint | Identifier of the reason behind the discount applied to the bill. Possible values for discount are manager_discount, gift_card_discount, employee_discount, member_discount, incorrect_label, advertisement, wrong_display, bulk_customer, wrong_scan, customer, display, faulty, and damaged. | lineitem_cashier_discount_reasonLink | Yes; Dimension Name: Lineitem Cashier Discount Reason > Id |

| dim_event_date_id | bigint | Date when the transaction has occurred. | date | Yes; Dimension Name: Date > Date |

| dim_event_time_id | bigint | Timestamp of the transaction, capturing up to minutes (seconds are not captured). | time | Yes; Dimension Name: Time > Time Id |

| dim_event_user_id | bigint | Identifies the user associated with the event. It is an internally assigned value by Capillary for user identification. | users | Yes; Dimension Name: User > User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store. It distinguishes one checkout location from another within the same store. | zone_till | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_item_id | bigint | Unique identifier generated by the system for the item. | item | Yes; Dimension Name: Item Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. | date | Yes; Dimension Name: Latest Updated Date > Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/ row is changed in the source table. | time | Yes; Dimension Name: Latest Updated Time > Time Id |

| dim_line_item_outlier_status_id | bigint | Identifier of the outlier status of the bill at the line item level. Possible values are - failed, deleted, fraud, invalid, etc. | outlier_status | Yes; Dimension Name: Line Item Outlier > Id |

| dim_line_item_type_id | bigint | Identifier for the type of line item. Possible values are add on item, combo item, combo parent, and split. | line_item_type | Yes; Dimension Name: Line Item Type > Id |

| dim_lineitem_cashier_discount_reason_id | bigint | Identifier of the reason behind the discount applied to the lineitem. Possible values for discount are manager_discount, gift_card_discount, employee_discount, member_discount, incorrect_label, advertisement, wrong_display, bulk_customer, wrong_scan, customer, display, faulty, and damaged. | lineitem_cashier_discount_reasonLink | Yes; Dimension Name: Lineitem Cashier Discount Reason > Id |

| dim_lineitem_cashier_id | bigint | Identifier of the cashier who processed the transaction. | lineitem_cashier_id | Yes; Dimension Name: Lineitem Cashier > Id |

| dim_lineitem_discount_type_id | bigint | Identifier of the type of discount given to the customer. Possible values are flat discount, percentage discount, etc. | lineitem_discount_typeLink | Yes; Dimension Name: Item Discount Type > Id |

| dim_lineitem_external_coupon_code_id | bigint | Coupon code id if any external coupon has been applied on the lineitems. | lineitem_external_coupon_codeLink | Yes; Dimension Name: Lineitem External Coupon Code > Id |

| dim_lineitem_return_reason_id | bigint | Identifier of the reason for returning the lineitem. | lineitem_return_reason_idLink | Yes; Dimension Name: Lineitem Return Reason > Id |

| dim_loyalty_type_id | bigint | Identifier of the Loyalty type of the customer. Possible values are - loyalty/ non loyalty/ not registered (who have not provided their contact details). | loyalty_type | Yes; Dimension Name: Loyalty > Id |

| dim_membership_card_present_id | bigint | Indicates whether a membership card is present for the customer or not. | membership_card_presentLink | Yes; Dimension Name: Membership Card Present > Id |

| dim_nps_id | bigint | Net Promoter Score (NPS) for the transaction, where NPS is a measure for customer satisfaction, ranging from 1 to 10. | nps_score | Yes; Dimension Name: Nps > Id |

| dim_order_channel_id | bigint | Identifier for the order channel associated with a transaction. It indicates the specific channel through which the transaction was completed. Possible values are online, in-store, through a mobile app, etc. | order_channel | Yes; Dimension Name: Order Channel > Id |

| dim_parent_item_id | bigint | Identifier of the parent item (for transactions with combo, split or add-on items). | line_item_type | Yes; Dimension Name: Parent Item > Item Id |

| dim_promotion_code_id | bigint | Gives the line item promotion code information. | lineitem_promotion_codeLink | Yes; Dimension Name: Item Promotion Code > Id |

| dim_repeat_status_id | bigint | Shows if the customer has made previous purchases or if it's their first transaction. | repeat_status | Yes; Dimension Name: Repeat Status |

| dim_source_type_id | bigint | Identifier for the source of the bill. Possible values are instore, e-comm, newsletter, campaigns, NCA, Wechat, Facebook, etc. | source_type | Yes; Dimension Name: Source Type > Id |

| dim_special_lineitem_type_id | bigint | Identifier for the line item type. Possible values are - a free item, and processing fee information. | special_lineitem_type | Yes; Dimension Name: Special Lineitem Type > Id |

| dim_tax_code_id | bigint | Unique identifier or code assigned to a specific tax category. They include GST at the central and state levels, interstate GST, and taxes levied to the total bill. | lineitem_tax_code | Yes; Dimension Name: Item Tax Code > Id |

| dim_card_used_id | bigint | Unique identifier for the card used in the transaction. | card_used | Yes; Dimension Name: Card used > Id |

| initial_bill_value | double | Represents the original bill amount before any discounts or taxes are applied. | _ | Yes; Measure Name: Initial Bill Value |

| initial_line_item_value | double | Indicates the original value of a line item within the transaction before any discounts or taxes are applied. | _ | Yes; Measure Name: Initial Line Item Value |

| integrated_gst | double | GST levied by the Central Government for inter-state trade. | _ | Yes; Measure Name: Integrated Gst |

| item_code | string | Unique code assigned to a line item within the transaction. | _ | Yes; Measure Name: Item Code |

| item_coupon_discount | double | Represents any discount applied to the line item using coupons. | _ | Yes; Measure Name: Item Coupon Discount |

| item_discount_description | string | Provides a description of why the discount has been applied to the item. | _ | Yes; Measure Name: Item Discount Description |

| item_point_discount | double | Denotes any discount applied to the line item using loyalty points. | _ | Yes; Measure Name: Item Points discount |

| item_unit_margin | double | Indicates the profit margin associated with the item. | _ | Yes; Measure Name: Item Unit Margin |

| items_in_product_set | integer | Provides the count of the item within a product set. | _ | Yes; Measure Name: Items In Product Set |

| line_item_amount | double | Represents the total amount for the line item after discounts and taxes have been applied. | _ | Yes; Measure Name: Line Item Amount |

| line_item_discount | double | Denotes the discount given for the particular line item. | _ | Yes; Measure Name: Line Item Discount |

| line_item_id | bigint | Unique identifier generated by the system for the line item.  It is the primary key of this table. | _ | Yes; Measure Name: Line Item Id |

| lineitem_central_gst | double | GST levied by the Central Government on the line item. | _ | Yes; Measure Name: Lineitem Central Gst |

| lineitem_integrated_gst | double | Integrated GST levied by the Central Government on the line item. | _ | Yes; Measure Name: Lineitem Integrated Gst |

| lineitem_serial_number | string | Unique serial number of the line-item. | _ | Yes; Measure Name: Lineitem Serial Number |

| lineitem_service_tax_amount | double | Represents the amount of service tax applicable to the line item. | _ | Yes; Measure Name: Lineitem Service Tax Amount |

| lineitem_service_tax_percentage | double | Denotes the percentage of service tax levied to the line item. | _ | Yes; Measure Name: Lineitem Service Tax Percentage |

| lineitem_size | string | Indicates the size of the line item. | _ | Yes; Measure Name: Lineitem Size |

| lineitem_state_gst | double | State GST applicable to the line item. | _ | Yes; Measure Name: Lineitem State Gst |

| lineitem_uuid | string | Contains a universally unique identifier (UUID) assigned to the line item. | _ | Yes; Measure Name: Lineitem Uuid |

| lineitem_vat_amount | double | Amount of VAT levied by the Central Government on the line item. | _ | Yes; Measure Name: Lineitem Vat Amount |

| lineitem_vat_tax_percentage | double | Percentage of VAT levied by the Central Government on the line item. | _ | Yes; Measure Name: Lineitem Vat Tax Percentage |

| notes | string | Additional information added while creating the line item. | _ | Yes; Measure Name: Notes |

| parent_line_item_id | bigint | Identifier of the parent line item (for transactions with combo or add-on items). | _ | Yes; Measure Name: Parent Line Item Id |

| quantity | double | Number of units/ lineitems bought. | _ | Yes; Measure Name: Quantity |

| rate | double | Total cost of a line item, obtained by multiplying the item price by the quantity purchased. | _ | Yes; Measure Name: Rate |

| reason | string | Captures the reason for the transaction. | _ | Yes; Measure Name: Reason |

| redeemed_points | double | Points redeemed on the bill level. | _ | Yes; Measure Name: Redeemed Points |

| state_gst | double | Taxes levied by the State Government on the bill. | _ | Yes; Measure Name: Lineitem State Gst |

| tax_amount | double | Total amount of tax levied on the bill. | _ | Yes; Measure Name: Tax Amount |

| total_quantity | integer | Total number of line items in the bill. | _ | Yes; Measure Name: Total Quantity |

| total_unit_cost | double | Total price of the item including tax and other charges | _ | Yes; Measure Name: Total Unit Cost |

| visit_count | bigint | Total number of visits made by a customer. It is based on the number of transactions recorded for the customer. | _ | Yes; Measure Name: Visit Count |

| visit_day_count | bigint | Total number of visits made by a customer based on dates. Even if the customer visits multiple times on a particular day, it will only count as one day in the visit count. | _ | Yes; Measure Name: Visit Day Count |

| year | integer | Year when the transaction was done. | _ | Yes; Dimension Name: Year |

| dim_membership_id | bigint | Membership type of the customer who completed the transaction. Possible values are - member/ not interested/ loyalty-not-interested. It is the primary key of the Bill_Lineitems facts table. | _ | Yes; Dimension Name: Membership > Id |



[Transactions](/docs/transactions-standard-export-template)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[outlier_status](/docs/dimension-tables#outlier-status)

[buyer_type](/docs/dimension-tables#buyer-type)

[cashier](/docs/dimension-tables#cashier)

[cashier_name](/docs/dimension-tables#cashier-name)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[Link](/docs/dimension-tables#reason-for-the-cashier-discount-line-item-cashier-discount-reason)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_till](/docs/dimension-tables#zone-till)

[item](/docs/dimension-tables#item)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[outlier_status](/docs/dimension-tables#outlier-status)

[line_item_type](/docs/dimension-tables#line-item-type)

[Link](/docs/dimension-tables#reason-for-the-cashier-discount-line-item-cashier-discount-reason)

[lineitem_cashier_id](/docs/dimension-tables#line-item-cashier-id)

[Link](/docs/dimension-tables#line-item-discount-type)

[Link](/docs/dimension-tables#line-item-external-coupon-code)

[Link](/docs/dimension-tables#line-item-return-reason-id)

[loyalty_type](/docs/dimension-tables#loyalty-type)

[Link](/docs/dimension-tables#membership-card-present)

[nps_score](/docs/dimension-tables#nps-score)

[order_channel](/docs/dimension-tables#order-channel)

[line_item_type](/docs/dimension-tables#line-item-type)

[Link](/docs/dimension-tables#line-item-promotion-code)

[repeat_status](/docs/dimension-tables#repeat-status)

[source_type](/docs/dimension-tables#source-type)

[special_lineitem_type](/docs/dimension-tables#special-line-item-type)

[lineitem_tax_code](/docs/dimension-tables#line-item-tax-code)

[card_used](/docs/dimension-tables#card-used-card_used)

Updated6 months ago