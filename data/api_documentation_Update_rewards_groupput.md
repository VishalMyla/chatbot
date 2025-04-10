# Update rewards groupput

This API allows you to update a group for the rewards.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> 🚧WarningIf you update the group name,all the rewards linked to the group will be removed as the reward is linked based on the group name.

## 🚧Warning

Warning

If you update the group name,all the rewards linked to the group will be removed as the reward is linked based on the group name.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/core/v1/group/{id} |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group/45

```
https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group/45
```

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| name* | String | The name of the group. |

| rank | Integer | The rank associated with the group. |

| isActive | Boolean | Set the isActive parameter to false to disable the group. Default: True |



# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id* | Integer | Unique identifier of the group. |



```
{
    "name":"Group RankASDF",
    "rank":2
}
```

```
{
    "name":"Group RankASDF",
    "rank":2
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id | Integer | The unique identifier of the group. |

| orgId | Integer | The organization identifier the group belongs to. |

| name | String | The name of the group. |

| rank | Integer | The numerical rank associated with the group. |

| isActive | Boolean | Indicates if the group is active. |

| createdBy | Integer | The identifier of the user who created the group. |

| createdOn | Long | Created on date and time of the field in Epoch time format. |

| createdOnDateTime | String | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedBy | Integer | The identifier of the user who last updated the group. |

| lastUpdatedOn | Long | Last updated on date and time of the field in Epoch time format. |

| lastUpdatedOnDateTime | String | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |



```
{
    "id": 2422,
    "orgId": 100737,
    "name": "dw",
    "rank": 8,
    "isActive": true,
    "createdBy": 75155282,
    "createdOn": 1742196639000,
    "createdOnDateTime": "2025-03-17T07:30:39Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1742197082485,
    "lastUpdatedOnDateTime": "2025-03-17T07:38:02Z"
}
```

```
{
    "id": 2422,
    "orgId": 100737,
    "name": "dw",
    "rank": 8,
    "isActive": true,
    "createdBy": 75155282,
    "createdOn": 1742196639000,
    "createdOnDateTime": "2025-03-17T07:30:39Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1742197082485,
    "lastUpdatedOnDateTime": "2025-03-17T07:38:02Z"
}
```

# API-specifc error

| Error code | Description |

| --- | --- |

| 400 | Group name must not be null |



`Try It!`