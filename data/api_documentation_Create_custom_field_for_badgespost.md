# Create custom field for badgespost

This API allows you to create a custom field for the badge.

There is no limit on the number of custom fields that can be defined at an org level for badges.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> 🚧WarningCustom field name should be unique and is case sensitive.

## 🚧Warning

Warning

Custom field name should be unique and is case sensitive.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/v1/badges/customField |

| HTTP method | POST |

| Pagination supported | No |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customField

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/customField
```

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| name* | String | The name of the custom field. |

| isMandatory | Boolean | Indicates if the custom field is mandatory. |

| defaultValue | String | The default value of the custom field. |

| dataType* | Enum | The data type of the custom field's value. Supported values: INTEGER, BOOLEAN, DATE, STRING. |



```
{
    "name": "CF15 date",
    "isMandatory": false,
    "defaultValue": "",
    "dataType": "STRING"
}
```

```
{
    "name": "CF15 date",
    "isMandatory": false,
    "defaultValue": "",
    "dataType": "STRING"
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id | String | The unique identifier of the custom field. |

| orgId | Integer | The org ID the custom field belongs to. |

| name | String | The name of the custom field. |

| isMandatory | Boolean | Indicates if the custom field is mandatory. |

| defaultValue | String | The default value of the custom field. |

| isActive | Boolean | Indicates if the custom field is active. |

| dataType | String | The data type of the custom field . |

| createdOn | Date | The timestamp when the custom field was created. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| createdBy | Date | The identifier of the user who created the custom field. |

| lastUpdatedOn | Date | The timestamp when the custom field was last updated. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| lastUpdatedBy | Date | The identifier of the user who last updated the custom field. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| errors | Object | A list of errors if any. |

| warnings | Object | A list of warnings if any. |



```
{
    "data": {
        "id": "65cda4fda888ce70acd29378",
        "orgId": 100606,
        "name": "CF15 date",
        "isMandatory": false,
        "defaultValue": "",
        "isActive": true,
        "dataType": "STRING",
        "createdOn": 1707975933.629223000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1707975933.629223000,
        "lastUpdatedBy": 75097962
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "65cda4fda888ce70acd29378",
        "orgId": 100606,
        "name": "CF15 date",
        "isMandatory": false,
        "defaultValue": "",
        "isActive": true,
        "dataType": "STRING",
        "createdOn": 1707975933.629223000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1707975933.629223000,
        "lastUpdatedBy": 75097962
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`