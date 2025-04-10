# Get all badge custom fieldsget

This API allows you to retrieve all custom field details for the org.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v1/badges/customField |

| HTTP method | GET |

| Pagination supported | Yes |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customField/65bb3daffd3e324f2cac883c

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customField/65bb3daffd3e324f2cac883c
```

# Request path parameter

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| customFieldId* | String | Unique ID of the custom field. |



# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| size | Integer | Size of the page |

| page | Integer | The maximum number of results that should be displayed. |

| order | Enum | Order of the results in ascending or decending order. Supported values: ASC, DESC |

| sortOn | Enum | Sorting based on LAST_UPDATED_DATE. Supported value: LAST_UPDATED_DATE. |

| isActive | Boolean | Filter to sort active custom field. |



# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id | String | The unique identifier of the custom field. |

| orgId | Integer | The org ID the custom field belongs to. |

| name | String | The name of the custom field. |

| isMandatory | Boolean | Indicates if the custom field is mandatory. |

| defaultValue | String | The default value of the custom field. |

| isActive | Boolean | Indicates if the custom field is active. |

| dataType | Enum | The data type of the custom field's value. Supported values: STRING, INTEGER, BOOLEAN, DATE. |

| createdOn | Date | The timestamp when the custom field was created. |

| createdBy | Integer | The identifier of the user who created the custom field. |

| lastUpdatedOn | Date | The timestamp when the custom field was last updated. |

| lastUpdatedBy | Integer | The identifier of the user who last updated the custom field. |



```
{
    "data": {
        "customFieldROList": [
            {
                "id": "65bb3d6afd3e324f2cac8839",
                "orgId": 100606,
                "name": "CF1",
                "isMandatory": true,
                "defaultValue": "CF1 value",
                "isActive": true,
                "dataType": "STRING",
                "createdOn": 1706769770.082000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769770.082000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb3d8afd3e324f2cac883a",
                "orgId": 100606,
                "name": "CF2 INTEGER",
                "isMandatory": true,
                "defaultValue": "1",
                "isActive": true,
                "dataType": "INTEGER",
                "createdOn": 1706769802.754000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769802.754000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb3d9bfd3e324f2cac883b",
                "orgId": 100606,
                "name": "CF3 boolean",
                "isMandatory": true,
                "defaultValue": "true",
                "isActive": true,
                "dataType": "BOOLEAN",
                "createdOn": 1706769819.236000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769819.236000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb3daffd3e324f2cac883c",
                "orgId": 100606,
                "name": "CF3 date",
                "isMandatory": true,
                "defaultValue": "2001-01-18T09:09:09Z",
                "isActive": true,
                "dataType": "DATE",
                "createdOn": 1706769839.918000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769839.918000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65cda4fda888ce70acd29378",
                "orgId": 100606,
                "name": "CF15 date",
                "isMandatory": false,
                "defaultValue": "",
                "isActive": true,
                "dataType": "STRING",
                "createdOn": 1707975933.629000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1707975933.629000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb446bfd3e324f2cac8871",
                "orgId": 100606,
                "name": "CF31 date",
                "isMandatory": false,
                "defaultValue": "cgvhjb",
                "isActive": true,
                "dataType": "STRING",
                "createdOn": 1706771563.483000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1707979249.788000000,
                "lastUpdatedBy": 75097962
            }
        ],
        "pagination": {
            "page": 0,
            "size": 50,
            "total": 6,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "customFieldROList": [
            {
                "id": "65bb3d6afd3e324f2cac8839",
                "orgId": 100606,
                "name": "CF1",
                "isMandatory": true,
                "defaultValue": "CF1 value",
                "isActive": true,
                "dataType": "STRING",
                "createdOn": 1706769770.082000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769770.082000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb3d8afd3e324f2cac883a",
                "orgId": 100606,
                "name": "CF2 INTEGER",
                "isMandatory": true,
                "defaultValue": "1",
                "isActive": true,
                "dataType": "INTEGER",
                "createdOn": 1706769802.754000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769802.754000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb3d9bfd3e324f2cac883b",
                "orgId": 100606,
                "name": "CF3 boolean",
                "isMandatory": true,
                "defaultValue": "true",
                "isActive": true,
                "dataType": "BOOLEAN",
                "createdOn": 1706769819.236000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769819.236000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb3daffd3e324f2cac883c",
                "orgId": 100606,
                "name": "CF3 date",
                "isMandatory": true,
                "defaultValue": "2001-01-18T09:09:09Z",
                "isActive": true,
                "dataType": "DATE",
                "createdOn": 1706769839.918000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1706769839.918000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65cda4fda888ce70acd29378",
                "orgId": 100606,
                "name": "CF15 date",
                "isMandatory": false,
                "defaultValue": "",
                "isActive": true,
                "dataType": "STRING",
                "createdOn": 1707975933.629000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1707975933.629000000,
                "lastUpdatedBy": 75097962
            },
            {
                "id": "65bb446bfd3e324f2cac8871",
                "orgId": 100606,
                "name": "CF31 date",
                "isMandatory": false,
                "defaultValue": "cgvhjb",
                "isActive": true,
                "dataType": "STRING",
                "createdOn": 1706771563.483000000,
                "createdBy": 75097962,
                "lastUpdatedOn": 1707979249.788000000,
                "lastUpdatedBy": 75097962
            }
        ],
        "pagination": {
            "page": 0,
            "size": 50,
            "total": 6,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`