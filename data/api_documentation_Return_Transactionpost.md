# Return Transactionpost

The following are different return types supported for a transaction.

1. Full Return: To return an entire transaction and exchange with different items

2. Line-item Return: To return line-item(s) of a transaction and exchange with other items

3. Mixed Return: To exchange one or more line items of a transaction (line-items)

4. Amount Return: To return the entire transaction amount

> 📘For return transactions, it is required to pass return item’s purchased transaction number and purchase_ time . Purchase time: The date and time of the actual transaction * Billing time: The date and time of the return transaction

## 📘For return transactions, it is required to pass return item’s purchased transaction number and purchase_ time . Purchase time: The date and time of the actual transaction * Billing time: The date and time of the return transaction

For return transactions, it is required to pass return item’s purchased transaction number and purchase_ time . Purchase time: The date and time of the actual transaction * Billing time: The date and time of the return transaction

Before using this API, you need to know the configurations set of the Return Transactions page of InTouchSettings>Systems & Deployment>InTouch POS Configuration.

# Request URL

https://{host}/v1.1/transaction/add?format={xml/json}

```
https://{host}/v1.1/transaction/add?format={xml/json}
```

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| type* | enum | Type of transaction. RETURN for loyalty transaction return, NOT_INTERESTED_RETURN for not-interested return, MIXED for exchange (involves both return and purchase). You will also need to pass type for MIXED transaction both at bill level (MIXED) and line-item level (regular for new transaction item and return for return item). |

| return_type | enum | Type of return. Value: AMOUNT to return transaction or line-items for money, LINE_ITEM to return one or more line-items of the transaction, FULL to return complete transaction. |

| number* | string | Sale transaction number of the return bill. |

| id | long | Transaction ID of the transaction that needs to be returned.Identifies the specific transaction to be returned when identical bill numbers exist across different transactions.This is applicable when the CONF_LOYALTY_BILL_NUMBER_UNIQUE_ONLY_STORE configuration is enabled, and the same bill number is used for transactions at different stores.Example:Store A: Customer transaction with bill number B1Store B: Different transaction also with bill number B1In this scenario, you can include the transaction ID in the return transaction payload to:- Distinguish between transactions with identical bill numbers- Prevent failures in return transactions due to duplicate bill numbers |

| parent_bill_number | string | Return transaction number. |

| billing_time* | date-time | Date and time of the return transaction in YYYY-MM-DD HH:MM:SS format. |

| purchase_time* | date | Actual transaction date of the returning bill in YYYY-MM-DD format. |

| notes | string | Additional information about the transaction. |

| amount* | double | Sum of regular line items of the current transaction after discount. |

| qty* | int | Quantity of the current line-item. |

| rate | float | Price of each line-item. |

| value | float | Gross transaction amount (transaction amount excluding discount). |

| amount* | double | Net return transaction amount. |

| source | enum | Source from which the transaction is made. Values: INSTORE( for InStore), WECHAT (WeChat), MARTJACK(AnywhereCommerce), WEB_ENGAGE (Web-engage integration), ECOMMERCE(“ECOMMERCE”), JD (JD), TAOBAO (Taobao), TMALL (TMall), FACEBOOK (Facebook), WEBSITE (other website), OTHERS (any other source). |

| customer | obj | Customer details associated to the transaction. Not applicable for not-interested transactions. |

| mobile/email/external_id | string | Pass any of the registered identifiers of the customer. Required for regular transaction returns. |

| firstname | string | First name of the customer. |

| lastname | string | Last name of the customer. |

| extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in line_item object. |

| custom_fields | obj | Transaction level custom field details. Pass line-item level custom field details in line_item object. |

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



> 📘Parameters marked with * are mandatory.

## 📘Parameters marked with * are mandatory.

Parameters marked with * are mandatory.

# Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| id | long | Unique transaction ID generated internally for return. |

| customer | obj | Details of the customer associated to the transaction. Not applicable for NOT_INTERESTED transactions. |

| lifetime_points | int | Total loyalty points earned by the customer to date. |

| lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org. |

| loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer. |

| type | enum | Type of transaction. Value: return for loyalty transaction, not_interested_return for non-loyalty or not-interested transactions. |

| source | enum | Source from which the transaction is made. Values: INSTORE( for InStore), WECHAT (WeChat), MARTJACK(AnywhereCommerce), WEB_ENGAGE (Web-engage integration), ECOMMERCE (ECOMMERCE), JD (JD), TAOBAO (Taobao), TMALL (TMall), FACEBOOK (Facebook), WEBSITE (other website), OTHERS (any other source). |

| current_slab | string | Current loyalty tier of the customer. |

| tier_expiry_date | date-time | Expiry date of the current tier in YYYY-MM-DD HH:MM:SS format. |

| points_summaries | obj | Shows the details of the loyalty points. |

| programId | long | Unique ID of the loyalty program associated to the points summary. |

| redeemed | int | In total points earned from the program, the total number of points that are redeemed. |

| expired | int | In total points earned from the program, the total number of points that are expired. |

| returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns. |

| adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if debited points are more than credited, and positive if credited points are more than debited. |

| cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program. |

| currentSlab | string | Current tier of the customer in the loyalty program. |

| nextSlab | string | Next loyalty tier of the customer. |

| nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on. |

| nextSlabDescription | string | Description of the next tier as saved in the loyalty program. |

| slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on. |

| slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer in YYYY-MM-DD HH:MM:SS. |

| registered_on | date-time | Date on which the customer is enrolled in the org’s loyalty. |

| updated_on | date-time | Recent date on which the customer details are updated. |

| type | enum | Loyalty type of the customer. LOYALTY if the customer is enrolled in the org’s loyalty program, NON_LOYALTY if customer has not enrolled in the loyalty program but registered mobile number or email id with the org. |

| custom_fields | obj | Transaction or line-item level custom field details - field name (name) and field value (value). |

| extended_fields | obj | Transaction or line-item level extended field details - extended field name (name) and extended field value (value). |

