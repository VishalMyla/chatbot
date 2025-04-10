# Update badges groupput

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> 🚧WarningBadge group name should be unique and is case sensitive.

## 🚧Warning

Warning

Badge group name should be unique and is case sensitive.

# Prerequisites

- Authentication: Basic or OAuth authentication details

- Access group resource: WRITE access to target loyalty access group resource

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/v1/badges/group/{groupid} |

| HTTP method | POST |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/v1/badges/{groupid}

```
https://eu.api.capillarytech.com/api_gateway/v1/badges/{groupid}
```

# Request query parameters

| Parameters | Datatype | Description |

| --- | --- | --- |

| groupId* | String | Unique ID of the group. |



# Request body parameters

| Parameters | Datatype | Description |

| --- | --- | --- |

| Name* | String | Name of the group. |

| Rank* | Integer | The brand assigns the rank of the group. The rank is used to create an order among different groups. The group with the higher rank is prioritized over the other groups. |



```
{
       "name": "GROUP_RANK_58",
       "rank": 1
}
```

```
{
       "name": "GROUP_RANK_58",
       "rank": 1
}
```

# Response parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| id | String | Unique ID of the group. |

| orgId | Integer | Unique ID of the org. |

| name | String | Name of the group |

| rank | Integer | Rank of the group. |

| createdBy | Integer | User ID who created the group. |

| createdOn | Float | Timestamp indicating when the group was created |

| lastUpdatedBy | Integer | User ID who last updated the group. |

| lastUpdatedOn | Float | Timestamp indicating when the group was last updated |

| isActive | Boolean | Indicates whether the group is currently active |



```
{
        "id": "6581281e8f68666070de15c5",
        "orgId": 50156,
        "name": "GROUP_RANK_58",
        "rank": 1,
        "createdBy": 123,
        "createdOn": 1702963230.966423000,
        "lastUpdatedBy": 123,
        "lastUpdatedOn": 1702963230.966423000,
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```

```
{
        "id": "6581281e8f68666070de15c5",
        "orgId": 50156,
        "name": "GROUP_RANK_58",
        "rank": 1,
        "createdBy": 123,
        "createdOn": 1702963230.966423000,
        "lastUpdatedBy": 123,
        "lastUpdatedOn": 1702963230.966423000,
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 733 | Group Name should be Unique. |

| 732 | Group Rank is Mandatory. |



`Try It!`