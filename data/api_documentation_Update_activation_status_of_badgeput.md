# Update activation status of badgeput

This API allows you to update the activation status of the badge.

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

| URI | /api_gateway/v1/badges/badgeMeta/{badgeId}/{activationStatus} |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/activate

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/activate
```

# Request path parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| activationStatus* | Enum | Activation status of the badge.Supported values: Activate, Deactivate |

| badgeId* | String | Unique identifier ("id") generated during the creation of the badge |



```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/activate
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/activate
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/deactivate
```

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta/6543688e66a87827bb61e62a/deactivate
```

# Response parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | String | Unique identifier for the badge. |

| isActive | Boolean | Indicates whether the badge is active. |

| errors | Array | Contains details of any errors. |

| warnings | Array | Contains details of any warnings. |



```
{
    "data": {
        "id": "6543688e66a87827bb61e62a",
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "6543688e66a87827bb61e62a",
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "6543688e66a87827bb61e62a",
        "isActive": false
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "6543688e66a87827bb61e62a",
        "isActive": false
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`