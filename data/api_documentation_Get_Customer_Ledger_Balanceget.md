# Get Customer Ledger Balanceget

# Query parameters

| Parameters | Description |

| --- | --- |

| identifierName | Identifier type to identify the customer. |

| identifierValue | Value of the specified identifier type of the customer. |

| source | Source in which the identifier is available. |

| accountId | For sources with multiple accounts, pass the specific accountId in which the identifier is registered. |

| tillId | Pass the unique till ID of the org. |

| limit | Number of results to retrieve. Max value supported is also 10. |

| offset | Number of pages to be ignored from the top (page number). |

| endDate | Get the closing balance of a specific date. Pass the end date in YYYY-MM-DDThh:mm:ss format. |

| includeTillConceptEvents | Fetches the deduction entries that were triggered at the tills mapped to the Concept of the Program ID even if the deductions are from a different program. |

| ledgerEntryType | Specify the type of ledger entries you want to fetch. By default, it fetches all the ledger entry types. |

| pointCategoryType | Specify the point category type for which you want to fetch ledger details. By default, it fetches all the points category details. |

| alternateCurrencyNames | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies. |

| includeAlternateCurrencies | Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer. |



# Response parameter

| Parameter | Description |

| --- | --- |

| customerDetails.userId | The unique identifier for the user. |

| customerDetails.externalId | External reference ID for the customer. |

| customerDetails.entityType | The type of entity. |

| ledgerDetails.pageNumber | Current page number in the paginated response. |

| ledgerDetails.pageSize | Number of entries per page. |

| ledgerDetails.totalEntries | Total number of entries across all pages. |

| ledgerDetails.pageCount | Total number of pages in the paginated response. |

| ledgerDetails.ledgerClosingBalance | An array of ledger closing balances. |

| ledgerClosingBalance.pointsCategory | Category of the points. |

| ledgerClosingBalance.programName | Name of the loyalty program. |

| ledgerClosingBalance.programId | Unique identifier for the loyalty program. |

| ledgerClosingBalance.closingBalance | Closing balance of points for the specified program and category. If alternate currency parameters are passed in the query parameter, it retrives Alternate currency name and category details |

| warnings | List of warnings, if any. |



`Try It!`