# Change Passwordpost

# Resource Information

|  |  |

| --- | --- |

| URI for Mobile App | /auth/v1/password/change |

| URI for Web App | /auth/v1/web/password/change |

| Rate Limited? | Yes |

| Authentication | Token-based |

| HTTP Method | POST |

| Batch Support | No |



# Request URL

For mobile application:

http://{ae-host}/auth/v1/password/change

`http://{ae-host}/auth/v1/password/change`

For web application:

http://{ae-host}/auth/v1/web/password/change

```
http://{ae-host}/auth/v1/web/password/change
```

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| identifierType* | enum | Identifier used for changing the password. Values: MOBILE, EMAIL, USERNAME. |

| identifierValue* | string | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is the mobile number. |

| deviceId** | string | Unique ID of the device used for changing the password. Applicable only for the mobile app. |

| brand | string | Name of the brand or organization associated with the current account. |

| token | string | Unique token generated for the identifierType and identifierValue. For the web application, it also includes deviceId for the mobile app. |

| password | string | Existing password of the account. |

| newPassword | string | New password the customer would like to have. |

| confirmPassword | string | Reenter the new password for confirmation. |



Parameters marked with * are mandatory.

`Try It!`