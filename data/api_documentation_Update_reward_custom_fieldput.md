# Update reward custom fieldput

This API allows you to update a custom field created for a reward.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication details

- Access group resource: Default

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/brand/customfield/{id} |

| HTTP method | PUT |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/customfield/106

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/customfield/106
```

# Request path parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| id* | String | Unique name identifier for the custom field. |



# Request body parameter

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| name* | String | Unique name identifier for the custom field. |

| orgId | String | Unique identifier for the organisation. To retrieve the orgId, use theGet Org DetailsAPI. |

| description* | String | Description for the custom field. |

| isMandatory | Boolean | Indicates if the custom field is mandatory. Supported values:true: Field is mandatoryfalse: Field is optional (default value) |

| isActive | Boolean | Indicates the status of the custom field. Supported values:true: Status is active (default value)false: Status is inactive. |

| scope* | Enum | Indicates where the additional custom fields will apply. Supported values:REWARD: While creating or updating a reward.ISSUE_REWARD: While issuing a reward.CATALOGUE_PROMOTION: While creating or updating apromotion. |

| defaultValue | String | Default value for the custom field used when no value is specified. |

| dataType* | String | Type of data for the custom field. Supported values:BOOLEAN,ENUM,DATE,STRING,INTEGER.255 is the character limit for the datatypeSTRING.UseENUMas thedataTypeto define a set of pre-defined values, ensuring error-free management of reward metadata. For example, as a reward manager, you can create a custom field called "Reward Category" and define possible values such as "Discount," "Free Gift," and "Cashback." When creating or updating a reward, you can select one of these predefined values for the "Reward Category" custom field. |

| enumValues | Object | Object containing the enum values. This parameter is required ifdataTypeisENUM.Note:- Define enum values using double quotes in a comma-separated list.- You can provide a maximum of 30 enum values per custom field.- When creating a reward, you can provide only one enum value per custom field in thecustomFieldsobject.- Each enum value must not exceed 80 characters.- Allowed special characters:[]()-_.- Values must be unique within the custom field.-defaultValuemust be provided ifdataTypeisENUM. |



[Get Org Details](/reference/get-org-details)

`true`

`false`

`true`

`false`

`REWARD`

`ISSUE_REWARD`

`CATALOGUE_PROMOTION`

[promotion](/docs/loyalty-promotions-basic-and-advanced)

`BOOLEAN`

`ENUM`

`DATE`

`STRING`

`INTEGER`

`STRING`

`ENUM`

`dataType`

`dataType`

`ENUM`

`customFields`

`[]()-_`

`defaultValue`

`dataType`

`ENUM`

```
{
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "dataType": "STRING"
}
```

```
{
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "dataType": "STRING"
}
```

```
{
    "orgId": 100458,
    "name": "Order confirmed",
    "description": "Reward is processing",
    "isMandatory": false,
    "isActive": true,
    "scope": "CATALOGUE_PROMOTION",
    "defaultValue": null,
    "dataType": "STRING"
}
```

```
{
    "orgId": 100458,
    "name": "Order confirmed",
    "description": "Reward is processing",
    "isMandatory": false,
    "isActive": true,
    "scope": "CATALOGUE_PROMOTION",
    "defaultValue": null,
    "dataType": "STRING"
}
```

```
{
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": null,
    "dataType": "STRING"
}
```

```
{
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": null,
    "dataType": "STRING"
}
```

```
{
    "orgId": 100458,
    "name": "CustomField",
    "description": "",
    "isMandatory": false,
    "isActive": false,
    "defaultValue": "PRIMARY",
    "dataType": "ENUM",
    "scope": "ISSUE_REWARD",
    "enumValues": [
        "PRIMARY",
        "SECONDARY"
    ]
}
```

```
{
    "orgId": 100458,
    "name": "CustomField",
    "description": "",
    "isMandatory": false,
    "isActive": false,
    "defaultValue": "PRIMARY",
    "dataType": "ENUM",
    "scope": "ISSUE_REWARD",
    "enumValues": [
        "PRIMARY",
        "SECONDARY"
    ]
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for the custom field. |

| orgId | Integer | Unique identifier of the organisation. |

| name | String | Unique name for the custom field. |

| description | String | Description of the custom field. |

| isMandatory | Boolean | Indicates if the custom field is mandatory. Possible values:true: Field is mandatoryfalse: Field is optional (default value) |

| isActive | Boolean | Specify the status of the custom field. Possible values:true: Status is active (default value)false: Status is inactive. |

| scope | String | Specify where the additional custom fields will apply. Possible values:REWARD: While creating or updating a reward.ISSUE_REWARD: While issuing a reward.CATALOGUE_PROMOTION: While creating or updating a promotion. |

| defaultValue | String | Default value for the custom field used when no value is specified. |

| dataType | String | Type of data for the custom field. Possible values:BOOLEAN,ENUM,DATE,STRING,INTEGER. |

| createdBy | Integer | Unique customer identifier of the user who created the custom field |

| createdOn | Date | Creation date and time of the field in Epoch time format. |

| createdOnDateTime | String | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedBy | Integer | Unique customer identifier of the user who last updated the custom field |

| lastUpdatedOn | Date | Last update date and time of the field in Epoch time format. |

| enumValues | Object | Object containing the enum values. |

| lastUpdatedOnDateTime | String | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |



`true`

`false`

`true`

`false`

`REWARD`

`ISSUE_REWARD`

`CATALOGUE_PROMOTION`

`BOOLEAN`

`ENUM`

`DATE`

`STRING`

`INTEGER`

```
{
    "id": 18880,
    "orgId": 100737,
    "name": "age_update",
    "description": "CF1A",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75155282,
    "createdOn": 1741934782959,
    "createdOnDateTime": "2025-03-14T06:46:22Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1741934782959,
    "enumValues": null,
    "lastUpdatedOnDateTime": "2025-03-14T06:46:22Z"
}
```

```
{
    "id": 18880,
    "orgId": 100737,
    "name": "age_update",
    "description": "CF1A",
    "isMandatory": false,
    "isActive": true,
    "scope": "REWARD",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75155282,
    "createdOn": 1741934782959,
    "createdOnDateTime": "2025-03-14T06:46:22Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1741934782959,
    "enumValues": null,
    "lastUpdatedOnDateTime": "2025-03-14T06:46:22Z"
}
```

```
{
    "id": 6913,
    "orgId": 100458,
    "name": "Order confirmed",
    "description": "Reward is processing",
    "isMandatory": false,
    "isActive": true,
    "scope": "CATALOGUE_PROMOTION",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75130850,
    "createdOn": null,
    "lastUpdatedBy": 75130850,
    "lastUpdatedOn": null
}
```

```
{
    "id": 6913,
    "orgId": 100458,
    "name": "Order confirmed",
    "description": "Reward is processing",
    "isMandatory": false,
    "isActive": true,
    "scope": "CATALOGUE_PROMOTION",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75130850,
    "createdOn": null,
    "lastUpdatedBy": 75130850,
    "lastUpdatedOn": null
}
```

```
{
    "id": 210,
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75086856,
    "createdOn": null,
    "lastUpdatedBy": 75086856,
    "lastUpdatedOn": null
}
```

```
{
    "id": 210,
    "orgId": 100458,
    "name": "CF1A112",
    "description": "CF1A112",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": null,
    "dataType": "STRING",
    "createdBy": 75086856,
    "createdOn": null,
    "lastUpdatedBy": 75086856,
    "lastUpdatedOn": null
}
```

```
{
    "id": 15006,
    "orgId": 1231,
    "name": "CustomField",
    "description": "",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": "PRIMARY",
    "dataType": "ENUM",
    "createdBy": 50716508,
    "createdOn": null,
    "lastUpdatedBy": 50716508,
    "lastUpdatedOn": null,
    "enumValues": [
        "PRIMARY",
        "SECONDARY"
    ]
}
```

```
{
    "id": 15006,
    "orgId": 1231,
    "name": "CustomField",
    "description": "",
    "isMandatory": false,
    "isActive": true,
    "scope": "ISSUE_REWARD",
    "defaultValue": "PRIMARY",
    "dataType": "ENUM",
    "createdBy": 50716508,
    "createdOn": null,
    "lastUpdatedBy": 50716508,
    "lastUpdatedOn": null,
    "enumValues": [
        "PRIMARY",
        "SECONDARY"
    ]
}
```

# API-specific error codes

| Error code | Description | Reason |

| --- | --- | --- |

| 3022 | ISSUE REWARD scope limit reached, max is {max_limit}. Allowed limit is 10. | - |

| 3025 | Default value not found in the enum list | The default value provided does not match any of the enums. |

| 3030 | Enum value cannot be empty | One or more enum values are null. |

| 3024 | Invalid characters in enum value. Allowed characters: [a-z,A-Z,0-9,-_ ] | One or more enum values have an unsupported character. |

| 400 | ENUM's list size is out of limit | The enum object does not contain any values. |

| 3028 | Enum value exceeds the limit of 80 characters | One or more enum values have exceeded the supported character limit. |

| 3029 | Duplicate enum values found | A duplicate enum is provided |



`Try It!`