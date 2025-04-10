# Search APIs

> 👍NotesMake sure that you have appropriate access control configured. For more information, seeaccess group documentation.The maximum number of PREFIX criteria you can create for a Customer entity per organization is two.The maximum number of COMBINATION crtieria for an entiry per organization is five.

## 👍Notes

Notes

- Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

- The maximum number of PREFIX criteria you can create for a Customer entity per organization is two.

- The maximum number of COMBINATION crtieria for an entiry per organization is five.

# API endpoint:

{host}/api_gateway/cortex/v1/criteria

`{host}/api_gateway/cortex/v1/criteria`

# Request body parameters

| Parameter Name (Parameters marked as * are required) | Type | Description |

| --- | --- | --- |

| name* | String | Name of the search entity. |

| entityType* | enum | Type of entity being searched (TRANSACTION,CUSTOMER). |

| searchStrategyType | String | Defines the search strategy type (COMBINATION,PREFIX). |

| fieldDefinitions | Array | List of field definitions used in the search. |

| fieldDefinitions[].fieldId* | String | The field to search on. For Customer, the supported standard fields are:firstName, lastName, email, mobile, externalId, and fullName.For Transaction, the supported fields are:outlierStatus, billDate, billNumber, and storecode (additional field). |

| fieldDefinitions[].fieldAlias | String | The alias or display name of the field |

| fieldDefinitions[].fieldType* | enum | Type of field (INDEXED,FILTERABLE).If a field is INDEXED, the field need to be defined to get the results.If the field is defined as  FILTERABLE, then those are considered optional while searching.For example, if fields A and B both are Indexed, then both A and B need to be passed.If A is indexed and B is filterable then A alone will give results and A+B will give another set of results.The maximum number of allowed filterable fields is five and the maximum number of indexable fields is six. |

| fieldDefinitions[].dataSourceDetails.fieldReference* | String | Applicable for COMBINATION criteria when using custom fields or extended fields to search. Ex: extendedFields.ship_email, customFields.age. If you are using store code to search, use additionalFields.storecode (applicable for transaction). |

| fieldDefinitions[].dataType* | String | Data type of the field (e.g.,STRING). |

| searchDataPolicy | Object | Defines the data retention policy and expiration details for the search data. |

| searchDataPolicy.dataRetentionPolicy.unit | String | Time unit for data retention. Only DAYS is the supported unit now. |

| searchDataPolicy.dataRetentionPolicy.value | Integer | Defines how many days before the custom-defined event (e.g., "CREATE") the data will be fetched. For example, if the value is 30 and the expireDataFrom is CREATE , data will be fetched from 30 days before the creation of the transaction. By default, retention period duration is 180 days. The maximum number of days supported for transaction search is 365 days, and for customer search, it is 1826 days.Note:You need to make a bulk trigger API requestto activate this. |

| searchDataPolicy.expireDataFrom | String | Specifies the event from which the search data gets indexed. At present, only CREATE is supported. |



`name`

`entityType`

`TRANSACTION`

`CUSTOMER`

`searchStrategyType`

`COMBINATION`

`PREFIX`

`fieldDefinitions`

`fieldDefinitions[].fieldId`

```
firstName, lastName, email, mobile, externalId, and fullName
```

```
outlierStatus, billDate, billNumber, and storecode (additional field)
```

`fieldDefinitions[].fieldAlias`

`fieldDefinitions[].fieldType`

`INDEXED`

`FILTERABLE`

```
fieldDefinitions[].dataSourceDetails.fieldReference
```

`fieldDefinitions[].dataType`

`STRING`

`searchDataPolicy`

```
searchDataPolicy.dataRetentionPolicy.unit
```

```
searchDataPolicy.dataRetentionPolicy.value
```

[ake a bulk trigger API request](/reference/enable-bulk-trigger)

`searchDataPolicy.expireDataFrom`

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/criteria' \
--header 'X-CAP-API-AUTH-ORG-ID: 100737' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmpiNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=d6B6HLH6oGwJZ21oIncVwhv3KVFCQL1tV0M8y1Bz2L8-1740672713496-0.0.1.1-604800000' \
--data '{
    "name": "TransactionSearch3",
    "entityType": "TRANSACTION",
    "searchStrategyType": "COMBINATION",
    "fieldDefinitions": [
        {
            "fieldId": "billNumber",
            "fieldAlias": "billNumber",
            "fieldType": "INDEXED",
            "dataSourceDetails": {
                "fieldReference": "billNumber"
            },
            "dataType": "STRING"
        }
        
    ],
    "searchDataPolicy": {
        "dataRetentionPolicy": {
            "unit": "DAYS",
            "value": 10
        },
        "expireDataFrom": "CREATE"
    }
}'
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/criteria' \
--header 'X-CAP-API-AUTH-ORG-ID: 100737' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmpiNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=d6B6HLH6oGwJZ21oIncVwhv3KVFCQL1tV0M8y1Bz2L8-1740672713496-0.0.1.1-604800000' \
--data '{
    "name": "TransactionSearch3",
    "entityType": "TRANSACTION",
    "searchStrategyType": "COMBINATION",
    "fieldDefinitions": [
        {
            "fieldId": "billNumber",
            "fieldAlias": "billNumber",
            "fieldType": "INDEXED",
            "dataSourceDetails": {
                "fieldReference": "billNumber"
            },
            "dataType": "STRING"
        }
        
    ],
    "searchDataPolicy": {
        "dataRetentionPolicy": {
            "unit": "DAYS",
            "value": 10
        },
        "expireDataFrom": "CREATE"
    }
}'
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/criteria' \
--header 'X-CAP-API-AUTH-ORG-ID: 100737' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=d6B6HLH6oGwJZ21oIncVwhv3KVFCQL1tV0M8y1Bz2L8-1740672713496-0.0.1.1-604800000' \
--data '{
    "name": "CustomerSearch1",
    "entityType": "CUSTOMER",
    "searchStrategyType": "COMBINATION",
    "fieldDefinitions": [
        {
            "fieldId": "firstName",
            "fieldAlias": "firstName",
            "fieldType": "INDEXED",
            "dataSourceDetails": {
                "fieldReference": "firstName"
            },
            "dataType": "STRING"
        },
 {
            "fieldId": "lastName",
            "fieldAlias": "lastName",
            "fieldType": "FILTERABLE",
            "dataSourceDetails": {
                "fieldReference": "lastName"
            },
            "dataType": "STRING"
        }

        
    ],
    "searchDataPolicy": {
        "dataRetentionPolicy": {
            "unit": "DAYS",
            "value": 10
        },
        "expireDataFrom": "CREATE"
    }
}'
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/criteria' \
--header 'X-CAP-API-AUTH-ORG-ID: 100737' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=d6B6HLH6oGwJZ21oIncVwhv3KVFCQL1tV0M8y1Bz2L8-1740672713496-0.0.1.1-604800000' \
--data '{
    "name": "CustomerSearch1",
    "entityType": "CUSTOMER",
    "searchStrategyType": "COMBINATION",
    "fieldDefinitions": [
        {
            "fieldId": "firstName",
            "fieldAlias": "firstName",
            "fieldType": "INDEXED",
            "dataSourceDetails": {
                "fieldReference": "firstName"
            },
            "dataType": "STRING"
        },
 {
            "fieldId": "lastName",
            "fieldAlias": "lastName",
            "fieldType": "FILTERABLE",
            "dataSourceDetails": {
                "fieldReference": "lastName"
            },
            "dataType": "STRING"
        }

        
    ],
    "searchDataPolicy": {
        "dataRetentionPolicy": {
            "unit": "DAYS",
            "value": 10
        },
        "expireDataFrom": "CREATE"
    }
}'
```

# Response parameters

| Parameter Name | Type | Description |

| --- | --- | --- |

| data.id | String | Unique identifier for the search criteria. |

| data.orgId | Integer | Organization ID associated with the search. |

| data.name | String | Name of the search entity. |

| data.searchStrategyType | enum | Defines the search strategy type (e.g.,COMBINATION). |

| data.entityType | enum | Type of entity being searched (e.g.,TRANSACTION). |

| data.bulkJobStatus | String | Status of the bulk job (e.g.,OPEN). |

| data.fieldDefinitions | Array | List of fields that will be available by default in the response during the search. |

| data.fieldDefinitions[].fieldId | String | Unique identifier for the field. |

| data.fieldDefinitions[].fieldAlias | String | Alias name for the field. |

| data.fieldDefinitions[].fieldType | enum | Type of field (e.g.,INDEXED,FILTERABLE). |

| data.fieldDefinitions[].dataSourceDetails.fieldReference | String | Reference to the actual field in the data source. |

| data.dataFieldDefinitions[].dataType | String | Data type of the field (e.g.,STRING,DATE). |

| data.searchDataPolicy | Object | Defines policies for data retention. |

| data.searchDataPolicy.dataRetentionPolicy.unit | String | Time unit for data retention (e.g.,DAYS). |

| data.searchDataPolicy.dataRetentionPolicy.value | Integer | Number of units for data retention (e.g.,10). |

| data.searchDataPolicy.expireDataFrom | String | Defines when the data expires (e.g.,CREATE). |

| data.criteriaStatus.status | String | Status of the criteria verification (e.g.,VERIFICATION_IN_PROGRESS). |

| data.auditInfo.createdOn | String | Timestamp of when the search entity was created. |

| data.auditInfo.createdBy | Integer | User ID of the creator. |

| data.auditInfo.lastUpdatedOn | String | Timestamp of the last update. |

| data.auditInfo.lastUpdatedBy | Integer | User ID of the last updater. |

| errors | Array | List of errors encountered during processing (if any). |



`data.id`

`data.orgId`

`data.name`

`data.searchStrategyType`

`COMBINATION`

`data.entityType`

`TRANSACTION`

`data.bulkJobStatus`

`OPEN`

`data.fieldDefinitions`

`data.fieldDefinitions[].fieldId`

`data.fieldDefinitions[].fieldAlias`

`data.fieldDefinitions[].fieldType`

`INDEXED`

`FILTERABLE`

```
data.fieldDefinitions[].dataSourceDetails.fieldReference
```

`data.dataFieldDefinitions[].dataType`

`STRING`

`DATE`

`data.searchDataPolicy`

```
data.searchDataPolicy.dataRetentionPolicy.unit
```

`DAYS`

```
data.searchDataPolicy.dataRetentionPolicy.value
```

`10`

`data.searchDataPolicy.expireDataFrom`

`CREATE`

`data.criteriaStatus.status`

`VERIFICATION_IN_PROGRESS`

`data.auditInfo.createdOn`

`data.auditInfo.createdBy`

`data.auditInfo.lastUpdatedOn`

`data.auditInfo.lastUpdatedBy`

`errors`

```
{
    "data": {
        "id": "67c091299e22382d75d405bc",
        "orgId": 100737,
        "name": "TransactionSearch3",
        "searchStrategyType": "COMBINATION",
        "entityType": "TRANSACTION",
        "fieldDefinitions": [
            {
                "fieldId": "billNumber",
                "fieldAlias": "billNumber",
                "fieldType": "INDEXED",
                "dataSourceDetails": {
                    "fieldReference": "billNumber"
                },
                "dataType": "STRING"
            }
        ],
        "dataFieldDefinitions": [
            {
                "fieldId": "billNumber",
                "fieldAlias": "billNumber",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billNumber"
                },
                "dataType": "STRING"
            },
            {
                "fieldId": "billDate",
                "fieldAlias": "billDate",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billDate"
                },
                "dataType": "DATE"
            }
        ],
        "searchDataPolicy": {
            "dataRetentionPolicy": {
                "unit": "DAYS",
                "value": 10
            },
            "expireDataFrom": "CREATE"
        },
        "criteriaStatus": {
            "status": "VERIFICATION_IN_PROGRESS"
        },
        "bulkJobStatus": "OPEN",
        "auditInfo": {
            "createdOn": "2025-02-27T16:22:01.911+00:00",
            "createdBy": 75155282,
            "lastUpdatedOn": "2025-02-27T16:22:01.911+00:00",
            "lastUpdatedBy": 75155282
        }
    },
    "errors": []
}
```

```
{
    "data": {
        "id": "67c091299e22382d75d405bc",
        "orgId": 100737,
        "name": "TransactionSearch3",
        "searchStrategyType": "COMBINATION",
        "entityType": "TRANSACTION",
        "fieldDefinitions": [
            {
                "fieldId": "billNumber",
                "fieldAlias": "billNumber",
                "fieldType": "INDEXED",
                "dataSourceDetails": {
                    "fieldReference": "billNumber"
                },
                "dataType": "STRING"
            }
        ],
        "dataFieldDefinitions": [
            {
                "fieldId": "billNumber",
                "fieldAlias": "billNumber",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billNumber"
                },
                "dataType": "STRING"
            },
            {
                "fieldId": "billDate",
                "fieldAlias": "billDate",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billDate"
                },
                "dataType": "DATE"
            }
        ],
        "searchDataPolicy": {
            "dataRetentionPolicy": {
                "unit": "DAYS",
                "value": 10
            },
            "expireDataFrom": "CREATE"
        },
        "criteriaStatus": {
            "status": "VERIFICATION_IN_PROGRESS"
        },
        "bulkJobStatus": "OPEN",
        "auditInfo": {
            "createdOn": "2025-02-27T16:22:01.911+00:00",
            "createdBy": 75155282,
            "lastUpdatedOn": "2025-02-27T16:22:01.911+00:00",
            "lastUpdatedBy": 75155282
        }
    },
    "errors": []
}
```

`Try It!`