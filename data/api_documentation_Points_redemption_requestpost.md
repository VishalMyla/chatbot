# Points redemption requestpost

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

This API allows you to initiate a points redemption request.

# API endpoint example

[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/POINTS-REDEMPTION

```
[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/POINTS-REDEMPTION
```

# Prerequisites

- Authentication: Basic credentials/OAuth

- Default access group

- OU level Maker request access (CanMakeRequest).  Contact the access team for access.

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v2/request-workflow/POINTS-REDEMPTION` |

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

| - tillId | String | The unique identifier for the till associated with the transaction. |

| - storeId | String | The unique identifier for the store where the transaction occurs. |

| - zoneId | String | The unique identifier for the zone or area the store is associated with. |

| - conceptId | String | The unique identifier for the concept or branding associated with the store. |

| payload | Object | The payload provides a comprehensive understanding of the information included in the Intouch API payload for points redemption. It contains all the necessary data to facilitate a successful points redemption transaction. |

| - IntouchAPITask-Payload | Object | Information about the Intouch API task |

| - hostname* | String | Hostname for the API endpoint. Example -<https://eucrm-new.cc.capillarytech.com> |

| - path* | String | /v1.1/points/redeem. This is the endpoint for the points redemption API. |

| - method* | String | POST. The HTTP method used for the request |

| \pathParams | Object | This field is reserved for any dynamic parameters that may be included in the API endpoint URLNote:In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body. |

| \queryParams* | Object | Additional parameters that can be appended to the API request URL for further customization. For the points redemption, this may include options like skipping validation and setting the response format from intouch API. "queryParams": { "skip_validation": "true", "format": "json"} |

| \body* | Object | The body section contains the essential data for the points redemption. Refer toRedeem pointsAPI documentation for information on the body parameters. |

| points_redeemed* | String | Indicates the number of points being redeemed by the customer. This should be less than the total available points. |

| customer* | Object | Contains information about the customer initiating the redemption. For example, the mobile number of the customer. |

| redemption_time | String | Specifies the date and time of the redemption. |

| transaction_number | String | Provides a unique identifier for the transaction associated with the redemption. |

| notes | String | Allows for a brief note or reason to be provided for the redemption |

| external_reference_number | String | Represents an external reference number associated with the redemption. This can be a reference from an external system or process. |

| \headers* | Object | Headers provide additional context and information about the request. |

| - Authorization | String | Contains the authentication credentials needed to access the Intouch API. |

| - content-type | String | The content type of the request (application/JSON in this case). This field specifies that the payload is in JSON format, ensuring that the data is properly interpreted by the API. |

| X-CAP-CLIENT-SIGNATURE | String | Name of the user who is creating the request. |



`<https://eucrm-new.cc.capillarytech.com>`

`/v1.1/points/redeem`

[Redeem points](/reference/redeem-points)

```
{
    "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload" : {
            "hostname" : "<https://crm-nightly-new.cc.capillarytech.com>",
            "path": "/v1.1/points/redeem",
            "method": "POST",
            "pathParams" : {},
            "queryParams" : {
                "skip_validation" :"true",
                "format" : "json"
            },
            "body": {
                "root": {
                    "redeem": {
                        "points_redeemed": "100",
                        "customer": { "mobile": "9877792149" },
                        "redemption_time": "2020-04-15 23:01:46",
                        "transaction_number": "numbr892723330323421971280",
                        "notes": "Redemption by SMS",
                        "external_reference_number": "ACR-583523332039150121"
                    }
                }
            },
            "headers": {
                "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "jatin"
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
        "IntouchAPITask-Payload" : {
            "hostname" : "<https://crm-nightly-new.cc.capillarytech.com>",
            "path": "/v1.1/points/redeem",
            "method": "POST",
            "pathParams" : {},
            "queryParams" : {
                "skip_validation" :"true",
                "format" : "json"
            },
            "body": {
                "root": {
                    "redeem": {
                        "points_redeemed": "100",
                        "customer": { "mobile": "9877792149" },
                        "redemption_time": "2020-04-15 23:01:46",
                        "transaction_number": "numbr892723330323421971280",
                        "notes": "Redemption by SMS",
                        "external_reference_number": "ACR-583523332039150121"
                    }
                }
            },
            "headers": {
                "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "jatin"
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
        "requestId": "d9df3b65-62a7-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "points-redemption",
        "state": "AdminTask",
        "startTime": "2023-10-04T16:49:14",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://eu.api.capillarytech.com>",
                "path": "/v1.1/points/redeem",
                "method": "POST",
                "pathParams": {},
                "queryParams": {
                    "skip_validation": "true",
                    "format": "json"
                },
                "body": {
                    "root": {
                        "redeem": {
                            "points_redeemed": "100",
                            "customer": {
                                "mobile": "9877792149"
                            },
                            "redemption_time": "2020-04-15 23:01:46",
                            "transaction_number": "numbr892723330323421971280",
                            "notes": "Redemption by SMS",
                            "external_reference_number": "ACR-583523332039150121"
                        }
                    }
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-CLIENT-SIGNATURE": "jatin"
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
        "requestId": "d9df3b65-62a7-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "points-redemption",
        "state": "AdminTask",
        "startTime": "2023-10-04T16:49:14",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://eu.api.capillarytech.com>",
                "path": "/v1.1/points/redeem",
                "method": "POST",
                "pathParams": {},
                "queryParams": {
                    "skip_validation": "true",
                    "format": "json"
                },
                "body": {
                    "root": {
                        "redeem": {
                            "points_redeemed": "100",
                            "customer": {
                                "mobile": "9877792149"
                            },
                            "redemption_time": "2020-04-15 23:01:46",
                            "transaction_number": "numbr892723330323421971280",
                            "notes": "Redemption by SMS",
                            "external_reference_number": "ACR-583523332039150121"
                        }
                    }
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-CLIENT-SIGNATURE": "jatin"
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