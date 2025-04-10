# Transaction (V2)

A transaction represents a purchase or return event.

Transactions are classified into the following types:

- Regular:Normal transactions made at the PoS. Regular transactions could be loyalty, non-loyalty and not-interested.

- Return :Transactions that are returned at the PoS. Return transactions need an identifier reference. Hence, only loyalty and non-loyalty transactions can be returned through APIs. See Transaction Return API for more details.

- Mixed:A transaction that involves both regular and return is termed as mixed transaction.

#### Prerequisites

Before using transaction APIs, understand the transaction configurations of your organization. You can see the transaction related settings on InTouch.Intouch > Settings > Systems and Deployment > Intouch PoS Configuration > Billing

- Mandatory parameters required to submit a transaction.

- Scope of transaction number uniqueness (store level or TILL level) and duration for which repetition is not allowed (20 days, 30 days etc.).

- Maximum and minimum amount allowed per transaction.

- Maximum and minimum amount allowed per line-item.

For information on how the system handles different timezones, seeHandling different timezone.

Thetransaction/addAPI lets you do the following:

`transaction/add`

- Supports transactions with Product Variant and Product Bundle details.

- Adds product variant to the database when a new variant product is passed with an existing base product.

- Adds base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant .

- Adds custom field and extended field details both at the transaction and line-item level.

Variant Product: A same product having different variations in terms of common properties such as size, and color.

Product Bundle: A group of items that are sold as a single pack. This can include Combo items (Example: pack of 2, combo offers), Split items (Example: a necklace having gold rate, store rate, making charge, wastage charge and so on) and add-on items (Example: Pizza with extra cheese, and personalized toppings).

The maximum size for storing transaction data is MEDIUMTEXT (16,777,215 bytes or 16 MiB).