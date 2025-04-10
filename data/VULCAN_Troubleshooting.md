# Troubleshooting

| Error Code | Description | Reason |

| --- | --- | --- |

| 100 | User input validation error | This error indicates that the input provided by the user is incorrect in format, missing required fields, or the data does not meet validation criteria. |

| 200 | Identifier validation error | This error indicates a problem with a specific identifier, such as an application or deployment ID. It usually means the identifier is invalid or not recognized by the system. |

| 300 | Database failure | This error indicates a failure at the database level, often due to connection issues, query failures, or integrity constraints being violated. |

| 400 | Service failure | This error indicates a generic service failure, which could mean that an internal service is down, not responding, or has a fault in the service logic. |

| 500 | Utility failure | This error indicates a failure in utility functions or operations supporting the main service, such as helper functions or configuration loaders. |

| 600 | Downstream service failure | This error indicates a failure in a downstream service that the current service depends on, often due to issues with external API calls, third-party services, or microservices (Extensions,Neo Extensions, Shield). |

| 700 | Referrer validation error | This error indicates that the referrer, commonly used in HTTP requests to validate the origin of the request, is invalid. |

| 800 | Middleware validation error | This error indicates issues within the middleware layer, often related to authentication, authorization, or preprocessing steps before the main service logic is executed. |

| Uncaught Error | Remote loaded successfully butushc_crm_4000084_membercareDev4000084_MFEcould not be found! Verify that the name is correctin the Webpack configuration! | UAT or Prod mode for the application is not enabled and is currently running on localhost. |



[Extensions](/reference/introduction-extensions)

[Neo Extensions](/reference/api-extension-doc)

```
ushc_crm_4000084_membercareDev4000084_MFE
```

> 📘NoteAPI responses may return combined error codes, which include both an internal error code and an HTTP status code.For example an error code600412would mean:600: Internal error code.412: HTTP status code.Refer to theHTTP status code listfor more information.

## 📘Note

Note

API responses may return combined error codes, which include both an internal error code and an HTTP status code.

For example an error code600412would mean:

`600412`

600: Internal error code.412: HTTP status code.

Refer to theHTTP status code listfor more information.