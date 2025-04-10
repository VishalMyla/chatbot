# Add Transaction with Local Currencypost

Lets you add transactions with a different currency using the currency conversion ratio. The following are the prerequisites or checklists for the API.

- EnableCONF_CURRENCY_CONVERSION_ENABLEon the Billing Configuration page ofInTouch Profile>Organization Settings>Systems & Deployment>InTouch POS Configurations.

`CONF_CURRENCY_CONVERSION_ENABLE`

- Configure org’s base currency and supported currencies on the Organization Setup page ofInTouch Profile>Organization Settings>Organization Setup>Organization Profile.

- Add relevant currency conversion ratios in the back-end either through /v2/currencyratio API or through Data Import.

- the destination currency id. If no currency id is passed, the transaction gets converted to the org’s base currency

The issual of points/coupon or redemption is calculated automatically as per the destination currency.

#### Rate Limit

| Region | Default Limit (RPM) |

| --- | --- |

| Asia-2 (Singapore) | 1500 |

| Asia-1 (N. Virginia) | 1500 |

| EMEA (Ireland) | 700 |



## Request Body Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| type | Enum | Type of transaction.regularfor loyalty transaction, `not_interestedfor non-loyalty or not-interested transactions. |

| credit_note | obj |  |

| notes | string | Additional information about the transaction. |

| qty | double | Quantity of the current line-item. |

| rate | float | Price of each each line-item. |

| value | float | Represents the pre-discount total for a single line item. alculated as: value = rate × quantity. Example: If a line item has a rate of $10 and quantity of 2, value would be $20. |

| amount | double | Net transaction amount. The actual transaction amount after discount. |

| billing_time | date-time | Date and time of the transaction. By default, the current system date and time will be considered. |

| gross_amount | double | Represents the total transaction amount before any discounts are applied.  It's the sum of all line items' values before discounts.Used in calculations involving the total transaction value. |

| discount | double | Discount availed for the transaction (discount amount). |

| outlier_status | Enum | Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level.Values:INTERNAL,NORMAL,INVALID,OUTLIER,FAILED``,DELETED,RETRO,FRAUD,TEST, OTHER```. |

| source | Enum | Source from which the transaction is made.Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| not_interested_reason | string | Reason why the customer is not interested to register. Applicable only for not-interested transactions. |

| customer | obj | Pass customer information. Applicable for non-loyalty and not-interested transactions. |

| extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details inline_itemobject. |



`regular`

`not_interested`

`INTERNAL`

`NORMAL`

`INVALID`

`OUTLIER`

`FAILED``,`

`,`

`,`

`,`

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

#### customer object

| Parameter | Type | Description |

| --- | --- | --- |

| mobile/email/id/external_id | string | Pass any of the registered identifiers of the customer. Required for  regular transaction. |

| firstname | string | First name of the customer. |

| lastname | string | Last name of the customer. |



#### credit_note object

| Parameter | Type | Description |

| --- | --- | --- |

| amount | double | Net transaction amount of the original bill. Represents the final amount after discounts are applied.  For line items: amount = value - discount. For transactions: amount = gross_amount - total_discount |

| notes | string | Additional information about the transaction. |

| number* | string | Unique transaction number. The uniqueness depends on the configurationCONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYSset inInTouch Settings > System & Deployment > InTouch POS Configuration > Billing.Note: The maximum length for a bill number is 50 characters. |



`CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS`

`Try It!`