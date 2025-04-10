# Get Points Ledger Informationget

> 👍For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Make sure you have access to the Points access group resource. For more information, seeaccess group documentation.

# API Specification

|  |  |

| --- | --- |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | Refer torate limit documentation. |



[rate limit documentation](/reference/rate-limits)

# API endpoint example

- Retrieve points ledger entries of a User group -/v2/pointsLedger/getCustomerLedgerInfo?type=USERGROUP2&identifierName=id&identifierValue=381335652&source=INSTORE&offset=0&limit=10&sortOrder=ASC

```
/v2/pointsLedger/getCustomerLedgerInfo?type=USERGROUP2&identifierName=id&identifierValue=381335652&source=INSTORE&offset=0&limit=10&sortOrder=ASC
```

- Retrieve points ledger entries of a customer-v2/pointsLedger/getCustomerLedgerInfo?identifierName=id&identifierValue=98662653&source=INSTORE&limit=10

```
v2/pointsLedger/getCustomerLedgerInfo?identifierName=id&identifierValue=98662653&source=INSTORE&limit=10
```

- Retrieve points ledger entries of Alternate Currencies for a customer-/v2/pointsLedger/getCustomerLedgerInfo?identifierName=id&identifierValue=423725119&source=INSTORE&includeAlternateCurrencies=trueor/v2/pointsLedger/getCustomerLedgerInfo?identifierName=id&identifierValue=423725119&source=INSTORE&alternateCurrencyNames=acNjnkvfgfdeun

```
/v2/pointsLedger/getCustomerLedgerInfo?identifierName=id&identifierValue=423725119&source=INSTORE&includeAlternateCurrencies=true
```

```
/v2/pointsLedger/getCustomerLedgerInfo?identifierName=id&identifierValue=423725119&source=INSTORE&alternateCurrencyNames=acNjnkvfgfdeun
```

# Query parameters (Customer)

You can use the below query parameters and retrieve points ledger entries of a customer.

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| identifierName* | Enum | Identifier type to identify the customer. (id,email,mobile,externalId) |

| identifierValue* | String | Value of the specified identifier type of the customer. |

| source* | Enum | The source of the customer's registration. Supported values:FACEBOOK,WEB_ENGAGE,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL. |

| accountId* | Integer | For sources with multiple accounts, pass the specificaccountIdto retrieve the ledger information. |

| tillId | Integer | Get the customer’s ledger information from a specific till. To get the customer’s ledger information from multiple tills, usetillIds.Note:Provide eithertillId,tillIds,storeIdorstoreCode. Providing multiple identifiers is not supported. |

| tillIds | Integer | Get the customer’s ledger information from a list of tills.Provide the list of tills separated by commas without spacing. For example, 12345,67890. |

| storeId | Integer | Get the customer’s ledger information from a specific store using a store ID.Refer to the documentation onGet Org Entities APIto get thestoreId. |

| storeCode | String | Get the customer’s ledger information from a specific store using a store code.Refer to the documentation onGet Org Entities APIto get thestoreCode. |

| limit | Integer | Number of ledger records to display per page. For example, if the total records are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 100. |

| offset | Integer | Page number to retrieve. To view the first page, set the value to0. |

| programId | Integer | Retrieve the ledger details of a specific program. |

| isFilterBasedOnDate | Boolean | Indicates whether the date filter should be applied when fetching data. Default:True. If not specified, the API fetches the user’s entire purchase history when no start or end date is provided. |

| includeLastOneYearData | Boolean | IfTrue, the API response will include data from the last year instead of the last 90 days when onlystartDateorendDateis provided. Default:False. |

| startDate | String | Get ledger information from a specific date range. Format:YYYY-MM-DDThh:mm:ss.Notes:- The date range betweenstartDateandendDateshould not exceed 90 days. - If only one of these is provided, 90 days of data is retrieved. - IfincludeLastOneYearDataisTrue, data from the last year is retrieved. |

| endDate | String | Get ledger information up to a specific date range. Same format and restrictions asstartDate. |

| includeTillConceptEvents | Boolean | IfTrue, fetches deduction entries from tills mapped to the Program ID's Concept, even if deductions are from another program. Default:False. RequiresprogramIdwhenTrue. |

| ledgerEntryType | Enum | Specify the type of ledger entries to fetch. Supported values:CREDIT,DEBIT,OPENING_BALANCE. Default: All entry types. |

| pointCategoryType | Enum | Specify the point category type. Supported values:REGULAR,PROMISED,TRIGGER_BASED. Default: All category types. |

| includeAlternateCurrencies | Boolean | IfTrue, retrieves all alternate currencies available with the customer. |

| alternateCurrencyNames | Boolean | Filter alternate currencies by name. Pass a comma-separated list of names. SetincludeAlternateCurrenciestoFalsewhen using this. |

| excludePointCategories | Boolean | Use withincludeAlternateCurrencies=trueto include only ledger records for alternate currencies. Refer to thedocumentationfor more details. |



`id`

`email`

`mobile`

`externalId`

`FACEBOOK`

`WEB_ENGAGE`

`INSTORE`

`MARTJACK`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`ALL`

`accountId`

`tillIds`

`tillId`

`tillIds`

`storeId`

`storeCode`

[Get Org Entities API](/reference/get-org-entities)

`storeId`

[Get Org Entities API](/reference/get-org-entities)

`storeCode`

`0`

`True`

`True`

`startDate`

`endDate`

`False`

`YYYY-MM-DDThh:mm:ss`

`startDate`

`endDate`

`includeLastOneYearData`

`True`

`startDate`

`True`

`False`

`programId`

`True`

`CREDIT`

`DEBIT`

`OPENING_BALANCE`

`REGULAR`

`PROMISED`

`TRIGGER_BASED`

`True`

`includeAlternateCurrencies`

`False`

`includeAlternateCurrencies=true`

[documentation](/reference/get-ledger-information#behaviour-of-includealternatecurrencies-and-excludepointcategoriesparameters)

# Query parameters (User Group)

You can use the below query parameters and retrieve points ledger entries of a usergroup.

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| type | Enum | Type of user group entity. Supported values:USERGROUP2,FLEET. |

| identifierName* | Enum | Identifier of the group. Supported values:groupId,externalId,primaryUserId. |

| identifierValue* | String | Value of the specified identifier type for the user group. |

| source* | Enum | Source of the user group's registration. Supported values:FACEBOOK,WEB_ENGAGE,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL. |

| limit | Integer | Number of ledger records to display per page. Maximum supported limit is 100. |

| offset | Integer | Starting index for data retrieval. |

| sort | Enum | Sort order of entries by date. Supported values:ASC,DESC. |

| tillId | Integer | Get the customer’s ledger information from a specific till. To get the customer’s ledger information from multiple tills, usetillIds.Note:Provide eithertillId,tillIds,storeIdorstoreCode. Providing multiple identifiers is not supported. |

| tillIds | Integer | Get the user group’s ledger information from a list of tills. Provide the list of tills separated by commas without spacing. For example, 12345,67890. |

| storeId | Integer | Get the user group's ledger information from a specific store using a store ID.  Refer to the documentation onGet Org Entities APIto get thestoreId. |

| storeCode | String | Get the user group's ledger information from a specific store using a store code.Refer to the documentation onGet Org Entities APIto get thestoreCode. |

| alternateCurrencyNames | Boolean | Filter alternate currencies by name. Pass a comma-separated list of names. SetincludeAlternateCurrenciestoFalsewhen using this. |

| excludePointCategories | Boolean | Use withincludeAlternateCurrencies=trueto include only ledger records for alternate currencies. Refer to thedocumentationfor more details. |



`USERGROUP2`

`FLEET`

`groupId`

`externalId`

`primaryUserId`

`FACEBOOK`

`WEB_ENGAGE`

`INSTORE`

`MARTJACK`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`ALL`

`ASC`

`DESC`

`tillIds`

`tillId`

`tillIds`

`storeId`

`storeCode`

[Get Org Entities API](/reference/get-org-entities)

`storeId`

[Get Org Entities API](/reference/get-org-entities)

`storeCode`

`includeAlternateCurrencies`

`False`

`includeAlternateCurrencies=true`

[documentation](/reference/get-ledger-information#behaviour-of-includealternatecurrencies-and-excludepointcategoriesparameters)

## Behaviour of alternate currency and point category parameters

The following table details how different combinations ofincludeAlternateCurrencies,pointCategoryType, andexcludePointCategoriesthe parameters affect the API response:

`includeAlternateCurrencies`

`pointCategoryType`

`excludePointCategories`

| includeAlternateCurrencies | pointCategoryType | excludePointCategories | Behaviour |

| --- | --- | --- | --- |

| true | REGULAR,PROMISED, orTRIGGER_BASED | Not provided/false | Only points and alternate currencies entries with the provided category types are displayed. |

| true | Not provided | Not provided/false | Points and alternate currencies across all categories are displayed. |

| true | Not provided | true | Only alternate currency entries are displayed. |

| true | REGULAR | true | Only alternate currency entries are displayed;pointCategoryTypeis ignored whenexcludePointCategories=true. |

| false | Not provided | Not provided/false | Only entries for points across all categories are displayed. |

| false | REGULAR,PROMISED, orTRIGGER_BASED | Not provided/false | Only entries matching the provided point category types are displayed, excluding alternate currencies. |



`includeAlternateCurrencies`

`pointCategoryType`

`excludePointCategories`

`true`

`REGULAR`

`PROMISED`

`TRIGGER_BASED`

`false`

`true`

`false`

`true`

`true`

`true`

`REGULAR`

`true`

`pointCategoryType`

`excludePointCategories=true`

`false`

`false`

`false`

`REGULAR`

`PROMISED`

`TRIGGER_BASED`

`false`

# Response parameter (Customer and User Group)

| Parameter | Data Type | Description |

| --- | --- | --- |

| customerDetails | Object | Contains information on the customer. |

| - firstName | String | Registered first name of the customer. Character limit: 100 characters |

| - lastName | String | Registered last name of the customer. Character limit: 100 characters |

| - userId | Integer | Unique ID of the customer. |

| - entityType | Enum | Type of entity. Supported values:CUSTOMER,USERGROUP2, FLEET |

| ledgerDetails | Object | Details on the ledger record. |

| - pageNumber | Integer | Current page number of the ledger. |

| - pageSize | Integer | Current page size of the ledger. |

| - totalEntries | Integer | Total number of entries in the ledger. |

| - pageCount | Integer | Total number of pages in the ledger. |

| ledgerEntries | Object | Contains information on the ledger entry. |

| - eventLogId | Integer | Unique ID of the event that is triggered. |

| - eventName | Enum | Name of the event. Supported values:GenericEvent,TransactionAdd,TransactionUpdate,TargetCompleted,PointsRedemption,VoucherRedemption,DelayedAccrual,PointsTransfer,PointsRedemptionReversal,CustomerRegistration,CustomerUpdate.Refer to the documentation onevent notificationsfor more details. |

| - customerId | Integer | Unique ID of the customer who triggered the event. |

| - ledgerCreatedDate | String | Date when the ledger entry was created inYYYY-MM-DD HH:MM:SS.sformat. |

| - customerDetails | Object | Contains information on the customer within a user group who triggered the event. The value is null if not a user group. |

| -- firstName | String | Registered first name of the customer in the user group. Character limit: 100 characters |

| -- lastName | String | Registered last name of the customer in the user group. Character limit: 100 characters |

| -- identifier | Object | Contains information on the identifiers of a customer in the user group. |

| --- type | Enum | Type of identifier for the customer in the user group. Supported values:email,mobile. |

| --- value | String | Registered identifier of the customer in the user group based on thetype. Character limit for email: 255 characters. |

| --- role | String | Role of the customer in the user group. For example, a company enrolled in a fleet loyalty program can have roles such asowner,associate,driver. |

| -- userId | String | Unique ID of the customer in the user group who triggered the event. |

| - entryDetails | Object | Contains information on the ledger entry. |

| -- ledgerEntryType | Enum | Type of ledger entry.Supported values:OPENING_BALANCE,CREDIT,DEBITRefer to the documentation onpoints liabilityfor more details. |

| -- points | Float | Number of points transacted. |

| -- pointsCategory | String | Category of points transacted.Supported values:Main(redeemable account),DelayedAccrualPointCategory(promised points),ExternalTriggerBasedPointCategory(points awarded based on external events or triggers.).Refer to the documentation onpointsfor more information. |

| -- programName | String | Name of the program where the event occurred. Character limit: 255 characters |

| -- programId | Integer | Unique ID of the program where the event occurred. |

| - netPointsOnEvent | Float | Net amount of points transacted. |

| -netAlternateCurrenciesOnEvent | Object | Object containing details of alternate currencies transacted. |

| --"name of alternate currency" | Float | Net amount of alternate currencies transacted. The parameter is the unique name of the alternate currency for the organsiation. |

| - transactionDetails | Object | Contains information on the transactions that occurred. |

| -- transactionId | Integer | Unique ID of the transaction that is generated after a transaction is completed. |

| -- transactionNumber | String | Unique reference number for a transaction. This can be used to reference a transaction for a return. |

| -- date | String | Date of the transaction inYYYY-MM-DD HH:MM:SS.sformat. |

| -- amount | Float | The total amount that was transacted, after all adjustments such as discounts or taxes. |

| -- grossBillAmount | Float | Total value of the transaction before any adjustments like discounts or taxes are applied. |

| -- source | String | Source where the transaction occurred.Supported values:FACEBOOK,WEB_ENGAGE,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL. |

| - store | String | Unique name of the store where the transaction occurred. |

| - storeCode | String | Unique code of the store where the transaction occurred. |

| - tillCode | String | Till code of the POS machine where the transaction occurred. |

| - eventDetails | Object | Contains details about the triggered event and the promotion associated with it.Promotion details are included for TargetCompleted, Behavioural Events and Import type events |

| -- eventDisplayName | String | Unique name of the event that is triggered. |

| -- promotionName | String | Name of the promotion. The character limit for the name is 255 characters. |

| -- promotionDescription | String | Description of the promotion. The character limit for the description is 255 characters. |

| -- promotionIdentifier | String | Unique external identifier of the promotion that is configured for the program. |

| -- promotionId | Integer | Unique ID of the promotion. |

| -- eventDate | String | Date when the event is triggered inYYYY-MM-DD HH:MM:SS.sformat. |

| - sourceProgramId | Integer | Unique ID of the source program for the ledger entry. |

| - sourceProgramName | String | Unique name of the source program for the ledger entry. |

| - orgId | Integer | Unique ID of the organisation. |

| warnings | Object | Warnings, if any. |



`CUSTOMER`

`USERGROUP2, FLEET`

`GenericEvent`

`TransactionAdd`

`TransactionUpdate`

`TargetCompleted`

`PointsRedemption`

`VoucherRedemption`

`DelayedAccrual`

`PointsTransfer`

`PointsRedemptionReversal`

`CustomerRegistration`

`CustomerUpdate`

[event notifications](/docs/configure_event_notification)

`YYYY-MM-DD HH:MM:SS.s`

`email`

`mobile`

`type`

`owner`

`associate`

`driver.`

`OPENING_BALANCE`

`CREDIT`

`DEBIT`

[points liability](/docs/points-2#points-liability-ledger)

`Main`

`DelayedAccrualPointCategory`

`ExternalTriggerBasedPointCategory`

[points](/docs/points)

`YYYY-MM-DD HH:MM:SS.s`

`FACEBOOK`

`WEB_ENGAGE`

`INSTORE`

`MARTJACK`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`ALL`

`YYYY-MM-DD HH:MM:SS.s`

```
{
  "ledgerDetails": {
    "pageNumber": 0,
    "pageSize": 10,
    "totalEntries": 2,
    "pageCount": 1
  },
  "ledgerEntries": [
    {
      "eventLogId": 508308379,
      "eventName": "AllocateGoodwillPoints",
      "customerId": -2860,
      "ledgerCreatedDate": "2023-06-21 13:34:16.0",
      "customerDetails": null,
      "entryDetails": [
        {
          "ledgerEntryType": "CREDIT",
          "points": "350.000",
          "pointsCategory": "Main",
          "programName": "Default Program",
          "programId": 469
        }
      ],
      "netPointsOnEvent": "350.000",
      "transactionDetails": {},
      "store": "test",
      "storeCode": "teststore",
      "tillCode": "neestoretillssnee23",
      "eventDetails": {
        "reason": "POINTS_ISSUE"
      }
    },
    {
      "eventLogId": 508308319,
      "eventName": "AllocateGoodwillPoints",
      "customerId": -2860,
      "ledgerCreatedDate": "2023-06-21 13:32:44.0",
      "customerDetails": null,
      "entryDetails": [
        {
          "ledgerEntryType": "CREDIT",
          "points": "100.000",
          "pointsCategory": "Main",
          "programName": "Default Program",
          "programId": 469
        }
      ],
      "netPointsOnEvent": "100.000",
      "transactionDetails": {},
      "store": "test",
      "storeCode": "teststore",
      "tillCode": "neestoretillssnee23",
      "eventDetails": {
        "reason": "POINTS_ISSUE"
      }
    }
  ],
  "warnings": []
}
```

```
{
  "ledgerDetails": {
    "pageNumber": 0,
    "pageSize": 10,
    "totalEntries": 2,
    "pageCount": 1
  },
  "ledgerEntries": [
    {
      "eventLogId": 508308379,
      "eventName": "AllocateGoodwillPoints",
      "customerId": -2860,
      "ledgerCreatedDate": "2023-06-21 13:34:16.0",
      "customerDetails": null,
      "entryDetails": [
        {
          "ledgerEntryType": "CREDIT",
          "points": "350.000",
          "pointsCategory": "Main",
          "programName": "Default Program",
          "programId": 469
        }
      ],
      "netPointsOnEvent": "350.000",
      "transactionDetails": {},
      "store": "test",
      "storeCode": "teststore",
      "tillCode": "neestoretillssnee23",
      "eventDetails": {
        "reason": "POINTS_ISSUE"
      }
    },
    {
      "eventLogId": 508308319,
      "eventName": "AllocateGoodwillPoints",
      "customerId": -2860,
      "ledgerCreatedDate": "2023-06-21 13:32:44.0",
      "customerDetails": null,
      "entryDetails": [
        {
          "ledgerEntryType": "CREDIT",
          "points": "100.000",
          "pointsCategory": "Main",
          "programName": "Default Program",
          "programId": 469
        }
      ],
      "netPointsOnEvent": "100.000",
      "transactionDetails": {},
      "store": "test",
      "storeCode": "teststore",
      "tillCode": "neestoretillssnee23",
      "eventDetails": {
        "reason": "POINTS_ISSUE"
      }
    }
  ],
  "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "huhu",
        "lastName": "supplementary1",
        "userId": 345843428,
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 12379266,
            "eventName": "TargetCompleted",
            "customerId": 345843428,
            "ledgerCreatedDate": "2024-06-19 11:58:07.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DefaultProgram",
                    "programId": 890
                }
            ],
            "netPointsOnEvent": "100.000",
            "transactionDetails": {},
            "store": "tillhuhu",
            "storeCode": "tillhuhu",
            "tillCode": "tillhuhu",
            "eventDetails": {
                "eventDisplayName": "TargetCompletePromos",
                "promotionName": "TargetCompletePromos",
                "promotionDescription": "TargetCompletePromos",
                "promotionIdentifier": "7c73ef03-5745-4d82-b089-aebefa53d10d",
                "promotionId": 1120363,
                "eventDate": "2024-06-19 11:57:37.0"
            },
            "sourceProgramId": 890,
            "sourceProgramName": "DefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "huhu",
        "lastName": "supplementary1",
        "userId": 345843428,
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 12379266,
            "eventName": "TargetCompleted",
            "customerId": 345843428,
            "ledgerCreatedDate": "2024-06-19 11:58:07.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DefaultProgram",
                    "programId": 890
                }
            ],
            "netPointsOnEvent": "100.000",
            "transactionDetails": {},
            "store": "tillhuhu",
            "storeCode": "tillhuhu",
            "tillCode": "tillhuhu",
            "eventDetails": {
                "eventDisplayName": "TargetCompletePromos",
                "promotionName": "TargetCompletePromos",
                "promotionDescription": "TargetCompletePromos",
                "promotionIdentifier": "7c73ef03-5745-4d82-b089-aebefa53d10d",
                "promotionId": 1120363,
                "eventDate": "2024-06-19 11:57:37.0"
            },
            "sourceProgramId": 890,
            "sourceProgramName": "DefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 3,
        "totalEntries": 64,
        "pageCount": 22
    },
    "ledgerEntries": [
        {
            "eventLogId": 616394199,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-30 07:38:34.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "20000.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "20000.000"
            },
            "transactionDetails": {
                "transactionId": 881425574,
                "transactionNumber": "RET101",
                "date": "2025-01-30 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-30 00:00:00.0"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": null
        },
        {
            "eventLogId": 616394145,
            "eventName": "ReturnBill",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-30 07:37:19.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10909.09",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "0",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "-10909.090"
            },
            "transactionDetails": {
                "transactionId": 881425422,
                "transactionNumber": "BILL100",
                "date": "2025-01-30 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-30 12:00:00.0"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": null
        },
        {
            "eventLogId": 616394144,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-30 07:37:18.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "20000.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "20000.000"
            },
            "transactionDetails": {
                "transactionId": 881425544,
                "transactionNumber": "RET100",
                "date": "2025-01-30 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-30 00:00:00.0"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 3,
        "totalEntries": 64,
        "pageCount": 22
    },
    "ledgerEntries": [
        {
            "eventLogId": 616394199,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-30 07:38:34.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "20000.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "20000.000"
            },
            "transactionDetails": {
                "transactionId": 881425574,
                "transactionNumber": "RET101",
                "date": "2025-01-30 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-30 00:00:00.0"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": null
        },
        {
            "eventLogId": 616394145,
            "eventName": "ReturnBill",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-30 07:37:19.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10909.09",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "0",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "-10909.090"
            },
            "transactionDetails": {
                "transactionId": 881425422,
                "transactionNumber": "BILL100",
                "date": "2025-01-30 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-30 12:00:00.0"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": null
        },
        {
            "eventLogId": 616394144,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-30 07:37:18.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "20000.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "20000.000"
            },
            "transactionDetails": {
                "transactionId": 881425544,
                "transactionNumber": "RET100",
                "date": "2025-01-30 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-30 00:00:00.0"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "Kamal",
        "lastName": "H",
        "userId": 170940055,
        "externalId": "000000043488",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 569437706,
            "eventName": "CustomerUpdate",
            "customerId": 170940055,
            "ledgerCreatedDate": "2024-04-25 14:34:52.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "Main",
                    "programName": "Default Program",
                    "programId": 469,
                    "alternateCurrencyName": "Stars"
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "Main",
                    "programName": "Default Program",
                    "programId": 469,
                    "alternateCurrencyName": "Coins"
                }
            ],
            "netPointsOnEvent": "0.000",
            "transactionDetails": {},
            "store": "demostorebukl Mobile",
            "storeCode": "demostorebukl",
            "tillCode": "demostorebukl.1",
            "eventDetails": {},
            "sourceProgramId": 805,
            "sourceProgramName": "Seven Entertainment",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "Kamal",
        "lastName": "H",
        "userId": 170940055,
        "externalId": "000000043488",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 569437706,
            "eventName": "CustomerUpdate",
            "customerId": 170940055,
            "ledgerCreatedDate": "2024-04-25 14:34:52.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "Main",
                    "programName": "Default Program",
                    "programId": 469,
                    "alternateCurrencyName": "Stars"
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "Main",
                    "programName": "Default Program",
                    "programId": 469,
                    "alternateCurrencyName": "Coins"
                }
            ],
            "netPointsOnEvent": "0.000",
            "transactionDetails": {},
            "store": "demostorebukl Mobile",
            "storeCode": "demostorebukl",
            "tillCode": "demostorebukl.1",
            "eventDetails": {},
            "sourceProgramId": 805,
            "sourceProgramName": "Seven Entertainment",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 2,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 605981603,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:57.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577676,
                "transactionNumber": "Transaction5",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605981588,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:45.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577668,
                "transactionNumber": "Transaction4",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 2,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 605981603,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:57.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577676,
                "transactionNumber": "Transaction5",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605981588,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:45.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577668,
                "transactionNumber": "Transaction4",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000.0,
                "grossBillAmount": 1000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 19,
        "pageCount": 2
    },
    "ledgerEntries": [
        {
            "eventLogId": 605981603,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:57.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577676,
                "transactionNumber": "Transaction5",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605981588,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:45.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577668,
                "transactionNumber": "Transaction4",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605869443,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:17:02.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530176,
                "transactionNumber": "txn-01",
                "date": "2025-01-07 10:45:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:45:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605869373,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:12:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530167,
                "transactionNumber": "1736226743",
                "date": "2025-01-07 10:40:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:40:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605476079,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:59:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "5000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "5000.000",
            "transactionDetails": {
                "transactionId": 880350461,
                "transactionNumber": "num-1234573",
                "date": "2025-01-02 13:46:12.0",
                "amount": 2500,
                "grossBillAmount": 2500,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475852,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:48:54.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350400,
                "transactionNumber": "num-1234572",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475815,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:46:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350390,
                "transactionNumber": "num-1234571",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376466,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:43:07.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880304800,
                "transactionNumber": "num-1234570",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376309,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:41:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "155.50",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "155.500",
            "transactionDetails": {
                "transactionId": 880304718,
                "transactionNumber": "num-1234569",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664762,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:11.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:11.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 19,
        "pageCount": 2
    },
    "ledgerEntries": [
        {
            "eventLogId": 605981603,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:57.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577676,
                "transactionNumber": "Transaction5",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605981588,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-08 11:07:45.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "transactionDetails": {
                "transactionId": 880577668,
                "transactionNumber": "Transaction4",
                "date": "2025-01-07 00:00:00.0",
                "amount": 5000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "neeraj.doc",
            "eventDetails": {
                "eventDate": "2025-01-07 00:00:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605869443,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:17:02.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530176,
                "transactionNumber": "txn-01",
                "date": "2025-01-07 10:45:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:45:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605869373,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:12:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530167,
                "transactionNumber": "1736226743",
                "date": "2025-01-07 10:40:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:40:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605476079,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:59:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "5000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "5000.000",
            "transactionDetails": {
                "transactionId": 880350461,
                "transactionNumber": "num-1234573",
                "date": "2025-01-02 13:46:12.0",
                "amount": 2500,
                "grossBillAmount": 2500,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475852,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:48:54.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350400,
                "transactionNumber": "num-1234572",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475815,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:46:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350390,
                "transactionNumber": "num-1234571",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376466,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:43:07.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880304800,
                "transactionNumber": "num-1234570",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376309,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:41:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "155.50",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "155.500",
            "transactionDetails": {
                "transactionId": 880304718,
                "transactionNumber": "num-1234569",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664762,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:11.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:11.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 17,
        "pageCount": 2
    },
    "ledgerEntries": [
        {
            "eventLogId": 605869443,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:17:02.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530176,
                "transactionNumber": "txn-01",
                "date": "2025-01-07 10:45:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:45:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605869373,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:12:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530167,
                "transactionNumber": "1736226743",
                "date": "2025-01-07 10:40:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:40:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605476079,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:59:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "5000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "5000.000",
            "transactionDetails": {
                "transactionId": 880350461,
                "transactionNumber": "num-1234573",
                "date": "2025-01-02 13:46:12.0",
                "amount": 2500,
                "grossBillAmount": 2500,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475852,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:48:54.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350400,
                "transactionNumber": "num-1234572",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475815,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:46:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350390,
                "transactionNumber": "num-1234571",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376466,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:43:07.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880304800,
                "transactionNumber": "num-1234570",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376309,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:41:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "155.50",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "155.500",
            "transactionDetails": {
                "transactionId": 880304718,
                "transactionNumber": "num-1234569",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664762,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:11.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:11.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664759,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:08.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:08.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664753,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:01.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:01.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 17,
        "pageCount": 2
    },
    "ledgerEntries": [
        {
            "eventLogId": 605869443,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:17:02.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530176,
                "transactionNumber": "txn-01",
                "date": "2025-01-07 10:45:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:45:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605869373,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-07 05:12:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880530167,
                "transactionNumber": "1736226743",
                "date": "2025-01-07 10:40:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-07 10:40:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605476079,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:59:21.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "5000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "5000.000",
            "transactionDetails": {
                "transactionId": 880350461,
                "transactionNumber": "num-1234573",
                "date": "2025-01-02 13:46:12.0",
                "amount": 2500,
                "grossBillAmount": 2500,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475852,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:48:54.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350400,
                "transactionNumber": "num-1234572",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605475815,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-03 06:46:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880350390,
                "transactionNumber": "num-1234571",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376466,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:43:07.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "2000.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "2000.000",
            "transactionDetails": {
                "transactionId": 880304800,
                "transactionNumber": "num-1234570",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 605376309,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2025-01-02 10:41:01.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "155.50",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "155.500",
            "transactionDetails": {
                "transactionId": 880304718,
                "transactionNumber": "num-1234569",
                "date": "2025-01-02 13:46:12.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-01-02 13:46:12.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664762,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:11.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:11.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664759,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:08.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:08.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664753,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:01.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:01.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 10,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 603664762,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:11.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:11.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664759,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:08.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:08.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664753,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:01.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:01.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602851749,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:49:30.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "23.34",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "23.340",
            "transactionDetails": {
                "transactionId": 879297556,
                "transactionNumber": "1733899770",
                "date": "2024-12-11 06:49:31.0",
                "amount": 150.12,
                "grossBillAmount": 150.12515,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:49:30.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602851518,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:38:51.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "46.69",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "46.688",
            "transactionDetails": {
                "transactionId": 879297472,
                "transactionNumber": "1733899131",
                "date": "2024-12-11 06:38:52.0",
                "amount": 150.12,
                "grossBillAmount": 15000.12515,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:38:51.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602850907,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:31:00.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "4665.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "4665.000",
            "transactionDetails": {
                "transactionId": 879297038,
                "transactionNumber": "1733898660",
                "date": "2024-12-11 06:31:00.0",
                "amount": 15000,
                "grossBillAmount": 15000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:31:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602850504,
            "eventName": "ReturnBill",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:29:14.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "311.03",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-311.034",
            "transactionDetails": {
                "transactionId": 879296586,
                "transactionNumber": "1733898428",
                "date": "2024-12-11 06:27:08.0",
                "amount": 1000.11,
                "grossBillAmount": 1000.11,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:29:14.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602850229,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:27:08.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "311.03",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "311.034",
            "transactionDetails": {
                "transactionId": 879296586,
                "transactionNumber": "1733898428",
                "date": "2024-12-11 06:27:08.0",
                "amount": 1000.11,
                "grossBillAmount": 1000.11,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:27:08.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602849630,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:22:37.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "311.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "DelayedAccrualPointCategory",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "ExternalTriggerBasedPointCategory",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "311.000",
            "transactionDetails": {
                "transactionId": 879296042,
                "transactionNumber": "1733898157",
                "date": "2024-12-11 06:22:37.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:22:37.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602847320,
            "eventName": "CustomerRegistration",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:04:22.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "0.000",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:04:22.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

```
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 564332013,
        "externalId": "69420",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 10,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 603664762,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:11.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:11.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664759,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:08.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:08.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 603664753,
            "eventName": "ManualPointsAdjustment",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-18 11:17:01.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "10.54",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-10.540",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-18 11:17:01.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602851749,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:49:30.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "23.34",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "23.340",
            "transactionDetails": {
                "transactionId": 879297556,
                "transactionNumber": "1733899770",
                "date": "2024-12-11 06:49:31.0",
                "amount": 150.12,
                "grossBillAmount": 150.12515,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:49:30.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602851518,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:38:51.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "46.69",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "46.688",
            "transactionDetails": {
                "transactionId": 879297472,
                "transactionNumber": "1733899131",
                "date": "2024-12-11 06:38:52.0",
                "amount": 150.12,
                "grossBillAmount": 15000.12515,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:38:51.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602850907,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:31:00.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "4665.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "4665.000",
            "transactionDetails": {
                "transactionId": 879297038,
                "transactionNumber": "1733898660",
                "date": "2024-12-11 06:31:00.0",
                "amount": 15000,
                "grossBillAmount": 15000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:31:00.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602850504,
            "eventName": "ReturnBill",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:29:14.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "311.03",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-311.034",
            "transactionDetails": {
                "transactionId": 879296586,
                "transactionNumber": "1733898428",
                "date": "2024-12-11 06:27:08.0",
                "amount": 1000.11,
                "grossBillAmount": 1000.11,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:29:14.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602850229,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:27:08.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "311.03",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "311.034",
            "transactionDetails": {
                "transactionId": 879296586,
                "transactionNumber": "1733898428",
                "date": "2024-12-11 06:27:08.0",
                "amount": 1000.11,
                "grossBillAmount": 1000.11,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:27:08.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602849630,
            "eventName": "TransactionAdd",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:22:37.0",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "311.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "DelayedAccrualPointCategory",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "ExternalTriggerBasedPointCategory",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "311.000",
            "transactionDetails": {
                "transactionId": 879296042,
                "transactionNumber": "1733898157",
                "date": "2024-12-11 06:22:37.0",
                "amount": 1000,
                "grossBillAmount": 1000,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:22:37.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        },
        {
            "eventLogId": 602847320,
            "eventName": "CustomerRegistration",
            "customerId": 564332013,
            "ledgerCreatedDate": "2024-12-11 06:04:22.0",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.00",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "0.000",
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2024-12-11 06:04:22.0"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": null
        }
    ],
    "warnings": []
}
```

# API error codes

| Error Code | Description | Reason |

| --- | --- | --- |

| 11012 | Invalid userId passed in request | The userId is wrong. |

| 8013 | Lookup, Invalid identifier passed | The identifier type is wrong or invalid. |

| 11029 | Limit cannot be greater than 100 | The page limit is higher than the supported limit. |

| 11003 | There are no ledger entries present for the given parameters. Try removing parameters to widen the search | The offset value is greater than the total number of pages. |

| 11007 | Invalid ledgerEntryType passed in request | The type of ledger entry is wrong or invalid. |

| 11008 | Invalid pointCategoryType passed in request | The type of point category is wrong or invalid. |

| 9003 | No CPS entry for the given points type. | No matching record found in the Customer Points Summary (CPS) table for that specific combination of customer and points type. Verify the customer ID is correct and confirm the points type is valid. Contact the Capillary support team if the issue persists. |

| 11028 | Multiple input parameters set. Please provide only one of the following: tillId, tillIds, storeCode or storeId | More than one of the parameters (tillId,tillIds,storeCodeorstoreId) are passed together. |

| 11027 | Invalid tillIds: [123] | Till ID provided is invalid or wrong. |

| 11025 | Till id format exception:For input string: \"abc\" | Till ID format is invalid |

| 11026 | No tills found for store with store id: 123 | Store ID provided is invalid or wrong. |

| 11026 | No tills found for store with store code: abc | Store code provided is invalid or wrong. |



`tillId`

`tillIds`

`storeCode`

`storeId`

`Try It!`