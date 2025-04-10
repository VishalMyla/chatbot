# Change identifier on Auth enginepost

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

This API enables you to change identifier values in the Auth engine database. Whenever a user updates the email or mobile number on Intouch, the same changes are not reflected in the Auth engine database, potentially causing usability issues for users when using the brand's applications. To avoid this issue, the API needs to be integrated into the app's change identifier flow. The app must make an additional call to ensure that the identifier updates are also reflected in the Auth engine database.

> ❗️To be notedThe UpdateIdentifier API call updates the IdentifierValue corresponding to the old IdentifierValue. For instance, if the old IdentifierValue is "Mobile," the new IdentifierValue can be updated to a mobile number, and not an email.

## ❗️To be noted

To be noted

The UpdateIdentifier API call updates the IdentifierValue corresponding to the old IdentifierValue. For instance, if the old IdentifierValue is "Mobile," the new IdentifierValue can be updated to a mobile number, and not an email.

# Prerequisites

- Valid token generated using auth/v1/web/token/generate

- You can use this API only after successfully login into the system using primary/MFA OTP or MFA/primary password

# Resource information

|  |  |

| --- | --- |

| HTTP method | POST |

| URI | auth/v1/user/updateIdentifierValue |



# Body parameters

| Parameter | Type | Description |

| --- | --- | --- |

| newIdentifierValue | String | The new identifier value |

| identifierType | String | The type of identifier (MOBILE, EMAIL) |

| identifierValue | String | The old identifier value (e.g., 919988776655). Make sure that the identifier value matches with the value on Intouch. |

| brand | String | The brand name (e.g., BUKL) |

| token | String | Token generated using auth/v1/web/token/generate |

| deviceId | String | Unique ID of the device from which the customer has generated the token. |



```
{
    "newIdentifierValue": "[email protected]",
    "identifierType": "EMAIL",
    "identifierValue":"[email protected]",
   "brand": "SOLAPIPOCNEW",
    "token":"eyJpZHYiOlsiRU1BSUx8c2hhc3dhdHJhbmFqbi5vZGlzaGFAZ21haWwuY29tIl0sImRldiI6IjEyMzQiLCJvcmciOiJTT0xBUElQT0NORVciLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE0MTh8aW1wb3J0LmRiLjEiXSwiZXhwIjoxNzEyOTM4MTU0LCJpYXQiOjE3MTI5MzQ1NTQsInJvbCI6IlZJRVcifQ.o93F9MBVki9H1AXypbvHKYULLno_jeikrgOL5rlKM58",
    "deviceId":1234
}
```

```
{
    "newIdentifierValue": "[email protected]",
    "identifierType": "EMAIL",
    "identifierValue":"[email protected]",
   "brand": "SOLAPIPOCNEW",
    "token":"eyJpZHYiOlsiRU1BSUx8c2hhc3dhdHJhbmFqbi5vZGlzaGFAZ21haWwuY29tIl0sImRldiI6IjEyMzQiLCJvcmciOiJTT0xBUElQT0NORVciLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE0MTh8aW1wb3J0LmRiLjEiXSwiZXhwIjoxNzEyOTM4MTU0LCJpYXQiOjE3MTI5MzQ1NTQsInJvbCI6IlZJRVcifQ.o93F9MBVki9H1AXypbvHKYULLno_jeikrgOL5rlKM58",
    "deviceId":1234
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| status | Object | An object containing status details |

| success | Boolean | Indicates whether the operation was successful (true or false) |

| code | Integer | The status code associated with the response (e.g., 200) |

| message | String | A message providing additional information about the status (e.g., "SUCCESS") |



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

```
{
    "status": {
        "success": false,
        "code": 1519,
        "message": "Invalid details for respective API"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 1519,
        "message": "Invalid details for respective API"
    }
}
```

`Try It!`