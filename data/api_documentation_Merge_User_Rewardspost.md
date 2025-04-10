# Merge User Rewardspost

This API merges the rewards of two customers. Provide thecustomerIdof both customers to merge reward consumption details, reward transactions, and purchased rewards.

`customerId`

# Prerequisites

- Authentication: Basic/OAuth authentication

- Access group: Default access group

# Resource Information

|  |  |

| --- | --- |

| URI | api_gateway/rewards/core/v1/user-merge |

| HTTP Method | POST |

| Pagination | No |

| Batch support | NA |

| Rate limit information | NA |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user-merge

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user-merge
```

# Request body

```
{
    "fromUserId": 423930934,
    "toUserId": 423930935,
    "requestId": "100"
  }
```

```
{
    "fromUserId": 423930934,
    "toUserId": 423930935,
    "requestId": "100"
  }
```

# Request body parameters

| Parameter (Parameters marked as * are required) | Data Type | Description |

| --- | --- | --- |

| fromUserId* | Long | Unique customer ID of the victim customer. This is the user account from which rewards and their data will be transferred. |

| toUserId* | Long | Unique customer ID of the surviving customer. This user account receives the rewards and their data data from the victim account. |

| requestId* | String | A unique, custom ID that you can define to identify the merge. This ID can be any value of your choice and is used to track the merge status and handle errors. There is no character limit. |



# Response body

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User merged successfully"
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "User merged successfully"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 8012,
        "message": "User already merged"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 8012,
        "message": "User already merged"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "toUserId can't be null.,fromUserId can't be null."
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "toUserId can't be null.,fromUserId can't be null."
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "requestId can't be null."
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "requestId can't be null."
    }
}
```

# Response body paramters

| Parameter | Type | Description |

| --- | --- | --- |

| success | Boolean | Indicates the success status of the merge.true: Merge was successful.false: Merge was unsuccessful due to an error. |

| code | Integer | Status code for the merge. |

| message | String | Status message for the merge. |



`true`

`false`

# API specific errors

| Error Code | Description | Reason |

| --- | --- | --- |

| 8012 | User already merged | Users have already been merged. To re-attempt a merge, provide a new, uniquerequestId. |

| 400 | requestId can't be null. | requestIdis not provided. |

| 400 | toUserId can't be null.,fromUserId can't be null. | toUserIdorfromUserIdare not provided. |



`requestId`

`requestId`

`toUserId`

`fromUserId`

`Try It!`