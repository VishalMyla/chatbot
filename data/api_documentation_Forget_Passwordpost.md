# Forget Passwordpost

# Resource Information

|  |  |

| --- | --- |

| URI for Mobile App | auth/v1/password/forget |

| URI for Web App | auth/v1/web/password/forget |

| Rate Limited? | Indicates whether the operation is rate-limited. |

| Authentication | Specifies whether authentication is required for the operation. |

| HTTP Method | The HTTP method used for the operation. |

| Batch Support | Indicates whether batch processing is supported for the operation. |



# Request URL

For mobile application:

`http://{ae-host}/auth/v1/password/forget

`For web application:

http://{ae-host}/auth/v1/web/password/forget

```
http://{ae-host}/auth/v1/web/password/forget
```

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| identifierType* | enum | Values: MOBILE, EMAIL, USERNAME. |

| identifierValue* | string | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is a mobile number. |

| deviceId** | string | Unique ID of the device used to reset the password. |

| brand* | string | Name of the brand or organization associated with the current account. |

| sessionId* | string | Unique sessionId generated for the identifierType and deviceId combination. |

| password* | string | New password for the account. |

| confirmPassword* | string | Reenter the new password. |



Parameters marked with * are mandatory

`Try It!`