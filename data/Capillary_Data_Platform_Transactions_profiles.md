# Transactions profiles

This category lets you import all transactions data, including bill outlier status, bill line items, extended fields and more.

## Possible Errors in transaction import

When you import data to the local database, you will see the list of errors, auto-corrections, and download report option. You can download the entire report. The following table provides the list of errors that could occur when importing for transactions.

| Error | Explanation |

| --- | --- |

| Bill_date is invalid/null/void/of future date | Invalid bill date. |

| Bill_store is invalid/null/void | The stores linked are not present in the system. |

| bill_number repeating within X days | X is a number between 0 and 365 (that is configurable). It decides how often a bill_number is repeatable on the same store.For example, X=5, it means bill_number B1 cannot repeat on store S1 for at least 5 days.bill_discount > bill_gross_value |

| Bill Duplicate within File | Duplicate bill_no, bill_date, and billing_store in the import file. |

| Bill Duplicate within database | This means the same bill_no, bill_date, billing_store are already present in the system (Loyalty / Non-Loyalty). |

| User Not Registered | The user tagged to the bill is not registered in the system. |



## Outlier Status

The following are the different outlier statuses that you can have for a transaction.

| Outlier Status | Description |

| --- | --- |

| NORMAL | For normal transactions |

| FRAUD | For fraud transactions |

| INTERNAL | This is for bills imported for internal use and will not be shown outside |

| OUTLIER | This ensures the transaction is not added to the customer’s lifetime purchases |



This article provides detailed information on how to import the following data using different profiles of the Transactions category.

Profiles of Transactions

- Possible Errors in transaction import

- Outlier Status

- Loyalty Transactions - Transactions (Bills)

- Transactions (Not-Interested)

- Transaction Line Items (Loyalty)

- Transaction Line Items (Not Interested Transaction)

- Transaction (Returns)

- Update Transaction Line Items (for Loyalty Transactions)

- Update Transaction Line Items (for Not-interested Transactions)

- Update Outlier Status (Loyalty Transactions)

- Update Transaction Outlier Status (Not-Interested Bills)

- Extended Fields Import

- Payment Mode Import

- Payment Mode

- Supported and Mandatory Fields for each mode

## Loyalty Transactions - Transactions (Bills)

This profile is used to upload the transaction details of loyalty customers. The Import Framework now supports transactions of Product Bundle. A bundle can have combo items or add-on items.

You also need to specify outlier_status for an import; then the transaction will have normal outlier by default, meaning it is a normal transaction.

Before doing a transaction import, it is important to understand the billing configurations set for the organization. To know more, see Billing Configuration.

The following are the supported entries (CSV columns) for Loyalty Transactions.

- Customer identifier* - mobile number/external ID/Email ID/User ID (the option you select in Choose customers' unique identifier is mandatory)

- Group identifiers** - group ID, group external ID, primary user ID, primary user mobile, primary user email, primary user external ID, primary user card number (the option you select in User Group2 Identifier Type is mandatory). This is required for group transactions.

- Transaction/Bill Number*

- Transaction/Bill Date*

- Transaction/Bill Amount*

- Till IUN/Store's External ID/ Store Terminal User Name*

- Slab

- Counter ID

- Transaction/Bill Discount

- Shipping Source Store Code(Shipping Store Code)

- Currency Ratio(Currency Ratio)

- Transaction Final Amount(Bill Final Amount) - Net bill amount

- Outlier Status

- Other transaction-level extended fields and custom fields supported for the org. For example, discount, tax, and GST.

Note:A line item with null or blank SKU is considered Outlier.Fields marked with * are mandatory.Field marked with ** is required for group transactions.

#### CSV Sample

Mobile,GroupID,TransactionNumber,TransactionDate,Till,TransactionAmount,Slab

9900111111,598612,TRA1240,2018-10-10,mal1,2000,Gold

Template Configuration

![](https://files.readme.io/53745d0-temp.png)

| OPTION | DESCRIPTION |

| --- | --- |

| User Group2 Enabled | Check this option to import group transactions.You will see an option to choose the identifier type to recognize the group - User Group2 Identifier Type. |

| User Group2 Identifier Type | Select the identifier for the group used in the CSV file. You can pass any of the following identifiers of the group.GROUP_IDEXTERNALIDPRIMARYUSER_IDPRIMARYUSER_MOBILEPRIMARYUSER_EMAILPRIMARY_USER_EXTERNAL_ID* PRIMARY_USER_CARD_NOYou need to have the field that you select here in the CSV file and map it to the respective field. |

| Register new customers automatically | Check this option to allow registering new customers automatically. |

| Replace invalid store names with | Choose the store that you want to replace with for invalid stores identified in the import. |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes. |

| Update points and purchases for existing transactions | Check this option to update points and lifetime purchases automatically for the import. |

| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified. |

| Disable mobile number validation | Check this option to disable validating customer's mobile number while importing the data. |

| Disable email id validation | Check this option to disable validating customer's email id while importing the data. |

| Choose customers' unique identifier | Choose the unique identifier of the customer used at the organization. |

| Enter email id for email notifications | Specify email ids to whom the notifications related to the import need to be sent. |

| Transaction Currency | Lets you convert currency of a loyalty transaction to the customer's local currency. For this, it is required to specify the respective currency conversion ratio for each transaction in the .csv file. |



- To convert transactions with local currency, it is required to set the currency of transactions that you want to import (Transaction Currency in template configuration) and the conversion ratio of each transaction (in the CSV file)

- You can add/modify supported currencies of the org inOrganization Setup > Organization Profile > Edit > Supported Currencies >add required currencies and save it.

- You can have only one type of transaction currency in the CSV file you import. However, you can specify different conversion ratios for each transaction depending on customers' base currency.

## Transactions (Not-Interested)

This profile lets you import transactions of not interested customers, that is transactions without customer details. You can also import transactions of Product Bundle - either combo items or add-on items. To import not-interested transaction details, you need to create a CSV file with the following fields.

- Transaction Number*

- Transaction Date*

- Transaction Amount*

- TILL IUN or Store's External ID (Store Code)*

- Reason or Notes

- Bill Outlier Status

- Transaction Discount

- Transaction Final Amount

Example:

TransactionNumber,TransactionDate,TransactionAmount,TillID,LineItemTypeTrans1222,2005-10-10,300,mal1,SPLIT

Template Creation

![](https://files.readme.io/14e6ac3-conf.png)

| Options | Description |

| --- | --- |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes. |

| Replace invalid store names with | Choose the store that you want to replace with for invalid stores identified in the import. |

| Override amount calculation | By default, the final bill amount (final_amount) is calculated as  (bill_amount - discount) and stores it in the final_amount field in the database.Check this if you need to consider the value provided in the import file as per the field mapping. |

| Default bill outlier status | Set the default outlier status from the available options. The default value is Normal.Normal: For normal transactions.Fraud: For fraud transactions.Internal: For internal or sample transactions.Outlier: For outlier transactions - there are not included/added in the lifetime transactions/store transactions. |



## Transaction Line Items (Loyalty)

Use this profile to upload line item details of loyalty transactions. Hence, the file should contain line-items of transactions of only loyalty customers. The Import Framework now supports transactions of Product Bundle. A bundle can have combo items or add-on items.

- Item*

- Mobile no./External id/Customer unique identifier* (the option you choose in Select the user input type is mandatory)

- Group identifiers** - group ID, group external ID, primary user ID, primary user mobile, primary user email, primary user external ID, primary user card number (the option you select in User Group2 Identifier Type is mandatory). This is required for group transactions.

- Till Username/Store external id*

- Item id/code*

- Item description

- Rate*

- Quantity*

- Value (rate*quantity-discount)

- Discount

- Bill amount

- Serial no.

- Transaction date*

- Counter Id

- Transaction Number*

- Points

- Gross value (Net value)*

- Outlier Status

- Line item outlier status

- User id

- Email id

- Line item type (Mandatory for transactions with combo items)

- Parent line item serial no. (Mandatory for transactions with combo items)

Note:

- A line item with null or blank SKU is considered Outlier.

- Fields marked with * are mandatory.

- Field marked with ** is required for group transactions.

Product Bundle Support

Import Framework now supports transactions with product bundle details. There are three types of produce bundle - add-on type, combo type, and split type.

- Combo: Bundling one or more products of the same category and selling them as a single unit. In Import, you need to pass each combo item with line item type COMBO_ITEM and the parent item with line item type REGULAR

- Add-on:It refers to a personalized product where a base product will have different add-ons. For example, pizza with cheese burst, toppings and so on. Each add-on item should be represented as ADDON_ITEM and the parent item should be represented as REGULAREach combo or add-on item should be associated with a parent item (Parent Line item Serial No). Any new combo or add on items, which you import for a transaction, will be added automatically to the inventory.

![](https://files.readme.io/409b226-inventory.png)

- Split Items: It refers to item price based on different parameters involved (break up of item price). This is mainly used for jewellery stores. For example, if a necklace is considered as the base product, the split could include store charge, making charges, wastage charges and so on. It is not necessary that the price of the base item should match with the sum of individual split items.  For a split item, Line item type should be SPLIT and the base line item type should be REGULAR

CSV Sample:

Mobile,TransactionNumber,Til,ItemID,Rate,Quantity,TransactionDate,OutlierStatus,Value9900111111,TRANS122562,mal1,GB35,601,1,2005-10-10,Normal,601

Template Configuration

![](https://files.readme.io/ec16624-confi.png)

| Option | Description |

| --- | --- |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes |

| Replace invalid store names with | Choose the store that you want to replace with for invalid stores identified in the import |

| Register new customers automatically | Check this option to allow registering new customers automatically |

| Allow adding line items to the existing transactions | Check this option to enable line-item level transactions |

| Outlier status to be considered for billing | Add the items that need to be considered as outlier items |

| Update points and purchases for existing transactions | Check this option to update points and lifetime purchases automatically for the import |

| Line item level points given | Check this option if the points are issued at a line item level |

| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |

| Ignore currency conversion | Check this option to skip currency conversion even if the CSV file consists of conversion ratio. |

| Ignore inventory push | Check this option to ignore adding/updating product details available in the CSV file. |

| Ignore combo add ons | Check this option to ignore adding combo (add-on) details available in the CSV file. |

| Disable mobile number validation | Check this option to disable validating customer's mobile number while importing the data |

| Disable email id validation | Check this option to disable validating customer's email id while importing the data |

| Enter email id for email notifications | Specify email ids to whom you want to send notifications related to the import. |

| Select the user input type | Select the customer identifier provided in the CSV file (mobile, email ID, external ID, or user ID). |

| Disable creation of non-existing bills | Choose the desired points expiry strategy for the current template |

| Allow separate line items of same item code in a bill | Usually, if the item code is the same, the record merges with increment in the quantity.Check this option to add such items as a separate record. |

| Transaction currency | Lets you convert transaction currencies to any other currencies supported by the org. (basically a customer's local currency). For this, it is required to specify the respective currency conversion ratio for each transaction in the CSV file |



Note:

- To convert transactions with local currency, it is required to set the currency of transactions that you want to import (Transaction Currency in template configuration) and the conversion ratio of each transaction (in the CSV file)You can add/modify supported currencies of the org in Organization Setup > Organization Profile > Edit > Supported Currencies > add required currencies and save it.You can have only one type of transaction currency in the CSV file you import. However, you can specify different conversion ratios for each transaction depending on customers' base currency.

To convert transactions with local currency, it is required to set the currency of transactions that you want to import (Transaction Currency in template configuration) and the conversion ratio of each transaction (in the CSV file)

- You can add/modify supported currencies of the org in Organization Setup > Organization Profile > Edit > Supported Currencies > add required currencies and save it.

- You can have only one type of transaction currency in the CSV file you import. However, you can specify different conversion ratios for each transaction depending on customers' base currency.

- You could have an outlier status as Normal, Fraud, Internal, and Outlier. A bill and a line item can have separate outlier statuses.

You could have an outlier status as Normal, Fraud, Internal, and Outlier. A bill and a line item can have separate outlier statuses.

- The priority of a line item outlier status is more than the bill outlier status, and the status 'Normal' has the highest precedence. i.e. if in a bill of two or more line items, a line item has the status 'Normal', then the bill will have the status normal irrespective of the statuses of other line-items.

The priority of a line item outlier status is more than the bill outlier status, and the status 'Normal' has the highest precedence. i.e. if in a bill of two or more line items, a line item has the status 'Normal', then the bill will have the status normal irrespective of the statuses of other line-items.

- Each line-item in a file should have a different Item ID. The line item that is imported should be a part of the Org’s Inventory. No new item will be added to the inventory.

Each line-item in a file should have a different Item ID. The line item that is imported should be a part of the Org’s Inventory. No new item will be added to the inventory.

## Transaction Line Items (Not Interested Transaction)

This profile lets you update the line-items of non-loyalty transactions. The Import Framework now supports transactions of Product Bundle. A bundle can have combo items or add-on items.

- Transaction Number*

- Transaction Date*

- Bill Amount*

- Item Code*

- Rate*

- Quantity (of Items purchased)*

- Discount

- Description

- Gross Value*

- TILL IUN/Store External ID*

- Serial number in the listing

- Line item outlier status

- Bill outlier status

- Line item type (Mandatory for transactions with combo items)

- Parent line item serial no. (Mandatory for transactions with combo items)

Product Bundle SupportImport Framework now supports transactions with product bundle details. There are three types of produce bundle - add-on type, combo type, and split type.

- Combo: Bundling one or more products of the same category and selling them as a single unit. In Import, you need to pass each combo item with line item type COMBO_ITEM and the parent item with line item type REGULAR

- Add-on: It refers to a personalized product where a base product will have different add-ons. For example, pizza with cheese burst, toppings and so on. Each add-on item should be represented as ADDON_ITEM and the parent item should be represented as REGULAREach combo or add-on item should be associated with a parent item (Parent Line item Serial No).

Any new combo or add on items, which you import for a transaction, will be added automatically to the inventory.

- Split Items: It refers to item price based on different parameters involved (break up of item price). This is mainly used for jewellery stores. For example, if a necklace is considered as the base product, the split could include store charge, making charges, wastage charges and so on. It is not necessary that the price of the base item should match with the sum of individual split items.  For a split item, Line item type should be SPLIT and the base line item type should be REGULAR

CSV Sample:

TransactionNumber,TransactionDate,Till,ItemCode,Rate,Qunatity,GrossValue,BillAmountTrans1224,2018-10-10,mal1,GB1474,300,1,300,300

Template Configuration

![](https://files.readme.io/6df9ff2-config.png)

| Option | Description |

| --- | --- |

| Default line-item outlier status | Choose the default outlier status for line-items.Values: Internal, normal, invalid, outlier, failed, others |

| Allow adding line-items to existing transactions | Check this option to allow adding line-items to the already existing transactions |

| Default bill outlier status | Choose the default outlier status at the transaction level |

| Update bill amount if already exists | Check this option to enable line-item level transactions |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes |

| Replace invalid store names with | Choose the store that you want to replace with for invalid stores identified in the import |



## Transaction (Returns)

This profile lets you update return transactions of a customer. You can import complete return or mixed return types. Following are three different cases of a return transaction:

- Case A. Returning a transaction with amount without making a new purchase - full return transaction

- Case B. Returning a transaction or a line-item and purchasing another item on behalf - mixed transaction

- Case C.  Returning a transaction which does not exist in Capillary Database. (bill) then this flow will be followed. This depends on the configuration set at the org level for return transactions.

There are three types of transactions - Amount (when the transaction is returned with amount); Line-item (when a line-item of a transaction is returned, and a new item is purchased); Full (when the entire transaction is returned, and a new purchase is made).You can import only one return transaction type at a time. Hence, create different CSV files for each return type and create a separate import job for each of the return types.Also, once a transaction is returned as AMOUNT, then the same transaction cannot be returned with any other type (LINEITEM or FULL) again and vice versa.

- Transaction Number

- TransactionDate*

- Mobile/Email/External ID/User ID (the option you select in Select the user input type is mandatory)

- Return Transaction Number*

- TILL IUN/Store External ID*

- Return Type* (Values: FULL/LINEITEM/AMOUNT)

- Amount*

- Discount

- Rate

- Quantity

- Item Code** (Required for line-item return)

- Returned Transaction Store

- Notes

- Credit Note Number

- Credit Note Amount

- Other custom or extended fields

CSV Sample

TransactionNumber,Til,TransactionDate,TransactionAmount,Attribute,Qty,Transaction Discount(Bill Discount), Serial, Item Code, Customer Int, Customer FlagGB1458,mal1,10/10/2005,300,Blue ,1,10,19,test12,87,Normal

Template Creation

![](https://files.readme.io/fb07448-templ.png)

| Option | Description |

| --- | --- |

| Allow returning non existing transactions | Check this option to allow transaction returns for transactions that are not available in Capillary database |

| Allow updating duplicate return transactions | Check this option to allow updating duplicate bills of return transactions |

| Allow import without parent transaction | Check this option to import transaction returns without any reference transaction (parent transaction) |

| Disable mobile number validation | Check this box to disable validating customers' mobile numbers while importing transaction returns |

| Disable email id validation | Check this box to disable validating customers' email ids while importing transaction returns |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes |

| Replace invalid store names with | Choose the store that you want to replace with for invalid stores identified in the import |

| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |

| Enter email id for email notifications | Specify email ids to whom the notifications related to the import need to be sent |

| Select the user input type | Select the unique identifier of customers used in the CSV file (MOBILE/EMAIL/ETERNAL ID/USER ID) |



## Update Transaction Line Items (for Loyalty Transactions)

Lets you update item code and description of loyalty transactions. Other fields cannot be updated.

The following are the fields supported for the update loyalty transaction line item profile.

- Transaction ID***

- Bill Number**

- Till Code**

- Bill Date**

- Item Code*

- Item Description

Note:

- The parameter marked with * is mandatory along with either fields marked withor *.

- The parameter marked with *** is mandatory if Choose Identifier in Configure Template is set to the Transaction ID.

- The parameters marked with ** are mandatory if Choose Identifier in Configure Template is set to bill_number_date_till_code.

Template Configuration

![](https://files.readme.io/6880ea3-templa.png)

- Select Transaction ID to identify transaction by transaction number. For this, the transaction ID is a mandatory parameter in the import file.

- Select BillNumber_Date_TillCode to identify transaction by bill number, bill date, and TILL code.

## Update Transaction Line Items (for Not-interested Transactions)

Lets you update item code and description of non-interested loyalty transactions.

The following are the fields supported for the update loyalty transaction line item profile.

- Transaction ID***

- Bill Number**

- Till Code**

- Bill Date**

- Item Code*

- Item Description

Note:

- The parameter marked with * is mandatory along with either fields marked withor *.

- The parameter marked with *** is mandatory if Choose Identifier in Configure Template is set to the Transaction ID.

- The parameters marked with ** are mandatory if Choose Identifier in Configure Template is set to bill_number_date_till_code.

Template Configuration

![](https://files.readme.io/6bc983a-template.png)

- Select Transaction ID to identify transaction by transaction number. For this, the transaction ID is a mandatory parameter in the import file.

- Select BillNumber_Date_TillCode to identify transaction by bill number, bill date, and TILL code.

Note:Bill custom fields cannot be updated.

## Update Outlier Status (Loyalty Transactions)

> ❗️WarningUpdating the outlier status will not change the loyalty KPIs such as transaction count, returns, or trackers.

## ❗️Warning

Warning

Updating the outlier status will not change the loyalty KPIs such as transaction count, returns, or trackers.

This profile lets you update outlier status of a bill or to delete a bill (outlier status - DELETED). When you delete a bill, all the line-items associated with the bill will be removed automatically.

Upload a CSV file with bill ids along with the outlier status.A line item with null or blank SKU is considered an outlier.

The CSV file for creating bulk outliers should contain the following fields:

- Bill ID ( transaction dump id or loyalty log id)*

- Outlier status*: The following are values supported for outlier statusOUTLIER: To mark a bill outlierNORMAL: To mark a bill as a valid billDELETED: To delete a bill with all the associated line-items

- OUTLIER: To mark a bill outlier

- NORMAL: To mark a bill as a valid bill

- DELETED: To delete a bill with all the associated line-items

Template Configuration

![](https://files.readme.io/064c0d1-connn.png)

| Option | Description |

| --- | --- |

| Identifier for updating transactions | Choose the identifier you want to use for updating transactions - Loyalty Log ID or Bill Dump ID |

| Replace invalid outlier status with | Choose the default status that you want to have for invalid outlier statuses in the import.Values: Normal, Fraud, Outlier |



## Update Transaction Outlier Status (Not-Interested Bills)

This profile lets you modify the outlier status of a line-item and the value of a transaction amount. Use this profile to update invalid outlier status or outlier line-item amount.

- Identifier ( transaction dump id or loyalty log id)*

- Outlier status*

CSV Sample:

Identifier,OutlierStatus

636319,Deleted

Note:Line item level outlier status cannot be updated.

## Extended Fields Import

This profile lets you add/update the extended field values of a customer. With this profile, you can import extended fields of customer, transaction, transaction line item, and lead. You cannot do both add and update of an extended field value (for a customer) in the same file/import.

Again, for a transaction, you can add or update extended fields for

- loyalty transactions (regular transaction, regular transaction line item, return transaction);

loyalty transactions (regular transaction, regular transaction line item, return transaction);

- not-interested transactions (not-interested transaction, not-interested transaction line item, not-interested return transaction, not-interested line item return).

not-interested transactions (not-interested transaction, not-interested transaction line item, not-interested return transaction, not-interested line item return).

The following are the fields supported for each entity type.

| Customer | Transaction | Transaction line item | Lead |

| --- | --- | --- | --- |

| - Entity ID_ (customer id)- Extended field value 1_- Email ID- Mobile Number- External ID | - Entity ID***- Bill Number**- Till Code**- Bill Date**- Email ID- Mobile Number- External ID- TransactExtended field values_ (Each in a different column)Note:Entity ID could be transaction id/line item id/return transaction id.* Either the field with **or fields with _are mandatory depending on the option selected inChoose Identifier.** | - Entity ID***- Bill Number**- Till Code**- Bill Date**- Email ID- Mobile Number- External ID- Extended field values* | - Entity ID_ (Lead ID)- Email ID- Mobile Number- External ID- Bill Number- Till Code- Bill Date- Extended field values_ (Each in a different column) |



Specify each extended field value that you want to update for a customer in a different column.

Fields for customer level extended

- Entity ID* (For a customer, it is customer id (user id), and for a transaction, it is transaction id/line-item id, for lead it is lead id)

- Extended Field Value*

- Bill Number*

- Till Code*

- Bill Date*

- Email ID

- Mobile Number

- External ID

- Extended fields based on the entity type

Template Creation

![](https://files.readme.io/29be483-entityy.png)

| Option | Description |

| --- | --- |

| Entity Type | According to the entity type uploaded, select the type of the entity.For example:If the entity ID is customer ID, you can update customer level extended fields. So, select Customer from the list.If the entity ID is transaction/line item ID, you can update transaction/line item level extended fields. So,  select the type of transaction - regular, return, not-interested, regular line item, return line item, not-interested line item.* If the entity ID is lead ID, select Lead to update extended fields of Lead. |

| Extended Fiealds | Add the fields that you want to update. |

| Choose Identifier | Choose the identifier used based on the type of external fields.For transaction level extended fields, the identifier should be transaction ID.For line item level extended fields it should be transaction line item ID.For customer level extended fields, the identifier could be mobile, email, user id, external id.For lead level extended fields, it is lead ID. |

| Skip Records with Null Values | Check this box if you do not want null values to pass into the transformation. For example, if you select this, any null value identified for an extended field (in the CSV file) is ignored from saving. |



## Payment Mode Import

You can now import payment mode details of existing transactions through Import Framework. For new transactions, you first need to import transactions and then update payment modes through Payment Mode Import.

The fields associated with each payment mode might vary depending on the brand's payment mode configurations. Hence there are no fixed fields for each payment mode.  However, the fields user id, transaction number and transaction date are mandatory for any payment mode.

Payment ModeIn Select payment mode, choose the preferred mode of payment.

![](https://files.readme.io/1fdf937-payment.jpg)

- Card: Payments through debit or credit card

- Check: Payments through checks

- Gift Card: Payments through store gift cards

- Discount Coupon: Discount coupons used for payments

- Exchange Lineitem: Exchanging a purchased line item

- Points:  Payments through loyalty points

- Cash on delivery: Payments through cash upon delivery

- Bank credit:

- Net banking: Payments through online internet banking

Supported and Mandatory Fields for each mode

| Payment Mode | Supported Fields |

| --- | --- |

| Card | User Id(User Id)Bill Number(Bill Number)Bill Date(Bill Date)Payment Mode Value(Payment Mode Value) *Name On Card(AF)CardIssuerCode(AF)AuthorizationMethodCode(AF) |

| Check | User Id(User Id)Bill Number(Bill Number)Bill Date(Bill Date)Payment Mode ValueBank NameBranch Name |

| Gift Card/ Exchange Line item/ Points/ Cash on Delivery/ Bank Credit/ Net Banking | User Id(User Id)Bill Number(Bill Number)Bill Date(Bill Date)Payment Mode Value |



Note:

- The payment mode value is the amount paid through the respective payment mode

- It is required to provide original Bill number and Bill date to process the import

- No new transaction or line items can be added through this import

## Bill Store Update

This profile allows you to update the store linked to a transaction using the bill ID and Till details.

Use CaseSuppose transaction T1 is currently associated with store S1, and you need to change the association to store S2. You can use the Bill Store Update profile to accomplish this by providing the bill ID and Till details. This reassigns the transaction from S1 to S2.

Updated8 months ago