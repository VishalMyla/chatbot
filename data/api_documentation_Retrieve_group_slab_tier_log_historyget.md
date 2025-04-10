# Retrieve group slab/tier log historyget

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

{host}/v2/userGroup2/slabHistory?fleetGroupId={value}

```
{host}/v2/userGroup2/slabHistory?fleetGroupId={value}
```

# Query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| fleetGroupId | String | Defines the fleet group id. |

| startDate | Date | Filter results where transaction_date < end_date. Enter the date in ISO standard date format. |

| endDate | Date | Filter results where transaction_date < end_date. Enter the date in ISO standard date format. |

| pageSize | Integer | Defines the maximum number of results that should be displayed. This should be a positive value. |

|  |  |  |



You can then fill in the table with the relevant information based on the response you receive from executing the cURL command.

# Response parameters

| Parameter | Description |

| --- | --- |

| data | An array containing the details of the changes made to the slabs. |

| data.fromSlabNumber | The slab number before the change. |

| data.toSlabNumber | The slab number after the change. |

| data.from | The name of the slab before the change. |

| data.to | The name of the slab after the change. |

| data.changedOn | The date and time when the change occurred. |

| data.notes | Additional notes or information about the change. |

| data.tillId | The ID of the till associated with the change. |

| data.store | An object containing details about the store. |

| data.store.id | The ID of the store. |

| data.store.code | The code of the store. |

| data.store.description | The description of the store. |

| data.store.name | The name of the store. |

| data.store.type | The type of the store. |

| data.store.adminType | The administrative type of the store. |

| data.store.isOrgUnit | Indicates if the store is an organization unit. |

| data.type | The type of change (e.g., "RENEW", "UPGRADE", "DOWNGRADE"). |

| data.programId | The ID of the program associated with the change. |

| pagination | An object containing pagination information. |

| pagination.limit | The maximum number of records per page. |

| pagination.offset | The offset of the records in the current page. |

| pagination.total | The total number of records available. |

| warnings | An array containing any warning messages. |



`Try It!`