# Search user groups by name, ID, and mobile numberget

# API endpoint

To search for a group based on the group name:{host}/userGroup2/search?q={query parameter}

```
{host}/userGroup2/search?q={query parameter}
```

To search for a group based on group ID or external ID:{host}/userGroup2?id={query parameter}

`{host}/userGroup2?id={query parameter}`

This allows you to search for any group using group_id, group_name, group_external id, and primary member email id/ mobile number/ card number.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Read access to theUser Groupresource

`User Group`

# Resource information

|  |  |

| --- | --- |

| URI | /v2/userGroup2 |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | NA |



# Query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| q* | string | The name of the group. The maximum allowed number of characters is 50. |

| id* | integer | The group or external ID of the group. |

| offset | integer | The starting index for data retrieval. |

| limit | integer | The maximum number of items to be retrieved. |



Note: One of the parameters marked * is mandatory.

```
https://eu.api.capillarytech.com/v2/userGroup2/search?q=51334
```

```
https://eu.api.capillarytech.com/v2/userGroup2/search?q=51334
```

# Response parameters

| Parameter | Description |

| --- | --- |

| - pagination | An object that contains details about the pagination. |

| -- limit | The maximum number of records returned per page. |

| -- offset | The starting point in the list of records. |

| -- total | The total number of records. |

| - data | An array containing the data records. |

| - groupId | The unique identifier of the group. |

| - groupName | The name of the group. |

| - groupStatus | The status of the group (e.g., ACTIVE). |

| - groupExternalId | An external identifier for the group. |

| - firstName | The first name of the primary member of the group. |

| - lastName | The last name of the primary member of the group. |

| - primaryMemberId | The unique identifier of the primary member. |

| - email | The email address of the primary member. |

| - mobile | The mobile number of the primary member. |

| - totalMembers | The total number of members in the group. |

| - extendedFields | An array containing theextended fieldsand their corresponding values, enabled for specific verticals within the organisation.Note: Each extended field must be valid and created under theusergroup2entity. |

| - warnings | An array containing any warning messages. |

| - errors | An array containing any error messages. |

| - id | The unique identifier of the group. |

| - lifeTimePurchases | The total amount of purchases made by the group in its lifetime. |

| - totalActiveMembers | The total number of currently active members in the group. |

| - totalExitedMembers | The total number of members who have left the group. |

| - defaultGroup | A boolean value indicating whether the group is a default one for the user. |



[extended fields](/docs/data-entities#extended-fields)

`usergroup2`

[entity](/docs/data-entities)

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
            "firstName": "Test",
            "lastName": "Usergroup",
            "primaryMemberId": 558085086,
            "email": "[email protected]",
            "mobile": "19985710853",
            "totalMembers": 1,
            "extendedFields": {
                "platinum": 25
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
            "firstName": "Test",
            "lastName": "Usergroup",
            "primaryMemberId": 558085086,
            "email": "[email protected]",
            "mobile": "19985710853",
            "totalMembers": 1,
            "extendedFields": {
                "platinum": 25
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# API-specific error codes

| Error code | Description |

| --- | --- |

| 91052 | Invalid or missing search parameters. |



`Try It!`