# Get details of a particular requestget

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/requests/d9df3b65-62a7-11ee-aa6d-0aaee4e533d2

```
https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/requests/d9df3b65-62a7-11ee-aa6d-0aaee4e533d2
```

# Prerequisites

- Authentication: Basic or OAuth credentials

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v2/request-workflow/requests/{requestId} |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# Path parameter

|  |  |

| --- | --- |

| requestId* | The request ID that was generated during the creation of the request. |

|  |  |



# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| requestId | String | Unique identifier for the request. |

| userId | Integer | ID of the user associated with the request. |

| userName | String | Username of the user associated with the request. |

| requestType | String | Type of the request (e.g., points-redemption). |

| state | String | Current state/status of the request (e.g., AdminTask). |

| startTime | String | Timestamp indicating the start time of the request. |

| endTime | String | Timestamp indicating the end time of the request. |

| IntouchAPITask-Payload | Object | Payload containing details of the Intouch API task. |

| ValidateMakerAccess_Output | Boolean | Output of validating maker access. |

| ValidatePayload_Output | Boolean | Output of validating payload. |



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
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
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
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
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