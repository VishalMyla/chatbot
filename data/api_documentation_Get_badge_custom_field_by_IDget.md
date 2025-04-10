# Get badge custom field by IDget

This API allows you to retrieve custom field details using custom field ID.

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

| URI | /api_gateway/v1/badges/customField/{customFieldId} |

| HTTP method | GET |

| Pagination supported | No |

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



# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id | String | The unique identifier of the custom field. |

| orgId | Integer | The org ID the custom field belongs to. |

| name | String | The name of the custom field. |

| isMandatory | Boolean | Indicates if the custom field is mandatory. |

| defaultValue | String | The default value of the custom field. |

| isActive | Boolean | Indicates if the custom field is active. |

| dataType | Enum | The data type of the custom field's value. |

| createdOn | Date | The timestamp when the custom field was created. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| createdBy | Integer | The identifier of the user who created the custom field. |

| lastUpdatedOn | Date | The timestamp when the custom field was last updated. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| lastUpdatedBy | Integer | The identifier of the user who last updated the custom field. |

| errors | Object | A list of errors if any occurred during the operation. |

| warnings | Object | A list of warnings if any occurred during the operation. |



```
{
    "data": {
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
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
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
    "errors": [],
    "warnings": []
}
```

`Try It!`