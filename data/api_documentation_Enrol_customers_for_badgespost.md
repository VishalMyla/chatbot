# Enrol customers for badgespost

This API endpoint allows for the initiation of enrolling customers for badges.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

`[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/ISSUE-BADGE

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

- Maker request access (CanMakeRequest). Contact admin for access.

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v2/request-workflow/ISSUE-BADGE |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# Header information

|  |  |

| --- | --- |

| X-CAP-API-AUTH-ORG-ID | Organization ID |

| X-CAP-UI-AUTH-TOKEN | A JSON Web Token (JWT) is used for intouch user authentication.  CanMakeRequest access is required to generate this token. |



# Request body parameters

| Parameter (Parameters marked * are mandatory) | Type | Description |

| --- | --- | --- |

| entityInfo* | Object | Information about the entity (till, store, zone, concept) |

| - tillId* | String | The unique identifier for the till associated with the transaction. |

| - storeId* | String | The unique identifier for the store where the transaction occurs. |

| - zoneId* | String | The unique identifier for the zone or area the store is associated with. |

| - conceptId* | String | The unique identifier for the concept or branding associated with the store. |

| payload | Object | The Intouch payload for the Issue Badge Workflow is a structured set of data that facilitates the enrolling of the customers for badges. This payload contains specific information required to execute this operation. |

| - IntouchAPITask-Payload | Object | Information about the Intouch API task |

| - hostname* | String | Hostname for the API endpoint. Example -<https://eucrm-new.cc.capillarytech.com> |

| - path* | String | /api_gateway/v1/badges/badgeMeta/customer/issueBulk. The path denotes the endpoint within the API that manages to enrol customers for badge. |

| - method* | String | POST. The HTTP method used for the request |

| \pathParams | Object | This field is reserved for any dynamic parameters that may be included in the API endpoint URL.Note:In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body. |

| \queryParams* | Object | Additional parameters that can be appended to the API request URL for further customization. *Note:** In this workflow, query parameters may not be utilized, as the necessary information is typically provided in the request body. |

| \body* | Object | The body of the request containing payload data.  For more information on the body parameters, refer to theEnrol badge API documentation. |

| -ownerType | Enum | The module for which the badge is being issued.Supported values: LOYALTY/REFERRAL_CAMPAIGNS/JOURNEYS/AUDIENCE_CAMPAIGNS/REWARDS_CATALOG/ GOODWILL_MODULE/ MILESTONES. |

| -referenceId | String | Enter a unique identifier to identify the owner (ownerType). |

| -customers | Number | Array of customer identifiers associated with the badge |

| -requestId | Number | Enter a unique identifier to identify the request. |

| -badgeMetaId | String | Unique identifier ("id") generated during the creation of the badge. |

| source* | String | Specifies the source of goodwill point allocation eg “API”. |

| \headers* | Object | Headers provide additional context and information about the request. |

| - Authorization | String | Contains the authentication credentials needed to access the Intouch API. |

| - content-type | String | The content type of the request (application/JSON in this case). This field specifies that the payload is in JSON format, ensuring that the data is properly interpreted by the API. |

| -X-CAP-API-AUTH-ORG-ID | Number | Organisation ID |



`<https://eucrm-new.cc.capillarytech.com>`

```
/api_gateway/v1/badges/badgeMeta/customer/issueBulk
```

[Enrol badge API documentation](/reference/enroll-customers-in-badges)

```
{
  "entityInfo": {
    "tillId" : "50682289",
    "storeId": "50682288",
    "zoneId": "50682286",
    "conceptId": "50678331"
  },
  "payload":{
    "IntouchAPITask-Payload" : {
      "hostname" : "https://crm-nightly-new.cc.capillarytech.com",
      "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
      "method": "POST",
      "pathParams" : {
      },
      "body":{
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [113460811],
        "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
        "badgeMetaId": "658de01c823d1b70aabcfaae"
      },
      "headers":{
        "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
        "content-type": "application/json"
      }
    }
  }
}
```

```
{
  "entityInfo": {
    "tillId" : "50682289",
    "storeId": "50682288",
    "zoneId": "50682286",
    "conceptId": "50678331"
  },
  "payload":{
    "IntouchAPITask-Payload" : {
      "hostname" : "https://crm-nightly-new.cc.capillarytech.com",
      "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
      "method": "POST",
      "pathParams" : {
      },
      "body":{
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [113460811],
        "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
        "badgeMetaId": "658de01c823d1b70aabcfaae"
      },
      "headers":{
        "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
        "content-type": "application/json"
      }
    }
  }
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| requestId | String | Unique identifier for the request. |

| userId | Integer | Identifier for the user making the request. |

| userName | String | Email or username of the user making the request. |

| requestType | String | Type of request being made (e.g., "customer-status-change"). |

| state | String | Current state of the request (e.g., "AdminTask"). |

| startTime | DateTime | Timestamp marking the start of the request. |

| endTime | DateTime/Null | Timestamp marking the end of the request, if applicable. |

| IntouchAPITask-Payload | Object | Object containing specifics of the API call to change customer status. |

| hostname | String | The base URL of the API endpoint. |

| path | String | Specific path to the API endpoint for changing customer status. |

| method | String | HTTP method used for the request. |

| pathParams | Object | Path parameters for the API call, if any (empty in this case). |

| queryParams | Object | Query parameters for the API call, detailing aspects like source and identifier. |

| body | Object | Body of the API call, containing the reason for the status change and the new label. |

| headers | Object | Headers for the API call, including Authorization and Content-Type. |

| ValidateMakerAccess_Output | Boolean | Indicates whether maker access validation was successful. |

| ValidatePayload_Output | Boolean | Indicates whether payload validation was successful. |



```
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "issue-badge",
        "state": "AdminTask",
        "startTime": "2023-12-29T02:23:23",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "https://eu.api.capillarytech.com",
                "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
                "method": "POST",
                "pathParams": {},
                "body": {
                    "triggeredBy": {
                        "ownerType": "Goodwill_Module",
                        "referenceId": "134"
                    },
                    "customers": [
                        113460811
                    ],
                    "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
                    "badgeMetaId": "658de01c823d1b70aabcfaae"
                },
                "headers": {
                    "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
                    "content-type": "application/json"
                }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}
```

```
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "issue-badge",
        "state": "AdminTask",
        "startTime": "2023-12-29T02:23:23",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "https://eu.api.capillarytech.com",
                "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
                "method": "POST",
                "pathParams": {},
                "body": {
                    "triggeredBy": {
                        "ownerType": "Goodwill_Module",
                        "referenceId": "134"
                    },
                    "customers": [
                        113460811
                    ],
                    "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
                    "badgeMetaId": "658de01c823d1b70aabcfaae"
                },
                "headers": {
                    "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
                    "content-type": "application/json"
                }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`