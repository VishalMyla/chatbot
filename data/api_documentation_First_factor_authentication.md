# First factor authentication

Generates authentication token using customer identifier and deviceId. To use password-based authentication, the password option has to be enabled for the org. Contact the Engineering team to get a password enabled for your org.

Once the token is generated, you need to generate an OTP and validate the OTP to complete the authentication process. For password-enabled orgs, you need to verify the account for the first time.

When the token expires, you can regenerate it usingtoken/regenerate.

`token/regenerate`

1. Steps to generate token for mobile apps :Generate a token using the token/generate API. You will get sessionId (valid for 15 minutes).Using sessionId, generate an OTP.Validate the OTP using sessionId. You will get the actual token along with the non-expiry key. You can configure and set expiry for this key. Refer to thedocumentationfor more information.Use the key to regenerate token whenever required.

Steps to generate token for mobile apps :

1. Generate a token using the token/generate API. You will get sessionId (valid for 15 minutes).

2. Using sessionId, generate an OTP.

3. Validate the OTP using sessionId. You will get the actual token along with the non-expiry key. You can configure and set expiry for this key. Refer to thedocumentationfor more information.

4. Use the key to regenerate token whenever required.

6. Steps to generate token for Web application:Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).Using sessionId, generate an OTP.Validate the OTP using sessionId. You will get the actual token. The key is not generated for web applications.Use the token generated for validating the OTP to regenerate the token.

Steps to generate token for Web application:

1. Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).

2. Using sessionId, generate an OTP.

3. Validate the OTP using sessionId. You will get the actual token. The key is not generated for web applications.

4. Use the token generated for validating the OTP to regenerate the token.

11. Steps to generate token for password-based authentication:For the first time user: * Use the steps mentioned above according to the type of application - mobile app or web app .From second time:Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).Validate the password (password/validate) using the sessionId generated.

Steps to generate token for password-based authentication:

1. For the first time user: * Use the steps mentioned above according to the type of application - mobile app or web app .

2. From second time:Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).Validate the password (password/validate) using the sessionId generated.

1. Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).

2. Validate the password (password/validate) using the sessionId generated.

# Resource Information

|  |  |

| --- | --- |

| URI for Mobile App | /auth/v1/token/generate |

| URI for Web App | /auth/v1/web/token/generate |

| Rate Limited | Yes |

| Authentication | Yes |

| HTTP Method | POST |

| Batch Support | Yes |



# Request URL for mobile application

`http://{ae-host}/auth/v1/token/generate

# Request URL for web application

`http://{ae-host}/auth/v1/web/token/generate

# Body parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| identifierType* | enum | Identifier used for token generation. Values: MOBILE, EMAIL, USERNAME. |

| identifierValue* | string | Value of the specified identifierType. |

| deviceId* | string | Unique ID of the device from which the customer has generated the token. |

| brand* | string | Name of the brand or org for which authentication needs to be verified. |

| mobile** | string | Mobile number of the customer. Either the mobile number or email ID is required to authenticate with a username. |

| email** | string | Email ID of the customer. Either the mobile number or email ID is required to authenticate with a username. |

| password** | string | Password to log in to the app. |

| confirmPassword** | string | Reenter the password. |



Parameters marked with * are mandatory, and parameters with ** indicate that either mobile or email is required for authentication with a username.

`Try It!`