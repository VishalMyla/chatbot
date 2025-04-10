# Profile : Current Transaction

Profile : Current Transaction(currentTxn)The currentTxn profile returns the details of a transaction. We generally use this profile to write rules on transactions, basket size, custom fields, and so on. Refer to the table below for all the supported attributes of customerTxn.

## Attributes - KPI (Transaction/Basket)

The below grouping of attributes is based on the key Performance Indicator of transactions/basket.

| Attributes | Description | Link |

| --- | --- | --- |

| basketSum() | The sum of value of the items matching the inventory attribute. | Learn More |

| basketSumRegex() | The sum of the value of the items matching the inventory attribute RegEx. | Learn More |

| basketQty() | The total quantity of items in the bill matches the inventory. | Learn More |

| basketQtyRegex() | The quantity of items in the bill matches the regular expression. | Learn More |

| basketcount() | Number of products in the transaction of the given inventory type, irrespective of quantity. | Learn More |

| basketcountRegex() | Number of products whose item attribute matches the given regular expression. |  |

| basketIncludes() | Products contained in the transaction. | Learn More |

| basketExcludes() | Products not contained in the transaction. | Learn More |

| basketSumIf | Returns the sum of the amount of line items that satisfies a specific condition. | Learn More |

| basketCountIf | Returns the count of line items of the basket that satisfies a specific condition. | Learn More |

| basketQtyIf | Return the sum of quantities of qualifying line items in the basket. | Learn More |

| basketSize | Total number of items in the bill - irrespective of quantity of each item. | Learn More |

| basketSumGross | The sum of the gross amount of each line item in a basket with a specific attribute. | Learn More |

| basketSumRegexGross | The sum of the gross amount of each line item in the basketwhose product attribute values match the given regular expression. | Learn More |



[Learn More](/docs/a#basketsumregex)

[Learn More](/docs/a#basketqty)

[Learn More](/docs/a#basketqtyregex)

[Learn More](/docs/a#basketcount)

[Learn More](/docs/a#basketincludes)

[Learn More](/docs/a#basketexcludes)

[Learn More](/docs/a#basketsumif)

[Learn More](/docs/a#basketcountif)

[Learn More](/docs/a#basketqtyif)

[Learn More](/docs/a#basket-size)

[Learn More](/docs/a#basketsumgross)

[Learn More](/docs/a#basketsumregexgross)

## Attribute - Transaction Number

| Attributes | Definition | Link |

| --- | --- | --- |

| number | Transaction number or ID. | Learn More |



[Learn More](/docs/attributes-based-on-customer-identity#attribute--number)

## Attribute - Date

| Attribute | Definition | Link |

| --- | --- | --- |

| date | date of the Transaction | Learn More |



[Learn More](/docs/attribute-date-transactionpurchase-date)

## Attributes - Custom Field (Transaction)

The below grouping of attributes is based on custom fields created at the transaction level.

| Attributes | Definition | Link |

| --- | --- | --- |

| customFieldValueIncludes | Returns True if input custom field value matches with bill's custom fields. | Learn More |

| customFieldValueExcludes | Returns False if input custom field value matches with bill's custom fields. | Learn More |



[Learn More](/docs/attributes-custom-fields#customfieldvalueincludes)

[Learn More](/docs/attributes-custom-fields#customfieldvalueexcludes)

## Attributes - Transaction Value

| Attributes | Definition | Link |

| --- | --- | --- |

| value | Total value of the transaction | Learn More |



[Learn More](/docs/attribute-transaction-value)

## Attributes - Discount

| Attributes | Definition | Link |

| --- | --- | --- |

| discount | Discounted value on the transaction | Learn More |



[Learn More](/docs/attribute-discount)

## Attributes - Note

| Attributes | Definition | Link |

| --- | --- | --- |

| note | Transaction level notes specified by the cashier during the transaction | Learn More |



[Learn More](/docs/attribute-using-standard-field)

Updatedover 1 year ago