# Regenerate tokenpost

This API regenerates the token after successfully logging into the system using the MFA password or OTP. The key used in the request is generated from themfa/otp/validateormfa/password/validateAPI.

`mfa/otp/validate`

`mfa/password/validate`

Using this API, you can regenerate the token without going through the primary flow.

# API endpoint example

\https://eu.api.capillarytech.com/auth/v1/mfa/token/regenerate

# Prerequisites

- Validate the OTP or password in the MFA flow.

# Resource information

|  |  |

| --- | --- |

| URI | auth/v1/mfa/token/regenerate |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| deviceId* | String | Unique ID of the device used for token regeneration. |

| brand* | String | Name of the brand or organisation that needs verification. |

| key* | String | Key generated from the password/OTP validate response. |

| identifierType* | String | Type of identifier to identify the customer. Values: MOBILE, EMAIL, USERNAME, EXTERNALID |

| identifierValue* | String | Value of the identifier. |



```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/token/regenerate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=qHEKZJZpeVmP7CCaiQVbuf_cn3J2udxCwCDepAgLl1o-1717059715288-0.0.1.1-604800000' \
--data '{
    "deviceId":"1234",
    "brand":"Bukl","key":"eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4",
    "identifierType":"MOBILE",
    "identifierValue":"18767431754"
    }'
```

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/token/regenerate' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=qHEKZJZpeVmP7CCaiQVbuf_cn3J2udxCwCDepAgLl1o-1717059715288-0.0.1.1-604800000' \
--data '{
    "deviceId":"1234",
    "brand":"Bukl","key":"eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4",
    "identifierType":"MOBILE",
    "identifierValue":"18767431754"
    }'
```

# Response parameters

| Parameter | Datatype | Description |

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

| - sessionId | string | Session ID for MFA flow. The session ID is valid for 15 minutes by default. |

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
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTcwNjE0NjUsImlhdCI6MTcxNzA2MDU2NSwicm9sIjoiVVNFUiJ9.rmKqmOQyYYtEPs422G0xZ-EUFpak5i0jdrx9W4YVxJQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
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
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTcwNjE0NjUsImlhdCI6MTcxNzA2MDU2NSwicm9sIjoiVVNFUiJ9.rmKqmOQyYYtEPs422G0xZ-EUFpak5i0jdrx9W4YVxJQ",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```

`Try It!`