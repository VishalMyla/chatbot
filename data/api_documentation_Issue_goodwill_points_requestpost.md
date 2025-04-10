# Issue goodwill points requestpost

This API endpoint enables initiating a Goodwill points Workflow, enabling the allocation of goodwill points to a customer.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/GOODWILL-POINTS

```
[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/GOODWILL-POINTS
```

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

- Maker request access (CanMakeRequest).  Contact the access team for access.

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v2/request-workflow/GOODWILL-POINTS` |

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

| payload | Object | The Intouch payload for the Goodwill points Workflow is a structured set of data that facilitates the allocation of goodwill points within the Intouch system. This payload contains specific information required to execute this operation. |

| - IntouchAPITask-Payload | Object | Information about the Intouch API task |

| - hostname* | String | Hostname for the API endpoint. Example -<https://eucrm-new.cc.capillarytech.com> |

| - path* | String | /internal/goodwill/. This path denotes the endpoint within the API that manages the allocation of goodwill points. It defines the action that needs to be performed, which in this case, is the allocation of goodwill points |

| - method* | String | POST. The HTTP method used for the request |

| \pathParams | Object | This field is reserved for any dynamic parameters that may be included in the API endpoint URL.Note:In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body. |

| \queryParams* | Object | Additional parameters that can be appended to the API request URL for further customization. *Note:** In this workflow, query parameters may not be utilized, as the necessary information is typically provided in the request body. |

| \body* | Object | The body section contains the essential data for the goodwill points operation |

| referenceId* | String | Unique reference ID for the request |

| reason*: | String | This field specifies the reason for the goodwill points allocation. It might include information like why the goodwill points allocation is being done. |

| baseType*: | String | This indicates the type of entity that we are allocating. POINTS, in this case. |

| programId* | Number | Specifies the loyalty program ID for which goodwill points allocation is taking place. |

| awardingTillId* | Number | Specifies the till ID from which goodwill points allocation is taking place. |

| earningEntityType* | String | Specifies the entity Type for which goodwill point allocation is taking place, eg “CUSTOMER“. |

| earningEntityId* | Number | Specifies the ID of the user for which goodwill point allocation is taking place |

| points* | Number | Specifies the amount of points to be allocated |

| source* | String | Specifies the source of goodwill point allocation eg “API”. |

| \headers* | Object | Headers provide additional context and information about the request. |

| - Authorization | String | Contains the authentication credentials needed to access the Intouch API. |

| - content-type | String | The content type of the request (application/JSON in this case). This field specifies that the payload is in JSON format, ensuring that the data is properly interpreted by the API. |

| -X-CAP-API-AUTH-ORG-ID | Number | Organisation ID |



`<https://eucrm-new.cc.capillarytech.com>`

`/internal/goodwill/`

```
{   "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload":{
        "IntouchAPITask-Payload" : {          
            "hostname" : "http://internal-intouch-api.default:1900",
            "path": "/internal/goodwill/",
            "method": "POST",
            "pathParams" : {      
            },
            "queryParams" : {
            },
            "body":{
	            "referenceId":"ref_id_1299314173",
                "reason":"reason",
                "baseType":"POINTS",
                "programId":2739,
                "awardingTillId":50682616,
                "earningEntityType":"CUSTOMER",
                "earningEntityId":382332518,
                "points":20,
                "source":"API"
                },
            "headers":{
                "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                "content-type": "application/json",
                "X-CAP-API-AUTH-ORG-ID": "51250"
            }
        }
    }
}
```

```
{   "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload":{
        "IntouchAPITask-Payload" : {          
            "hostname" : "http://internal-intouch-api.default:1900",
            "path": "/internal/goodwill/",
            "method": "POST",
            "pathParams" : {      
            },
            "queryParams" : {
            },
            "body":{
	            "referenceId":"ref_id_1299314173",
                "reason":"reason",
                "baseType":"POINTS",
                "programId":2739,
                "awardingTillId":50682616,
                "earningEntityType":"CUSTOMER",
                "earningEntityId":382332518,
                "points":20,
                "source":"API"
                },
            "headers":{
                "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                "content-type": "application/json",
                "X-CAP-API-AUTH-ORG-ID": "51250"
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
        "requestId": "ffcf19fb-a3fd-11ee-9fa7-4650f67465b8",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "goodwill-points",
        "state": "AdminTask",
        "startTime": "2023-12-26T20:19:40",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "http://internal-intouch-api.default:1900",
                "path": "/internal/goodwill/",
                "method": "POST",
                "pathParams": {},
                "queryParams": {},
                "body": {
                    "referenceId": "ref_id_1299314173",
                    "reason": "reason",
                    "baseType": "POINTS",
                    "programId": 2739,
                    "awardingTillId": 50682616,
                    "earningEntityType": "CUSTOMER",
                    "earningEntityId": 382332518,
                    "points": 20,
                    "source": "API"
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-API-AUTH-ORG-ID": "51250"
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
        "requestId": "ffcf19fb-a3fd-11ee-9fa7-4650f67465b8",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "goodwill-points",
        "state": "AdminTask",
        "startTime": "2023-12-26T20:19:40",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "http://internal-intouch-api.default:1900",
                "path": "/internal/goodwill/",
                "method": "POST",
                "pathParams": {},
                "queryParams": {},
                "body": {
                    "referenceId": "ref_id_1299314173",
                    "reason": "reason",
                    "baseType": "POINTS",
                    "programId": 2739,
                    "awardingTillId": 50682616,
                    "earningEntityType": "CUSTOMER",
                    "earningEntityId": 382332518,
                    "points": 20,
                    "source": "API"
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-API-AUTH-ORG-ID": "51250"
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