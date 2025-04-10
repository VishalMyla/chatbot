# Change customer status requestpost

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

This API allows you to initiate a request to change the customer status of a customer.

# API endpoint example

[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE

```
[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE
```

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

- Maker request access (CanMakeRequest). Contact the access team for access.

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v2/request-workflow/{requestType} |

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

The request body contains essential entity information, including store, zone, and concept identifiers, along with a payload for the Intouch API task.

| Parameter (Parameters marked * are mandatory) | Type | Description |

| --- | --- | --- |

| entityInfo* | Object | Information about the entity (till, store, zone, concept) |

| - tillId* | String | The unique identifier for the till associated with the transaction. |

| - storeId* | String | The unique identifier for the store where the transaction occurs. |

| - zoneId* | String | The unique identifier for the zone or area the store is associated with. |

| - conceptId* | String | The unique identifier for the concept or branding associated with the store. |

| payload | Object | The Intouch payload for the Customer Status Change Workflow is a structured data set that facilitates changing a customer's status within the Intouch system. This payload contains specific information required to execute this operation. |

| - IntouchAPITask-Payload | Object | Information about the Intouch API task |

| - hostname* | String | Hostname for the API endpoint. Example -<https://eucrm-new.cc.capillarytech.com> |

| - path* | String | /v2/customers/lookup/status. This is the API that manages customer status changes. |

| - method* | String | PUT. The HTTP method used for the request |

| \pathParams | Object | Parameters to be included in the endpoint path. SeeUpdate customer status APIfor information on the path parameters.Note:In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body. |

| \queryParams* | Object | Parameters to be included in the query string. SeeUpdate customer status APIfor information on the path parameters. |

| - source | String | The source of the request (e.g., INSTORE) |

| - accountId | String | The account ID (empty in this case) |

| - use_async | String | Indicates whether the request should be processed asynchronously. When a request is processed asynchronously, the program doesn't wait for the response before continuing to execute other tasks. Instead, it proceeds with its operations while the request is being processed in the background.In this specific case, setting "use_async" to "false" means that the request should be processed synchronously, meaning that the program will wait for the response before moving on to other tasks. |

| - identifierName | String | The type of the identifier. Supported values: mobile, email, externalId, cardnumber, cardExternalId, wechat, fbid, and martjackId. |

| - identifierValue | String | The value of the identifier (e.g., 919780375691 for mobile) |

| \body* | Object | The body section contains the essential data for the status change operation |

| - reason | String | This field indicates the reason for the status change. It may include information such as why the status is being updated (e.g., for testing purposes) |

| - label | String | The label indicates the new status that is to be assigned to the customer. For example, "Suspended" or "Active". |

| \headers* | Object | Headers provide additional context and information about the request. |

| - Authorization | String | Contains the authentication credentials needed to access the Intouch API. |

| - content-type | String | The content type of the request (application/JSON in this case). This field specifies that the payload is in JSON format, ensuring that the data is properly interpreted by the API. |



`<https://eucrm-new.cc.capillarytech.com>`

`/v2/customers/lookup/status`

[Update customer status API](/reference/update-customer-status)

[Update customer status API](/reference/update-customer-status)

```
{
    "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "<https://eu.api.capillarytech.com>",
            "path": "/v2/customers/lookup/status",
            "method": "POST",
            "pathParams": {},
            "queryParams": {
                "source": "INSTORE",
                "accountId": "",
                "use_async": "false",
                "identifierName": "mobile",
                "identifierValue": "919780375690"
            },
            "body": {
                "reason": "testing",
                "label": "Suspended"
            },
            "headers": {
                "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
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
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "<https://eu.api.capillarytech.com>",
            "path": "/v2/customers/lookup/status",
            "method": "POST",
            "pathParams": {},
            "queryParams": {
                "source": "INSTORE",
                "accountId": "",
                "use_async": "false",
                "identifierName": "mobile",
                "identifierValue": "919780375690"
            },
            "body": {
                "reason": "testing",
                "label": "Suspended"
            },
            "headers": {
                "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
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
        "requestId": "113cff87-62a5-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "customer-status-change",
        "state": "AdminTask",
        "startTime": "2023-10-04T16:29:19",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                "path": "/v2/customers/lookup/status",
                "method": "PUT",
                "pathParams": {},
                "queryParams": {
                    "source": "INSTORE",
                    "accountId": "",
                    "use_async": "false",
                    "identifierName": "mobile",
                    "identifierValue": "919780375690"
                },
                "body": {
                    "reason": "testing",
                    "label": "Suspended"
                },
                "headers": {
                    "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
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
        "requestId": "113cff87-62a5-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "customer-status-change",
        "state": "AdminTask",
        "startTime": "2023-10-04T16:29:19",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                "path": "/v2/customers/lookup/status",
                "method": "PUT",
                "pathParams": {},
                "queryParams": {
                    "source": "INSTORE",
                    "accountId": "",
                    "use_async": "false",
                    "identifierName": "mobile",
                    "identifierValue": "919780375690"
                },
                "body": {
                    "reason": "testing",
                    "label": "Suspended"
                },
                "headers": {
                    "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
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