# Get rewards group by IDget

This API allows you to retrieve details of a group using the group ID.

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

| URI | /api_gateway/core/v1/group/{id} |

| HTTP method | GET |

| Pagination | No |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com//api_gateway/core/v1/group/14

```
https://eucrm.cc.capillarytech.com//api_gateway/core/v1/group/14
```

# Request path parameter

| Parameter name | Data Type | Description |

| --- | --- | --- |

| id* | Integer | Unique identifier of the group. |



```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/group/14
```

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/group/14
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier of the group. |

| orgId | Integer | Identifier for the org. |

| name | String | Name of the group. |

| rank | Integer | Rank associated with the group. |

| isActive | Boolean | Indicates if the entry is active. |

| createdBy | Integer | Identifier of the user who created the group. |

| createdOn | Date | Creation date and time of the field in Epoch format |

| createdOnDateTime | String | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedBy | Integer | Identifier of the user who last updated the group. |

| lastUpdatedOn | Date | Last Updated date and time of the field in Epoch format. |

| lastUpdatedOnDateTime | String | Last Updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |



```
{
    "id": 2295,
    "orgId": 100737,
    "name": "groupName016",
    "rank": 8,
    "isActive": true,
    "createdBy": 75155282,
    "createdOn": 1741942980000,
    "createdOnDateTime": "2025-03-14T09:03:00Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1741942980000,
    "lastUpdatedOnDateTime": "2025-03-14T09:03:00Z"
}
```

```
{
    "id": 2295,
    "orgId": 100737,
    "name": "groupName016",
    "rank": 8,
    "isActive": true,
    "createdBy": 75155282,
    "createdOn": 1741942980000,
    "createdOnDateTime": "2025-03-14T09:03:00Z",
    "lastUpdatedBy": 75155282,
    "lastUpdatedOn": 1741942980000,
    "lastUpdatedOnDateTime": "2025-03-14T09:03:00Z"
}
```

`Try It!`