# Validate MFA OTPpost

Use this API to validate the OTP in the MFA flow. The/mfa/otp/generateAPI generates the OTP.

`/mfa/otp/generate`

# API endpoint example

\https://eu.api.capillarytech.com/auth/v1/mfa/otp/validate'

# Resource information

|  |  |

| --- | --- |

| URI | auth/v1/mfa/otp/validate |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| identifierType* | Enum | Customer identifier used for MFA token generation. Values: MOBILE, EMAIL, USERNAME, EXTERNALID |

| identifierValue* | String | Value of the identifier. |

| deviceId* | String | Unique ID of the device where OTP is validated. |

| brand* | String | Name of the brand or organisation that needs verification. |

| sessionId* | String | Unique session ID created from/mfa/token/generateAPI. |

| otp* | String | OTP that needs validation. |



`/mfa/token/generate`

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/validate' \
--header 'Content-Type: application/json' \
--data '{
	 "identifierType":"MOBILE",
   "identifierValue":"18767431754", 
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8",
   "otp": 999999
}'
```

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/validate' \
--header 'Content-Type: application/json' \
--data '{
	 "identifierType":"MOBILE",
   "identifierValue":"18767431754", 
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8",
   "otp": 999999
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
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY5NjM0NTcsImlhdCI6MTcxNjk2MjU1Nywicm9sIjoiVVNFUiJ9.RNOnu2qd9b4CrH6ODsIc1OdeOg4EwFh7ssv0zlAG5pE",
        "key": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
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
        "token": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDQ1OHxidWtsLmluZC5zb2x1dGlvbiJdLCJleHAiOjE3MTY5NjM0NTcsImlhdCI6MTcxNjk2MjU1Nywicm9sIjoiVVNFUiJ9.RNOnu2qd9b4CrH6ODsIc1OdeOg4EwFh7ssv0zlAG5pE",
        "key": "eyJpZHYiOlsiTU9CSUxFfDE4NzY3NDMxNzU0Il0sImRldiI6IjEyMzQiLCJvcmciOiJCVUtMIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiIxNzgwNzc2IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6dHJ1ZSwiaWF0IjoxNzE2OTYyNTU3LCJyb2wiOiJBVVRIIn0.89CmFeLl_zfUBuv2Ea4eQIc3Wy8fJzlcRQad8UcqK-4"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": false
    }
}
```

`Try It!`