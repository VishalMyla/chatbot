# Search for groups using the extended fieldspost

The new API allows you to search for groups using their associated extended fields. By providing one or more extended fields, you can retrieve groups that match the specified criteria. The API works even if only a single extended field is supplied.

# API endpoint example

https://eu.api.capillarytech.com/v2/userGroup2/extendedFieldSearch

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Read and write access to theUser Groupresource

`User Group`

# Resource information

|  |  |

| --- | --- |

| URI | /v2/userGroup2 |

| HTTP Method | POST |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| extendedFields* | Array | An array containing theextended fieldsused to retrieve groups associated with those fields.Note:  Each extended field must be valid and created under theusergroup2entity. |



[extended fields](/docs/data-entities#extended-fields)

`usergroup2`

[entity](/docs/data-entities)

```
{
    "extendedFields": {
        "platinum": "40"
    }

}
```

```
{
    "extendedFields": {
        "platinum": "40"
    }

}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| pagination | An array containing pagination information for the response. |

| - limit | The maximum number of records to retrieve. |

| - offset | The starting point for fetching records. |

| - total | The total number of records available. |

| data | An array containing the group details. |

| - groupId | The unique identifier for the group. It is the same as entity ID. |

| - groupName | The name of the group. |

| - groupStatus | The current status of the group.Example: ACTIVE, EXITED |

| - groupExternalId | The external identifier for the group. |

| - primaryMemberId | The unique identifier for the primary member of the group. |

| - totalMembers | The total number of members in the group. |

| - totalActiveMembers | The total number of active members in the group. |

| - extendedFields | An array containing extended field information related to the group. |

| warnings | An array containing warnings, if any. |

| errors | An array containing errors, if any. |



```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "data": [
        {
            "groupId": 51334,
            "groupName": "natwest14",
            "groupStatus": "ACTIVE",
            "groupExternalId": "natwest_16",
            "primaryMemberId": 558085086,
            "totalMembers": 1,
            "totalActiveMembers": 1,
            "extendedFields": {
                "platinum": 40
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

```
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "data": [
        {
            "groupId": 51334,
            "groupName": "natwest14",
            "groupStatus": "ACTIVE",
            "groupExternalId": "natwest_16",
            "primaryMemberId": 558085086,
            "totalMembers": 1,
            "totalActiveMembers": 1,
            "extendedFields": {
                "platinum": 40
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1661 | The extended fields array is empty. |

| 91017 | The value of the extended field does not match the data type. |

| 91016 | The extended field name is incorrect. |



`Try It!`