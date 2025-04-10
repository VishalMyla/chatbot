# Get rewards groupget

This API allows you to retrieve details of all the reward groups available in the org.

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

| URI | /api_gateway/core/v1/group |

| HTTP method | GET |

| Pagination | Yes |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group

```
https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group
```

# Request query parameters

| Parameters | Data type | Description |

| --- | --- | --- |

| orderBy | Enum | Sort response based on order. Supported values: ASC and DESC |

| active | Boolean | Indicates if the group is active. |

| name | String | Name of the group. Enter the group name to retrieve group details. |

| size | Integer | The number of items or records returned in a single API response. |

| page | Integer | The amount of the data that you want to retrieve. Default value: 10. |



```
https://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/group?page=0&size=10&active=true&name=VIP&orderBy=ASC
```

```
https://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/group?page=0&size=10&active=true&name=VIP&orderBy=ASC
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

| createdOn | Date | Creation date and time of the field in Epoch format |

| createdOnDateTime | String | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| lastUpdatedOn | Date | Last updated date and time of the field in Epoch format |

| lastUpdatedOnDateTime | String | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| last | Boolean | Indicates if the current page is the last page. |

| totalElements | Integer | The total number of elements across all pages. |

| totalPages | Integer | The total number of pages available. |

| numberOfElements | Integer | The number of elements in the current page. |

| first | Boolean | Indicates if the current page is the first page. |

| size | Integer | The number of elements per page. |

| number | Integer | The current page number (zero-based). |

| code | Integer | The code associated with the operation status. |

| message | String | A message describing the operation outcome. |

| success | Boolean | Indicates if the operation was successful. |



```
{
    "status": {
        "success": true,
        "code": 12013,
        "message": "Get all groups fetched successfully"
    },
    "groupRoList": [
        {
            "id": 2412,
            "orgId": 100737,
            "name": "groupName066",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742180328000,
            "createdOnDateTime": "2025-03-17T02:58:48Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1742180328000,
            "lastUpdatedOnDateTime": "2025-03-17T02:58:48Z"
        },
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
        },
        {
            "id": 2270,
            "orgId": 100737,
            "name": "groupName013",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741887808000,
            "createdOnDateTime": "2025-03-13T17:43:28Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741887808000,
            "lastUpdatedOnDateTime": "2025-03-13T17:43:28Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 12013,
        "message": "Get all groups fetched successfully"
    },
    "groupRoList": [
        {
            "id": 2412,
            "orgId": 100737,
            "name": "groupName066",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742180328000,
            "createdOnDateTime": "2025-03-17T02:58:48Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1742180328000,
            "lastUpdatedOnDateTime": "2025-03-17T02:58:48Z"
        },
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
        },
        {
            "id": 2270,
            "orgId": 100737,
            "name": "groupName013",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741887808000,
            "createdOnDateTime": "2025-03-13T17:43:28Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741887808000,
            "lastUpdatedOnDateTime": "2025-03-13T17:43:28Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```

`Try It!`