# Points Ledger

Points as incentives are treated as currency within an org and its affiliates. The multitude of credits, debits, and adjustments impact the pool of points in the customer account. When points issued from different programs of the org can be redeemed across the org units or loyalty programs, it is important to understand the debit and credit history. Ledger APIs help you retrieve the points debit and credit details across the programs of the org.

## Status Codes

| Code | Description |

| --- | --- |

| 11001 | This combination of request parameters is not supported. Try removing parameters. |

| 11002 | This customer has pending events, hence the ledger may be incomplete. Please retry after some time to get a complete ledger |

| 11003 | There are no ledger entries present for the given parameters. Try removing parameters to widen the search |

| 11004 | Invalid tillId passed in request |

| 11005 | Invalid programId passed in request |

| 11006 | Limit cannot be greater than 10 |

| 11007 | Invalid ledgerEntryType passed in request |

| 11008 | Invalid pointCategoryType passed in request |

| 11009 | Startdate is after endDate |

| 11010 | Time interval between startDate and endDate is greater than 60 days |

| 11011 | The date format used is not supported. Enter the date in (yyyy-MM-ddTHH:mm:ss) format |

| 11012 | Invalid userId passed in request |

| 11013 | identifierName, identifierValue, source can not be empty |

| 11014 | Event name not found :{0},Requested cannot be processed. Max 10events are allowed in params. |

| 11015 | Error setting event detail |

| 11016 | Event detail not found for event log id {0} |

| 11017 | Event id format exception:{0} |

| 11018 | No users found for provided roles |

| 11019 | Source valuecapturing status is disabled. Please enable it from org settings page |



### EMF Errors

| Code | Description |

| --- | --- |

| 9003 | Error fetching points ledger data : {0} |

| 9004 | Warning while fetching ledger info : {0} |

| 9005 | Invalid alternateCurrencyNames fieldvalue |

