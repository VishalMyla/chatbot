# Get group by IDget

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

| URL | api_gateway/v1/badges/group/{groupId} |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group/{groupId}

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group/{groupId}
```

# Request path parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| groupId* | String | Unique ID of the group. Ex: 6560ad9c7e3e81134376008b |



# Request query parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| Order | Enum | Sort response based on order. Supported values: ASC and DESC |

| Size | Integer | The number of items or records returned in a single API response. |

| Page | Integer | The amount of the data that you want to retrieve. Default value: 10. |

| status | Boolean | Indicates whether the group is active. Ex: Set the status to true to |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group/6581281e8f68666070de15c5
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/group/6581281e8f68666070de15c5
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | String | Unique ID of the group. |

| orgId | Integer | Unique ID of the org. |

| name | String | Name of the group. |

| rank | Integer | Rank of the group. |

| createdBy | Integer | ID of the user who created the group. |

| createdOn | Timestamp | Timestamp when the group was created |

| lastUpdatedBy | Integer | ID of the user who last updated the group. |

| lastUpdatedOn | Timestamp | Timestamp when the group was last updated |

| isActive | Boolean | Indicates whether the group is active |

| errors | Object | Indicates that there are no errors |

| warnings | Object | Indicates that there are no warnings |



```
{
    "data": {
        "id": "6560ad9c7e3e81134376008b",
        "orgId": 4000106,
        "name": "cafeb9fe",
        "rank": 1,
        "createdBy": 50677380,
        "createdOn": 1700834716.366000000,
        "lastUpdatedBy": 50677380,
        "lastUpdatedOn": 1700834716.366000000,
        "isActive": true
    },
    "errors": null,
    "warnings": null
}
```

```
{
    "data": {
        "id": "6560ad9c7e3e81134376008b",
        "orgId": 4000106,
        "name": "cafeb9fe",
        "rank": 1,
        "createdBy": 50677380,
        "createdOn": 1700834716.366000000,
        "lastUpdatedBy": 50677380,
        "lastUpdatedOn": 1700834716.366000000,
        "isActive": true
    },
    "errors": null,
    "warnings": null
}
```

`Try It!`