# Create Reward Categorypost

This API lets you create a new reward category. A Reward Category is a metadata attribute used to classify rewards into predefined groups based on their nature or purpose. For example, categories can include fashion, electronics, or groceries.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication - Basic or OAuth authentication details

- Default access group

- Brand ID

# Resource information

|  |  |

| --- | --- |

| URL | /api_gateway/rewards/core/v1/metadata/category/create |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/create

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/create
```

# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| brandId* | Integer | Unique identifier for the brand. To retrieve brandId, refer to theRetrieve Brand ID API. |

| name* | String | Name of the reward category to be created. The name supports special characters, is not case-sensitive, and can be up to 255 characters in length. |



[Retrieve Brand ID API](/reference/retrieve-brand-id)

```
{
  "brandId": 55,
  "name": "General"
}
```

```
{
  "brandId": 55,
  "name": "General"
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | Object | Contains the status details for reward category creation. |

| -success | Boolean | Indicates whether the operation was successful.Values:trueorfalse. |

| -code | Integer | Response code for the operation.Example:2002 |

| -message | String | Message describing the result of the operation. |

| category | Object | Contains the reward category details. |

| -id | Integer | Unique identifier for the created reward category. |

| -name | String | Name of the created reward category. |

| -enabled | Boolean | Current active status of the reward category. If true, the reward category is currently active, else it is inactive.Values:trueorfalse. When creating a reward category, the value istrue. |



`true`

`false`

`2002`

`true`

`false`

`true`

```
{
    "status": {
        "success": true,
        "code": 2002,
        "message": "Category save successfully"
    },
    "category": {
        "id": 129,
        "name": "general",
        "enabled": true
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 2002,
        "message": "Category save successfully"
    },
    "category": {
        "id": 129,
        "name": "general",
        "enabled": true
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    },
    "category": null
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    },
    "category": null
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "name can't be null or empty."
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "name can't be null or empty."
    }
}
```

# API Error Codes

| Error code | Message | Description |

| --- | --- | --- |

| 3004 | brand not found | Invalid brandId in the request. |

| 400 | name can't be null or empty. | Name of the category has to be provided. |



`Try It!`