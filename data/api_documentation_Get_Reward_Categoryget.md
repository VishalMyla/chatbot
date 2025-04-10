# Get Reward Categoryget

This API allows you to retrieve the details of the reward categories for a particular brand. A Reward Category is a metadata attribute used to classify rewards into predefined groups based on their nature or purpose. For example, categories can include fashion, electronics, or groceries.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication - Basic or OAuth authentication details

- Default access group

- Brand ID or Brand Name

# Resource information

|  |  |

| --- | --- |

| URL | /api_gateway/rewards/core/v1/metadata/categories/brand/{brandId} |

| HTTP method | GET |

| Pagination | No |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

With Brand ID:

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55
```

With Brand Name:

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/blisswave

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/blisswave
```

# Request path parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| brandId* | Integer | Unique identifier for the brand under which the reward category is associated. To retrieve brandId, refer to theRetrieve Brand ID API.EitherbrandIdorbrandNamemust be provided. |

| brandName* | String | Name of the brand under which the reward category is associated. The brand name is case-insensitive.EitherbrandIdorbrandNamemust be provided. |



[Retrieve Brand ID API](/reference/retrieve-brand-id)

`brandId`

`brandName`

`brandId`

`brandName`

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3MJmNGRjNzU5MWI1NzY='
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/categories/brand/55' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3MJmNGRjNzU5MWI1NzY='
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | Object | Contains the status details for the data retrieval. |

| -success | Boolean | Indicates whether the request operation was successful.Values:trueorfalse. |

| -code | Integer | Response code for the operation.Example:200 |

| -message | String | Message describing the result of the operation.Example:Category fetched successfully. |

| categoryList | Object | Contains the details of the reward categories for the specified brand. |

| -id | Integer | Unique identifier for the reward category. |

| -name | String | Name of the reward category. |

| -enabled | Boolean | Current active status of the reward category. If true, the reward category is currently active, else it is inactive.Values:trueorfalse. |



`true`

`false`

`200`

`Category fetched successfully`

`true`

`false`

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Category fetched successfully"
    },
    "categoryList": [
        {
            "id": 128,
            "name": "tickets",
            "enabled": false
        },
        {
            "id": 111,
            "name": "training",
            "enabled": true
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Category fetched successfully"
    },
    "categoryList": [
        {
            "id": 128,
            "name": "tickets",
            "enabled": false
        },
        {
            "id": 111,
            "name": "training",
            "enabled": true
        }
    ]
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    },
    "categoryList": null
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    },
    "categoryList": null
}
```

# API Error Codes

| Error code | Message | Description |

| --- | --- | --- |

| 3004 | Brand not found | Invalid brandName or brandId in the request. |



`Try It!`