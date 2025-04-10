# Transactions Standard Export Template

The Transactions template is based on theBill Lineitemsfact.

This template lets you export transactions related details such as:

- Bill and line-item level transactions

- Member and non-member transactions

- Store level transactions

- Audience list (irrespective of selected date-range)

- Transaction level points

- Transactions of user segments

- Transaction level custom fields, and extended fields

- Line item level custom fields and extended fields

- User level extended fields

# Measures

| Measure | Description |

| --- | --- |

| Initial Bill Value | Represents the original bill amount before any discounts are applied. |

| Bill Number | A unique number for a transaction that is either auto-generated at the POS machine or provided manually. The uniqueness of the bill number depends on the configurations. |

| Visit Count | Total number of visits made by a customer. It is based on the number of transactions recorded for the customer. |

| Bill Amount | Net amount of the transaction made by the customer after discounts, taxes, etc. Represents the final amount the customer is required to pay. |

| Visit Day Count | nth visit of the customer, based on ranking by dates. Even if the customer visits multiple times on the same day, it counts as one day in the visit count. |

| Bill Discount | Total discount applied on the bill. |

| Redeemed Points | Number of points redeemed for a specific transaction. |

| Days Since Last Visit | The number of days since the customer's last transaction. |

| Tax Amount | Total tax levied at the bill level. |

| Central Gst | GST tax levied by the Central Government. |

| Integrated Gst | GST levied by the Central Government for inter-state trade. |

| State Gst | Taxes levied by the State Government on the bill. |

| Auto Update Time Bill | Date and time when the record in the bill table was last updated, in Unix timestamp format. |

| Auto Update Time Shipping | Date and time when the record in the shipping table was last updated, in Unix timestamp format. |

| Auto Update Time Combo Details | Date and time when the record in the combo_details table was last updated, in Unix timestamp format. |

| Auto Update Time Bill Extended Fields | Date and time when the record in the bill extended fields table was last updated, in Unix timestamp format. |

| Total Quantity | Total number of line items in the bill. |

| Reason | Captures the reason for the transaction. |

| Notes | Field for capturing important notes related to a line item, such as a custom description or specific details while recording line-item level data. |

| Converted Bill Id | The new bill id after conversion from non-loyal customer to loyal customer. |

| Allocated Points | Number of loyalty points allocated to a customer for a specific transaction, either at the bill, line item, or customer level. |

| Bill Id | A unique id generated for the bill internally by the system, helping differentiate one customer's bill from another. |

| Rate | Total cost of a line item, obtained by multiplying the item price by the quantity purchased. |

| Line Item Amount | Total amount for the line item after discounts and taxes. |

| Quantity | Number of units/line items bought. |

| Initial Line Item Value | The original value of a line item before discounts or taxes. |

| Item Code | Unique code assigned to a line item within the transaction. |

| Line Item Discount | Discount applied to the specific line item. |

| Parent Line Item Id | Identifier for the parent line item in combo or add-on transactions. |

| Additional Discount | Extra discount applied, such as for combo or bulk items, based on user input. |

| Total Unit Cost | Total price of the item, including taxes and other charges. |

| Auto Update Time Lineitem | Date and time when the line item table (e.g., product name, quantity, price) was last updated, in Unix timestamp format. |

| Auto Update Time Lineitem Extended Fields | Date and time when the line item extended fields table was last updated, in Unix timestamp format. |

| Lineitem Uuid | Universal Unique Identifier (UUID) for the line item. |

| Lineitem Serial Number | Unique serial number for the line item. |

| Lineitem Vat Tax Percentage | Percentage of VAT levied by the Central Government on the line item. |

| Lineitem Vat Amount | Amount of VAT levied by the Central Government on the line item. |

| Lineitem Service Tax Amount | Amount of service tax applicable to the line item. |

| Lineitem Service Tax Percentage | Percentage of service tax levied on the line item. |

| Lineitem Central Gst | GST levied by the Central Government on the line item. |

| Lineitem State Gst | State GST applicable to the line item. |

| Lineitem Integrated Gst | Integrated GST levied by the Central Government on the line item. |

| Lineitem Size | Size of the line item. |

| Description | Description of the line items. |

| Items In Product Set | Count of items within a product set. |

| Item Discount Description | Description of the reason for applying the discount to the item. |

| Item Points Discount | Discount applied to the line item using loyalty points. |

| Item Coupon Discount | Discount applied to the line item using coupons. |

| Item Unit Margin | Profit margin associated with the item. |

| Line Item Id | Unique id generated by the system for the specific line item. |



# Dimensions

| Dimension Name | Description |

| --- | --- |

| Membership | Specifies the membership type and Id of the customer who completed the transaction. |

| User | User details such as user id, source, slab name, external id, fraud status, mobile, email, etc. |

| User Segments | Segment details of the customers such as valued customer, lapsed customer. |

| User Attributes | User attributes such as total visits, recent view. |

| Time | Time attributes. |

| Store Hierarchy | Identifier assigned to the point-of-sale (POS) terminal within a store. |

| Concept Hierarchy | Identifier for the concept. |

| Ou Hierarchy | Identifier for the organization unit. |

| Line Item Outlier | Outlier status of the bill at the line item level. |

| Product | Product related attributes such as item code, category, item id, color, style, etc. |

| Product Attributes | Additional product attributes such as description, item sku and item Id. |

| Bill Outlier | Outlier status of the bill. |

| Date | Date attributes. |

| Repeat | Shows if the customer has made previous purchases or if it's their first transaction. |

| Loyalty | Indicates the loyalty type of the customer. Possible values are - loyalty, non loyalty, not registered (who have not provided their contact details). |

| Source | Indicates the source of the bill. Possible values are instore, e-comm, newsletter, campaigns, NCA, Wechat, Facebook, etc. |

| Line Item Type | Type of the line item; such as an add on item, combo item, combo parent, and split. |

| Parent Item | Product related attributes of the parent item, such as item code, category, item id, color, style, etc. |

| Order Channel | It indicates the specific channel through which the transaction was completed. They include - online, in-store, through a mobile app, etc. |

| Special Lineitem Type | Identifier for the special line item type. Possible values are - free item, and processing fee information. |

| Nps | Net Promoter Score (NPS) for the transaction, where NPS is a measure for customer satisfaction, ranging from 1 to 10. |

| Cashier Id | Identifier of the cashier who processed the transaction. |

| Lineitem Cashier Discount Reason | Identifier of the reason behind the discount applied to the lineitem. |

| Lineitem Cashier | Identifier of the cashier who processed the transaction. |

| Lineitem External Coupon Code | Coupon code id if any external coupon has been applied on the lineitems. |

| Lineitem Return Reason | Identifier of the reason for returning the lineitem. |

| Conversion Request Date | Date when the request was raised to convert a bill from non-loyalty customer to loyalty customer status. |

| Conversion Request Time | Time when the request was raised to convert a bill from non-loyalty customer to loyalty customer status. |

| Bill Conversion Date | Date of the bill conversion when the customer has been converted from non loyalty customer to loyalty customer. |

| Bill Conversion Time | Time of the bill conversion when the customer has been converted from non loyalty customer to loyalty customer. |

| Latest Updated Date | Latest date when the data is updated. |

| Latest Updated Time | Latest date when the data is updated. |

| Cashier Discount Reason | Identifier of the reason behind the discount applied to the bill. |

| Buyer Type | Identifier for the type of buyer. Possible values are retail, and wholesale. |

| Membership Card Present | Indicates whether a membership card is present for the customer or not. |

| Item Tax Code | Indicates a specific tax category. Includes GST at the central and state levels, interstate GST, and taxes levied to the total bill. |

| Item Promotion Code | Gives the line item promotion code information |

| Item Discount Type | Identifier of the type of discount given to the customer. |

| Cashier Name | Name of the cashier who processed the transaction. |

| Card Used | Identifier for the card used in the transaction. |



[Membership](/docs/dimension-tables#membership-type)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[User Attributes](/docs/dimension-tables#users-users)

[Time](/docs/dimension-tables#time)

[Store Hierarchy](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[Ou Hierarchy](/docs/dimension-tables#zone-till)

[Line Item Outlier](/docs/dimension-tables#outlier-status)

[Product](/docs/dimension-tables#item)

[Product Attributes](/docs/dimension-tables#item)

[Bill Outlier](/docs/dimension-tables#outlier-status)

[Date](/docs/dimension-tables#date)

[Repeat](/docs/dimension-tables#repeat-status)

[Loyalty](/docs/dimension-tables#loyalty-type)

[Source](/docs/dimension-tables#source-type)

[Line Item Type](/docs/dimension-tables#line-item-type)

[Parent Item](/docs/dimension-tables#item)

[Order Channel](/docs/dimension-tables#order-channel)

[Special Lineitem Type](/docs/dimension-tables#special-line-item-type)

[Nps](/docs/dimension-tables#nps-score)

[Cashier Id](/docs/dimension-tables#cashier)

[Lineitem Cashier Discount Reason](/docs/dimension-tables#reason-for-the-cashier-discount-line-item-cashier-discount-reason)

[Lineitem Cashier](/docs/dimension-tables#line-item-cashier-id)

[Lineitem External Coupon Code](/docs/dimension-tables#line-item-external-coupon-code)

[Lineitem Return Reason](/docs/dimension-tables#line-item-return-reason-id)

[Conversion Request Date](/docs/dimension-tables#date)

[Conversion Request Time](/docs/dimension-tables#time)

[Bill Conversion Date](/docs/dimension-tables#date)

[Bill Conversion Time](/docs/dimension-tables#time)

[Latest Updated Date](/docs/dimension-tables#date)

[Latest Updated Time](/docs/dimension-tables#date)

[Cashier Discount Reason](/docs/dimension-tables#reason-for-the-cashier-discount-line-item-cashier-discount-reason)

[Buyer Type](/docs/dimension-tables#buyer-type)

[Membership Card Present](/docs/dimension-tables#membership-card-present)

[Item Tax Code](/docs/dimension-tables#line-item-tax-code)

[Item Promotion Code](/docs/dimension-tables#line-item-promotion-code)

[Item Discount Type](/docs/dimension-tables#line-item-discount-type)

[Cashier Name](/docs/dimension-tables#cashier-name)

[Card Used](/docs/dimension-tables#card-used-card_used)

Updated6 months ago