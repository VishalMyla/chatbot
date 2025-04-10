# Validate OTPpost

# Resource Information

|  |  |

| --- | --- |

| URI for Mobile App | auth/v1/otp/validate |

| URI for Web App | auth/v1/web/otp/validate |

| Rate Limited? | Yes |

| Authentication | No |

| HTTP Method | POST |

| Batch Support | Yes |



`auth/v1/otp/validate`

`auth/v1/web/otp/validate`

# Request URL

For mobile application:

http://{ae-host}/auth/v1/otp/validate

`http://{ae-host}/auth/v1/otp/validate`

For web application:

http://{ae-host}/auth/v1/web/otp/validate

```
http://{ae-host}/auth/v1/web/otp/validate
```

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| identifierType* | enum | Identifier used to generate OTP. Values: MOBILE, EMAIL, USERNAME. |

| identifierValue* | string | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is mobile number. |

| deviceId** | string | Unique ID of the device associated with the OTP. Not applicable for web application. |

| brand* | string | Name of the brand or org associated with the OTP. |

| sessionId* | string | Session ID generated through thev1/token/generateAPI. |

| otp* | long | Validation code received by the customer (either to the mobile number or email ID provided).Note:You canconfigure maximum retriesas well asaccount lockingafter several defined unsuccessful attempts to enter the correct OTP. |



`v1/token/generate`

[configure maximum retries](/reference/authentication-configurations#defining-maximum-otp-retry-attempts)

[account locking](/reference/authentication-configurations#account-locking-feature)

Parameters marked with * are mandatory.

# Response parameters

| Parameter | Description |

| --- | --- |

| status | Object containing status information |

| - success | Boolean indicating the success status |

| - code | Number indicating the status code (e.g., 200 for success) |

| - message | String providing a message related to the status |

| auth | Object containing authentication information |

| - token | String representing the authentication token. By default,  the token is valid for 15 minutes. |

| - key | String representing the authentication key. This key has no validity and can be used to regenerate the authentication token. It is recommended to set an expiry of the key to avoid unauthorized usage. For more information, refer to the sectionConfiguring validity for the key. |

| user | Object containing user information |

| - appRegistered | Boolean indicating if the user is registered in the app |

| - sessionId | Value representing the user's session ID |

| - role | String indicating the user's role (e.g., "USER") |

| - userRegisteredForPassword | Boolean indicating if the user is registered for a password |



[Configuring validity for the key](/reference/authentication-configurations#configuring-validity-for-the-key)

`Try It!`