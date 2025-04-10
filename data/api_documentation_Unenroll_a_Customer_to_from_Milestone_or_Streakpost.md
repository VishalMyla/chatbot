# Unenroll a Customer to from Milestone or Streakpost

This API unenrolls a user from a milestone or streak in a connected organisation.

## Milestones and Streaks

AMilestonein Loyalty+ is a feature that lets brands set specific targets for their customers. When customers reach these defined targets, they are rewarded.

For more information refer to thedocumentation on Milestones.

AStreakin Loyalty+ refers to a series of consecutive customer actions or engagements. When customers complete a series of consecutive actions, they are rewarded.

For more information refer to thedocumentation on Streaks.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer to the documentation inAPI overviewand step-by-step guide onmaking your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer to the documentation inAPI overviewand step-by-step guide onmaking your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /targetGroups/{targetGroupId}/targets/{targetId}/unEnroll |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/v3.1/targetGroups/{targetGroupId}/targets/{targetId}/unEnroll

```
https://eucrm.cc.capillarytech.com/v3.1/targetGroups/{targetGroupId}/targets/{targetId}/unEnroll
```

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs. |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELFandOTHER.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

[data scopes](/reference/connected-orgs-data-scopes)

# Request path parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| targetGroupId* | Integer | The ID of the target group associated with the item. A target group is the primary entity under which individual targets can be created. |

| targetId* | Integer | The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal. |



# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| customerId* | Integer | The unique identifier of the customer. |



```
[
    {
        "customerId":423789336
    }
]
```

```
[
    {
        "customerId":423789336
    }
]
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Integer | The unique identifier of the customer. |

| errors | Array | Errors during the API call, if any. |

| warnings | Array | Warnings during the API call, if any. |



```
{
    "data": 345651201,
    "errors": null,
    "warnings": null
}
```

```
{
    "data": 345651201,
    "errors": null,
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
      {
        "code": 310141,
        "message": 'Datascope 'ALL' is not supported for this 'API'
      }
      ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
      {
        "code": 310141,
        "message": 'Datascope 'ALL' is not supported for this 'API'
      }
      ],
    "warnings": null
}
```

# API-specific errors

| Error code | Description |

| --- | --- |

| 310119 | User already enrolled for the target. |

| 310011 | Invalid userId. Check if the customerId is valid. |

| 310019 | Target period not found. Check the target period ID to troubleshoot this error. |

| 310017 | Target group not found or deactivated. Check the target group ID to troubleshoot this error. |

| 310018 | Target rule not found. Check the target rule ID to troubleshoot this error. |

| 300004 | Invalid input. |

| 310141 | Datascope 'ALL' is not supported for this 'API |

| 310144 | Connected Orgs not set properly in Headers.- Check whether the target organisation is a connected organisation.- Check the API endpoint. |



`Try It!`