# Create reward grouppost

This API allows you to create a group for the rewards.

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

| URI | /api_gateway/core/v1/group/create |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group/create

```
https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group/create
```

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| name* | String | The name of the group. The name of the group must be unique. |

| rank | Integer | The rank associated with the group. Group rank can be null. |



```
{
    "name":"GROUP_withRANK123",
    "rank":99
}
```

```
{
    "name":"GROUP_withRANK123",
    "rank":99
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

| createdOnDateTime | String | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |

| lastUpdatedBy | Integer | The identifier of the user who last updated the group. |

| lastUpdatedOn | Long | Last updated on date and time of the field in Epoch time format. |

| lastUpdatedOnDateTime | String | Last updated on date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |



```
{
    "id": 2412,
    "orgId": 100737,
    "name": "groupName066",
    "rank": 8,
    "isActive": true,
    "createdBy": 75155282,
    "createdOn": 1742180327987,
    "createdOnDateTime": "2025-03-17T02:58:47Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1742180327987,
    "lastUpdatedOnDateTime": "2025-03-17T02:58:47Z"
}
```

```
{
    "id": 2412,
    "orgId": 100737,
    "name": "groupName066",
    "rank": 8,
    "isActive": true,
    "createdBy": 75155282,
    "createdOn": 1742180327987,
    "createdOnDateTime": "2025-03-17T02:58:47Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1742180327987,
    "lastUpdatedOnDateTime": "2025-03-17T02:58:47Z"
}
```

# API-specific error

| Error code | Description |

| --- | --- |

| 400 | Group name must not be null |

| 12012 | Group name must be unique |



`Try It!`