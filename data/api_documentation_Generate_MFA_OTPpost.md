# Generate MFA OTPpost

This API generates an OTP that the customer uses for MFA authentication. The API uses the session ID created by/mfa/token/generate.

`/mfa/token/generate`

# API endpoint example

'https://eu.api.capillarytech.com/auth/v1/mfa/otp/generate

# Resource information

|  |  |

| --- | --- |

| URI | /auth/v1/mfa/otp/generate |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| identifierType* | Enum | Customer identifier used for MFA token generation. Values: MOBILE, EMAIL, USERNAME, EXTERNALID |

| identifierValue* | String | Value of the identifier. For example, if identifierType is MOBILE, the identifierValue is mobile number. If you want to send the OTP to WhatsApp or Zalo, you need to raise a JIRA ticket to the sustenance team todefine the related configurationsand configure the templates. |

| deviceId* | String | Device ID of the customer that receives OTP. |

| brand* | String | Name of the brand or organisation that needs verification. |

| sessionId* | String | Unique session ID created from/mfa/token/generateAPI. |



[define the related configurations](/reference/authentication-configurations#integrating-whatsapp-and-zalo-for-otp-communication)

`/mfa/token/generate`

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/generate' \
--header 'Content-Type: application/json' \
--data '{
   "identifierType":"MOBILE",
   "identifierValue":"18767431754",
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8"
}'
```

```
curl --location 'https://eu.api.capillarytech.com/auth/v1/mfa/otp/generate' \
--header 'Content-Type: application/json' \
--data '{
   "identifierType":"MOBILE",
   "identifierValue":"18767431754",
    "deviceId": "1234",
    "brand": "Bukl",
    "sessionId": "P-b04c1001-ef08-4125-9886-f9d8b4c5d9b8"
}'
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | object | Object containing status information. |

| - success | boolean | Boolean indicating the status of the request. |

| - code | integer | HTTP status code indicating the result. Example: 200 indicates success. |

| - message | string | Message describing the status of the request. |



```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    }
}
```

`Try It!`