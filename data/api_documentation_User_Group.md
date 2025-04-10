# User Group

# API endpoint example

https://eu.api.capillarytech.com/v2/userGroup2

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Read and write access to theUser Groupresource

`User Group`

# Resource information

|  |  |

| --- | --- |

| URI | /v2/userGroup2 |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| externalId* | string | Unique ID of the group. The maximum number of allowed characters is 50. |

| groupName | string | Name of the group. The maximum number of allowed characters is 50. |

| maxGroupSize* | integer | Maximum size of the group. The maximum group size is as defined by the product configurationCONF_MAX_FLEET_GROUP_SIZE. If this configuration is not set, the default maximum size is 30,000. |

| limit | integer | Maximum number of items to be retrieved. |

| extendedFields | array | An array containing theextended fieldsand their corresponding values, enabled for specific verticals within the organisation. These extended fields capture additional information about the group.Example:  A brand X wants to capture the type of group: Platinum, Gold, or Silver. It uses the extended fields to capture the information and decides the rewards depending on the group.Note: Extended field support is available for fields created using theentity typeusergroup2. |



`CONF_MAX_FLEET_GROUP_SIZE`

[extended fields](/docs/data-entities#extended-fields)

[entity type](/docs/data-entities)

`usergroup2`

```
{
    "externalId": "purple_externalId",
    "groupName": "name_purple",
    "maxGroupSize": 110
}
```

```
{
    "externalId": "purple_externalId",
    "groupName": "name_purple",
    "maxGroupSize": 110
}
```

```
{
    "externalId": "natwest_16",
    "groupName": "natwest14",
    "maxGroupSize": 110,
    "extendedFields": {
        "platinum": "25"
    }
}
```

```
{
    "externalId": "natwest_16",
    "groupName": "natwest14",
    "maxGroupSize": 110,
    "extendedFields": {
        "platinum": "25"
    }
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| entity | Unique ID of the user group created. |

| warnings | Array containing warning messages, if any. |



```
{
    "entity": 2361,
    "warnings": []
}
```

```
{
    "entity": 2361,
    "warnings": []
}
```

```
{
    "entity": 51298,
    "warnings": []
}
```

```
{
    "entity": 51298,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1633 | Group ID exists. Change the value of the fieldexternalId |

| 91017 | Value of the extended field does not match the data type.Note: This is a warning, The user group is created, but the extended fields are not updated. |

| 91016 | Extended field name is incorrect.Note: This is a warning. The user group is created, but the extended fields are not updated. |



`externalId`

`Try It!`