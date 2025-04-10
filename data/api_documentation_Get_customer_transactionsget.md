# Get customer transactionsget

# API endpoint

- To retrieve the transaction details of the customer use the endpoint given below:

https://{host}/v2/customers/{id}/transactions

```
https://{host}/v2/customers/{id}/transactions
```

- To retrieve additional customer transaction information use the 'embed' query parameter. The supported embed parameters are:  BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES, CREDIT_NOTES, BILL_STORE_DETAILS, BILL_POINTS

- When alternate currency is enabled for the org, the bill points information will also have alternate currency information with it.

https://{host}/v2/customers/{id}/transactions?embed=BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES

```
https://{host}/v2/customers/{id}/transactions?embed=BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES
```

# Path parameter

| Path parameter | Description |

| --- | --- |

| id | Customer ID of the customer. |



# Query parameter

| Parameter | Description |

| --- | --- |

| BILL_CF | Custom fields associated with the transaction. |

| BILL_EF | Extended fields of the transaction. |

| ATTRIBUTION | Additional details regarding the transaction. |

| PAYMENT_MODES | Modes of payment for the transaction. |

| CREDIT_NOTES | Notes or references related to credits of the transaction. |

| BILL_STORE_DETAILS | Details of the store or outlet associated with the transaction. |

| startDate | Transaction start date in the format YYYY-MM-DD HH:MM:SS. |

| endDate | Transaction end date in the format YYYY-MM-DD HH:MM:SS. |

| sortBy | Field by which the records are sorted. OnlyBILLING_TIMEis supported. |

| sortOrder | Order in which records are sorted.  ASC and DESC are supported values.Default order is DESC. |

| limit | Maximum number of records to retrieve.Default limit is 20.Maximum limit is 1000. |

| offset | Starting point for records retrieval.Default offset is 0. |

| BILL_POINTS | Information associated with the promised points, regular points, promotional points, alternate currencies. |



`BILLING_TIME`

# Response parameter

| Parameter | Description |

| --- | --- |

| pagination | Contains information about the pagination of the data. |

| limit | The maximum number of records to return. |

| offset | The starting point from which to retrieve records. |

| sortBy | The parameter by which the data is sorted. |

| sortOrder | The order in which the data is sorted (e.g., "DESC" for descending). |

| total | The total number of records available. |

| data | An array containing the actual data records. |

| id | The unique identifier for the record. |

| customerId | The ID of the customer associated with the record. |

| loyaltyLogId | The ID of the loyalty log associated with the record. |

| billingTime | The timestamp of when the billing occurred. |

| billNumber | The unique number associated with the transaction. |

| type | The type of transaction (e.g., "REGULAR"). |

| notes | Any additional notes or comments associated with the transaction. |

| amount | The net amount of the transaction after discounts. |

| grossAmount | The original amount of the transaction before any discounts. |

| discount | The discount applied to the transaction. |

| outlierStatus | The status indicating if the record is an outlier or not (e.g., "NORMAL" or "OUTLIER"). |

| warnings | An array containing any warnings related to the data retrieval. |

| total | Total number of records. |



| Parameter | Description |

| --- | --- |

| pagination | An object containing pagination details for the API response. |

| - limit | The maximum number of items returned per page (e.g., 20). |

| - offset | The starting offset for the items in the current page (e.g., 0). |

| - sortBy | The field used for sorting the data (e.g., "BILLING_TIME"). |

| - sortOrder | The sorting order (e.g., "DESC" for descending order). |

| - total | The total number of items available in the dataset (e.g., 107). |

| data | An array of objects containing the main data of the response. |

| - id | An identifier for the data item. |

| - customerId | The ID of the customer associated with the data. |

| - loyaltyLogId | The ID of the loyalty log. |

| - billingTime | The date and time of the billing event. |

| - billNumber | The bill number associated with the transaction. |

| - type | The type of transaction (e.g., "RETURN" or "REGULAR"). |

| - returnType | The type of return transaction (applicable for "RETURN" type). |

| - notes | Additional notes or comments related to the transaction. |

| - amount | The transaction amount. |

| - grossAmount | The gross transaction amount. |

| - discount | The discount applied to the transaction. |

| - outlierStatus | The status of the transaction (e.g., "NORMAL"). |

| - billingStore | An object containing details about the billing store. |

| -- id | The store ID. |

| -- code | The store code. |

| -- description | The store description. |

| -- name | The store name. |

| -- type | The store type. |

| -- adminType | The store admin type. |

| -- isActive | Indicates if the store is active. |

| -- isOuEnabled | Indicates if OU (Organization Unit) is enabled for the store. |

| -- timeZoneId | The time zone ID for the store. |

| -- currencyId | The currency ID used by the store. |

| -- languageId | The language ID used by the store. |

| - extendedFields | An object containing extended fields and their values. |

| -- CentralGST | The Central GST value. |

| -- StateGST | The State GST value. |

| -- amount_excluding_tax | The transaction amount excluding tax. |

| - creditNotes | An array of objects containing credit note details (if applicable). |

| -- number | The credit note number. |

| -- amount | The credit note amount. |

| -- notes | Notes related to the credit note. |

| -- referenceId | The reference ID associated with the credit note. |

| - attribution | An object containing attribution details. |

| -- createDate | The date and time of creation. |

| -- createdBy | An object containing details about the creator. |

| --- id | The creator's ID. |

| --- code | The creator's code. |

| --- description | The creator's description. |

| --- name | The creator's name. |

| --- type | The creator's type. |

| --- adminType | The creator's admin type. |

| --- isActive | Indicates if the creator is active. |

| --- isOuEnabled | Indicates if OU (Organization Unit) is enabled for the creator. |

| --- timeZoneId | The time zone ID for the creator. |

| --- currencyId | The currency ID used by the creator. |

| --- languageId | The language ID used by the creator. |

| -- modifiedBy | An object containing details about the modifier (if applicable). |

| -- modifiedDate | The date and time of modification (if applicable). |

| warnings | An array of warning messages (if any). |

| errors | An array of error messages (if any). |



| Parameter | Description |

| --- | --- |

| pagination | Object containing pagination details. |

| - limit | Maximum number of items to display per page. |

| - offset | Index of the first item to be displayed. |

| - sortBy | Field used for sorting the data. |

| - sortOrder | Sorting order (ascending or descending). |

| - total | Total number of items available. |

| data | Array containing the main data objects. |

| - id | Unique identifier for the transaction. |

| - customerId | ID of the customer associated with the transaction. |

| - loyaltyLogId | ID associated with the loyalty log. |

| - billingTime | Date and time of the transaction. |

| - billNumber | Unique identifier for the bill. |

| - type | Type of transaction (e.g., regular). |

| - notes | Additional notes or description of the transaction. |

| - amount | Total amount of the transaction. |

| - grossAmount | Gross amount of the transaction. |

| - discount | Discount applied to the transaction. |

| - outlierStatus | Status indicating if the transaction is considered an outlier (deviating from regular transaction). |

| - billPoints | Object containing details about loyalty points earned from the bill. |

| - pointsBreakup | Breakdown of points earned. Includes info on promised points, promotional points, regular points, and points awarded type with the associated program type and program ID. |

| - aggregatedBillPoints | Includes info on promised points, promotional points, and regular points with the associated program type and program ID. |

| - alternateCurrenciesBreakup | Breakdown of alternate currencies earned with the related information. This is available when alternate currency is enabled for the org and awarded. |

| - aggregatedBillAlternateCurrencies | Breakdown of alternate currencies earned with the related information. This is available when alternate currency is enabled for the org and awarded. |

| warnings | Array containing any warnings encountered during processing. |

| errors | Array containing any errors encountered during processing. |



`Try It!`