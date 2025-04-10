# Add Transactionpost

## Add Transaction

Lets you add transactions of loyalty, non-loyalty, or not-interested customers. You can add batch transactions by passing each transaction details in a separate transaction attribute.

#### Rate Limit

| Region | Default Limit (RPM) |

| --- | --- |

| Asia-2 (Singapore) | 1500 |

| Asia-1 (N. Virginia) | 1500 |

| EMEA (Ireland) | 700 |



Currently, there is no validation that bill amount should match with sum of line items as the data is accepted as it is from POS or integration

Following are the key functionalities of the transaction/add API.

- Registers customers automatically when a new identifier is passed with the transaction details.

- If any identifier matches with another accounts, customer accounts will be merged if the config mentioned below is not enabled.

- If CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.

- Also, this config overrides CONF_PRIMARY_IDENTIFIER_STRICT_CHECK.

- Updates customer details if a registered identifier is passed with different customer details (other than customer identifiers).

- Supports transactions with Product Variant and Product Bundle details.

- Adds product variant to the database when a new variant product is passed with an existing base product.

- Adds base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant.

- For Multi Loyalty Programs, points can be grouped by their respective program IDs and correctly reflected in the side effects section of the response. To enable this, raise a JIRA ticket with the Sustenance team to activate the configurationCONF_ENABLE_GROUP_POINTS_BY_PROGRAMfor your org.

`CONF_ENABLE_GROUP_POINTS_BY_PROGRAM`

### Request Body Parameters

| Parameters | Type | Description |

| --- | --- | --- |

| bill_client_id | string | Unique id of the bill as per the client (org) end. |

| type | Enum | Type of transaction.regularfor loyalty transaction,not_interestedfor non-loyalty or not-interested transactions. |

| number | string | Unique transaction number. The uniqueness depends on the configurationCONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYSset inInTouch Settings > System & Deployment > InTouch POS Configuration > Billing.Note: The maximum length for a bill number is 50 characters. |

| amount | double | Net transaction amount of the original bill. Represents the final amount after discounts are applied.  For line items: amount = value - discount. For transactions: amount = gross_amount - total_discount |

| discount | double | Discount availed for the transaction or line item (discount amount). |

| currency_code | string | ISO currency code of the transaction. For example,INRfor Indian Rupee,SGDfor Singapore Dollar,EURfor Euro,IQDfor Iraqi Dinar. |

| notes | string | Additional information about the transaction. |

| qty | int | Quantity of the current line-item. This gets rounded off to the nearest digit. For example, the quantity “0.003" can get rounded off to 0. It is recommended to use V2 API to avoid the rounding off quantity. |

| rate | float | Price of each line-item. |

| value | double | Represents the pre-discount total for a single line item. alculated as: value = rate × quantity. Example: If a line item has a rate of $10 and quantity of 2, value would be $20. |

| billing_time | date-time | Date and time of the transaction. By default, the current system date and time will be considered. |

| gross_amount | double | Represents the total transaction amount before any discounts are applied.  It's the sum of all line items' values before discounts.Used in calculations involving the total transaction value. |

| outlier_status | Enum | Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level. Values:INTERNAL,NORMAL,INVALID,OUTLIER,FAILED,DELETED,RETRO,FRAUD,TEST,OTHER. |

| source | Enum | Source from which the transaction is made.Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| not_interested_reason | string | Reason why the customer is not interested to register. Applicable only for not-interested transactions. |

| pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]. ` |

| couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, [727298, 237856]. |

| referral_code | string | Referral code for a new customer (if applicable) to register in the org’s loyalty program. You can also have transaction level referral code. |

| customer | obj | Pass customer information. Applicable for non-loyalty and not-interested transactions. |

| mobile/email/external_id/card_number | string | Pass any of the registered identifiers of the customer. Required for regular transactions. |

| extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details inline_itemobject. |

| payment_details | obj | Payment details for the transaction. |

| attributes | obj | Attributes of the current line-item in name and value pairs. |

| mode | string | Mode of payment. This has to be the mode configured for your org. |

| value | float | Amount paid through the current mode. |

| custom_fields | obj | Transaction level custom field details. Pass line-item level custom field details inline_itemobject. |

| line_items | obj | Details of transaction line-items. |

| serial | long | Serial number of the current line-item. |

| transaction_number | string | Transaction line-item number. |

| description | string | Description of the line-item. |

| item_code | string | Unique line-item code. |

| variant | string | Variant code of the item. Applicable for variant product. |

| addon_items | obj | Details of add_on items. For example, pizza with extra cheese, and personalized toppings. |

| combo_items | obj | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps. |

| split_items | obj | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges. |

| item_code | string | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01_addon. |

| quantity | double | Quantity of the current add-on, split, or combo item. |

| associate_details | obj | Details of store associate or cashier who did the transaction. |

| code | string | Unique code of the store associate. |

| name | string | Name of the store associate. |



`regular`

`not_interested`

`CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS`

`INR`

`SGD`

`EUR`

`IQD`

`INTERNAL`

`NORMAL`

`INVALID`

`OUTLIER`

`FAILED`

`DELETED`

`RETRO`

`FRAUD`

`TEST`

`OTHER`

`INSTORE`

`WECHAT`

`MARTJACK`

`WEB_ENGAGE`

`ECOMMERCE`

`JD`

`TAOBAO`

`TMALL`

`FACEBOOK`

`WEBSITE`

`OTHERS`

`line_item`

`line_item`

## Return Transaction

Lets you submit a return transaction of any transaction type.

The following are different return types supported for a transaction.

```
Full Return: To return an entire transaction and exchange with different items
Line-item Return: To return line-item(s) of a transaction and exchange with other items
Mixed Return: To exchange one or more line items of a transaction (line-items)
Amount Return: To return the entire transaction amount
```

```
Full Return: To return an entire transaction and exchange with different items
Line-item Return: To return line-item(s) of a transaction and exchange with other items
Mixed Return: To exchange one or more line items of a transaction (line-items)
Amount Return: To return the entire transaction amount
```

> 📘For return transactions, it is required to pass return item’s purchased transaction number and purchasetime.Purchase time: The date and time of the actual transaction _ Billing time: The date and time of the return transaction

## 📘

For return transactions, it is required to pass return item’s purchased transaction number and purchasetime.Purchase time: The date and time of the actual transaction _ Billing time: The date and time of the return transaction

Before using this API, you need to know the configurations set of the Return Transactions page of InTouchSettings>Systems & Deployment>InTouch POS Configuration.

### Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| type* | enum | Type of transaction.RETURNfor loyalty transaction return,NOT_INTERESTED_RETURNfor not-interested return,MIXEDfor exchange (involves both return and purchase).You will also need to passtypeforMIXEDtransaction both at bill level (MIXED) and line-item level (regularfor new transaction item andreturnfor return item). |

| return_type | enum | Type of return. Value:AMOUNTto return transaction or line-items for money,LINE_ITEMto return one or more line-items of the transaction,FULLto return complete transaction. |

| number* | string | Actual transaction number of the return bill. |

| parent_bill_number | string | Return transaction number. |

| billing_time* | date-time | Date and time of the return transaction inYYYY-MM-DD HH:MM:SSformat. |

| purchase_time* | date | Actual transaction date of the returning bill inYYYY-MM-DDformat. |

| notes | string | Additional information about the transaction. |

| amount* | double | Sum of regular line items of the current transaction after discount. |

| qty* | int | Quantity of the current line-item. |

| rate | float | Price of each line-item. |

| value | float | Gross transaction amount (transaction amount excluding discount). |

| amount* | double | Net return transaction amount. |

| source | enum | Source from which the transaction is made. Values:INSTORE( for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration), ECOMMERCE("ECOMMERCE"),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| customer | obj | Customer details associated to the transaction. Not applicable for not-interested transactions. |

| mobile/email/external_id | string | Pass any of the registered identifiers of the customer. Required for regular transaction returns. |

| firstname | string | First name of the customer. |

| lastname | string | Last name of the customer. |

| extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details inline_itemobject. |

| custom_fields | obj | Transaction level custom field details. Pass line-item level custom field details inline_itemobject. |

| line_items | obj | Details of transaction line-items. |

| serial | long | Serial number of the line-item. |

| description | string | Description of the line-item. |

| item_code | string | Unique line-item code. |

| variant | string | Variant code of the item. Applicable for variant product. |

| addon_items | obj | Details of add-on items. For example, pizza with extra cheese, and personalized toppings. |

| combo_items | obj | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps. |

| split_items | obj | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges. |

| item_code | string | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01_addon. |

| quantity | double | Quantity of the current add-on, split, or combo item. |

| associate_details | obj | Details of store associate or cashier who did the transaction. |

| code | string | Unique code of the store associate. |

| name | string | Name of the store associate. |



`RETURN`

`NOT_INTERESTED_RETURN`

`MIXED`

`type`

`MIXED`

`regular`

`return`

`AMOUNT`

`LINE_ITEM`

`FULL`

`YYYY-MM-DD HH:MM:SS`

`YYYY-MM-DD`

`INSTORE`

`WECHAT`

`MARTJACK`

`WEB_ENGAGE`

`JD`

`TAOBAO`

`TMALL`

`FACEBOOK`

`WEBSITE`

`OTHERS`

`line_item`

`line_item`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| id | long | Unique transaction ID generated internally. |

| customer | obj | Details of the customer associated to the transaction. Not applicable forNOT_INTERESTEDtransactions. |

| lifetime_points | int | Total loyalty points earned by the customer to date. |

| lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org. |

| loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer. |

| type | enum | Type of transaction. Value:regularfor loyalty transaction,not_interestedfor non-loyalty or not-interested transactions. |

| source | enum | Source from which the transaction is made. Values:INSTORE( for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration), ECOMMERCE (ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| current_slab | string | Current loyalty tier of the customer. |

| tier_expiry_date | date-time | Expiry date of the current tier inYYYY-MM-DD HH:MM:SSformat. |

| points_summaries | obj | Shows the details of the loyalty points. |

| programId | long | Unique ID of the loyalty program associated to the points summary. |

| redeemed | int | In total points earned from the program, the total number of points that are redeemed. |

| expired | int | In total points earned from the program, the total number of points that are expired. |

| returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns. |

| adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited. |

| cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program. |

| currentSlab | string | Current tier of the customer in the loyalty program. |

| nextSlab | string | Next loyalty tier of the customer. |

| nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on. |

| nextSlabDescription | string | Description of the next tier as saved in the loyalty program. |

| slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on. |

| slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer inYYYY-MM-DD HH:MM:SS. |

| registered_on | date-time | Date on which the customer is enrolled in the org's loyalty. |

| updated_on | date-time | Recent date on which the customer details are updated. |

| type | enum | Loyalty type of the customer.LOYALTYif the customer is enrolled in the org's loyalty program,NON_LOYALTYif customer has not enrolled in the loyalty program but registered mobile number or email id with the org. |

| custom_fields | obj | Transaction or line-item level custom field details - field name (name) and field value (value). |

| extended_fields | obj | Transaction or line-item level extended field details - extended field name (name) and extended field value (value). |



`NOT_INTERESTED`

`regular`

`not_interested`

`INSTORE`

`WECHAT`

`MARTJACK`

`WEB_ENGAGE`

`JD`

`TAOBAO`

`TMALL`

`FACEBOOK`

`WEBSITE`

`OTHERS`

`YYYY-MM-DD HH:MM:SS`

`YYYY-MM-DD HH:MM:SS`

`LOYALTY`

`NON_LOYALTY`

`name`

`value`

`name`

`value`

`Try It!`