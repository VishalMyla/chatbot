# Update Reward Categoryput

This API lets you enable or disable a particular reward category. A Reward Category is a metadata attribute used to classify rewards into predefined groups based on their nature or purpose. For example, categories can include fashion, electronics, or groceries.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication - Basic or OAuth authentication details

- Default access group

- Brand ID

- Category ID

# Resource information

|  |  |

| --- | --- |

| URL | /api_gateway/rewards/core/v1/metadata/category/{categoryid}/status/{action}/brand/{brandid} |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/enable/brand/55

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/enable/brand/55
```

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/disable/brand/55

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/disable/brand/55
```

# Request path parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| categoryId* | Integer | Unique identifier for the reward category that needs to be enabled or disabled. It is generated when a reward category is created. |

| brandId* | Integer | Unique identifier for the brand under which the reward category is associated. To retrieve brandId, refer to theRetrieve Brand ID API. |

| action* | Enum | Action to be performed.Supported values:enableordisableEnable - To enable the reward category.Disable - To disable the reward category. |



[Retrieve Brand ID API](/reference/retrieve-brand-id)

`enable`

`disable`

```
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/enable/brand/55' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3M6MWYjNzU5MWI1NzY='
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/enable/brand/55' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3M6MWYjNzU5MWI1NzY='
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/disable/brand/55' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3M6MWY5OzU5MWI1NzY=' \
--header 'Cookie: _cfuvid=01ByJlrmtNbRIQOhhldILHP3lz5mNj3NHtc7Tkf5cH0-1733290794337-0.0.1.1-604800000'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/disable/brand/55' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3M6MWY5OzU5MWI1NzY=' \
--header 'Cookie: _cfuvid=01ByJlrmtNbRIQOhhldILHP3lz5mNj3NHtc7Tkf5cH0-1733290794337-0.0.1.1-604800000'
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | Object | Contains information about the success or failure of the API call. |

| -success | Boolean | Indicates whether the operation was successful.Values:trueorfalse. |

| -code | Integer | Status code indicating the result of the operation.Example:2006for success. |

| -message | String | Descriptive message about the result of the operation.Example:Category updated successfully. |



`true`

`false`

`2006`

`Category updated successfully.`

```
{
    "status": {
        "success": true,
        "code": 2006,
        "message": "Category updated successfully"
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 2006,
        "message": "Category updated successfully"
    }
}
```

# API error codes

| Error Code | Message | Description |

| --- | --- | --- |

| 3004 | Brand not found | Invalid brandId |

| 2004 | Category not found | Invalid categoryId |



`Try It!`