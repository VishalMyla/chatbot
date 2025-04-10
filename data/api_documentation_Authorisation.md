# Authorisation

Authorization is the process of regulating access to API resources among authenticated users. Authorization in Capillary APIs is achieved using the Access control feature. To create and restrict access permissions for APIs, referAccess groups.

# API errors due to invalid authorisation

The application displays an error message if the store does not have access to the requested API and when the authorization status is not available.

1. Error:JSONHttpStatusCode=403
errorMessage=Not authorized. Access is denied!
errorCode=4000Reason: Not authorized to access the requested API.Solution: Make sure that the endpoint is valid and appears under the selectedResourcein the access group and that the assigned access group for the store has the appropriate permissions to perform the requested operation.

```
HttpStatusCode=403
errorMessage=Not authorized. Access is denied!
errorCode=4000
```

```
HttpStatusCode=403
errorMessage=Not authorized. Access is denied!
errorCode=4000
```

2. Error:JSONHttpStatusCode=503
errorMessage=Authorization status unavailable!
errorCode=4001Reason: Authorization status unavailableSolution: Try again after some time.

```
HttpStatusCode=503
errorMessage=Authorization status unavailable!
errorCode=4001
```

```
HttpStatusCode=503
errorMessage=Authorization status unavailable!
errorCode=4001
```