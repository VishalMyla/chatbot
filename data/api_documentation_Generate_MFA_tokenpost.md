# Generate MFA tokenpost

This API generates the MFA token using the device ID, customer identifier type, value, and the token generated from OTP validation in the primary flow.  SeeValidate OTP in First factor flow.

# API endpoint example

'https://eu.api.capillarytech.com/auth/v1/mfa/token/generate

# Prerequisites

- Your organisation has enabled MFA.

- Validation of OTP from the primary or First factor flow.

# Resource information

|  |  |

| --- | --- |

| URI | auth/v1/mfa/token/generate |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| identifierType* | Enum | Identifier used for MFA token generation. Values: MOBILE, EMAIL, USERNAME, EXTERNALID |

| identifierValue* | String | Value of the identifier. |

| deviceId* | String | Unique ID of the device from which the customer generates the token. |

| brand* | String | Name of the brand or organisation that needs verification. |

| authorizedToken* | String | Authentication token from/otp/validate\of First factor. |



`/otp/validate\`

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/token/generate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=TQelvcvKiKe5DWhd.tGG6g.Hq0IJI4FnRacxB4UYCyI-1716799831120-0.0.1.1-604800000' \
--data '{
   "identifierType":"MOBILE",
   "identifierValue":"18795774754",
    "deviceId": "1234",
    "brand": "Bukl",
    "authorizedToken":"eyJpZHYiOlsiTU9CSUxFfDE4Nzk1Nzc0NzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzc2NDI4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY4OTM0NzcsImlhdCI6MTcxNjg4OTg3Nywicm9sIjoiVVNFUiJ9.yGDKE9uFYx_UdCfQNG8lDHVqr1VBjcIzZa1vxdsO97o"
}'
```

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/token/generate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=TQelvcvKiKe5DWhd.tGG6g.Hq0IJI4FnRacxB4UYCyI-1716799831120-0.0.1.1-604800000' \
--data '{
   "identifierType":"MOBILE",
   "identifierValue":"18795774754",
    "deviceId": "1234",
    "brand": "Bukl",
    "authorizedToken":"eyJpZHYiOlsiTU9CSUxFfDE4Nzk1Nzc0NzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzc2NDI4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY4OTM0NzcsImlhdCI6MTcxNjg4OTg3Nywicm9sIjoiVVNFUiJ9.yGDKE9uFYx_UdCfQNG8lDHVqr1VBjcIzZa1vxdsO97o"
}'
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | object | Object containing status information. |

| - success | boolean | Boolean indicating the status of the request. |

| - code | integer | HTTP status code indicating the result. Example: 200 indicates success. |

| - message | string | Message describing the status of the request. |

| auth | object | Object containing authentication details. |

| - token | string | String representing the authentication token. By default, the token is valid for 15 minutes. |

| - key | string | String representing the authentication key. |

| user | object | Object containing user details. |

| - appRegistered | boolean | Indicates if the user is registered in the app. |

| - sessionId | string | Current session ID for MFA flow. The session ID is valid for 15 minutes by default. |

| - role | string | Indicates the user's role. Example: VIEW, USER. |

| - userRegisteredForPassword | boolean | Indicates if the user is registered for a password. |



```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4Nzk1Nzc0NzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY4OTA4MjIsImlhdCI6MTcxNjg4OTkyMiwicm9sIjoiVklFVyJ9.nL6iCjXIrfEb02uDnnJTyj0uPi8teQjAgnQPVU0_aqQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": "P-a2996f83-a72d-405c-aa23-0eed7a7dba1e",
        "role": "VIEW",
        "userRegisteredForPassword": false
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4Nzk1Nzc0NzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY4OTA4MjIsImlhdCI6MTcxNjg4OTkyMiwicm9sIjoiVklFVyJ9.nL6iCjXIrfEb02uDnnJTyj0uPi8teQjAgnQPVU0_aqQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": "P-a2996f83-a72d-405c-aa23-0eed7a7dba1e",
        "role": "VIEW",
        "userRegisteredForPassword": false
    }
}
```

`Try It!`