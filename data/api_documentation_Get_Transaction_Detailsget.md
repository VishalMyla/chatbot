# Get Transaction Detailsget

## Request Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| id (path) | long | Unique transaction id to fetch details. |

| type (query) | Enum | Type of transaction to fetch.Value:REGULAR,RETURN,NOT_INTERESTED,NOT_INTERESTED_RETURN. Default value isREGULAR. |

| tenders (query) | boolean | Passtrueto retrieve payment mode details. Default value isfalse. |

| credit_notes (query) | boolean | Passtrueto retrieve credit notes  details (added through v1.1 transaction/add). Default value isfalse. |



`REGULAR`

`RETURN`

`NOT_INTERESTED`

`NOT_INTERESTED_RETURN`

`REGULAR`

`true`

`false`

`true`

`false`

> 🚧If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:"message": "Customer is deleted after PII delete request"

## 🚧

If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:

"message": "Customer is deleted after PII delete request"

```
"message": "Customer is deleted after PII delete request"
```

# Response parameter

> 🚧The description in the line item is not the inventory level description but the description that you added while adding the transaction.

## 🚧

The description in the line item is not the inventory level description but the description that you added while adding the transaction.

| Parameter | Description |

| --- | --- |

| useDefaultFleetGroup | Determines if the default fleet group is used. False means it's not used. |

| loyaltiesPointDetails | An array indicating about the loyalty points details associated. |

| billPointsBreakup | An array representing the breakdown of points in the bill. |

| attribution | -createDate: The date and time when the record was created. |

|  | -createdBy: Details about the user who created the record. |

|  | -id: User ID. |

|  | -code: User code. |

|  | -description: Description of the user. |

|  | -name: User name. |

|  | -type: Type of user. |

|  | -adminType: Type of admin privileges. |

|  | -isActive: Indicates if the user is active. |

|  | -isOuEnabled: Indicates if organizational unit is enabled for the user. |

|  | -timeZoneId: User's time zone ID. |

|  | -currencyId: User's currency ID. |

|  | -languageId: User's language ID. |

|  | -modifiedBy: Details about the user who last modified the record (currently empty). |

|  | -modifiedDate: The date and time when the record was last modified (in UTC). |

| billDetails | -amount: The total amount of the bill. |

|  | -billingStore: Details about the store where the billing occurred. |

|  | -id: Store ID. |

|  | -code: Store code. |

|  | -description: Description of the store. |

|  | -name: Store name. |

|  | -type: Type of store. |

|  | -adminType: Type of admin privileges for the store. |

|  | -isActive: Indicates if the store is active. |

|  | -isOuEnabled: Indicates if organizational unit is enabled for the store. |

|  | -timeZoneId: Store's time zone ID. |

|  | -currencyId: Store's currency ID. |

|  | -languageId: Store's language ID. |

|  | -billNumber: Unique identifier for the bill. |

|  | -billingTime: The date and time when the billing occurred (in UTC). |

|  | -discount: The discount applied to the bill. |

|  | -grossAmount: The total amount before discount. |

|  | -note: Additional notes or comments about the bill (currently empty). |

|  | -returnDetails: Details about the return status of the bill. |

|  | -canceled: Indicates if the bill is canceled. |

|  | -niReturnDetails: Details about non-inventory returns (currently empty). |

|  | -invalidBill: Indicates if the bill is valid or not. |

| customFields | An empty object indicating about the custom fields associated with this record. |

| source | Indicates the source of the transaction, in this case, "instore". |

| addWithLocalCurrency | Determines if additional information is added with local currency. False means it's not added. |

| async | Determines if the transaction is asynchronous. False means it's synchronous. |

| useV2 | Determines if version 2 of the transaction system is used. False means it's not used. |

| simulation | Indicates if the transaction is a simulation. False means it's a real transaction. |

| customerId | The unique identifier for the customer associated with the transaction. |

| id | The unique identifier for this transaction record. |

| lineItems | An array of line items that includes information about the line items.NOTE:The description of the line item is not the inventory level description but the description that you added while adding the transaction. |

| outlierStatus | Status of the entire transaction (currently set to "NORMAL"). |

| type | Type of the transaction, in this case, "REGULAR". |

| lifeTimePurchases | Total number of purchases made by the customer over their lifetime. |

| ignorePoints | Determines if loyalty points are ignored for this transaction. False means they are considered. |

| autoUpdateTime | The date and time when the transaction record was last updated. |

| niReturnDetails | Details about non-inventory returns for the transaction (currently empty). |

| basketSize | Total quantity of items in the transaction |

| returnDetails | Details about the return status of the entire transaction. |

|  | -canceled- Indicates if the entire transaction is canceled. |

| retroTxn | Determines if it's a retrospective transaction. False means it's not retrospective. |

| warnings | An array indicating about the warnings associated with this transaction. |



`Try It!`